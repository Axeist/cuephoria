import React from 'react';
import { MapPin, Clock, Sparkles, ExternalLink, X } from 'lucide-react';
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
    openingDate: "Mid-January 2025",
    location: "QR64+CRV Electronics Bus Stop, Valavandankottai, Tamil Nadu 620015",
    gmapLink: "https://maps.app.goo.gl/nvTtK6SG4nGQXenGA",
    features: [
      "Opposite NIT Trichy",
      "Exclusive NIT Student Discounts",
      "Late Night Hours"
    ]
  };

  if (variant === 'compact') {
    return (
      <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/40 rounded-lg p-3 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-amber-400 animate-pulse" />
          <p className="text-sm text-white">
            <span className="font-bold text-amber-400">New Branch Coming Soon:</span>{' '}
            <span className="text-amber-300">Cuephoria Lite</span> - Opening Mid-January near NIT Trichy
          </p>
          <a
            href={liteInfo.gmapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-amber-400 hover:text-amber-300 transition-colors"
            title="View Location"
          >
            <MapPin className="h-4 w-4" />
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className="glass-card rounded-xl p-6 border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-amber-500/10 relative overflow-hidden">
        {showCloseButton && (
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors z-10"
            aria-label="Close announcement"
          >
            <X className="h-5 w-5" />
          </button>
        )}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <img
              src={liteInfo.logo}
              alt="Cuephoria Lite Logo"
              className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-lg border border-amber-500/30 bg-white/5 p-2"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-amber-400 animate-pulse" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                <span className="text-amber-400">Cuephoria Lite</span>
              </h3>
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-500/40 animate-pulse">
                COMING SOON
              </span>
            </div>
            <p className="text-lg text-amber-300 font-semibold mb-3">
              Opening {liteInfo.openingDate}
            </p>
            <div className="space-y-2 mb-4">
              {liteInfo.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-400"></div>
                  <span className="text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={liteInfo.gmapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-lg hover:bg-amber-500/30 transition-all duration-300 text-sm font-semibold"
              >
                <MapPin className="h-4 w-4" />
                View Location
                <ExternalLink className="h-3 w-3" />
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <MapPin className="h-3 w-3" />
                <span>{liteInfo.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default banner variant
  return (
    <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border-y border-amber-500/40 backdrop-blur-sm relative overflow-hidden min-h-[60px] md:min-h-[70px]">
      {showCloseButton && (
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 md:top-3 md:right-3 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close announcement"
        >
          <X className="h-5 w-5" />
        </button>
      )}
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="hidden md:block flex-shrink-0">
              <img
                src={liteInfo.logo}
                alt="Cuephoria Lite Logo"
                className="w-16 h-16 object-contain rounded-lg border border-amber-500/30 bg-white/5 p-1"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-amber-400 animate-pulse" />
                <h3 className="text-lg md:text-xl font-bold text-white">
                  <span className="text-amber-400">Cuephoria Lite</span> - Coming Soon!
                </h3>
                <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-500/40 animate-pulse">
                  MID-JAN 2025
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-300">
                New branch opening opposite <span className="font-semibold text-amber-300">NIT Trichy</span> • 
                Exclusive <span className="font-semibold text-amber-300">NIT student discounts</span> • 
                <span className="font-semibold text-amber-300"> Late night hours</span>
              </p>
            </div>
          </div>
          <a
            href={liteInfo.gmapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-lg hover:bg-amber-500/30 transition-all duration-300 text-sm font-semibold whitespace-nowrap"
          >
            <MapPin className="h-4 w-4" />
            View Location
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CuephoriaLiteAnnouncement;

