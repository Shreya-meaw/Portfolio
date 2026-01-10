import React from "react";
import { motion } from "framer-motion";
import { Check, Calendar, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/contexts/CurrencyContext";

const Pricing = () => {
  const { currency, toggleCurrency, formatPrice } = useCurrency();

  const packages = [
    {
      name: "Starter",
      price: "$150 – $250",
      description: "Portfolio, personal site, event/mini‑business site",
      features: [
        "Landing Page: $50",
        "Responsive Design + SEO Setup: $40",
        "Basic SEO Optimization $30",
        "2D Animations / Interactions: $30",
        "Basic Contact Form + DB (MySQL/MongoDB): $40",
        "1 Month Support",
      ],
      popular: false,
      color: "border-primary/20",
    },
    {
      name: "Advanced Projects",
      price: "$450 – $850",
      description: "SaaS MVPs, growing startup",
      features: [
        "Multi‑page site (up to 8–10 pages)",
        "Database Integration",
        "User  Authentication (Login / Signup / OAuth)",
        "Admin Dashboard (CRUD with MySQL/MongoDB)",
        "Payment Gateway Integration (Stripe/Razorpay)",
        "Performance Optimization + On‑page SEO",
        "2D/3D Animations & Motion Design",
        "Security Implementation",
        "3 Months Support",
      ],
      popular: true,
      color: "border-primary ring-2 ring-primary/20",
    },
    {
      name: "Custom",
      price: "Startup Collaboration",
      description: "companies offering job roles or equity‑based collaboration.",
      features: [
        "Custom Feature Development",
        "Scalable Architecture",
        "Branding + animations for premium UX",
        "Performance Optimization",
        "24/7 Priority Support",
        "Ongoing Maintenance",
        "Team guidance (interns/junior devs)",
        "Documentation",
      ],
      popular: false,
      color: "border-secondary/20",
    },
  ];

  return (
    <>
     

      <section id="pricing" className="py-20 bg-muted/30" aria-labelledby="pricing-heading">
        <div className="container mx-auto px-4">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 id="pricing-heading" className="text-4xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Choose the perfect package for your project needs
            </p>

            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="text-success" size={16} />
                <span>Now booking for August 2025</span>
              </div>
              <Badge variant="secondary" className="bg-success text-success-foreground">
                Limited Slots Available
              </Badge>
            </div>
          </motion.header>
           <div className="text-center mb-8">
        <Button onClick={toggleCurrency}>
          Switch to {currency === "USD" ? "INR" : "USD"}
        </Button>
      </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={`h-full ${pkg.color} hover-lift transition-smooth ${
                    pkg.popular ? "shadow-glow" : ""
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <div className="mb-4">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-4xl font-bold text-primary">
                            {formatPrice(pkg.price)}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{pkg.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.15 + featureIndex * 0.05,
                            type: "spring",
                            stiffness: 120
                          }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <Check className="text-success mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${pkg.popular ? "btn-gradient" : "btn-ghost"} hover-lift`}
                      size="lg"
                      onClick={() =>
                        document.getElementById("hire")?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      {pkg.name === "Custom" ? (
                        <>Let's Discuss</>
                      ) : (
                        <>
                          <CreditCard className="mr-2" size={16} />
                          Get Started
                        </>
                      )}
                    </Button>

                    {pkg.name !== "Custom" && (
                      <p className="text-xs text-muted-foreground text-center mt-3">
                        50% advance payment required
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
