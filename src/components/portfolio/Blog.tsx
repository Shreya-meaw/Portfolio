import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogCardSkeleton from "@/components/skeletons/BlogCardSkeleton";
import { getRecentPosts } from "@/data/blogs";
import BlogCard from "./BlogCard";

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
                <BlogCard post={post} />
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
