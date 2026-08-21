import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import { Helmet } from "react-helmet-async";
import { getBlogByPath, BlogPost } from "@/data/blogs";
import styles from "./blog-pages.module.css";

const BlogPostPage = () => {
  const { category, slug } = useParams();
  const post = getBlogByPath(category || "", slug || "");

  if (!post) {
    return (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="pt-20 py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
              <Link to="/blog">
                <Button>Back to Blog</Button>
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }

  const generateArticleSchema = (post: BlogPost) => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.metaDescription || post.title,
      "image": post.image,
      "datePublished": post.date,
      "dateModified": post.date,
      "author": {
        "@type": "Person",
        "name": "Samrat Bhardwaj",
        "url": "https://samratbhardwaj.com"
      },
      "publisher": {
        "@type": "Person",
        "name": "Samrat Bhardwaj"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://samratbhardwaj.com/blog/${post.categorySlug}/${post.slug}`
      },
      "articleSection": post.category,
      "wordCount": post.content ? post.content.replace(/<[^>]*>/g, '').split(/\s+/).length : 0,
      "inLanguage": "en-IN"
    };

    if (post.id === "1") {
      return {
        ...schema,
        "keywords": "deepfake detection, deepfake India, IT Act 2000, BNS 2023, DPDPA 2023, cybercrime India, deepfake legal action, cybercrime.gov.in, report deepfake",
        "about": [
          { "@type": "Thing", "name": "Deepfake" },
          { "@type": "Thing", "name": "Cybersecurity" },
          { "@type": "Thing", "name": "Indian Cyber Laws" }
        ]
      };
    }

    return schema;
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Helmet>
        <title>{post.title} | Samrat Bhardwaj</title>
        <meta name="description" content={post.metaDescription || post.title} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription || post.title} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.metaDescription || post.title} />
        <meta name="twitter:image" content={post.image} />
        <script type="application/ld+json">
          {JSON.stringify(generateArticleSchema(post))}
        </script>
      </Helmet>

      <div className={`min-h-screen ${styles.page}`}>
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <div className="container mx-auto px-4 pt-10 md:pt-16">
          <div className={`relative overflow-hidden rounded-2xl ${styles.heroImage}`}>
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-10">
              <div className="container mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="rounded-full bg-white/15 px-4 py-1 text-sm font-semibold backdrop-blur">
                    {post.category}
                  </span>
                  
                  <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-4 max-w-4xl">
                    {post.title}
                  </h1>
                  
                  <p className="mb-5 mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/75">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          </div>

          {/* Content */}
          <article className={`container mx-auto -mt-2 px-4 py-12 md:py-16 ${styles.articleShell}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <div 
                className={post.articleClass}
                
              >
              <div className="prose prose-lg dark:prose-invert max-w-none
                  prose-headings:font-bold prose-headings:text-foreground
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-2
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-ul:text-muted-foreground prose-ul:my-4
                  prose-ol:text-muted-foreground prose-ol:my-4
                  prose-li:mb-2
                  prose-strong:text-foreground
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-12 flex items-center gap-4 border-t pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">#{tag}</span>)}
                </div>
              )}

              </div>

              <div className="mt-16 pt-8 border-t">
                <Link to="/blog">
                  <Button variant="outline" size="lg" className="group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                  </Button>
                </Link>
              </div>
            </motion.div>
          </article>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default BlogPostPage;
