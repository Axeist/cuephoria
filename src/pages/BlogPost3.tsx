import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Target, Users, Trophy, Heart, Gamepad2, Eye, Brain, Zap, Sparkles } from 'lucide-react';
import SEOMetadata from '../components/SEOMetadata';
import Footer from '../components/Footer';

const BlogPost3 = () => {
  return (
    <div className="min-h-screen bg-gaming-darker text-white overflow-hidden">
      <SEOMetadata
        title="From Nervous Beginner to Pool Pro: Real Stories from Our Tables"
        description="Amazing transformation stories from Cuephoria's pool tables - how nervous beginners become confident players through community and practice."
        keywords="pool beginner stories, learning pool Trichy, pool transformation, Cuephoria player stories, beginner to pro pool"
      />
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <article className="relative py-12 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-pink transition-all duration-300 mb-8 hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-semibold">Back to Stories</span>
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full border border-green-500/30">
                <Target className="h-4 w-4 text-green-400 animate-pulse" />
                <span className="text-green-400 font-bold text-sm uppercase tracking-wider">Player Stories</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                From Nervous Beginner to Pool Pro: Real Stories from Our Tables
              </span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>July 20, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>6 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-green-400 animate-pulse" />
                <span className="text-green-400">Transformation</span>
              </div>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden mb-8 group">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0871e6f0fc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80"
                alt="Pool players at Cuephoria showing skill progression"
                className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gaming-darker/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white/80 text-sm">Every expert was once a beginner</div>
            </div>
          </header>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-gradient-to-r from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-green-500/30 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-6 flex items-center gap-3">
                <Heart className="h-8 w-8 animate-pulse" />
                The Magic of the First Break
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                There's something beautiful about watching someone play pool for the very first time. The careful chalk application (way more than necessary), the uncertain grip on the cue, the intense concentration as they line up that first shot. Most miss completely. The cue ball rolls gently into a corner pocket, and everyone laughs - including them.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                But here's what I love about our community: nobody stays a beginner for long.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Since May 3rd, we've watched hundreds of first-time players transform into confident competitors, and each journey has been uniquely inspiring.
              </p>
            </div>

            <div className="bg-gradient-to-l from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-teal-500/30 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-teal-400 mb-6">Ravi's Incredible Journey</h2>
              <div className="bg-gaming-darker/50 rounded-lg p-6 mb-6 border border-teal-500/20">
                <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                  Six months ago, Ravi walked in with his girlfriend for what was supposed to be a casual date. He'd never held a pool cue in his life and was visibly nervous about looking foolish in front of her.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-4">
                  <div className="bg-gaming-darker/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-400 mb-2">Week 1</div>
                    <p className="text-sm text-gray-400">Couldn't hit a ball properly</p>
                  </div>
                  <div className="bg-gaming-darker/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400 mb-2">Month 3</div>
                    <p className="text-sm text-gray-400">Started calling shots</p>
                  </div>
                  <div className="bg-gaming-darker/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400 mb-2">Today</div>
                    <p className="text-sm text-gray-400">Teaching newcomers!</p>
                  </div>
                </div>
              </div>
              <blockquote className="border-l-4 border-teal-400 pl-6 italic text-gray-300 mb-4 text-lg">
                "I used to think pool was just luck. Now I understand it's geometry, physics, and psychology all rolled into one."
              </blockquote>
              <p className="text-gray-300 leading-relaxed">
                His girlfriend, by the way, turned out to be naturally gifted and now regularly beats him. They're here three times a week, and their friendly rivalry has become legendary among our regulars.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30 mb-8 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">The Engineering Student's Scientific Approach</h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                Karthik approached pool like he approaches circuit design - methodically, analytically, with lots of note-taking. He'd spend ten minutes studying angles before each shot, calculating trajectories and spin effects. Other players found it amusing at first.
              </p>
              
              <div className="bg-gaming-darker/50 rounded-lg p-6 mb-6 border border-blue-500/20">
                <h4 className="text-blue-400 font-bold mb-4">Karthik's Scientific Method:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2"><Brain className="h-4 w-4 text-blue-400" />Analyzed angles and ball physics</li>
                  <li className="flex items-center gap-2"><Eye className="h-4 w-4 text-blue-400" />Studied professional techniques online</li>
                  <li className="flex items-center gap-2"><Target className="h-4 w-4 text-blue-400" />Practiced specific shots methodically</li>
                  <li className="flex items-center gap-2"><Trophy className="h-4 w-4 text-blue-400" />Documented progress and improvements</li>
                </ul>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Three months later, his systematic approach made him nearly unbeatable. Now he runs informal coaching sessions for other engineering students, complete with diagrams and physics explanations.
              </p>
              <blockquote className="border-l-4 border-blue-400 pl-6 italic text-gray-300 text-lg">
                "Pool is just applied mechanics. Once you understand the principles, improvement is inevitable."
              </blockquote>
            </div>

            <div className="bg-gradient-to-l from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-pink-500/30 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-36 h-36 bg-pink-500/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-6">The Confidence Builder</h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                Meena was painfully shy when she first came with her college friends. She'd hang back, watch others play, decline when offered a turn. Her friends practically had to force the cue into her hands.
              </p>
              
              <div className="bg-gaming-darker/50 rounded-lg p-6 mb-6 border border-pink-500/20">
                <h4 className="text-pink-400 font-bold mb-4">Meena's Transformation Timeline:</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-pink-400 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">First Visit</p>
                      <p className="text-gray-400 text-sm">Refused to play, just watched others</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pink-500/40 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-pink-400 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Third Visit</p>
                      <p className="text-gray-400 text-sm">Tried her first shot, discovered natural talent</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pink-500/60 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-pink-400 text-sm font-bold">10</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Regular Player</p>
                      <p className="text-gray-400 text-sm">Started leading her friend group's sessions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <blockquote className="border-l-4 border-pink-400 pl-6 italic text-gray-300 text-lg">
                "Pool gave me confidence I never knew I had. If I can sink a corner pocket under pressure, I can definitely handle a job interview."
              </blockquote>
            </div>

            <div className="bg-gradient-to-r from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 mb-8 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-44 h-44 bg-purple-500/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-purple-400 mb-6">The Unlikely Rivalry</h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                The most entertaining transformation has to be the ongoing rivalry between Mr. Krishnan (a 55-year-old retired teacher) and his son Vikash (a 22-year-old IT student).
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Krishnan started playing to "understand what his son found so interesting." Vikash was initially thrilled to have something to share with his dad. But as Krishnan's natural precision and patience began translating into consistent victories, the dynamic shifted.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gaming-darker/50 rounded-lg p-4 border border-purple-500/20">
                  <h4 className="text-purple-400 font-bold mb-3">Dad's Style: "The Strategist"</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Deliberate, calculated shots</li>
                    <li>• Studies the table for minutes</li>
                    <li>• Rarely takes risky shots</li>
                    <li>• Wins through consistency</li>
                  </ul>
                </div>
                <div className="bg-gaming-darker/50 rounded-lg p-4 border border-purple-500/20">
                  <h4 className="text-purple-400 font-bold mb-3">Son's Style: "The Flash"</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Quick, flashy shots</li>
                    <li>• Attempts trick shots</li>
                    <li>• High risk, high reward</li>
                    <li>• Crowd favorite</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Now they have weekly matches that draw crowds. The running commentary from other players has become part of the entertainment. Father vs. son, experience vs. energy - it's better than any sports match on TV.
              </p>
            </div>

            <div className="bg-gradient-to-l from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-green-500/30 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-green-500/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-6">What We've Learned from Watching</h2>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                After thousands of games and countless transformations, we've noticed some fascinating patterns:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="h-6 w-6 text-green-400 mt-1 flex-shrink-0 animate-pulse" />
                    <div>
                      <h4 className="text-white font-bold mb-1">Technical Students</h4>
                      <p className="text-gray-300 text-sm">Excel once they grasp the physics and geometry involved</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="h-6 w-6 text-pink-400 mt-1 flex-shrink-0 animate-pulse" />
                    <div>
                      <h4 className="text-white font-bold mb-1">Creative Types</h4>
                      <p className="text-gray-300 text-sm">Develop unique shot-making abilities and artistic flair</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0 animate-pulse" />
                    <div>
                      <h4 className="text-white font-bold mb-1">Quiet Personalities</h4>
                      <p className="text-gray-300 text-sm">Often surprise everyone with hidden competitive fire</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0 animate-pulse" />
                    <div>
                      <h4 className="text-white font-bold mb-1">The Breakthrough</h4>
                      <p className="text-gray-300 text-sm">Most improvement happens when people stop worrying about looking silly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-400/20 via-teal-500/20 to-blue-500/20 backdrop-blur-xl rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">Your Turn</h2>
              <p className="text-gray-300 leading-relaxed text-center mb-4 text-lg">
                If you're intimidated by pool, don't be. Every expert here started exactly where you are now. The beautiful thing about our tables is that they're democratic - your background, your age, your natural coordination don't determine your ceiling. Only your willingness to learn and practice matters.
              </p>
              <p className="text-gray-300 leading-relaxed text-center">
                Come try it. Take that first awkward shot. Miss completely if you need to. Laugh at yourself. Then try again. Six months from now, you might be the one teaching someone else how to hold a cue properly, sharing the same patient encouragement that someone once showed you.
              </p>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="bg-gradient-to-r from-green-400/20 via-teal-500/20 to-blue-400/20 backdrop-blur-xl rounded-3xl p-10 border border-white/20 text-center mt-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-teal-500/5 to-blue-400/5 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your Pool Journey?</h3>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Join our welcoming community and discover your inner pool champion at Cuephoria. Every expert was once a beginner.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-400 via-teal-500 to-blue-400 p-[2px] rounded-full hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gaming-darker px-8 py-4 rounded-full flex items-center gap-3">
                    <Target className="h-5 w-5 text-green-400" />
                    <span className="font-bold text-white">Book Pool Session</span>
                  </div>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-gaming-darker/50 backdrop-blur-sm border border-green-400/30 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:border-green-400/60"
                >
                  <Users className="h-5 w-5 text-green-400" />
                  <span className="text-white">Visit Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost3;
