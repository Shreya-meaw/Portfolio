import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AllProjects from "./pages/AllProjects";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import { PageTransition, FloatingContactButton } from "./components/common";
import { initGA, logPageView } from "./lib/analytics";
import { CurrencyProvider } from "./contexts/CurrencyContext";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    logPageView(location.pathname, document.title);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/all-projects" element={<PageTransition><AllProjects /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><BlogList /></PageTransition>} />
        <Route path="/blog/:id" element={<PageTransition><BlogPost /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/terms-of-service" element={<PageTransition><TermsOfService /></PageTransition>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <CurrencyProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AnimatedRoutes />
              <FloatingContactButton />
            </BrowserRouter>
          </TooltipProvider>
        </CurrencyProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
