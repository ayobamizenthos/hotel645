import Navigation from "@/components/Navigation";
import DiamondHero from "@/components/DiamondHero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import TestimonialSection from "@/components/TestimonialSection";
import GalleryShowcase from "@/components/GalleryShowcase";
import GymPortal from "@/components/GymPortal";
import BlogSection from "@/components/BlogSection";
import ScrollReveal from "@/components/ScrollReveal";
import FindUsSection from "@/components/FindUsSection";
import LocationPopup from "@/components/LocationPopup";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Shield, Clock, Star, Sparkles, ArrowRight, Phone, MapPin, Play, Eye } from "lucide-react";
import { rooms } from "@/data/rooms";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import TiltCard from "@/components/TiltCard";
import { useState } from "react";
import Room360Viewer from "@/components/Room360Viewer";
import deluxeSuite from "@/assets/deluxe-suite.jpg";
import deluxeLiving from "@/assets/deluxe-living-area.jpg";
import deluxeKitchen from "@/assets/deluxe-kitchen.jpg";
import deluxeBathroom from "@/assets/deluxe-bathroom.jpg";

const Home = () => {
  const [show360Viewer, setShow360Viewer] = useState(false);
  const [showLocationPopup, setShowLocationPopup] = useState(false);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        <DiamondHero />
        
        {/* Marquee */}
        <Marquee />

        {/* Quick 360 Preview Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden bg-card border border-border"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src={deluxeSuite}
                    alt="360 Tour Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 md:to-card" />
                  
                  {/* Play Button */}
                  <motion.button
                    onClick={() => setShow360Viewer(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center glow-gold"
                  >
                    <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground ml-1" />
                  </motion.button>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold w-fit mb-4">
                    <Eye className="w-4 h-4 text-primary" />
                    <span className="text-xs uppercase tracking-wider text-foreground/80">Virtual Experience</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-4">
                    Explore Our Suites in <span className="text-gradient-gold">360°</span>
                  </h2>
                  
                  <p className="text-foreground/60 mb-6">
                    Take an immersive virtual tour of our luxury suites. Explore every corner, from the plush bedrooms to the modern kitchens, all from your device.
                  </p>
                  
                  <button
                    onClick={() => setShow360Viewer(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all w-fit hover-lift"
                  >
                    <span>Start Virtual Tour</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <Stats />

        {/* Featured Rooms */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mb-12"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
                Featured Collection
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
                Curated <span className="text-gradient-gold">Luxury</span> Suites
              </h2>
              <p className="text-foreground/50">
                Each suite is a sanctuary of refined elegance, designed for the most discerning guests.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rooms.map((room, index) => (
                <TiltCard key={room.id} room={room} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link
                to="/rooms"
                className="group inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <span>View All Suites</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Gallery Showcase */}
        <GalleryShowcase />

        {/* Why Choose Us */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <ScrollReveal>
              <div className="text-center max-w-xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
                  Why <span className="text-gradient-gold">Guests Choose</span> Us
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: Shield,
                  title: "Secure Booking",
                  description: "Transparent pricing & secure payments",
                },
                {
                  icon: Clock,
                  title: "24/7 Concierge",
                  description: "Round-the-clock personal assistance",
                },
                {
                  icon: Star,
                  title: "Luxury Amenities",
                  description: "Premium furnishings throughout",
                },
                {
                  icon: Sparkles,
                  title: "Pristine Spaces",
                  description: "Meticulously cleaned every time",
                },
              ].map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 0 25px hsl(43 74% 49% / 0.15)" }}
                    className="group p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300 h-full"
                  >
                    <div className="w-10 h-10 mb-4 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(43_74%_49%/0.3)] transition-all">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground/50">{feature.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialSection />

        {/* Blog Section */}
        <BlogSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Gym Portal */}
        <GymPortal />

        {/* Find Us Section */}
        <FindUsSection onOpenLocation={() => setShowLocationPopup(true)} />

        <Footer />

        {/* 360 Viewer Modal */}
        <Room360Viewer
          room={rooms[0]}
          images={[deluxeSuite, deluxeLiving, deluxeKitchen, deluxeBathroom]}
          isOpen={show360Viewer}
          onClose={() => setShow360Viewer(false)}
        />

        {/* Location Popup Modal */}
        <LocationPopup
          isOpen={showLocationPopup}
          onClose={() => setShowLocationPopup(false)}
        />
      </div>
    </PageTransition>
  );
};

export default Home;
