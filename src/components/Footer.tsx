import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle, Gamepad2, Target, Users, Coffee, Trophy, BookOpen, Home, X, Percent, Gift, Zap, Sparkles, Copy, Code, ExternalLink, Star, Moon, Crown } from 'lucide-react';

const Footer = () => {
  const [modal, setModal] = useState(null); // 'terms', 'privacy', 'contact', or null
  const currentYear = new Date().getFullYear();

  const closeModal = () => setModal(null);

  const copyCouponCode = (code: string) => {
    navigator.clipboard.writeText(code);
    // You can add a toast notification here if needed
  };

  const footerCoupons = [
    {
      code: "CUEPHORIA20",
      discount: "20% OFF",
      icon: <Percent className="h-4 w-4 text-neon-blue" />,
      textColor: "text-neon-blue",
      bgColor: "bg-neon-blue/20",
      borderColor: "border-neon-blue/30"
    },
    {
      code: "CUEPHORIA35",
      discount: "35% OFF",
      icon: <Gift className="h-4 w-4 text-purple-400" />,
      textColor: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      code: "HH99",
      discount: "₹99 FIXED",
      icon: <Zap className="h-4 w-4 text-amber-400" />,
      textColor: "text-amber-400",
      bgColor: "bg-amber-500/20",
      borderColor: "border-amber-500/30"
    },
    {
      code: "NIT35",
      discount: "35% OFF",
      icon: <Sparkles className="h-4 w-4 text-green-400" />,
      textColor: "text-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30"
    }
  ];

  return (
    <>
      <footer className="bg-gaming-darker border-t border-gaming-accent/30 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-neon-blue/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-neon-pink/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 max-w-7xl">
          {/* Cuephoria Lite Fancy Announcement */}
          <div className="mb-6">
            <div className="relative glass-card rounded-xl p-4 md:p-5 border-2 border-amber-500/50 bg-gradient-to-br from-amber-500/15 via-orange-500/15 to-amber-500/15 overflow-hidden group">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000 ease-in-out"></div>
              
              <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-5">
                {/* Logo Section */}
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-amber-400/20 rounded-lg blur-md animate-pulse"></div>
                  <img
                    src="https://iili.io/fjuZYga.jpg"
                    alt="Cuephoria Lite Logo"
                    className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg border-2 border-amber-500/50 bg-white/10 p-2 relative z-10 shadow-lg shadow-amber-500/20"
                  />
                </div>
                
                {/* Content Section */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2 flex-wrap">
                    <div className="relative">
                      <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-amber-400 animate-pulse" />
                      <div className="absolute inset-0">
                        <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-amber-300 animate-ping opacity-50" />
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      <span className="text-amber-400 relative inline-block">
                        Cuephoria Lite
                        <span className="absolute -inset-1 bg-amber-400/20 blur-lg opacity-50 animate-pulse"></span>
                      </span>
                    </h3>
                    <span className="px-2 py-1 bg-gradient-to-r from-amber-500/30 to-orange-500/30 text-amber-200 text-xs font-bold rounded-full border border-amber-500/50 animate-pulse shadow-lg shadow-amber-500/20">
                      COMING SOON
                    </span>
                  </div>
                  
                  <p className="text-sm text-amber-300 font-semibold mb-2 text-center md:text-left">
                    Same Luxury, More Affordable - Right Next to NIT Trichy! 🎮
                  </p>
                  
                  <p className="text-xs text-gray-300 mb-2 flex items-center justify-center md:justify-start gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-amber-400 animate-pulse-slow" />
                    <span>Date Will Be Announced Soon • Opening in Mid-January 2026</span>
                  </p>
                  
                  <p className="text-xs text-gray-400 mb-3 text-center md:text-left">
                    Authentic Cuephoria experience at student-friendly prices. Premium gaming, VR & pool closer to campus.
                  </p>
                  
                  {/* Opening Discount Banner */}
                  <div className="bg-gradient-to-r from-red-500/20 via-orange-500/20 to-amber-500/20 border-2 border-red-500/40 rounded-lg p-1.5 mb-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 animate-pulse"></div>
                    <div className="relative flex items-center gap-1.5">
                      <Gift className="h-3.5 w-3.5 text-red-400 animate-pulse" />
                      <p className="text-xs font-bold text-red-300">
                        Opening Day: Up to 60% OFF for Existing Customers!
                      </p>
                    </div>
                  </div>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-3">
                    <div className="flex items-center gap-1.5 text-amber-200 bg-amber-500/15 rounded-lg p-1.5 border border-amber-500/30 hover:bg-amber-500/20 transition-all duration-300">
                      <MapPin className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />
                      <span className="text-xs font-semibold">Opposite NIT Trichy</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-200 bg-amber-500/15 rounded-lg p-1.5 border border-amber-500/30 hover:bg-amber-500/20 transition-all duration-300">
                      <Crown className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />
                      <span className="text-xs font-semibold">Same Premium Quality</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-200 bg-amber-500/15 rounded-lg p-1.5 border border-amber-500/30 hover:bg-amber-500/20 transition-all duration-300">
                      <Percent className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />
                      <span className="text-xs font-semibold">More Affordable</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-200 bg-amber-500/15 rounded-lg p-1.5 border border-amber-500/30 hover:bg-amber-500/20 transition-all duration-300">
                      <Gift className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />
                      <span className="text-xs font-semibold">NIT Discounts</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-200 bg-amber-500/15 rounded-lg p-1.5 border border-amber-500/30 hover:bg-amber-500/20 transition-all duration-300">
                      <Zap className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />
                      <span className="text-xs font-semibold">Compact Pool Tables</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-200 bg-amber-500/15 rounded-lg p-1.5 border border-amber-500/30 hover:bg-amber-500/20 transition-all duration-300">
                      <Moon className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />
                      <span className="text-xs font-semibold">Late Night Hours</span>
                    </div>
                  </div>
                  
                  {/* Location and CTA */}
                  <div className="flex flex-col sm:flex-row items-center gap-2">
                    <a
                      href="https://maps.app.goo.gl/nvTtK6SG4nGQXenGA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500/30 to-orange-500/30 border-2 border-amber-500/50 text-amber-200 rounded-lg hover:from-amber-500/40 hover:to-orange-500/40 transition-all duration-300 text-xs font-bold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 group/btn"
                    >
                      <MapPin className="h-3.5 w-3.5 group-hover/btn:animate-bounce" />
                      View Location
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <div className="text-[10px] text-gray-400 text-center sm:text-left">
                      QR64+CRV Electronics Bus Stop, Valavandankottai, Tamil Nadu 620015
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
            {/* Logo & Description */}
            <div className="space-y-5">
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
                Trichy&apos;s premier gaming lounge combining the thrill of billiards, snooker, PS5 gaming, and cutting-edge VR gaming with Meta Quest 3S. 
                Perfect for students, friends, and gaming enthusiasts.
              </p>
              {/* Social Media Links */}
              <div className="flex space-x-4 pt-2">
                <a 
                  href="https://www.instagram.com/cuephoriaclub" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-pink transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://wa.me/918637625155" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61574215405586&sk=about" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white">Quick Links</h4>
              <nav className="space-y-2.5">
                <a 
                  href="https://www.cuephoria.in/#home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group text-sm"
                >
                  <Home className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>Home</span>
                </a>
                <a 
                  href="https://www.cuephoria.in/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group text-sm"
                >
                  <Target className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>Book Now</span>
                </a>
                <a 
                  href="https://www.cuephoria.in/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group text-sm"
                >
                  <BookOpen className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>Blog</span>
                </a>
                <a 
                  href="https://www.cuephoria.in/#games"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group text-sm"
                >
                  <Gamepad2 className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>Games</span>
                </a>
                <a 
                  href="https://www.cuephoria.in/#gallery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group text-sm"
                >
                  <Coffee className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>Gallery</span>
                </a>
                <a 
                  href="https://www.cuephoria.in/#testimonials"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group text-sm"
                >
                  <Trophy className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>Reviews</span>
                </a>
                <a 
                  href="https://www.cuephoria.in/#about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group text-sm"
                >
                  <Users className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>About</span>
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white">Contact Info</h4>
              <div className="space-y-3.5">
                <a 
                  href="https://maps.app.goo.gl/vUNCsMkiMEgHfbVPA" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                >
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm leading-relaxed">
                    <span className="font-semibold text-white">Main Branch:</span><br />
                    Roof Top, No.1, Shivani Complex,<br />
                    Vaithiyalingam St, Muthu Nagar,<br />
                    Thiruverumbur, Tamil Nadu 620013
                  </span>
                </a>
                
                <a 
                  href="tel:+918637625155" 
                  className="flex items-start space-x-3 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-sm">
                    <div>+91 86376 25155</div>
                    <div className="text-xs text-gray-500">WhatsApp Bot/Calls</div>
                  </div>
                </a>
                
                <a 
                  href="tel:+917550025155" 
                  className="flex items-start space-x-3 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-sm">
                    <div>+91 75500 25155</div>
                    <div className="text-xs text-gray-500">Human Agent</div>
                  </div>
                </a>
                
                <a 
                  href="mailto:contact@cuephoria.in" 
                  className="flex items-center space-x-3 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">contact@cuephoria.in</span>
                </a>
                
                <div className="flex items-center space-x-3 text-gray-400">
                  <Clock className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">11:00 AM - 11:00 PM, Every day</span>
                </div>
              </div>
            </div>

            {/* Special Offers */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-white">Special Offers</h4>
              <div className="space-y-2.5">
                {footerCoupons.map((coupon, idx) => (
                  <div
                    key={idx}
                    onClick={() => copyCouponCode(coupon.code)}
                    className={`group relative p-3 ${coupon.bgColor} rounded-lg border ${coupon.borderColor} transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className={`p-1 ${coupon.bgColor} rounded`}>
                          {coupon.icon}
                        </div>
                        <span className={`${coupon.textColor} font-bold text-sm`}>{coupon.code}</span>
                      </div>
                      <span className={`${coupon.textColor} text-xs font-semibold`}>{coupon.discount}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400 group-hover:text-gray-300 transition-colors">
                      <Copy className="h-3 w-3" />
                      <span>Click to copy</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gaming-accent/30 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm text-center sm:text-left flex items-center gap-2 flex-wrap justify-center sm:justify-start">
                <span>© {currentYear} Cuephoria. All rights reserved. Made with ❤️ for Trichy gamers.</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">Powered by</span>
                <a
                  href="https://cuephoriatech.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/20 border border-green-500/40 rounded-md text-green-400 hover:bg-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:scale-105 shadow-sm shadow-green-500/10 hover:shadow-green-500/20"
                >
                  <Code className="h-3.5 w-3.5" />
                  <span className="font-semibold text-xs">Cuephoria Tech</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              
              <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6">
                <button 
                  onClick={() => setModal('terms')}
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm whitespace-nowrap"
                >
                  Terms & Conditions
                </button>
                <button 
                  onClick={() => setModal('privacy')}
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm whitespace-nowrap"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setModal('contact')}
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm whitespace-nowrap"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Overlay */}
      {modal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="bg-gaming-darker border border-gaming-accent/30 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gaming-darker border-b border-gaming-accent/30 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">
                {modal === 'terms' && 'Terms & Conditions'}
                {modal === 'privacy' && 'Privacy Policy'}
                {modal === 'contact' && 'Contact Us'}
              </h2>
              <button 
                onClick={closeModal} 
                className="p-2 hover:bg-gaming-accent/20 rounded-full transition-colors duration-300 text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 text-gray-300 space-y-6">
              {modal === 'terms' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-neon-blue mb-4">Welcome to Cuephoria</h3>
                    <p className="leading-relaxed">
                      By accessing and using Cuephoria&apos;s services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">1. Booking & Reservations</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>All bookings are subject to availability and must be confirmed in advance</li>
                      <li>Valid student ID required for CUEPHORIA35 discount</li>
                      <li>Cancellations must be made at least 24 hours prior to avoid charges</li>
                      <li>No-shows will be charged the full session amount</li>
                      <li>Coupon codes cannot be combined with other offers</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">2. Club Rules & Conduct</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Respectful behavior towards staff and other players is mandatory</li>
                      <li>Players must follow proper pool/snooker etiquette at all times</li>
                      <li>Smoking and alcohol are strictly prohibited on premises</li>
                      <li>Loud or disruptive behavior will result in immediate removal</li>
                      <li>Players are responsible for any equipment damage during their session</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">3. Payment & Pricing</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>All prices are clearly displayed and subject to change</li>
                      <li>Payment must be completed before or immediately after the session</li>
                      <li>Student discounts (CUEPHORIA35) require valid ID verification</li>
                      <li>Happy hour rates (HH99) apply only during specified times (Mon-Fri, 11 AM-4 PM)</li>
                      <li>Available coupon codes: CUEPHORIA20, CUEPHORIA35, HH99, NIT35</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">4. Management Rights</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Management reserves the right to refuse service to anyone</li>
                      <li>Rules and policies may be updated without prior notice</li>
                      <li>Final decisions on disputes rest with management</li>
                      <li>Security cameras are in operation for safety purposes</li>
                    </ul>
                  </div>

                  <div className="bg-neon-blue/10 border border-neon-blue/30 rounded-lg p-4">
                    <p className="text-sm">
                      <strong className="text-neon-blue">Note:</strong> By using our facilities, you acknowledge that you have read, understood, and agree to these terms and conditions.
                    </p>
                  </div>
                </div>
              )}

              {modal === 'privacy' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-neon-blue mb-4">Your Privacy Matters</h3>
                    <p className="leading-relaxed">
                      At Cuephoria, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">1. Information We Collect</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Basic contact information (name, phone number, email) for bookings</li>
                      <li>Student ID information for discount verification</li>
                      <li>Payment information (processed securely through third-party providers)</li>
                      <li>Usage data to improve our services and user experience</li>
                      <li>Cookies and website analytics for better service delivery</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">2. How We Use Your Information</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Process bookings and provide our gaming services</li>
                      <li>Verify student status for discount eligibility</li>
                      <li>Send important updates about bookings and services</li>
                      <li>Improve our facilities based on usage patterns</li>
                      <li>Ensure security and safety of our premises</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">3. Data Protection & Security</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>All personal data is stored securely and encrypted</li>
                      <li>We never share your information with third parties without consent</li>
                      <li>Payment processing uses industry-standard security measures</li>
                      <li>Access to your data is limited to authorized personnel only</li>
                      <li>Regular security audits ensure data protection standards</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">4. Your Rights</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Request access to your personal data at any time</li>
                      <li>Ask for correction of inaccurate information</li>
                      <li>Request deletion of your data (subject to legal requirements)</li>
                      <li>Opt out of marketing communications</li>
                      <li>File complaints with data protection authorities if needed</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">5. Cookies & Website Usage</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Essential cookies for website functionality</li>
                      <li>Analytics cookies to understand user behavior</li>
                      <li>You can disable cookies in your browser settings</li>
                      <li>Some features may not work without certain cookies</li>
                    </ul>
                  </div>

                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                    <p className="text-sm">
                      <strong className="text-amber-400">Questions?</strong> For any privacy concerns or data requests, contact us at <a href="mailto:contact@cuephoria.in" className="text-neon-blue hover:underline">contact@cuephoria.in</a> or call +91 75500 25155.
                    </p>
                  </div>
                </div>
              )}

              {modal === 'contact' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-neon-blue mb-4">Get in Touch</h3>
                    <p className="leading-relaxed">
                      Have questions, suggestions, or need assistance? We&apos;re here to help! Reach out to us through any of these convenient channels.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">📍 Visit Us</h4>
                      <div className="bg-gaming-accent/10 border border-gaming-accent/30 rounded-lg p-4">
                        <p className="font-semibold text-neon-blue mb-2">Cuephoria Gaming Lounge</p>
                        <p className="text-sm leading-relaxed">
                          Roof Top, No.1, Shivani Complex,<br />
                          Vaithiyalingam St, Muthu Nagar,<br />
                          Thiruverumbur, Tamil Nadu 620013
                        </p>
                        <a 
                          href="https://maps.app.goo.gl/vUNCsMkiMEgHfbVPA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-pink transition-colors mt-2"
                        >
                          <MapPin className="h-4 w-4" />
                          Get Directions
                        </a>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">📞 Call Us</h4>
                      <div className="space-y-3">
                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                          <p className="font-semibold text-green-400 mb-1">WhatsApp Bot/Calls</p>
                          <a href="tel:+918637625155" className="text-white hover:text-green-400 transition-colors">
                            +91 86376 25155
                          </a>
                          <p className="text-xs text-gray-400 mt-1">For quick responses and bookings</p>
                        </div>
                        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                          <p className="font-semibold text-blue-400 mb-1">Human Agent</p>
                          <a href="tel:+917550025155" className="text-white hover:text-blue-400 transition-colors">
                            +91 75500 25155
                          </a>
                          <p className="text-xs text-gray-400 mt-1">For personalized assistance</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">📧 Email Us</h4>
                    <div className="bg-neon-blue/10 border border-neon-blue/30 rounded-lg p-4">
                      <a 
                        href="mailto:contact@cuephoria.in" 
                        className="text-neon-blue hover:text-neon-pink transition-colors font-semibold"
                      >
                        contact@cuephoria.in
                      </a>
                      <p className="text-sm text-gray-400 mt-2">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">🕒 Operating Hours</h4>
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                      <p className="text-white font-semibold">11:00 AM - 11:00 PM</p>
                      <p className="text-sm text-gray-400">Every day of the week</p>
                      <p className="text-xs text-gray-500 mt-2">
                        HH99 Happy Hours: 11:00 AM - 4:00 PM (Mon-Fri only)
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">🌐 Follow Us</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.instagram.com/cuephoriaclub" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-lg px-4 py-2 text-pink-400 hover:text-pink-300 transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                        Instagram
                      </a>
                      <a 
                        href="https://www.facebook.com/profile.php?id=61574215405586&sk=about" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                        Facebook
                      </a>
                      <a 
                        href="https://wa.me/918637625155" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2 text-green-400 hover:text-green-300 transition-colors"
                      >
                        <MessageCircle className="h-5 w-5" />
                        WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="bg-neon-pink/10 border border-neon-pink/30 rounded-lg p-4">
                    <p className="text-sm">
                      <strong className="text-neon-pink">Quick Tip:</strong> For fastest response, use WhatsApp (+91 86376 25155) or call our human agent (+91 75500 25155) during operating hours.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gaming-darker border-t border-gaming-accent/30 p-4 text-center">
              <button
                onClick={closeModal}
                className="bg-gradient-to-r from-neon-blue via-purple-500 to-neon-pink p-[2px] rounded-full hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gaming-darker px-8 py-3 rounded-full">
                  <span className="font-semibold text-white">Close</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
