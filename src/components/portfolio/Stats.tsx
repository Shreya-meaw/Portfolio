import { motion } from "framer-motion";
import { Briefcase, Users, Star, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Lottie from "lottie-react";
import catMovement from "@/assets/lottie/Cat Movement.json";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

const StatCard = ({ 
  stat, 
  index 
}: { 
  stat: { 
    icon: any; 
    title: string; 
    target: number;
    suffix: string; 
    color: string; 
    bgColor: string; 
    isDecimal?: boolean;
  }; 
  index: number;
}) => {
  const { count, elementRef } = useCounterAnimation({
    target: stat.target,
    duration: 2000,
    isDecimal: stat.isDecimal
  });

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="text-center hover-lift transition-smooth">
        <CardContent className="p-6">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${stat.bgColor} flex items-center justify-center`}>
            <stat.icon className={stat.color} size={32} />
          </div>
          
          <motion.div
            className="text-3xl font-bold mb-2"
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
          >
            {count}{stat.suffix}
          </motion.div>
          
          <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Stats = () => {
  const statsData = [
    {
      icon: Briefcase,
      title: "Projects Completed",
      target: 15,
      suffix: "+",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Users,
      title: "Happy Clients",
      target: 8,
      suffix: "+",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Star,
      title: "Average Rating",
      target: 4.9,
      suffix: "/5",
      color: "text-warning",
      bgColor: "bg-warning/10",
      isDecimal: true
    },
    {
      icon: Calendar,
      title: "Years Experience",
      target: 2,
      suffix: "+",
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  return (
    <section id="stats" className="py-20" aria-labelledby="stats-heading">
      <div className="container mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="stats-heading" className="text-4xl font-bold mb-4">My Impact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect my commitment to excellence
          </p>
        </motion.header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {statsData.map((stat, index) => (
            <StatCard key={stat.title} stat={stat} index={index} />
          ))}
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative mt-16 max-w-3xl mx-auto"
        >
          {/* 🎬 Lottie animation as background */}
          <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
            <Lottie
              animationData={catMovement}
              loop
              autoplay
              className="w-full h-full object-cover" // Maintain aspect ratio
              style={{ maxWidth: '100%', maxHeight: '100%' }} // Ensure it fits within the container
            />
            {/* Optional theme overlay for dark/light compatibility */}
            <div className="absolute inset-0 bg-white/40 dark:bg-black/40" />
          </div>

          {/* 🔽 Content stays on top */}
          <Card className="relative z-10 bg-transparent">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Recent Achievements</h3>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <motion.div whileHover={{ scale: 1.05 }} className="p-4">
                  <div className="text-2xl font-bold text-primary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Project Success Rate</p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="p-4">
                  <div className="text-2xl font-bold text-emerald-500 mb-2">24hrs</div>
                  <p className="text-sm text-emerald-500">Average Response Time</p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="p-4">
                  <div className="text-2xl font-bold text-warning mb-2">5⭐</div>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </motion.div>
              </div>

              <div className="text-center mt-8">
                <p className="text-sm text-emerald-500 italic">
                  "Consistency and quality in every project delivery"
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
