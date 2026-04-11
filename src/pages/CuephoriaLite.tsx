import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Clock, Sparkles, ArrowRight, ChevronUp,
  Gamepad2, Target, Crosshair, Zap, Users, Gift,
  Star, Crown, Percent, Phone, MessageCircle, Instagram,
  ExternalLink, Check, Flame, Music, Wifi, Coffee
} from 'lucide-react';
import SEOMetadata from '../components/SEOMetadata';

const LITE_OPENING = new Date('2026-04-12T11:00:00');

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

function useInView(threshold = 0.15) {
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

const GlassCard = ({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`relative backdrop-blur-xl bg-white/[0.04] border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const activities = [
  {
    icon: Target,
    title: '2 Pool Tables',
    desc: 'Compact professional tables — perfect for quick rounds between classes.',
    color: 'from-cyan-400 to-blue-500',
    glow: 'shadow-cyan-500/20',
    iconBg: 'bg-cyan-500/15 border-cyan-500/30',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Gamepad2,
    title: '4 PS5 Controllers',
    desc: 'FIFA, GTA, Tekken, and more — squad up on the big screen.',
    color: 'from-violet-400 to-purple-500',
    glow: 'shadow-violet-500/20',
    iconBg: 'bg-violet-500/15 border-violet-500/30',
    iconColor: 'text-violet-400',
  },
  {
    icon: Crosshair,
    title: 'Metashot AR Cricket',
    desc: 'India\'s first AR cricket experience — bowl, bat, and feel the stadium.',
    color: 'from-emerald-400 to-green-500',
    glow: 'shadow-emerald-500/20',
    iconBg: 'bg-emerald-500/15 border-emerald-500/30',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Target,
    title: 'Darts',
    desc: 'Classic pub-style darts — compete with friends or just chill and throw.',
    color: 'from-amber-400 to-orange-500',
    glow: 'shadow-amber-500/20',
    iconBg: 'bg-amber-500/15 border-amber-500/30',
    iconColor: 'text-amber-400',
  },
];

const vibeFeatures = [
  { icon: Music, text: 'Chill Lo-fi & Gaming Beats' },
  { icon: Wifi, text: 'Free High-Speed Wi-Fi' },
  { icon: Coffee, text: 'Affordable Café Menu' },
  { icon: Users, text: 'Squad-Friendly Setup' },
  { icon: Zap, text: 'Neon-Lit Ambience' },
  { icon: Crown, text: 'Same Cuephoria Quality' },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '₹49',
    per: '/ 30 min',
    desc: 'Quick game before or after class',
    features: ['Pool Table Access', 'Darts Zone', 'Free Wi-Fi', 'Café Access'],
    accent: 'border-cyan-500/40',
    badge: null,
    btnClass: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
  },
  {
    name: 'Squad',
    price: '₹149',
    per: '/ hour',
    desc: 'The perfect hangout package',
    features: ['PS5 Gaming (4 Controllers)', 'Pool Table Access', 'Metashot AR Cricket', 'Darts Zone', 'Free Wi-Fi', '10% Café Discount'],
    accent: 'border-amber-400/60',
    badge: 'MOST POPULAR',
    btnClass: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-black',
  },
  {
    name: 'Monthly Pass',
    price: '₹999',
    per: '/ month',
    desc: 'Unlimited access for regulars',
    features: ['Unlimited Pool', 'Unlimited Darts', '2hrs PS5/day', 'AR Cricket Sessions', 'Priority Booking', '20% Café Discount', 'Exclusive Events'],
    accent: 'border-violet-500/40',
    badge: 'BEST VALUE',
    btnClass: 'bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-black',
  },
];

const CuephoriaLite = () => {
  const countdown = useCountdown();
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-[#060A13] text-white overflow-hidden">
      <SEOMetadata
        title="Cuephoria Lite | Student-Friendly Gaming Lounge Near NIT Trichy"
        description="Cuephoria Lite — Trichy's most affordable gaming spot opposite NIT. 2 Pool Tables, 4 PS5 Controllers, Metashot AR Cricket, Darts & the best student chill zone. Opening April 12, 2026!"
      />

      {/* ── Ambient Background ─────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/[0.02] rounded-full blur-[150px]" />
      </div>

      {/* ── Navigation Bar ─────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-black/40 border-b border-white/[0.06]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png"
              alt="Cuephoria"
              className="h-8 group-hover:scale-105 transition-transform"
            />
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-white">CUEPHORIA</span>
              <span className="text-xs font-black px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500/30 to-orange-500/30 border border-amber-500/50 text-amber-300">LITE</span>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">
              Main Branch
            </Link>
            <a
              href="https://maps.app.goo.gl/nvTtK6SG4nGQXenGA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black text-sm font-bold hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105"
            >
              <MapPin className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Get Directions</span>
              <span className="sm:hidden">Map</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════════
          HERO
         ══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-2 h-2 bg-amber-400/60 rounded-full animate-pulse" />
          <div className="absolute top-40 left-20 w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-ping" />
          <div className="absolute bottom-40 right-40 w-1 h-1 bg-violet-400/50 rounded-full animate-pulse" />
          <div className="absolute top-1/3 left-1/3 w-px h-32 bg-gradient-to-b from-transparent via-amber-500/20 to-transparent rotate-45" />
          <div className="absolute bottom-1/3 right-1/3 w-px h-24 bg-gradient-to-b from-transparent via-cyan-500/15 to-transparent -rotate-12" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-widest mb-6 backdrop-blur-sm">
              <Flame className="h-3.5 w-3.5 animate-pulse" />
              Grand Opening — {countdown.expired ? 'Now Open!' : 'April 12, 2026'}
            </div>

            {/* Title */}
            <h1 className="font-black leading-[0.95] mb-5">
              <span className="block text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(245,158,11,0.15)]">
                CUEPHORIA LITE
              </span>
              <span className="block text-lg md:text-2xl mt-3 text-white/80 font-semibold tracking-wide">
                The Student Gaming Spot — Opposite NIT Trichy
              </span>
            </h1>

            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Same Cuephoria luxury. Pocket-friendly prices. Pool, PS5, AR Cricket, Darts
              — the ultimate chill zone built for students.
            </p>

            {/* Countdown */}
            {!countdown.expired && (
              <div className="inline-flex items-center gap-1.5 md:gap-3 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-3 mb-8">
                {[
                  { v: countdown.d, l: 'Days' },
                  { v: countdown.h, l: 'Hours' },
                  { v: countdown.m, l: 'Mins' },
                  { v: countdown.s, l: 'Secs' },
                ].map(({ v, l }, i) => (
                  <React.Fragment key={l}>
                    <div className="text-center min-w-[52px]">
                      <div className="text-2xl md:text-3xl font-black tabular-nums bg-gradient-to-b from-amber-300 to-amber-500 bg-clip-text text-transparent">
                        {String(v).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{l}</div>
                    </div>
                    {i < 3 && <div className="text-amber-500/40 text-xl font-black self-start mt-1">:</div>}
                  </React.Fragment>
                ))}
              </div>
            )}

            {countdown.expired && (
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500/15 border border-green-500/40 text-green-400 font-bold mb-8 animate-pulse">
                <Sparkles className="h-5 w-5" />
                We're OPEN — Come say hi!
              </div>
            )}

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://maps.app.goo.gl/nvTtK6SG4nGQXenGA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-sm hover:shadow-xl hover:shadow-amber-500/30 transition-all hover:scale-[1.03] active:scale-100"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </a>
              <a
                href={`https://wa.me/918637625155?text=${encodeURIComponent("Hey! I want to know more about Cuephoria Lite near NIT Trichy!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl backdrop-blur-xl bg-white/[0.06] border border-white/[0.12] text-white font-semibold text-sm hover:bg-white/[0.1] transition-all hover:scale-[1.03] active:scale-100"
              >
                <MessageCircle className="h-4 w-4 text-green-400" />
                WhatsApp Us
              </a>
            </div>

            {/* Location tag */}
            <div className="mt-8 flex items-center justify-center gap-2 text-gray-500 text-xs">
              <MapPin className="h-3 w-3" />
              <span>QR64+CRV, Opposite NIT Trichy, Valavandankottai, Tamil Nadu 620015</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <div className="w-5 h-9 border-2 border-white/15 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-amber-400/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          WHAT'S INSIDE
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500/70 mb-3">What You Get</p>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white/70 bg-clip-text text-transparent">
                Everything You Need to
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Unwind & Compete
              </span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              Compact space, massive fun. Every corner is designed for the ultimate student hangout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {activities.map((a, i) => (
              <GlassCard key={a.title} className="p-6 hover:border-white/[0.15] group" delay={i * 100}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${a.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    <a.icon className={`h-5 w-5 ${a.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white mb-1.5">{a.title}</h3>
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
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.02] to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <GlassCard className="p-8 md:p-12">
              <div className="text-center mb-10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500/70 mb-3">The Vibe</p>
                <h2 className="text-3xl md:text-4xl font-black mb-3">
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    Best Chilling Spot
                  </span>
                  <span className="text-white"> Near Campus</span>
                </h2>
                <p className="text-gray-400 text-sm max-w-md mx-auto">
                  Skip the boring canteen. Cuephoria Lite is where you come to recharge, compete, and create memories.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {vibeFeatures.map((f, i) => (
                  <div
                    key={f.text}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.06] transition-all duration-300 group"
                  >
                    <f.icon className="h-4 w-4 text-amber-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-xs md:text-sm text-gray-300 font-medium">{f.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <blockquote className="text-lg md:text-xl italic text-gray-300 max-w-lg mx-auto">
                  "Where <span className="text-amber-400 font-semibold not-italic">students</span> go to escape. Where <span className="text-cyan-400 font-semibold not-italic">memories</span> get made."
                </blockquote>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PRICING
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-500/70 mb-3">Student-Friendly Pricing</p>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <GlassCard
                key={plan.name}
                className={`p-6 md:p-8 ${plan.accent} ${plan.badge === 'MOST POPULAR' ? 'md:-mt-4 md:mb-[-16px] md:py-10' : ''}`}
                delay={i * 120}
              >
                {plan.badge && (
                  <div className="mb-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${plan.badge === 'MOST POPULAR' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'bg-violet-500/20 text-violet-400 border border-violet-500/40'}`}>
                      <Star className="h-3 w-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-black text-white mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-500 mb-4">{plan.desc}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">{plan.price}</span>
                  <span className="text-sm text-gray-500 font-medium">{plan.per}</span>
                </div>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/918637625155?text=${encodeURIComponent(`Hi! I'm interested in the ${plan.name} plan at Cuephoria Lite.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm transition-all duration-300 hover:scale-[1.03] active:scale-100 ${plan.btnClass}`}
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </a>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-xs">
              NIT student? Show your ID for an extra <span className="text-amber-400 font-bold">10% OFF</span> on any plan!
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          STUDENT SPECIALS
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <GlassCard className="max-w-4xl mx-auto p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/15 border border-green-500/30 rounded-full text-green-400 text-xs font-black uppercase tracking-wider mb-4">
                  <Gift className="h-3 w-3" />
                  Student Specials
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Why Students
                  <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"> Love </span>
                  Cuephoria Lite
                </h2>
                <ul className="space-y-3">
                  {[
                    'Starts at ₹49 — cheaper than a fancy coffee',
                    'Just 2 minutes walk from NIT Trichy campus',
                    'Group discounts for 4+ friends',
                    'Free Wi-Fi for assignments (we know the vibe)',
                    'Monthly pass = unlimited fun for ₹999',
                    'Opening day: up to 60% OFF for early birds',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-64 flex-shrink-0">
                <div className="backdrop-blur-xl bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 text-center">
                  <div className="text-5xl font-black bg-gradient-to-b from-amber-300 to-amber-500 bg-clip-text text-transparent mb-1">₹49</div>
                  <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">Starting Price</div>
                  <div className="h-px bg-white/10 mb-4" />
                  <p className="text-gray-400 text-xs mb-4">Less than your daily chai budget</p>
                  <a
                    href={`https://wa.me/918637625155?text=${encodeURIComponent("Hey! I'm an NIT student. What deals do you have at Cuephoria Lite?")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-black hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    Claim Student Offer
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          LOCATION + CONTACT
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500/70 mb-3">Find Us</p>
            <h2 className="text-3xl md:text-5xl font-black">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Right Next to
              </span>{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Your Campus
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <GlassCard className="p-6 md:p-8">
              <h3 className="text-lg font-black text-white mb-5 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-400" />
                Location
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-amber-400 font-bold text-sm mb-1">Cuephoria Lite</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Opposite NIT Trichy Gate<br />
                    QR64+CRV, Electronics Bus Stop,<br />
                    Valavandankottai, Tamil Nadu 620015
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Clock className="h-4 w-4 text-cyan-400" />
                  <span>11:00 AM – 11:00 PM, Every Day</span>
                </div>
                <a
                  href="https://maps.app.goo.gl/nvTtK6SG4nGQXenGA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black text-sm font-bold hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105"
                >
                  <MapPin className="h-4 w-4" />
                  Open in Google Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </GlassCard>

            <GlassCard className="p-6 md:p-8" delay={100}>
              <h3 className="text-lg font-black text-white mb-5 flex items-center gap-2">
                <Phone className="h-5 w-5 text-cyan-400" />
                Get in Touch
              </h3>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/918637625155?text=${encodeURIComponent("Hi! I'd like to know more about Cuephoria Lite near NIT Trichy.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-green-500/10 border border-green-500/20 hover:border-green-500/40 transition-all group"
                >
                  <MessageCircle className="h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-sm font-bold text-white">WhatsApp</div>
                    <div className="text-xs text-gray-400">+91 86376 25155</div>
                  </div>
                </a>
                <a
                  href="tel:+917550025155"
                  className="flex items-center gap-3 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all group"
                >
                  <Phone className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-sm font-bold text-white">Call Us</div>
                    <div className="text-xs text-gray-400">+91 75500 25155</div>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/cuephoriaclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 hover:border-pink-500/40 transition-all group"
                >
                  <Instagram className="h-5 w-5 text-pink-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-sm font-bold text-white">Instagram</div>
                    <div className="text-xs text-gray-400">@cuephoriaclub</div>
                  </div>
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FINAL CTA
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/[0.03] to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <GlassCard className="max-w-3xl mx-auto p-8 md:p-14 text-center">
            <Sparkles className="h-8 w-8 text-amber-400 mx-auto mb-5 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Ready to Experience
              </span>
              <br />
              <span className="text-white">Cuephoria Lite?</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto mb-8">
              Grab your friends, head over, and discover why everyone near NIT Trichy
              is talking about us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://maps.app.goo.gl/nvTtK6SG4nGQXenGA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-sm hover:shadow-xl hover:shadow-amber-500/30 transition-all hover:scale-[1.03]"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </a>
              <a
                href={`https://wa.me/918637625155?text=${encodeURIComponent("Hi! I'm coming to Cuephoria Lite! Can I book a slot?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl backdrop-blur-xl bg-white/[0.06] border border-white/[0.12] text-white font-semibold text-sm hover:bg-white/[0.1] transition-all hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4 text-green-400" />
                Book via WhatsApp
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="py-10 border-t border-white/[0.06]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png"
              alt="Cuephoria"
              className="h-6"
            />
            <span className="text-sm font-bold text-white">CUEPHORIA LITE</span>
          </div>
          <p className="text-gray-600 text-xs mb-4">
            A branch of Cuephoria — Trichy's #1 Gaming Lounge
          </p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <Link to="/" className="text-xs text-gray-500 hover:text-amber-400 transition-colors">
              Main Branch
            </Link>
            <span className="text-gray-700">·</span>
            <Link to="/book" className="text-xs text-gray-500 hover:text-amber-400 transition-colors">
              Book Online
            </Link>
            <span className="text-gray-700">·</span>
            <Link to="/blog" className="text-xs text-gray-500 hover:text-amber-400 transition-colors">
              Blog
            </Link>
          </div>
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} Cuephoria. Made with ❤️ for Trichy students.
          </p>
        </div>
      </footer>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 h-11 w-11 rounded-full backdrop-blur-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center z-40 hover:bg-white/[0.12] transition-all"
        aria-label="Back to top"
      >
        <ChevronUp size={18} className="text-amber-400" />
      </button>
    </div>
  );
};

export default CuephoriaLite;
