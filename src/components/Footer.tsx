import { Link } from "react-router-dom";
import { Instagram, Youtube, MapPin, Phone, Mail, ArrowUpRight, MessageCircle, Sparkles, Download } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", path: "/" },
    { label: "Suites", path: "/rooms" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Install App", path: "/install", icon: Download },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/6.45hotelandsuites/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@645hotelsuites2", label: "YouTube" },
    { icon: MessageCircle, href: "https://wa.me/2348035009283", label: "WhatsApp" },
  ];

  return (
    <footer className="relative border-t border-border bg-card/30 pb-28 md:pb-0 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-primary/2 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            
            {/* Brand Column */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo */}
                <div className="mb-6">
                  <Link to="/" className="inline-block group">
                    <div className="flex items-baseline gap-0.5">
                      <span className="font-display text-4xl sm:text-5xl font-medium text-foreground tracking-tight">
                        6
                      </span>
                      <span className="font-display text-4xl sm:text-5xl font-medium text-primary animate-pulse">
                        :
                      </span>
                      <span className="font-display text-4xl sm:text-5xl font-medium text-foreground tracking-tight">
                        45
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary/80 mt-1">
                      Suites
                    </p>
                  </Link>
                </div>

                {/* Tagline */}
                <p className="text-sm sm:text-base text-foreground/50 max-w-sm mb-6 leading-relaxed">
                  Where luxury meets comfort. Experience unparalleled elegance 
                  in the heart of Lagos.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-muted/50 border border-border flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Column */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-xs font-medium text-foreground uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-primary" />
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {footerLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="group flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors duration-300"
                      >
                        {link.icon ? (
                          <link.icon className="w-3 h-3 text-primary/50 group-hover:text-primary transition-colors duration-300" />
                        ) : (
                          <span className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary group-hover:w-2 transition-all duration-300" />
                        )}
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-xs font-medium text-foreground uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-primary" />
                  Get in Touch
                </h4>
                
                <div className="space-y-4">
                  {/* Address */}
                  <a
                    href="https://maps.google.com/?q=55+Gbeleyi+Avenue+Alakuko+Lagos+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-border hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/40 mb-0.5">Visit Us</p>
                      <p className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                        55 Gbeleyi Avenue, Alakuko, Lagos
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="https://wa.me/2348035009283"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-border hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/40 mb-0.5">Call / WhatsApp</p>
                      <p className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                        +234 803 500 9283
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@645hotels.com"
                    className="group flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-border hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/40 mb-0.5">Email Us</p>
                      <p className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                        info@645hotels.com
                      </p>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-foreground/40 text-center sm:text-left">
              © {currentYear} 6:45 Suites. All rights reserved.
            </p>
            
            <div className="flex items-center gap-1.5">
              {["Luxury", "Comfort", "Transparency"].map((word, i) => (
                <span key={word} className="flex items-center gap-1.5">
                  <span className="text-xs text-foreground/50 uppercase tracking-wider">{word}</span>
                  {i < 2 && <span className="w-1 h-1 rounded-full bg-primary/50" />}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;