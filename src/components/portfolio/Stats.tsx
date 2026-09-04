import { motion } from "framer-motion";
import { Briefcase, Star, Calendar } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Lottie from "lottie-react";
import catMovement from "@/assets/lottie/Cat Movement.json";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

const StatCard = ({ stat, index }: {
  stat: {
    icon: LucideIcon;
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
    isDecimal: stat.isDecimal,
  });

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="group relative overflow-hidden border-border/50 bg-background/70 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardContent className="relative z-10 p-5 sm:p-6 md:p-8 text-center">
          <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 rounded-2xl ${stat.bgColor} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500`}>
            <stat.icon className={stat.color} size={30} />
          </div>

          <motion.div
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3"
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
          >
            {count}{stat.suffix}
          </motion.div>

          <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">
            {stat.title}
          </p>
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

    // {
    //   icon: Users,
    //   title: "Happy Clients",
    //   target: 8,
    //   suffix: "+",
    //   color: "text-secondary",
    //   bgColor: "bg-secondary/10"
    // },

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
    <section id="stats" className="relative py-16 md:py-24 overflow-hidden" aria-labelledby="stats-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 id="stats-heading" className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-4">
            My Impact
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Numbers that reflect my commitment to excellence
          </p>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 max-w-5xl mx-auto">
          {statsData.map((stat, index) => (
            <StatCard key={stat.title} stat={stat} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative mt-16 md:mt-24 max-w-5xl mx-auto"
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


         
          <Card className="relative z-10 overflow-hidden border-primary/10 bg-background/70  shadow-2xl">
            <CardContent className="p-5 sm:p-6 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
                Recent Achievements
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
                <motion.div whileHover={{ y: -6, scale: 1.03 }} className="p-5 md:p-6 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/50">
                  <div className="text-3xl md:text-4xl font-black text-primary mb-3">100%</div>
                  <p className="font-semibold mb-2">Project Success Rate</p>
                  <p className="text-sm text-muted-foreground">Every project delivered successfully</p>
                </motion.div>

                <motion.div whileHover={{ y: -6, scale: 1.03 }} className="p-5 md:p-6 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/50">
                  <div className="text-3xl md:text-4xl font-black text-emerald-500 mb-3">24hrs</div>
                  <p className="font-semibold mb-2">Average Response Time</p>
                  <p className="text-sm text-muted-foreground">Fast communication and support</p>
                </motion.div>

                <motion.div whileHover={{ y: -6, scale: 1.03 }} className="p-5 md:p-6 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/50">
                  <div className="text-3xl md:text-4xl font-black text-yellow-500 mb-3">5⭐</div>
                  <p className="font-semibold mb-2">Client Satisfaction</p>
                  <p className="text-sm text-muted-foreground">Consistent positive feedback</p>
                </motion.div>
              </div>

              <div className="text-center mt-6 md:mt-10">
                <p className="text-sm md:text-base text-primary italic font-medium">
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
