import React from 'react';
import { ArrowRight, Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import CuephoriaLiteAnnouncement from './CuephoriaLiteAnnouncement';
import ChocoLocaAnnouncement from './ChocoLocaAnnouncement';

const Hero = ({ className = '' }) => {
  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center pt-14 overflow-hidden ${className}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gaming-darker">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(157,78,221,0.18)_0,transparent_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(0,200,255,0.07)_0,transparent_100%)]" />
        {/* Animated ambient orbs */}
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-neon-blue/[0.04] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-neon-pink/[0.04] rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/[0.025] rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '15s' }} />
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-neon-blue/20 animate-pulse"
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                top: `${10 + i * 11}%`,
                left: `${5 + i * 12}%`,
                animationDuration: `${3 + (i % 4)}s`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
          <div className="absolute top-1/4 left-16 w-px h-40 bg-gradient-to-b from-transparent via-neon-blue/10 to-transparent rotate-[25deg]" />
          <div className="absolute bottom-1/3 right-24 w-px h-32 bg-gradient-to-b from-transparent via-neon-pink/10 to-transparent -rotate-[15deg]" />
          <div className="absolute top-2/3 left-1/3 w-px h-24 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent rotate-[40deg]" />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">

          {/* Left — text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 md:mt-0">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-xs font-black uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
              Trichy's #1 Gaming Lounge
            </div>

            <h1 className="font-black leading-tight mb-4">
              <span className="block text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-neon-blue via-purple-300 to-neon-pink bg-clip-text text-transparent">
                CUEPHORIA
              </span>
              <span className="block text-xl md:text-3xl mt-1 text-white/90 font-bold">
                8-Ball Club &amp; Gaming Lounge
              </span>
            </h1>

            <p className="text-gray-400 text-sm md:text-base mb-5 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Experience the perfect blend of billiards, snooker, PS5 gaming, and cutting-edge
              VR with Meta Quest 3S — all under one neon roof.
            </p>

            {/* Info chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6 text-sm text-gray-300">
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <Clock className="h-3.5 w-3.5 text-neon-pink" />
                11 AM – 11 PM
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <MapPin className="h-3.5 w-3.5 text-neon-blue" />
                Thiruverumbur, Trichy
              </div>
            </div>

            {/* Announcements */}
            <div className="mb-6 space-y-2.5 w-full max-w-full">
              <ChocoLocaAnnouncement variant="compact" />
              <CuephoriaLiteAnnouncement variant="compact" />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-gradient-to-r from-neon-blue to-purple-500 text-black font-black rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg shadow-neon-blue/20"
              >
                Book a Slot <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/918637625155?text=${encodeURIComponent("Hello! I'd like to inquire about Cuephoria gaming lounge in Trichy.")}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-neon-pink/60 text-white font-semibold rounded-xl hover:bg-neon-pink/10 transition-colors text-sm"
              >
                <MessageCircle className="h-4 w-4 text-neon-pink" />
                WhatsApp Chatbot
              </a>
              <a
                href={`https://wa.me/917550025155?text=${encodeURIComponent("Hello! I'd like to speak with a real Cuephoria agent.")}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-neon-blue/50 text-white font-semibold rounded-xl hover:bg-neon-blue/10 transition-colors text-sm"
              >
                <Phone className="h-4 w-4 text-neon-blue" />
                Human Agent
              </a>
            </div>
          </div>

          {/* Right — logo */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-52 h-52 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue/15 to-neon-pink/10 blur-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png"
                  alt="Cuephoria Logo"
                  className="w-full h-full object-contain animate-float drop-shadow-[0_0_30px_rgba(157,78,221,0.5)]"
                  width="320" height="320"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <div className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce-slow" />
        </div>
        <span className="text-white/40 text-xs">Scroll to Explore</span>
      </div>
    </section>
  );
};
export default Hero;
