import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RoomArea } from "@/data/roomDetails";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

interface ParallaxGalleryProps {
  areas: RoomArea[];
  mainImage: string;
  roomName: string;
}

const ParallaxGallery = ({ areas, mainImage, roomName }: ParallaxGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const allImages = [
    { name: roomName, image: mainImage, description: "Main view of the suite" },
    ...areas
  ];

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const navigate = (direction: number) => {
    if (selectedIndex === null) return;
    const newIndex = (selectedIndex + direction + allImages.length) % allImages.length;
    setSelectedIndex(newIndex);
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {/* Main large image */}
        <motion.div
          className="col-span-12 md:col-span-8 relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden cursor-pointer group"
          onClick={() => openLightbox(0)}
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
          data-cursor="pointer"
          data-cursor-text="View"
        >
          <motion.img
            src={mainImage}
            alt={roomName}
            className="w-full h-full object-cover"
            animate={{ scale: hoveredIndex === 0 ? 1.05 : 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Zoom indicator */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full glass-premium flex items-center justify-center opacity-0 group-hover:opacity-100"
            initial={{ scale: 0 }}
            animate={{ scale: hoveredIndex === 0 ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ZoomIn className="w-8 h-8 text-primary" />
          </motion.div>
          
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-4 py-2 rounded-full glass-premium text-sm font-medium text-foreground/80 mb-3">
              Main View
            </span>
            <h3 className="text-2xl md:text-3xl font-display text-foreground">{roomName}</h3>
          </div>
        </motion.div>

        {/* Side images stack */}
        <div className="col-span-12 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
          {areas.slice(0, 2).map((area, index) => (
            <motion.div
              key={area.name}
              className="relative h-[180px] md:h-[288px] rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(index + 1)}
              onMouseEnter={() => setHoveredIndex(index + 1)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              data-cursor="pointer"
              data-cursor-text="View"
            >
              <motion.img
                src={area.image}
                alt={area.name}
                className="w-full h-full object-cover"
                animate={{ scale: hoveredIndex === index + 1 ? 1.1 : 1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-sm font-medium text-foreground">{area.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row images */}
        {areas.slice(2).map((area, index) => (
          <motion.div
            key={area.name}
            className="col-span-6 md:col-span-4 relative h-[200px] md:h-[280px] rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(index + 3)}
            onMouseEnter={() => setHoveredIndex(index + 3)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            data-cursor="pointer"
            data-cursor-text="View"
          >
            <motion.img
              src={area.image}
              alt={area.name}
              className="w-full h-full object-cover"
              animate={{ scale: hoveredIndex === index + 3 ? 1.1 : 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-sm font-medium text-foreground">{area.name}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              onClick={closeLightbox}
            />
            
            {/* Close button */}
            <motion.button
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full glass-premium flex items-center justify-center hover:bg-primary/20 transition-colors"
              onClick={closeLightbox}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6 text-foreground" />
            </motion.button>

            {/* Navigation */}
            <motion.button
              className="absolute left-6 z-10 w-14 h-14 rounded-full glass-premium flex items-center justify-center hover:bg-primary/20 transition-colors"
              onClick={() => navigate(-1)}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-8 h-8 text-foreground" />
            </motion.button>
            
            <motion.button
              className="absolute right-6 z-10 w-14 h-14 rounded-full glass-premium flex items-center justify-center hover:bg-primary/20 transition-colors"
              onClick={() => navigate(1)}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-8 h-8 text-foreground" />
            </motion.button>

            {/* Image */}
            <motion.div
              className="relative z-10 max-w-6xl max-h-[80vh] mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              key={selectedIndex}
            >
              <img
                src={allImages[selectedIndex].image}
                alt={allImages[selectedIndex].name}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent rounded-b-2xl">
                <h4 className="text-xl font-display text-foreground mb-1">
                  {allImages[selectedIndex].name}
                </h4>
                <p className="text-sm text-foreground/60">
                  {allImages[selectedIndex].description}
                </p>
              </div>
            </motion.div>

            {/* Thumbnails */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {allImages.map((img, index) => (
                <motion.button
                  key={index}
                  className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    index === selectedIndex ? "border-primary" : "border-transparent opacity-50"
                  }`}
                  onClick={() => setSelectedIndex(index)}
                  whileHover={{ scale: 1.1 }}
                >
                  <img src={img.image} alt={img.name} className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ParallaxGallery;
