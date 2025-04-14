import React from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';
import VisitorStats from './VisitorStats';
import Terms from './Terms';

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Online booking promotion banner */}
        <div className="glass-card rounded-xl p-6 mb-12 border-2 border-neon-pink animate-pulse-neon">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                <span className="neon-text-pink">SPECIAL ONLINE OFFER!</span>
              </h3>
              <p className="text-gray-300">
                Get <span className="text-neon-blue font-bold">FLAT 10% OFF</span> your bill + 
                <span className="text-neon-pink font-bold"> 1 FREE AR Metashot Cricket Challenge </span> 
                only through online bookings!
              </p>
            </div>
            <a 
              href="#book-now" 
              className="px-6 py-3 rounded-md font-medium transition-colors bg-neon-pink text-white hover:bg-neon-pink/80 flex items-center"
            >
              Book Online Now
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
        
        {/* Visitor Stats Section */}
        <div className="mb-10 flex justify-center">
          <div className="max-w-lg w-full">
            <VisitorStats />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <img 
              src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png" 
              alt="Cuephoria" 
              className="h-16 mb-4" 
            />
            <p className="text-gray-400 max-w-md">
              Cuephoria - where billiards meets gaming in an electrifying atmosphere. Experience the thrill of competition in our premium gaming lounge.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-neon-blue transition-colors flex items-center">
                    Home
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-neon-blue transition-colors flex items-center">
                    About
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="#games" className="text-gray-400 hover:text-neon-blue transition-colors flex items-center">
                    Games
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="#book-now" className="text-gray-400 hover:text-neon-blue transition-colors flex items-center">
                    Book Now
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-neon-blue transition-colors flex items-center">
                    Contact
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </a>
                </li>
                <li>
                  <Terms>
                    <span className="text-gray-400 hover:text-neon-blue transition-colors flex items-center cursor-pointer">
                      Terms & Conditions
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </span>
                  </Terms>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <span className="block text-sm text-neon-pink">Phone</span>
                  <a href="tel:+918637625155" className="hover:text-neon-blue transition-colors">
                    +91 86376 25155
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="block text-sm text-neon-pink">Email</span>
                  <a href="mailto:contact@cuephoria.in" className="hover:text-neon-blue transition-colors">
                    contact@cuephoria.in
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="block text-sm text-neon-pink">Hours</span>
                  11:00 AM - 11:00 PM
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61574215405586&sk=about" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-gaming-accent flex items-center justify-center hover:bg-neon-blue/20 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/cuephoriaclub/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-gaming-accent flex items-center justify-center hover:bg-neon-pink/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="https://wa.me/918637625155"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="h-10 w-10 rounded-full bg-gaming-accent flex items-center justify-center hover:bg-green-500/20 transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gaming-accent text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Cuephoria Gaming Lounge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
