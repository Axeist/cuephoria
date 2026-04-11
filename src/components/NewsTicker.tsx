
import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const news = [
  "SPECIAL ONLINE OFFER! Get FLAT 10% OFF your bill + 1 FREE AR Metashot Cricket Challenge",
  "Book online to secure your slot and enjoy exclusive discounts",
  "STUDENT SPECIAL OFFER! Get FLAT ₹100 OFF on Weekly & Monthly Passes with a valid student ID",
  "Try our latest AR and VR games with friends and family",
  "Join Cuephoria's gaming tournaments and win exciting prizes",
  "Perfect spot for birthday parties and corporate events"
];

const NewsTicker = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentNewsIndex((prev) => (prev + 1) % news.length);
        setIsAnimating(false);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-7 flex items-center" role="complementary" aria-label="Announcements">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 via-purple-500/10 to-neon-blue/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/5 via-transparent to-neon-blue/5 animate-pulse" style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />

      <div className="relative w-full flex items-center justify-center px-4">
        <Sparkles className="h-3 w-3 text-neon-pink/70 flex-shrink-0 mr-2 hidden sm:block" />
        <div className="overflow-hidden flex-1 text-center">
          <p
            className={`text-[11px] sm:text-xs font-medium transition-all duration-400 ease-out ${
              isAnimating
                ? 'opacity-0 -translate-y-3'
                : 'opacity-100 translate-y-0'
            }`}
          >
            <span className="bg-gradient-to-r from-neon-pink via-purple-300 to-neon-blue bg-clip-text text-transparent font-bold">
              {news[currentNewsIndex]}
            </span>
          </p>
        </div>
        <Sparkles className="h-3 w-3 text-neon-blue/70 flex-shrink-0 ml-2 hidden sm:block" />
      </div>
    </div>
  );
};

export default NewsTicker;
