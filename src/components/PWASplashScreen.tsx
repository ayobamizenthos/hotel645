import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo.png';

const PWASplashScreen = () => {
  const [showSplash, setShowSplash] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Only show splash when launched from home screen (standalone mode)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isIOSStandalone = (window.navigator as any).standalone === true;
    
    // Check session to avoid showing on every route change
    const hasShownSplash = sessionStorage.getItem('splash-shown');
    
    if ((isStandalone || isIOSStandalone) && !hasShownSplash) {
      setShowSplash(true);
      sessionStorage.setItem('splash-shown', 'true');
      
      // Start exit animation after 2.8 seconds
      setTimeout(() => setIsExiting(true), 2800);
      // Hide completely after animation
      setTimeout(() => setShowSplash(false), 3500);
    }
  }, []);

  if (!showSplash) return null;

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isExiting ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, hsl(215 45% 12%) 0%, hsl(220 50% 8%) 50%, hsl(225 55% 5%) 100%)'
          }}
        >
          {/* Deep luxury background layers */}
          <div className="absolute inset-0">
            {/* Animated radial glow - royal blue */}
            <motion.div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse 80% 60% at 50% 50%, hsl(215 60% 25% / 0.4) 0%, transparent 60%)'
              }}
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Secondary gold glow */}
            <motion.div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse 50% 40% at 50% 55%, hsl(43 74% 49% / 0.1) 0%, transparent 50%)'
              }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Geometric diamond pattern - premium tessellation */}
            <div className="absolute inset-0 opacity-[0.06]">
              <svg className="w-full h-full">
                <defs>
                  <linearGradient id="pattern-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(43 74% 60%)" />
                    <stop offset="100%" stopColor="hsl(215 60% 50%)" />
                  </linearGradient>
                </defs>
                <pattern id="splash-diamonds-premium" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <polygon points="40,0 80,40 40,80 0,40" fill="none" stroke="url(#pattern-gradient)" strokeWidth="0.5" />
                  <polygon points="40,20 60,40 40,60 20,40" fill="none" stroke="url(#pattern-gradient)" strokeWidth="0.3" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#splash-diamonds-premium)" />
              </svg>
            </div>

            {/* Floating orbs - royal blue */}
            <motion.div
              className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, hsl(215 60% 35% / 0.25) 0%, transparent 70%)' }}
              animate={{ 
                x: [0, 40, 0],
                y: [0, -30, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/6 w-72 h-72 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, hsl(43 74% 49% / 0.15) 0%, transparent 70%)' }}
              animate={{ 
                x: [0, -35, 0],
                y: [0, 35, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            
            {/* Top corner accent */}
            <motion.div
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, hsl(215 50% 30% / 0.3) 0%, transparent 60%)' }}
              animate={{ 
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Logo container */}
          <motion.div 
            className="relative z-10 flex flex-col items-center"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.16, 1, 0.3, 1], 
              delay: 0.1 
            }}
          >
            {/* Logo with effects */}
            <motion.div
              className="relative"
              animate={isExiting ? { scale: 1.15, opacity: 0, y: -20 } : {}}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Multi-layer glow effect */}
              <motion.div 
                className="absolute -inset-8 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, hsl(43 74% 49% / 0.3) 0%, hsl(215 60% 40% / 0.15) 50%, transparent 70%)' }}
                animate={{ 
                  scale: [1, 1.25, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Secondary ring glow */}
              <motion.div 
                className="absolute -inset-4 rounded-full"
                style={{ 
                  background: 'conic-gradient(from 0deg, hsl(43 74% 49% / 0.2), hsl(215 60% 50% / 0.1), hsl(43 74% 49% / 0.2))',
                  filter: 'blur(20px)'
                }}
                animate={{ 
                  rotate: [0, 360]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Logo image */}
              <motion.img 
                src={logo}
                alt="6:45 Suites"
                className="relative w-52 h-52 md:w-64 md:h-64 object-contain drop-shadow-2xl"
                animate={{ 
                  rotateY: [0, 5, -5, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  filter: 'drop-shadow(0 0 30px hsl(43 74% 49% / 0.4)) drop-shadow(0 20px 40px hsl(0 0% 0% / 0.5))'
                }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p 
              className="mt-10 text-xs uppercase tracking-[0.35em] font-light"
              style={{ color: 'hsl(43 60% 70%)' }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: isExiting ? 0 : 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Luxury · Comfort · Transparency
            </motion.p>

            {/* Premium loading bar */}
            <motion.div 
              className="mt-14 w-32 h-[2px] rounded-full overflow-hidden"
              style={{ background: 'hsl(215 40% 20%)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isExiting ? 0 : 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ 
                  background: 'linear-gradient(90deg, hsl(43 74% 55%), hsl(43 74% 49%), hsl(38 70% 45%))'
                }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.2, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
              />
            </motion.div>
          </motion.div>

          {/* Bottom gold accent line */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-[3px]"
            style={{
              background: 'linear-gradient(90deg, transparent, hsl(43 74% 49% / 0.6), hsl(43 74% 55% / 0.8), hsl(43 74% 49% / 0.6), transparent)'
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          />
          
          {/* Top subtle line */}
          <motion.div 
            className="absolute top-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent, hsl(215 50% 40% / 0.3), transparent)'
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PWASplashScreen;
