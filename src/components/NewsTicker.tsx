import { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';

const news = [
  { text: "Cuephoria Lite — Grand Opening April 12, opposite NIT Trichy!", highlight: true },
  { text: "FLAT 10% OFF your bill + FREE AR Metashot Cricket Challenge — Book Online" },
  { text: "STUDENT SPECIAL — FLAT ₹100 OFF on Weekly & Monthly Passes with valid ID" },
  { text: "Try our latest AR and VR games with friends and family" },
  { text: "Join Cuephoria's gaming tournaments — win exciting prizes" },
  { text: "Perfect spot for birthday parties and corporate events — Book now" },
];

const NewsTicker = () => {
  const [idx, setIdx] = useState(0);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliding(true);
      setTimeout(() => {
        setIdx((p) => (p + 1) % news.length);
        setSliding(false);
      }, 350);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = news[idx];

  return (
    <div className="relative h-8 flex items-center justify-center overflow-hidden bg-gaming-darker/80 backdrop-blur-lg">
      {/* Glow edges */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />

      {/* Animated shimmer sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-pink/[0.07] to-transparent animate-pulse" style={{ animationDuration: '3s' }} />

      {/* Side glow accents */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neon-blue/[0.08] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neon-pink/[0.08] to-transparent pointer-events-none" />

      <div
        className={`flex items-center justify-center gap-2 px-4 transition-all duration-300 ease-out ${
          sliding ? 'opacity-0 -translate-y-2.5' : 'opacity-100 translate-y-0'
        }`}
      >
        {current.highlight ? (
          <>
            <Flame className="h-3.5 w-3.5 text-amber-400 animate-pulse flex-shrink-0" />
            <p className="text-[11px] sm:text-xs font-bold tracking-wide text-amber-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
              {current.text}
            </p>
            <span className="px-1.5 py-0.5 bg-amber-500/25 border border-amber-400/50 text-amber-300 text-[8px] font-black rounded-full tracking-wider animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.3)]">
              NEW
            </span>
          </>
        ) : (
          <>
            <span className="text-neon-pink text-[11px] drop-shadow-[0_0_4px_rgba(255,45,239,0.6)]">★</span>
            <p className="text-[11px] sm:text-xs font-medium tracking-wide text-gray-200 drop-shadow-[0_0_6px_rgba(0,200,255,0.3)]">
              {current.text}
            </p>
            <span className="text-neon-blue text-[11px] drop-shadow-[0_0_4px_rgba(0,200,255,0.6)]">★</span>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsTicker;
