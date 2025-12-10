import { Link } from "react-router-dom";
import { ArrowUpRight, Play, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-room.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image with Enhanced Parallax */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Multi-layer sophisticated overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.015] bg-noise mix-blend-overlay" />
      </motion.div>

      {/* Floating decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px] animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/3 to-transparent blur-[200px]" />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 pb-24 md:pb-36 lg:pb-40">
        <div className="max-w-5xl">
          {/* Premium Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-4 mb-10"
          >
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-full glass border border-primary/20">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-xs font-medium text-foreground/80 ml-1">Luxury Rating</span>
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-primary/50 via-primary to-transparent" />
          </motion.div>

          {/* Main Heading - Dramatic Typography */}
          <div className="mb-10">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-medium text-foreground leading-[0.9] tracking-tight"
            >
              Experience
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-medium leading-[0.9] tracking-tight mt-2"
            >
              <span className="text-gradient-gold">Elevated</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-medium text-foreground leading-[0.9] tracking-tight mt-2"
            >
              Living
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl lg:text-2xl text-foreground/50 max-w-xl leading-relaxed mb-12 font-light"
          >
            Curated boutique suites where <span className="text-foreground/80">timeless elegance</span> meets 
            <span className="text-primary"> modern luxury</span>. Every detail designed for the discerning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-5 mb-16"
          >
            <Link
              to="/rooms"
              className="group relative inline-flex items-center gap-3 px-10 py-5 overflow-hidden rounded-full"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-shift" />
              <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 text-primary-foreground font-medium text-lg">
                Explore Suites
              </span>
              <ArrowUpRight className="w-5 h-5 relative z-10 text-primary-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <button className="group flex items-center gap-4 px-6 py-4 text-foreground/70 hover:text-foreground transition-colors duration-300">
              <div className="relative w-14 h-14 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-primary/50 transition-all duration-500">
                <Play className="w-4 h-4 ml-0.5 group-hover:text-primary transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-500" />
                <div className="absolute inset-0 rounded-full border border-primary/30 scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <span className="font-medium text-lg">Virtual Tour</span>
            </button>
          </motion.div>

          {/* Location Badge */}
          <motion.a
            href="https://maps.google.com/?q=55+Gbeleyi+Avenue+Alakuko+Lagos+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 text-foreground/40 hover:text-foreground/70 transition-colors duration-300 group"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">55 Gbeleyi Avenue, Alakuko, Lagos</span>
            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </div>

        {/* Stats Card - Floating Right */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-24 right-6 md:right-12 hidden lg:block"
        >
          <div className="glass-premium rounded-3xl p-8 space-y-8 w-48">
            {[
              { value: "3", label: "Luxury Suites" },
              { value: "24/7", label: "Concierge" },
              { value: "5★", label: "Experience" },
            ].map((stat, index) => (
              <div key={stat.label}>
                <div className="text-center">
                  <div className="text-4xl font-display font-medium text-gradient-gold">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 mt-2">
                    {stat.label}
                  </div>
                </div>
                {index < 2 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mt-8" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/30">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-pulse" />
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;