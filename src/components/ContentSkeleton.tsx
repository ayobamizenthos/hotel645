import { cn } from "@/lib/utils";

interface ContentSkeletonProps {
  variant?: "text" | "title" | "avatar" | "card" | "button";
  className?: string;
  lines?: number;
}

const ContentSkeleton = ({ variant = "text", className, lines = 1 }: ContentSkeletonProps) => {
  const baseClasses = "bg-muted animate-pulse rounded-lg";

  const variants = {
    text: "h-4 w-full",
    title: "h-8 w-3/4",
    avatar: "h-12 w-12 rounded-full",
    card: "h-64 w-full rounded-2xl",
    button: "h-12 w-32 rounded-full",
  };

  if (variant === "text" && lines > 1) {
    return (
      <div className={cn("space-y-2", className)}>
        {[...Array(lines)].map((_, i) => (
          <div
            key={i}
            className={cn(
              baseClasses,
              "h-4",
              i === lines - 1 ? "w-2/3" : "w-full"
            )}
          />
        ))}
      </div>
    );
  }

  return <div className={cn(baseClasses, variants[variant], className)} />;
};

// Room Card Skeleton
export const RoomCardSkeleton = () => (
  <div className="relative h-[480px] md:h-[540px] rounded-2xl overflow-hidden bg-card border border-border">
    {/* Image skeleton */}
    <div className="absolute inset-0 skeleton-shimmer" />
    
    {/* Price tag skeleton */}
    <div className="absolute top-4 right-4 z-10">
      <div className="glass px-4 py-2 rounded-xl">
        <div className="h-6 w-20 bg-muted animate-pulse rounded" />
        <div className="h-3 w-12 bg-muted animate-pulse rounded mt-1 mx-auto" />
      </div>
    </div>

    {/* Content skeleton */}
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-8 w-16 bg-muted animate-pulse rounded-full" />
        <div className="h-8 w-16 bg-muted animate-pulse rounded-full" />
      </div>
      <div className="h-8 w-2/3 bg-muted animate-pulse rounded mb-2" />
      <div className="h-4 w-full bg-muted animate-pulse rounded mb-1" />
      <div className="h-4 w-4/5 bg-muted animate-pulse rounded mb-4" />
      <div className="h-5 w-24 bg-muted animate-pulse rounded" />
    </div>
  </div>
);

// Stats Skeleton
export const StatsSkeleton = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="glass-premium p-6 rounded-2xl text-center">
        <div className="h-12 w-24 bg-muted animate-pulse rounded mx-auto mb-2" />
        <div className="h-4 w-20 bg-muted animate-pulse rounded mx-auto" />
      </div>
    ))}
  </div>
);

// Gallery Skeleton
export const GallerySkeleton = () => (
  <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
    <div className="col-span-2 row-span-2 rounded-xl skeleton-shimmer" />
    <div className="col-span-1 rounded-xl skeleton-shimmer" />
    <div className="col-span-1 rounded-xl skeleton-shimmer" />
    <div className="col-span-1 row-span-2 rounded-xl skeleton-shimmer" />
    <div className="col-span-2 rounded-xl skeleton-shimmer" />
  </div>
);

export default ContentSkeleton;
