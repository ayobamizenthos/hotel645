import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Instagram, Youtube, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showInstallHint, setShowInstallHint] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }
    
    // Show hint if banner was dismissed
    const checkDismissed = () => {
      const dismissed = localStorage.getItem('pwa-banner-dismissed');
      if (dismissed) {
        setShowInstallHint(true);
      }
    };
    
    checkDismissed();
    // Listen for storage changes (when banner gets dismissed)
    window.addEventListener('storage', checkDismissed);
    
    // Also check periodically in case dismissed on same tab
    const interval = setInterval(checkDismissed, 1000);
    
    return () => {
      window.removeEventListener('storage', checkDismissed);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/rooms", label: "Suites" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "https://gym-chi-rust.vercel.app/", label: "Gym", external: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Premium Palantir-style Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? "top-3 left-3 right-3 md:left-6 md:right-6 lg:left-10 lg:right-10"
            : "top-0 left-0 right-0"
        }`}
      >
        <div
          className={`transition-all duration-700 ease-out ${
            isScrolled
              ? "bg-background/70 backdrop-blur-2xl border border-primary/10 rounded-full shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_80px_rgba(197,160,40,0.08)] py-2 px-5 md:px-8"
              : "bg-gradient-to-b from-background/60 via-background/20 to-transparent py-5 px-6"
          }`}
        >
          <div className={`flex items-center justify-between ${isScrolled ? "" : "container mx-auto"}`}>
            {/* Brand Typography */}
            <Link to="/" className="group relative z-10">
              <motion.div 
                className="flex items-center gap-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Time Typography */}
                <div className="relative">
                  <span className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                    6
                  </span>
                  <span className="font-display text-2xl md:text-3xl font-semibold text-primary mx-[1px] animate-pulse">
                    :
                  </span>
                  <span className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                    45
                  </span>
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                {/* Suites text */}
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-primary/80 font-medium ml-2 mt-1">
                  Suites
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-5 py-2.5 group"
                  >
                    <span className="relative z-10 text-sm font-medium text-foreground/70 group-hover:text-foreground transition-all duration-300">
                      {link.label}
                    </span>
                    <ArrowUpRight className="w-3 h-3 absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute inset-0 rounded-full bg-foreground/5 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative px-5 py-2.5 group"
                  >
                    <span className={`relative z-10 text-sm font-medium transition-all duration-300 ${
                      isActive(link.path)
                        ? "text-primary"
                        : "text-foreground/70 group-hover:text-foreground"
                    }`}>
                      {link.label}
                    </span>
                    {isActive(link.path) && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="absolute inset-0 rounded-full bg-foreground/5 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                  </Link>
                )
              ))}
            </div>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Install App Hint */}
              {showInstallHint && !isInstalled && (
                <Link
                  to="/install"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-primary/80 hover:text-primary bg-primary/5 hover:bg-primary/10 rounded-full border border-primary/20 transition-all duration-300"
                >
                  <Download className="w-3 h-3" />
                  <span>Install</span>
                </Link>
              )}
              
              {/* Social Links */}
              <div className="flex items-center gap-2 mr-2">
                <a
                  href="https://www.instagram.com/6.45hotelandsuites/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-foreground/50 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@645hotelsuites2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-foreground/50 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>

              {/* CTA Button */}
              <Link
                to="/rooms"
                className="group relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden rounded-full"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-shift" />
                <span className="relative z-10 text-primary-foreground font-medium text-sm">
                  Reserve Now
                </span>
                <ArrowUpRight className="w-4 h-4 relative z-10 text-primary-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 w-12 h-12 rounded-xl flex items-center justify-center text-foreground bg-foreground/5 hover:bg-foreground/10 transition-colors duration-300"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/98 backdrop-blur-3xl"
            />

            {/* Decorative elements */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-8">
              {/* Nav Links */}
              <nav className="space-y-2 text-center mb-12">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-4xl sm:text-5xl font-display font-medium py-3 transition-colors duration-300 ${
                        isActive(link.path) ? "text-primary" : "text-foreground/60 hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-4"
              >
                <Link
                  to="/rooms"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-medium text-lg rounded-full shadow-gold"
                >
                  Reserve Now
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/install"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary font-medium text-sm rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Install App
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 flex items-center gap-6"
              >
                <a
                  href="https://www.instagram.com/6.45hotelandsuites/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/40 hover:text-primary transition-colors duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.youtube.com/@645hotelsuites2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/40 hover:text-primary transition-colors duration-300"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;