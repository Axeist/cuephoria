
import React from 'react';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';

const BookNow = () => {
  return (
    <section id="book-now" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,255,0.15)_0,rgba(15,25,40,0)_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">
              Ready to <span className="neon-text-blue">Play</span>?
            </h2>
            <p className="text-gray-300 mb-8 text-center lg:text-left">
              Book your gaming or pool session now and prepare for an unforgettable experience at Cuephoria.
            </p>
            
            <div className="glass-card rounded-xl p-8 space-y-6 border border-neon-blue/20">
              <div className="flex flex-col space-y-2">
                <span className="text-gray-400">Choose your experience:</span>
                <div className="grid grid-cols-2 gap-4">
                  <button className="py-3 px-4 rounded-lg bg-gaming-accent text-white hover:bg-neon-blue hover:text-gaming-darker transition-colors duration-300">
                    Pool Table
                  </button>
                  <button className="py-3 px-4 rounded-lg bg-gaming-accent text-white hover:bg-neon-pink hover:text-gaming-darker transition-colors duration-300">
                    Gaming Station
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col space-y-2">
                  <label className="text-gray-400 flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-neon-blue" />
                    Select Date
                  </label>
                  <div className="relative">
                    <input 
                      type="date" 
                      className="w-full bg-gaming-darker border border-gaming-accent rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className="text-gray-400 flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-neon-pink" />
                    Start Time
                  </label>
                  <div className="relative">
                    <select className="w-full bg-gaming-darker border border-gaming-accent rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-pink appearance-none">
                      <option value="">Select time</option>
                      {Array.from({ length: 12 }).map((_, i) => (
                        <option key={i} value={`${i + 11}:00`}>{`${i + 11}:00`}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className="text-gray-400 flex items-center">
                    <Users className="h-4 w-4 mr-2 text-neon-blue" />
                    Number of People
                  </label>
                  <div className="relative">
                    <select className="w-full bg-gaming-darker border border-gaming-accent rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue appearance-none">
                      <option value="">Select</option>
                      {Array.from({ length: 10 }).map((_, i) => (
                        <option key={i} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <a 
                  href={`https://wa.me/918637625155?text=${encodeURIComponent("Hello! I'd like to book a slot at Cuephoria.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-lg bg-neon-blue text-gaming-darker font-semibold hover:bg-neon-blue/80 transition-all duration-300 flex items-center justify-center group"
                >
                  Confirm Booking via WhatsApp
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 glass-card rounded-xl p-8 border border-neon-pink/20">
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
                  <h4 className="text-xl font-semibold text-neon-blue">VR Experience</h4>
                  <p className="text-gray-400">Per 30 minutes</p>
                </div>
                <div className="text-2xl font-bold text-white">₹250</div>
              </div>
              
              <div className="pt-4">
                <h4 className="text-xl font-semibold mb-4 text-white">Special Packages</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-300">2-Hour Gaming Bundle</span>
                    <span className="text-neon-blue font-semibold">₹350</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Pool Tournament Entry (Weekend)</span>
                    <span className="text-neon-blue font-semibold">₹500</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Full Day Gaming Pass</span>
                    <span className="text-neon-blue font-semibold">₹1000</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-2 text-center">
                <p className="text-gray-400 text-sm">
                  * Prices may vary during weekends and holidays. Special offers available for groups and regular customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookNow;
