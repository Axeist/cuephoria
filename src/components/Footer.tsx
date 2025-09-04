import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, Gamepad2, Target, Users, Coffee, Trophy, BookOpen, Home } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gaming-darker border-t border-gaming-accent/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-neon-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-neon-pink/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-lg"></div>
                <img 
                  src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png" 
                  alt="Cuephoria Logo" 
                  className="h-12 w-12 relative z-10"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Cuephoria</h3>
                <p className="text-neon-blue text-sm">8-Ball Club & Gaming</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trichy's premier gaming lounge combining the thrill of billiards, snooker, and PS5 gaming. 
              Perfect for students, friends, and gaming enthusiasts.
            </p>
            <div className="flex space-x-4">
              <Link 
                to="https://instagram.com/cuephoria" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-pink transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                to="https://wa.me/918637625155" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <nav className="space-y-3">
              <Link 
                to="https://www.cuephoria.in/#home"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
              >
                <Home className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Home</span>
              </Link>
              <Link 
                to="https://www.cuephoria.in/book"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
              >
                <Target className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Book Now</span>
              </Link>
              <Link 
                to="https://www.cuephoria.in/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
              >
                <BookOpen className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Blog</span>
              </Link>
              <Link 
                to="https://www.cuephoria.in/#games"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
              >
                <Gamepad2 className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Games</span>
              </Link>
              <Link 
                to="https://www.cuephoria.in/#gallery"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
              >
                <Coffee className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Gallery</span>
              </Link>
              <Link 
                to="https://www.cuephoria.in/#testimonials"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
              >
                <Trophy className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Reviews</span>
              </Link>
              <Link 
                to="https://www.cuephoria.in/#about"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
              >
                <Users className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span>About</span>
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Contact Info</h4>
            <div className="space-y-4">
              <Link 
                to="https://maps.app.goo.gl/vUNCsMkiMEgHfbVPA" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
              >
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm leading-relaxed">
                  Roof Top, No.1, Shivani Complex,<br />
                  Vaithiyalingam St, Muthu Nagar,<br />
                  Thiruverumbur, Tamil Nadu 620013
                </span>
              </Link>
              
              <Link 
                to="tel:+918637625155" 
                className="flex items-center space-x-3 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">+91 86376 25155</span>
              </Link>
              
              <Link 
                to="mailto:contact@cuephoria.in" 
                className="flex items-center space-x-3 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">contact@cuephoria.in</span>
              </Link>
              
              <div className="flex items-center space-x-3 text-gray-400">
                <Clock className="h-5 w-5" />
                <span className="text-sm">11:00 AM - 11:00 PM, Every day</span>
              </div>
            </div>
          </div>

          {/* Special Offers */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Special Offers</h4>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-neon-blue/10 to-purple-500/10 rounded-lg border border-neon-blue/20">
                <h5 className="text-neon-blue font-semibold text-sm mb-2">NIT50 Discount</h5>
                <p className="text-xs text-gray-300 leading-relaxed">
                  50% off for NIT Trichy students with valid ID
                </p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-lg border border-amber-500/20">
                <h5 className="text-amber-400 font-semibold text-sm mb-2">NIT99 Happy Hours</h5>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Play pool for just ₹99 from 11 AM to 3 PM
                </p>
              </div>
              
              <Link 
                to="https://www.cuephoria.in/book"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-neon-pink hover:text-neon-blue transition-colors duration-300 text-sm font-medium group"
              >
                <span>Book Now</span>
                <Target className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gaming-accent/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Cuephoria. All rights reserved. Made with ❤️ for Trichy gamers.
            </div>
            
            <div className="flex items-center space-x-6">
              <Link 
                to="https://www.cuephoria.in/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm"
              >
                Terms & Conditions
              </Link>
              <Link 
                to="https://www.cuephoria.in/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="https://www.cuephoria.in/#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
