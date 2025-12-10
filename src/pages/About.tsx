import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Award, Heart, Shield, Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const About = () => {
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
              className="max-w-4xl mx-auto text-center mb-20"
            >
              <h1 className="text-4xl md:text-6xl font-display font-medium text-foreground mb-6">
                About <span className="text-gradient-gold">6:45 Hotels</span>
              </h1>
              <p className="text-xl text-foreground/50 leading-relaxed">
                Where luxury meets transparency, creating unforgettable experiences
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8 mb-20">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-lg text-foreground/60 leading-relaxed"
              >
                6:45 Hotels & Suites was founded with a powerful mission: to provide luxury accommodations that combine comfort, elegance, and complete transparency. We believe every guest deserves an exceptional experience built on trust and world-class service.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg text-foreground/60 leading-relaxed"
              >
                Our carefully curated collection of suites represents the finest in modern hospitality. Each space is meticulously designed and maintained to ensure your stay is nothing short of perfect.
              </motion.p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
              {[
                { icon: Award, title: "Our Mission", desc: "To redefine luxury accommodations through exceptional experiences built on transparency and unwavering commitment to guest satisfaction." },
                { icon: Heart, title: "Our Values", desc: "Integrity, excellence, and genuine care for our guests drive everything we do." },
                { icon: Shield, title: "Transparency", desc: "Every booking and payment is tracked with complete transparency. No hidden fees, no surprises." },
                { icon: Sparkles, title: "Luxury Standards", desc: "From premium furnishings to state-of-the-art amenities, we maintain the highest standards." }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                  className="glass-premium rounded-2xl p-8"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/50 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-center max-w-2xl mx-auto glass-premium rounded-3xl py-12 px-8"
            >
              <h2 className="text-3xl font-display font-medium text-foreground mb-4">
                Experience the <span className="text-gradient-gold">Difference</span>
              </h2>
              <p className="text-foreground/50 mb-8">
                Join hundreds of satisfied guests who've made 6:45 Hotels their home away from home
              </p>
              <Link
                to="/rooms"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium rounded-full"
              >
                <span>Book Your Stay</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
