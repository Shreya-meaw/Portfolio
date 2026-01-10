import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogCardSkeleton from "@/components/skeletons/BlogCardSkeleton";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";

const BlogList = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  const allPosts = [
    {
      id: "1",
      title: "Deepfake Videos: How to Detect, Report & Take Legal Action in India (2026 Guide)",
      excerpt: "A single fake video can destroy a reputation within minutes. Learn how to identify deepfakes, collect evidence, report them, and take legal action under Indian cyber laws.",
      date: "2026-01-05",
      readTime: "15 min read",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop"
    },
    {
      id: "2",
      title: "Cybersecurity Fundamentals Every Developer Should Know",
      excerpt: "Understanding basic cybersecurity principles is crucial for modern web development. Explore authentication, encryption, and secure coding practices.",
      date: "2024-03-10",
      readTime: "10 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl font-bold mb-4">All Blog Posts</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Explore all my articles on development, security, and career insights
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {isLoading ? (
                  <>
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                  
                  </>
                ) : (
                  allPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
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
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default BlogList;
