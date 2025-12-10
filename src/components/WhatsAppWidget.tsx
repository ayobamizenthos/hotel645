import { useState } from "react";
import { MessageCircle, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "2348035009283";
  const message = "Hello 6:45 Hotels, I'd like to inquire about booking a suite.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-14 sm:bottom-20 right-0 w-72 sm:w-80 glass-premium rounded-2xl overflow-hidden shadow-elegant"
          >
            {/* Header - Gold themed */}
            <div className="bg-gradient-to-r from-primary to-primary/80 p-4 sm:p-5">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
                </div>
                <div>
                  <h3 className="font-medium text-background text-base sm:text-lg">6:45 Suites</h3>
                  <p className="text-background/80 text-xs sm:text-sm">Typically replies instantly</p>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="p-4 sm:p-5">
              <div className="bg-card/50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
                  👋 Welcome to <span className="text-primary font-medium">6:45 Suites</span>!
                </p>
                <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed mt-2">
                  How can we assist you with your luxury stay today?
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full py-3 sm:py-4 bg-primary hover:bg-primary/90 text-background font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="text-sm sm:text-base">Start Conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button - Smaller on mobile, gold themed */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        whileTap={{ scale: 0.95 }}
        aria-label="WhatsApp Chat"
      >
        {/* Pulse ring effect */}
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
        <div className="absolute inset-0 rounded-full bg-primary glow-pulse" />
        
        {/* Button background - Gold gradient */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  );
};

export default WhatsAppWidget;
