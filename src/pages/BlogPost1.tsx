import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Heart, MapPin, Users, Gamepad2, Sparkles, Target } from 'lucide-react';
import SEOMetadata from '../components/SEOMetadata';
import Footer from '../components/Footer';

const BlogPost1 = () => {
  return (
    <div className="min-h-screen bg-gaming-darker text-white overflow-hidden">
      <SEOMetadata
        title="Why We Started Cuephoria: A Story from the Heart of Trichy"
        description="The inspiring story behind Cuephoria's founding - from a broken controller moment to becoming Trichy's premier gaming destination."
        keywords="Cuephoria story, gaming lounge founding story, Trichy gaming history, why Cuephoria started"
      />
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <article className="relative py-12 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-pink transition-all duration-300 mb-8 hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-semibold">Back to Stories</span>
          </Link>

          {/* Enhanced Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-pink/20 to-purple-500/20 rounded-full border border-neon-pink/30">
                <Heart className="h-4 w-4 text-neon-pink animate-pulse" />
                <span className="text-neon-pink font-bold text-sm uppercase tracking-wider">Our Story</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-neon-blue via-purple-400 to-neon-pink bg-clip-text text-transparent">
                Why We Started Cuephoria: A Story from the Heart of Trichy
              </span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-neon-pink animate-pulse" />
                <span className="text-neon-pink">Founding Story</span>
              </div>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden mb-8 group">
              <img
                src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Cuephoria Gaming Lounge - The Beginning"
                className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gaming-darker/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white/80 text-sm">The dream begins - May 3rd, 2025</div>
            </div>
          </header>

          {/* Enhanced Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-gradient-to-r from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-neon-blue/30 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-neon-blue mb-6 flex items-center gap-3">
                <Gamepad2 className="h-8 w-8 animate-pulse" />
                The Dream That Started with a Broken Controller
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                You know that feeling when you're at a friend's place, deep into an intense FIFA match, and suddenly their controller starts acting up? The left joystick drifts, the R2 button sticks, and your perfectly timed shot goes wide. That was me, in early May 2025, sitting in a cramped room with five other guys, trying to enjoy what should have been an epic gaming session.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                "There has to be a better way," I remember thinking. "Why isn't there a place in Trichy where we can game properly?"
              </p>
              <p className="text-gray-300 leading-relaxed">
                That night, sketching ideas on the back of my notebook, the concept of Cuephoria was born. Not just another gaming café, but a real community space where students and friends could hang out without worrying about broken equipment, noisy neighbors, or time limits imposed by annoyed roommates.
              </p>
            </div>

            <div className="bg-gradient-to-l from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-neon-pink/30 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-neon-pink/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-neon-pink mb-6">The Reality Check</h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                Starting a gaming lounge in Trichy wasn't exactly what you'd call a "safe" business decision. Everyone kept asking - "Will people really pay to play games they could play at home?" But here's what they didn't understand: it was never just about the games.
              </p>
              <p className="text-gray-300 leading-relaxed">
                It was about that moment when a shy engineering student finally beats their overconfident friend at pool and the whole place erupts in cheers. It was about giving college groups a place to celebrate project submissions with a proper gaming tournament. It was about creating memories that last way longer than any high score.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-neon-blue/30 mb-8 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-neon-blue mb-6">What Makes Us Different</h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                We obsess over the little things. Every PS5 controller gets checked daily. Our pool tables are leveled weekly. We even have backup controllers charged and ready because we know how frustrating it is when gear fails during a crucial moment.
              </p>
              <p className="text-gray-300 leading-relaxed">
                But more than that, we've built something special with our pricing. When we saw how much students were struggling with entertainment budgets, we introduced our membership system. ₹199 gets you a whole month of 50% off everything - that's less than what you'd spend on one night out, but it covers an entire month of gaming and pool.
              </p>
            </div>

            <div className="bg-gradient-to-l from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-neon-pink/30 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-36 h-36 bg-neon-pink/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-neon-pink mb-6 flex items-center gap-3">
                <MapPin className="h-8 w-8 animate-pulse" />
                The Thiruverumbur Effect
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                Choosing Thiruverumbur wasn't random. This area is buzzing with students, young professionals, and families who wanted something better than cramped gaming setups or expensive entertainment options in the city center. We're right here in your neighborhood, open until 11 PM because we know some of the best gaming happens after dinner when the day's stress melts away.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gaming-darker/50 to-gaming-darker/30 backdrop-blur-xl rounded-2xl p-8 border border-neon-blue/30 mb-8 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-44 h-44 bg-neon-blue/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-neon-blue mb-6">Where We're Heading</h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                Every day, watching friends bond over 8-ball pool or seeing someone discover their new favorite PS5 game reminds us why we started this journey. Cuephoria isn't just our business - it's our contribution to making Trichy a more fun place to live.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Come by sometime. Grab a controller, challenge someone to pool, and become part of the story we're still writing.
              </p>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="bg-gradient-to-r from-neon-pink/20 via-purple-500/20 to-neon-blue/20 backdrop-blur-xl rounded-3xl p-10 border border-white/20 text-center mt-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/5 via-purple-500/5 to-neon-blue/5 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Be Part of Our Story?</h3>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Visit Cuephoria and create your own gaming memories in the heart of Trichy. Since May 3rd, 2025, we've been building something special.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-neon-pink via-purple-500 to-neon-blue p-[2px] rounded-full hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gaming-darker px-8 py-4 rounded-full flex items-center gap-3">
                    <Gamepad2 className="h-5 w-5 text-neon-pink" />
                    <span className="font-bold text-white">Book Your Session</span>
                  </div>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-gaming-darker/50 backdrop-blur-sm border border-neon-blue/30 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:border-neon-blue/60"
                >
                  <MapPin className="h-5 w-5 text-neon-blue" />
                  <span className="text-white">Visit Us</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Enhanced Related Posts */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Continue Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to="/blog/ultimate-student-hangout"
                className="bg-gaming-darker/30 backdrop-blur-lg rounded-2xl p-6 border border-gaming-accent/30 hover:border-neon-blue/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-5 w-5 text-neon-blue animate-pulse" />
                  <span className="text-neon-blue font-semibold text-sm">Student Life</span>
                </div>
                <h4 className="text-lg font-bold mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  The Ultimate Student Hangout
                </h4>
                <p className="text-gray-400 text-sm">
                  Why Cuephoria is perfect for college life and student budgets.
                </p>
              </Link>
              
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
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost1;
