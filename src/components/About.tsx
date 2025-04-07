
import React from 'react';
import { Target, Joystick, Users, Coffee } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="glass-card rounded-xl p-6 hover:border-neon-blue/30 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]">
    <div className="w-14 h-14 rounded-lg bg-gaming-accent flex items-center justify-center mb-4">
      <Icon className="h-7 w-7 text-neon-pink" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent"></div>
        
        {/* Radial gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-text-blue">Experience</span> the Fusion
          </h2>
          <p className="max-w-2xl text-gray-400">
            At Cuephoria, we blend the precision of billiards with the thrill of gaming, creating an unmatched entertainment venue that welcomes everyone from casual players to serious enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={Target} 
            title="8-Ball Pool" 
            description="Premium pool tables with professional equipment for both casual players and serious competitors."
          />
          <FeatureCard 
            icon={Joystick}
            title="Gaming Zone"
            description="State-of-the-art gaming rigs loaded with the latest titles for an immersive gaming experience."
          />
          <FeatureCard 
            icon={Coffee}
            title="Café Area"
            description="Enjoy refreshments and snacks while you play or relax between games in our comfortable café."
          />
          <FeatureCard 
            icon={Users}
            title="Community Space"
            description="Regular tournaments, events and a vibrant community of gaming and billiards enthusiasts."
          />
        </div>
        
        <div className="mt-20 glass-card rounded-xl p-8 md:p-12 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Why Choose <span className="neon-text-pink">Cuephoria</span>?</h3>
              <ul className="space-y-4">
                {[
                  "Premium gaming experience with high-end equipment",
                  "Professional pool tables with quality cues and accessories",
                  "Comfortable, stylish environment with neon aesthetics",
                  "Friendly staff and welcoming community",
                  "Affordable rates with special packages for regular players"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 h-5 w-5 text-neon-blue flex-shrink-0">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-video rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gaming-gradient opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-white mb-2">Opening Hours</h4>
                    <p className="text-xl text-neon-blue animate-pulse-neon">11:00 AM - 11:00 PM</p>
                    <p className="text-gray-300 mt-4">7 days a week</p>
                    <div className="mt-6">
                      <a 
                        href="#contact" 
                        className="px-6 py-2 rounded-md bg-neon-pink text-white font-medium hover:bg-neon-pink/80 transition-colors"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
