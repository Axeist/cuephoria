import React from 'react';
import { Trophy, Users, Calendar, ExternalLink, Zap } from 'lucide-react';

const highlights = [
  {
    Icon: Trophy,
    label: 'Amazing Prizes',
    desc: 'Win cash, gaming gear, free hours, and exclusive Cuephoria merch.',
    bgClass: 'bg-yellow-400/10 border-yellow-400/30 hover:border-yellow-400/60',
    iconClass: 'bg-gradient-to-br from-yellow-400 to-orange-500',
  },
  {
    Icon: Users,
    label: 'Community Events',
    desc: 'Connect with fellow gamers and participate in team-based tournaments.',
    bgClass: 'bg-neon-pink/10 border-neon-pink/30 hover:border-neon-pink/60',
    iconClass: 'bg-gradient-to-br from-neon-pink to-purple-500',
  },
  {
    Icon: Calendar,
    label: 'Regular Events',
    desc: 'Weekly & monthly tournaments across FC, COD, Pool, and more.',
    bgClass: 'bg-green-400/10 border-green-400/30 hover:border-green-400/60',
    iconClass: 'bg-gradient-to-br from-green-400 to-emerald-500',
  },
];

const Tournaments = () => {
  const handleTournamentClick = () => {
    window.open('https://admin.cuephoria.in/public/tournaments', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="tournaments" className="py-16 md:py-24 relative bg-gaming-darker">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,45,239,0.08)_0,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,200,255,0.06)_0,transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* ── Heading ─────────────────────────────────────────────── */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-neon-pink/70 mb-3">Compete &amp; Win</p>
          <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-neon-pink via-purple-300 to-neon-blue bg-clip-text text-transparent">
              Epic Gaming Tournaments
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Join thrilling competitions with amazing prizes — compete against the best players in Trichy
            across multiple game categories.
          </p>
        </div>

        {/* ── Highlight cards ─────────────────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-5 mb-8 md:mb-10">
          {highlights.map(({ Icon, label, desc, bgClass, iconClass }) => (
            <div
              key={label}
              className={`bg-gaming-darker/60 backdrop-blur-sm rounded-2xl border ${bgClass} p-6 text-center transition-all duration-300`}
            >
              <div className={`w-14 h-14 mx-auto mb-4 ${iconClass} rounded-full flex items-center justify-center`}>
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-base font-black text-white mb-2">{label}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        {/* ── Live tournaments glass container ────────────────────── */}
        <div className="bg-gaming-darker/60 backdrop-blur-lg rounded-2xl border border-white/10 p-6 md:p-8 mb-8">
          {/* Header row */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400 font-black text-sm uppercase tracking-widest">Live Tournaments</span>
              <Zap className="h-5 w-5 text-yellow-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white">
              Current &amp; Upcoming Championships
            </h3>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Categories */}
            <div className="bg-black/30 border border-neon-blue/20 rounded-xl p-5">
              <h4 className="font-black text-sm uppercase tracking-widest text-neon-blue mb-4 flex items-center gap-2">
                <span>🏅</span> Categories
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                {['FC Championships', 'Call of Duty Battles', 'Pool &amp; Snooker Contests', 'Multi-Game Challenges'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-neon-blue flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Rewards */}
            <div className="bg-black/30 border border-neon-pink/20 rounded-xl p-5">
              <h4 className="font-black text-sm uppercase tracking-widest text-neon-pink mb-4 flex items-center gap-2">
                <span>🎁</span> Rewards
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                {['Cash Prizes up to ₹10,000', 'Gaming Accessories', 'Free Gaming Hours', 'Cuephoria Merchandise'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-neon-pink flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <div className="text-center">
          <button
            onClick={handleTournamentClick}
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-neon-blue to-neon-pink text-black font-black rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-neon-blue/20 text-sm"
          >
            View All Tournaments
            <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <p className="text-gray-500 text-xs mt-3">Register now and compete for amazing prizes!</p>
        </div>
      </div>
    </section>
  );
};

export default Tournaments;
