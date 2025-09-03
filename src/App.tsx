import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';

// Import all your main components
import Index from './pages/Index';
import About from './components/About';
import BookNow from './components/BookNow';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Games from './components/Games';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Terms from './components/Terms';
import Navbar from './components/Navbar';
import NewsTicker from './components/NewsTicker';
import PromotionalPopup from './components/PromotionalPopup';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

// Blog-related imports
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// Individual Blog Page Components (create these)
import WhyWeStartedCuephoria from './pages/blog/WhyWeStartedCuephoria';
import UltimateStudentHangout from './pages/blog/UltimateStudentHangout';
import NervousBeginnerToPoolPro from './pages/blog/NervousBeginnerToPoolPro';
import LateNightGamingSessions from './pages/blog/LateNightGamingSessions';
import ParentsAskWhatsSpecial from './pages/blog/ParentsAskWhatsSpecial';
import ArtOfPerfectBreak from './pages/blog/ArtOfPerfectBreak';

function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* IMPORTANT: ScrollToTop must be inside Router but outside Routes */}
        <ScrollToTop />
        
        {/* Global Components that appear on all pages */}
        <Navbar />
        <NewsTicker />
        <Chatbot />
        <PromotionalPopup />
        
        <Routes>
          {/* Main homepage route */}
          <Route path="/" element={<Index />} />
          
          {/* Individual component routes */}
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookNow />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/games" element={<Games />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Blog routes */}
          <Route path="/blog" element={<Blog />} />
          
          {/* Dynamic blog post route - handles any blog post ID */}
          <Route path="/blog/:postId" element={<BlogPost />} />
          
          {/* Individual static blog post routes (optional - for SEO/direct access) */}
          <Route path="/blog/why-we-started-cuephoria" element={<WhyWeStartedCuephoria />} />
          <Route path="/blog/ultimate-student-hangout" element={<UltimateStudentHangout />} />
          <Route path="/blog/nervous-beginner-to-pool-pro" element={<NervousBeginnerToPoolPro />} />
          <Route path="/blog/late-night-gaming-sessions" element={<LateNightGamingSessions />} />
          <Route path="/blog/parents-ask-whats-special" element={<ParentsAskWhatsSpecial />} />
          <Route path="/blog/art-of-perfect-break" element={<ArtOfPerfectBreak />} />
          
          {/* Additional utility routes */}
          <Route path="/hero" element={<Hero />} />
          
          {/* Catch-all route for 404 - redirects to homepage */}
          <Route path="*" element={<Index />} />
        </Routes>
        
        {/* Global Footer */}
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
