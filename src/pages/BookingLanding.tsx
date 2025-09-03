import React, { useEffect, useState, lazy, Suspense, useCallback, useMemo } from 'react';
import { ArrowRight, Clock, MapPin, Star, Award, Table2, Siren, ActivitySquare, Expand, ExternalLink, Sparkles, Crown, Zap } from 'lucide-react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import SEOMetadata from '../components/SEOMetadata';
import { Table, TableBody, TableCell, TableRow } from "../components/ui/table";
import { useIsMobile } from '../hooks/use-mobile';

const VisitorStats = lazy(() => import('../components/VisitorStats'));

const RANDOM_MINUTES_RANGE = [15, 30];
const WHATSAPP_CHATBOT_NUMBER = '918637625155';
const WHATSAPP_AGENT_NUMBER = '917550025155';

const getRandomMinutes = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const createWhatsAppLink = (phone, text) => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

const features = [
  "Latest PS5 games with 4K display",
  "Professional pool tables",
  "Comfortable gaming environment",
  "Monthly memberships with 50% savings",
];

const pricing = [
  { label: "PS5 Gaming (per controller)", original: 150, discounted: 113 },
  { label: "Pool Table (per hour)", original: 300, discounted: 225 },
];

const memberships = [
  { name: "💎 Silver Membership", description: "Up to 2 players", price: 199, priceColor: "text-neon-blue" },
  { name: "🌟 Gold Membership", description: "Up to 4 players", price: 349, priceColor: "text-neon-pink" },
  { name: "Extra players (per hour)", price: 49, priceColor: "text-neon-blue" },
  { name: "Loyalty (members)", description: "5 pts per ₹100", priceColor: "text-neon-pink" }
];

