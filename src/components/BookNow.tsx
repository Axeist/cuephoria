
import React, { useEffect, useRef } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

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
        </div>
        
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          <div className="w-full lg:w-1/2">
            <div className="glass-card rounded-xl p-8 border border-neon-blue/20 h-full">
              {/* Calendly inline widget with ref for direct initialization */}
              <div 
                ref={calendlyRef}
                className="w-full h-[600px]"
              ></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="glass-card rounded-xl p-8 border border-neon-pink/20 h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">Pricing & Packages</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-gaming-accent">
                  <div>
                    <h4 className="text-xl font-semibold text-neon-blue">Pool Table</h4>
                    <p className="text-gray-400">Per hour rate for billiards</p>
                  </div>
                  <div className="text-2xl font-bold text-white">₹300</div>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b border-gaming-accent">
                  <div>
                    <h4 className="text-xl font-semibold text-neon-pink">Gaming Station</h4>
                    <p className="text-gray-400">Per hour rate for PC/Console</p>
                  </div>
                  <div className="text-2xl font-bold text-white">₹200</div>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b border-gaming-accent">
                  <div>
                    <h4 className="text-xl font-semibold text-neon-blue">Metashot Challenges</h4>
                    <p className="text-gray-400">Per challenge</p>
                  </div>
                  <div className="text-2xl font-bold text-white">₹49</div>
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
                  </ul>
                </div>
                
                <div className="pt-2 text-center">
                  <p className="text-gray-400 text-sm">
                    * Prices may vary during weekends and holidays. Special offers available for groups and regular customers.
                  </p>
                </div>
                
                <div className="pt-4">
                  <button
                    onClick={() => {
                      if (window.Calendly) {
                        window.Calendly.initPopupWidget({
                          url: 'https://calendly.com/cuephoriaclub/60min?background_color=0b101a&text_color=1cd0d3&primary_color=fd2dee'
                        });
                      }
                    }}
                    className="w-full py-3 rounded-lg bg-neon-blue text-gaming-darker font-semibold hover:bg-neon-blue/80 transition-all duration-300 flex items-center justify-center group"
                  >
                    Book Now
                    <Calendar className="ml-2 h-5 w-5" />
                  </button>
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
