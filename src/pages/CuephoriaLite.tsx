import React, { useEffect, useState, useRef, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  MapPin, Clock, Sparkles, ArrowRight, ChevronUp,
  Gamepad2, Target, Crosshair, Zap, Users, Gift,
  Star, Crown, Phone, MessageCircle, Instagram, Facebook,
  ExternalLink, Check, Flame, Music, Wifi, Coffee, Mail,
  Shield, Timer, BookOpen, Home, CalendarCheck,
  Code, X, Menu, TrendingUp, Award, Heart
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Chatbot = lazy(() => import('../components/Chatbot'));

const LITE_OPENING = new Date('2026-04-12T11:00:00');
const GMAP_LINK = "https://maps.app.goo.gl/nvTtK6SG4nGQXenGA";
const BOOKING_URL = "https://admin.cuephoria.in/lite/public/booking";
const WA_LINK = (msg: string) => `https://wa.me/917550025155?text=${encodeURIComponent(msg)}`;
const LITE_PHONE = "+91 75500 25155";

function useCountdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0, expired: false });
  useEffect(() => {
    const tick = () => {
      const ms = LITE_OPENING.getTime() - Date.now();
      if (ms <= 0) { setT({ d: 0, h: 0, m: 0, s: 0, expired: true }); return; }
      setT({
        d: Math.floor(ms / 86400000),
        h: Math.floor((ms % 86400000) / 3600000),
        m: Math.floor((ms % 3600000) / 60000),
        s: Math.floor((ms % 60000) / 1000),
        expired: false,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function useAnimatedCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useInView(0.3);
  const started = useRef(false);
  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [visible, target, duration]);
  return { ref, count };
}

const stats = [
  { value: 2, suffix: '', label: 'Pool Tables', icon: Target },
  { value: 4, suffix: '', label: 'PS5 Controllers', icon: Gamepad2 },
  { value: 30, suffix: '+', label: 'Game Titles', icon: Award },
  { value: 49, suffix: '', label: 'Starting Price (₹)', icon: TrendingUp },
];

const testimonials = [
  { name: 'Rahul K.', college: 'NIT Trichy', text: 'Best spot near campus! Way better than sitting in the hostel. The PS5 setup is insane and pool tables are actually good quality.', rating: 5 },
  { name: 'Priya S.', college: 'Anna University', text: 'Finally a place that doesn\'t burn a hole in my pocket. ₹49 for 30 mins of pool? That\'s a steal. Love the vibe here.', rating: 5 },
  { name: 'Arun M.', college: 'NIT Trichy', text: 'The AR Cricket is absolutely next level. My whole friend group is addicted. We come here almost every evening now.', rating: 5 },
  { name: 'Deepika R.', college: 'SASTRA', text: 'Clean, affordable, and the staff is super friendly. The neon ambience is perfect for unwinding after a stressful day.', rating: 4 },
];

const Reveal = ({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const GlassCard = ({ children, className = '', delay = 0, hover = true }: { children: React.ReactNode; className?: string; delay?: number; hover?: boolean }) => {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={cn(
        "relative backdrop-blur-xl bg-white/[0.03] border border-white/[0.07] rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.25)] transition-all duration-700",
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        hover && 'hover:border-white/[0.14] hover:bg-white/[0.05] hover:shadow-[0_16px_50px_rgba(0,0,0,0.35)]',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const activities = [
  {
    icon: Target,
    title: '2 Premium Pool Tables',
    desc: 'Compact professional-grade tables with quality cues and chalk. Perfect for a quick break between classes or a full tournament with your squad.',
    color: 'cyan',
    iconBg: 'bg-cyan-500/10 border-cyan-500/25',
    iconColor: 'text-cyan-400',
    gradient: 'from-cyan-500/10 to-blue-500/5',
  },
  {
    icon: Gamepad2,
    title: '4 PS5 Controllers',
    desc: 'FIFA 25, GTA V, Tekken 8, It Takes Two, and 30+ titles on a massive 55" 4K display. Bring the whole squad — 4-player co-op is where the magic happens.',
    color: 'violet',
    iconBg: 'bg-violet-500/10 border-violet-500/25',
    iconColor: 'text-violet-400',
    gradient: 'from-violet-500/10 to-purple-500/5',
  },
  {
    icon: Crosshair,
    title: 'Metashot AR Cricket',
    desc: 'India\'s most immersive AR cricket — realistic bowling, batting with real-time scoring. Feel like you\'re at the stadium without leaving Trichy.',
    color: 'emerald',
    iconBg: 'bg-emerald-500/10 border-emerald-500/25',
    iconColor: 'text-emerald-400',
    gradient: 'from-emerald-500/10 to-green-500/5',
  },
  {
    icon: Target,
    title: 'Darts Zone',
    desc: 'Classic steel-tip darts with proper lighting and scoring boards. Challenge your friends to 501, Cricket, or Around the World. All skill levels welcome.',
    color: 'amber',
    iconBg: 'bg-amber-500/10 border-amber-500/25',
    iconColor: 'text-amber-400',
    gradient: 'from-amber-500/10 to-orange-500/5',
  },
];

const vibeFeatures = [
  { icon: Music, text: 'Chill Lo-fi & Gaming Beats', desc: 'Curated playlists that set the mood' },
  { icon: Wifi, text: 'Free High-Speed Wi-Fi', desc: 'Stream, download, or finish assignments' },
  { icon: Coffee, text: 'Affordable Café Menu', desc: 'Snacks, drinks & combos under ₹100' },
  { icon: Users, text: 'Squad-Friendly Setup', desc: 'Designed for groups of 2-8 people' },
  { icon: Zap, text: 'Neon-Lit Ambience', desc: 'Instagram-worthy interiors' },
  { icon: Crown, text: 'Same Cuephoria Quality', desc: 'Premium gear, trained staff' },
  { icon: Shield, text: 'Safe & Secure', desc: 'CCTV, clean space, zero tolerance' },
  { icon: Timer, text: 'Extended Hours', desc: '11 AM to 11 PM every single day' },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '₹49',
    per: '/ 30 min',
    desc: 'Quick game before or after class',
    features: ['Pool Table Access', 'Darts Zone', 'Free Wi-Fi', 'Café Access'],
    accent: 'border-cyan-500/30 hover:border-cyan-500/50',
    badge: null,
    btnClass: 'bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/[0.15]',
    glowColor: 'cyan',
  },
  {
    name: 'Squad',
    price: '₹149',
    per: '/ hour',
    desc: 'The perfect hangout package',
    features: ['PS5 Gaming (4 Controllers)', 'Pool Table Access', 'Metashot AR Cricket', 'Darts Zone', 'Free Wi-Fi', '10% Café Discount'],
    accent: 'border-amber-500/40 hover:border-amber-500/60',
    badge: 'MOST POPULAR',
    btnClass: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black shadow-lg shadow-amber-500/20',
    glowColor: 'amber',
  },
  {
    name: 'Monthly Pass',
    price: '₹999',
    per: '/ month',
    desc: 'Unlimited access for regulars',
    features: ['Unlimited Pool & Darts', '2hrs PS5 / day', 'AR Cricket Sessions', 'Priority Booking', '20% Café Discount', 'Exclusive Member Events', 'Birthday Freebie'],
    accent: 'border-violet-500/30 hover:border-violet-500/50',
    badge: 'BEST VALUE',
    btnClass: 'bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white font-black shadow-lg shadow-violet-500/20',
    glowColor: 'violet',
  },
];

const comparisonRows = [
  { feature: 'Location', lite: 'Opposite NIT Trichy', main: 'Thiruverumbur, Trichy' },
  { feature: 'Pool Tables', lite: '2 Tables', main: '3+ Tables' },
  { feature: 'PS5 Consoles', lite: '1 Console, 4 Controllers', main: 'Multiple Consoles' },
  { feature: 'VR Gaming', lite: 'Coming Soon', main: 'Meta Quest 3S' },
  { feature: 'AR Cricket', lite: 'Metashot AR', main: 'Metashot AR' },
  { feature: 'Darts', lite: 'Available', main: 'Available' },
  { feature: 'Starting Price', lite: '₹49 / 30 min', main: '₹99 / 30 min' },
  { feature: 'Student Discounts', lite: 'Up to 60% OFF', main: 'Up to 50% OFF' },
  { feature: 'Target Audience', lite: 'Students & Budget', main: 'Everyone' },
];

const faqs = [
  { q: 'Where exactly is Cuephoria Lite?', a: 'Right opposite NIT Trichy main gate — just a 2-minute walk from campus. Look for the neon signage at QR64+CRV, Electronics Bus Stop, Valavandankottai.' },
  { q: 'Do I need to book in advance?', a: 'Walk-ins are welcome! But during peak hours (4-9 PM), we recommend booking online at admin.cuephoria.in/lite/public/booking or a quick WhatsApp message to guarantee your slot.' },
  { q: 'Is there a student discount?', a: 'Absolutely! Show any valid student ID (NIT, Anna Univ, or any college) for an extra 10% OFF on all plans. NIT students get special perks with code NIT35.' },
  { q: 'Can I bring my own PS5 games?', a: 'We have 30+ titles ready, but yes — bring your own disc and we\'ll load it up. Digital accounts are not supported for security reasons.' },
  { q: 'What\'s the difference from the main branch?', a: 'Cuephoria Lite is a compact, budget-friendly version designed for students. Same quality gear, same vibe, more affordable. The main branch has more tables, VR gaming, and larger space.' },
  { q: 'Are there group packages?', a: 'Yes! Groups of 4+ get automatic 15% discount on the Squad plan. Birthday parties and college event bookings get custom packages — WhatsApp us for details.' },
];

const SECTIONS = ['home', 'activities', 'vibe', 'pricing', 'compare', 'faq', 'location'];

const CuephoriaLite = () => {
  const countdown = useCountdown();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const activeSectionRef = useRef(activeSection);
  activeSectionRef.current = activeSection;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

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
  }, []);

  const navLinks = [
    { href: '#activities', label: 'Activities' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#compare', label: 'Compare' },
    { href: '#faq', label: 'FAQ' },
    { href: '#location', label: 'Location' },
  ];

  return (
    <div className="min-h-screen bg-gaming-darker text-white overflow-x-hidden">
      <Helmet>
        <title>Cuephoria Lite | Cheapest Gaming Lounge Near NIT Trichy | Pool, PS5, AR Cricket, Darts</title>
        <meta name="description" content="Cuephoria Lite — Trichy's most affordable student gaming lounge opposite NIT Trichy. 2 Pool Tables, 4 PS5 Controllers, Metashot AR Cricket & Darts starting at just ₹49. Book your slot online now!" />
        <meta name="keywords" content="Cuephoria Lite, gaming lounge near NIT Trichy, cheap gaming Trichy, student gaming lounge Trichy, pool table NIT Trichy, PS5 gaming NIT Trichy, AR cricket Trichy, darts Trichy, affordable gaming Trichy, student hangout Trichy, best gaming cafe near NIT, gaming lounge opposite NIT Trichy, Cuephoria Trichy, budget gaming lounge, student discount gaming" />
        <link rel="canonical" href="https://cuephoria.in/lite" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cuephoria.in/lite" />
        <meta property="og:title" content="Cuephoria Lite | Student Gaming Lounge Near NIT Trichy — From ₹49" />
        <meta property="og:description" content="Pool, PS5, AR Cricket & Darts — all starting ₹49. Trichy's cheapest & best student gaming spot right opposite NIT Trichy. Book online now!" />
        <meta property="og:image" content="/cuephoria-lite-logo.png" />
        <meta property="og:site_name" content="Cuephoria" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cuephoria Lite | Gaming Lounge Near NIT Trichy — From ₹49" />
        <meta name="twitter:description" content="Pool, PS5, AR Cricket & Darts for students at pocket-friendly prices. Opposite NIT Trichy." />
        <meta name="twitter:image" content="/cuephoria-lite-logo.png" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Cuephoria Gaming Lounge" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Trichy, NIT Trichy" />
        <meta name="geo.position" content="10.7634;78.8138" />
        <meta name="ICBM" content="10.7634, 78.8138" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://cuephoria.in/lite",
          "name": "Cuephoria Lite — Student Gaming Lounge",
          "alternateName": "Cuephoria Lite",
          "image": "https://cuephoria.in/cuephoria-lite-logo.png",
          "url": "https://cuephoria.in/lite",
          "telephone": "+917550025155",
          "priceRange": "₹",
          "description": "Cuephoria Lite is Trichy's most affordable student gaming lounge, located right opposite NIT Trichy. Offering 2 pool tables, PS5 gaming with 4 controllers, Metashot AR Cricket, darts, and a chill café — all starting at just ₹49.",
          "address": { "@type": "PostalAddress", "streetAddress": "Opposite NIT Trichy, QR64+CRV, Electronics Bus Stop", "addressLocality": "Valavandankottai, Trichy", "postalCode": "620015", "addressCountry": "IN", "addressRegion": "Tamil Nadu" },
          "geo": { "@type": "GeoCoordinates", "latitude": 10.7634, "longitude": 78.8138 },
          "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "11:00", "closes": "23:00" },
          "sameAs": ["https://www.instagram.com/cuephoriaclub/", "https://www.facebook.com/profile.php?id=61574215405586"],
          "parentOrganization": { "@type": "Organization", "name": "Cuephoria Gaming Lounge", "url": "https://cuephoria.in" },
          "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Cuephoria Lite Services", "itemListElement": [
            { "@type": "Offer", "name": "Pool Table — 30 min", "price": "49", "priceCurrency": "INR", "description": "30 minutes of pool table access" },
            { "@type": "Offer", "name": "Squad Package — 1 hour", "price": "149", "priceCurrency": "INR", "description": "PS5 gaming, pool, AR Cricket, darts for 1 hour" },
            { "@type": "Offer", "name": "Monthly Pass", "price": "999", "priceCurrency": "INR", "description": "Unlimited monthly access to all activities" }
          ]},
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "150", "bestRating": "5" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        })}</script>
      </Helmet>

      {/* ── Ambient Layers ───────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[700px] h-[700px] bg-amber-500/[0.035] rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-neon-blue/[0.025] rounded-full blur-[130px] animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-violet-500/[0.018] rounded-full blur-[180px] animate-pulse" style={{ animationDuration: '15s' }} />
      </div>

      {/* ══════════════════════════════════════════════════════════════
          NAVBAR
         ══════════════════════════════════════════════════════════════ */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-gaming-darker/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-2"
          : "bg-transparent py-3 md:py-4"
      )}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Brand */}
          <Link to="/lite" className="flex items-center gap-2.5 group">
            <img
              src="/cuephoria-lite-logo.png"
              alt="Cuephoria Lite"
              className="h-9 md:h-11 group-hover:scale-105 transition-transform rounded-lg"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-base md:text-lg font-black neon-text-blue">CUEPHORIA</span>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Lite Edition</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200",
                  activeSection === l.href.slice(1)
                    ? "text-amber-400 bg-amber-500/10"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link to="/" className="text-xs text-gray-500 hover:text-white transition-colors px-3 py-1.5">
              Main Branch
            </Link>
            <a
              href={GMAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-amber-500/40 text-amber-400 text-sm font-bold hover:bg-amber-500/10 transition-all"
            >
              <MapPin className="h-3.5 w-3.5" />
              Directions
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-neon-pink to-purple-500 text-white text-sm font-black hover:shadow-lg hover:shadow-neon-pink/25 transition-all hover:scale-105"
            >
              <CalendarCheck className="h-3.5 w-3.5" />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-gaming-darker/95 backdrop-blur-xl z-50 transition-all duration-300 md:hidden",
        mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="pt-20 pb-8 px-6 h-full overflow-y-auto">
          <nav className="flex flex-col items-center gap-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg text-gray-300 hover:text-amber-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="h-px w-16 bg-white/10 my-2" />
            <Link to="/" onClick={() => setMobileOpen(false)} className="text-sm text-gray-500 hover:text-white transition-colors">
              Main Branch
            </Link>
            <a
              href={GMAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-sm"
            >
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-neon-pink to-purple-500 text-white font-black text-sm"
            >
              <CalendarCheck className="h-4 w-4" /> Book Now
            </a>
            <a
              href={WA_LINK("Hey! I want to know about Cuephoria Lite!")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-green-500/40 text-green-400 font-semibold text-sm"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </nav>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          HERO
         ══════════════════════════════════════════════════════════════ */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-amber-400/30 animate-pulse"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                top: `${15 + Math.random() * 70}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDuration: `${3 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
          <div className="absolute top-1/4 left-10 w-px h-40 bg-gradient-to-b from-transparent via-amber-500/15 to-transparent rotate-[30deg]" />
          <div className="absolute bottom-1/4 right-20 w-px h-32 bg-gradient-to-b from-transparent via-neon-blue/10 to-transparent -rotate-[20deg]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left — Text */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-widest mb-6 backdrop-blur-sm">
                  <Flame className="h-3.5 w-3.5 animate-pulse" />
                  {countdown.expired ? 'Now Open!' : 'Grand Opening — April 12, 2026'}
                  <span className="px-1.5 py-0.5 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 text-[9px] font-black">NEW</span>
                </div>
              </Reveal>

              {/* Title */}
              <Reveal delay={100}>
                <h1 className="font-black leading-[0.92] mb-5">
                  <span className="block text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                    CUEPHORIA
                  </span>
                  <span className="block text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-neon-blue via-purple-300 to-neon-pink bg-clip-text text-transparent mt-1">
                    LITE
                  </span>
                  <span className="block text-base md:text-xl mt-4 text-white/80 font-semibold tracking-wide">
                    The Student Gaming Spot — Opposite NIT Trichy
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto lg:mx-0 mb-6 leading-relaxed">
                  Premium pool tables, PS5 gaming with 4 controllers, Metashot AR Cricket, and Darts
                  — all starting at just <span className="text-amber-400 font-bold">₹49</span>. The ultimate chill zone built for student budgets.
                </p>
              </Reveal>

              {/* Countdown */}
              {!countdown.expired && (
                <Reveal delay={300}>
                  <div className="inline-flex items-center gap-2 md:gap-3 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-2xl px-4 md:px-6 py-3 mb-7">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mr-1 hidden sm:inline">Opens in</span>
                    {[
                      { v: countdown.d, l: 'D' },
                      { v: countdown.h, l: 'H' },
                      { v: countdown.m, l: 'M' },
                      { v: countdown.s, l: 'S' },
                    ].map(({ v, l }, i) => (
                      <React.Fragment key={l}>
                        <div className="text-center min-w-[36px] md:min-w-[44px]">
                          <div className="text-xl md:text-2xl font-black tabular-nums bg-gradient-to-b from-amber-300 to-amber-500 bg-clip-text text-transparent">
                            {String(v).padStart(2, '0')}
                          </div>
                          <div className="text-[8px] text-gray-600 font-bold uppercase">{l}</div>
                        </div>
                        {i < 3 && <span className="text-amber-500/30 font-black text-sm self-start mt-1">:</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </Reveal>
              )}

              {countdown.expired && (
                <Reveal delay={300}>
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500/15 border border-green-500/40 text-green-400 font-bold text-sm mb-7 animate-pulse">
                    <Sparkles className="h-4 w-4" />
                    We're OPEN — Come visit!
                  </div>
                </Reveal>
              )}

              {/* CTAs */}
              <Reveal delay={400}>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-neon-pink via-purple-500 to-violet-600 text-white font-black text-sm hover:shadow-xl hover:shadow-neon-pink/30 transition-all hover:scale-[1.03] active:scale-100 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                    <CalendarCheck className="h-4 w-4 relative z-10" />
                    <span className="relative z-10">Book Your Slot</span>
                    <ArrowRight className="h-4 w-4 relative z-10" />
                  </a>
                  <a
                    href={GMAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-sm hover:shadow-xl hover:shadow-amber-500/25 transition-all hover:scale-[1.03] active:scale-100"
                  >
                    <MapPin className="h-4 w-4" /> Get Directions
                  </a>
                  <a
                    href={WA_LINK("Hey! I want to know about Cuephoria Lite near NIT Trichy!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-white/10 text-white font-semibold text-sm hover:bg-white/[0.05] hover:border-white/20 transition-all hover:scale-[1.03]"
                  >
                    <MessageCircle className="h-4 w-4 text-green-400" /> WhatsApp
                  </a>
                </div>
              </Reveal>

              {/* Quick Info chips */}
              <Reveal delay={500}>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start text-xs text-gray-400">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                    <Clock className="h-3 w-3 text-neon-pink" /> 11 AM – 11 PM
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                    <MapPin className="h-3 w-3 text-neon-blue" /> Opposite NIT Trichy
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                    <Zap className="h-3 w-3 text-amber-400" /> From ₹49
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Right — Logo */}
            <div className="w-full lg:w-[45%] flex-shrink-0">
              <Reveal delay={200}>
                <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/15 via-neon-blue/10 to-neon-pink/10 blur-[60px] animate-pulse" style={{ animationDuration: '6s' }} />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500/10 to-amber-500/5 blur-[40px] animate-pulse" style={{ animationDuration: '9s' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/cuephoria-lite-logo.png"
                      alt="Cuephoria Lite"
                      className="w-full h-full object-contain animate-float drop-shadow-[0_0_50px_rgba(245,158,11,0.25)] rounded-2xl"
                      width="384" height="384"
                      fetchPriority="high"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <div className="w-5 h-9 border-2 border-white/10 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-amber-400/60 rounded-full animate-bounce" />
          </div>
          <span className="text-white/30 text-[10px] uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ANIMATED STATS
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-14 relative border-y border-white/[0.04]">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/[0.02] via-neon-pink/[0.02] to-neon-blue/[0.02] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((s) => {
              const { ref, count } = useAnimatedCounter(s.value);
              return (
                <div key={s.label} ref={ref} className="text-center group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500">
                    <s.icon className="h-5 w-5 text-amber-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-black tabular-nums bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-1">
                    {count}{s.suffix}
                  </div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ACTIVITIES
         ══════════════════════════════════════════════════════════════ */}
      <section id="activities" className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500/60 mb-3">What's Inside</p>
              <h2 className="text-3xl md:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white/60 bg-clip-text text-transparent">
                  Everything You Need to
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Unwind & Compete
                </span>
              </h2>
              <p className="text-gray-500 max-w-lg mx-auto text-sm">
                Compact space, massive fun. Every corner is designed for the ultimate student hangout experience.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {activities.map((a, i) => (
              <GlassCard key={a.title} className={`p-6 md:p-7 group bg-gradient-to-br ${a.gradient}`} delay={i * 100}>
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center flex-shrink-0 ${a.iconBg} group-hover:scale-110 transition-transform duration-500`}>
                    <a.icon className={`h-6 w-6 ${a.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-white mb-2">{a.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          THE VIBE
         ══════════════════════════════════════════════════════════════ */}
      <section id="vibe" className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.015] to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500/60 mb-3">The Vibe</p>
              <h2 className="text-3xl md:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Best Chilling Spot
                </span>
                <span className="text-white"> Near Campus</span>
              </h2>
              <p className="text-gray-500 max-w-lg mx-auto text-sm">
                Skip the boring canteen. Cuephoria Lite is where you recharge, compete, and make memories.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            {vibeFeatures.map((f, i) => (
              <GlassCard key={f.text} className="p-5 group text-center" delay={i * 60}>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <f.icon className="h-5 w-5 text-amber-400" />
                </div>
                <h4 className="text-sm font-black text-white mb-1">{f.text}</h4>
                <p className="text-xs text-gray-500">{f.desc}</p>
              </GlassCard>
            ))}
          </div>

          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <GlassCard className="p-8 md:p-12" hover={false}>
                <div className="flex justify-center mb-5">
                  <Heart className="h-8 w-8 text-neon-pink animate-pulse" />
                </div>
                <blockquote className="text-xl md:text-2xl italic text-gray-200 font-medium leading-relaxed">
                  "Where <span className="text-amber-400 font-black not-italic">students</span> escape the routine.
                  <br className="hidden md:block" />
                  Where <span className="text-neon-blue font-black not-italic">friendships</span> level up and <span className="text-neon-pink font-black not-italic">memories</span> get made."
                </blockquote>
                <div className="mt-5 flex items-center justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-neon-pink to-purple-500 text-white font-black text-sm hover:shadow-lg hover:shadow-neon-pink/25 transition-all hover:scale-[1.03]"
                >
                  <CalendarCheck className="h-4 w-4" /> Reserve Your Spot
                </a>
              </GlassCard>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          TESTIMONIALS
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/[0.012] to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neon-pink/60 mb-3">What Students Say</p>
              <h2 className="text-3xl md:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Loved by </span>
                <span className="bg-gradient-to-r from-neon-pink to-purple-400 bg-clip-text text-transparent">Students</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <GlassCard key={t.name} className="p-6 group" delay={i * 100}>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className={cn("h-3.5 w-3.5", s < t.rating ? "text-amber-400 fill-amber-400" : "text-gray-700")} />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500/20 to-neon-pink/20 border border-white/10 flex items-center justify-center">
                    <span className="text-sm font-black text-white">{t.name[0]}</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.college}</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="text-center mt-10">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-neon-pink to-purple-500 text-white font-black text-sm hover:shadow-xl hover:shadow-neon-pink/25 transition-all hover:scale-[1.03] relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <CalendarCheck className="h-4 w-4 relative z-10" />
                <span className="relative z-10">Book Your Slot Now</span>
                <ArrowRight className="h-4 w-4 relative z-10" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PRICING
         ══════════════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-500/60 mb-3">Student-Friendly Pricing</p>
              <h2 className="text-3xl md:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Built for
                </span>{' '}
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Student Budgets
                </span>
              </h2>
              <p className="text-gray-500 max-w-lg mx-auto text-sm">
                No hidden fees. No surprises. Just clean pricing that respects your wallet.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-start">
            {pricingPlans.map((plan, i) => (
              <GlassCard
                key={plan.name}
                className={cn(
                  "p-6 md:p-8",
                  plan.accent,
                  plan.badge === 'MOST POPULAR' && 'md:-mt-3 md:pb-10 ring-1 ring-amber-500/30'
                )}
                delay={i * 120}
              >
                {plan.badge && (
                  <div className="mb-4">
                    <span className={cn(
                      "inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
                      plan.badge === 'MOST POPULAR'
                        ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                        : 'bg-violet-500/15 text-violet-400 border border-violet-500/30'
                    )}>
                      <Star className="h-3 w-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-black text-white mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-500 mb-5">{plan.desc}</p>
                <div className="flex items-baseline gap-1.5 mb-7">
                  <span className="text-4xl md:text-5xl font-black bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">{plan.price}</span>
                  <span className="text-sm text-gray-500 font-medium">{plan.per}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <Check className="h-4 w-4 text-amber-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm transition-all duration-300 hover:scale-[1.03] active:scale-100", plan.btnClass)}
                >
                  Book Now <ArrowRight className="h-4 w-4" />
                </a>
              </GlassCard>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="text-center mt-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500/10 border border-green-500/25 text-green-400 text-sm font-semibold">
                <Gift className="h-4 w-4" />
                NIT student? Show your ID for an extra <span className="font-black">10% OFF</span> on any plan!
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          COMPARE
         ══════════════════════════════════════════════════════════════ */}
      <section id="compare" className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.012] to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neon-pink/60 mb-3">Compare</p>
              <h2 className="text-3xl md:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Lite</span>
                <span className="text-white/60 mx-3">vs</span>
                <span className="bg-gradient-to-r from-neon-blue to-purple-400 bg-clip-text text-transparent">Main Branch</span>
              </h2>
              <p className="text-gray-500 max-w-lg mx-auto text-sm">Same DNA, different vibe. Pick what suits your needs.</p>
            </div>
          </Reveal>

          <GlassCard className="max-w-3xl mx-auto overflow-hidden" hover={false}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left p-4 text-gray-500 font-bold text-xs uppercase tracking-wider">Feature</th>
                    <th className="p-4 text-center">
                      <span className="text-amber-400 font-black text-sm">Lite</span>
                    </th>
                    <th className="p-4 text-center">
                      <span className="text-neon-blue font-black text-sm">Main</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} className={cn("border-b border-white/[0.04]", i % 2 === 0 && "bg-white/[0.01]")}>
                      <td className="p-4 text-gray-400 font-medium">{row.feature}</td>
                      <td className="p-4 text-center text-white font-semibold">{row.lite}</td>
                      <td className="p-4 text-center text-gray-400">{row.main}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          STUDENT SPECIALS
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <GlassCard className="max-w-5xl mx-auto p-8 md:p-12" hover={false}>
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-1">
                <Reveal>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/25 rounded-full text-green-400 text-xs font-black uppercase tracking-wider mb-5">
                    <Gift className="h-3 w-3" /> Student Specials
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-white mb-6">
                    Why Students
                    <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"> Love </span>
                    <br className="hidden md:block" />
                    Cuephoria Lite
                  </h2>
                </Reveal>
                <ul className="space-y-3.5">
                  {[
                    'Starts at ₹49 — cheaper than a fancy coffee',
                    'Just 2 minutes walk from NIT Trichy campus',
                    'Group discounts for 4+ friends (15% off)',
                    'Free Wi-Fi for assignments (we know the vibe)',
                    'Monthly pass = unlimited fun for just ₹999',
                    'Opening day: up to 60% OFF for early birds',
                    'Birthday month? Get a FREE hour on us!',
                    'Refer a friend — both get 20% off next visit',
                  ].map((item, i) => (
                    <Reveal key={item} delay={i * 50}>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-green-400" />
                        </div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-72 flex-shrink-0">
                <Reveal delay={200}>
                  <div className="backdrop-blur-xl bg-white/[0.03] border border-amber-500/20 rounded-2xl p-8 text-center">
                    <div className="text-6xl font-black bg-gradient-to-b from-amber-300 to-amber-500 bg-clip-text text-transparent mb-1">₹49</div>
                    <div className="text-gray-500 text-xs font-black uppercase tracking-widest mb-5">Starting Price</div>
                    <div className="h-px bg-white/10 mb-5" />
                    <p className="text-gray-400 text-sm mb-2">Less than your daily</p>
                    <p className="text-amber-400 text-sm font-bold mb-6">chai + samosa budget</p>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-neon-pink to-purple-500 text-white text-sm font-black hover:shadow-lg hover:shadow-neon-pink/25 transition-all hover:scale-105 mb-2"
                    >
                      <CalendarCheck className="h-4 w-4" /> Book Now
                    </a>
                    <a
                      href={WA_LINK("Hey! I'm an NIT student. What deals do you have at Cuephoria Lite?")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-green-500/30 text-green-400 text-xs font-semibold hover:bg-green-500/10 transition-all"
                    >
                      <MessageCircle className="h-3.5 w-3.5" /> Or WhatsApp Us
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FAQ
         ══════════════════════════════════════════════════════════════ */}
      <section id="faq" className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500/60 mb-3">FAQ</p>
              <h2 className="text-3xl md:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Got Questions?
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 60}>
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className={cn(
                    "w-full text-left backdrop-blur-xl rounded-xl border transition-all duration-300",
                    activeFaq === i
                      ? "bg-white/[0.05] border-amber-500/30"
                      : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]"
                  )}
                >
                  <div className="flex items-center justify-between p-5">
                    <span className="text-sm font-bold text-white pr-4">{faq.q}</span>
                    <ChevronUp className={cn(
                      "h-4 w-4 text-amber-400 flex-shrink-0 transition-transform duration-300",
                      activeFaq === i ? "rotate-0" : "rotate-180"
                    )} />
                  </div>
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    activeFaq === i ? "max-h-48 pb-5 px-5" : "max-h-0"
                  )}>
                    <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          LOCATION + CONTACT
         ══════════════════════════════════════════════════════════════ */}
      <section id="location" className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500/60 mb-3">Find Us</p>
              <h2 className="text-3xl md:text-5xl font-black">
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Right Next to </span>
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Your Campus</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <GlassCard className="p-7 md:p-8">
              <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-amber-400" />
                </div>
                Location
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-amber-400 font-bold text-sm mb-1">Cuephoria Lite</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Opposite NIT Trichy Gate<br />
                    QR64+CRV, Electronics Bus Stop,<br />
                    Valavandankottai, Tamil Nadu 620015
                  </p>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-300">
                  <Clock className="h-4 w-4 text-neon-blue" />
                  <span>11:00 AM – 11:00 PM, Every Day</span>
                </div>
                <a
                  href={GMAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black text-sm font-bold hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105"
                >
                  <MapPin className="h-4 w-4" /> Open in Google Maps <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </GlassCard>

            <GlassCard className="p-7 md:p-8" delay={100}>
              <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-neon-blue" />
                </div>
                Get in Touch
              </h3>
              <div className="space-y-3">
                {[
                  {
                    href: WA_LINK("Hi! I'd like to know more about Cuephoria Lite."),
                    icon: MessageCircle, label: 'WhatsApp', detail: LITE_PHONE,
                    color: 'green', bg: 'bg-green-500/10 border-green-500/20 hover:border-green-500/40',
                  },
                  {
                    href: 'tel:+917550025155',
                    icon: Phone, label: 'Call Us', detail: LITE_PHONE,
                    color: 'blue', bg: 'bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40',
                  },
                  {
                    href: 'https://www.instagram.com/cuephoriaclub',
                    icon: Instagram, label: 'Instagram', detail: '@cuephoriaclub',
                    color: 'pink', bg: 'bg-pink-500/10 border-pink-500/20 hover:border-pink-500/40',
                  },
                  {
                    href: 'mailto:contact@cuephoria.in',
                    icon: Mail, label: 'Email', detail: 'contact@cuephoria.in',
                    color: 'amber', bg: 'bg-amber-500/10 border-amber-500/20 hover:border-amber-500/40',
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={cn("flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 group", c.bg)}
                  >
                    <c.icon className={`h-5 w-5 text-${c.color}-400 group-hover:scale-110 transition-transform`} />
                    <div>
                      <div className="text-sm font-bold text-white">{c.label}</div>
                      <div className="text-xs text-gray-500">{c.detail}</div>
                    </div>
                  </a>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FINAL CTA
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/[0.025] to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <GlassCard className="max-w-3xl mx-auto p-10 md:p-16 text-center" hover={false}>
            <Reveal>
              <div className="relative inline-block mb-6">
                <img src="/cuephoria-lite-logo.png" alt="Cuephoria Lite" className="h-20 md:h-24 mx-auto rounded-xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                  Your Squad is Waiting
                </span>
              </h2>
              <p className="text-gray-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                Pool, PS5, AR Cricket, and Darts — all under one roof, right at your doorstep.
                Grab your friends and come experience the Cuephoria vibe.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-neon-pink via-purple-500 to-violet-600 text-white font-black text-base hover:shadow-2xl hover:shadow-neon-pink/30 transition-all hover:scale-[1.04] relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <CalendarCheck className="h-5 w-5 relative z-10" />
                  <span className="relative z-10">Book Your Slot Now</span>
                  <ArrowRight className="h-5 w-5 relative z-10" />
                </a>
                <a
                  href={GMAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-sm hover:shadow-xl hover:shadow-amber-500/25 transition-all hover:scale-[1.03]"
                >
                  <MapPin className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </Reveal>
          </GlassCard>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FOOTER (Matching main branch style)
         ══════════════════════════════════════════════════════════════ */}
      <footer className="bg-gaming-darker border-t border-gaming-accent/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-neon-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
            {/* Brand */}
            <div className="space-y-5">
              <div className="flex items-center space-x-3">
                <img src="/cuephoria-lite-logo.png" alt="Cuephoria Lite" className="h-12 w-12 rounded-lg relative z-10" />
                <div>
                  <h3 className="text-xl font-bold text-white">Cuephoria Lite</h3>
                  <p className="text-amber-400 text-sm">Student Gaming Spot</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The budget-friendly branch of Cuephoria, built exclusively for students near NIT Trichy.
                Pool, PS5, AR Cricket & Darts — starting at just ₹49.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="https://www.instagram.com/cuephoriaclub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-pink transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://wa.me/917550025155" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors" aria-label="WhatsApp">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61574215405586" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white">Quick Links</h4>
              <nav className="space-y-2.5">
                {[
                  { icon: Home, label: 'Main Branch', href: '/', isLink: true },
                  { icon: CalendarCheck, label: 'Book Now', href: BOOKING_URL, isLink: false },
                  { icon: BookOpen, label: 'Blog', href: '/blog', isLink: true },
                  { icon: Coffee, label: 'Café Menu', href: '/cafemenu', isLink: true },
                ].map((item) => (
                  item.isLink ? (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group text-sm"
                    >
                      <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-neon-pink hover:text-pink-300 transition-colors duration-300 group text-sm font-semibold"
                    >
                      <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>{item.label}</span>
                    </a>
                  )
                ))}
                {navLinks.map((l) => (
                  <a key={l.href} href={l.href} className="flex items-center space-x-2 text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                    <ArrowRight className="h-4 w-4" />
                    <span>{l.label}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white">Contact Info</h4>
              <div className="space-y-3.5">
                <a href={GMAP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 text-gray-400 hover:text-neon-blue transition-colors group">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">
                    <span className="font-semibold text-white">Cuephoria Lite</span><br />
                    Opposite NIT Trichy,<br />
                    QR64+CRV, Electronics Bus Stop,<br />
                    Valavandankottai, TN 620015
                  </span>
                </a>
                <a href="tel:+917550025155" className="flex items-start space-x-3 text-gray-400 hover:text-neon-blue transition-colors group">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-sm">
                    <div>{LITE_PHONE}</div>
                    <div className="text-xs text-gray-500">Call / WhatsApp</div>
                  </div>
                </a>
                <a href="mailto:contact@cuephoria.in" className="flex items-center space-x-3 text-gray-400 hover:text-neon-blue transition-colors group">
                  <Mail className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">contact@cuephoria.in</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Clock className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">11:00 AM - 11:00 PM, Every day</span>
                </div>
              </div>
            </div>

            {/* Main Branch CTA */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white">Main Branch</h4>
              <Link
                to="/"
                className="group relative p-4 bg-gradient-to-br from-neon-blue/15 to-neon-pink/10 rounded-xl border-2 border-neon-blue/25 hover:border-neon-blue/50 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:shadow-neon-blue/10 block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-neon-blue/20 rounded-lg">
                    <Gamepad2 className="h-5 w-5 text-neon-blue" />
                  </div>
                  <div>
                    <div className="text-neon-blue font-bold text-sm">Cuephoria Main</div>
                    <div className="text-gray-400 text-xs">Thiruverumbur, Trichy</div>
                  </div>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed mb-2">
                  Full experience with VR Gaming (Meta Quest 3S), more tables, and larger space.
                </p>
                <div className="flex items-center gap-1 text-neon-blue text-xs font-semibold group-hover:text-cyan-300 transition-colors">
                  <span>Visit Main Branch</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </Link>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gaming-accent/30 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm text-center sm:text-left flex items-center gap-2 flex-wrap justify-center sm:justify-start">
                <span>© {new Date().getFullYear()} Cuephoria. Made with ❤️ for Trichy students.</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">Powered by</span>
                <a
                  href="https://cuephoriatech.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/20 border border-green-500/40 rounded-md text-green-400 hover:bg-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:scale-105 shadow-sm shadow-green-500/10"
                >
                  <Code className="h-3.5 w-3.5" />
                  <span className="font-semibold text-xs">Cuephoria Tech</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Suspense fallback={null}><Chatbot /></Suspense>

      {/* Fixed Book Now CTA */}
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-6 bottom-6 z-40 px-5 py-2.5 bg-neon-pink text-white text-sm font-black rounded-full shadow-lg hover:bg-neon-pink/90 hover:shadow-neon-pink/30 transition-all hidden md:flex items-center gap-1.5"
      >
        Book Now <Sparkles className="h-3.5 w-3.5" />
      </a>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 h-11 w-11 rounded-full bg-gaming-darker border border-neon-blue/30 flex items-center justify-center z-40 shadow-lg transition-colors hover:border-neon-blue/60"
        aria-label="Back to top"
      >
        <ChevronUp size={18} className="text-neon-blue" />
      </button>
    </div>
  );
};

export default CuephoriaLite;
