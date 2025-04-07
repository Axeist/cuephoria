
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Games from '../components/Games';
import Gallery from '../components/Gallery';
import BookNow from '../components/BookNow';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ChevronUp } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollProgress, setShowScrollProgress] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Smooth scroll implementation
  useEffect(() => {
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      
      if (target.tagName === 'A' && target.hash && target.hash.startsWith('#')) {
        const targetSection = document.querySelector(target.hash);
        if (targetSection) {
          e.preventDefault();
          window.scrollTo({
            top: targetSection.getBoundingClientRect().top + window.scrollY,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleHashLinkClick);
    
    return () => {
      document.removeEventListener('click', handleHashLinkClick);
    };
  }, []);

  // Enhanced scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      if (window.scrollY > 200) {
        setShowScrollProgress(true);
      } else {
        setShowScrollProgress(false);
      }

      // Determine active section for navigation highlighting
      const sections = ['home', 'about', 'games', 'gallery', 'book-now', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the element is close to the top of the viewport, or if we're at the element
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Target elements to observe (sections, headings, etc.)
    const targetElements = document.querySelectorAll('section, h2, .glass-card');
    
    targetElements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gaming-dark text-white">
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Games />
      <Gallery />
      <BookNow />
      <Contact />
      <Footer />
      
      {/* Interactive scroll indicator */}
      <div className={`fixed right-4 top-1/2 transform -translate-y-1/2 h-1/3 w-2 bg-gaming-accent/20 rounded-full z-50 transition-opacity duration-300 ${showScrollProgress ? 'opacity-100' : 'opacity-0'}`}>
        <div 
          className="bg-neon-blue rounded-full w-full transition-all duration-300"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>
      
      {/* Back to top button with progress indicator */}
      <a 
        href="#home"
        className={`fixed bottom-8 right-8 h-12 w-12 rounded-full bg-gaming-darker text-white border border-neon-blue/30 flex items-center justify-center z-50 shadow-lg transition-all duration-300 overflow-hidden ${showScrollProgress ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{
          background: `conic-gradient(rgba(0, 255, 255, 0.8) ${scrollProgress}%, #121826 0%)`
        }}
      >
        <div className="absolute inset-1 rounded-full bg-gaming-darker flex items-center justify-center">
          <ChevronUp size={20} className="text-neon-blue" />
        </div>
      </a>
    </div>
  );
};

export default Index;
