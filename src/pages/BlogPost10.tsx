import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Eye, MessageCircle, Heart, ArrowRight, MapPin } from 'lucide-react';
import SEOMetadata from '../components/SEOMetadata';
import Footer from '../components/Footer';

const BlogPost10 = () => {
  return (
    <div className="min-h-screen bg-gaming-darker text-white">
      <SEOMetadata
        title="Gaming as Stress Relief: What NIT Students Are Discovering | Wellness"
        description="Research shows gaming helps with stress. NIT students are living proof of this phenomenon at Cuephoria gaming lounge."
        keywords="gaming stress relief, NIT students wellness, gaming mental health, student relaxation"
      />
      
      <div className="container mx-auto px-4 py-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-pink transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Blog</span>
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-neon-blue" />
              <span className="text-neon-blue font-semibold">Wellness</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent">
              Gaming as Stress Relief: What NIT Students Are Discovering
            </h1>
            
            <div className="flex items-center gap-6 text-gray-400 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 18, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>2.3k views</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>20 comments</span>
              </div>
            </div>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop" 
              alt="Gaming as Stress Relief" 
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-300">
            <p className="text-xl leading-relaxed mb-8">
              Engineering at NIT Trichy isn't just academically rigorous - it's emotionally and mentally demanding. Between complex assignments, competitive exams, and placement pressure, students need effective ways to decompress. What we've discovered at Cuephoria is that gaming isn't just entertainment; it's becoming a vital tool for mental wellness.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">The Science Behind Gaming and Stress Relief</h2>
            <p className="mb-6">
              Research from leading psychology journals shows that gaming can significantly reduce cortisol levels - the body's primary stress hormone. When students engage in pool or video games, their minds shift from academic worries to immediate, manageable challenges with clear rules and achievable goals.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">What NIT Students Are Saying</h2>
            <div className="space-y-6 mb-8">
              <blockquote className="border-l-4 border-pink-500 pl-6 py-4 bg-gaming-darker/50 rounded-r-lg">
                <p className="text-lg italic text-gray-200">
                  "Pool really helps me clear my head after tough coding sessions. It's like meditation, but more fun."
                </p>
                <footer className="text-pink-400 font-semibold mt-2">- Ravi Shankar, Computer Science, 3rd Year</footer>
              </blockquote>
              
              <blockquote className="border-l-4 border-rose-500 pl-6 py-4 bg-gaming-darker/50 rounded-r-lg">
                <p className="text-lg italic text-gray-200">
                  "My anxiety levels dropped after I started gaming regularly here. Better than scrolling social media during breaks!"
                </p>
                <footer className="text-rose-400 font-semibold mt-2">- Arjun Reddy, Electrical Engineering, 4th Year</footer>
              </blockquote>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">The Cuephoria Difference</h2>
            <p className="mb-6">
              What makes gaming at Cuephoria particularly therapeutic is the social aspect. Unlike solitary gaming, our environment encourages interaction, shared laughter, and mutual support. Students often arrive stressed and leave with new friendships and refreshed perspectives.
            </p>

            <div className="bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-red-500/10 p-8 rounded-2xl border border-pink-500/30 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Benefits We've Observed</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-pink-400 mb-2">Mental Benefits</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Reduced anxiety levels</li>
                    <li>• Improved focus</li>
                    <li>• Better mood regulation</li>
                    <li>• Enhanced problem-solving skills</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-rose-400 mb-2">Social Benefits</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Stronger peer connections</li>
                    <li>• Improved communication</li>
                    <li>• Stress-sharing opportunities</li>
                    <li>• Healthy competition</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Making Gaming Part of Your Wellness Routine</h2>
            <p className="mb-8">
              The key is balance and intentionality. We recommend 30-45 minute gaming sessions as study breaks, group gaming for social connection, and solo play for personal reflection. It's not about escaping reality but about building resilience for life's challenges.
            </p>

            <div className="bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-red-500/10 p-8 rounded-2xl border border-pink-500/30 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience Gaming Wellness?</h3>
              <p className="mb-6">
                Join hundreds of NIT students who've discovered the stress-relief benefits of gaming. Your mental health deserves this investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/book" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 p-[2px] rounded-full hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gaming-darker px-8 py-4 rounded-full flex items-center gap-3">
                    <span className="font-bold text-white">Book a Wellness Session</span>
                    <ArrowRight className="h-4 w-4 text-pink-400" />
                  </div>
                </Link>
                
                <Link 
                  to="https://maps.app.goo.gl/vUNCsMkiMEgHfbVPA" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gaming-darker/50 backdrop-blur-sm border border-pink-500/30 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:border-pink-500/60"
                >
                  <MapPin className="h-5 w-5 text-pink-400" />
                  <span className="text-white">Find Your Way Here</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gaming-accent/30">
            <h3 className="text-2xl font-bold mb-8">Comments</h3>
            <div className="space-y-6">
              <div className="bg-gaming-darker/30 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-pink-400">R</span>
                  </div>
                  <div>
                    <div className="font-semibold">Ravi Shankar</div>
                    <div className="text-sm text-gray-400">5 days ago</div>
                  </div>
                </div>
                <p className="text-gray-300">Pool really helps me clear my head after tough coding sessions.</p>
              </div>
              
              <div className="bg-gaming-darker/30 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-rose-500/20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-rose-400">L</span>
                  </div>
                  <div>
                    <div className="font-semibold">Lakshmi Nair</div>
                    <div className="text-sm text-gray-400">4 days ago</div>
                  </div>
                </div>
                <p className="text-gray-300">Better than scrolling social media during breaks, that's for sure!</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost10;
