import { motion } from "framer-motion";
import deluxeSuite from "@/assets/deluxe-suite.jpg";
import executiveRoom from "@/assets/executive-room.jpg";
import studioSuite from "@/assets/studio-suite.jpg";
import deluxeLiving from "@/assets/deluxe-living-area.jpg";
import executiveBedroom from "@/assets/executive-bedroom.jpg";
import { useState } from "react";

const images = [
  { src: deluxeSuite, label: "Deluxe Suite", span: "col-span-2 row-span-2" },
  { src: executiveRoom, label: "Executive Room", span: "col-span-1" },
  { src: studioSuite, label: "Studio Suite", span: "col-span-1" },
  { src: deluxeLiving, label: "Living Area", span: "col-span-1 row-span-2" },
  { src: executiveBedroom, label: "Master Bedroom", span: "col-span-2" },
];

const GalleryShowcase = () => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-12"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
            Visual Tour
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
            A Glimpse of <span className="text-gradient-gold">Luxury</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${image.span}`}
            >
              {/* Skeleton */}
              {!loadedImages.has(index) && (
                <div className="absolute inset-0 skeleton-shimmer z-10" />
              )}
              <img
                src={image.src}
                alt={image.label}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  loadedImages.has(index) ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sm font-display font-medium text-foreground">
                  {image.label}
                </span>
              </div>
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryShowcase;
