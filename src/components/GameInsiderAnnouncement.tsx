import React from 'react';
import { GraduationCap, Sparkles, ExternalLink, ArrowRight, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GameInsiderAnnouncementProps {
  variant?: 'compact' | 'card';
}

const GameInsiderAnnouncement = ({ variant = 'compact' }: GameInsiderAnnouncementProps) => {
  const gameInsiderInfo = {
    name: "Game Insider × Cuephoria",
    tagline: "Building Careers in Game Development & Esports",
    description: "Free Starter Series + 50% OFF on game services with exclusive coupon code GAMEINSIDER50",
    features: [
      "Industry-aligned learning paths",
      "Mentorship from professionals",
      "Practical, career-focused programs"
    ],
    discount: "50% OFF Game Services",
    couponCode: "GAMEINSIDER50"
  };

  if (variant === 'compact') {
    return (
      <div className="relative bg-gradient-to-r from-orange-500/20 via-orange-600/20 to-orange-500/20 border border-orange-500/40 rounded-lg p-2.5 md:p-3 backdrop-blur-sm overflow-hidden group">
        {/* Animated shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        
        {/* Glowing border animation */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-400/0 via-orange-400/30 to-orange-400/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-pulse"></div>
        
        <div className="relative flex items-center gap-2.5 md:gap-3">
          <div className="relative">
            <GraduationCap className="h-4 w-4 md:h-5 md:w-5 text-orange-400 animate-pulse" />
            <div className="absolute inset-0 h-4 w-4 md:h-5 md:w-5">
              <GraduationCap className="h-full w-full text-orange-300 animate-ping opacity-75" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-white flex-1">
            <span className="font-bold text-orange-400 animate-pulse-slow inline-block">🎓 Career Boost:</span>{' '}
            <span className="text-orange-300 font-semibold relative inline-block">
              Game Insider
              <span className="absolute -inset-1 bg-orange-400/20 blur-md opacity-50 animate-pulse"></span>
            </span>
            {' '}- Free Starter Series in Game Dev & Esports! Get <span className="text-orange-400 font-semibold">50% OFF</span> with code <span className="font-mono font-bold text-orange-400">{gameInsiderInfo.couponCode}</span>! 🚀
          </p>
          <Link
            to="/gameinsider"
            className="ml-auto text-orange-400 hover:text-orange-300 transition-all duration-300 hover:scale-110 relative group/link flex items-center gap-1"
            title="Learn More"
          >
            <span className="text-xs font-semibold hidden sm:inline">Explore</span>
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 animate-bounce-slow" />
            <span className="absolute inset-0 bg-orange-400/20 rounded-full blur-md opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </div>
      </div>
    );
  }

  // Card variant
  return (
    <div className="glass-card rounded-xl p-4 md:p-5 border-2 border-orange-500/50 bg-gradient-to-br from-orange-500/15 via-orange-600/15 to-orange-500/15 relative overflow-hidden group">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-300/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000 ease-in-out"></div>
      
      <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-5">
        {/* Icon Section with Glow */}
        <div className="flex-shrink-0 relative">
          <div className="absolute inset-0 bg-orange-400/20 rounded-lg blur-md animate-pulse"></div>
          <div className="p-4 bg-orange-500/20 rounded-lg border-2 border-orange-500/50 relative z-10 shadow-lg shadow-orange-500/20">
            <GraduationCap className="w-12 h-12 text-orange-400" />
          </div>
        </div>
        
        {/* Content Section */}
        <div className="flex-1 text-center md:text-left">
          {/* Header */}
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2 flex-wrap">
            <div className="relative">
              <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-orange-400 animate-pulse" />
              <div className="absolute inset-0">
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-orange-300 animate-ping opacity-50" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              <span className="text-orange-400 relative inline-block">
                {gameInsiderInfo.name}
                <span className="absolute -inset-1 bg-orange-400/20 blur-lg opacity-50 animate-pulse"></span>
              </span>
            </h3>
          </div>
          
          {/* Tagline */}
          <p className="text-sm text-orange-300 font-semibold mb-2">
            {gameInsiderInfo.tagline}
          </p>
          
          {/* Description */}
          <p className="text-xs text-gray-300 mb-3">
            {gameInsiderInfo.description}
          </p>
          
          {/* Discount Banner */}
          <div className="bg-gradient-to-r from-orange-500/20 via-orange-600/20 to-orange-500/20 border-2 border-orange-500/40 rounded-lg p-2 mb-3 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 animate-pulse"></div>
            <div className="relative flex items-center gap-2">
              <Gift className="h-4 w-4 text-orange-400 animate-pulse" />
              <p className="text-xs font-bold text-orange-300">
                {gameInsiderInfo.discount} - Code: <span className="font-mono">{gameInsiderInfo.couponCode}</span>
              </p>
            </div>
          </div>
          
          {/* Features */}
          <div className="space-y-1.5 mb-3">
            {gameInsiderInfo.features.map((feature, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2 text-xs text-gray-300"
              >
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <Link
            to="/gameinsider"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-gradient-to-r from-orange-500/30 to-orange-600/30 border-2 border-orange-500/50 text-orange-200 rounded-lg hover:from-orange-500/40 hover:to-orange-600/40 transition-all duration-300 text-sm font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-105 group/btn"
          >
            <GraduationCap className="h-4 w-4 group-hover/btn:animate-bounce" />
            Explore Programs
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameInsiderAnnouncement;
