
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Share, Trophy, Users, Gamepad2, Target, Calendar, Gift } from 'lucide-react';
import GamingQuiz from './GamingQuiz';
import GamingLeaderboard from './GamingLeaderboard';

const ViralFeatures: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<'quiz' | 'leaderboard' | 'challenges'>('quiz');

  const socialShareFeatures = [
    {
      title: "Gaming Achievement Generator",
      description: "Create custom achievement badges to share your gaming milestones!",
      action: "Create Achievement",
      icon: <Trophy className="text-yellow-400" />
    },
    {
      title: "Squad Formation Tool",
      description: "Find gaming partners and form the ultimate squad for tournaments!",
      action: "Find Squad",
      icon: <Users className="text-neon-blue" />
    },
    {
      title: "Gaming Moments Capture",
      description: "Share your epic gaming moments with custom Cuephoria frames!",
      action: "Share Moment",
      icon: <Share className="text-neon-pink" />
    }
  ];

  const studentEngagementFeatures = [
    {
      title: "College Battle Royale",
      description: "Represent your college in inter-college gaming championships!",
      participants: "12 colleges registered",
      prize: "₹25,000 + Trophies",
      icon: <Target className="text-red-400" />
    },
    {
      title: "Semester Break Special",
      description: "Exclusive tournaments during exam breaks with student-friendly prizes!",
      participants: "200+ students joined",
      prize: "Gaming gear + Certificates",
      icon: <Calendar className="text-green-400" />
    },
    {
      title: "Refer & Win Program",
      description: "Bring friends and earn free gaming sessions + exclusive rewards!",
      participants: "Active program",
      prize: "Free sessions + Merchandise",
      icon: <Gift className="text-purple-400" />
    }
  ];

  const shareContent = (feature: string) => {
    const shareTexts = {
      quiz: "I just discovered this awesome gaming quiz at Cuephoria Trichy! 🎮 Test your gaming knowledge and challenge your friends! #CuephoriaQuiz #TrichyGaming",
      leaderboard: "Check out the gaming leaderboard at Cuephoria! Can you make it to the top? 🏆 #CuephoriaLeaderboard #TrichyGaming",
      achievement: "Just unlocked a new gaming achievement at Cuephoria Trichy! 🏆 Come challenge me! #CuephoriaAchievement #TrichyGaming"
    };
    
    const text = shareTexts[feature as keyof typeof shareTexts] || shareTexts.quiz;
    
    if (navigator.share) {
      navigator.share({
        title: 'Cuephoria Gaming Features',
        text: text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(text + ' ' + window.location.href);
      alert('Content copied to clipboard! Share it with your friends!');
    }
  };

  return (
    <section id="viral-features" className="py-16 bg-gaming-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-text-blue">Interactive Gaming</span>{' '}
            <span className="neon-text-pink">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive into our viral gaming features, compete with friends, and become part of Trichy's most engaging gaming community!
          </p>
        </div>

        {/* Feature Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 bg-gaming-dark/50 rounded-lg p-2 border border-white/10">
            {[
              { id: 'quiz', label: 'Gaming Quiz', icon: <Gamepad2 size={20} /> },
              { id: 'leaderboard', label: 'Leaderboards', icon: <Trophy size={20} /> },
              { id: 'challenges', label: 'Viral Challenges', icon: <Target size={20} /> }
            ].map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                  activeFeature === feature.id
                    ? 'bg-neon-blue text-gaming-darker font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {feature.icon}
                {feature.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Feature Content */}
        <div className="mb-12">
          {activeFeature === 'quiz' && <GamingQuiz />}
          {activeFeature === 'leaderboard' && <GamingLeaderboard />}
          {activeFeature === 'challenges' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="glass-card border-neon-pink/30">
                <CardHeader>
                  <CardTitle className="text-2xl neon-text-pink flex items-center gap-2">
                    <Target className="text-neon-blue" />
                    Viral Gaming Challenges
                  </CardTitle>
                  <p className="text-gray-300">Join trending challenges and become a gaming influencer!</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {socialShareFeatures.map((feature, index) => (
                      <Card key={index} className="bg-gaming-dark/50 border-white/20 hover:border-neon-blue/50 transition-all duration-200">
                        <CardContent className="p-6 text-center">
                          <div className="mb-4 flex justify-center">
                            {feature.icon}
                          </div>
                          <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                          <p className="text-sm text-gray-400 mb-4">{feature.description}</p>
                          <Button
                            onClick={() => shareContent('achievement')}
                            className="w-full bg-neon-pink hover:bg-neon-pink/80 text-white"
                          >
                            {feature.action}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-neon-blue/30">
                <CardHeader>
                  <CardTitle className="text-xl neon-text-blue">Student Engagement Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {studentEngagementFeatures.map((program, index) => (
                      <div key={index} className="p-4 bg-gaming-dark/30 rounded-lg border border-white/20 hover:border-neon-blue/50 transition-all duration-200">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1">
                            {program.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-1">{program.title}</h4>
                            <p className="text-gray-400 text-sm mb-2">{program.description}</p>
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-neon-blue">{program.participants}</span>
                              <span className="text-neon-pink font-semibold">{program.prize}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glass-card border-neon-pink/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Go Viral? 🚀</h3>
              <p className="text-gray-300 mb-6">
                Join Cuephoria's viral gaming community, compete in challenges, and share your epic moments with friends across Trichy!
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={() => window.open('https://calendly.com/cuephoriaclub/60min', '_blank')}
                  className="flex-1 bg-neon-blue hover:bg-neon-blue/80 text-gaming-darker font-semibold"
                >
                  Book Gaming Session
                </Button>
                <Button
                  onClick={() => shareContent('quiz')}
                  variant="outline"
                  className="flex-1 border-neon-pink text-neon-pink hover:bg-neon-pink/10"
                >
                  Share with Friends
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ViralFeatures;
