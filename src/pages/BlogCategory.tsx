import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import BlogCard from "@/components/portfolio/BlogCard";
import { categories, getPostsByCategory } from "@/data/blogs";
import styles from "./blog-pages.module.css";

const BlogCategory = () => {
  const { category } = useParams();
  const categoryInfo = categories.find((item) => item.slug === category);
  const posts = category ? getPostsByCategory(category) : [];

  if (!categoryInfo) {
    return (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Header />
        <main className="container mx-auto px-4 pb-20 pt-32 text-center">
          <h1 className="mb-4 text-4xl font-bold">Category not found</h1>
          <Link to="/blog"><Button>Back to blog</Button></Link>
        </main>
        <Footer />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className={`min-h-screen ${styles.page}`}>
        <Header />
        <main className="container mx-auto px-4 pb-24 pt-28 md:pt-36">
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`mb-12 rounded-2xl border p-7 md:p-10 ${categoryInfo.styles.surface}`}>
            <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground">← All categories</Link>
            <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
              <div><p className={`text-xs font-bold uppercase tracking-[0.16em] ${categoryInfo.styles.accent}`}>Category archive</p><h1 className={`mt-3 text-4xl font-bold md:text-5xl ${categoryInfo.styles.accent}`}>{categoryInfo.name}</h1><p className="mt-3 max-w-xl text-lg text-muted-foreground">{categoryInfo.description}</p></div>
              <span className="rounded-full border bg-background/60 px-4 py-2 text-sm font-medium">{posts.length} {posts.length === 1 ? "article" : "articles"}</span>
            </div>
          </motion.header>
          {posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
                  <BlogCard post={post} accentClass={categoryInfo.styles.accent} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className={`rounded-lg border p-12 text-center ${categoryInfo.styles.surface}`}>
              <p className="text-muted-foreground">New writing for this category is on the way.</p>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default BlogCategory;