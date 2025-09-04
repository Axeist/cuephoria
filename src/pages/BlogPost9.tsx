import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Eye, MessageCircle, Users, ArrowRight, MapPin } from 'lucide-react';
import SEOMetadata from '../components/SEOMetadata';
import Footer from '../components/Footer';

const BlogPost9 = () => {
  return (
    <div className="min-h-screen bg-gaming-darker text-white">
      <SEOMetadata
        title="How Cuephoria is Shaping NIT Trichy's Gaming Culture | Student Life"
        description="From stressed engineering students to confident gamers - witness the transformation happening at NIT Trichy through Cuephoria's gaming community."
        keywords="NIT Trichy gaming culture, student gaming, engineering stress relief, campus culture"
      />
      
      <div className="container mx-auto px-4 py-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-pink transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Blog</span>
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-neon-blue" />
              <span className="text-neon-blue font-semibold">Campus Culture</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              How Cuephoria is Shaping NIT Trichy's Gaming Culture
            </h1>
            
            <div className="flex items-center gap-6 text-gray-400 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 20, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>6 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>1.9k views</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>12 comments</span>
              </div>
            </div>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop" 
              alt="NIT Trichy Gaming Culture" 
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-300">
            <p className="text-xl leading-relaxed mb-8">
              Walk into any NIT Trichy hostel today, and you'll hear it - the sound of friendly competition, strategic discussions about game tactics, and the excited cheers of victory. Gaming culture at one of India's premier engineering institutes has evolved dramatically, and Cuephoria has been proud to be part of this transformation.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">The Old Days vs. Now</h2>
            <p className="mb-6">
              Three years ago, gaming was often seen as a guilty pleasure - something students did secretly in their hostel rooms. Today, it's a legitimate part of campus social life. Pool tournaments draw crowds, gaming sessions are planned study breaks, and skill development is celebrated.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">Building Bridges Across Departments</h2>
            <p className="mb-6">
              One of the most beautiful aspects of gaming culture at NIT is how it breaks down departmental barriers. We regularly see Computer Science students coaching Mechanical Engineering peers in FIFA, while Civil Engineering students dominate our pool tournaments. Gaming has become the universal language on campus.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gaming-darker/50 p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Before</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Gaming seen as time-wasting</li>
                  <li>• Limited social interaction</li>
                  <li>• High stress with few outlets</li>
                  <li>• Department-wise cliques</li>
                </ul>
              </div>
              <div className="bg-gaming-darker/50 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Now</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Gaming as legitimate recreation</li>
                  <li>• Strong community bonds</li>
                  <li>• Healthy stress management</li>
                  <li>• Cross-department friendships</li>
                </ul>
              </div>
            </div>

            <blockquote className="border-l-4 border-purple-600 pl-6 py-4 bg-gaming-darker/50 rounded-r-lg mb-8">
              <p className="text-lg italic text-gray-200">
                "Gaming has become a legit stress buster for us NITians now. The gaming community at NIT has grown so much thanks to places like this."
              </p>
              <footer className="text-purple-400 font-semibold mt-2">- Suresh Kumar, Final Year Electrical, NIT Trichy</footer>
            </blockquote>

            <h2 className="text-3xl font-bold text-white mb-6">The Ripple Effect</h2>
            <p className="mb-8">
              This cultural shift extends beyond just entertainment. We've noticed improved teamwork in academic projects, better stress management during exam periods, and stronger peer support systems. Gaming skills like strategic thinking, quick decision-making, and grace under pressure directly benefit academic performance.
            </p>

            <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 p-8 rounded-2xl border border-blue-600/30 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Join the Movement</h3>
              <p className="mb-6">
                Be part of NIT Trichy's evolving gaming culture. Whether you're a complete beginner or seasoned player, there's a place for you in our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/book" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-[2px] rounded-full hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gaming-darker px-8 py-4 rounded-full flex items-center gap-3">
                    <span className="font-bold text-white">Join Our Community</span>
                    <ArrowRight className="h-4 w-4 text-blue-400" />
                  </div>
                </Link>
                
                <Link 
                  to="https://maps.app.goo.gl/vUNCsMkiMEgHfbVPA" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gaming-darker/50 backdrop-blur-sm border border-blue-600/30 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:border-blue-600/60"
                >
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-white">Visit Our Space</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gaming-accent/30">
            <h3 className="text-2xl font-bold mb-8">Comments</h3>
            <div className="space-y-6">
              <div className="bg-gaming-darker/30 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-blue-400">A</span>
                  </div>
                  <div>
                    <div className="font-semibold">Ankit Gupta</div>
                    <div className="text-sm text-gray-400">4 days ago</div>
                  </div>
                </div>
                <p className="text-gray-300">Gaming has become a legit stress buster for us NITians now.</p>
              </div>
              
              <div className="bg-gaming-darker/30 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-purple-400">D</span>
                  </div>
                  <div>
                    <div className="font-semibold">Deepika Rao</div>
                    <div className="text-sm text-gray-400">3 days ago</div>
                  </div>
                </div>
                <p className="text-gray-300">Never thought I'd be good at pool until I started coming here regularly.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost9;
