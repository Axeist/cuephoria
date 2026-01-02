import React, { Suspense, lazy } from "react";
import "./App.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load routes for better initial performance
const BookingLanding = lazy(() => import("./pages/BookingLanding"));
const CafeMenu = lazy(() => import("./pages/CafeMenu"));

// Lazy load blog routes (not critical for initial load)
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost1 = lazy(() => import("./pages/BlogPost1"));
const BlogPost2 = lazy(() => import("./pages/BlogPost2"));
const BlogPost3 = lazy(() => import("./pages/BlogPost3"));
const BlogPost4 = lazy(() => import("./pages/BlogPost4"));
const BlogPost5 = lazy(() => import("./pages/BlogPost5"));
const BlogPost6 = lazy(() => import("./pages/BlogPost6"));
const BlogPost7 = lazy(() => import("./pages/BlogPost7"));
const BlogPost8 = lazy(() => import("./pages/BlogPost8"));
const BlogPost9 = lazy(() => import("./pages/BlogPost9"));
const BlogPost10 = lazy(() => import("./pages/BlogPost10"));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen bg-gaming-dark flex items-center justify-center">
    <div className="w-12 h-12 border-t-2 border-neon-blue rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/book" element={<BookingLanding />} />
              <Route path="/cafemenu" element={<CafeMenu />} />
              
              {/* Blog Routes - lazy loaded */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/why-we-started-cuephoria" element={<BlogPost1 />} />
              <Route path="/blog/ultimate-student-hangout" element={<BlogPost2 />} />
              <Route path="/blog/nervous-beginner-to-pool-pro" element={<BlogPost3 />} />
              <Route path="/blog/late-night-gaming-sessions" element={<BlogPost4 />} />
              <Route path="/blog/parents-ask-whats-special" element={<BlogPost5 />} />
              <Route path="/blog/art-of-perfect-break" element={<BlogPost6 />} />
              <Route path="/blog/nit50-student-discount" element={<BlogPost7 />} />
              <Route path="/blog/nit99-happy-hours" element={<BlogPost8 />} />
              <Route path="/blog/nit-trichy-gaming-culture" element={<BlogPost9 />} />
              <Route path="/blog/student-stress-relief-gaming" element={<BlogPost10 />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};
export default App;
