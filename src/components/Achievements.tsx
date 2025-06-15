
import React, { useState } from "react";
import { Trophy, Check } from "lucide-react";

// Example achievements data (for static demo purposes)
const initialAchievements = [
  { id: 1, label: "First Quiz Played", unlocked: true },
  { id: 2, label: "Score 3/3 on Quiz", unlocked: false },
  { id: 3, label: "Virtual Pool Trainer Played (Coming soon)", unlocked: false },
  { id: 4, label: "Top Leaderboard Spot", unlocked: false }
];

const Achievements = () => {
  const [achievements] = useState(initialAchievements);

  return (
    <div className="mt-10 max-w-2xl mx-auto bg-gaming-darker/80 p-6 rounded-xl border border-neon-blue/30">
      <div className="flex items-center mb-4 gap-2">
        <Trophy className="text-neon-blue" />
        <h2 className="text-2xl font-bold neon-text-blue">Your Achievements</h2>
      </div>
      <ul className="space-y-2">
        {achievements.map(a => (
          <li
            key={a.id}
            className={`flex items-center gap-3 py-1 px-2 rounded transition-all ${
              a.unlocked ? "bg-neon-green/10 text-neon-green" : "text-gray-400"
            }`}
          >
            {a.unlocked 
              ? <Check className="text-neon-green" size={20} />
              : <Trophy className="text-neon-pink opacity-50" size={20} />}
            <span>{a.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
