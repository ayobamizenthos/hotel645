import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const InstallPromptBanner = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // Always show banner after splash screen ends (4s) on every page load
    const timer = setTimeout(() => setShowBanner(true), 4000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      clearTimeout(timer);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowBanner(false);
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      // iOS - redirect to install page
      window.location.href = '/install';
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('pwa-banner-dismissed', Date.now().toString());
  };

  if (isInstalled || !showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 100, opacity: 0, scale: 0.9 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          mass: 1
        }}
        className="fixed bottom-20 sm:bottom-24 left-2 right-2 z-50 sm:left-auto sm:right-6 sm:max-w-xs md:max-w-sm"
      >
        {/* Outer glow - royal blue + gold */}
        <motion.div 
          className="absolute -inset-2 rounded-2xl blur-xl opacity-50"
          style={{
            background: 'linear-gradient(135deg, hsl(215 55% 35% / 0.5), hsl(43 74% 49% / 0.4), hsl(215 55% 35% / 0.5))'
          }}
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Main banner */}
        <div 
          className="relative overflow-hidden rounded-2xl border backdrop-blur-xl"
          style={{
            background: 'linear-gradient(135deg, hsl(218 45% 12% / 0.98), hsl(220 50% 8% / 0.98))',
            borderColor: 'hsl(43 74% 49% / 0.25)'
          }}
        >
          {/* Shimmer effect */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, hsl(43 74% 49% / 0.08), transparent)'
            }}
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />
          
          {/* Gold accent line */}
          <div 
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background: 'linear-gradient(90deg, transparent, hsl(43 74% 49%), transparent)'
            }}
          />
          
          <div className="relative p-3 sm:p-4">
            <div className="flex items-start gap-3">
              {/* Text Logo - matching header */}
              <motion.div 
                className="flex-shrink-0"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-baseline">
                  <span className="font-display text-2xl font-medium text-foreground">6</span>
                  <span className="font-display text-2xl font-medium text-primary">:</span>
                  <span className="font-display text-2xl font-medium text-foreground">45</span>
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-sm sm:text-base font-semibold mb-0.5 text-foreground">
                  Install App
                </h3>
                <p className="text-xs sm:text-sm text-foreground/50 leading-tight">
                  Add to home screen
                </p>
              </div>

              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="flex-shrink-0 p-1 rounded-full text-foreground/40 hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Install button */}
            <motion.button
              onClick={handleInstall}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-3 w-full relative group overflow-hidden"
            >
              <div className="relative flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium bg-primary text-primary-foreground text-sm">
                <Download className="w-4 h-4" />
                <span className="font-semibold">Install</span>
              </div>
            </motion.button>
          </div>
          
          {/* Bottom blue accent */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent, hsl(215 55% 35% / 0.5), transparent)'
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InstallPromptBanner;
