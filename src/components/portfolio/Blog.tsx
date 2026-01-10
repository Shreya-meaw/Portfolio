import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogCardSkeleton from "@/components/skeletons/BlogCardSkeleton";
import { getRecentPosts } from "@/data/blogs";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const recentPosts = getRecentPosts(3);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Blog & Insights</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing my knowledge and experiences in tech, development, and cybersecurity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {isLoading ? (
            <>
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </>
          ) : (
            recentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/blog/${post.id}`}>
                  <Card className="overflow-hidden hover-lift transition-smooth group cursor-pointer h-full">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <span className="text-sm text-primary font-medium group-hover:underline">
                        Read More →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))
          )}
        </div>

        <div className="flex justify-center">
          <Link to="/blog">
            <Button size="lg" className="group">
              View All Blog Posts
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
