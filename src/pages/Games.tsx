
import React from "react";
import { Link } from "react-router-dom";
import Achievements from "../components/Achievements";
import { Gamepad2, Trophy, PlayCircle } from "lucide-react";

const Games = () => {
  return (
    <div className="min-h-screen bg-gaming-dark text-white">
      <section className="container mx-auto pt-28 pb-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text-blue flex items-center gap-3">
          <Gamepad2 className="inline mr-2 text-neon-pink" size={36} /> Interactive Games Hub
        </h1>
        <p className="mb-8 text-gray-300 max-w-xl">
          Play mini-games, improve your skills, and climb the leaderboard! Ready to test your gaming IQ or take a virtual shot at the pool table?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="/games/quiz"
            className="glass-card rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform border border-neon-pink/20 group"
          >
            <Trophy className="h-10 w-10 text-neon-green mb-2 group-hover:animate-pulse-neon" />
            <h2 className="text-2xl font-semibold mb-2">Gaming Quiz <span className="ml-1 text-base">🎮</span></h2>
            <p className="text-gray-400 mb-2">Test your gaming knowledge and climb up the leaderboard.</p>
            <button className="mt-2 px-6 py-2 rounded bg-neon-blue text-gaming-darker font-bold hover:bg-neon-blue/80 transition-all">Play Quiz</button>
          </Link>

          <div className="glass-card rounded-lg p-6 flex flex-col items-center opacity-80 cursor-not-allowed border border-neon-blue/10">
            <PlayCircle className="h-10 w-10 text-neon-blue mb-2" />
            <h2 className="text-2xl font-semibold mb-2">Virtual Pool Trainer <span className="text-base">🏆</span></h2>
            <p className="text-gray-400 mb-1">Practice your pool shots in a virtual mini-game.</p>
            <span className="bg-gaming-accent/30 text-neon-pink px-3 py-1 rounded text-xs mt-2">Coming soon!</span>
          </div>

          <div className="glass-card rounded-lg p-6 flex flex-col items-center opacity-80 cursor-not-allowed border border-neon-blue/10">
            <Trophy className="h-10 w-10 text-neon-pink mb-2" />
            <h2 className="text-2xl font-semibold mb-2">More Games</h2>
            <p className="text-gray-400 mb-2">New tournaments, tournaments, and prizes coming soon...</p>
            <span className="bg-gaming-accent/30 text-neon-blue px-3 py-1 rounded text-xs mt-2">Stay tuned!</span>
          </div>
        </div>

        <div className="mt-12">
          <Achievements />
        </div>
      </section>
    </div>
  );
};

export default Games;
