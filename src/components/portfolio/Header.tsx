import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { navItems } from "@/data";
import { scrollToSection } from "@/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // Handle navigation - works on any page
  const handleNavigation = (href: string) => {
    // First remove scroll lock immediately
    document.body.classList.remove("no-scroll");
    
    // Close mobile menu
    setIsOpen(false);
    
    // Small delay to allow menu close animation, then scroll
    setTimeout(() => {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          scrollToSection(href);
        }, 100);
      } else {
        scrollToSection(href);
      }
    }, 50);
  };

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-background/70 dark:bg-background/60 border-b border-border/50 shadow-sm"
      role="banner"
    >
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          onClick={() => {
            if (location.pathname !== '/') {
              navigate('/');
            } else {
              scrollToSection("#home");
            }
            setIsOpen(false);
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="text-xl font-bold tracking-tight text-foreground cursor-pointer relative group"
          aria-label="Shreya Singh Portfolio Home"
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Shreya Singh
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out group-hover:w-full"></span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label="Primary Navigation">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              onClick={() => handleNavigation(item.href)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-4 py-2 font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer rounded-lg hover:bg-muted/50"
            >
              {item.label}
              <motion.span 
                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100"
                whileHover={{ scale: 1.5, opacity: 1 }}
              />
            </motion.div>
          ))}
        </nav>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-full w-10 h-10 bg-muted/50 hover:bg-muted transition-all duration-300"
              aria-label="Toggle Dark/Light Theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === "light" ? 0 : 180 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </motion.div>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full w-10 h-10 bg-muted/50 hover:bg-muted transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 overflow-hidden pointer-events-auto"
            aria-label="Mobile Navigation"
            style={{ zIndex: 50 }}
          >
            <div className="py-4 px-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  type="button"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleNavigation(item.href);
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200 cursor-pointer font-medium touch-manipulation"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;