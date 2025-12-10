import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    role: "Business Executive",
    content: "The attention to detail at 6:45 Suites is unmatched. From the moment I walked in, I felt like royalty. The staff anticipated my every need and the suites exceeded all expectations.",
    rating: 5,
    avatar: "AO",
  },
  {
    id: 2,
    name: "Chinedu Eze",
    role: "Entrepreneur",
    content: "I've stayed at luxury hotels worldwide, but 6:45 offers something unique—genuine Nigerian hospitality with world-class amenities. The transparency in pricing was refreshing.",
    rating: 5,
    avatar: "CE",
  },
  {
    id: 3,
    name: "Folake Adeyemi",
    role: "Fashion Designer",
    content: "The suites are breathtaking. I hosted my clients here for a photoshoot, and everyone was impressed. The lighting, the decor, the ambiance—absolute perfection.",
    rating: 5,
    avatar: "FA",
  },
  {
    id: 4,
    name: "Emeka Nwachukwu",
    role: "Tech Consultant",
    content: "Finally, a place that understands what luxury means. Fast WiFi, impeccable service, and a kitchen that feels like home. I extended my stay twice—couldn't leave!",
    rating: 5,
    avatar: "EN",
  },
  {
    id: 5,
    name: "Amara Obi",
    role: "Travel Blogger",
    content: "6:45 Suites is now my go-to recommendation for anyone visiting Lagos. The 360° virtual tour convinced me to book, and reality exceeded the virtual experience.",
    rating: 5,
    avatar: "AO",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push({ ...testimonials[index], position: i });
    }
    return result;
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-8 sm:mb-12"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary mb-3 sm:mb-4 block">
            Guest Experiences
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-foreground">
            What Our <span className="text-gradient-gold">Guests Say</span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <div className="hidden md:block">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/30 transition-all shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/30 transition-all shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${currentIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
                className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500"
              >
                {/* Quote icon */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                  <Quote className="w-8 sm:w-10 h-8 sm:h-10" />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base text-foreground/70 mb-4 sm:mb-6 leading-relaxed line-clamp-4">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center text-xs sm:text-sm font-medium text-primary">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-sm sm:text-base text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-foreground/50">{testimonial.role}</p>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow-gold" />
              </motion.div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-primary"
                    : "w-2 h-2 bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <motion.button
              onClick={prevSlide}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground/70"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground/70"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
