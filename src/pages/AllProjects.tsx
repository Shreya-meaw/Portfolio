import { ThemeProvider } from "next-themes";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import Projects from "@/components/portfolio/Projects";

const AllProjects = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <Projects />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default AllProjects;
