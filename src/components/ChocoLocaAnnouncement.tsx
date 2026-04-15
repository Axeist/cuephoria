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

/** Hero / large countdown — compact digits, labels under each unit */
const HeroCountdown = ({
  d, h, m, s,
}: { d: number; h: number; m: number; s: number }) => {
  const units = [
    { v: d, l: 'Days' },
    { v: h, l: 'Hrs' },
    { v: m, l: 'Min' },
    { v: s, l: 'Sec' },
  ] as const;
  return (
    <div className="flex justify-center md:justify-start items-start gap-0.5 sm:gap-1 flex-wrap">
      {units.map(({ v, l }, i) => (
        <React.Fragment key={l}>
          <div className="flex flex-col items-center w-[2.5rem] sm:w-[2.85rem]">
            <div className="w-full min-h-[2rem] sm:min-h-[2.35rem] flex items-center justify-center bg-[#6B5446]/40 border border-[#E99695]/45 rounded-lg px-1 py-1 shadow-[0_0_12px_rgba(233,150,149,0.12)]">
              <span className="text-[#FEFBE7] font-black text-sm sm:text-base tabular-nums leading-none">{String(v).padStart(2, '0')}</span>
            </div>
            <span className="text-[#F7D08A]/75 text-[7px] sm:text-[8px] font-bold uppercase tracking-wide mt-1">{l}</span>
          </div>
          {i < 3 && (
            <span
              className="text-[#E99695]/80 font-black text-sm sm:text-base flex items-center min-h-[2rem] sm:min-h-[2.35rem] px-px select-none"
              aria-hidden
            >
              :
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const ChocoLocaAnnouncement = ({ variant = 'compact' }: ChocoLocaAnnouncementProps) => {
  const countdown = useChocoCountdown();

  if (variant === 'compact') {
    return (
      <div className="relative bg-gradient-to-r from-[#6B5446]/22 via-[#E99695]/14 to-[#4EB3D3]/12 border border-[#E99695]/40 rounded-lg p-2.5 md:p-3 backdrop-blur-sm overflow-hidden group w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F7D08A]/12 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
        <div className="relative flex items-center gap-2.5 md:gap-3 min-h-[2.5rem]">
          <Cake className="h-4 w-4 md:h-5 md:w-5 text-[#E99695] animate-pulse flex-shrink-0" />
          <p className="text-xs md:text-sm text-white flex-1 min-w-0 leading-snug">
            <span className="font-bold text-[#F7D08A]">Café launch:</span>{' '}
            <span className="text-[#FEFBE7]/95 font-semibold">Choco Loca × Cuephoria</span>
            {' '}&mdash;{' '}
            {countdown.expired ? (
              <>Menu live — fries, shakes, desserts &amp; more at Cuephoria.</>
            ) : (
              <>
                Official launch <span className="text-[#F7D08A] font-semibold">Sat Apr 18, 6 PM</span>
                {' '}· full menu &amp; countdown on the next page.
              </>
            )}
          </p>
          <Link
            to="/choco-loca"
            className="ml-auto text-[#F7D08A] hover:text-[#FEFBE7] transition-all duration-300 hover:scale-110 flex-shrink-0 flex items-center gap-1"
            title="Explore Choco Loca at Cuephoria"
          >
            <span className="text-xs font-semibold hidden sm:inline">Explore</span>
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 animate-bounce-slow" />
          </Link>
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
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <img
                src={chocoInfo.logo}
                alt="Choco Loca Cakes and Café"
                className="h-20 w-20 md:h-24 md:w-24 object-contain rounded-2xl border-2 border-[#E99695]/50 bg-[#FEFBE7]/10 p-2 shadow-lg"
              />
            </div>
            <div className="flex-1 min-w-0 text-center md:text-left">
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
                  <div className="mb-3">
                    <HeroCountdown d={countdown.d} h={countdown.h} m={countdown.m} s={countdown.s} />
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-2 justify-center md:justify-start">
                    <Link
                      to="/choco-loca"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#E99695]/25 border border-[#E99695]/50 text-[#FEFBE7] text-xs font-bold hover:bg-[#E99695]/35 transition-colors"
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                      Explore Choco Loca
                      <ArrowRight className="h-3.5 w-3.5" />
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
      <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
        <div className="flex-shrink-0 relative mx-auto sm:mx-0 sm:self-center">
          <div className="absolute inset-0 bg-[#E99695]/20 rounded-xl blur-md animate-pulse pointer-events-none" />
          <img
            src={chocoInfo.logo}
            alt="Choco Loca"
            className="w-[4.5rem] h-[4.5rem] md:w-24 md:h-24 object-contain rounded-xl border-2 border-[#E99695]/45 bg-[#FEFBE7]/10 p-2 relative z-10"
          />
        </div>
        <div className="flex-1 min-w-0 text-center sm:text-left flex flex-col justify-center">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 mb-2">
            <Cake className="h-4 w-4 md:h-5 md:w-5 text-[#E99695] shrink-0" />
            <h3 className="text-lg md:text-2xl font-bold text-[#FEFBE7] leading-tight">
              <span className="text-[#F7D08A]">Choco Loca</span>
              <span className="text-white/50 text-base md:text-lg mx-1">×</span>
              <span className="text-[#4EB3D3]">Cuephoria</span>
            </h3>
            <span className="px-2 py-0.5 bg-[#E99695]/25 text-[#FEFBE7] text-[9px] font-black rounded-full border border-[#E99695]/50 whitespace-nowrap">
              {countdown.expired ? 'OPEN' : 'APR 18 · 6PM'}
            </span>
          </div>
          <p className="text-xs md:text-sm text-[#F7D08A] font-semibold mb-1">{chocoInfo.tagline}</p>
          <p className="text-[11px] md:text-xs text-[#FEFBE7]/65 mb-3 flex flex-wrap items-center justify-center sm:justify-start gap-x-1 gap-y-0.5">
            <Clock className="h-3 w-3 text-[#E99695] flex-shrink-0" />
            <span>{chocoInfo.launchLine} · Zomato &amp; Swiggy</span>
          </p>
          {!countdown.expired && (
            <div className="mb-3 bg-black/30 border border-[#E99695]/25 rounded-lg px-2 py-2 md:py-2.5">
              <p className="text-[9px] text-[#F7D08A]/85 uppercase tracking-[0.15em] font-bold mb-2 text-center">
                Launch in
              </p>
              <div className="flex justify-center items-start gap-0.5 sm:gap-1">
                {[
                  { v: countdown.d, l: 'D' },
                  { v: countdown.h, l: 'H' },
                  { v: countdown.m, l: 'M' },
                  { v: countdown.s, l: 'S' },
                ].map(({ v, l }, i) => (
                  <React.Fragment key={l}>
                    <div className="flex flex-col items-center w-[2rem] sm:w-[2.25rem]">
                      <div className="w-full min-h-[1.25rem] flex items-center justify-center bg-[#6B5446]/55 border border-[#E99695]/30 rounded-md px-0.5 py-0.5">
                        <span className="text-[#FEFBE7] font-black text-[10px] sm:text-[11px] tabular-nums leading-none">{String(v).padStart(2, '0')}</span>
                      </div>
                      <span className="text-[#F7D08A]/50 text-[7px] sm:text-[8px] font-bold mt-0.5">{l}</span>
                    </div>
                    {i < 3 && (
                      <span
                        className="text-[#E99695]/75 font-black text-[10px] select-none flex items-center min-h-[1.25rem] px-px"
                        aria-hidden
                      >
                        :
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:items-center sm:justify-start">
            <Link
              to="/choco-loca"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#E99695]/35 to-[#4EB3D3]/28 border-2 border-[#E99695]/50 text-[#FEFBE7] rounded-lg hover:from-[#E99695]/45 hover:to-[#4EB3D3]/38 transition-all text-xs font-bold shadow-md shadow-black/20 hover:scale-[1.02]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Explore Choco Loca
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href="https://maps.app.goo.gl/vUNCsMkiMEgHfbVPA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-[10px] md:text-[11px] text-[#F7D08A]/75 hover:text-[#F7D08A] transition-colors sm:ml-1"
            >
              <MapPin className="h-3 w-3 flex-shrink-0" />
              Cuephoria · Thiruverumbur
            </a>
          </div>
          <p className="text-[9px] text-[#FEFBE7]/40 mt-2 text-center sm:text-left">Prices on menu may vary — food lineup is set.</p>
        </div>
      </div>
    </div>
  );
};

export default ChocoLocaAnnouncement;
