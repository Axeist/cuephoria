import React from "react";
import "./App.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BookingLanding from "./pages/BookingLanding";
import CafeMenu from "./pages/CafeMenu";  // <-- Added import for CafeMenu

// Blog imports
import Blog from "./pages/Blog";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPost4 from "./pages/BlogPost4";
import BlogPost5 from "./pages/BlogPost5";
import BlogPost6 from "./pages/BlogPost6";
import BlogPost7 from "./pages/BlogPost7";
import BlogPost8 from "./pages/BlogPost8";
import BlogPost9 from "./pages/BlogPost9";
import BlogPost10 from "./pages/BlogPost10";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/book" element={<BookingLanding />} />
            <Route path="/cafemenu" element={<CafeMenu />} />  {/* <-- Added route here */}
            
            {/* Blog Routes */}
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
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};
export default App;
