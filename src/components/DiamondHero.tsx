import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import hotelFacade from "@/assets/hotel-facade.jpg";
import heroRoom from "@/assets/hero-room.jpg";

const DiamondHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Image with Overlay - BRIGHTER */}
      <div className="absolute inset-0 z-0">
        <img
          src={hotelFacade}
          alt="6:45 Hotels"
          className="w-full h-full object-cover brightness-110 contrast-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />
      </div>

      {/* Diamond Centerpiece */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
      >
        <div className="relative -mt-16 md:mt-0">
          {/* Subtle gold ring */}
          <div
            className="absolute -inset-4 rounded-full opacity-30"
            style={{
              background: "conic-gradient(from 0deg, hsl(43 74% 49% / 0.4), transparent, hsl(43 74% 49% / 0.4))",
              filter: "blur(20px)",
            }}
          />
          
          {/* Diamond container - Larger on mobile */}
          <div
            className="relative w-[55vw] h-[70vw] max-w-[280px] max-h-[360px] md:w-[50vmin] md:h-[65vmin] md:max-w-[320px] md:max-h-[420px] overflow-hidden"
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          >
            <img
              src={heroRoom}
              alt="Luxury Suite"
              className="w-full h-full object-cover scale-110"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
          </div>
        </div>
      </motion.div>

      {/* Main Typography */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none -mt-16 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center"
        >
          <h1
            className="text-[28vw] sm:text-[22vw] md:text-[16rem] font-display font-medium leading-none tracking-tight text-gradient-gold text-glow-gold"
          >
            6:45
          </h1>
        </motion.div>
      </div>

      {/* Content Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-30 pb-28 sm:pb-32 md:pb-40 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto text-center md:text-left md:mx-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-4 sm:mb-6"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-gold">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 sm:w-3 h-2.5 sm:h-3 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-foreground/90 uppercase tracking-wider">
                  Luxury Hotel & Suites
                </span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-foreground/70 mb-6 sm:mb-8 max-w-md mx-auto md:mx-0"
            >
              Where <span className="text-primary font-medium">luxury</span> meets{" "}
              <span className="text-primary font-medium">comfort</span>. Experience transparency in every stay.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4"
            >
              <Link
                to="/rooms"
                className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-medium text-sm sm:text-base rounded-full hover:bg-primary/90 transition-all duration-300 hover-lift glow-gold w-full sm:w-auto justify-center"
              >
                <span>Explore Suites</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="https://maps.google.com/?q=55+Gbeleyi+Avenue+Alakuko+Lagos+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Alakuko, Lagos</span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Hidden on mobile since bottom nav takes this space */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-primary/40 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DiamondHero;