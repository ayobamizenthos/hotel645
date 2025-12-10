import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Check if splash has been shown in this session
    const hasShown = sessionStorage.getItem("splashShown");
    if (hasShown) {
      setIsVisible(false);
      setIsAnimating(false);
      return;
    }

    // Animation timeline
    const animationTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 2800);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("splashShown", "true");
    }, 3200);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible && !isAnimating) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/10 rounded-full blur-[80px] sm:blur-[100px]"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 2, delay: 0.8 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-primary/20 rounded-full blur-[60px] sm:blur-[80px]"
            />
          </div>

          {/* Geometric accent lines */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.1 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.3 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                style={{
                  top: `${30 + i * 13}%`,
                  left: '5%',
                  right: '5%',
                  transformOrigin: 'center',
                }}
              />
            ))}
          </div>

          {/* Main logo container */}
          <div className="relative flex flex-col items-center px-4">
            {/* Logo */}
            <div className="flex items-baseline">
              {/* 6 */}
              <motion.span
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium text-foreground"
                style={{ perspective: 1000 }}
              >
                6
              </motion.span>

              {/* Colon with pulse */}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium text-primary relative mx-0.5 sm:mx-1"
              >
                <motion.span
                  animate={{ 
                    textShadow: [
                      "0 0 20px hsl(var(--primary)/0.5)",
                      "0 0 40px hsl(var(--primary)/0.8)",
                      "0 0 20px hsl(var(--primary)/0.5)",
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                >
                  :
                </motion.span>
              </motion.span>

              {/* 4 */}
              <motion.span
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium text-foreground"
                style={{ perspective: 1000 }}
              >
                4
              </motion.span>

              {/* 5 */}
              <motion.span
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium text-foreground"
                style={{ perspective: 1000 }}
              >
                5
              </motion.span>
            </div>

            {/* Suites text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-1 sm:mt-2 overflow-hidden"
            >
              <motion.p
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-primary/80"
              >
                Suites
              </motion.p>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-3"
            >
              {["Luxury", "Comfort", "Transparency"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 + i * 0.1 }}
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <span className="text-[8px] sm:text-[10px] text-foreground/50 uppercase tracking-wider sm:tracking-widest">
                    {word}
                  </span>
                  {i < 2 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.8 + i * 0.1 }}
                      className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-primary/50"
                    />
                  )}
                </motion.span>
              ))}
            </motion.div>

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 100 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="mt-8 sm:mt-10 h-[2px] bg-muted rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  duration: 0.8, 
                  delay: 2.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </motion.div>
          </div>

          {/* Corner accents - smaller on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-4 sm:top-8 left-4 sm:left-8 w-10 sm:w-16 h-10 sm:h-16 border-l-2 border-t-2 border-primary/30"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute top-4 sm:top-8 right-4 sm:right-8 w-10 sm:w-16 h-10 sm:h-16 border-r-2 border-t-2 border-primary/30"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-10 sm:w-16 h-10 sm:h-16 border-l-2 border-b-2 border-primary/30"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-10 sm:w-16 h-10 sm:h-16 border-r-2 border-b-2 border-primary/30"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
