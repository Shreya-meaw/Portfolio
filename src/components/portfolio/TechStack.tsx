import { motion } from "framer-motion";
import { Code, Database, Server, Cloud, Zap, Palette } from "lucide-react";

const TechStack = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React.js / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "HTML5 & CSS3", level: 98 },
        { name: "Tailwind CSS", level: 92 },
        { name: "UI/UX Design", level: 85 },
      ],
    },
    {
      category: "3D & Visualization",
      icon: Palette,
      skills: [
        { name: "Three.js", level: 80 },
        { name: "React Three Fiber", level: 75 },
        { name: "Charts & Dashboards", level: 88 },
        { name: "Interactive Visualizations", level: 85 },
      ],
    },
    {
      category: "Backend & Database",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 82 },
        { name: "Firebase", level: 78 },
        { name: "Redis", level: 70 },
      ],
    },
    {
      category: "Architecture & System Design",
      icon: Server,
      skills: [
        { name: "Component-Driven Architecture", level: 92 },
        { name: "Reusable UI Systems", level: 90 },
        { name: "Scalable Folder Structure", level: 88 },
        { name: "Design Patterns", level: 85 },
      ],
    },
    {
      category: "DevOps & Tools",
      icon: Zap,
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "CI/CD", level: 75 },
        { name: "Testing (Unit & Integration)", level: 80 },
        { name: "Figma", level: 85 },
      ],
    },
    {
      category: "Additional Skills",
      icon: Cloud,
      skills: [
        { name: "AI Integration", level: 82 },
        { name: "Security Best Practices", level: 85 },
        { name: "Code Review & Mentoring", level: 88 },
        { name: "API Design", level: 83 },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-muted/20" aria-labelledby="tech-stack-heading">
      <div className="container mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="tech-stack-heading" className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My proficiency levels across different technologies and domains
          </p>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 shadow-card border"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold ml-4">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="text-sm text-muted-foreground"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;