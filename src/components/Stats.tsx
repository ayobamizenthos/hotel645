import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
}

const StatItem = ({ value, suffix, label }: StatProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-gradient-gold mb-1 sm:mb-2">
        {count}{suffix}
      </div>
      <div className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-foreground/50">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { value: 500, suffix: "+", label: "Happy Guests" },
    { value: 15, suffix: "", label: "Luxury Suites" },
    { value: 24, suffix: "/7", label: "Concierge" },
    { value: 5, suffix: "★", label: "Rating" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-10 sm:py-16 px-4 sm:px-6"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Stats;