import { motion } from "framer-motion";
import { Heart, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { socialLinks, footerQuickLinks, servicesList } from "@/data";
import { scrollToSection } from "@/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  // Handle navigation click
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(href);
      }, 150);
    } else {
      scrollToSection(href);
    }
  };

  return (
    <footer
      className="bg-card border-t"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* About Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            itemScope
            itemType="https://schema.org/Person"
          >
            <h3 className="text-2xl font-bold text-primary mb-4" itemProp="name">
              Shreya Singh
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed" itemProp="description">
              I am Shreya Singh, a Frontend & Full-Stack Web Developer and Freelancer. I specialize in React.js, Node.js, and building scalable, modern web solutions that help startups and businesses grow online. Available globally for web projects, consulting, and collaboration.
            </p>
            <nav className="flex flex-wrap gap-2" aria-label="Social Media Links">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 transition-transform"
                  onClick={() => window.open(social.href, "_blank", "noopener,noreferrer")}
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon size={18} />
                </Button>
              ))}
            </nav>
          </motion.section>

          {/* Quick Links */}
          <motion.nav
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            aria-label="Quick Navigation Links"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    title={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Services */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Services I Offer</h4>
            <ul className="space-y-2 list-disc pl-4">
              {servicesList.map((service) => (
                <li key={service} className="text-muted-foreground text-sm" itemProp="makesOffer">
                  {service}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Contact Info */}
          <motion.address
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="not-italic"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="text-primary" size={16} />
                <span className="text-muted-foreground" itemProp="email">
                  shreyasingh7297@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary" size={16} />
                <span className="text-muted-foreground" itemProp="telephone">
                  +91 8279948895
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-primary" size={16} />
                <span className="text-muted-foreground" itemProp="addressLocality">
                  Dehradun
                </span>
              </div>
              <meta itemProp="addressRegion" content="Uttarakhand" />
              <meta itemProp="postalCode" content="248001" />
              <meta itemProp="addressCountry" content="India" />
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-center">
                <strong>Ready to start your web project?</strong><br />
                <a 
                  href="#hire" 
                  onClick={(e) => handleNavClick(e, "#hire")}
                  className="text-primary hover:underline cursor-pointer"
                >
                  Let's collaborate and build something amazing!
                </a>
              </p>
            </div>
          </motion.address>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} <span itemProp="name">Shreya Singh</span>. All rights reserved.
            </p>

            <div className="flex items-center space-x-1 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="text-red-500 fill-current" size={14} />
              <span>and lots of passion for web development</span>
            </div>

            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors" rel="noopener">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors" rel="noopener">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>

        {/* Floating Back to Top */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-24 right-8 z-40"
        >
          <motion.div
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-lg bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;