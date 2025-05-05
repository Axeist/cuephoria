
import React, { useEffect, useRef } from 'react';
import { Calendar, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookNow = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  // This useEffect will properly initialize the Calendly inline widget
  useEffect(() => {
    // Make sure Calendly is loaded and the DOM element exists
    if (window.Calendly && calendlyRef.current) {
      // Clear any existing content
      calendlyRef.current.innerHTML = '';
      
      // Initialize the inline widget directly
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/cuephoriaclub/60min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=131e2c&text_color=01ffff&primary_color=ff2cef',
        parentElement: calendlyRef.current,
        prefill: {},
        utm: {}
      });
    }
  }, []);

  return (
    <section id="book-now" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,255,0.15)_0,rgba(15,25,40,0)_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to <span className="neon-text-blue">Play</span>?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Book your gaming or pool session now and prepare for an unforgettable experience at Cuephoria.
          </p>
          <Link 
            to="/book" 
            className="mt-6 inline-block px-8 py-3 bg-neon-pink text-white rounded-md hover:bg-neon-pink/80 transition-all duration-300"
          >
            Book on our dedicated booking page
          </Link>
        </div>
        
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          <div className="w-full lg:w-1/2">
            <div className="glass-card rounded-xl p-8 border border-neon-blue/20 h-full flex flex-col">
              {/* Calendly inline widget with ref for direct initialization - aligned left */}
              <div 
                ref={calendlyRef}
                className="w-full flex-grow h-[600px] text-left"
                style={{ textAlign: 'left' }}
              ></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="glass-card rounded-xl p-8 border border-neon-pink/20 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                <Calendar className="h-6 w-6 text-neon-blue mr-2" />
                Pricing & Packages
              </h3>
              
              <div className="space-y-6 flex-grow">
                <div className="flex justify-between items-center pb-4 border-b border-gaming-accent">
                  <div>
                    <h4 className="text-xl font-semibold text-neon-blue">Pool Table</h4>
                    <p className="text-gray-400">Per hour rate for billiards</p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl font-bold text-gray-400 line-through mr-3">₹300</div>
                    <div className="text-2xl font-bold text-white">₹150</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b border-gaming-accent">
                  <div>
                    <h4 className="text-xl font-semibold text-neon-pink">Gaming Station</h4>
                    <p className="text-gray-400">Per controller rate for PC/Console</p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl font-bold text-gray-400 line-through mr-3">₹150</div>
                    <div className="text-2xl font-bold text-white">₹75</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b border-gaming-accent">
                  <div>
                    <h4 className="text-xl font-semibold text-neon-blue">Metashot Challenges</h4>
                    <p className="text-gray-400">Per challenge</p>
                  </div>
                  <div className="text-2xl font-bold text-white">FREE</div>
                </div>
                
                <div className="pt-4">
                  <h4 className="text-xl font-semibold mb-4 text-white">Special Packages</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-300">2-Hour Gaming Bundle</span>
                      <span className="text-neon-blue font-semibold">₹350</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-300">Weekly Pass</span>
                      <span className="text-neon-blue font-semibold">₹399</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-300">Monthly Pass</span>
                      <span className="text-neon-blue font-semibold">₹1499</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-300">Student Discount on Passes</span>
                      <span className="text-neon-pink font-semibold">₹100 OFF</span>
                    </li>
                  </ul>
                </div>
                
                {/* Enhanced loyalty points section with better alignment */}
                <div className="pt-4 border-t border-gaming-accent mt-4">
                  <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
                    <Award className="h-5 w-5 text-neon-pink mr-2" />
                    Loyalty Program
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-neon-pink/20 flex items-center justify-center mr-2">
                          <Award className="h-4 w-4 text-neon-pink" />
                        </div>
                        <span className="text-gray-300">Non-members earn</span>
                      </div>
                      <span className="text-neon-blue font-semibold">2 pts per ₹100</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-neon-blue/20 flex items-center justify-center mr-2">
                          <Award className="h-4 w-4 text-neon-blue" />
                        </div>
                        <span className="text-gray-300">Members earn</span>
                      </div>
                      <span className="text-neon-blue font-semibold">5 pts per ₹100</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-gray-300">Point value</span>
                      </div>
                      <span className="text-neon-pink font-semibold">₹1 per point</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-2 text-center">
                  <p className="text-gray-400 text-sm">
                    * Online bookings get FLAT 50% OFF on your total bill + FREE Metashot Challenge this month!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookNow;
