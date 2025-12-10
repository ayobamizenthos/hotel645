import { motion } from "framer-motion";
import { MapPin, ArrowRight, Phone, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface FindUsSectionProps {
  onOpenLocation: () => void;
}

const FindUsSection = ({ onOpenLocation }: FindUsSectionProps) => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs uppercase tracking-[0.3em] text-primary">✦ Get Started ✦</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-foreground mb-4">
              Take the <span className="text-gradient-gold">Next Step</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />

            {/* Subtext */}
            <p className="text-foreground/60 mb-10">
              You've explored, you've loved it — now discover where to find us
            </p>

            {/* Find Us Button */}
            <motion.button
              onClick={onOpenLocation}
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px hsl(43 74% 49% / 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-primary/10 border border-primary/30 rounded-full text-foreground font-medium hover:bg-primary/20 transition-all group mb-8"
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-base sm:text-lg">Find Us</span>
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Quick Contact Links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              <a
                href="tel:+2348035009283"
                className="inline-flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
              <a
                href="mailto:645hotelsuites@gmail.com"
                className="inline-flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FindUsSection;
