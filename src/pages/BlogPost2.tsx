import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Users, GraduationCap, BookOpen, Coffee, Heart, Calculator, Target, Gamepad2, Sparkles } from 'lucide-react';
import SEOMetadata from '../components/SEOMetadata';
import Footer from '../components/Footer';

const BlogPost2 = () => {
  return (
    <div className="min-h-screen bg-gaming-darker text-white overflow-hidden">
      <SEOMetadata
        title="The Ultimate Student Hangout: Why Cuephoria is Perfect for College Life"
        description="Discover why Cuephoria has become the go-to hangout spot for students in Trichy - affordable pricing, perfect ambiance, and student-friendly environment."
        keywords="student hangout Trichy, college hangout spot, student gaming cafe, affordable gaming Trichy, student discounts"
      />
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-purple-500/20 rounded-full border border-neon-blue/30">
                <Users className="h-4 w-4 text-neon-blue animate-pulse" />
                <span className="text-neon-blue font-bold text-sm uppercase tracking-wider">Student Life</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-neon-blue via-purple-400 to-neon-pink bg-clip-text text-transparent">
                The Ultimate Student Hangout: Why Cuephoria is Perfect for College Life
              </span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 1, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>4 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-neon-blue animate-pulse" />
                <span className="text-neon-blue">Student Focus</span>
              </div>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden mb-8 group">
              <img
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Students enjoying gaming at Cuephoria"
                className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gaming-darker/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white/80 text-sm">Perfect student hangout atmosphere</div>
            </div>
          </header>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-gradient-to-r from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-neon-blue/30 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-neon-blue mb-6 flex items-center gap-3">
                <BookOpen className="h-8 w-8 animate-pulse" />
                When College Life Needs More Than Just Textbooks
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                Picture this: it's 7 PM on a Wednesday. You've been staring at the same assignment for three hours, your brain is fried, and your roommate is blasting music while video-calling their family. You need an escape, but where do you go in Trichy that won't break your already-stretched student budget?
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                That's exactly why we built Cuephoria with students in mind. We get it - college life is expensive enough without having to choose between fun and food money.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Since opening our doors on May 3rd, 2025, we've become the unofficial second home for hundreds of students across Trichy's colleges.
              </p>
            </div>

            <div className="bg-gradient-to-l from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-neon-pink/30 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-neon-pink/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-neon-pink mb-6 flex items-center gap-3">
                <Calculator className="h-8 w-8 animate-pulse" />
                The Math That Actually Makes Sense
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                Let's talk numbers (and not the boring assignment kind). Our monthly memberships are designed specifically for student budgets:
              </p>
              
              <div className="bg-gaming-darker/50 rounded-xl p-6 mb-6 border border-neon-blue/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon-blue mb-2">₹99*</div>
                    <div className="text-lg font-semibold text-white mb-2">Silver Membership</div>
                    <div className="text-sm text-gray-300">*With valid student ID</div>
                    <div className="text-sm text-gray-400 mt-2">Originally ₹199 - 50% student discount!</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon-pink mb-2">₹249*</div>
                    <div className="text-lg font-semibold text-white mb-2">Gold Membership</div>
                    <div className="text-sm text-gray-300">*With valid student ID</div>
                    <div className="text-sm text-gray-400 mt-2">Originally ₹349 - 50% student discount!</div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                That's less than ₹4 per day for unlimited access to PS5 gaming at 50% off, pool tables at half price, and a place to hang out with friends without anyone asking you to buy something every 20 minutes.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-neon-blue/30 mb-8 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-neon-blue mb-6">The Study Break Revolution</h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                We've watched engineering students celebrate surviving thermodynamics with epic FIFA tournaments. We've seen medical students decompress from anatomy exams by learning pool tricks. We've hosted impromptu birthday celebrations for students whose families are miles away.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The best part? We're open until 11 PM, which means you can actually finish your evening classes, grab dinner, and still have time for proper fun before heading back to your room.
              </p>
            </div>

            <div className="bg-gradient-to-l from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-neon-pink/30 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-36 h-36 bg-neon-pink/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-neon-pink mb-6">What Makes Us Different</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gaming-darker/30 rounded-lg p-4">
                  <h4 className="text-neon-blue font-bold mb-2 flex items-center gap-2">
                    <Coffee className="h-5 w-5" />
                    No Pressure Zone
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Stay as long as you want. No one's going to hint that you should order more food or give up your table.
                  </p>
                </div>
                
                <div className="bg-gaming-darker/30 rounded-lg p-4">
                  <h4 className="text-neon-pink font-bold mb-2 flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Study-Friendly Hours
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Open until 11 PM because we know student schedules don't follow normal human patterns.
                  </p>
                </div>
                
                <div className="bg-gaming-darker/30 rounded-lg p-4">
                  <h4 className="text-neon-blue font-bold mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Group Friendly
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Perfect for project groups, birthday celebrations, or just hanging out with your squad.
                  </p>
                </div>
                
                <div className="bg-gaming-darker/30 rounded-lg p-4">
                  <h4 className="text-neon-pink font-bold mb-2 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Skill Building
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Learn pool, improve your gaming skills, and actually have stories to tell your friends.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-neon-blue/30 mb-8 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-44 h-44 bg-neon-blue/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-neon-blue mb-6">Real Student Stories</h2>
              
              <blockquote className="border-l-4 border-neon-blue pl-6 italic text-gray-300 mb-6 text-lg">
                "I was struggling to make friends in my first year. Now our entire group meets here twice a week. It's become our tradition."
                <cite className="block text-neon-blue font-semibold mt-2 not-italic">- Priya, Engineering Student</cite>
              </blockquote>
              
              <blockquote className="border-l-4 border-neon-pink pl-6 italic text-gray-300 mb-6 text-lg">
                "The membership pays for itself. We calculated it - we save more money hanging out here than going to movies or restaurants."
                <cite className="block text-neon-pink font-semibold mt-2 not-italic">- Karthik, MBA Student</cite>
              </blockquote>
              
              <blockquote className="border-l-4 border-neon-blue pl-6 italic text-gray-300 text-lg">
                "My parents were worried I was spending too much time gaming. Then they visited and saw how social and active this place is. Now they ask when I'm going to Cuephoria next!"
                <cite className="block text-neon-blue font-semibold mt-2 not-italic">- Arun, Computer Science Student</cite>
              </blockquote>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="bg-gradient-to-r from-neon-pink/20 via-purple-500/20 to-neon-blue/20 backdrop-blur-xl rounded-3xl p-10 border border-white/20 text-center mt-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/5 via-purple-500/5 to-neon-blue/5 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Join the Student Community?</h3>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Bring your student ID and get instant access to the best student discounts in Trichy. Your new hangout spot is waiting!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-neon-pink via-purple-500 to-neon-blue p-[2px] rounded-full hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gaming-darker px-8 py-4 rounded-full flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-neon-pink" />
                    <span className="font-bold text-white">Get Student Membership</span>
                  </div>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-gaming-darker/50 backdrop-blur-sm border border-neon-blue/30 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:border-neon-blue/60"
                >
                  <Users className="h-5 w-5 text-neon-blue" />
                  <span className="text-white">Visit With Friends</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Enhanced Related Posts */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8 text-center">More Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to="/blog/nervous-beginner-to-pool-pro"
                className="bg-gaming-darker/30 backdrop-blur-lg rounded-2xl p-6 border border-gaming-accent/30 hover:border-neon-pink/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-5 w-5 text-neon-pink animate-pulse" />
                  <span className="text-neon-pink font-semibold text-sm">Player Stories</span>
                </div>
                <h4 className="text-lg font-bold mb-3 group-hover:text-neon-pink transition-colors duration-300">
                  From Nervous Beginner to Pool Pro
                </h4>
                <p className="text-gray-400 text-sm">
                  Real transformation stories from our pool tables.
                </p>
              </Link>
              
              <Link
                to="/blog/late-night-gaming-sessions"
                className="bg-gaming-darker/30 backdrop-blur-lg rounded-2xl p-6 border border-gaming-accent/30 hover:border-neon-blue/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Gamepad2 className="h-5 w-5 text-neon-blue animate-pulse" />
                  <span className="text-neon-blue font-semibold text-sm">Gaming Culture</span>
                </div>
                <h4 className="text-lg font-bold mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  Late Night Gaming Sessions
                </h4>
                <p className="text-gray-400 text-sm">
                  Why 11 PM is just the beginning at Cuephoria.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost2;
