import React, { useEffect, useState, useRef, Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import SEOMetadata from '../components/SEOMetadata';
import { ChevronUp, ArrowRight, Sparkles, MapPin, Flame, Target, Gamepad2, Crosshair } from 'lucide-react';
import { Link } from 'react-router-dom';
import ChocoLocaAnnouncement from '../components/ChocoLocaAnnouncement';

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

const SECTIONS = ['home', 'about', 'choco-loca', 'games', 'tournaments', 'gallery', 'testimonials', 'book-now', 'cuephoria-lite', 'contact'];

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
        <section id="choco-loca" className="py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(233,150,149,0.07)_0,rgba(15,25,40,0)_65%)] pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <ChocoLocaAnnouncement variant="card" />
          </div>
        </section>
        <Suspense fallback={<SectionLoader />}><Games /></Suspense>
        <Suspense fallback={<SectionLoader />}><Tournaments /></Suspense>
        <Suspense fallback={<SectionLoader />}><Gallery /></Suspense>
        <Suspense fallback={<SectionLoader />}><Testimonials /></Suspense>
        <Suspense fallback={<SectionLoader />}><BookNow /></Suspense>
        <Suspense fallback={<SectionLoader />}><Contact /></Suspense>

        {/* Cuephoria Lite Section */}
        <section id="cuephoria-lite" className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06)_0,rgba(15,25,40,0)_70%)] pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="rounded-2xl p-6 md:p-10 border border-amber-500/25 bg-gradient-to-br from-amber-500/[0.06] via-gaming-darker to-cyan-500/[0.04] backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] ease-in-out pointer-events-none" />

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/15 rounded-full border border-amber-500/40 mb-5">
                      <Flame className="h-4 w-4 text-amber-500 animate-pulse" />
                      <span className="text-amber-400 font-bold text-sm">NOW OPEN — OPPOSITE NIT TRICHY</span>
                      <span className="px-2 py-0.5 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 text-[10px] font-black uppercase tracking-wider animate-pulse">NEW</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                      <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">Cuephoria Lite</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                      Same Luxury, Student-Friendly Prices — Your New Chill Spot Near Campus
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                    {[
                      { icon: Target, label: '2 Pool Tables', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
                      { icon: Gamepad2, label: '4 PS5 Controllers', color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20' },
                      { icon: Crosshair, label: 'AR Cricket', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
                      { icon: Target, label: 'Darts Zone', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
                    ].map(({ icon: Icon, label, color, bg }) => (
                      <div key={label} className={`flex flex-col items-center gap-2 p-4 rounded-xl border ${bg} hover:scale-[1.03] transition-transform`}>
                        <Icon className={`h-6 w-6 ${color}`} />
                        <span className="text-white text-xs font-bold text-center">{label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                      to="/lite"
                      className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-black bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.03]"
                    >
                      <Sparkles className="h-4 w-4" />
                      Explore Cuephoria Lite
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href="https://maps.app.goo.gl/nvTtK6SG4nGQXenGA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-amber-300 border border-amber-500/30 hover:border-amber-500/50 rounded-xl transition-all hover:bg-amber-500/5"
                    >
                      <MapPin className="h-4 w-4" />
                      Get Directions
                    </a>
                  </div>

                  <p className="text-center text-gray-500 text-xs mt-5">
                    Starting at just <span className="text-amber-400 font-bold">₹49</span> — Cheaper than a fancy coffee
                  </p>
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
