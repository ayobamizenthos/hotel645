import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Smartphone, Share, Plus, Check, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Detect iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // Listen for install prompt
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);
    
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) {
      if (isIOS) {
        setShowIOSGuide(true);
      }
      return;
    }

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === "accepted") {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  const features = [
    { icon: Smartphone, title: "Works Offline", desc: "Access hotel info without internet" },
    { icon: Download, title: "Instant Loading", desc: "Pages load in milliseconds" },
    { icon: Share, title: "Easy Access", desc: "Launch from your home screen" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              {/* App Icon Preview with Text Logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative w-28 h-28 mx-auto mb-8 flex items-center justify-center"
              >
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 to-royal/20 blur-xl" />
                <div className="relative flex flex-col items-center">
                  <div className="flex items-baseline">
                    <span className="font-display text-5xl font-semibold text-foreground">6</span>
                    <span className="font-display text-5xl font-semibold text-primary mx-0.5 animate-pulse">:</span>
                    <span className="font-display text-5xl font-semibold text-foreground">45</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primary/80 mt-1">Suites</span>
                </div>
              </motion.div>

              <h1 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
                Install <span className="text-gradient-gold">6:45 Suites</span>
              </h1>
              <p className="text-foreground/50 max-w-md mx-auto">
                Add our app to your home screen for the best experience
              </p>
            </motion.div>

            {/* Status */}
            {isInstalled ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-gold rounded-3xl p-8 text-center mb-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-display font-medium text-foreground mb-2">
                  Already Installed!
                </h2>
                <p className="text-foreground/60 mb-6">
                  6:45 Hotels is on your home screen
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium"
                >
                  <span>Open App</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                {/* Install Button */}
                <button
                  onClick={handleInstall}
                  className="w-full p-6 glass-premium rounded-2xl flex items-center justify-between hover:border-primary/30 border border-transparent transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Download className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-display font-medium text-foreground">
                        {isIOS ? "Add to Home Screen" : "Install App"}
                      </h3>
                      <p className="text-sm text-foreground/50">
                        {isIOS ? "Tap to see instructions" : "One tap installation"}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary transition-transform group-hover:translate-x-1" />
                </button>

                {/* Features */}
                <div className="grid grid-cols-3 gap-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="glass-premium p-4 rounded-xl text-center"
                    >
                      <feature.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                      <h4 className="text-xs font-medium text-foreground mb-1">{feature.title}</h4>
                      <p className="text-[10px] text-foreground/50">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* iOS Instructions Modal */}
            {showIOSGuide && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-background/90 backdrop-blur-xl"
              >
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="w-full max-w-md glass-premium rounded-3xl p-6 relative"
                >
                  <button
                    onClick={() => setShowIOSGuide(false)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
                  >
                    <X className="w-5 h-5 text-foreground/60" />
                  </button>

                  <h3 className="text-xl font-display font-medium text-foreground mb-6 text-center">
                    Install on iPhone/iPad
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-medium text-primary">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Tap the Share button</p>
                        <p className="text-sm text-foreground/50">At the bottom of Safari</p>
                        <div className="mt-2 p-2 bg-muted rounded-lg inline-flex">
                          <Share className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-medium text-primary">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Scroll and tap "Add to Home Screen"</p>
                        <div className="mt-2 p-2 bg-muted rounded-lg inline-flex items-center gap-2">
                          <Plus className="w-5 h-5 text-primary" />
                          <span className="text-sm text-foreground">Add to Home Screen</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-medium text-primary">3</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Tap "Add"</p>
                        <p className="text-sm text-foreground/50">The app will appear on your home screen</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowIOSGuide(false)}
                    className="w-full mt-6 py-3 bg-primary text-primary-foreground rounded-full font-medium"
                  >
                    Got it
                  </button>
                </motion.div>
              </motion.div>
            )}

            {/* Skip option */}
            {!isInstalled && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center mt-8"
              >
                <Link to="/" className="text-foreground/40 hover:text-foreground/60 text-sm transition-colors">
                  Continue without installing →
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Install;
