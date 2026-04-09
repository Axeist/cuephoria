import React, { useEffect, useState, useCallback, useMemo } from 'react';
import {
  ArrowRight, MapPin, Siren, Sparkles, Copy,
  Gift, GraduationCap, ExternalLink, Flame,
  Crown, Phone, MessageCircle
} from 'lucide-react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import SEOMetadata from '../components/SEOMetadata';
import { useToast } from '../hooks/use-toast';

// ─── Constants ────────────────────────────────────────────────────────────────
const LITE_OPENING = new Date('2026-04-11T18:00:00');
const WHATSAPP_BOT = '918637625155';
const WHATSAPP_AGENT = '917550025155';
const createWALink = (phone: string, text: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

// ─── Countdown hook ────────────────────────────────────────────────────────────
function useCountdown(target: Date) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0, expired: false });
  useEffect(() => {
    const tick = () => {
      const ms = target.getTime() - Date.now();
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
  }, [target]);
  return t;
}

// ─── Sub-components ─────────────────────────────────────────────────────────
const TimeBox = ({
  value, label, color = 'pink',
}: { value: number; label: string; color?: 'pink' | 'amber' | 'blue' }) => {
  const border = color === 'pink' ? 'border-neon-pink/60 shadow-[0_0_18px_rgba(255,45,239,0.4)]'
    : color === 'amber' ? 'border-amber-400/60 shadow-[0_0_18px_rgba(251,191,36,0.4)]'
    : 'border-neon-blue/60 shadow-[0_0_18px_rgba(0,200,255,0.4)]';
  const text = color === 'pink' ? 'text-white' : color === 'amber' ? 'text-amber-200' : 'text-neon-blue';
  const label_c = color === 'pink' ? 'text-neon-blue' : color === 'amber' ? 'text-amber-400' : 'text-neon-pink';
  return (
    <div className="text-center">
      <div className={`bg-black/60 backdrop-blur-sm border rounded-xl px-3 py-2 md:px-5 md:py-3 min-w-[52px] md:min-w-[70px] ${border}`}>
        <span className={`text-2xl md:text-4xl font-black tabular-nums leading-none ${text}`}>
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className={`text-[9px] md:text-xs font-bold mt-1.5 block uppercase tracking-widest ${label_c}`}>{label}</span>
    </div>
  );
};

const Colon = ({ color = 'pink' }: { color?: 'pink' | 'amber' }) => (
  <span className={`text-xl md:text-3xl font-black self-start mt-2.5 md:mt-3.5 ${color === 'pink' ? 'text-neon-pink' : 'text-amber-400'}`}>:</span>
);

