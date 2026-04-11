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
    <div className="relative h-7 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/[0.06] via-neon-pink/[0.04] to-neon-blue/[0.06]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-pink/15 to-transparent" />

      <div
        className={`flex items-center justify-center gap-2 px-4 transition-all duration-300 ease-out ${
          sliding ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
        }`}
      >
        {current.highlight ? (
          <>
            <Flame className="h-3 w-3 text-amber-400 animate-pulse flex-shrink-0" />
            <p className="text-[10px] sm:text-[11px] font-bold tracking-wide">
              <span className="text-amber-400">{current.text}</span>
            </p>
            <span className="px-1.5 py-px bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[8px] font-black rounded-full tracking-wider">NEW</span>
          </>
        ) : (
          <>
            <span className="text-neon-pink text-[10px]">★</span>
            <p className="text-[10px] sm:text-[11px] font-medium tracking-wide text-gray-300">
              {current.text}
            </p>
            <span className="text-neon-blue text-[10px]">★</span>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsTicker;
