import React, { useEffect, useState, useRef, Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import SEOMetadata from '../components/SEOMetadata';
import { ChevronUp, ArrowRight, GraduationCap, Gamepad2, Rocket, Sparkles, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

// Lazy load below-the-fold components
const Games = lazy(() => import('../components/Games'));
const Tournaments = lazy(() => import('../components/Tournaments'));
const Gallery = lazy(() => import('../components/Gallery'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const BookNow = lazy(() => import('../components/BookNow'));
const Contact = lazy(() => import('../components/Contact'));
const Footer = lazy(() => import('../components/Footer'));
const PromotionalPopup = lazy(() => import('../components/PromotionalPopup'));
const Chatbot = lazy(() => import('../components/Chatbot'));

const SectionLoader = () => (
  <div className="min-h-[300px] flex items-center justify-center">
    <div className="w-8 h-8 border-t-2 border-neon-blue rounded-full animate-spin" />
  </div>
);

const SECTIONS = ['home', 'about', 'games', 'tournaments', 'gallery', 'testimonials', 'book-now', 'gameinsider', 'contact'];

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  // Ref keeps the scroll listener from needing to re-register on every section change
  const activeSectionRef = useRef(activeSection);
  activeSectionRef.current = activeSection;

  // Hash anchor smooth scroll
  useEffect(() => {
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash?.startsWith('#')) {
        const el = document.querySelector(target.hash);
        if (el) {
          e.preventDefault();
          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleHashClick);
    return () => document.removeEventListener('click', handleHashClick);
  }, []);

  // Active-section tracker — registered once, uses ref for current value
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        let current = '';
        for (const id of SECTIONS) {
          const el = document.getElementById(id);
          if (el) {
            const { top, bottom } = el.getBoundingClientRect();
            if (top <= 150 && bottom >= 100) { current = id; break; }
          }
        }
        if (current && current !== activeSectionRef.current) setActiveSection(current);
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // empty — never re-registers

  return (
    <div className="min-h-screen bg-gaming-darker text-white">
      <SEOMetadata
        title="Cuephoria | Best PS5 Gaming, VR & Pool Club for Students in Trichy"
        description="Visit Cuephoria - Trichy's #1 gaming lounge with student discounts! Enjoy PS5 games, Meta Quest 3S VR gaming, 8-ball pool, snooker & the perfect college hangout spot. Book online for exclusive student offers!"
      />
      <Navbar activeSection={activeSection} />
      <main className="pt-16">
        <h1 className="sr-only">Cuephoria - Best PS5 Gaming, VR Gaming (Meta Quest 3S), 8-Ball Pool, Snooker and Student Hangout Place in Trichy</h1>
        <Hero className="mt-8 md:mt-[-2rem]" />
        <About />
        <Suspense fallback={<SectionLoader />}><Games /></Suspense>
        <Suspense fallback={<SectionLoader />}><Tournaments /></Suspense>
        <Suspense fallback={<SectionLoader />}><Gallery /></Suspense>
        <Suspense fallback={<SectionLoader />}><Testimonials /></Suspense>
        <Suspense fallback={<SectionLoader />}><BookNow /></Suspense>
        <Suspense fallback={<SectionLoader />}><Contact /></Suspense>

        {/* Game Insider Partnership Section */}
        <section id="gameinsider" className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,165,0,0.08)_0,rgba(15,25,40,0)_70%)] pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="rounded-2xl p-6 md:p-10 border border-orange-500/30 bg-gradient-to-br from-orange-500/10 via-gaming-darker to-neon-blue/10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/50 mb-5">
                    <Sparkles className="h-4 w-4 text-orange-500" />
                    <span className="text-orange-500 font-bold text-sm">EXCLUSIVE PARTNERSHIP</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    <span className="neon-text-blue">Game Insider</span>
                    <span className="text-white"> × </span>
                    <span className="neon-text-pink">Cuephoria</span>
                  </h2>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Building Careers in Game Development & Esports
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-5 bg-gaming-darker/60 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 bg-orange-500/20 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-orange-500" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Free Starter Series</h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      Access industry-relevant education in Game Development and Esports. Learn with clarity, build skills, and understand real career pathways.
                    </p>
                    <ul className="space-y-1.5 text-gray-300 text-sm">
                      {['Industry-aligned learning paths', 'Mentorship from professionals', 'Practical, career-focused programs'].map(item => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="text-orange-500">✓</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 bg-gaming-darker/60 rounded-xl border border-neon-blue/20 hover:border-neon-blue/40 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 bg-neon-blue/20 rounded-lg">
                        <Rocket className="h-6 w-6 text-neon-blue" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Exclusive Benefits</h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      As a Cuephoria member, get exclusive access to Game Insider programs with special discounts.
                    </p>
                    <div className="bg-gradient-to-r from-orange-500/15 to-neon-blue/15 rounded-lg p-3 border border-orange-500/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Gamepad2 className="h-4 w-4 text-orange-500" />
                        <span className="text-orange-500 font-bold text-sm">50% OFF Game Services</span>
                      </div>
                      <p className="text-gray-300 text-xs">
                        Use code <span className="font-mono font-bold text-white">GAMEINSIDER50</span> when you sign up!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/gameinsider"
                    className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl transition-colors duration-200 shadow-lg shadow-orange-500/30 border border-orange-400/40"
                  >
                    <GraduationCap className="h-5 w-5" />
                    Explore Game Insider Programs
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Contact Block */}
        <div className="max-w-4xl mx-auto px-4 mt-8 mb-12 bg-gaming-darker/80 rounded-xl border border-neon-blue/30 p-6 text-center">
          <p className="text-base font-semibold mb-4 text-gray-200">Can't book online? Reach us directly:</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <a
              href={`https://wa.me/918637625155?text=${encodeURIComponent("Hi! I'd like to book a slot at Cuephoria. [Monthly Membership Offer]")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-neon-pink/90 text-white hover:bg-neon-pink transition-colors text-sm font-medium"
            >
              WhatsApp Chatbot <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href={`https://wa.me/917550025155?text=${encodeURIComponent("Hi! I'd like to speak with a real Cuephoria agent regarding bookings.")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-neon-blue/90 text-white hover:bg-neon-blue transition-colors text-sm font-medium"
            >
              Talk to a Real Agent <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">📞 +91 86376 25155 &nbsp;|&nbsp; +91 75500 25155</p>
        </div>

        <Suspense fallback={null}><Footer /></Suspense>
      </main>

      <Suspense fallback={null}>
        <PromotionalPopup delayInSeconds={30} reappearInSeconds={120} />
      </Suspense>
      <Suspense fallback={null}><Chatbot /></Suspense>

      <Link
        to="/book"
        className="fixed left-6 bottom-6 z-40 px-5 py-2.5 bg-neon-pink text-white text-sm font-semibold rounded-full shadow-lg hover:bg-neon-pink/90 transition-colors hidden md:flex items-center gap-1"
      >
        Book Now ✨
      </Link>

      <a
        href="#home"
        className="fixed bottom-6 right-6 h-11 w-11 rounded-full bg-gaming-darker border border-neon-blue/30 flex items-center justify-center z-40 shadow-lg transition-colors hover:border-neon-blue/60"
        aria-label="Back to top"
      >
        <ChevronUp size={18} className="text-neon-blue" />
      </a>
    </div>
  );
};
export default Index;
