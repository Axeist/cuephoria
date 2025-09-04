import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Eye, MessageCircle, GraduationCap, ArrowRight, MapPin } from 'lucide-react';
import SEOMetadata from '../components/SEOMetadata';
import Footer from '../components/Footer';

const BlogPost7 = () => {
  return (
    <div className="min-h-screen bg-gaming-darker text-white">
      <SEOMetadata
        title="NIT50 Discount: 50% Off Pool Tables for NIT Trichy Students | Cuephoria"
        description="Exclusive NIT50 offer - 50% discount on all pool tables for NIT Trichy students with valid ID. Making quality gaming affordable for students."
        keywords="NIT50, NIT Trichy discount, student discount pool, Cuephoria NIT offer"
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-pink transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Blog</span>
        </Link>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5 text-neon-blue" />
              <span className="text-neon-blue font-semibold">Student Discounts</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-purple-400 to-neon-pink bg-clip-text text-transparent">
              NIT50 Discount: 50% Off Pool Tables Exclusively for NIT Trichy Students
            </h1>
            
            <div className="flex items-center gap-6 text-gray-400 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 28, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>4 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>2.8k views</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>15 comments</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1606889464198-fcb18894cf50?w=800&h=400&fit=crop" 
              alt="NIT50 Student Discount" 
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-gray-300">
            <p className="text-xl leading-relaxed mb-8">
              We know being a student isn't easy. Between rigorous coursework, projects, and exams, NIT Trichy students deserve quality recreation without breaking the bank. That's why we're thrilled to introduce our <strong className="text-neon-blue">NIT50 discount</strong> - 50% off all pool table sessions exclusively for NIT students!
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">How NIT50 Works</h2>
            <p className="mb-6">
              Simply show your valid NIT Trichy student ID at our counter, and instantly get 50% off your pool table booking. Whether you're playing solo to clear your mind or with friends for some competitive fun, this discount makes premium gaming accessible.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">Why We Created This Offer</h2>
            <p className="mb-6">
              As a local business in Trichy, we've watched NIT students struggle to find affordable, quality entertainment options. Engineering is stressful enough without worrying about recreation costs. Our NIT50 discount is our way of supporting the brilliant minds shaping our future.
            </p>

            <blockquote className="border-l-4 border-neon-pink pl-6 py-4 bg-gaming-darker/50 rounded-r-lg mb-8">
              <p className="text-lg italic text-gray-200">
                "Finally! A discount that actually helps broke engineering students like us. Used this offer yesterday, saved ₹300! Thanks Cuephoria."
              </p>
              <footer className="text-neon-blue font-semibold mt-2">- Kavitha M, Computer Science, NIT Trichy</footer>
            </blockquote>

            <div className="bg-gradient-to-r from-neon-blue/10 via-purple-500/10 to-neon-pink/10 p-8 rounded-2xl border border-neon-blue/30 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Game?</h3>
              <p className="mb-6">
                Bring your student ID and friends. It's time to experience premium gaming without the premium price!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/book" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-blue via-purple-500 to-neon-pink p-[2px] rounded-full hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gaming-darker px-8 py-4 rounded-full flex items-center gap-3">
                    <span className="font-bold text-white">Book Your NIT50 Session</span>
                    <ArrowRight className="h-4 w-4 text-neon-pink" />
                  </div>
                </Link>
                
                <Link 
                  to="https://maps.app.goo.gl/vUNCsMkiMEgHfbVPA" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gaming-darker/50 backdrop-blur-sm border border-neon-blue/30 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:border-neon-blue/60"
                >
                  <MapPin className="h-5 w-5 text-neon-blue" />
                  <span className="text-white">Visit Our Lounge</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-16 pt-8 border-t border-gaming-accent/30">
            <h3 className="text-2xl font-bold mb-8">Comments</h3>
            <div className="space-y-6">
              <div className="bg-gaming-darker/30 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-neon-blue/20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-neon-blue">A</span>
                  </div>
                  <div>
                    <div className="font-semibold">Aditya Sharma</div>
                    <div className="text-sm text-gray-400">2 days ago</div>
                  </div>
                </div>
                <p className="text-gray-300">Finally! A discount that actually helps broke engineering students like us.</p>
              </div>
              
              <div className="bg-gaming-darker/30 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-neon-pink/20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-neon-pink">R</span>
                  </div>
                  <div>
                    <div className="font-semibold">Rohit Krishnan</div>
                    <div className="text-sm text-gray-400">1 day ago</div>
                  </div>
                </div>
                <p className="text-gray-300">NIT students deserve this. Engineering is stressful enough!</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost7;
