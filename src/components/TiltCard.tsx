import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Maximize, ArrowRight } from "lucide-react";
import { Room } from "@/data/rooms";
import { useState } from "react";

export interface TiltCardProps {
  room: Room;
  index: number;
}

const TiltCard = ({ room, index }: TiltCardProps) => {
  const { id, name, image, price, capacity, size, description } = room;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link to={`/rooms/${id}`} className="group block">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="relative h-[480px] md:h-[540px] rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 hover-lift"
      >
        {/* Image with skeleton */}
        <div className="absolute inset-0">
          {/* Skeleton loader */}
          {!isLoaded && (
            <div className="absolute inset-0 skeleton-shimmer z-10" />
          )}
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Price Tag */}
        <div className="absolute top-4 right-4 z-10">
          <div className="glass-gold px-4 py-2 rounded-xl">
            <div className="text-xl font-display font-medium text-gradient-gold">
              ₦{price.toLocaleString()}
            </div>
            <div className="text-[10px] text-foreground/50 uppercase tracking-wider text-center">
              per night
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Room info */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-medium text-foreground/80">
              <Users className="w-3 h-3 text-primary" />
              <span>{capacity}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-medium text-foreground/80">
              <Maximize className="w-3 h-3 text-primary" />
              <span>{size}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>

          {/* Description */}
          <p className="text-sm text-foreground/50 mb-4 line-clamp-2">
            {description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 text-primary font-medium text-sm">
            <span>View Suite</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Hover border glow */}
        <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/20 transition-colors duration-500 pointer-events-none" />
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow-gold" />
      </motion.div>
    </Link>
  );
};

export default TiltCard;
