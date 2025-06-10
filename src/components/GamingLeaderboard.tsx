
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Trophy, Medal, Crown, Star, Users, Target } from 'lucide-react';

interface Player {
  rank: number;
  name: string;
  score: number;
  game: string;
  achievement: string;
  isCurrentUser?: boolean;
}

const weeklyLeaders: Player[] = [
  { rank: 1, name: "Arjun K", score: 2850, game: "8-Ball Pool", achievement: "Perfect Week!" },
  { rank: 2, name: "Priya S", score: 2720, game: "PS5 FIFA", achievement: "Goal Machine" },
  { rank: 3, name: "Rahul M", score: 2680, game: "Snooker", achievement: "Precision Master" },
  { rank: 4, name: "Divya R", score: 2550, game: "COD MW3", achievement: "Headshot Hero" },
  { rank: 5, name: "Karthik V", score: 2480, game: "8-Ball Pool", achievement: "Combo King" },
  { rank: 6, name: "Ananya P", score: 2350, game: "PS5 Sports", achievement: "Multi-Game Pro" },
  { rank: 7, name: "Vishnu L", score: 2280, game: "Snooker", achievement: "Bank Shot Beast" },
  { rank: 8, name: "Meera J", score: 2150, game: "Racing Games", achievement: "Speed Demon" },
];

const monthlyChampions: Player[] = [
  { rank: 1, name: "Rohit T", score: 12500, game: "Overall", achievement: "Monthly Champion 👑" },
  { rank: 2, name: "Sneha D", score: 11800, game: "Pool Master", achievement: "Table Dominator" },
  { rank: 3, name: "Arun B", score: 11200, game: "Console King", achievement: "Gaming Legend" },
];

const studentChallenges = [
  { name: "College Cup Challenge", participants: 156, prize: "₹5000 + Trophies", status: "Active" },
  { name: "Engineering vs Medical", participants: 89, prize: "Bragging Rights + Free Sessions", status: "Starting Soon" },
  { name: "Freshers Tournament", participants: 234, prize: "Gaming Setup + Certificates", status: "Registration Open" },
];

const GamingLeaderboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'weekly' | 'monthly' | 'challenges'>('weekly');

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="text-yellow-400" size={20} />;
      case 2:
        return <Medal className="text-gray-400" size={20} />;
      case 3:
        return <Medal className="text-orange-400" size={20} />;
      default:
        return <Star className="text-neon-blue" size={16} />;
    }
  };

  const joinChallenge = (challengeName: string) => {
    const message = `Hi! I want to join the "${challengeName}" at Cuephoria! Can you help me register? 🎮`;
    const whatsappUrl = `https://wa.me/918637625155?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-6">
      <Card className="glass-card border-neon-blue/30">
        <CardHeader>
          <CardTitle className="text-2xl neon-text-blue flex items-center gap-2">
            <Trophy className="text-neon-pink" />
            Cuephoria Gaming Leaderboard
          </CardTitle>
          <p className="text-gray-300">Compete with the best gamers in Trichy!</p>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-6 border-b border-white/10">
            {[
              { id: 'weekly', label: 'Weekly Leaders', icon: <Target size={16} /> },
              { id: 'monthly', label: 'Monthly Champions', icon: <Crown size={16} /> },
              { id: 'challenges', label: 'Student Challenges', icon: <Users size={16} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-t-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-neon-blue/20 text-neon-blue border-b-2 border-neon-blue'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'weekly' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neon-pink">This Week's Top Performers</h3>
              {weeklyLeaders.map((player) => (
                <div
                  key={player.rank}
                  className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-200 ${
                    player.rank <= 3
                      ? 'border-neon-pink/50 bg-neon-pink/10'
                      : 'border-white/20 bg-gaming-darker/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      {getRankIcon(player.rank)}
                      <span className="text-lg font-bold text-white">#{player.rank}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{player.name}</p>
                      <p className="text-sm text-gray-400">{player.game}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-neon-blue">{player.score.toLocaleString()}</p>
                    <p className="text-xs text-neon-pink">{player.achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'monthly' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neon-pink">Monthly Hall of Fame</h3>
              {monthlyChampions.map((player) => (
                <div
                  key={player.rank}
                  className="flex items-center justify-between p-6 rounded-lg border border-yellow-400/50 bg-yellow-400/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      {getRankIcon(player.rank)}
                      <span className="text-xl font-bold text-white">#{player.rank}</span>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">{player.name}</p>
                      <p className="text-sm text-gray-400">{player.game}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-neon-blue">{player.score.toLocaleString()}</p>
                    <p className="text-sm text-yellow-400">{player.achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'challenges' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neon-pink">Upcoming Student Challenges</h3>
              {studentChallenges.map((challenge, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-neon-blue/30 bg-gaming-darker/30"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-white">{challenge.name}</h4>
                      <p className="text-sm text-gray-400">{challenge.participants} participants registered</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      challenge.status === 'Active' 
                        ? 'bg-green-500/20 text-green-400'
                        : challenge.status === 'Starting Soon'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {challenge.status}
                    </span>
                  </div>
                  <p className="text-neon-blue font-semibold mb-3">Prize: {challenge.prize}</p>
                  <Button
                    onClick={() => joinChallenge(challenge.name)}
                    className="w-full bg-neon-pink hover:bg-neon-pink/80 text-white"
                  >
                    Join Challenge
                  </Button>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 p-4 bg-gaming-darker/50 rounded-lg border border-neon-blue/30">
            <p className="text-center text-gray-300 mb-3">
              Want to see your name on the leaderboard? 🏆
            </p>
            <div className="flex gap-3">
              <Button
                onClick={() => window.open('https://calendly.com/cuephoriaclub/60min', '_blank')}
                className="flex-1 bg-neon-blue hover:bg-neon-blue/80 text-gaming-darker font-semibold"
              >
                Book Your Gaming Session
              </Button>
              <Button
                onClick={() => {
                  const text = "Check out the gaming leaderboard at Cuephoria Trichy! 🎮🏆 Think you can make it to the top? #CuephoriaLeaderboard #TrichyGaming";
                  if (navigator.share) {
                    navigator.share({ title: 'Cuephoria Leaderboard', text, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(text + ' ' + window.location.href);
                    alert('Leaderboard link copied! Challenge your friends!');
                  }
                }}
                variant="outline"
                className="border-neon-pink text-neon-pink hover:bg-neon-pink/10"
              >
                Share & Challenge
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GamingLeaderboard;
