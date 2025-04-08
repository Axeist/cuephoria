
import React from 'react';
import { ArrowRight, Clock, MapPin, Gamepad2 } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gaming-darker">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,78,221,0.1)_0,rgba(15,25,40,0.5)_100%)]"></div>
        
        {/* Animated gaming icons */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              <Gamepad2 
                size={Math.random() * 30 + 20} 
                className="text-white opacity-50"
              />
            </div>
          ))}
        </div>
        
        {/* Animated horizontal lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={i}
              className="absolute h-px bg-neon-blue/30 w-full"
              style={{
                top: `${i * 10 + Math.random() * 5}%`,
                opacity: Math.random() * 0.5 + 0.1,
                height: `${Math.random() * 1 + 0.5}px`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block neon-text-blue animate-pulse-neon">CUEPHORIA</span>
              <span className="block text-3xl md:text-4xl mt-2 text-white">8-BALL CLUB & GAMING</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Experience the perfect blend of billiards and gaming at Trichy's premier gaming lounge and café. Level up your entertainment experience!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="h-5 w-5 text-neon-pink" />
                <span>11:00 AM - 11:00 PM</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-5 w-5 text-neon-blue" />
                <span>Thiruverumbur, Tamil Nadu</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <button
                onClick={() => {
                  // Open Calendly popup programmatically with updated URL
                  if (window.Calendly) {
                    window.Calendly.initPopupWidget({
                      url: 'https://calendly.com/cuephoriaclub/60min?background_color=0b101a&text_color=1cd0d3&primary_color=fd2dee'
                    });
                  }
                }}
                className="px-8 py-3 rounded-md bg-neon-blue text-gaming-darker font-semibold hover:bg-neon-blue/80 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                Book a Slot
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href={`https://wa.me/918637625155?text=${encodeURIComponent("Hello! I'd like to inquire about Cuephoria.")}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-md bg-transparent border-2 border-neon-pink text-white font-semibold hover:bg-neon-pink/10 transition-all duration-300 flex items-center justify-center"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
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
                  src="/lovable-uploads/2fa0e70e-4a7a-42ae-b82c-a47608a6d4ee.png" 
                  alt="Cuephoria Logo" 
                  className="w-full h-full object-contain animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce-slow"></div>
        </div>
        <span className="text-white/70 text-sm mt-2">Scroll Down</span>
      </div>
      
      {/* Floating Book Slot button with updated text and styling */}
      <button
        onClick={() => {
          if (window.Calendly) {
            window.Calendly.initPopupWidget({
              url: 'https://calendly.com/cuephoriaclub/60min?background_color=0b101a&text_color=1cd0d3&primary_color=fd2dee'
            });
          }
        }}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 px-4 py-3 bg-neon-pink text-white rounded-full shadow-lg rotate-90 origin-left z-50 hover:bg-neon-pink/90 transition-all hover:scale-105 font-medium"
      >
        Book a Slot
      </button>
    </section>
  );
};

export default Hero;