const BookingLanding = () => {
  const [countdownEnds, setCountdownEnds] = useState(() => {
    const end = new Date();
    end.setMinutes(end.getMinutes() + getRandomMinutes(...RANDOM_MINUTES_RANGE));
    return end;
  });

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [iframeExpanded, setIframeExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const distance = countdownEnds.getTime() - now;
      if (distance < 0) {
        const newEnd = new Date();
        newEnd.setMinutes(newEnd.getMinutes() + getRandomMinutes(...RANDOM_MINUTES_RANGE));
        setCountdownEnds(newEnd);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [countdownEnds]);

  const chatbotLink = useMemo(() => 
    createWhatsAppLink(WHATSAPP_CHATBOT_NUMBER, "Hi! I'd like to book a slot at Cuephoria. [Monthly Membership Offer]"), []);

  const agentLink = useMemo(() => 
    createWhatsAppLink(WHATSAPP_AGENT_NUMBER, "Hi! I'd like to speak with a real Cuephoria agent regarding bookings."), []);

  const renderTimeUnit = useCallback(([unit, value]) => (
    <div key={unit} className="text-center transform hover:scale-110 transition-all duration-500">
      <div className="luxury-glass-card bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-xl px-3 md:px-6 py-3 md:py-4 rounded-2xl border border-white/20 shadow-2xl hover:shadow-neon-purple/50 transition-all duration-700 group">
        <span className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg group-hover:text-shadow-glow">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs md:text-sm font-semibold text-neon-blue mt-2 block uppercase tracking-widest animate-pulse">
        {unit}
      </span>
    </div>
  ), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-darker via-purple-900/20 to-gaming-darker text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Interactive mouse follower */}
      {!isMobile && (
        <div 
          className="fixed w-6 h-6 bg-gradient-to-r from-neon-pink to-neon-blue rounded-full blur-sm opacity-60 pointer-events-none z-50 transition-all duration-100"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
          }}
        />
      )}

      <SEOMetadata
        title="Book Now | Student Discount Gaming & Pool in Trichy | Cuephoria"
        description="Book your PS5 gaming session or 8-ball pool table at Cuephoria - Special discounts for college & school students in Trichy! Best hangout place for students with exclusive offers."
        keywords="student gaming trichy, college hangout trichy, student discount gaming, ps5 gaming student discount, pool table student offers trichy"
      />

      <section className="relative py-12 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            {/* Animated logo */}
            <div className="inline-block mb-8 animate-float">
              <div className="luxury-glass-card p-4 rounded-3xl backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/20 shadow-2xl hover:shadow-neon-purple/30 transition-all duration-700">
                <img
                  src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png"
                  alt="Cuephoria Logo"
                  className="h-16 md:h-24 mx-auto filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-500"
                  loading="eager"
                />
              </div>
            </div>

            {/* Luxury title with gradient text */}
            <h1 className="text-4xl md:text-7xl font-bold mb-8 relative">
              <span className="block bg-gradient-to-r from-neon-blue via-purple-400 to-neon-pink bg-clip-text text-transparent animate-gradient-x drop-shadow-xl">
                BOOK YOUR SPOT
              </span>
              <span className="block text-xl md:text-4xl mt-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-light tracking-wide">
                PS5 Gaming & Pool Tables
              </span>
              <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-yellow-400 animate-spin-slow" />
              <Crown className="absolute -top-4 -left-4 h-10 w-10 text-gold animate-bounce" />
            </h1>

            {/* Premium offer banner */}
            <div className="luxury-glass-card bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 backdrop-blur-2xl p-6 md:p-8 rounded-3xl border border-white/30 shadow-2xl mb-8 transform hover:scale-105 transition-all duration-700 hover:shadow-neon-pink/40">
              <div className="relative">
                <p className="text-xl md:text-3xl font-bold mb-3 flex items-center justify-center gap-3 animate-pulse-luxury">
                  <Siren className="h-6 w-6 md:h-8 md:w-8 text-red-400 animate-bounce" />
                  <span className="bg-gradient-to-r from-neon-pink via-red-400 to-neon-pink bg-clip-text text-transparent">
                    MONTHLY MEMBERSHIP - 50% OFF!
                  </span>
                  <Siren className="h-6 w-6 md:h-8 md:w-8 text-red-400 animate-bounce" />
                </p>
                <p className="text-lg md:text-2xl text-white/90 font-medium">
                  Get <span className="text-neon-blue font-bold text-2xl md:text-3xl animate-pulse">25% OFF</span> on your total bill with online bookings!
                </p>
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-purple-500 to-neon-blue opacity-30 blur-lg"></div>
              </div>
            </div>

            {/* Luxury countdown timer */}
            <div className="mb-12">
              <p className="text-gray-300 mb-6 flex items-center justify-center gap-3 text-lg md:text-xl font-semibold">
                <Clock className="h-6 w-6 md:h-8 md:w-8 text-red-400 animate-pulse" />
                <span className="uppercase tracking-widest bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  ⚡ LUXURY OFFER ENDING SOON ⚡
                </span>
                <Clock className="h-6 w-6 md:h-8 md:w-8 text-red-400 animate-pulse" />
              </p>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-pink-600/30 to-purple-600/30 rounded-3xl blur-xl animate-pulse-slow"></div>
                <div className="luxury-glass-card backdrop-blur-2xl bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-blue-900/40 p-8 rounded-3xl border border-white/30 shadow-2xl relative z-10">
                  <div className="flex justify-center gap-4 md:gap-8">
                    {Object.entries(timeLeft).map(renderTimeUnit)}
                  </div>
                </div>
              </div>
            </div>

            {/* Location and hours with luxury styling */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 text-lg md:text-xl">
              <div className="luxury-glass-card bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20 flex items-center space-x-3 hover:bg-white/10 transition-all duration-500 group">
                <Clock className="h-6 w-6 text-neon-pink group-hover:animate-spin" />
                <span className="font-medium">11:00 AM - 11:00 PM</span>
              </div>
              <div className="luxury-glass-card bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20 flex items-center space-x-3 hover:bg-white/10 transition-all duration-500 group">
                <MapPin className="h-6 w-6 text-neon-blue group-hover:animate-bounce" />
                <span className="font-medium">Thiruverumbur, Trichy</span>
              </div>
            </div>
          </div>

          {/* Live Occupancy Section with Luxury Design */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="luxury-glass-card bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-neon-blue/30 transition-all duration-700">
              <div className="p-6 md:p-8 border-b border-white/20 text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10">
                <h2 className="text-2xl md:text-4xl font-bold flex items-center justify-center gap-4 mb-3">
                  <ActivitySquare className="text-neon-pink h-8 w-8 md:h-10 md:w-10 animate-pulse" />
                  <span className="bg-gradient-to-r from-neon-blue via-purple-400 to-neon-pink bg-clip-text text-transparent">
                    Live Occupancy Status
                  </span>
                  <Zap className="h-8 w-8 md:h-10 md:w-10 text-yellow-400 animate-bounce" />
                </h2>
                <p className="text-gray-300 text-lg md:text-xl font-medium">
                  Real-time availability of Pool Tables and PS5 controllers
                </p>
              </div>
              <div className="relative w-full" style={{ height: isMobile ? "400px" : "500px" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-gaming-darker/90 via-purple-900/50 to-gaming-darker/90 flex flex-col items-center justify-center z-10 animate-pulse" id="occupancy-loader">
                  <div className="luxury-spinner mb-4"></div>
                  <p className="text-neon-blue text-lg md:text-xl font-semibold animate-pulse">Loading live data...</p>
                </div>
                <iframe
                  src="https://admin.cuephoria.in/public/stations"
                  className="w-full h-full border-0 rounded-b-3xl"
                  style={{ minHeight: isMobile ? "400px" : "500px" }}
                  title="Cuephoria Live Occupancy"
                  onLoad={() => {
                    const loader = document.getElementById('occupancy-loader');
                    if (loader) loader.style.display = 'none';
                  }}
                  aria-label="Live occupancy status for Cuephoria pool tables and PS5 controllers"
                />
              </div>
            </div>
          </div>

          {/* Two Column Layout with Premium Styling */}
          <div className="flex flex-col lg:flex-row luxury-glass-card bg-gradient-to-br from-gaming-darker/80 via-purple-900/20 to-gaming-darker/80 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl max-w-8xl mx-auto">
            {/* Booking Widget Column */}
            <div className="w-full lg:w-7/12 p-6 md:p-8 lg:p-12 relative">
              {/* Premium Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <h2 className="text-2xl md:text-4xl font-bold text-center lg:text-left mb-6 lg:mb-0">
                  <span className="bg-gradient-to-r from-neon-blue via-purple-400 to-neon-pink bg-clip-text text-transparent">
                    Book Your Session Now
                  </span>
                </h2>
                
                {/* Desktop: Premium buttons */}
                <div className="hidden lg:flex items-center gap-4">
                  <button
                    aria-label={iframeExpanded ? "Collapse booking" : "Expand booking"}
                    className="luxury-button bg-gradient-to-r from-neon-blue to-blue-600 hover:from-blue-600 hover:to-neon-blue text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-neon-blue/50 transition-all duration-500 flex items-center gap-3 transform hover:scale-105"
                    onClick={() => setIframeExpanded(e => !e)}
                  >
                    <Expand className="h-5 w-5 animate-pulse" />
                    {iframeExpanded ? "Collapse" : "Expand"}
                  </button>
                  <a
                    href="https://admin.cuephoria.in/public/booking"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open in new tab"
                    className="luxury-button bg-gradient-to-r from-neon-pink to-purple-600 hover:from-purple-600 hover:to-neon-pink text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-neon-pink/50 transition-all duration-500 flex items-center gap-3 transform hover:scale-105"
                  >
                    <ExternalLink className="h-5 w-5 animate-pulse" />
                    New Tab
                  </a>
                </div>
              </div>
              
              {/* Mobile: Premium controls */}
              <div className="lg:hidden">
                <div className="luxury-glass-card bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 mb-6 text-center">
                  <p className="text-lg font-bold mb-2 text-white">
                    🎮 <span className="bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">Premium Booking Experience</span> 🎮
                  </p>
                  <p className="text-sm text-gray-300">Need more space? Use the controls below.</p>
                </div>
                
                <div className="flex justify-center gap-4 mb-8">
                  <button
                    aria-label={iframeExpanded ? "Collapse booking" : "Expand booking"}
                    className="luxury-button bg-gradient-to-r from-neon-blue to-blue-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-neon-blue/50 transition-all duration-500 flex items-center gap-2 transform hover:scale-105"
                    onClick={() => setIframeExpanded(e => !e)}
                  >
                    <Expand className="h-4 w-4" />
                    {iframeExpanded ? "Collapse" : "Expand"}
                  </button>
                  <a
                    href="https://admin.cuephoria.in/public/booking"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open in new tab"
                    className="luxury-button bg-gradient-to-r from-neon-pink to-purple-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-neon-pink/50 transition-all duration-500 flex items-center gap-2 transform hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4" />
                    New Tab
                  </a>
                </div>
              </div>

              {/* Premium Booking iframe */}
              <div 
                className="luxury-glass-card w-full rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-br from-gaming-darker/50 to-purple-900/20 backdrop-blur-xl shadow-2xl transition-all duration-700 hover:shadow-neon-purple/30"
                style={{
                  height: iframeExpanded ? (isMobile ? "85vh" : "90vh") : "1000px",
                  maxHeight: "95vh"
                }}
              >
                <iframe 
                  width="100%" 
                  height="100%"
                  src="https://admin.cuephoria.in/public/booking" 
                  frameBorder="0" 
                  allowFullScreen
                  className="w-full h-full rounded-2xl"
                  title="Cuephoria Booking Website"
                  loading="lazy"
                  aria-label="Cuephoria session booking"
                  style={{
                    minHeight: iframeExpanded ? (isMobile ? "85vh" : "90vh") : "1000px"
                  }}
                />
              </div>
            </div>

            {/* Info Column with Luxury Styling */}
            <div className="w-full lg:w-5/12 p-6 md:p-8 lg:p-12 luxury-glass-card bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-blue-600/10 backdrop-blur-xl">
              {/* Why Cuephoria - Premium */}
              <div className="mb-10">
                <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
                  <Star className="h-6 w-6 md:h-7 md:w-7 text-neon-pink mr-3 animate-spin-slow" />
                  <span className="bg-gradient-to-r from-neon-pink to-purple-400 bg-clip-text text-transparent">
                    Why Cuephoria?
                  </span>
                </h3>
                <ul className="space-y-4 text-gray-200 text-base md:text-lg">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start luxury-list-item group">
                      <div className="h-6 w-6 md:h-7 md:w-7 rounded-full bg-gradient-to-r from-neon-pink/30 to-purple-500/30 backdrop-blur-sm border border-white/20 flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-all duration-300">
                        <span className="text-neon-pink text-sm font-bold">✓</span>
                      </div>
                      <span className="group-hover:text-white transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Luxury Pricing Section */}
              <div className="mb-10">
                <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
                  <Table2 className="h-6 w-6 md:h-7 md:w-7 text-neon-blue mr-3 animate-pulse" />
                  <span className="bg-gradient-to-r from-neon-blue to-cyan-400 bg-clip-text text-transparent">
                    Premium Pricing
                  </span>
                </h3>
                <div className="luxury-glass-card rounded-2xl overflow-hidden border border-white/20 backdrop-blur-xl bg-gradient-to-br from-blue-600/10 to-purple-600/10">
                  <div className="overflow-x-auto">
                    <Table className="w-full">
                      <TableBody>
                        {pricing.map(({ label, original, discounted }, idx) => (
                          <TableRow key={idx} className="border-b border-white/10 hover:bg-white/5 transition-all duration-300 group">
                            <TableCell className="py-4 text-left font-semibold text-white text-base md:text-lg group-hover:text-neon-blue transition-colors duration-300">
                              {label}
                            </TableCell>
                            <TableCell className="py-4 text-right">
                              <div className="flex items-center justify-end gap-3">
                                <span className="font-bold text-gray-400 line-through text-base md:text-lg">₹{original}</span>
                                <span className="font-bold bg-gradient-to-r from-neon-blue to-cyan-400 bg-clip-text text-transparent text-xl md:text-2xl animate-pulse">₹{discounted}</span>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>

              {/* Luxury Memberships */}
              <div className="mb-10">
                <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
                  <Award className="h-6 w-6 md:h-7 md:w-7 text-gold mr-3 animate-bounce" />
                  <span className="bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
                    VIP Memberships - 50% OFF
                  </span>
                </h3>
                <div className="luxury-glass-card rounded-2xl overflow-hidden border border-gold/30 backdrop-blur-xl bg-gradient-to-br from-yellow-600/10 to-orange-600/10 shadow-xl">
                  <div className="overflow-x-auto">
                    <Table className="w-full">
                      <TableBody>
                        {memberships.map(({ name, description, price, priceColor }, idx) => (
                          <TableRow key={idx} className={`${idx !== memberships.length - 1 ? 'border-b border-white/10' : ''} hover:bg-white/5 transition-all duration-300 group`}>
                            <TableCell className="py-4 text-left text-base md:text-lg">
                              <div className="flex items-center">
                                <span className="font-semibold text-white group-hover:text-gold transition-colors duration-300">{name}</span>
                              </div>
                              {description && <p className="text-sm text-gray-400 mt-1">{description}</p>}
                            </TableCell>
                            <TableCell className={`py-4 text-right text-base md:text-lg ${priceColor || ''} group-hover:scale-105 transition-transform duration-300`}>
                              <span className="font-bold">{price !== undefined ? `₹${price}` : description}</span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>

              {/* Visitor Stats with Animation */}
              <div className="mt-8 mb-10">
                <Suspense fallback={
                  <div className="luxury-glass-card h-24 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse rounded-2xl border border-white/20 backdrop-blur-xl"></div>
                }>
                  <VisitorStats />
                </Suspense>
              </div>

              {/* Premium Contact Options */}
              <div className="text-center">
                <p className="text-sm md:text-base text-gray-300 mb-6 font-medium">
                  🔥 Can't book online? Reach our <span className="text-neon-pink font-bold">Premium Support</span> 🔥
                </p>
                <div className="space-y-4 mb-8">
                  <a 
                    href={chatbotLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="luxury-button w-full bg-gradient-to-r from-neon-pink via-pink-500 to-neon-pink text-white font-bold px-6 py-4 rounded-full shadow-lg hover:shadow-neon-pink/50 transition-all duration-500 flex items-center justify-center gap-3 transform hover:scale-105 group"
                    aria-label="Chat with Cuephoria Assistant Chatbot on WhatsApp"
                  >
                    <span className="text-lg">💬 AI Assistant (Instant Response)</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <p className="text-xs text-gray-400">WhatsApp AI Assistant – <strong className="text-neon-pink">+91 86376 25155</strong></p>
                  
                  <a 
                    href={agentLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="luxury-button w-full bg-gradient-to-r from-neon-blue via-blue-500 to-neon-blue text-white font-bold px-6 py-4 rounded-full shadow-lg hover:shadow-neon-blue/50 transition-all duration-500 flex items-center justify-center gap-3 transform hover:scale-105 group"
                    aria-label="Talk to a Real Agent on WhatsApp"
                  >
                    <span className="text-lg">👨‍💼 Human Agent (Personal Touch)</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <p className="text-xs text-gray-400">Human WhatsApp Agent – <strong className="text-neon-blue">+91 75500 25155</strong></p>
                </div>
                
                <div className="luxury-glass-card bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-xl p-4 rounded-2xl border border-white/20 text-base md:text-lg font-semibold">
                  📞 <span className="text-emerald-400">Premium Hotlines:</span>
                  <br />
                  <span className="block mt-2 text-white">+91 86376 25155 (Primary)</span>
                  <span className="block text-white">+91 75500 25155 (Secondary)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Return Button */}
          <div className="mt-12 text-center">
            <button 
              onClick={() => navigate('/')}
              className="luxury-button bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-500 transform hover:scale-105"
              aria-label="Return to main site"
            >
              ← Return to Main Site
            </button>
          </div>
        </div>
      </section>
      <Footer />

      <style jsx>{`
        /* Custom luxury animations and styles */
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-luxury {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-luxury { animation: pulse-luxury 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        .luxury-glass-card {
          position: relative;
          overflow: hidden;
        }
        
        .luxury-glass-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s;
        }
        
        .luxury-glass-card:hover::before {
          left: 100%;
        }
        
        .luxury-button {
          position: relative;
          overflow: hidden;
        }
        
        .luxury-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .luxury-button:hover::before {
          width: 300px;
          height: 300px;
        }
        
        .luxury-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid rgba(139, 69, 19, 0.1);
          border-left: 4px solid #8b45ff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        .luxury-list-item:hover {
          transform: translateX(8px);
          transition: all 0.3s ease;
        }
        
        .text-shadow-glow {
          text-shadow: 0 0 20px currentColor;
        }
        
        .text-gold { color: #ffd700; }
        .text-neon-pink { color: #ff0080; }
        .text-neon-blue { color: #00bfff; }
        
        .shadow-neon-purple { box-shadow: 0 0 30px rgba(138, 43, 226, 0.5); }
        .shadow-neon-pink { box-shadow: 0 0 30px rgba(255, 0, 128, 0.5); }
        .shadow-neon-blue { box-shadow: 0 0 30px rgba(0, 191, 255, 0.5); }
        
        /* Glassmorphism effects */
        .backdrop-blur-2xl { backdrop-filter: blur(40px); }
        .backdrop-blur-xl { backdrop-filter: blur(24px); }
      `}</style>
    </div>
  );
};

export default BookingLanding;
