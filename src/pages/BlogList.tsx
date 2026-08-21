import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import BlogCard from "@/components/portfolio/BlogCard";
import { categories, getPostsByCategory } from "@/data/blogs";
import styles from "./blog-pages.module.css";

const BlogList = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <div className={`min-h-screen ${styles.page}`}>
      <Header />
      <main className="container mx-auto px-4 pb-24 pt-28 md:pt-36">
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 max-w-3xl">
          <p className={`mb-4 text-xs font-bold uppercase text-primary ${styles.eyebrow}`}>Samrat's notebook</p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">Ideas from the work and the spaces around it.</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">Security, building, money, and the personal interests that make a career feel like a life.</p>
        </motion.header>
        <div className="mb-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category, index) => (
            <motion.div key={category.slug} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }}>
              <Link to={`/blog/${category.slug}`} className={`block rounded-xl border p-5 ${styles.categoryTile} ${category.styles.surface}`}>
                <span className={`text-2xl font-bold ${category.styles.accent}`}>0{index + 1}</span>
                <h2 className="mt-8 font-semibold">{category.name}</h2>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{category.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
        <section>
          <div className="mb-6 flex items-end justify-between border-b pb-4">
            <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Latest writing</p><h2 className="mt-2 text-2xl font-semibold">Start anywhere</h2></div>
            <Link to="/blog/cyber" className="hidden items-center gap-1 text-sm font-semibold hover:text-primary sm:flex">Browse all <ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.flatMap((category) => getPostsByCategory(category.slug)).slice(0, 3).map((post) => <BlogCard key={post.id} post={post} />)}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </ThemeProvider>
);

export default BlogList;
