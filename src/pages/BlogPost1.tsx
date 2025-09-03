import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Heart, MapPin, Users, Gamepad2 } from 'lucide-react';
import SEOMetadata from '../components/SEOMetadata';
import Footer from '../components/Footer';

const BlogPost1 = () => {
  return (
    <div className="min-h-screen bg-gaming-darker text-white">
      <SEOMetadata
        title="Why We Started Cuephoria: A Story from the Heart of Trichy"
        description="The inspiring story behind Cuephoria's founding - from a broken controller moment to becoming Trichy's premier gaming destination."
        keywords="Cuephoria story, gaming lounge founding story, Trichy gaming history, why Cuephoria started"
      />
      
      <article className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gaming-darker">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,78,221,0.1)_0,rgba(15,25,40,0.5)_100%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-pink transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-neon-pink" />
              <span className="text-neon-pink font-semibold text-sm uppercase tracking-wider">Our Story</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-neon-blue via-purple-400 to-neon-pink bg-clip-text text-transparent">
                Why We Started Cuephoria: A Story from the Heart of Trichy
              </span>
            </h1>
            
            <div className="flex items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img
                src="/lovable-uploads/bf64c942-20de-45f0-a655-188a21952fc4.png"
                alt="Cuephoria Gaming Lounge"
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gaming-darker/50 to-transparent"></div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-gaming-darker/30 backdrop-blur-lg rounded-xl p-8 border border-neon-blue/30 mb-8">
              <h2 className="text-2xl font-bold text-neon-blue mb-4 flex items-center gap-2">
                <Gamepad2 className="h-6 w-6" />
                The Dream That Started with a Broken Controller
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You know that feeling when you're at a friend's place, deep into an intense FIFA match, and suddenly their controller starts acting up? The left joystick drifts, the R2 button sticks, and your perfectly timed shot goes wide. That was me, three years ago, sitting in a cramped room with five other guys, trying to enjoy what should have been an epic gaming session.
              </p>
              <p className="text-gray-300 leading-relaxed">
                "There has to be a better way," I remember thinking. "Why isn't there a place in Trichy where we can game properly?"
              </p>
              <p className="text-gray-300 leading-relaxed">
                That night, sketching ideas on the back of my engineering notebook, the concept of Cuephoria was born. Not just another gaming café, but a real community space where students and friends could hang out without worrying about broken equipment, noisy neighbors, or time limits imposed by annoyed roommates.
              </p>
            </div>

            <div className="bg-gaming-darker/30 backdrop-blur-lg rounded-xl p-8 border border-neon-pink/30 mb-8">
              <h2 className="text-2xl font-bold text-neon-pink mb-4">The Reality Check</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Starting a gaming lounge in Trichy wasn't exactly what you'd call a "safe" business decision. Everyone kept asking - "Will people really pay to play games they could play at home?" But here's what they didn't understand: it was never just about the games.
              </p>
              <p className="text-gray-300 leading-relaxed">
                It was about that moment when a shy engineering student finally beats their overconfident friend at pool and the whole place erupts in cheers. It was about giving college groups a place to celebrate project submissions with a proper gaming tournament. It was about creating memories that last way longer than any high score.
              </p>
            </div>

            <div className="bg-gaming-darker/30 backdrop-blur-lg rounded-xl p-8 border border-neon-blue/30 mb-8">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">What Makes Us Different</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We obsess over the little things. Every PS5 controller gets checked daily. Our pool tables are leveled weekly. We even have backup controllers charged and ready because we know how frustrating it is when gear fails during a crucial moment.
              </p>
              <p className="text-gray-300 leading-relaxed">
                But more than that, we've built something special with our pricing. When we saw how much students were struggling with entertainment budgets, we introduced our membership system. ₹199 gets you a whole month of 50% off everything - that's less than what you'd spend on one night out, but it covers an entire month of gaming and pool.
              </p>
            </div>

            <div className="bg-gaming-darker/30 backdrop-blur-lg rounded-xl p-8 border border-neon-pink/30 mb-8">
              <h2 className="text-2xl font-bold text-neon-pink mb-4 flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                The Thiruverumbur Effect
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Choosing Thiruverumbur wasn't random. This area is buzzing with students, young professionals, and families who wanted something better than cramped gaming setups or expensive entertainment options in the city center. We're right here in your neighborhood, open until 11 PM because we know some of the best gaming happens after dinner when the day's stress melts away.
              </p>
            </div>

            <div className="bg-gaming-darker/30 backdrop-blur-lg rounded-xl p-8 border border-neon-blue/30 mb-8">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Where We're Heading</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Every day, watching friends bond over 8-ball pool or seeing someone discover their new favorite PS5 game reminds us why we started this journey. Cuephoria isn't just our business - it's our contribution to making Trichy a more fun place to live.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Come by sometime. Grab a controller, challenge someone to pool, and become part of the story we're still writing.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-neon-pink/20 via-purple-500/20 to-neon-blue/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center mt-12">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Be Part of Our Story?</h3>
            <p className="text-gray-300 mb-6">
              Visit Cuephoria and create your own gaming memories in the heart of Trichy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 bg-neon-pink/90 hover:bg-neon-pink text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                <Gamepad2 className="h-5 w-5" />
                Book Your Session
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-neon-blue/90 hover:bg-neon-blue text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                <MapPin className="h-5 w-5" />
                Visit Us
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Continue Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to="/blog/ultimate-student-hangout"
                className="bg-gaming-darker/30 backdrop-blur-lg rounded-xl p-6 border border-gaming-accent/30 hover:border-neon-blue/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Users className="h-5 w-5 text-neon-blue" />
                  <span className="text-neon-blue font-semibold text-sm">Student Life</span>
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-neon-blue transition-colors duration-300">
                  The Ultimate Student Hangout
                </h4>
                <p className="text-gray-400 text-sm">
                  Why Cuephoria is perfect for college life and student budgets.
                </p>
              </Link>
              
              <Link
                to="/blog/nervous-beginner-to-pool-pro"
                className="bg-gaming-darker/30 backdrop-blur-lg rounded-xl p-6 border border-gaming-accent/30 hover:border-neon-blue/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Users className="h-5 w-5 text-neon-pink" />
                  <span className="text-neon-pink font-semibold text-sm">Player Stories</span>
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-neon-pink transition-colors duration-300">
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
