import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';

// Import all your components
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
          
          {/* Blog routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          
          {/* Individual component routes (if needed) */}
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookNow />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/games" element={<Games />} />
          <Route path="/testimonials" element={<Testimonials />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<Index />} />
        </Routes>
        
        {/* Global Footer */}
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
