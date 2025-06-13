
import React from 'react';
import { Trophy, Users, Calendar, ExternalLink, Zap } from 'lucide-react';

const Tournaments = () => {
  const handleTournamentClick = () => {
    window.open('https://admin.cuephoria.in/public/tournaments', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="tournaments" className="py-16 md:py-24 bg-gradient-to-b from-gaming-dark to-gaming-darker relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-neon-blue rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 border border-neon-pink rounded-full animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text-blue">
            🏆 Epic Gaming Tournaments
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join thrilling gaming competitions with amazing prizes! Compete against the best players 
            in Trichy and prove your gaming prowess across multiple game categories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Prize Pool */}
          <div className="glass-card rounded-lg p-6 text-center border border-neon-blue/30 hover:border-neon-blue transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-neon-blue mb-2">Amazing Prizes</h3>
            <p className="text-gray-300">
              Win cash prizes, gaming gear, free gaming hours, and exclusive merchandise
            </p>
          </div>

          {/* Community */}
          <div className="glass-card rounded-lg p-6 text-center border border-neon-pink/30 hover:border-neon-pink transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-neon-pink to-purple-500 rounded-full flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-neon-pink mb-2">Community Events</h3>
            <p className="text-gray-300">
              Connect with fellow gamers and participate in team-based tournaments
            </p>
          </div>

          {/* Regular Events */}
          <div className="glass-card rounded-lg p-6 text-center border border-green-400/30 hover:border-green-400 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-green-400 mb-2">Regular Events</h3>
            <p className="text-gray-300">
              Weekly and monthly tournaments across FIFA, COD, Pool, and more games
            </p>
          </div>
        </div>

        {/* Featured Tournament Info */}
        <div className="glass-card rounded-lg p-8 mb-8 border border-neon-blue/30 bg-gradient-to-r from-gaming-dark/50 to-gaming-darker/50">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-yellow-400 animate-pulse" />
              <span className="text-yellow-400 font-bold text-lg animate-blink-slow">LIVE TOURNAMENTS</span>
              <Zap className="h-6 w-6 text-yellow-400 animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              🎮 Current & Upcoming Gaming Championships
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-neon-blue font-semibold mb-2">🏅 Tournament Categories:</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• FIFA Championships</li>
                  <li>• Call of Duty Battles</li>
                  <li>• Pool & Snooker Contests</li>
                  <li>• Multi-Game Challenges</li>
                </ul>
              </div>
              <div>
                <h4 className="text-neon-pink font-semibold mb-2">🎁 Exciting Rewards:</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Cash Prizes up to ₹10,000</li>
                  <li>• Gaming Accessories</li>
                  <li>• Free Gaming Hours</li>
                  <li>• Cuephoria Merchandise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleTournamentClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-pink text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-neon-blue/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Tournaments
              <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <p className="text-gray-400 text-sm mt-3">
            🚀 Register now and compete for amazing prizes!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tournaments;
