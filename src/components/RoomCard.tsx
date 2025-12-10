import { Link } from "react-router-dom";
import { Users, Maximize, ArrowUpRight } from "lucide-react";

interface RoomCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  capacity: number;
  size: string;
  description: string;
}

const RoomCard = ({ id, name, image, price, capacity, size, description }: RoomCardProps) => {
  return (
    <Link to={`/rooms/${id}`} className="group block">
      <article className="relative h-[420px] sm:h-[500px] md:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden border-gradient hover-lift">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Price Tag */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10">
          <div className="glass-strong px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
            <span className="text-xs sm:text-sm font-medium text-foreground">
              ₦{price.toLocaleString()}
              <span className="text-foreground/50 text-[10px] sm:text-xs">/night</span>
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
          {/* Room info badges - Always visible on mobile */}
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 sm:opacity-0 sm:translate-y-4 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-500">
            <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full glass text-[10px] sm:text-xs font-medium text-foreground/80">
              <Users className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-primary" />
              <span>{capacity} Guests</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full glass text-[10px] sm:text-xs font-medium text-foreground/80">
              <Maximize className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-primary" />
              <span>{size}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-foreground mb-1.5 sm:mb-2 transition-all duration-500 group-hover:text-primary">
            {name}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-foreground/60 mb-4 sm:mb-6 line-clamp-2 max-w-md">
            {description}
          </p>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary transition-all duration-300 group-hover:gap-3">
              <span>View Suite</span>
              <ArrowUpRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>

            {/* Decorative line - Hidden on mobile */}
            <div className="hidden sm:block h-px flex-1 ml-6 bg-gradient-to-r from-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute -top-8 sm:-top-10 -left-8 sm:-left-10 w-16 sm:w-20 h-16 sm:h-20 bg-primary/20 rotate-45" />
        </div>
      </article>
    </Link>
  );
};

export default RoomCard;
