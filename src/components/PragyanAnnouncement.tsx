import React from 'react';
import { Trophy, Gamepad2, ExternalLink, MapPin, ArrowRight } from 'lucide-react';

const TOURNAMENTS_URL = 'https://admin.cuephoria.in/public/tournaments';
const BOOKING_URL = 'https://admin.cuephoria.in/public/booking';

interface PragyanAnnouncementProps {
  variant?: 'compact' | 'card';
}

const PragyanAnnouncement = ({ variant = 'compact' }: PragyanAnnouncementProps) => {
  if (variant === 'compact') {
    return (
      <div className="relative bg-gradient-to-r from-neon-blue/20 via-neon-pink/20 to-neon-blue/20 border border-neon-blue/40 rounded-lg p-2.5 md:p-3 backdrop-blur-sm overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-pink/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        <div className="relative flex flex-wrap items-center gap-2 md:gap-3">
          <div className="flex items-center gap-1.5">
            <Trophy className="h-4 w-4 md:h-5 md:w-5 text-neon-pink animate-pulse flex-shrink-0" />
            <span className="font-bold text-neon-pink text-xs md:text-sm whitespace-nowrap">
              🎯 Pragyan @ NIT Trichy
            </span>
          </div>
          <p className="text-xs md:text-sm text-white flex-1 min-w-0">
            <span className="text-gray-300">PS5 &amp; 8-Ball tournaments — </span>
            <a href={TOURNAMENTS_URL} target="_blank" rel="noopener noreferrer" className="text-neon-blue font-semibold hover:underline">Register</a>
            <span className="text-gray-300"> · Game stall — </span>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-neon-pink font-semibold hover:underline">Book a slot</a>
          </p>
          <div className="flex items-center gap-2 ml-auto">
            <a
              href={TOURNAMENTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-1 rounded bg-neon-blue/20 border border-neon-blue/50 text-neon-blue text-xs font-semibold hover:bg-neon-blue/30 transition-colors"
            >
              Tournaments <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-1 rounded bg-neon-pink/20 border border-neon-pink/50 text-neon-pink text-xs font-semibold hover:bg-neon-pink/30 transition-colors"
            >
              Book stall <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-xl p-4 md:p-5 border-2 border-neon-blue/50 bg-gradient-to-br from-neon-blue/10 via-neon-pink/10 to-neon-blue/10 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-pink/10 to-neon-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl" />
      <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-5">
        <div className="flex-shrink-0 relative">
          <div className="absolute inset-0 bg-neon-blue/20 rounded-lg blur-md animate-pulse" />
          <div className="p-4 bg-neon-blue/20 rounded-lg border-2 border-neon-blue/50 relative z-10 flex items-center gap-2">
            <Gamepad2 className="w-10 h-10 text-neon-blue" />
            <Trophy className="w-8 h-8 text-neon-pink" />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2 flex-wrap">
            <MapPin className="h-4 w-4 text-neon-pink" />
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Cuephoria at <span className="text-neon-blue">Pragyan</span> — NIT Trichy
            </h3>
          </div>
          <p className="text-sm text-gray-300 mb-3">
            We&apos;re at NIT Trichy&apos;s Pragyan! Join our <strong className="text-neon-blue">PS5</strong> and <strong className="text-neon-pink">8-Ball</strong> tournaments, or drop by our game stall.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 items-center justify-center md:justify-start">
            <a
              href={TOURNAMENTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-neon-blue/30 border-2 border-neon-blue/50 text-neon-blue rounded-lg hover:bg-neon-blue/40 transition-all text-sm font-bold"
            >
              Register for Tournaments <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-neon-pink/30 border-2 border-neon-pink/50 text-neon-pink rounded-lg hover:bg-neon-pink/40 transition-all text-sm font-bold"
            >
              Book Game Stall Slot <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PragyanAnnouncement;
