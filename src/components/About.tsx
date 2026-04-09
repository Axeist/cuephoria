import React from 'react';
import { Target, Joystick, Users, Coffee, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import CuephoriaLiteAnnouncement from './CuephoriaLiteAnnouncement';

const features = [
  {
    Icon: Target,
    title: '8-Ball Pool',
    description: 'Premium pool tables with professional equipment for casual players and serious competitors.',
    borderClass: 'border-neon-blue/30 hover:border-neon-blue/60',
    iconClass: 'bg-neon-blue/15 border-neon-blue/30 text-neon-blue',
  },
  {
    Icon: Joystick,
    title: 'Gaming Zone',
    description: 'State-of-the-art PS5 rigs and Meta Quest 3S VR stations with mixed reality experiences.',
    borderClass: 'border-neon-pink/30 hover:border-neon-pink/60',
    iconClass: 'bg-neon-pink/15 border-neon-pink/30 text-neon-pink',
  },
  {
    Icon: Coffee,
    title: 'Café Area',
    description: 'Enjoy refreshments and snacks while you play or unwind between sessions.',
    borderClass: 'border-amber-400/30 hover:border-amber-400/60',
    iconClass: 'bg-amber-400/15 border-amber-400/30 text-amber-400',
  },
  {
    Icon: Users,
    title: 'Community',
    description: 'Regular tournaments, events and a vibrant community of gaming and billiards enthusiasts.',
    borderClass: 'border-green-400/30 hover:border-green-400/60',
    iconClass: 'bg-green-400/15 border-green-400/30 text-green-400',
  },
];

const whyPoints = [
  'Premium PS5 gaming with 4K displays & high-end headsets',
  'Professional pool tables with quality cues and accessories',
  'Cutting-edge Meta Quest 3S VR with mixed reality',
  'Stylish neon-lit environment perfect for any occasion',
  'Friendly staff and a welcoming community atmosphere',
  'Affordable rates with student & membership discounts',
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 relative bg-gaming-darker">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(157,78,221,0.1)_0,transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,200,255,0.06)_0,transparent_65%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* ── Heading ─────────────────────────────────────────────── */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-neon-blue/70 mb-3">Who We Are</p>
          <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-neon-blue via-purple-300 to-neon-pink bg-clip-text text-transparent">
              Experience the Fusion
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base">
            At Cuephoria, we blend the precision of billiards with the thrill of PS5 gaming and 
            Meta Quest 3S VR — an unmatched entertainment venue for everyone.
          </p>
        </div>

        {/* ── Feature cards ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8 md:mb-10">
          {features.map(({ Icon, title, description, borderClass, iconClass }) => (
            <div
              key={title}
              className={`bg-gaming-darker/60 backdrop-blur-sm rounded-2xl border ${borderClass} p-5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,200,255,0.06)]`}
            >
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${iconClass}`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-black text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* ── Lite Announcement ───────────────────────────────────── */}
        <div className="mb-8 md:mb-10">
          <CuephoriaLiteAnnouncement variant="card" />
        </div>

        {/* ── Why Choose + Hours — unified glass container ─────────── */}
        <div className="bg-gaming-darker/60 backdrop-blur-lg rounded-2xl border border-white/10 p-5 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">

            {/* Why choose */}
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-black text-white mb-5">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-neon-pink to-purple-400 bg-clip-text text-transparent">
                  Cuephoria
                </span>
                ?
              </h3>
              <ul className="space-y-3">
                {whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-neon-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours card */}
            <div className="md:w-64 w-full bg-black/40 border border-white/10 rounded-2xl p-6 text-center flex-shrink-0">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4">Open Every Day</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-neon-blue" />
                <span className="text-neon-blue font-black text-lg">11:00 AM</span>
              </div>
              <div className="h-px bg-white/10 my-2" />
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-neon-pink" />
                <span className="text-neon-pink font-black text-lg">11:00 PM</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mb-5">
                <MapPin className="h-3 w-3 text-neon-blue flex-shrink-0" />
                Thiruverumbur, Trichy
              </div>
              <Link
                to="/book"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-neon-blue to-purple-500 text-black font-black rounded-xl text-sm hover:opacity-90 transition-opacity"
              >
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
