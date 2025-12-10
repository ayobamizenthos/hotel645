import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, ExternalLink, X, Phone, Instagram, Youtube } from "lucide-react";
import hotelFacade from "@/assets/hotel-facade.jpg";

interface LocationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LocationPopup = ({ isOpen, onClose }: LocationPopupProps) => {
  const address = "55 Gbeleyi Avenue, Alakuko, Lagos";
  const email = "645hotelsuites@gmail.com";
  const phone = "+234 803 500 9283";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-[101] w-auto sm:w-full sm:max-w-md max-h-[90vh] overflow-hidden"
          >
            <div className="relative bg-card border border-border rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-full sm:h-auto flex flex-col">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-background transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Hotel Image */}
              <div className="relative h-40 sm:h-48 flex-shrink-0">
                <img
                  src={hotelFacade}
                  alt="6:45 Suites"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute bottom-3 left-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    <MapPin className="w-3 h-3" />
                    <span>6:45 Suites</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex-1 overflow-auto">
                <h3 className="text-xl sm:text-2xl font-display font-medium text-foreground mb-5">
                  Visit <span className="text-gradient-gold">6:45 Suites</span>
                </h3>

                {/* Info Cards */}
                <div className="space-y-3 mb-6">
                  {/* Address */}
                  <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-muted/50 border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 uppercase tracking-wide mb-0.5">Address</p>
                      <p className="text-sm text-foreground">{address}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <a
                    href={`mailto:${email}`}
                    className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 uppercase tracking-wide mb-0.5">Email</p>
                      <p className="text-sm text-primary">{email}</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 uppercase tracking-wide mb-0.5">Phone</p>
                      <p className="text-sm text-primary">{phone}</p>
                    </div>
                  </a>
                </div>

                {/* Google Maps Button */}
                <motion.a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 sm:py-4 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-[0_0_25px_hsl(43_74%_49%/0.5)] transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  <a
                    href="https://www.instagram.com/6.45hotelandsuites/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-muted/50 border border-border flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/@645hotelsuites2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-muted/50 border border-border flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LocationPopup;
