import React, { useEffect, useState } from 'react';
import { Cake, Clock, MapPin, Sparkles, ArrowRight, Flame, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ChocoLocaAnnouncementProps {
  variant?: 'compact' | 'card' | 'hero';
}

/** Official café launch: Sat Apr 18, 2026 · 6:00 PM IST */
export const CHOCO_LOCA_LAUNCH = new Date('2026-04-18T18:00:00+05:30');

export function useChocoCountdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0, expired: false });
  useEffect(() => {
    const tick = () => {
      const ms = CHOCO_LOCA_LAUNCH.getTime() - Date.now();
      if (ms <= 0) {
        setT({ d: 0, h: 0, m: 0, s: 0, expired: true });
        return;
      }
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

const chocoInfo = {
  logo: '/choco-loca-logo.png',
  tagline: 'Choco Loca Cakes & Café — now inside Cuephoria',
  launchLine: 'Saturday, April 18, 2026 · 6:00 PM IST',
  igChoco: 'https://www.instagram.com/chocoloca_cafe/',
  igCue: 'https://www.instagram.com/cuephoriaclub/',
};

const TimeChip = ({ v, l }: { v: number; l: string }) => (
  <div className="text-center">
    <div className="bg-[#6B5446]/40 border border-[#E99695]/50 rounded-lg px-2 py-1 md:px-3 md:py-2 min-w-[44px] md:min-w-[56px] shadow-[0_0_16px_rgba(233,150,149,0.25)]">
      <span className="text-[#FEFBE7] font-black text-lg md:text-2xl tabular-nums leading-none">{String(v).padStart(2, '0')}</span>
    </div>
    <span className="text-[#F7D08A]/80 text-[8px] md:text-[10px] font-bold uppercase tracking-widest mt-1 block">{l}</span>
  </div>
);

const ColonChoco = () => <span className="text-[#E99695] font-black text-lg md:text-2xl self-start mt-1">:</span>;

const ChocoLocaAnnouncement = ({ variant = 'compact' }: ChocoLocaAnnouncementProps) => {
  const countdown = useChocoCountdown();

  if (variant === 'compact') {
    return (
      <div className="relative rounded-lg p-2.5 md:p-3 border border-[#E99695]/40 bg-gradient-to-r from-[#6B5446]/25 via-[#E99695]/10 to-[#4EB3D3]/15 backdrop-blur-sm overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F7D08A]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
        <div className="relative flex items-center gap-2.5 md:gap-3">
          <img src={chocoInfo.logo} alt="" className="h-10 w-10 md:h-11 md:w-11 rounded-lg object-contain border border-[#E99695]/40 bg-[#FEFBE7]/10 flex-shrink-0" />
          <p className="text-xs md:text-sm text-[#FEFBE7]/95 flex-1 leading-snug">
            <span className="font-black text-[#F7D08A]">Choco Loca × Cuephoria</span>
            {' — '}
            {countdown.expired ? (
              <>Café is live! Fries, burgers, shakes &amp; more — <Link to="/choco-loca" className="text-[#4EB3D3] font-bold underline-offset-2 hover:underline">see menu</Link></>
            ) : (
              <>Official launch <span className="font-bold text-[#E99695]">Sat Apr 18 · 6 PM</span>.{' '}
                <Link to="/choco-loca" className="text-[#4EB3D3] font-bold underline-offset-2 hover:underline">Menu &amp; countdown</Link></>
            )}
          </p>
          <Cake className="h-4 w-4 text-[#E99695] animate-pulse flex-shrink-0 hidden sm:block" />
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className="mb-6 md:mb-8 relative group">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[#E99695]/35 via-[#4EB3D3]/25 to-[#F7D08A]/30 blur-sm opacity-80 animate-pulse pointer-events-none" />
        <div className="relative bg-gradient-to-br from-[#6B5446]/35 via-[#3d2e28]/90 to-[#6B5446]/25 border-2 border-[#E99695]/45 rounded-2xl p-4 md:p-6 overflow-hidden shadow-[0_0_40px_rgba(233,150,149,0.12)]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F7D08A]/5 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-5 md:gap-8">
            <div className="flex-shrink-0">
              <img
                src={chocoInfo.logo}
                alt="Choco Loca Cakes and Café"
                className="h-24 w-24 md:h-28 md:w-28 object-contain rounded-2xl border-2 border-[#E99695]/50 bg-[#FEFBE7]/10 p-2 shadow-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Flame className="h-4 w-4 text-[#E99695] animate-pulse" />
                <span className="text-[#F7D08A] font-black text-[10px] md:text-xs uppercase tracking-[0.2em]">Grand opening</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-[#FEFBE7] leading-tight mb-1">
                Choco Loca <span className="text-[#E99695]">×</span> Cuephoria
              </h2>
              <p className="text-[#F7D08A]/90 text-sm font-semibold mb-1">{chocoInfo.tagline}</p>
              <p className="text-[#FEFBE7]/70 text-xs md:text-sm mb-3 flex items-center justify-center md:justify-start gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {chocoInfo.launchLine}
              </p>
              {countdown.expired ? (
                <Link
                  to="/choco-loca"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4EB3D3]/25 border border-[#4EB3D3]/50 text-[#B8E8F5] font-black text-sm hover:bg-[#4EB3D3]/35 transition-colors"
                >
                  <Sparkles className="h-4 w-4" /> We&apos;re open — view menu
                </Link>
              ) : (
                <>
                  <div className="flex justify-center md:justify-start gap-1.5 md:gap-2 mb-3 flex-wrap">
                    <TimeChip v={countdown.d} l="Days" />
                    <ColonChoco />
                    <TimeChip v={countdown.h} l="Hrs" />
                    <ColonChoco />
                    <TimeChip v={countdown.m} l="Min" />
                    <ColonChoco />
                    <TimeChip v={countdown.s} l="Sec" />
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-2 justify-center md:justify-start">
                    <Link
                      to="/choco-loca"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#E99695]/25 border border-[#E99695]/50 text-[#FEFBE7] text-xs font-bold hover:bg-[#E99695]/35 transition-colors"
                    >
                      Full menu preview <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <a
                      href={chocoInfo.igChoco}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] md:text-xs text-[#F7D08A]/80 hover:text-[#F7D08A]"
                    >
                      <Instagram className="h-3.5 w-3.5" /> @chocoloca_cafe
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // card
  return (
    <div className="glass-card rounded-xl p-4 md:p-5 border-2 border-[#E99695]/40 bg-gradient-to-br from-[#6B5446]/20 via-[#3d2e28]/50 to-[#4EB3D3]/10 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F7D08A]/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] pointer-events-none" />
      <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-5">
        <div className="flex-shrink-0 relative">
          <div className="absolute inset-0 bg-[#E99695]/20 rounded-xl blur-md animate-pulse pointer-events-none" />
          <img
            src={chocoInfo.logo}
            alt="Choco Loca"
            className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-xl border-2 border-[#E99695]/45 bg-[#FEFBE7]/10 p-2 relative z-10"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2 flex-wrap">
            <Cake className="h-5 w-5 text-[#E99695]" />
            <h3 className="text-xl md:text-2xl font-bold text-[#FEFBE7]">
              <span className="text-[#F7D08A]">Choco Loca</span>
              <span className="text-white/60 text-lg mx-1">×</span>
              <span className="text-[#4EB3D3]">Cuephoria</span>
            </h3>
            <span className="px-2 py-0.5 bg-[#E99695]/25 text-[#FEFBE7] text-[10px] font-black rounded-full border border-[#E99695]/50">
              {countdown.expired ? 'OPEN' : 'APR 18 · 6PM'}
            </span>
          </div>
          <p className="text-sm text-[#F7D08A] font-semibold mb-1">{chocoInfo.tagline}</p>
          <p className="text-xs text-[#FEFBE7]/70 mb-3 flex items-center justify-center md:justify-start gap-1.5">
            <Clock className="h-3.5 w-3.5 text-[#E99695]" />
            {chocoInfo.launchLine} · Order on Zomato &amp; Swiggy
          </p>
          {!countdown.expired && (
            <div className="mb-3 bg-black/30 border border-[#E99695]/30 rounded-lg p-2.5">
              <p className="text-[10px] text-[#F7D08A]/90 uppercase tracking-widest font-bold mb-1.5 text-center md:text-left">
                Launch in
              </p>
              <div className="flex justify-center md:justify-start gap-1.5 md:gap-2 flex-wrap">
                {[
                  { v: countdown.d, l: 'D' },
                  { v: countdown.h, l: 'H' },
                  { v: countdown.m, l: 'M' },
                  { v: countdown.s, l: 'S' },
                ].map(({ v, l }, i) => (
                  <React.Fragment key={l}>
                    <div className="text-center">
                      <div className="bg-[#6B5446]/50 border border-[#E99695]/35 rounded px-1.5 py-0.5 min-w-[28px]">
                        <span className="text-[#FEFBE7] font-black text-xs md:text-sm tabular-nums">{String(v).padStart(2, '0')}</span>
                      </div>
                      <span className="text-[#F7D08A]/60 text-[8px] font-bold mt-0.5 block">{l}</span>
                    </div>
                    {i < 3 && <span className="text-[#E99695] font-black text-xs self-start mt-0.5">:</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
            <Link
              to="/choco-loca"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#E99695]/30 to-[#4EB3D3]/25 border-2 border-[#E99695]/45 text-[#FEFBE7] rounded-lg hover:from-[#E99695]/45 hover:to-[#4EB3D3]/35 transition-all text-xs font-bold"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Menu &amp; launch details
              <ArrowRight className="h-3 w-3" />
            </Link>
            <a
              href="https://maps.app.goo.gl/vUNCsMkiMEgHfbVPA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-[11px] text-[#F7D08A]/70 hover:text-[#F7D08A] transition-colors"
            >
              <MapPin className="h-3 w-3" />
              At Cuephoria · Thiruverumbur
            </a>
          </div>
          <p className="text-[10px] text-[#FEFBE7]/45 mt-2">Prices on menu may vary — food lineup is set.</p>
        </div>
      </div>
    </div>
  );
};

export default ChocoLocaAnnouncement;
