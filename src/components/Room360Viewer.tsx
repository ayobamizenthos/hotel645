import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { Room } from "@/data/rooms";

interface Hotspot {
  id: string;
  x: number;
  y: number;
  label: string;
  description: string;
}

interface Room360ViewerProps {
  room: Room;
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

const defaultHotspots: Hotspot[] = [
  { id: "bed", x: 30, y: 40, label: "Luxury Bed", description: "Premium king-size bed with Egyptian cotton linens" },
  { id: "view", x: 70, y: 30, label: "City View", description: "Floor-to-ceiling windows with stunning views" },
  { id: "bath", x: 85, y: 60, label: "Bathroom", description: "Marble bathroom with rain shower" },
  { id: "desk", x: 15, y: 55, label: "Work Space", description: "Ergonomic workspace with high-speed WiFi" },
];

const Room360Viewer = ({ room, images, isOpen, onClose }: Room360ViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setRotation((prev) => prev + e.movementX * 0.3);
  };

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 rounded-full glass hover:bg-primary/20 transition-colors"
        >
          <X className="w-6 h-6 text-foreground" />
        </button>

        {/* Room Title */}
        <div className="absolute top-6 left-6 z-50">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="p-2 rounded-xl glass-gold">
              <Eye className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-display font-medium text-foreground">{room.name}</h3>
              <p className="text-sm text-foreground/50">360° Virtual Tour</p>
            </div>
          </motion.div>
        </div>

        {/* Main Viewer */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="relative w-full max-w-5xl aspect-[16/10] mx-6 rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
        >
          {/* 360 Image Container */}
          <div
            className="absolute inset-0 transition-transform duration-100"
            style={{ transform: `rotateY(${rotation}deg)` }}
          >
            <img
              src={images[currentIndex]}
              alt={`${room.name} view ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>

          {/* Hotspots */}
          {defaultHotspots.map((hotspot) => (
            <motion.button
              key={hotspot.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + Math.random() * 0.3 }}
              className="absolute z-20"
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              onMouseEnter={() => setActiveHotspot(hotspot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-4 h-4 rounded-full bg-primary/80 shadow-lg shadow-primary/50"
                />
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-50" />
                
                {/* Tooltip */}
                <AnimatePresence>
                  {activeHotspot === hotspot.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-48 p-3 rounded-xl glass-gold text-center"
                    >
                      <h4 className="text-sm font-display font-medium text-foreground mb-1">
                        {hotspot.label}
                      </h4>
                      <p className="text-xs text-foreground/60">{hotspot.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full glass hover:bg-primary/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full glass hover:bg-primary/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Image Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-primary w-6" : "bg-foreground/30 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Drag Instruction */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 rounded-full glass text-xs text-foreground/60"
          >
            <Maximize2 className="w-3 h-3" />
            <span>Drag to look around</span>
          </motion.div>
        </motion.div>

        {/* Thumbnail Strip */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-2">
          {images.map((img, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              onClick={() => setCurrentIndex(idx)}
              className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                idx === currentIndex ? "border-primary" : "border-transparent hover:border-primary/50"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </motion.button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Room360Viewer;
