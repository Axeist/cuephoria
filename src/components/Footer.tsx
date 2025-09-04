import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook```essageCircle, Gamepa``` Target, Users, Coffee, Trophy, BookOpen, Home, X```from 'lucide-react';

const Footer = () => {
  const [modal, setModal] = useState(null); // 'terms', 'privacy', 'contact', or null

  const closeModal = () => setModal(null);

  return (
    <>
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
                <div className="relative```                  <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-lg"></div>
                  <img 
                    src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png" 
                    alt="Cuephoria Logo" ```                  className="h-12 w-12 relative z-10"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Cuephoria</h3>
                  <p className="text-neon-blue text-sm">8-Ball Club & Gaming</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Trichy&apos;s premier gaming lounge```mbining the thrill of billiards, sn```er, and PS5 gaming. 
                Perfect for students, friends, and gaming```thusiasts.
              </p>
              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://www```stagram.com/cuephoriaclub" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-pink transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://wa.me/918637625155" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a 
                  href="https://www```cebook.com/profile.php?id=61574215405586&sk=about" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">Quick Links</h4>
              <nav className="space-y-3">
                <a 
                  href="https://www.cuephoria.in```ome"
                  target="_blank"
                  rel="noopener noreferrer"```                className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                >
                  <Home className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>Home</span>
                </a>
                <a 
                  href="https://www.cuephoria.in/```k"
                  target="_blank"
                  rel="noopener nor```rrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                >
                  <Target className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>Book Now</span>
                </a>
                <a 
                  href="https://www.```phoria.in/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                >
                  <BookOpen className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>Blog</span>```              </a>
                <a 
                  href="https://www.cuephoria.```#games"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                >
                  <Gamepad2 className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>Games</span>
                </a>
                <a 
                  href="https://www.cueph```a.in/#gallery"
                  target="_blank"
                  rel="noopener noreferrer```                 className="flex items```nter space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                >
                  <Coffee className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>Gallery</span>
                </a>
                <a 
                  href="https://www.cu```oria.in/#testimonials"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                >
                  <Trophy className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>Reviews</span>
                </a>
                <a 
                  href="https://www.cuephoria.```#about"
                  target="_blank"
                  rel="noopener noreferrer"```                className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                >
                  <Users className="h```w-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>About</span```               </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">Contact Info</h4>
              <div className="space-y-4">
                <a 
                  href="https://maps.app```o.gl/vUNCsMkiMEgHfbVPA" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                >
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm leading-relaxed">
                    Roof Top, No.1, Shivani Complex,<br />
                    Vaithiyalingam St,```thu Nagar,<br```
                    Thiruverumbur, Tamil Nadu 620013
                  </span>
                </a>
                
                {/* WhatsApp Bot Number */}
                <a 
                  href="tel:+918637625155" 
                  className="flex items-center space-x-3 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                >
                  <Phone className="h```w-5 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text```">
                    <div>+91 86376 25155</div>
                    <div className="text-xs text-gray-500">WhatsApp Bot/Calls</div>
                  </div>
                </a>
                
                {/* Real Agent Number */}
                <a 
                  href="tel:+917550025155" 
                  className="flex items-center space-x-3 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                >
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-sm">
                    <div>+91 75500 25155</div>
                    <div className="text-xs text-gray-500">Human Agent</div>
                  </div>
                </a>
                
                <a 
                  href="mailto:contact@cuephoria.in"```                 className="flex items```nter space-x-3 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">contact@cuephoria.in</span>
                </a>
                
                <div className="flex items-center space-x-3 text-gray-400">
                  <Clock className="h```w-5" />
                  <span className="```t-sm">11:00 AM - 11:00 PM, Every day</span>
                </div>
              </div>
            </div>

            {/* Special Offers */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">Special Offers</h4>
              <div className="space```4">
                <div className="p-4 bg-gradient-to-r from-neon-blue/10 to-purple-500/10 rounded-lg border border-neon-blue/20">
                  <h5 className="text-neon-blue font-semibold text-sm mb-2">NIT50 Discount</h5>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    50% off for NIT Trichy students with valid ID
                  </p>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-lg border border-amber-500/20">
                  <h5 className="text-amber-400 font-semibold text-sm mb-2">NIT99 Happy Hours</h5>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Play pool for just```9 from 11 AM to 3 PM
                  </p>
                </div>
                
                <a 
                  href="https://www.cuephoria.in/book```                 target="_blank"
                  rel="noopener nor```rrer"
                  className="inline```ex items-center space-x-2 text-neon-pink hover:text-neon-blue transition-colors duration-300 text-sm font-medium group"
                >
                  <span>Book Now</span>
                  <Target className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section with Popup Buttons */}
          <div className="border-t border-gaming-accent/30 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 Cuephoria. All rights reserved. Made with ❤️ for```ichy gamers.
              </div>
              
              <div className="flex items```nter space-x-6">
                <button 
                  onClick={() => setModal('terms')}
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm"
                >
                  Terms & Conditions
                </button>
                <button 
                  onClick={() => setModal('privacy')}
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setModal('contact')}
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm"
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
                      By accessing and using Cuephoria&```s;s services, you agree to comply```th and be bound by the following terms and conditions.```ease read them carefully.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">1. Booking & Reservations</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>All bookings are subject to availability and must``` confirmed in advance</li>
                      <li>Valid student ID required for all student```scounts (NIT50, NIT99)</li>
                      <li>Cancellations must be made at least ```hours prior to avoid charges</li>
                      <li>No-shows will be charged the full session```ount</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">2. Club Rules & Conduct</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Respectful behavior towards staff and other players is```ndatory</li>
                      <li>Players must follow proper pool/snooker etiquette at```l times</li>
                      <li>Smoking and alcohol are strictly```ohibited on premises</li>
                      <li>Loud or disruptive behavior will result in immediate```moval</li>
                      <li>Players are responsible for any equipment damage during their```ssion</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">3. Payment & Pricing</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>All prices are clearly```splayed and subject to change</li>
                      <li>Payment must be completed before or```mediately after the session</li>
                      <li>Student discounts require```lid ID verification</li>
                      <li>Happy hour rates (NIT99) apply only during specified times</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">4. Management Rights</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Management reserves the right to refuse service to anyone```i>
                      <li>Rules and policies may be updated without prior notice</li>
                      <li>Final decisions on disputes rest with management```i>
                      <li>Security cameras are in```eration for safety purposes</li>
                    </ul>
                  </div>

                  <div className="bg```on-blue/10 border border-neon-blue/30 rounded-lg p-4">
                    <p className="text-sm">
                      <strong className="text-neon-blue">Note:</strong> By using our facilities```ou acknowledge that you have read,```derstood, and agree to these terms and conditions.
                    </p>
                  </div>
                </div>
              )}

              {modal === 'privacy' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-neon-blue mb-4">Your Privacy Matters</h3>
                    <p className="leading-relaxed">
                      At Cuephoria, we are```mmitted to protecting your privacy an```nsuring the security of your personal information. This```licy explains how we collect, use, an```afeguard your data.```                  </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">1. Information We Collect</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Basic contact information (name, phone number, email) for bookings</li>
                      <li>Student ID information for discount verification```i>
                      <li>Payment information (processed securely through third-party providers)</li>
                      <li>Usage data to```prove our services and user experience</li>
                      <li>Cookies and website analytics```r better service delivery</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">2. How We Use Your Information</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Process bookings and provide```r gaming services</li>
                      <li>Verify student status for discount```igibility</li>
                      <li>Send important updates about```okings and services</li>
                      <li>Improve our facilities based on usage```tterns</li>
                      <li>Ensure security and safety of our```emises</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">3. Data Protection & Security</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>All personal data is stored securely and encrypte```li>
                      <li>We never share your information with third parties without```nsent</li>
                      <li>Payment processing uses industry```andard security measures</li>
                      <li>Access to your data is limited to authorized personnel```ly</li>
                      <li>Regular security audits ensure data protection standards</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">4. Your Rights</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Request access to your personal data``` any time</li>
                      <li>Ask for correction``` inaccurate information</li>```                    <li>Request deletion of your data (subject to legal requirements)</li>
                      <li>Opt out of marketing communications</li>
                      <li>File complaints with data protection authorities if needed</li>```                  </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">5. Cookies & Website Usage</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Essential```okies for website functionality</li>
                      <li>Analytics cookies to understan```ser behavior</li>
                      <li>You can disable cookies in your browser settings```i>
                      <li>Some features may not work without certain cookies</li>
                    </ul>
                  </div>

                  <div className="bg```ber-500/10 border border-amber-500/30 rounded-lg p-4">
                    <p className="text-sm">
                      <strong className="text```ber-400">Questions?</strong> For any privacy concerns or data requests, contact us at <a href="mailto:contact```ephoria.in" className="text-neon-blue hover:underline">contact@cuephoria.in</a>``` call +91 75500 25155.
                    </p>
                  </div>
                </div>
              )}

              {modal === 'contact' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-neon-blue mb-4">Get in Touch</h3>
                    <p className="leading-relaxed">
                      Have questions,```ggestions, or need assistance? We&```s;re here to help!```ach out to us through any of these convenient```annels.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">📍 Visit Us</h4>
                      <div className="bg```ming-accent/10 border border-gaming-accent/30 rounded-lg p-4">
                        <p className="```t-semibold text-neon-blue mb-2">Cuephoria Gaming Lounge</p>
                        <p className="text-sm leading-relaxed">
                          Roof Top, No.1, Shivani Complex,<br />
                          Vaithiyalingam St, Muthu```gar,<br />
                          Thiruverumbur, Tamil Nadu 620013
                        </p>
                        <a 
                          href="https://```s.app.goo.gl/vUNCsMkiMEgH```PA"
                          target="_blank"```                        rel="noopener noreferrer"
                          className```nline-flex items-center gap-2 text-neon-blue hover:text-neon-pink transition-colors mt-2"
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
                          <p className="```t-semibold text-green-400 mb-1">WhatsApp Bot/Calls</p>
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
                        href="mailto:contact```ephoria.in" 
                        className="text-neon-blue hover:text-neon-pink transition-colors font-semibold"
                      >
                        contact@cuephoria.```                      </a>
                      <p className="text-sm text-gray-400 mt-2">
                        We typically```spond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">🕒 Operating Hours</h4>
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                      <p className="text-white font-semibold">11:00 AM - 11:00 PM</p>
                      <p className="text-sm text-gray-400">Every day of the week</p>
                      <p className="text-xs text-gray-500 mt-2">
                        NIT99 Happy Hours: 11:00 AM - 3:00 PM daily
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">🌐 Follow Us</h4>
                    <div className="flex space```4">
                      <a 
                        href="https://www.instagram```m/cuephoriaclub" 
                        target="_blank"```                      rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-lg px-4 py-2 text-pink-400 hover:text-pink-300 transition-colors"
                      >
                        <Instagram className="``` w-5" />
                        Instagram
                      </a>
                      <a 
                        href="https://www.facebook.com/profile```p?id=61574215405586&sk=about" 
                        target="_blank"```                      rel="noopener noreferrer"
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
                      <strong className="text```on-pink">Quick Tip:</strong> For fastest```sponse, use WhatsApp (+91 86376 25155) or call our human agent (+91 75500 25155) during operating hours.
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
