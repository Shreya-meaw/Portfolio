import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code, Award, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import ProjectCardSkeleton from "@/components/skeletons/ProjectCardSkeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { trackProjectClick, trackFilterChange } from "@/lib/analytics";

import hack1 from "@/assets/hack1.jpeg";
import hack2 from "@/assets/hack2.jpeg";
import intern3 from "@/assets/intern3.jpeg";
import image3 from "@/assets/image3.jpeg";
import image4 from "@/assets/image4.jpeg";
import intern4 from "@/assets/intern4.jpeg";
import image6 from "@/assets/image6.jpeg";
import fig1 from "@/assets/fig1.jpeg";
import fig2 from "@/assets/fig2.jpeg";
import fig3 from "@/assets/fig3.jpeg";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  const figmaProjects = [
    {
      title: "PG Dekho – Zero-Brokerage PG & Rental Discovery Platform",
      role: "UI/UX Designer & Frontend Product Designer",
      stack: ["Figma", "UI Design", "Prototyping", "Design System"],
      summary: "PG Dekho is a zero-brokerage accommodation platform that enables users to discover verified PGs and rental properties with transparent pricing and complete control over owner interactions.",
      problemSolved: "The platform eliminates brokerage fees, unverified listings, and unwanted calls by providing a trusted, user-controlled, and location-based property discovery experience.",
      image: fig1,
      github: "https://www.figma.com/design/5QMyoT6I5RffghqIFfJFTP/pg-dekho?node-id=8-71&p=f&t=uk9jTgj5cmkVbazZ-0",
      demo: "https://www.figma.com/proto/5QMyoT6I5RffghqIFfJFTP/pg-dekho?node-id=8-72&starting-point-node-id=8%3A72",
      category: "figma"
    },
    {
      title: "SpiceGarden Restaurant Management", 
      role: "Frontend Developer & UI/UX Designer",
      stack: ["React", "Firebase", "Material-UI", "PWA"],
      summary: "Modern restaurant ordering system with real-time updates and table management for local restaurant chain.",
      problemSolved: "Digitized manual ordering process, reducing order errors by 85% and improving customer satisfaction.",
      image: fig2,
      github: "https://www.figma.com/design/SELEMQdszaYTvAz0iwWrID/scrab-to-paisa?node-id=0-1&p=f&t=uk9jTgj5cmkVbazZ-0",
      demo: "https://www.figma.com/proto/SELEMQdszaYTvAz0iwWrID/scrab-to-paisa?node-id=0-1&p=f&t=uk9jTgj5cmkVbazZ-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=22%3A797",
      category: "figma"
    },
    {
      title: "AfriTech Portfolio Website",
      role: "Full-Stack Developer",
      stack: ["React", "Next.js", "Sanity CMS", "Tailwind"],
      summary: "Portfolio website for African tech startup showcasing their innovative solutions across the continent.",
      problemSolved: "Created modern web presence that attracted 3 major investors and secured Series A funding.",
      image:fig3,
      github: "https://www.figma.com/design/PDIvHHs0IhyQ1TLNAgi8zx/umika?t=uk9jTgj5cmkVbazZ-0",
      demo: "https://www.figma.com/proto/PDIvHHs0IhyQ1TLNAgi8zx/umika?t=uk9jTgj5cmkVbazZ-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=0-1&starting-point-node-id=3%3A31353",
      category: "figma"
    }
  ];

  const hackathons = [
    {
      title: "InRealty - A modern real estate marketplace",
      role: "Team Lead & Frontend devloper",
      stack: ["Next.js", "Redux", "ShadCN", "React Hook Form"],
      summary: "InRealty is a modern real estate marketplace that enables users to discover, filter, and manage property listings through a fast, responsive, and scalable web application.",
      problemSolved: "The platform addresses fragmented property discovery and poor user experience by providing a centralized, intuitive, and performance-optimized solution for finding real estate efficiently.",
      image: hack2,
      award: "Lehal & Law",
      github: "https://github.com/78muskan/InRealty",
      demo: "https://www.figma.com/proto/EXLxo1TG4yW8q7SMf22UyO/solar_project?node-id=25-4&p=f&t=gpcZGxOkzCRdkI0q-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=25%3A4",
      category: "hackathon"
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
      demo: "https://www.figma.com/proto/5QMyoT6I5RffghqIFfJFTP/pg-dekho?node-id=8-72&p=f&t=gpcZGxOkzCRdkI0q-0&scaling=min-zoom&content-scaling=fixed&page-id=8%3A71&starting-point-node-id=8%3A72",
      category: "hackathon"
    }
  ];

  const internships = [
    {
      title: "WAAA – Corporate Website & Digital Services Platform",
      role: "Frontend Development Intern",
      stack: ["React.js", "JavaScript (ES6+)", "Chart.js", "Tailwind CSS", "React Router"],
      summary: "Built a responsive React.js corporate website for WAAA to showcase services, strengthen brand presence, and support client lead generation.",
      problemSolved: "WAAA lacked a modern, scalable digital platform to clearly present its offerings and build trust with potential clients.",
      company: "WAAA",
      image: image3,
      github: "https://github.com/usergd26/waaa-web/tree/develop",
      demo: "https://www.waaa.in/",
      category: "internship"
    },
    {
      title: "COLLAB – Influencer Marketing & Brand Collaboration Platform",
      role: "Frontend Developer", 
      stack: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "React Router"],
      summary: "Developed a responsive React.js platform for COLLAB that connects brands with verified influencers using AI-powered matching to drive measurable marketing growth.",
      problemSolved: "Brands struggled to find authentic, relevant influencers and manage campaigns efficiently, resulting in low ROI and fragmented collaboration workflows.",
      company: "COLLAB",
      image: image6,
      github: "https://github.com/WAAA-IT-Solution/collab-web",
      demo: "https://stellular-twilight-0b29ee.netlify.app/",
      category: "internship"
    },
    {
      title: "Digilo – Digital Business Card & Professional Identity Platform",
      role: "Frontend Developer", 
      stack: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "React Router"],
      summary: "A React-based digital platform that allows users to create, manage, and share secure digital business cards and professional identities across devices.",
      problemSolved: "Eliminates the need for physical business cards by providing a secure, instantly shareable, and always-updated digital alternative for professional networking.",
      company: "WAAA",
      image: intern3,
      github: "https://github.com/usergd26/digitalcard/tree/devlop",
      demo: "https://digitalcard-lake.vercel.app/about",
      category: "internship"
    },
    {
      title: "KidSafe – Kids Safety & Smart Attendance Management System",
      role: "Frontend Developer", 
      stack: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "React Router"],
      summary: "KidSafe is a web-based platform that ensures student safety through real-time attendance tracking and seamless communication between parents, teachers, and schools.",
      problemSolved: "Addresses the lack of transparency in student attendance and school communication by providing real-time safety confirmation and centralized parent–teacher interaction.",
      company: "From WAAA but different project",
      image: intern4,
      github: "https://github.com/oceantiwari/EduConnect",
      demo: "https://edu-connect-inky.vercel.app/",
      category: "internship"
    }
  ];

  // Combine all projects
  const allProjects = [...figmaProjects, ...hackathons, ...internships];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "all" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project, category }: { project: any, category: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className="overflow-hidden group bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 interactive-card">
        <div className="relative overflow-hidden">
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="secondary"
                onClick={() => {
                  trackProjectClick(project.title);
                  window.open(project.github, '_blank');
                }}
                className="hover-glow"
              >
                <Github size={16} className="mr-1" />
                Code
              </Button>
              <Button 
                size="sm" 
                variant="secondary"
                onClick={() => {
                  trackProjectClick(project.title);
                  window.open(project.demo, '_blank');
                }}
                className="hover-glow"
              >
                <ExternalLink size={16} className="mr-1" />
                Demo
              </Button>
            </div>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            {project.award && (
              <Badge variant="secondary" className="bg-warning text-warning-foreground">
                {project.award}
              </Badge>
            )}
          </div>
          
          <p className="text-sm text-primary font-medium mb-2">{project.role}</p>
          <p className="text-sm mb-3">{project.summary}</p>
          
          {project.problemSolved && (
            <div className="mb-4 p-3 bg-muted/50 rounded-lg border-l-4 border-success">
              <p className="text-xs text-success font-medium mb-1">💡 What I Solved:</p>
              <p className="text-xs text-muted-foreground">{project.problemSolved}</p>
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
              onClick={() => {
                trackProjectClick(project.title);
                window.open(project.github, '_blank');
              }}
            >
              <Github size={14} className="mr-1" />
              GitHub
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="text-xs flex-1 hover-glow"
              onClick={() => {
                trackProjectClick(project.title);
                window.open(project.demo, '_blank');
              }}
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
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Projects & Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my work across different domains and technologies
          </p>

          {/* Filter Tabs */}
          <Tabs 
            value={activeFilter} 
            onValueChange={(value) => {
              setActiveFilter(value);
              trackFilterChange(value);
            }} 
            className="w-full max-w-2xl mx-auto"
          >
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="all" className="flex items-center gap-2">
                All
              </TabsTrigger>
              <TabsTrigger value="figma" className="flex items-center gap-2">
                <Briefcase size={16} />
                Figma Work
              </TabsTrigger>
              <TabsTrigger value="hackathon" className="flex items-center gap-2">
                <Award size={16} />
                Hackathons
              </TabsTrigger>
              <TabsTrigger value="internship" className="flex items-center gap-2">
                <Code size={16} />
                Internships
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Filtered Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {isLoading ? (
            <>
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
            </>
          ) : (
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} category={project.category} />
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
    </>

  );
};

export default Projects;