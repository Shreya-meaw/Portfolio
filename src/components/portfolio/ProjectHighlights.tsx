import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectCardSkeleton from "@/components/skeletons/ProjectCardSkeleton";
import image3 from "@/assets/image3.jpeg";
import hack1 from "@/assets/hack1.jpeg";
import fig1 from "@/assets/fig1.jpeg";

const ProjectHighlights = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  const recentProjects = [
    {
       title: "PG Dekho – Zero-Brokerage PG & Rental Discovery Platform",
      role: "UI/UX Designer & Frontend Product Designer",
      stack: ["Figma", "UI Design", "Prototyping", "Design System"],
      summary: "PG Dekho is a zero-brokerage accommodation platform that enables users to discover verified PGs and rental properties with transparent pricing and complete control over owner interactions.",
      problemSolved: "The platform eliminates brokerage fees, unverified listings, and unwanted calls by providing a trusted, user-controlled, and location-based property discovery experience.",
      image: fig1,
      github: "https://www.figma.com/design/5QMyoT6I5RffghqIFfJFTP/pg-dekho?node-id=8-71&p=f&t=uk9jTgj5cmkVbazZ-0",
      demo: "https://www.figma.com/proto/5QMyoT6I5RffghqIFfJFTP/pg-dekho?node-id=8-72&starting-point-node-id=8%3A72"
    },
    {
         title: "WAAA – Corporate Website & Digital Services Platform",
      role: "Frontend Development Intern",
      stack: ["React.js", "JavaScript (ES6+)", "Chart.js", "Tailwind CSS", "React Router"],
      summary: "Built a responsive React.js corporate website for WAAA to showcase services, strengthen brand presence, and support client lead generation.",
      problemSolved: "WAAA lacked a modern, scalable digital platform to clearly present its offerings and build trust with potential clients.",
      company: "WAAA",
      image: image3,
      github: "https://github.com/usergd26/waaa-web/tree/develop",
      demo: "https://www.waaa.in/"
    },
    {
     title: "EcoTrace Carbon Tracker",
      role: "Team Lead & Full-Stack Developer",
      stack: ["HTML5", "CSS3", "Bootstrap", "Spline", "JavaScript","UIverse"],
      summary: "A parent-focused digital learning platform for children aged 4–8 that delivers safe, engaging, and skill-based education while visualizing progress through a gamified virtual garden.",
      problemSolved: "The platform solves the lack of safe, trackable, and meaningful digital learning for young children by giving parents and teachers full control, visibility, and structured growth without compromising privacy or engagement.",
      image: hack1,
      award: "🏆 1st Runnerup",
      github: "https://github.com/Shreya-meaw/Education",
      demo: "https://www.figma.com/proto/5QMyoT6I5RffghqIFfJFTP/pg-dekho?node-id=8-72&p=f&t=gpcZGxOkzCRdkI0q-0&scaling=min-zoom&content-scaling=fixed&page-id=8%3A71&starting-point-node-id=8%3A72"
    }
  ];

  const ProjectCard = ({ project }: { project: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden group relative bg-gradient-to-br from-card via-card to-primary/5 border-primary/10 hover:border-primary/30 shadow-card hover:shadow-hover transition-all duration-500">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img 
            src={project.image} 
            alt={`${project.title} - ${project.role} project using ${project.stack.join(', ')}`}
            className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="flex gap-2">
              <Button 
                size="sm" 
                className="bg-primary/90 hover:bg-primary backdrop-blur-sm shadow-glow hover:shadow-hover transition-all duration-300 hover:scale-105"
                onClick={() => window.open(project.github, '_blank')}
              >
                <Github size={16} className="mr-1" />
                Code
              </Button>
              <Button 
                size="sm" 
                className="bg-accent/90 hover:bg-accent backdrop-blur-sm shadow-glow hover:shadow-hover transition-all duration-300 hover:scale-105"
                onClick={() => window.open(project.demo, '_blank')}
              >
                <ExternalLink size={16} className="mr-1" />
                Demo
              </Button>
            </div>
          </div>
        </div>
        
        <CardContent className="p-6 relative">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{project.title}</h3>
            {project.award && (
              <Badge className="bg-gradient-to-r from-warning to-warning/70 text-warning-foreground shadow-md animate-pulse">
                {project.award}
              </Badge>
            )}
          </div>
          
          <p className="text-sm text-primary font-semibold mb-2">{project.role}</p>
          <p className="text-sm text-muted-foreground mb-3">{project.summary}</p>
          
          {project.problemSolved && (
            <div className="mb-4 p-3 bg-gradient-to-br from-success/10 to-success/5 rounded-lg border-l-4 border-success shadow-sm">
              <p className="text-xs text-success font-bold mb-1">💡 What I Solved:</p>
              <p className="text-xs text-foreground/80">{project.problemSolved}</p>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech: string) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="outline" 
              className="text-xs flex-1 hover-glow"
              onClick={() => window.open(project.github, '_blank')}
            >
              <Github size={14} className="mr-1" />
              GitHub
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="text-xs flex-1 hover-glow"
              onClick={() => window.open(project.demo, '_blank')}
            >
              <ExternalLink size={14} className="mr-1" />
              Live Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <>
      {/* SVG Wave Divider */}
      <div className="w-full overflow-hidden leading-[0] relative -mt-1">
        <svg
          className="w-full h-[50px] md:h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#457D84"
            d="M929 38c-12-5-24-8-36-8l-10 8c-22-9-42-18-72-18l-28 25H217l-28-25c-31 0-51 10-72 18l-9-8c-13 0-25 3-37 8L40 50l31 13c12 5 24 7 37 7l9-8c22 9 42 18 72 18l28-25h566l28 25c31 0 51-10 72-18l10 8c12 0 24-2 36-7l31-13-31-12Z"
          />
        </svg>
      </div>
      
      <section id="projects" className="py-20 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden" aria-labelledby="projects-heading">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Project Highlights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing my most recent and impactful work
            </p>
          </motion.header>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {isLoading ? (
              <>
                <ProjectCardSkeleton />
                <ProjectCardSkeleton />
                <ProjectCardSkeleton />
              </>
            ) : (
              recentProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))
            )}
          </div>

          <div className="flex justify-center">
            <Link to="/all-projects">
              <Button size="lg" className="group">
                View All Projects & Experience
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectHighlights;
