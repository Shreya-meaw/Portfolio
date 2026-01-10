import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Globe,
  FileText,
  Shield,
  Settings,
  MessageSquare,
  Rocket,
  Cpu,
  Zap,
  Cloud,
  Lock,
  Lightbulb,
  Table,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/animations/TextReveal";
import { useCurrency } from "@/contexts/CurrencyContext";

const Services = () => {
  const { currency, toggleCurrency, formatPrice } = useCurrency();
  const services = [
    {
      icon: Code,
      title: "Core Frontend Expertise",
      description: (
        <>
          <Cpu size={16} className="inline mr-1 text-primary" />
          React.js, TypeScript, JavaScript (ES6+), Responsive UI/UX, Modern animations
        </>
      ),
      gradient: "from-primary/90 to-primary/60",
    },
    {
      icon: Server,
      title: "2D/3D & Data Visualization",
      description: (
        <>
          <Rocket size={16} className="inline mr-1 text-secondary" />
          Three.js, React Three Fiber, Interactive dashboards, Advanced charting
        </>
      ),
      gradient: "from-secondary/90 to-secondary/60",
    },
    {
      icon: Database,
      title: "Database Design",
      description: (
        <>
          <Table size={16} className="inline mr-1 text-primary" />
          MongoDB, MySQL optimization, Efficient schema structuring
        </>
      ),
      gradient: "from-primary/90 to-primary/60",
    },
    {
      icon: Globe,
      title: "Architecture & System Design",
      description: (
        <>
          <Zap size={16} className="inline mr-1 text-secondary" />
          Component-driven architecture, Reusable UI systems, Scalable project structuring
        </>
      ),
      gradient: "from-secondary/90 to-secondary/60",
    },
    {
      icon: FileText,
      title: "Secondary Skills",
      description: (
        <>
          <FileText size={16} className="inline mr-1 text-primary" />
          Node.js, Express.js, Authentication basics, Python scripting
        </>
      ),
      gradient: "from-primary/90 to-primary/60",
    },
    {
      icon: Settings,
      title: "Hosting & Deployment",
      description: (
        <>
          <Cloud size={16} className="inline mr-1 text-secondary" />
          Netlify, Vercel, GitHub Pages, Cloud hosting exposure
        </>
      ),
      gradient: "from-secondary/90 to-secondary/60",
    },
    {
      icon: Shield,
      title: "Tooling & Professional Practices",
      description: (
        <>
          <Lock size={16} className="inline mr-1 text-primary" />
          Git & GitHub, CI/CD pipelines, Integration testing, Figma workflows
        </>
      ),
      gradient: "from-primary/90 to-primary/60",
    },
    {
      icon: MessageSquare,
      title: "Cross-Skill Edge / Extras",
      description: (
        <>
          <Lightbulb size={16} className="inline mr-1 text-secondary" />
          AI in frontend, Web security, Mentoring juniors, Tech stack planning
        </>
      ),
      gradient: "from-secondary/90 to-secondary/60",
    },
  ];

  const packages = [
    {
      name: "Starter",
      price: "$150 – $250",
      description: "Perfect for small businesses or portfolios",
      features: ["Landing Page", "Contact Form", "2D Animations", "Basic SEO"],
    },
    {
      name: "Advanced Projects",
      price: "$450 – $850",
      description: "Complete web solution with integrations",
      features: [
        "Multi-page site (up to 10 pages)",
        "Database Integration",
        "User Authentication",
        "Admin Dashboard",
      ],
      popular: true,
    },
    {
      name: "Custom",
      price: "Startup Collaboration",
      description: "Tailored features & scalable solutions",
      features: [
        "Custom Features",
        "Ongoing Support",
        "Performance Optimization",
        "Enterprise-grade Architecture",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden" aria-labelledby="services-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" aria-hidden="true" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-4">
            <TextReveal 
              text="What I Do" 
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              as="span"
            />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <TextReveal 
              text="Frontend development services designed to bring your ideas to life with modern, scalable solutions"
              delay={0.2}
            />
          </p>
        </motion.header>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-hover transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card via-card to-primary/5 border-primary/10 hover:border-primary/30 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-6 text-center relative z-10">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-md group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}
                  >
                    <service.icon className="text-white dark:text-gray-100" size={26} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pricing */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 id="pricing-heading" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Package Pricing
          </h3>
          <p className="text-muted-foreground mb-6">Clear and transparent pricing for every budget</p>
          <Button onClick={toggleCurrency} variant="outline" className="hover:scale-105 transition-all">
            Switch to {currency === "USD" ? "INR" : "USD"}
          </Button>
        </motion.header>

        <div className="grid md:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`relative h-full card-elegant hover-lift hover:shadow-hover transition-smooth rounded-2xl ${
                  pkg.popular ? "ring-2 ring-primary shadow-glow animate-glow" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-md">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h4 className="text-2xl font-bold mb-2">{pkg.name}</h4>
                  <div className="text-3xl font-bold text-primary mb-2">{formatPrice(pkg.price)}</div>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>
                  <ul className="space-y-2 mb-8 text-foreground/90">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="text-sm flex items-center justify-center gap-2">
                        <CheckCircle2 size={16} className="text-primary" /> {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            className="btn-gradient hover:scale-105 transition-all shadow-lg"
            size="lg"
            onClick={() =>
              document.getElementById("hire")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Let's Work Together
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