// ─── Main Page ─────────────────────────────────────────────────────────────────
const BookingLanding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Urgency countdown (random 15–30 min, auto-resets)
  const [urgencyTarget, setUrgencyTarget] = useState(() => {
    const d = new Date();
    d.setMinutes(d.getMinutes() + Math.floor(Math.random() * 16) + 15);
    return d;
  });
  const urgency = useCountdown(urgencyTarget);
  useEffect(() => {
    if (urgency.expired) {
      const d = new Date();
      d.setMinutes(d.getMinutes() + Math.floor(Math.random() * 16) + 15);
      setUrgencyTarget(d);
    }
  }, [urgency.expired]);

  const lite = useCountdown(LITE_OPENING);

  const copyCoupon = useCallback((code: string) => {
    navigator.clipboard.writeText(code);
    toast({ title: '✅ Coupon Copied!', description: `${code} copied to clipboard` });
  }, [toast]);

  const chatbotLink = useMemo(() => createWALink(WHATSAPP_BOT, "Hi! I'd like to book a slot at Cuephoria."), []);
  const agentLink = useMemo(() => createWALink(WHATSAPP_AGENT, "Hi! I'd like to speak with a Cuephoria agent about bookings."), []);

  const coupons = [
    { code: 'NIT35', label: '35% OFF', req: 'NIT Students', color: 'green' as const },
    { code: 'CUEPHORIA35', label: '35% OFF', req: 'Student ID Required', color: 'purple' as const },
    { code: 'CUEPHORIA20', label: '20% OFF', req: 'All Customers', color: 'blue' as const },
    { code: 'HH99', label: '₹99 FLAT', req: 'Mon–Fri, 11AM–4PM', color: 'amber' as const },
  ] as const;

  type CouponColor = typeof coupons[number]['color'];

  const couponStyle = (color: CouponColor) => ({
    wrapper: {
      green: 'bg-green-500/15 border-green-500/40 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]',
      purple: 'bg-purple-500/15 border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]',
      blue: 'bg-sky-500/15 border-sky-500/40 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(0,200,255,0.3)]',
      amber: 'bg-amber-500/15 border-amber-500/40 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]',
    }[color],
    text: {
      green: 'text-green-400', purple: 'text-purple-400', blue: 'text-sky-400', amber: 'text-amber-400',
    }[color],
  });

  return (
    <div className="min-h-screen bg-gaming-darker text-white overflow-x-hidden">
      <SEOMetadata
        title="Book Now | Cuephoria Main & Lite | PS5, VR & Pool in Trichy"
        description="Book at Cuephoria Main (Thiruverumbur) or Cuephoria Lite (opposite NIT Trichy). Special 35% off for NIT students. PS5, Meta Quest VR & Pool Tables."
        keywords="cuephoria booking, cuephoria lite, NIT trichy gaming, student gaming trichy, ps5 booking, vr gaming trichy, pool table booking trichy"
      />

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center py-10 md:py-16 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(157,78,221,0.18)_0,transparent_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(0,200,255,0.08)_0,transparent_100%)]" />
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-neon-pink/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-10 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl w-full">

          {/* Logo */}
          <div className="text-center mb-6">
            <img
              src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png"
              alt="Cuephoria Logo"
              className="h-14 md:h-20 mx-auto drop-shadow-[0_0_24px_rgba(157,78,221,0.7)]"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* ── LITE GRAND OPENING COUNTDOWN ─────────────────────────────── */}
          <div className="mb-6 md:mb-8 relative group">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-amber-400/30 via-orange-400/20 to-amber-400/30 blur-sm opacity-70 animate-pulse pointer-events-none" />
            <div className="relative bg-gradient-to-br from-amber-500/20 via-orange-600/15 to-amber-500/20 border-2 border-amber-500/50 rounded-2xl p-4 md:p-7 overflow-hidden shadow-[0_0_40px_rgba(251,191,36,0.15)]">
              {/* Shimmer sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/10 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite]" />

              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Flame className="h-5 w-5 md:h-6 md:w-6 text-amber-400 animate-pulse" />
                  <span className="text-amber-200 font-black text-xs md:text-sm uppercase tracking-[0.2em]">Grand Opening</span>
                  <Flame className="h-5 w-5 md:h-6 md:w-6 text-amber-400 animate-pulse" />
                </div>

                <h2 className="text-3xl md:text-5xl font-black mb-1 leading-none">
                  <span className="text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]">CUEPHORIA LITE</span>
                </h2>
                <p className="text-amber-200/80 text-sm md:text-base font-semibold mb-1">
                  April 11, 2026 &bull; 6:00 PM
                </p>
                <p className="text-amber-300/70 text-xs md:text-sm mb-4 flex items-center justify-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  Opposite NIT Trichy
                </p>

                {lite.expired ? (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-300 font-black text-sm md:text-base animate-pulse">
                    <Sparkles className="h-4 w-4" /> WE&apos;RE OPEN! BOOK NOW
                  </div>
                ) : (
                  <>
                    <div className="flex justify-center gap-2 md:gap-3 mb-4">
                      <TimeBox value={lite.d} label="Days" color="amber" />
                      <Colon color="amber" />
                      <TimeBox value={lite.h} label="Hours" color="amber" />
                      <Colon color="amber" />
                      <TimeBox value={lite.m} label="Mins" color="amber" />
                      <Colon color="amber" />
                      <TimeBox value={lite.s} label="Secs" color="amber" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500/20 border border-red-500/40 rounded-full text-red-300 font-bold text-xs md:text-sm animate-pulse">
                      <Gift className="h-3.5 w-3.5" />
                      Opening Day: Up to 60% OFF for Early Birds!
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mb-5">
            <h1 className="text-3xl md:text-6xl font-black leading-tight mb-2">
              <span className="bg-gradient-to-r from-neon-blue via-purple-300 to-neon-pink bg-clip-text text-transparent">
                BOOK YOUR SPOT
              </span>
            </h1>
            <p className="text-gray-300 text-sm md:text-lg">
              PS5 Gaming &bull; Meta Quest 3S VR &bull; Professional Pool Tables
            </p>
          </div>

          {/* ── NIT DISCOUNT BANNER ──────────────────────────────────────── */}
          <div className="mb-5 relative overflow-hidden rounded-xl border-2 border-green-500/50 bg-gradient-to-r from-green-500/15 via-teal-500/10 to-green-500/15 p-3 md:p-4 text-center shadow-[0_0_24px_rgba(34,197,94,0.1)]">
            <div className="absolute inset-0 bg-green-500/5 animate-pulse pointer-events-none" />
            <div className="relative flex flex-wrap items-center justify-center gap-2 md:gap-3">
              <GraduationCap className="h-5 w-5 text-green-400" />
              <span className="text-green-200 font-black text-base md:text-xl tracking-wide">NIT TRICHY STUDENTS</span>
              <span className="px-3 py-1 bg-green-500/30 border border-green-400/60 text-green-200 font-black text-sm md:text-lg rounded-full">
                35% OFF
              </span>
              <span className="font-mono font-black text-green-400 text-sm md:text-base bg-black/30 px-2 py-0.5 rounded border border-green-500/40">
                NIT35
              </span>
              <GraduationCap className="h-5 w-5 text-green-400" />
            </div>
            <p className="text-green-400/70 text-[10px] md:text-xs mt-1">Show your student ID at the counter &bull; Valid at both branches</p>
          </div>

          {/* ── URGENCY TIMER ────────────────────────────────────────────── */}
          <div className="mb-7 md:mb-10">
            <p className="text-center mb-2.5 flex items-center justify-center gap-2">
              <Siren className="h-4 w-4 text-red-500 animate-pulse" />
              <span className="text-xs md:text-sm uppercase tracking-[0.15em] font-black text-red-400">Limited Offer — Ends In</span>
              <Siren className="h-4 w-4 text-red-500 animate-pulse" />
            </p>
            <div className="flex justify-center gap-2 md:gap-3">
              <TimeBox value={urgency.h} label="Hours" color="pink" />
              <Colon color="pink" />
              <TimeBox value={urgency.m} label="Mins" color="pink" />
              <Colon color="pink" />
              <TimeBox value={urgency.s} label="Secs" color="pink" />
            </div>
          </div>

          {/* ── BRANCH SELECTION ─────────────────────────────────────────── */}
          <div className="mb-8 md:mb-10">
            <div className="text-center mb-5 md:mb-7">
              <h2 className="text-xl md:text-3xl font-black">
                <span className="text-white">CHOOSE YOUR </span>
                <span className="bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">BRANCH</span>
              </h2>
              <p className="text-gray-400 text-xs md:text-sm mt-1">Tap a branch to go straight to booking</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

              {/* ── Main Branch ── */}
              <a
                href="https://admin.cuephoria.in/public/booking"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-2xl overflow-hidden border-2 border-neon-blue/40 hover:border-neon-blue/80 transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,200,255,0.25)] hover:-translate-y-1 active:scale-[0.98]"
              >
                <div className="bg-gradient-to-br from-neon-blue/15 via-purple-600/10 to-neon-blue/10 p-5 md:p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 to-neon-blue/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative z-10">

                    <div className="flex items-center gap-2 mb-3">
                      <Crown className="h-5 w-5 text-neon-blue flex-shrink-0" />
                      <span className="text-xs font-black px-2 py-0.5 rounded-full bg-neon-blue/20 border border-neon-blue/40 text-neon-blue uppercase tracking-wider">
                        Main Branch
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black leading-tight mb-3">
                      Cuephoria<br />
                      <span className="text-neon-blue drop-shadow-[0_0_8px_rgba(0,200,255,0.6)]">Gaming Lounge</span>
                    </h3>

                    <div className="flex items-center gap-1.5 text-gray-300 text-sm mb-5">
                      <MapPin className="h-3.5 w-3.5 text-neon-blue flex-shrink-0" />
                      <span>Thiruverumbur, Trichy</span>
                    </div>

                    <ul className="space-y-2 mb-5 text-sm text-gray-300">
                      {[
                        'Full PS5 Setup with 4K Display',
                        'Meta Quest 3S VR Gaming',
                        'Professional Pool Tables',
                        '11 AM – 11 PM Daily',
                      ].map(f => (
                        <li key={f} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-neon-blue flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between mt-auto">
                      <p className="text-xs text-gray-400">
                        From <span className="text-neon-blue font-black text-base">₹150</span>
                      </p>
                      <div className="flex items-center gap-1.5 px-4 py-2 bg-neon-blue text-black font-black rounded-xl group-hover:bg-cyan-300 transition-colors text-sm">
                        BOOK NOW
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              {/* ── Lite Branch ── */}
              <a
                href="https://admin.cuephoria.in/lite/public/booking"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-2xl overflow-hidden border-2 border-amber-500/50 hover:border-amber-400 transition-all duration-300 hover:shadow-[0_0_50px_rgba(251,191,36,0.25)] hover:-translate-y-1 active:scale-[0.98]"
              >
                {/* NEW badge */}
                <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-lg shadow-red-500/40 animate-pulse">
                  🔥 NEW
                </div>

                <div className="bg-gradient-to-br from-amber-500/18 via-orange-600/12 to-amber-500/10 p-5 md:p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative z-10">

                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="h-5 w-5 text-amber-400 animate-pulse flex-shrink-0" />
                      <span className="text-xs font-black px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 uppercase tracking-wider">
                        {lite.expired ? '🎉 Now Open!' : `Opening Apr 11 • 6 PM`}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black leading-tight mb-3">
                      Cuephoria<br />
                      <span className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">Lite</span>
                    </h3>

                    <div className="flex items-center gap-1.5 text-gray-300 text-sm mb-5">
                      <MapPin className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />
                      <span>Opposite NIT Trichy</span>
                    </div>

                    <ul className="space-y-2 mb-5 text-sm text-gray-300">
                      {[
                        { text: 'Same Premium Gaming Experience', highlight: false },
                        { text: 'More Affordable Pricing', highlight: true, color: 'text-amber-300' },
                        { text: '35% OFF for NIT Students!', highlight: true, color: 'text-green-400' },
                        { text: 'Late Night Hours', highlight: false },
                      ].map(({ text, highlight, color }) => (
                        <li key={text} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                          <span className={highlight ? `font-semibold ${color}` : ''}>{text}</span>
                        </li>
                      ))}
                    </ul>

                    {!lite.expired && (
                      <div className="bg-amber-500/15 border border-amber-500/30 rounded-lg px-3 py-2 mb-4 text-center">
                        <p className="text-amber-300 text-xs font-bold">
                          Opens in {lite.d}d {lite.h}h {lite.m}m {lite.s}s
                        </p>
                      </div>
                    )}

                    <div className="flex items-center justify-between mt-auto">
                      <p className="text-xs text-gray-400">
                        Student-friendly <span className="text-amber-400 font-black">prices</span>
                      </p>
                      <div className="flex items-center gap-1.5 px-4 py-2 bg-amber-500 text-black font-black rounded-xl group-hover:bg-amber-300 transition-colors text-sm">
                        BOOK NOW
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Quick open-in-new-tab fallback links */}
            <div className="mt-3 flex flex-col sm:flex-row gap-2 justify-center text-xs text-gray-500">
              <a href="https://admin.cuephoria.in/public/booking" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 hover:text-neon-blue transition-colors">
                <ExternalLink className="h-3 w-3" /> Open Main Booking in new tab
              </a>
              <span className="hidden sm:block">•</span>
              <a href="https://admin.cuephoria.in/lite/public/booking" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 hover:text-amber-400 transition-colors">
                <ExternalLink className="h-3 w-3" /> Open Lite Booking in new tab
              </a>
            </div>
          </div>

          {/* ── COUPON CODES ─────────────────────────────────────────────── */}
          <div className="mb-8 bg-gaming-accent/10 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-6">
            <h3 className="text-center font-black text-base md:text-lg mb-4 flex items-center justify-center gap-2">
              <Sparkles className="h-4 w-4 text-neon-pink animate-pulse" />
              <span className="text-neon-pink">EXCLUSIVE DISCOUNT CODES</span>
              <Sparkles className="h-4 w-4 text-neon-pink animate-pulse" />
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              {coupons.map(({ code, label, req, color }) => {
                const s = couponStyle(color);
                return (
                  <button
                    key={code}
                    onClick={() => copyCoupon(code)}
                    className={`group p-3 rounded-xl border text-left cursor-pointer transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] ${s.wrapper}`}
                  >
                    <div className={`font-mono font-black text-sm md:text-base mb-1 ${s.text}`}>{code}</div>
                    <div className="text-white font-black text-xs md:text-sm">{label}</div>
                    <div className="text-gray-400 text-[10px] mt-0.5 leading-snug">{req}</div>
                    <div className={`text-[9px] mt-1.5 flex items-center gap-0.5 opacity-60 ${s.text}`}>
                      <Copy className="h-2.5 w-2.5" /> tap to copy
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── PRICING SNAPSHOT ─────────────────────────────────────────── */}
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {[
              { label: 'PS5 Gaming', price: '₹150', sub: 'per controller / hr', color: 'neon-blue' },
              { label: 'VR Station', price: '₹150', sub: 'per session', color: 'neon-pink' },
              { label: 'Pool Table', price: '₹300', sub: 'per hour', color: 'amber-400' },
            ].map(({ label, price, sub, color }) => (
              <div key={label}
                className="bg-gaming-accent/10 border border-white/10 rounded-xl p-3 md:p-4 text-center hover:border-white/20 transition-colors">
                <p className={`text-2xl md:text-3xl font-black text-${color}`}>{price}</p>
                <p className="text-white font-semibold text-sm mt-0.5">{label}</p>
                <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
              </div>
            ))}
          </div>

          {/* ── CONTACT ──────────────────────────────────────────────────── */}
          <div className="mb-8 bg-gaming-accent/10 rounded-2xl border border-white/10 p-4 md:p-6 text-center">
            <p className="text-gray-400 text-xs md:text-sm mb-4">Can&apos;t book online? Reach us directly:</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
              <a href={chatbotLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neon-pink/90 hover:bg-neon-pink text-white font-bold text-sm transition-colors">
                <MessageCircle className="h-4 w-4" /> WhatsApp Chatbot
              </a>
              <a href={agentLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neon-blue/80 hover:bg-neon-blue text-white font-bold text-sm transition-colors">
                <Phone className="h-4 w-4" /> Talk to Agent
              </a>
            </div>
            <p className="text-gray-400 text-xs">
              📞 <strong>+91 86376 25155</strong> &nbsp;|&nbsp; <strong>+91 75500 25155</strong>
            </p>
          </div>

          {/* Return home */}
          <div className="text-center">
            <button
              onClick={() => navigate('/')}
              className="text-gray-500 hover:text-neon-blue transition-colors text-sm"
            >
              ← Return to main site
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookingLanding;
