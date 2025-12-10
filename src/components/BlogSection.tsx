import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const blogPosts = [
  {
    id: 1,
    title: "This Week at 6:45 Suites",
    excerpt: "Experience our newly upgraded amenities, exclusive guest events, and the art of Lagos hospitality at its finest.",
    category: "Weekly Update",
    date: "Dec 8, 2024",
    readTime: "3 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80"
  },
  {
    id: 2,
    title: "Why Luxury Shortlets Are The Future",
    excerpt: "Discover why discerning travelers are choosing premium shortlet experiences over traditional hotel stays.",
    category: "Industry Insights",
    date: "Dec 5, 2024",
    readTime: "5 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80"
  },
  {
    id: 3,
    title: "Lagos Hidden Gems: Local Guide",
    excerpt: "From secret beach spots to the best local cuisines - your insider guide to experiencing Lagos like a true local.",
    category: "Travel Guide",
    date: "Dec 2, 2024",
    readTime: "7 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&q=80"
  }
];

const BlogSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-14 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold w-fit mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs uppercase tracking-wider text-foreground/80">Latest Stories</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-foreground">
                The <span className="text-gradient-gold">6:45</span> Journal
              </h2>
            </div>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Post */}
          <ScrollReveal delay={0.1}>
            <Link to="/blog/1" className="group block h-full">
              <motion.article
                whileHover={{ y: -5 }}
                className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <motion.img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium uppercase tracking-wide">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-4 text-xs text-foreground/50 mb-3">
                    <span className="text-primary">{blogPosts[0].category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-display font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-sm text-foreground/60 line-clamp-2">
                    {blogPosts[0].excerpt}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            </Link>
          </ScrollReveal>

          {/* Smaller Posts */}
          <div className="flex flex-col gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <ScrollReveal key={post.id} delay={0.2 + index * 0.1}>
                <Link to={`/blog/${post.id}`} className="group block">
                  <motion.article
                    whileHover={{ y: -3 }}
                    className="flex gap-4 p-4 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-[10px] sm:text-xs text-foreground/50 mb-2">
                        <span className="text-primary">{post.category}</span>
                        <span>{post.date}</span>
                      </div>
                      
                      <h3 className="text-sm sm:text-base font-display font-medium text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-xs text-foreground/50 line-clamp-2 hidden sm:block">
                        {post.excerpt}
                      </p>
                    </div>
                  </motion.article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
