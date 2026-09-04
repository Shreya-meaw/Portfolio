import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { LoadingScreen, PageTransition } from "./components/common";
import { initGA, logPageView } from "./lib/analytics";
import { CurrencyProvider } from "./contexts/CurrencyContext";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AllProjects = lazy(() => import("./pages/AllProjects"));
const BlogList = lazy(() => import("./pages/BlogList"));
const BlogCategory = lazy(() => import("./pages/BlogCategory"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 5 * 60 * 1000, refetchOnWindowFocus: false },
  },
});

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    logPageView(location.pathname, document.title);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="route-loading" role="status">Loading...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/all-projects" element={<PageTransition><AllProjects /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><BlogList /></PageTransition>} />
          <Route path="/blog/:category" element={<PageTransition><BlogCategory /></PageTransition>} />
          <Route path="/blog/:category/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
          <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
          <Route path="/terms-of-service" element={<PageTransition><TermsOfService /></PageTransition>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => {
  const [documentReady, setDocumentReady] = useState(() => document.readyState === "complete");
  const [visualReady, setVisualReady] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  const handleLoaderExited = useCallback(() => {
    setShowLoadingScreen(false);
  }, []);

  useEffect(() => {
    // Initialize Google Analytics
    initGA();
  }, []);

  useEffect(() => {
    const handleWindowLoad = () => setDocumentReady(true);
    const handleSplineReady = () => setVisualReady(true);
    const isMobile = !window.matchMedia("(min-width: 768px)").matches;
    const fallbackId = window.setTimeout(() => setVisualReady(true), 4000);

    window.addEventListener("load", handleWindowLoad, { once: true });
    window.addEventListener("portfolio:spline-ready", handleSplineReady, { once: true });
    if (isMobile) setVisualReady(true);

    return () => {
      window.removeEventListener("load", handleWindowLoad);
      window.removeEventListener("portfolio:spline-ready", handleSplineReady);
      window.clearTimeout(fallbackId);
    };
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <CurrencyProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {showLoadingScreen && (
              <LoadingScreen isReady={documentReady && visualReady} onExited={handleLoaderExited} />
            )}
            <BrowserRouter>
              <AnimatedRoutes />
            </BrowserRouter>
          </TooltipProvider>
        </CurrencyProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
