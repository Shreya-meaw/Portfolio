import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TextReveal } from "@/components/animations/TextReveal";

const About = () => {
  const techStack = [
    { name: "React.js", level: 90, color: "bg-primary" },
    { name: "Node.js", level: 85, color: "bg-secondary" },
    { name: "MongoDB", level: 80, color: "bg-primary" },
    { name: "HTML/CSS", level: 95, color: "bg-secondary" },
    { name: "JavaScript", level: 90, color: "bg-primary" },
    { name: "Express.js", level: 85, color: "bg-secondary" }
  ];

  const softSkills = [
    { icon: Users, title: "Team Collaboration", description: "teamwork" },
    { icon: Clock, title: "Punctuality", description: "Always deliver on time, every time" },
    { icon: Heart, title: "Client Focus", description: "Your success is my priority" },
    { icon: Award, title: "Quality Driven", description: "Clean code and best practices" }
  ];

  // Carousel images from public folder
  const images = ["/1stpic.jpg", "/tap.jpg", "/yes.jpg"];

  // State for current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* SVG Wave Divider */}
      {/*
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

      */}

      <section id="about" className="py-20 relative overflow-hidden" aria-labelledby="about-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" aria-hidden="true" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo Section */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative lg:order-1"
>
  <div className="relative w-80 h-80 mx-auto">
    <div className="w-full h-full rounded-full overflow-hidden shadow-hover border-4 border-primary/30 relative bg-gradient-to-br from-primary/10 to-accent/10 p-1">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[currentIndex]}
              src={images[currentIndex]}
              alt={`Shreya Singh professional portrait - Frontend Developer and Freelancer based in Dehradun, India`}
              className="w-full h-full object-cover absolute top-0 left-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
    </div>

    {/* Dots navigation */}
    <div className="flex justify-center mt-4 space-x-3">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => {
            setCurrentIndex(index);
            // Optionally reset auto-slide timer here if you have one
          }}
          className={`w-3 h-3 rounded-full transition-colors ${
            currentIndex === index
              ? "bg-primary"
              : "bg-primary/40 hover:bg-primary/70"
          }`}
          aria-label={`Go to image ${index + 1}`}
        />
      ))}
    </div>

    {/* Floating elements */}
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-sm"
    />
    <motion.div
      animate={{ rotate: [360, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary/20 rounded-full blur-sm"
    />
  </div>

  {/* Mini Timeline */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
    className="mt-8 space-y-3"
  >
    <div className="flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-primary"></div>
      <span className="text-sm text-muted-foreground">2023 – Started BCA Journey</span>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-secondary"></div>
      <span className="text-sm text-muted-foreground">2024 – First Internship & Projects</span>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-primary"></div>
      <span className="text-sm text-muted-foreground">2025 – Freelance Web Developer</span>
    </div>
  </motion.div>
</motion.div>


            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <h2 id="about-heading" className="text-4xl font-bold mb-6">
                <TextReveal text="About Me" as="span" />
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  <TextReveal text="Hi! I'm Shreya Singh, a passionate full-stack developer with over a year of experience in creating beautiful, functional websites and applications. My journey started with curiosity about how websites work, and now I'm delivering projects for clients globally." delay={0.1} />
                </p>
                <p>
                  <TextReveal text="I specialize in modern web technologies like React.js, Node.js, and MongoDB. My approach combines technical expertise with a deep understanding of user experience to create solutions that not only work flawlessly but also delight users." delay={0.2} />
                </p>
                <p>
                  <TextReveal text="I love solving tough UI challenges and creating joyful digital experiences. When I'm not coding, I'm learning new technologies, contributing to open-source projects, or planning my next exciting project. I believe in continuous learning and staying updated with the latest industry trends." delay={0.3} />
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-8 p-6 rounded-2xl shadow-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-green-50 to-green-100 dark:from-green-800 dark:to-blue-900"
              >
                <p className="text-lg font-medium italic text-gray-800 dark:text-gray-200">
                  "Started with curiosity, now delivering global projects."
                </p>
              </motion.div>
            </motion.div>

            {/* Right Content - Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8">Tech Stack</h3>
              <div className="space-y-4 mb-12">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{tech.name}</span>
                      <span className="text-sm text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${tech.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="text-center hover-lift transition-smooth">
                      <CardContent className="p-4">
                        <skill.icon className="mx-auto mb-3 text-primary" size={32} />
                        <h4 className="font-semibold text-sm mb-1">{skill.title}</h4>
                        <p className="text-xs text-muted-foreground">{skill.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
