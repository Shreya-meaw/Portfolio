import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import Services from "@/components/portfolio/Services";
import About from "@/components/portfolio/About";
import TechStack from "@/components/portfolio/TechStack";
import ProjectHighlights from "@/components/portfolio/ProjectHighlights";
import Testimonials from "@/components/portfolio/Testimonials";
import Pricing from "@/components/portfolio/Pricing";
import HireMe from "@/components/portfolio/HireMe";
import Contact from "@/components/portfolio/Contact";
import Stats from "@/components/portfolio/Stats";
import Footer from "@/components/portfolio/Footer";
import Blog from "@/components/portfolio/Blog";
import { FloatingContactButton } from "@/components/common";

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <motion.div 
        className="min-h-screen bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <TechStack />
          <ProjectHighlights />
          <Testimonials />
          <Pricing />
          <Stats />
          <Blog />
          <HireMe />
          <Contact />
        </main>
        <Footer />
        <FloatingContactButton />
      </motion.div>
    </ThemeProvider>
  );
};

export default Index;
