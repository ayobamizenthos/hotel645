import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import ParallaxGallery from "@/components/ParallaxGallery";
import BookingFlow from "@/components/BookingFlow";
import Room360Viewer from "@/components/Room360Viewer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { rooms } from "@/data/rooms";
import { roomDetails } from "@/data/roomDetails";
import RoomGallery from "@/components/RoomGallery";
import RoomMenu from "@/components/RoomMenu";
import PageTransition from "@/components/PageTransition";
import { 
  Check, Users, Maximize, ArrowLeft, Image, UtensilsCrossed, 
  Star, Shield, Clock, Wifi, Wind, Coffee, Sparkles, Calendar,
  Phone, MessageCircle, ChevronDown, Eye
} from "lucide-react";

// Room images for 360 viewer
import deluxeSuite from "@/assets/deluxe-suite.jpg";
import deluxeLiving from "@/assets/deluxe-living-area.jpg";
import deluxeKitchen from "@/assets/deluxe-kitchen.jpg";
import deluxeBathroom from "@/assets/deluxe-bathroom.jpg";
import deluxeMasterBedroom from "@/assets/deluxe-master-bedroom.jpg";

import executiveRoom from "@/assets/executive-room.jpg";
import executiveBedroom from "@/assets/executive-bedroom.jpg";
import executiveWorkArea from "@/assets/executive-work-area.jpg";
import executiveKitchenette from "@/assets/executive-kitchenette.jpg";
import executiveBathroom from "@/assets/executive-bathroom.jpg";

import studioSuite from "@/assets/studio-suite.jpg";
import studioSpace from "@/assets/studio-space.jpg";
import studioKitchen from "@/assets/studio-kitchen.jpg";
import studioBathroom from "@/assets/studio-bathroom.jpg";

// Room-specific 360 images
const room360Images: Record<string, string[]> = {
  "deluxe-suite": [deluxeSuite, deluxeMasterBedroom, deluxeLiving, deluxeKitchen, deluxeBathroom],
  "executive-room": [executiveRoom, executiveBedroom, executiveWorkArea, executiveKitchenette, executiveBathroom],
  "studio-suite": [studioSuite, studioSpace, studioKitchen, studioBathroom],
};

