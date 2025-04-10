
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Games from '../components/Games';
import Gallery from '../components/Gallery';
import BookNow from '../components/BookNow';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PromotionalPopup from '../components/PromotionalPopup';
import SEOMetadata from '../components/SEOMetadata';
import { ChevronUp } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollProgress, setShowScrollProgress] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Improved smooth scroll implementation with better easing
  useEffect(() => {
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      
      if (target.tagName === 'A' && target.hash && target.hash.startsWith('#')) {
        const targetSection = document.querySelector(target.hash);
        if (targetSection) {
          e.preventDefault();
          const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY;
          
          // Smoother scroll with cubic-bezier easing
          window.scrollTo({
            top: offsetTop - 110, // Adjusted offset for navbar + news ticker
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

  // Enhanced scroll tracking with improved debouncing for smoother updates
  useEffect(() => {
    let frameId: number | null = null;
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const handleScroll = () => {
      lastScrollY = window.scrollY;
      
      if (!ticking) {
        frameId = requestAnimationFrame(() => {
          // Calculate scroll progress with smoother interpolation
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const rawProgress = (lastScrollY / totalHeight) * 100;
          
          // Apply easing to the progress for smoother transitions
          setScrollProgress(prevProgress => {
            const delta = rawProgress - prevProgress;
            return prevProgress + delta * 0.3; // Adjust the 0.3 factor for different smoothing effects
          });
          
          if (lastScrollY > 200) {
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
              // Improved detection to make it smoother
              if (rect.top <= 150 && rect.bottom >= 100) {
                current = section;
                break;
              }
            }
          }
          
          if (current && current !== activeSection) {
            setActiveSection(current);
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [activeSection]);

  // Intersection Observer for animations with improved thresholds and handling
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5] // Multiple thresholds for smoother animations
    };

    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Apply animation with a slight delay based on the element's position
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in');
          }, Math.random() * 100); // Random small delay for staggered effect
          
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
      <SEOMetadata />
      <Navbar activeSection={activeSection} />
      {/* Reduced padding-top to minimize gap */}
      <main className="pt-20">
        <Hero />
        <About />
        <Games />
        <Gallery />
        <BookNow />
        <Contact />
        <Footer />
      </main>
      
      {/* Promotional Popup */}
      <PromotionalPopup delayInSeconds={30} reappearInSeconds={120} />
      
      {/* Interactive scroll indicator with smoother animation */}
      <div className={`fixed right-4 top-1/2 transform -translate-y-1/2 h-1/3 w-2 bg-gaming-accent/20 rounded-full z-40 transition-opacity duration-500 ${showScrollProgress ? 'opacity-100' : 'opacity-0'}`}>
        <div 
          className="bg-neon-blue rounded-full w-full transition-all duration-700 ease-out"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>
      
      {/* Back to top button with progress indicator */}
      <a 
        href="#home"
        className={`fixed bottom-8 right-8 h-12 w-12 rounded-full bg-gaming-darker text-white border border-neon-blue/30 flex items-center justify-center z-40 shadow-lg transition-all duration-500 ease-out overflow-hidden ${showScrollProgress ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{
          background: `conic-gradient(rgba(0, 255, 255, 0.8) ${scrollProgress}%, #121826 0%)`
        }}
        aria-label="Back to top"
      >
        <div className="absolute inset-1 rounded-full bg-gaming-darker flex items-center justify-center">
          <ChevronUp size={20} className="text-neon-blue" />
        </div>
      </a>
    </div>
  );
};

export default Index;
