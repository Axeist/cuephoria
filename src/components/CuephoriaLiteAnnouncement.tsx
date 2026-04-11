import React, { useEffect, useState } from 'react';
import { MapPin, Clock, Sparkles, ExternalLink, X, Zap, Gift, Percent, Crown, Flame, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CuephoriaLiteAnnouncementProps {
  variant?: 'banner' | 'card' | 'compact';
  showCloseButton?: boolean;
  onClose?: () => void;
}

// Grand opening: Sunday April 12, 2026 at 11:00 AM
const LITE_OPENING = new Date('2026-04-12T11:00:00');

function useLiteCountdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0, expired: false });
  useEffect(() => {
    const tick = () => {
      const ms = LITE_OPENING.getTime() - Date.now();
      if (ms <= 0) { setT({ d: 0, h: 0, m: 0, s: 0, expired: true }); return; }
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

const liteInfo = {
  logo: "https://iili.io/fjuZYga.jpg",
  name: "Cuephoria Lite",
  openingDate: "Sunday, April 12, 2026 • 11:00 AM",
  openingDateNote: "Opposite NIT Trichy",
  location: "QR64+CRV Electronics Bus Stop, Valavandankottai, Tamil Nadu 620015",
  gmapLink: "https://maps.app.goo.gl/nvTtK6SG4nGQXenGA",
  tagline: "Same Luxury, More Affordable — Right Next to NIT Trichy!",
  description: "Authentic Cuephoria experience at student-friendly prices. Premium gaming, VR & pool, closer to campus.",
  features: [
    { icon: <MapPin className="h-4 w-4" />, text: "Opposite NIT Trichy", highlight: true },
    { icon: <Crown className="h-4 w-4" />, text: "Same Premium Quality", highlight: true },
    { icon: <Percent className="h-4 w-4" />, text: "More Affordable Pricing", highlight: true },
    { icon: <Gift className="h-4 w-4" />, text: "Exclusive NIT Discounts", highlight: true },
    { icon: <Zap className="h-4 w-4" />, text: "Late Night Hours", highlight: true },
    { icon: <Zap className="h-4 w-4" />, text: "Compact Pool Tables", highlight: true },
  ],
  openingDiscount: "Opening Day: Up to 60% OFF for Existing Customers!",
};

const CuephoriaLiteAnnouncement = ({
  variant = 'banner',
  showCloseButton = false,
  onClose,
}: CuephoriaLiteAnnouncementProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const countdown = useLiteCountdown();

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  // ── Compact ────────────────────────────────────────────────────────────────
  if (variant === 'compact') {
    return (
      <div className="relative bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/40 rounded-lg p-2.5 md:p-3 backdrop-blur-sm overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
        <div className="relative flex items-center gap-2.5 md:gap-3">
          <Flame className="h-4 w-4 md:h-5 md:w-5 text-amber-400 animate-pulse flex-shrink-0" />
          <p className="text-xs md:text-sm text-white flex-1">
            <span className="font-bold text-amber-400">🎮 Grand Opening:</span>{' '}
            <span className="text-amber-300 font-semibold">Cuephoria Lite</span>
            {' '}&mdash; More Affordable, Same Luxury! Opening{' '}
            <span className="text-amber-400 font-semibold">April 12, 11 AM</span>,
            right opposite{' '}
            <span className="text-amber-400 font-semibold">NIT Trichy</span>! 🚀
          </p>
          <Link
            to="/lite"
            className="ml-auto text-amber-400 hover:text-amber-300 transition-all duration-300 hover:scale-110 flex-shrink-0 flex items-center gap-1"
            title="Explore Cuephoria Lite"
          >
            <span className="text-xs font-semibold hidden sm:inline">Explore</span>
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 animate-bounce-slow" />
          </Link>
        </div>
      </div>
    );
  }

  // ── Card ───────────────────────────────────────────────────────────────────
  if (variant === 'card') {
    return (
      <div className="glass-card rounded-xl p-4 md:p-5 border-2 border-amber-500/50 bg-gradient-to-br from-amber-500/15 via-orange-500/15 to-amber-500/15 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] ease-in-out pointer-events-none" />

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
          {/* Logo */}
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-amber-400/25 rounded-lg blur-md animate-pulse pointer-events-none" />
            <img
              src={liteInfo.logo}
              alt="Cuephoria Lite Logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg border-2 border-amber-500/50 bg-white/10 p-2 relative z-10 shadow-lg shadow-amber-500/20"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Header */}
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 flex-wrap">
              <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-amber-400 animate-pulse" />
              <h3 className="text-xl md:text-2xl font-bold text-white">
                <span className="text-amber-400">Cuephoria Lite</span>
              </h3>
              <span className="px-2 py-0.5 bg-gradient-to-r from-amber-500/30 to-orange-500/30 text-amber-200 text-xs font-black rounded-full border border-amber-500/50 animate-pulse shadow-md shadow-amber-500/20">
                {countdown.expired ? '🎉 OPEN NOW' : 'APR 12 • 11AM'}
              </span>
            </div>

            <p className="text-sm text-amber-300 font-semibold mb-1">{liteInfo.tagline}</p>

            <p className="text-xs text-gray-300 mb-2 flex items-center justify-center md:justify-start gap-1.5">
              <Clock className="h-3.5 w-3.5 text-amber-400" />
              <span>{liteInfo.openingDate} &bull; {liteInfo.openingDateNote}</span>
            </p>

            <p className="text-xs text-gray-400 mb-3">{liteInfo.description}</p>

            {/* Live Countdown (only while not yet open) */}
            {!countdown.expired && (
              <div className="mb-3 bg-black/30 border border-amber-500/30 rounded-lg p-2.5">
                <p className="text-[10px] text-amber-400/80 uppercase tracking-widest font-bold mb-1.5 text-center">
                  Grand Opening In
                </p>
                <div className="flex justify-center gap-1.5 md:gap-2">
                  {[
                    { v: countdown.d, l: 'D' },
                    { v: countdown.h, l: 'H' },
                    { v: countdown.m, l: 'M' },
                    { v: countdown.s, l: 'S' },
                  ].map(({ v, l }, i) => (
                    <React.Fragment key={l}>
                      <div className="text-center">
                        <div className="bg-amber-500/20 border border-amber-500/40 rounded px-1.5 py-0.5 min-w-[28px]">
                          <span className="text-amber-200 font-black text-xs md:text-sm tabular-nums">
                            {String(v).padStart(2, '0')}
                          </span>
                        </div>
                        <span className="text-amber-500/70 text-[8px] font-bold block mt-0.5">{l}</span>
                      </div>
                      {i < 3 && <span className="text-amber-400 font-black text-xs self-start mt-0.5">:</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Opening Discount Banner */}
            <div className="bg-gradient-to-r from-red-500/20 via-orange-500/20 to-amber-500/20 border border-red-500/40 rounded-lg p-1.5 mb-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-red-500/5 animate-pulse pointer-events-none" />
              <div className="relative flex items-center gap-1.5">
                <Gift className="h-3.5 w-3.5 text-red-400 animate-pulse flex-shrink-0" />
                <p className="text-xs font-bold text-red-300">{liteInfo.openingDiscount}</p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 mb-3">
              {liteInfo.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-1.5 rounded-lg bg-amber-500/15 border border-amber-500/30 hover:bg-amber-500/20 transition-colors"
                >
                  <div className="mt-0.5 flex-shrink-0 text-amber-400">
                    {React.cloneElement(feature.icon, { className: 'h-3.5 w-3.5' })}
                  </div>
                  <span className="text-xs md:text-sm text-amber-200 font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <Link
                to="/lite"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-amber-500/30 to-orange-500/30 border-2 border-amber-500/50 text-amber-200 rounded-lg hover:from-amber-500/40 hover:to-orange-500/40 transition-all duration-300 text-xs font-bold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 group/btn"
              >
                <Sparkles className="h-3.5 w-3.5 group-hover/btn:animate-bounce" />
                Explore Cuephoria Lite
                <ArrowRight className="h-3 w-3" />
              </Link>
              <a
                href={liteInfo.gmapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400/70 hover:text-amber-400 transition-colors"
              >
                <MapPin className="h-3 w-3" />
                <span>{liteInfo.location}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Banner (default) ───────────────────────────────────────────────────────
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
                <Flame className="h-3 w-3 md:h-3.5 md:w-3.5 text-amber-400 animate-pulse flex-shrink-0" />
                <h3 className="text-xs md:text-sm font-bold text-white whitespace-nowrap">
                  <span className="text-amber-400">Cuephoria Lite</span>
                  {' '}&mdash; Grand Opening{' '}
                  <span className="text-amber-300">Sunday, April 12 • 11 AM</span>
                </h3>
                <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-300 text-[9px] md:text-[10px] font-bold rounded-full border border-amber-500/40 animate-pulse whitespace-nowrap">
                  {countdown.expired ? '🎉 OPEN' : 'APR 12'}
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