const RoomDetail = () => {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === id);
  const details = id ? roomDetails[id] : null;
  const [showBooking, setShowBooking] = useState(false);
  const [show360Viewer, setShow360Viewer] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  if (!room) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-background">
          <Navigation />
          <div className="pt-24 pb-20 px-4 text-center min-h-screen flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h1 className="text-5xl font-display font-bold text-gradient-gold">Room not found</h1>
              <p className="text-foreground/60 max-w-md mx-auto">
                The suite you're looking for doesn't exist or has been removed.
              </p>
              <MagneticButton variant="luxury" size="lg" asChild>
                <Link to="/rooms">Explore Our Suites</Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </PageTransition>
    );
  }

  const amenityIcons: Record<string, React.ReactNode> = {
    "High-speed WiFi": <Wifi className="w-5 h-5" />,
    "Air conditioning": <Wind className="w-5 h-5" />,
    "Coffee maker": <Coffee className="w-5 h-5" />,
    "24/7 room service": <Clock className="w-5 h-5" />,
  };

  const roomImages = id && room360Images[id] ? room360Images[id] : [room.image];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background overflow-hidden">
        <Navigation />
        
        {/* Immersive Hero Section */}
        <section ref={heroRef} className="relative h-screen">
          {/* Parallax Background */}
          <motion.div 
            className="absolute inset-0"
            style={{ y: imageY, scale }}
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
            {/* Noise texture */}
            <div className="absolute inset-0 noise opacity-30" />
          </motion.div>

          {/* Hero Content */}
          <motion.div 
            className="absolute inset-0 flex items-end pb-24"
            style={{ opacity }}
          >
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-3xl"
              >
                {/* Back button */}
                <Link 
                  to="/rooms" 
                  className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8 group"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  <span className="text-sm font-medium">Back to Suites</span>
                </Link>

                {/* Rating badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="inline-flex items-center gap-2 glass-premium px-4 py-2 rounded-full mb-6"
                >
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-sm font-medium text-foreground/80">5.0 Premium Suite</span>
                </motion.div>

                {/* Title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-foreground mb-6 leading-[0.95]">
                  <span className="text-gradient-gold">{room.name}</span>
                </h1>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex items-center gap-3 glass-premium px-5 py-3 rounded-2xl">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{room.capacity} Guests</span>
                  </div>
                  <div className="flex items-center gap-3 glass-premium px-5 py-3 rounded-2xl">
                    <Maximize className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{room.size}</span>
                  </div>
                  <div className="flex items-center gap-3 glass-premium px-5 py-3 rounded-2xl">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">Verified</span>
                  </div>
                  <button
                    onClick={() => setShow360Viewer(true)}
                    className="flex items-center gap-3 glass-gold px-5 py-3 rounded-2xl hover:bg-primary/20 transition-colors"
                  >
                    <Eye className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">360° Tour</span>
                  </button>
                </div>

                {/* Price */}
                <div className="glass-premium inline-block px-8 py-5 rounded-3xl border border-primary/20">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-gradient-gold">
                      ₦{room.price.toLocaleString()}
                    </span>
                    <span className="text-foreground/50">/ night</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-foreground/40 uppercase tracking-widest">Scroll</span>
              <ChevronDown className="w-5 h-5 text-primary" />
            </div>
          </motion.div>
        </section>

        {/* Main Content */}
        <section className="relative z-10 bg-background">
          {/* Description & Booking */}
          <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left: Description & Amenities */}
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-display text-foreground mb-6">About This Suite</h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    {room.description}
                  </p>
                </motion.div>

                {/* Amenities Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-3xl font-display text-foreground mb-6">Premium Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {room.amenities.map((amenity, index) => (
                      <motion.div
                        key={index}
                        className="glass-premium p-4 rounded-2xl flex items-center gap-3 group hover:border-primary/30 border border-transparent transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                          {amenityIcons[amenity] || <Check className="w-5 h-5" />}
                        </div>
                        <span className="text-sm font-medium text-foreground/80">{amenity}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right: Booking Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <div className="sticky top-24">
                  <Card className="glass-premium border-primary/20 overflow-hidden">
                    {/* Card header */}
                    <div className="p-6 border-b border-border/50">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-foreground/50 mb-1">Price per night</p>
                          <div className="text-3xl font-bold text-gradient-gold">
                            ₦{room.price.toLocaleString()}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-primary">
                          <Star className="w-4 h-4 fill-primary" />
                          <span className="font-bold">5.0</span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6 space-y-6">
                      {/* Date selection placeholder */}
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <button 
                            onClick={() => setShowBooking(true)}
                            className="p-4 rounded-xl border border-border/50 bg-muted/30 hover:border-primary/30 transition-colors cursor-pointer text-left"
                          >
                            <p className="text-xs text-foreground/50 mb-1">CHECK-IN</p>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium">Select date</span>
                            </div>
                          </button>
                          <button 
                            onClick={() => setShowBooking(true)}
                            className="p-4 rounded-xl border border-border/50 bg-muted/30 hover:border-primary/30 transition-colors cursor-pointer text-left"
                          >
                            <p className="text-xs text-foreground/50 mb-1">CHECK-OUT</p>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium">Select date</span>
                            </div>
                          </button>
                        </div>
                        <button 
                          onClick={() => setShowBooking(true)}
                          className="w-full p-4 rounded-xl border border-border/50 bg-muted/30 hover:border-primary/30 transition-colors cursor-pointer text-left"
                        >
                          <p className="text-xs text-foreground/50 mb-1">GUESTS</p>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">{room.capacity} guests max</span>
                          </div>
                        </button>
                      </div>

                      {/* Booking buttons */}
                      <div className="space-y-3">
                        <MagneticButton 
                          variant="luxury" 
                          size="lg" 
                          className="w-full"
                          onClick={() => setShowBooking(true)}
                        >
                          <Sparkles className="w-4 h-4 mr-2" />
                          Book This Suite
                        </MagneticButton>
                        
                        <a 
                          href="https://wa.me/2348035009283" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button variant="outline" size="lg" className="w-full">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Inquire on WhatsApp
                          </Button>
                        </a>
                      </div>

                      {/* Trust badges */}
                      <div className="pt-4 border-t border-border/50">
                        <div className="flex items-center justify-center gap-6 text-foreground/40">
                          <div className="flex items-center gap-1.5 text-xs">
                            <Shield className="w-3.5 h-3.5" />
                            <span>Secure Booking</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs">
                            <Clock className="w-3.5 h-3.5" />
                            <span>Instant Confirm</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick contact */}
                  <div className="mt-6 p-4 glass-premium rounded-2xl">
                    <p className="text-sm text-foreground/60 mb-3">Need help with your booking?</p>
                    <a 
                      href="tel:+2348035009283" 
                      className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="font-medium">+234 803 500 9283</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Gallery Section */}
          {details && (
            <div className="container mx-auto px-4 py-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <span className="inline-block px-4 py-2 rounded-full glass-premium text-sm font-medium text-primary mb-4">
                  Explore Every Detail
                </span>
                <h2 className="text-4xl md:text-5xl font-display text-foreground">
                  Suite Gallery
                </h2>
              </motion.div>

              <ParallaxGallery 
                areas={details.areas} 
                mainImage={room.image}
                roomName={room.name}
              />
            </div>
          )}

          {/* Room Areas and Menu Tabs */}
          {details && (
            <div className="container mx-auto px-4 py-20">
              <Tabs defaultValue="gallery" className="w-full">
                <TabsList className="glass-premium p-1.5 w-full max-w-lg mx-auto grid grid-cols-2 mb-12">
                  <TabsTrigger 
                    value="gallery" 
                    className="flex items-center justify-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl transition-all"
                  >
                    <Image className="w-4 h-4" />
                    Room Areas
                  </TabsTrigger>
                  <TabsTrigger 
                    value="menu" 
                    className="flex items-center justify-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl transition-all"
                  >
                    <UtensilsCrossed className="w-4 h-4" />
                    In-Room Dining
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="gallery" className="mt-8">
                  <RoomGallery areas={details.areas} />
                </TabsContent>

                <TabsContent value="menu" className="mt-8">
                  {details.menuItems && details.menuItems.length > 0 ? (
                    <RoomMenu menuItems={details.menuItems} roomName={room.name} />
                  ) : (
                    <Card className="glass-premium border-primary/10">
                      <CardContent className="p-12 text-center">
                        <Coffee className="w-12 h-12 text-primary/30 mx-auto mb-4" />
                        <h3 className="text-xl font-display text-foreground mb-2">Coming Soon</h3>
                        <p className="text-foreground/60">
                          In-room dining menu for this suite is being prepared.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          )}
        </section>

        <Footer />

        {/* Booking Flow Modal */}
        <BookingFlow
          room={room}
          isOpen={showBooking}
          onClose={() => setShowBooking(false)}
        />

        {/* 360 Viewer Modal */}
        <Room360Viewer
          room={room}
          images={roomImages}
          isOpen={show360Viewer}
          onClose={() => setShow360Viewer(false)}
        />
      </div>
    </PageTransition>
  );
};

export default RoomDetail;
