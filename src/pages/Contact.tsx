import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, MessageSquare, ArrowUpRight, Navigation as NavIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const mapUrl = "https://maps.google.com/?q=55+Gbeleyi+Avenue+Alakuko+Lagos+Nigeria";

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="pt-32 pb-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-display font-medium text-foreground mb-6">
                Get In <span className="text-gradient-gold">Touch</span>
              </h1>
              <p className="text-lg text-foreground/50 max-w-2xl mx-auto">
                Have questions? We'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="glass-premium rounded-3xl p-8"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground/80">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-2 bg-card/50 border-border/50"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground/80">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-2 bg-card/50 border-border/50"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground/80">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234 XXX XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="mt-2 bg-card/50 border-border/50"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground/80">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="mt-2 bg-card/50 border-border/50"
                    />
                  </div>

                  <Button type="submit" className="w-full py-6 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium rounded-xl">
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info & Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-6"
              >
                {/* Embedded Google Maps */}
                <div className="glass-premium rounded-3xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0!2d3.2667!3d6.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s55+Gbeleyi+Avenue+Alakuko+Lagos+Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                    title="6:45 Suites Location"
                  />
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 hover:bg-primary/5 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <NavIcon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">55 Gbeleyi Avenue, Alakuko</p>
                        <p className="text-xs text-foreground/50">Lagos, Nigeria</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-foreground/30 group-hover:text-primary transition-colors" />
                  </a>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="https://wa.me/2348035009283"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-premium rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <Phone className="w-6 h-6 text-primary mb-3" />
                    <h4 className="font-medium text-foreground mb-1">Call / WhatsApp</h4>
                    <p className="text-foreground/50 text-sm">+234 803 500 9283</p>
                  </a>

                  <a
                    href="mailto:info@645hotels.com"
                    className="glass-premium rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
                  >
                    <Mail className="w-6 h-6 text-primary mb-3" />
                    <h4 className="font-medium text-foreground mb-1">Email</h4>
                    <p className="text-foreground/50 text-sm">info@645hotels.com</p>
                  </a>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/2348035009283?text=Hello%206:45%20Hotels,%20I'd%20like%20to%20inquire%20about%20booking%20a%20suite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass-premium rounded-2xl p-6 bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 border-[#25D366]/20 hover:border-[#25D366]/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#25D366] flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Chat on WhatsApp</h4>
                      <p className="text-foreground/50 text-sm">Get instant responses</p>
                    </div>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
