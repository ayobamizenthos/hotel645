import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, Compass, Sparkles, Phone, MapPin } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const quickLinks = [
    { label: "Home", path: "/", icon: Home, description: "Return to homepage" },
    { label: "Our Suites", path: "/rooms", icon: Compass, description: "Explore luxury accommodations" },
    { label: "Contact Us", path: "/contact", icon: Phone, description: "Get in touch with us" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />

        <div className="flex-1 flex items-center justify-center relative overflow-hidden px-6 py-32">
          {/* Animated Background */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Gradient orbs */}
            <motion.div
              animate={{
                x: mousePosition.x * 2,
                y: mousePosition.y * 2,
              }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px]"
            />
            <motion.div
              animate={{
                x: -mousePosition.x * 1.5,
                y: -mousePosition.y * 1.5,
              }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent/15 blur-[100px]"
            />
            
            {/* Floating diamonds */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 border border-primary/20"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 3) * 20}%`,
                  transform: "rotate(45deg)",
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Large 404 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-8"
            >
              <h1 className="text-[12rem] md:text-[16rem] font-display font-medium leading-none text-gradient-gold text-glow-gold select-none">
                404
              </h1>
              {/* Reflection effect */}
              <div className="absolute inset-0 text-[12rem] md:text-[16rem] font-display font-medium leading-none text-primary/5 transform scale-y-[-1] translate-y-full blur-sm select-none" aria-hidden>
                404
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-2 glass-gold px-4 py-2 rounded-full mb-6">
                <Search className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground/80">Page Not Found</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-4">
                This Room Doesn't <span className="text-gradient-gold">Exist</span>
              </h2>
              
              <p className="text-foreground/50 max-w-md mx-auto leading-relaxed">
                The page you're looking for has been moved, deleted, or perhaps never existed. 
                Let us guide you back to luxury.
              </p>
            </motion.div>

            {/* Quick Links Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
            >
              {quickLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group glass-premium p-6 rounded-2xl hover:border-primary/30 border border-transparent transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-sm text-foreground/50">{link.description}</p>
                </Link>
              ))}
            </motion.div>

            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                to="/"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover-lift glow-gold"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Back to Home</span>
              </Link>

              <a
                href="https://wa.me/2348035009283"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 border border-primary/30 text-primary font-medium rounded-full hover:bg-primary/10 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Support</span>
              </a>
            </motion.div>

            {/* Location hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-16"
            >
              <a
                href="https://maps.google.com/?q=55+Gbeleyi+Avenue+Alakuko+Lagos+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/40 hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">55 Gbeleyi Avenue, Alakuko, Lagos</span>
              </a>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default NotFound;
