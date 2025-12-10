import { motion } from "framer-motion";
import { Dumbbell, ArrowUpRight, Flame, Zap } from "lucide-react";
import { useState } from "react";
import gymShowcase from "@/assets/gym-showcase.jpg";

const GymPortal = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      window.open("https://gym-chi-rust.vercel.app/", "_blank");
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </motion.div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-primary font-medium">
              Performance Zone
            </span>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </motion.div>
          </div>
          
          <h2 className="font-display text-foreground mb-2">
            <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight">
              THE IRON
            </span>
            <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gradient-gold">
              SANCTUARY
            </span>
          </h2>
        </motion.div>

        {/* Premium Portal Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="relative cursor-pointer group"
          >
            {/* Outer glow ring */}
            <motion.div
              className="absolute -inset-[2px] rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary/50 via-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={isHovered ? { 
                background: [
                  "linear-gradient(90deg, hsl(var(--primary)/0.5), hsl(var(--primary)), hsl(var(--primary)/0.5))",
                  "linear-gradient(180deg, hsl(var(--primary)/0.5), hsl(var(--primary)), hsl(var(--primary)/0.5))",
                  "linear-gradient(270deg, hsl(var(--primary)/0.5), hsl(var(--primary)), hsl(var(--primary)/0.5))",
                  "linear-gradient(360deg, hsl(var(--primary)/0.5), hsl(var(--primary)), hsl(var(--primary)/0.5))",
                ]
              } : {}}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Main card */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border bg-card/80 backdrop-blur-xl">
              {/* Content grid */}
              <div className="grid md:grid-cols-5">
                {/* Visual side - Premium Gym Image */}
                <div className="relative md:col-span-2 aspect-video md:aspect-auto min-h-[220px] sm:min-h-[320px]">
                  {/* Gym Image */}
                  <motion.img
                    src={gymShowcase}
                    alt="6:45 Suites Premium Gym"
                    className="absolute inset-0 w-full h-full object-cover"
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-card/90 via-card/40 to-transparent md:from-transparent md:via-card/30 md:to-card" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Centered icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <motion.div
                        className="absolute inset-0 bg-primary/30 rounded-full blur-3xl"
                        animate={{ scale: isHovered ? 1.5 : 1, opacity: isHovered ? 0.8 : 0.4 }}
                      />
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-background/80 backdrop-blur-sm border border-primary/40 flex items-center justify-center glow-gold">
                        <Dumbbell className="w-7 h-7 sm:w-9 sm:h-9 text-primary" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Scan lines */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-5"
                    style={{
                      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground)/0.05) 2px, hsl(var(--foreground)/0.05) 4px)",
                    }}
                  />
                </div>

                {/* Content side */}
                <div className="md:col-span-3 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                  <div className="mb-4 sm:mb-6">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-gold mb-3 sm:mb-4">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      <span className="text-[10px] sm:text-xs uppercase tracking-wider text-foreground/80">Elite Fitness</span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-foreground mb-2 sm:mb-3">
                      World-Class <span className="text-gradient-gold">Equipment</span>
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed max-w-sm">
                      Push your limits in our state-of-the-art fitness sanctuary. 
                      Expert training meets unparalleled results.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {["Pro Equipment", "Personal Training", "24/7 Access"].map((feature) => (
                      <span 
                        key={feature}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-muted/50 text-[10px] sm:text-xs text-foreground/70 border border-border"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    className="inline-flex items-center gap-2 sm:gap-3"
                    animate={{ x: isHovered ? 5 : 0 }}
                  >
                    <span className="text-sm sm:text-base font-medium text-primary uppercase tracking-wide">
                      Enter The Zone
                    </span>
                    <motion.div
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center"
                      animate={{ 
                        scale: isHovered ? 1.1 : 1,
                        boxShadow: isHovered 
                          ? "0 0 30px hsl(var(--primary)/0.5)" 
                          : "0 0 0px hsl(var(--primary)/0)"
                      }}
                    >
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Transition overlay */}
            {isTransitioning && (
              <motion.div
                initial={{ clipPath: "circle(0% at 50% 50%)" }}
                animate={{ clipPath: "circle(150% at 50% 50%)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-0 bg-primary z-[200]"
              />
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GymPortal;
