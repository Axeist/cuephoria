import React from 'react';
import { MapPin, Clock, Sparkles, ExternalLink, X, Star, Moon, Zap, Users, Gift, Percent, Crown } from 'lucide-react';
import { useState } from 'react';

interface CuephoriaLiteAnnouncementProps {
  variant?: 'banner' | 'card' | 'compact';
  showCloseButton?: boolean;
  onClose?: () => void;
}

const CuephoriaLiteAnnouncement = ({ 
  variant = 'banner', 
  showCloseButton = false,
  onClose 
}: CuephoriaLiteAnnouncementProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  const liteInfo = {
    logo: "https://iili.io/fjuZYga.jpg",
    name: "Cuephoria Lite",
    openingDate: "Date Will Be Announced Soon",
    openingDateNote: "Opening in Mid-January 2026",
    location: "QR64+CRV Electronics Bus Stop, Valavandankottai, Tamil Nadu 620015",
    gmapLink: "https://maps.app.goo.gl/nvTtK6SG4nGQXenGA",
    tagline: "Same Luxury, More Affordable - Right Next to NIT Trichy!",
    description: "Authentic Cuephoria experience at student-friendly prices. Premium gaming, VR & pool closer to campus.",
    features: [
      { icon: <MapPin className="h-4 w-4" />, text: "Opposite NIT Trichy", highlight: true },
      { icon: <Crown className="h-4 w-4" />, text: "Same Premium Quality", highlight: true },
      { icon: <Percent className="h-4 w-4" />, text: "More Affordable Pricing", highlight: true },
      { icon: <Gift className="h-4 w-4" />, text: "Exclusive NIT Discounts", highlight: true },
      { icon: <Moon className="h-4 w-4" />, text: "Late Night Hours", highlight: true },
      { icon: <Zap className="h-4 w-4" />, text: "Compact Pool Tables", highlight: true }
    ],
    openingDiscount: "Opening Day: Up to 60% OFF for Existing Customers!",
    cta: "Be Among The First To Experience!"
  };

  if (variant === 'compact') {
    return (
      <div className="relative bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/40 rounded-lg p-2.5 md:p-3 backdrop-blur-sm overflow-hidden group">
        {/* Animated shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        
        {/* Glowing border animation */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400/0 via-amber-400/30 to-amber-400/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-pulse"></div>
        
        <div className="relative flex items-center gap-2.5 md:gap-3">
          <div className="relative">
            <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-amber-400 animate-pulse" />
            <div className="absolute inset-0 h-4 w-4 md:h-5 md:w-5">
              <Sparkles className="h-full w-full text-amber-300 animate-ping opacity-75" />
            </div>
          </div>
          <p className="text-xs md:text-sm text-white flex-1">
            <span className="font-bold text-amber-400 animate-pulse-slow inline-block">🎮 Epic News:</span>{' '}
            <span className="text-amber-300 font-semibold relative inline-block">
              Cuephoria Lite
              <span className="absolute -inset-1 bg-amber-400/20 blur-md opacity-50 animate-pulse"></span>
            </span>
            {' '}- More Affordable, Same Luxury! Opening date announced soon, right opposite <span className="text-amber-400 font-semibold">NIT Trichy</span>! 🚀
          </p>
          <a
            href={liteInfo.gmapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-amber-400 hover:text-amber-300 transition-all duration-300 hover:scale-110 relative group/link"
            title="View Location"
          >
            <MapPin className="h-4 w-4 md:h-5 md:w-5 animate-bounce-slow" />
            <span className="absolute inset-0 bg-amber-400/20 rounded-full blur-md opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className="glass-card rounded-xl p-4 md:p-5 border-2 border-amber-500/50 bg-gradient-to-br from-amber-500/15 via-orange-500/15 to-amber-500/15 relative overflow-hidden group">
        {/* Animated background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000 ease-in-out"></div>
        
        {showCloseButton && (
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors z-10"
            aria-label="Close announcement"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-5">
          {/* Logo Section with Glow */}
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-amber-400/20 rounded-lg blur-md animate-pulse"></div>
            <img
              src={liteInfo.logo}
              alt="Cuephoria Lite Logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg border-2 border-amber-500/50 bg-white/10 p-2 relative z-10 shadow-lg shadow-amber-500/20"
            />
          </div>
          
          {/* Content Section */}
          <div className="flex-1 text-center md:text-left">
            {/* Header */}
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 flex-wrap">
              <div className="relative">
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-amber-400 animate-pulse" />
                <div className="absolute inset-0">
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-amber-300 animate-ping opacity-50" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                <span className="text-amber-400 relative inline-block">
                  Cuephoria Lite
                  <span className="absolute -inset-1 bg-amber-400/20 blur-lg opacity-50 animate-pulse"></span>
                </span>
              </h3>
              <span className="px-2 py-1 bg-gradient-to-r from-amber-500/30 to-orange-500/30 text-amber-200 text-xs font-bold rounded-full border border-amber-500/50 animate-pulse shadow-lg shadow-amber-500/20">
                COMING SOON
              </span>
            </div>
            
            {/* Tagline */}
            <p className="text-sm text-amber-300 font-semibold mb-2">
              {liteInfo.tagline}
            </p>
            
            {/* Opening Date */}
            <p className="text-xs text-gray-300 mb-2 flex items-center justify-center md:justify-start gap-1.5">
              <Clock className="h-3.5 w-3.5 text-amber-400 animate-pulse-slow" />
              <span>{liteInfo.openingDate} • {liteInfo.openingDateNote}</span>
            </p>
            
            {/* Description */}
            <p className="text-xs text-gray-400 mb-3">
              {liteInfo.description}
            </p>
            
            {/* Opening Discount Banner */}
            <div className="bg-gradient-to-r from-red-500/20 via-orange-500/20 to-amber-500/20 border-2 border-red-500/40 rounded-lg p-1.5 mb-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 animate-pulse"></div>
              <div className="relative flex items-center gap-1.5">
                <Gift className="h-3.5 w-3.5 text-red-400 animate-pulse" />
                <p className="text-xs font-bold text-red-300">
                  {liteInfo.openingDiscount}
                </p>
              </div>
            </div>
            
            {/* Features - Compact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
              {liteInfo.features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-start gap-2 p-1.5 rounded-lg transition-all duration-300 ${
                    feature.highlight 
                      ? 'bg-amber-500/15 border border-amber-500/30 hover:bg-amber-500/20' 
                      : 'bg-gaming-accent/10 border border-gaming-accent/20'
                  }`}
                >
                  <div className={`mt-0.5 flex-shrink-0 ${feature.highlight ? 'text-amber-400' : 'text-gray-400'}`}>
                    {React.cloneElement(feature.icon, { className: 'h-3.5 w-3.5' })}
                  </div>
                  <span className={`text-xs md:text-sm ${feature.highlight ? 'text-amber-200 font-semibold' : 'text-gray-300'}`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Location CTA */}
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <a
                href={liteInfo.gmapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500/30 to-orange-500/30 border-2 border-amber-500/50 text-amber-200 rounded-lg hover:from-amber-500/40 hover:to-orange-500/40 transition-all duration-300 text-xs font-bold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 group/btn"
              >
                <MapPin className="h-3.5 w-3.5 group-hover/btn:animate-bounce" />
                View Location
                <ExternalLink className="h-3 w-3" />
              </a>
              <div className="text-[10px] text-gray-400 text-center sm:text-left">
                {liteInfo.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default banner variant - slim and elegant
  return (
    <div className="bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-amber-500/15 border-b border-amber-500/30 backdrop-blur-sm relative overflow-hidden h-[40px] flex items-center">
      {showCloseButton && (
        <button
          onClick={handleClose}
          className="absolute top-1.5 right-2 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close announcement"
        >
          <X className="h-4 w-4" />
        </button>
      )}
      <div className="container mx-auto px-3 md:px-4 h-full flex items-center">
        <div className="flex flex-row items-center justify-between gap-2 md:gap-3 w-full">
          <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
            <div className="hidden md:block flex-shrink-0">
              <img
                src={liteInfo.logo}
                alt="Cuephoria Lite Logo"
                className="w-8 h-8 object-contain rounded border border-amber-500/30 bg-white/5 p-0.5"
              />
            </div>
            <div className="flex-1 text-center md:text-left min-w-0">
              <div className="flex items-center justify-center md:justify-start gap-1.5 md:gap-2">
                <Sparkles className="h-3 w-3 md:h-3.5 md:w-3.5 text-amber-400 animate-pulse flex-shrink-0" />
                <h3 className="text-xs md:text-sm font-bold text-white whitespace-nowrap">
                  <span className="text-amber-400">Cuephoria Lite</span> - Coming Soon!
                </h3>
                <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-300 text-[9px] md:text-[10px] font-bold rounded-full border border-amber-500/40 animate-pulse whitespace-nowrap">
                  MID-JAN 2026
                </span>
              </div>
            </div>
          </div>
          <a
            href={liteInfo.gmapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 md:px-2.5 py-0.5 md:py-1 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-md hover:bg-amber-500/30 transition-all duration-300 text-[9px] md:text-[10px] font-semibold whitespace-nowrap flex-shrink-0"
          >
            <MapPin className="h-3 w-3" />
            <span className="hidden sm:inline">Location</span>
            <ExternalLink className="h-2.5 w-2.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CuephoriaLiteAnnouncement;

