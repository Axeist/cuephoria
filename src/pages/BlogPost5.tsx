import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Coffee, Users, Shield, Calculator, GraduationCap, Heart, Phone, MapPin, CheckCircle, TrendingUp, Award } from 'lucide-react';
import SEOMetadata from '../components/SEOMetadata';
import Footer from '../components/Footer';

const BlogPost5 = () => {
  return (
    <div className="min-h-screen bg-gaming-darker text-white overflow-hidden">
      <SEOMetadata
        title="When Your Parents Ask 'What's So Special About This Gaming Place?'"
        description="The conversation every gaming enthusiast knows - learn how to explain why Cuephoria matters to concerned parents and family members."
        keywords="parents gaming concerns, explaining gaming lounge benefits, family gaming discussion, Cuephoria parent approval"
      />
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/30">
                <Coffee className="h-4 w-4 text-orange-400 animate-pulse" />
                <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">Family & Gaming</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                When Your Parents Ask 'What's So Special About This Gaming Place?'
              </span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>June 20, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-orange-400 animate-pulse" />
                <span className="text-orange-400">Family Focus</span>
              </div>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden mb-8 group">
              <img
                src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Family discussing gaming at comfortable setting"
                className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gaming-darker/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white/80 text-sm">The conversation every gamer knows</div>
            </div>
          </header>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-gradient-to-r from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-orange-500/30 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-6 flex items-center gap-3">
                <Users className="h-8 w-8 animate-pulse" />
                The Conversation Every Gaming Enthusiast Knows
              </h2>
              <div className="bg-gaming-darker/50 rounded-lg p-6 mb-6 border border-orange-500/20">
                <p className="text-gray-300 leading-relaxed mb-4 text-lg font-medium italic">
                  "You're going to that gaming place AGAIN? What's so special about it? Can't you just play games at home?"
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you've spent any significant time at Cuephoria since we opened on May 3rd, 2025, you've probably had this conversation. Your parents, concerned about your new hobby (and your spending), trying to understand why you'd pay money to do something you could theoretically do for free.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Here's how to explain it to them - and why they might actually approve once they understand.
              </p>
            </div>

            <div className="bg-gradient-to-l from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-red-400 mb-6">"It's Not Just About the Games, Ma"</h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                The hardest part to explain is that gaming lounges aren't really about gaming. They're about community.
              </p>
              
              <div className="bg-gaming-darker/50 rounded-lg p-6 mb-6 border border-red-500/20">
                <h4 className="text-red-400 font-bold mb-4">The Restaurant Analogy:</h4>
                <blockquote className="text-gray-300 italic text-lg leading-relaxed">
                  "It's like asking why people go to restaurants when they can cook at home. Technically possible, but completely missing the point."
                </blockquote>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                At home, you're playing against the computer or online strangers. Here, you're laughing with friends, learning from better players, teaching newcomers, and becoming part of something bigger.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gaming-darker/30 rounded-lg p-4">
                  <h4 className="text-red-400 font-bold mb-2">At Home</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Playing alone</li>
                    <li>• Same environment daily</li>
                    <li>• Limited social interaction</li>
                    <li>• No learning from others</li>
                  </ul>
                </div>
                <div className="bg-gaming-darker/30 rounded-lg p-4">
                  <h4 className="text-green-400 font-bold mb-2">At Cuephoria</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Social gaming experience</li>
                    <li>• Professional equipment</li>
                    <li>• Learning community</li>
                    <li>• Real friendships formed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30 mb-8 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">The Social Skills Argument</h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                This one works especially well with parents who worry about "too much screen time."
              </p>
              
              <div className="bg-gaming-darker/50 rounded-lg p-6 mb-6 border border-blue-500/20">
                <blockquote className="border-l-4 border-blue-400 pl-6 italic text-gray-300 mb-4 text-lg">
                  "I'm actually improving my social skills. I've learned to graciously win and lose, communicate with teammates under pressure, and make friends with people I'd never normally meet."
                </blockquote>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                It's not an exaggeration. We've watched shy students become confident speakers, competitive individuals learn teamwork, and diverse groups bond over shared interests.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gaming-darker/30 rounded-lg p-4 text-center">
                  <CheckCircle className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="text-blue-400 font-bold mb-2">Communication</h4>
                  <p className="text-gray-300 text-sm">Team coordination and strategy discussion</p>
                </div>
                <div className="bg-gaming-darker/30 rounded-lg p-4 text-center">
                  <CheckCircle className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="text-blue-400 font-bold mb-2">Leadership</h4>
                  <p className="text-gray-300 text-sm">Taking charge in team games</p>
                </div>
                <div className="bg-gaming-darker/30 rounded-lg p-4 text-center">
                  <CheckCircle className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="text-blue-400 font-bold mb-2">Patience</h4>
                  <p className="text-gray-300 text-sm">Teaching and learning from others</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-l from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-green-500/30 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-36 h-36 bg-green-500/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-6 flex items-center gap-3">
                <Calculator className="h-8 w-8 animate-pulse" />
                The Value Proposition
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                When your dad starts calculating costs ("₹150 for one hour? That's expensive!"), show him the membership math:
              </p>
              
              <div className="bg-gaming-darker/50 rounded-lg p-6 mb-6 border border-green-500/20">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-green-400 mb-2">₹199/month</div>
                  <p className="text-lg text-white">Silver Membership</p>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>• 50% OFF all gaming sessions</p>
                  <p>• ₹100 worth of FREE snacks</p>
                  <p>• Priority bookings</p>
                  <p>• Premium membership benefits</p>
                </div>
                <div className="mt-4 p-3 bg-green-500/10 rounded-lg">
                  <p className="text-green-400 font-bold text-center">That's ₹6.60 per day for unlimited access!</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                "Compare that to a movie ticket (₹200+ for 3 hours) or dinner out (₹500+ for one evening). This gives me entertainment and social connection for an entire month."
              </p>
              
              <blockquote className="border-l-4 border-green-400 pl-6 italic text-gray-300 text-lg">
                "It's actually the most economical entertainment option in Trichy when you break it down."
              </blockquote>
            </div>

            <div className="bg-gradient-to-r from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 mb-8 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-44 h-44 bg-purple-500/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-purple-400 mb-6">The Safety & Security Card</h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                This one really resonates with worried parents:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gaming-darker/50 rounded-lg p-6 border border-purple-500/20">
                  <Shield className="h-8 w-8 text-purple-400 mb-4" />
                  <h4 className="text-purple-400 font-bold mb-3">Safe Environment</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Professional, monitored space</li>
                    <li>• No outside troublemakers</li>
                    <li>• Staff supervision always present</li>
                    <li>• CCTV security throughout</li>
                  </ul>
                </div>
                <div className="bg-gaming-darker/50 rounded-lg p-6 border border-purple-500/20">
                  <MapPin className="h-8 w-8 text-purple-400 mb-4" />
                  <h4 className="text-purple-400 font-bold mb-3">Known Location</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Fixed address in Thiruverumbur</li>
                    <li>• You always know where I am</li>
                    <li>• Open until 11 PM - predictable hours</li>
                    <li>• Easy to reach in emergencies</li>
                  </ul>
                </div>
              </div>
              
              <blockquote className="border-l-4 border-purple-400 pl-6 italic text-gray-300 text-lg">
                "Would you rather I hang out at random places around the city, or at a established business where you can always find me?"
              </blockquote>
            </div>

            <div className="bg-gradient-to-l from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-yellow-500/30 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">The Academic Performance Angle</h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                Here's one that might surprise them:
              </p>
              
              <div className="bg-gaming-darker/50 rounded-lg p-6 mb-6 border border-yellow-500/20">
                <TrendingUp className="h-8 w-8 text-yellow-400 mb-4" />
                <h4 className="text-yellow-400 font-bold mb-4">The Stress Relief Factor:</h4>
                <p className="text-gray-300 mb-4">
                  "Studies show that recreational activities improve academic performance by reducing stress and preventing burnout. My grades have actually improved since I started having this outlet."
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-gaming-darker/30 rounded-lg p-3">
                    <div className="text-yellow-400 font-bold">Better Focus</div>
                    <div className="text-gray-400 text-xs">After gaming breaks</div>
                  </div>
                  <div className="bg-gaming-darker/30 rounded-lg p-3">
                    <div className="text-yellow-400 font-bold">Less Stress</div>
                    <div className="text-gray-400 text-xs">Healthy pressure release</div>
                  </div>
                  <div className="bg-gaming-darker/30 rounded-lg p-3">
                    <div className="text-yellow-400 font-bold">Social Support</div>
                    <div className="text-gray-400 text-xs">Friends to talk to</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-pink-500/30 mb-8 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-44 h-44 bg-pink-500/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-6">The Skill Development Argument</h2>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Modern parents understand the value of skill development:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gaming-darker/50 rounded-lg p-6 border border-pink-500/20">
                  <h4 className="text-pink-400 font-bold mb-4">Pool Skills:</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Hand-eye coordination</li>
                    <li>• Geometric thinking</li>
                    <li>• Strategic planning</li>
                    <li>• Pressure management</li>
                  </ul>
                </div>
                <div className="bg-gaming-darker/50 rounded-lg p-6 border border-pink-500/20">
                  <h4 className="text-pink-400 font-bold mb-4">Gaming Skills:</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Quick decision making</li>
                    <li>• Team coordination</li>
                    <li>• Problem solving</li>
                    <li>• Reaction time improvement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-400/20 via-red-500/20 to-pink-500/20 backdrop-blur-xl rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">The Final Pitch</h2>
              <p className="text-gray-300 leading-relaxed text-center mb-4 text-lg">
                "Look, I understand your concerns. But this isn't just mindless entertainment - it's a safe, social, affordable way for me to unwind, make friends, and develop skills. Would you rather I hang out at uncertain places, or at a professional establishment where you know exactly where I am and what I'm doing?"
              </p>
              <p className="text-gray-300 leading-relaxed text-center mb-4">
                "Plus, you've raised me well enough to make good choices. Trust that I'm using this as a healthy outlet, not an escape from responsibility."
              </p>
              <div className="text-center">
                <p className="text-white font-bold text-lg">
                  "Maybe you should visit sometime and see for yourself what all the fuss is about."
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="bg-gradient-to-r from-orange-400/20 via-red-500/20 to-pink-400/20 backdrop-blur-xl rounded-3xl p-10 border border-white/20 text-center mt-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 via-red-500/5 to-pink-400/5 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Bring Your Parents for a Visit!</h3>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Sometimes seeing is believing. Invite your parents to Cuephoria and let them experience our welcoming community firsthand.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-400 via-red-500 to-pink-400 p-[2px] rounded-full hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gaming-darker px-8 py-4 rounded-full flex items-center gap-3">
                    <Users className="h-5 w-5 text-orange-400" />
                    <span className="font-bold text-white">Plan a Family Visit</span>
                  </div>
                </Link>
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center gap-3 bg-gaming-darker/50 backdrop-blur-sm border border-orange-400/30 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:border-orange-400/60"
                >
                  <Heart className="h-5 w-5 text-orange-400" />
                  <span className="text-white">Book a Session</span>
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

export default BlogPost5;
