import React from 'react';
import { ArrowRight, Clock, MapPin, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = ({ className = '' }) => {
  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center pt-14 overflow-hidden ${className}`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gaming-darker">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,78,221,0.1)_0,rgba(15,25,40,0.5)_100%)]"></div>
        
        {/* Animated gaming icons - reduced count for better performance */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i}
              className="absolute animate-float"
              style={{
                left: `${(i * 8.33) % 100}%`,
                top: `${(i * 7.5) % 100}%`,
                animationDelay: `${i * 0.4}s`,
                willChange: 'transform'
              }}
            >
              <Gamepad2 
                size={24} 
                className="text-white opacity-50"
              />
            </div>
          ))}
        </div>
        
        {/* Animated horizontal lines - reduced count for better performance */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i}
              className="absolute h-px bg-neon-blue/30 w-full"
              style={{
                top: `${i * 16.67}%`,
                opacity: 0.2,
                willChange: 'opacity'
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block neon-text-blue animate-pulse-neon">CUEPHORIA</span>
              <span className="block text-3xl md:text-4xl mt-2 text-white">8-BALL CLUB & GAMING</span>
            </h1>
            
            <h2 className="text-xl text-gray-300 mb-4 max-w-xl mx-auto lg:mx-0 font-semibold">
              Trichy's Premier Gaming Lounge & Pool Club
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto lg:mx-0">
              Experience the perfect blend of billiards, snooker, PS5 gaming, and cutting-edge VR gaming with Meta Quest 3S at Cuephoria, Trichy's premier gaming lounge and café.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mb-6">
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="h-5 w-5 text-neon-pink" />
                <span>11:00 AM - 11:00 PM</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-5 w-5 text-neon-blue" />
                <span>Thiruverumbur, Trichy, Tamil Nadu</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Link
                to="/book"
                className="px-8 py-3 rounded-md bg-neon-blue text-gaming-darker font-semibold hover:bg-neon-blue/80 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                Book a Slot
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {/* WhatsApp Buttons - Chatbot and Human Agent */}
              <a 
                href={`https://wa.me/918637625155?text=${encodeURIComponent("Hello! I'd like to inquire about Cuephoria gaming lounge and pool club in Trichy.")}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-md bg-transparent border-2 border-neon-pink text-white font-semibold hover:bg-neon-pink/10 transition-all duration-300 flex items-center justify-center"
                title="WhatsApp Assistant (Chatbot)"
              >
                WhatsApp Assistant
              </a>
              <a
                href={`https://wa.me/917550025155?text=${encodeURIComponent("Hello! I'd like to speak with a real Cuephoria agent regarding gaming lounge and pool club.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-md bg-transparent border-2 border-neon-blue text-white font-semibold hover:bg-neon-blue/10 transition-all duration-300 flex items-center justify-center"
                title="WhatsApp Human Agent"
              >
                WhatsApp Human Agent
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-56 h-56 md:w-80 md:h-80 mx-auto">
              {/* Animated pulsing light rays */}
              <div className="absolute inset-0 flex items-center justify-center">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-full h-1 bg-gradient-to-r from-neon-blue/0 via-neon-blue/50 to-neon-blue/0 animate-pulse-neon"
                    style={{
                      transform: `rotate(${i * 30}deg)`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  ></div>
                ))}
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png" 
                  alt="Cuephoria Logo - 8-Ball Pool Club & Gaming Lounge in Trichy" 
                  className="w-full h-full object-contain animate-float"
                  width="320"
                  height="320"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - removed to save vertical space on mobile */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex-col items-center hidden md:flex">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce-slow"></div>
        </div>
        <span className="text-white/70 text-sm mt-2">Scroll Down to Explore Cuephoria</span>
      </div>
    </section>
  );
};
export default Hero;
