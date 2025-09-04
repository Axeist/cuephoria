import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Eye, MessageCircle, Zap, ArrowRight, MapPin } from 'lucide-react';
import SEOMetadata from '../components/SEOMetadata';
import Footer from '../components/Footer';

const BlogPost8 = () => {
  return (
    <div className="min-h-screen bg-gaming-darker text-white">
      <SEOMetadata
        title="NIT99 Happy Hours: Play Pool for Just ₹99 from 11 AM to 3 PM | Cuephoria"
        description="Beat the afternoon blues! NIT students can enjoy premium pool gaming for just ₹99 during our special happy hours from 11 AM to 3 PM."
        keywords="NIT99, happy hours, student discount, pool gaming, NIT Trichy"
      />
      
      <div className="container mx-auto px-4 py-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-pink transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Blog</span>
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-neon-blue" />
              <span className="text-neon-blue font-semibold">Special Offers</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              NIT99 Happy Hours: Play Pool for Just ₹99 from 11 AM to 3 PM
            </h1>
            
            <div className="flex items-center gap-6 text-gray-400 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 25, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>3 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>3.2k views</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>18 comments</span>
              </div>
            </div>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=800&h=400&fit=crop" 
              alt="NIT99 Happy Hours" 
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-300">
            <p className="text-xl leading-relaxed mb-8">
              That afternoon energy dip between classes? We've got the perfect solution! Introducing <strong className="text-amber-500">NIT99 Happy Hours</strong> - premium pool gaming for just ₹99 from 11 AM to 3 PM, exclusively for NIT students.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">Perfect Timing for Students</h2>
            <p className="mb-6">
              We know your schedule. Those long gaps between morning and evening classes can be challenging. Instead of scrolling through your phone or taking boring naps, why not sharpen your pool skills for less than the cost of a movie ticket?
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">What Makes This Special</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Premium pool tables at student-friendly prices</li>
              <li>Perfect 4-hour window for maximum flexibility</li>
              <li>Great for solo practice or group competitions</li>
              <li>Air-conditioned comfort during hot afternoons</li>
              <li>Available every day of the week</li>
            </ul>

            <blockquote className="border-l-4 border-amber-500 pl-6 py-4 bg-gaming-darker/50 rounded-r-lg mb-8">
              <p className="text-lg italic text-gray-200">
                "Perfect timing between classes! ₹99 is such a steal. My friends and I pool money (pun intended) and play during happy hours."
              </p>
              <footer className="text-amber-500 font-semibold mt-2">- Shreya Patel, Mechanical Engineering, NIT Trichy</footer>
            </blockquote>

            <h2 className="text-3xl font-bold text-white mb-6">How to Claim Your NIT99</h2>
            <p className="mb-8">
              Simply walk in with your NIT student ID between 11 AM and 3 PM. No advance booking required! First-come, first-served basis ensures everyone gets a fair chance.
            </p>

            <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 p-8 rounded-2xl border border-amber-500/30 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready for Happy Hours?</h3>
              <p className="mb-6">
                Grab your student ID and head over during our happy hours. Your afternoon just got a lot more exciting!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/book" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-[2px] rounded-full hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gaming-darker px-8 py-4 rounded-full flex items-center gap-3">
                    <span className="font-bold text-white">Book Your Session</span>
                    <ArrowRight className="h-4 w-4 text-amber-400" />
                  </div>
                </Link>
                
                <Link 
                  to="https://maps.app.goo.gl/vUNCsMkiMEgHfbVPA" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gaming-darker/50 backdrop-blur-sm border border-amber-500/30 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:border-amber-500/60"
                >
                  <MapPin className="h-5 w-5 text-amber-500" />
                  <span className="text-white">Get Directions</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gaming-accent/30">
            <h3 className="text-2xl font-bold mb-8">Comments</h3>
            <div className="space-y-6">
              <div className="bg-gaming-darker/30 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-amber-500">P</span>
                  </div>
                  <div>
                    <div className="font-semibold">Priya Sundaram</div>
                    <div className="text-sm text-gray-400">3 days ago</div>
                  </div>
                </div>
                <p className="text-gray-300">Perfect timing between classes! ₹99 is such a steal.</p>
              </div>
              
              <div className="bg-gaming-darker/30 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-orange-500">V</span>
                  </div>
                  <div>
                    <div className="font-semibold">Vikram Das</div>
                    <div className="text-sm text-gray-400">2 days ago</div>
                  </div>
                </div>
                <p className="text-gray-300">Been coming every Tuesday during lunch break. Love this deal!</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost8;
