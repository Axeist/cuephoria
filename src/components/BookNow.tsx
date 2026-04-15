
import React from 'react';
import { Calendar, Users, Award, Sparkles, Copy, ArrowRight, MapPin, Crown, Zap, Gift, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import CuephoriaLiteAnnouncement from './CuephoriaLiteAnnouncement';
import ChocoLocaAnnouncement from './ChocoLocaAnnouncement';

const couponCodes = [
  {
    code: "NIT35", discount: "35% OFF", req: "NIT @ Main branch",
    color: "green" as const,
    details: [{ type: "PS5/VR", original: "₹150", discounted: "₹97.50" }, { type: "Pool", original: "₹300", discounted: "₹195" }],
  },
  {
    code: "NITLITE50", discount: "50% OFF", req: "NIT @ Lite branch",
    color: "rose" as const,
    details: [{ type: "PS5/VR", original: "₹150", discounted: "₹75" }, { type: "Pool", original: "₹300", discounted: "₹150" }],
  },
  {
    code: "CUEPHORIA20", discount: "20% OFF", req: "Main — non-NIT",
    color: "blue" as const,
    details: [{ type: "PS5/VR", original: "₹150", discounted: "₹120" }, { type: "Pool", original: "₹300", discounted: "₹240" }],
  },
  {
    code: "HH99", discount: "₹99 FLAT", req: "Mon–Fri 11AM–4PM",
    color: "amber" as const,
    details: [{ type: "PS5", original: "₹150", discounted: "₹99" }, { type: "Pool", original: "₹300", discounted: "₹99" }],
  },
] as const;

type CouponColor = typeof couponCodes[number]['color'];

const couponStyle = (c: CouponColor) => ({
  wrapper: {
    green:  'bg-green-500/10  border-green-500/30  hover:border-green-400  hover:shadow-[0_0_18px_rgba(34,197,94,0.25)]',
    rose:   'bg-rose-500/10   border-rose-500/30    hover:border-rose-400    hover:shadow-[0_0_18px_rgba(244,63,94,0.22)]',
    blue:   'bg-sky-500/10    border-sky-400/30    hover:border-sky-400    hover:shadow-[0_0_18px_rgba(0,200,255,0.25)]',
    amber:  'bg-amber-500/10  border-amber-500/30  hover:border-amber-400  hover:shadow-[0_0_18px_rgba(251,191,36,0.25)]',
  }[c],
  text: {
    green: 'text-green-400', rose: 'text-rose-300', blue: 'text-sky-400', amber: 'text-amber-400',
  }[c],
});

const BookNow = () => {
  const { toast } = useToast();
  const copy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({ title: '✅ Copied!', description: `${code} copied to clipboard` });
  };

  return (
    <section id="book-now" className="py-16 md:py-20 relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,200,255,0.06)_0,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* ── Section header ─────────────────────────────────────── */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Ready to <span className="neon-text-blue">Play</span>?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Book your gaming or pool session at either of our branches and enjoy an unforgettable experience.
          </p>
          {/* Membership offer — elegant pill, not a blinking siren */}
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-neon-pink/20 border border-purple-500/30 text-purple-200 text-xs md:text-sm font-bold">
            <Award className="h-3.5 w-3.5 text-neon-pink flex-shrink-0" />
            Monthly Memberships — 50% OFF &nbsp;·&nbsp; Save big every visit
          </div>
        </div>

        {/* Choco Loca + Lite (compact) */}
        <div className="max-w-4xl mx-auto mb-4 space-y-3">
          <ChocoLocaAnnouncement variant="card" />
          <CuephoriaLiteAnnouncement variant="compact" />
        </div>

        {/* ── Main glass container ────────────────────────────────── */}
        <div className="max-w-6xl mx-auto bg-gaming-darker/60 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_60px_rgba(0,200,255,0.04)]">

          {/* Top half: booking + pricing side-by-side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">

            {/* ── LEFT: Book Your Session ──────────────────────────── */}
            <div className="p-5 md:p-7">
              <h3 className="text-lg md:text-xl font-black text-white mb-1 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-neon-blue flex-shrink-0" />
                Book Your Session
              </h3>
              <p className="text-gray-400 text-xs mb-5">
                Pick a branch and book instantly — apply discount codes at checkout.
              </p>

              <div className="flex flex-col gap-3 mb-4">
                {/* Main branch */}
                <a
                  href="https://admin.cuephoria.in/public/booking"
                  target="_blank" rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-neon-blue/10 border border-neon-blue/30 hover:border-neon-blue/60 hover:bg-neon-blue/15 transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Crown className="h-3.5 w-3.5 text-neon-blue" />
                      <p className="font-bold text-white text-sm">Cuephoria Main Branch</p>
                    </div>
                    <p className="text-gray-400 text-xs flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Thiruverumbur, Trichy
                    </p>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-neon-blue text-black font-black rounded-lg text-xs group-hover:bg-cyan-300 transition-colors whitespace-nowrap">
                    Book Now <ArrowRight className="h-3 w-3" />
                  </div>
                </a>

                {/* Lite branch */}
                <a
                  href="https://admin.cuephoria.in/lite/public/booking"
                  target="_blank" rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:border-amber-500/60 hover:bg-amber-500/15 transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                      <p className="font-bold text-white text-sm">
                        Cuephoria Lite
                        <span className="ml-1.5 text-[8px] bg-red-500 text-white px-1.5 py-0.5 rounded-full font-black uppercase align-middle">NEW</span>
                      </p>
                    </div>
                    <p className="text-gray-400 text-xs flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Opposite NIT Trichy
                    </p>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-amber-500 text-black font-black rounded-lg text-xs group-hover:bg-amber-300 transition-colors whitespace-nowrap">
                    Book Now <ArrowRight className="h-3 w-3" />
                  </div>
                </a>
              </div>

              <Link
                to="/book"
                className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-colors text-gray-400 hover:text-white text-xs"
              >
                View all offers, coupons & branch details
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* ── RIGHT: Pricing & Memberships ─────────────────────── */}
            <div className="p-5 md:p-7">
              <h3 className="text-lg md:text-xl font-black text-white mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-neon-pink flex-shrink-0" />
                Pricing & Memberships
              </h3>

              {/* Pricing cards — 3 col */}
              <div className="grid grid-cols-3 gap-2 md:gap-3 mb-5">
                {[
                  { label: 'Pool Table', price: '₹300', sub: '/hr', color: 'neon-blue' },
                  { label: 'PS5 Gaming', price: '₹150', sub: '/controller', color: 'neon-pink' },
                  { label: 'VR Station', price: '₹150', sub: '/session', color: 'amber-400' },
                ].map(({ label, price, sub, color }) => (
                  <div key={label} className="bg-gaming-accent/20 border border-white/10 rounded-xl p-2.5 text-center hover:border-white/20 transition-colors">
                    <p className={`text-xl md:text-2xl font-black text-${color}`}>{price}</p>
                    <p className="text-white text-[10px] md:text-xs font-semibold mt-0.5 leading-tight">{label}</p>
                    <p className="text-gray-500 text-[9px] mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>

              {/* Memberships compact */}
              <div className="mb-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Monthly Memberships</p>
                <div className="space-y-1.5">
                  {[
                    { name: '💎 Silver', desc: 'Up to 2 players', price: '₹299', color: 'text-sky-400' },
                    { name: '🌟 Gold', desc: 'Up to 4 players', price: '₹499', color: 'text-neon-pink' },
                    { name: 'Extra player', desc: 'per hour add-on', price: '₹49', color: 'text-gray-300' },
                  ].map(({ name, desc, price, color }) => (
                    <div key={name} className="flex items-center justify-between px-3 py-2 rounded-lg bg-gaming-accent/20 border border-white/8">
                      <div>
                        <span className="text-white text-xs font-semibold">{name}</span>
                        <span className="text-gray-500 text-[10px] ml-2">{desc}</span>
                      </div>
                      <span className={`font-black text-sm ${color}`}>{price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Loyalty compact */}
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-neon-pink/8 border border-neon-pink/20">
                <Award className="h-4 w-4 text-neon-pink flex-shrink-0" />
                <div className="text-xs text-gray-300 leading-tight">
                  <span className="text-neon-pink font-bold">Loyalty Points: </span>
                  Members earn <span className="text-white font-semibold">5 pts</span> · Non-members earn <span className="text-white font-semibold">2 pts</span> per ₹100 &nbsp;·&nbsp; ₹1/pt
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom: Coupon Codes (full width) ────────────────────── */}
          <div className="border-t border-white/10 p-5 md:p-7">
            <h3 className="text-sm md:text-base font-black text-white mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-neon-pink" />
              Discount Codes — tap to copy
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
              {couponCodes.map(({ code, discount, req, color, details }) => {
                const s = couponStyle(color);
                return (
                  <button
                    key={code}
                    onClick={() => copy(code)}
                    className={`group p-3 rounded-xl border text-left cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${s.wrapper}`}
                  >
                    <div className={`font-mono font-black text-sm mb-0.5 ${s.text}`}>{code}</div>
                    <div className="text-white font-black text-xs">{discount}</div>
                    <div className="text-gray-400 text-[10px] mt-0.5 mb-1.5 leading-snug">{req}</div>
                    <div className="space-y-0.5">
                      {details.map((d) => (
                        <div key={d.type} className="flex items-center gap-1 text-[10px]">
                          <span className="text-gray-500 line-through">{d.original}</span>
                          <span className={`font-semibold ${s.text}`}>→ {d.discounted}</span>
                          <span className="text-gray-500">{d.type}</span>
                        </div>
                      ))}
                    </div>
                    <div className={`text-[9px] mt-1.5 flex items-center gap-0.5 opacity-50 ${s.text}`}>
                      <Copy className="h-2.5 w-2.5" /> tap to copy
                    </div>
                  </button>
                );
              })}
            </div>
            <p className="text-center text-gray-500 text-xs mt-4">
              * Online bookings get <span className="text-neon-blue font-bold">25% OFF</span> your total bill this month
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookNow;
