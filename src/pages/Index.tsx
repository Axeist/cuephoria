import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Games from '../components/Games';
import Tournaments from '../components/Tournaments';
import Gallery from '../components/Gallery';
import BookNow from '../components/BookNow';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PromotionalPopup from '../components/PromotionalPopup';
import Chatbot from '../components/Chatbot';
import SEOMetadata from '../components/SEOMetadata';
import Testimonials from '../components/Testimonials';
import { ChevronUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const handleHashLinkClick = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.hash && target.hash.startsWith('#')) {
        const targetSection = document.querySelector(target.hash);
        if (targetSection) {
          e.preventDefault();
          const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: offsetTop - 110,
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

  useEffect(() => {
    let frameId = null;
    let lastScrollY = window.scrollY;
    let ticking = false;
    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        frameId = requestAnimationFrame(() => {
          const sections = ['home', 'about', 'games', 'tournaments', 'gallery', 'testimonials', 'book-now', 'contact'];
          let current = '';
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
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

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5]
    };
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in');
          }, Math.random() * 100);
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const targetElements = document.querySelectorAll('section, h1, h2, .glass-card');
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
      <SEOMetadata 
        title="Cuephoria | Best PS5 Gaming & Pool Club for Students in Trichy" 
        description="Visit Cuephoria - Trichy's #1 gaming lounge with student discounts! Enjoy PS5 games, 8-ball pool, snooker & the perfect college hangout spot. Book online for exclusive student offers!"
      />
      <Navbar activeSection={activeSection} />
      <main className="pt-16">
        <h1 className="sr-only">Cuephoria - Best PS5 Gaming, 8-Ball Pool, Snooker and Student Hangout Place in Trichy</h1>
        <Hero className="mt-8 md:mt-[-2rem]" />
        <About />
        <Games />
        <Tournaments />
        <Gallery />
        <Testimonials />
        <BookNow />
        <Contact />

        {/* Contact Section Added */}
        <div className="max-w-5xl mx-auto p-6 mt-12 mb-12 bg-gaming-darker/80 rounded-xl border border-neon-blue/30 text-center">
          <p className="text-lg font-semibold mb-4">Can't book online or want to speak directly?</p>

          {/* Old WhatsApp Chatbot Number */}
          <div className="mb-4">
            <a
              href={`https://wa.me/918637625155?text=${encodeURIComponent("Hi! I'd like to book a slot at Cuephoria. [Monthly Membership Offer]")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-neon-pink/90 text-white hover:bg-neon-pink transition-all duration-300 text-base font-medium"
            >
              Chat with Cuephoria Assistant (Chatbot)
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <p className="mt-1 text-sm text-gray-400">
              WhatsApp AI Assistant (automated support) – <strong>+91 86376 25155</strong>
            </p>
          </div>

          {/* New WhatsApp Real Agent Number */}
          <div className="mb-6">
            <a
              href={`https://wa.me/917550025155?text=${encodeURIComponent("Hi! I'd like to speak with a real Cuephoria agent regarding bookings.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-neon-blue/90 text-white hover:bg-neon-blue transition-all duration-300 text-base font-medium"
            >
              Talk to a Real Agent on WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <p className="mt-1 text-sm text-gray-400">
              Direct WhatsApp with a human agent – <strong>+91 75500 25155</strong>
            </p>
          </div>

          {/* Call Information */}
          <div className="text-gray-300 text-base">
            📞 Call us:
            <br />
            <span className="block">+91 86376 25155 (Primary)</span>
            <span className="block">+91 75500 25155 (Secondary)</span>
          </div>
        </div>

        <Footer />
      </main>
      
      <PromotionalPopup delayInSeconds={30} reappearInSeconds={120} />
      <Chatbot />
      
      <Link 
        to="/book"
        className="fixed left-8 bottom-8 z-40 px-6 py-3 bg-neon-pink text-white font-medium rounded-full shadow-lg hover:bg-neon-pink/90 transition-all duration-300 animate-pulse-slow hidden md:flex items-center"
      >
        Book Now <span className="ml-1 text-xs">✨</span>
      </Link>
      
      <a 
        href="#home"
        className="fixed bottom-8 right-8 h-12 w-12 rounded-full bg-gaming-darker text-white border border-neon-blue/30 flex items-center justify-center z-40 shadow-lg transition-all duration-500 ease-out overflow-hidden"
        aria-label="Back to top"
        style={{
          background: `#121826`
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
