import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TiltCard from "@/components/TiltCard";
import { rooms } from "@/data/rooms";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const Rooms = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 mesh-gradient" />
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-accent/10 blur-[100px]" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
                <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
                <span>/</span>
                <span className="text-foreground">Suites</span>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 glass-premium px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground/80">Premium Collection</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium text-foreground leading-[0.95] mb-6">
                Exceptional <span className="text-gradient-gold">Suites</span> Await
              </h1>

              <p className="text-lg text-foreground/50 max-w-xl leading-relaxed">
                Each suite is a masterpiece of design and comfort, curated for those who appreciate the finer things in life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Rooms Grid with 3D Tilt Cards */}
        <section className="pb-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
              {rooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                >
                  <TiltCard room={room} index={index} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-24 text-center"
            >
              <div className="inline-flex flex-col items-center glass-premium rounded-3xl px-12 py-12 border border-primary/10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-4">
                  Need Personalized Assistance?
                </h3>
                <p className="text-foreground/50 mb-8 max-w-md leading-relaxed">
                  Our luxury concierge team is available 24/7 to help you choose the perfect suite for your stay.
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  <span>Contact Concierge</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Rooms;
