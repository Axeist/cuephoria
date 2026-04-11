import { useState, useEffect } from 'react';

const news = [
  "FLAT 10% OFF your bill + FREE AR Metashot Cricket Challenge — Book Online",
  "STUDENT SPECIAL — FLAT ₹100 OFF on Weekly & Monthly Passes with valid ID",
  "Try our latest AR and VR games with friends and family",
  "Join Cuephoria's gaming tournaments — win exciting prizes",
  "Perfect spot for birthday parties and corporate events — Book now",
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
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-6 flex items-center justify-center overflow-hidden border-t border-white/[0.04]">
      <p
        className={`text-[10px] sm:text-[11px] tracking-wide text-center px-4 transition-all duration-300 ease-out ${
          sliding ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
        }`}
      >
        <span className="text-gray-500 mr-1.5">★</span>
        <span className="text-gray-400">{news[idx]}</span>
        <span className="text-gray-500 ml-1.5">★</span>
      </p>
    </div>
  );
};

export default NewsTicker;
