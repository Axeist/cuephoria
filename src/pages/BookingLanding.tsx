import React, { useEffect, useState, lazy, Suspense, useCallback, useMemo } from 'react';
import { ArrowRight, Clock, MapPin, Star, Award, Table2, Siren, ActivitySquare, Expand, ExternalLink, Percent, Gift, Zap, Sparkles, Copy, Target, X, Calendar, GraduationCap } from 'lucide-react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import SEOMetadata from '../components/SEOMetadata';
import { Table, TableBody, TableCell, TableRow } from "../components/ui/table";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { useIsMobile } from '../hooks/use-mobile';
import { useToast } from '../hooks/use-toast';
import CuephoriaLiteAnnouncement from '../components/CuephoriaLiteAnnouncement';
import PragyanAnnouncement from '../components/PragyanAnnouncement';

const VisitorStats = lazy(() => import('../components/VisitorStats'));

const RANDOM_MINUTES_RANGE = [15, 30];
const WHATSAPP_CHATBOT_NUMBER = '918637625155';
const WHATSAPP_AGENT_NUMBER = '917550025155';

const getRandomMinutes = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const createWhatsAppLink = (phone, text) => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

const features = [
  "Latest PS5 games with 4K display",
  "Meta Quest 3S VR gaming with mixed reality",
  "Professional pool tables",
  "Comfortable gaming environment",
  "Monthly memberships with 50% savings",
];

const pricing = [
  { label: "PS5 Gaming (per controller)", original: 150, discounted: 150 },
  { label: "Pool Table (per hour)", original: 300, discounted: 300 },
  { label: "VR Station (per session)", original: 150, discounted: 150 },
];

const memberships = [
  { name: "💎 Silver Membership", description: "Up to 2 players", price: 299, priceColor: "text-neon-blue" },
  { name: "🌟 Gold Membership", description: "Up to 4 players", price: 499, priceColor: "text-neon-pink" },
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { toast } = useToast();

  const copyCouponCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Coupon Copied!",
      description: `${code} has been copied to clipboard`,
    });
  };

  const couponCodes = [
    {
      code: "CUEPHORIA20",
      discount: "20% OFF",
      icon: <Percent className="h-5 w-5 text-neon-blue" />,
      textColor: "text-neon-blue",
      bgColor: "bg-neon-blue/20",
      bgGradient: "from-neon-blue/15 via-purple-500/10 to-neon-blue/15",
      borderColor: "border-neon-blue/30 hover:border-neon-blue/60",
      shadowColor: "hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]",
      details: [
        { type: "PS5/VR", original: "₹150", discounted: "₹120", savings: "₹30" },
        { type: "Pool", original: "₹300", discounted: "₹240", savings: "₹60" }
      ],
      requirement: null
    },
    {
      code: "CUEPHORIA35",
      discount: "35% OFF",
      icon: <Gift className="h-5 w-5 text-purple-400" />,
      textColor: "text-purple-400",
      bgColor: "bg-purple-500/20",
      bgGradient: "from-purple-500/15 via-pink-500/10 to-purple-500/15",
      borderColor: "border-purple-500/30 hover:border-purple-500/60",
      shadowColor: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
      details: [
        { type: "PS5/VR", original: "₹150", discounted: "₹97.50", savings: "₹52.50" },
        { type: "Pool", original: "₹300", discounted: "₹195", savings: "₹105" }
      ],
      requirement: "Student ID Required"
    },
    {
      code: "HH99",
      discount: "₹99 FIXED",
      icon: <Zap className="h-5 w-5 text-amber-400" />,
      textColor: "text-amber-400",
      bgColor: "bg-amber-500/20",
      bgGradient: "from-amber-500/15 via-orange-500/10 to-amber-500/15",
      borderColor: "border-amber-500/30 hover:border-amber-500/60",
      shadowColor: "hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
      details: [
        { type: "PS5", original: "₹150", discounted: "₹99", savings: "₹51" },
        { type: "Pool", original: "₹300", discounted: "₹99", savings: "₹201" }
      ],
      requirement: "Mon-Fri, 11 AM-4 PM",
      animate: true
    },
    {
      code: "NIT35",
      discount: "35% OFF",
      icon: <Sparkles className="h-5 w-5 text-green-400" />,
      textColor: "text-green-400",
      bgColor: "bg-green-500/20",
      bgGradient: "from-green-500/15 via-teal-500/10 to-green-500/15",
      borderColor: "border-green-500/30 hover:border-green-500/60",
      shadowColor: "hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]",
      details: [
        { type: "PS5/VR", original: "₹150", discounted: "₹97.50", savings: "₹52.50" },
        { type: "Pool", original: "₹300", discounted: "₹195", savings: "₹105" }
      ],
      requirement: null
    }
  ];

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
    <div key={unit} className="text-center">
      <div className="bg-gaming-accent/30 backdrop-blur-sm px-2 md:px-4 py-2 md:py-3 rounded-md border border-neon-pink/50 shadow-[0_0_15px_rgba(255,45,239,0.4)]">
        <span className="text-lg md:text-3xl font-bold text-white">{value.toString().padStart(2, '0')}</span>
      </div>
      <span className="text-[10px] md:text-xs font-medium text-neon-blue mt-1 block uppercase tracking-wider">{unit}</span>
    </div>
  ), []);

  return (
    <div className="min-h-screen bg-gaming-darker text-white">
      <SEOMetadata
        title="Book Now | Student Discount Gaming, VR & Pool in Trichy | Cuephoria"
        description="Book your PS5 gaming, Meta Quest 3S VR, or 8-ball pool table at Cuephoria - Special discounts for college & school students in Trichy! Best hangout place for students with exclusive offers."
        keywords="student gaming trichy, college hangout trichy, student discount gaming, ps5 gaming student discount, vr gaming trichy, meta quest 3s, pool table student offers trichy"
      />
      <section className="relative py-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gaming-darker">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,78,221,0.1)_0,rgba(15,25,40,0.5)_100%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-[98vw] lg:max-w-[1600px]">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-block animate-pulse-neon mb-4">
              <img
                src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png"
                alt="Cuephoria Logo"
                className="h-14 md:h-20 mx-auto"
                loading="eager"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="block neon-text-blue">BOOK YOUR SPOT</span>
              <span className="block text-xl md:text-3xl mt-2 text-white">PS5 Gaming, VR & Pool Tables</span>
            </h1>
            <div className="bg-gaming-darker/80 backdrop-blur-md p-3 md:p-4 rounded-lg border border-neon-pink/30 mb-4 md:mb-6">
              <p className="text-lg md:text-xl text-neon-pink font-bold mb-1 md:mb-2 animate-blink-slow flex items-center justify-center gap-2">
                <Siren className="h-5 w-5 text-red-500 animate-pulse" />
                MONTHLY MEMBERSHIP - 50% OFF!
                <Siren className="h-5 w-5 text-red-500 animate-pulse" />
              </p>
              <p className="text-base md:text-lg text-white">
                Get <span className="text-neon-blue font-bold">25% OFF</span> on your total bill with online bookings!
              </p>
            </div>
            
            {/* Cuephoria Lite Announcement */}
            <div className="max-w-4xl mx-auto mb-6 md:mb-8">
              <PragyanAnnouncement variant="card" />
            </div>
            <div className="max-w-4xl mx-auto mb-6 md:mb-8">
              <CuephoriaLiteAnnouncement variant="card" />
            </div>
            
            <div className="mb-6 md:mb-8">
              <p className="text-gray-300 mb-2 flex items-center justify-center gap-2 animate-blink-slow">
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-red-500 animate-pulse" />
                <span className="text-sm md:text-base uppercase tracking-wider font-semibold">OFFER ENDING SOON:</span>
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-red-500 animate-pulse" />
              </p>
              <div className="relative">
                <div className="absolute inset-0 bg-red-600/15 rounded-lg animate-pulse" />
                <div className="flex justify-center gap-2 md:gap-3 relative z-10 p-3 md:p-4">
                  {Object.entries(timeLeft).map(renderTimeUnit)}
                </div>
                <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-neon-pink via-neon-blue to-neon-pink opacity-50 blur-[2px] animate-pulse -z-10" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6 text-gray-200 text-sm md:text-base">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-neon-pink" />
                <span>11:00 AM - 11:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-neon-blue" />
                <span>Thiruverumbur, Trichy</span>
              </div>
            </div>
          </div>

          {/* Live Occupancy Status Section */}
          <div className="max-w-[95vw] lg:max-w-[1400px] mx-auto mb-6 md:mb-8">
            <div className="bg-gaming-darker/70 backdrop-blur-lg border border-neon-blue/30 rounded-xl overflow-hidden shadow-lg shadow-neon-blue/10">
              <div className="p-3 md:p-4 border-b border-neon-blue/20 text-center">
                <h2 className="text-xl md:text-2xl font-bold flex items-center justify-center gap-2">
                  <ActivitySquare className="text-neon-pink h-5 w-5 md:h-6 md:w-6" />
                  <span className="text-neon-blue">Live Occupancy Status</span>
                </h2>
                <p className="text-center text-gray-300 text-xs md:text-sm">
                  Check real-time availability of Pool Tables, PS5 controllers, and VR stations
                </p>
              </div>
              <div className="relative w-full" style={{ height: isMobile ? "400px" : "500px" }}>
                <div
                  className="absolute inset-0 bg-gaming-darker/70 flex flex-col items-center justify-center z-10 animate-pulse"
                  id="occupancy-loader"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-neon-blue rounded-full border-t-transparent animate-spin mb-3 md:mb-4" />
                  <p className="text-neon-blue text-sm md:text-base">Loading occupancy data...</p>
                </div>
                <iframe
                  src="https://admin.cuephoria.in/public/stations"
                  className="w-full h-full border-0"
                  style={{ minHeight: isMobile ? "400px" : "500px" }}
                  title="Cuephoria Live Occupancy"
                  onLoad={() => {
                    const loader = document.getElementById('occupancy-loader');
                    if (loader) loader.style.display = 'none';
                  }}
                  aria-label="Live occupancy status for Cuephoria pool tables, PS5 controllers, and VR stations"
                />
              </div>
            </div>
          </div>

          {/* Full Width Booking Iframe - Matching Information Container Width */}
          <div className="max-w-[95vw] lg:max-w-[1400px] mx-auto mb-6 md:mb-8">
            <div className="bg-gaming-darker/70 backdrop-blur-lg border border-neon-blue/30 rounded-xl overflow-hidden shadow-lg shadow-neon-blue/10">
              {/* Header Section - Matching Live Occupancy Status Style */}
              <div className="p-3 md:p-4 border-b border-neon-blue/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
                  <div className="text-center flex-1">
                    <h2 className="text-xl md:text-2xl font-bold flex items-center justify-center gap-2">
                      <Calendar className="text-neon-pink h-5 w-5 md:h-6 md:w-6" />
                      <span className="text-neon-blue">Book Your Session Now</span>
                    </h2>
                    <p className="text-center text-gray-300 text-xs md:text-sm mt-1">
                      Select your gaming station and time slot
                    </p>
                  </div>
                  
                  {/* Desktop: Align buttons to the right of the header */}
                  <div className="hidden md:flex items-center gap-3 flex-shrink-0">
                    <button
                      aria-label="Expand booking in fullscreen modal"
                      className="px-4 py-2 rounded-md bg-neon-blue/80 text-white font-semibold hover:bg-neon-blue transition flex items-center gap-2 text-sm whitespace-nowrap"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <Expand className="h-4 w-4" />
                      Expand
                    </button>
                    <a
                      href="https://admin.cuephoria.in/public/booking"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open in new tab"
                      className="px-4 py-2 rounded-md bg-gaming-accent text-white font-semibold hover:bg-neon-pink/80 flex items-center gap-2 transition text-sm whitespace-nowrap"
                    >
                      <ExternalLink className="h-4 w-4" />
                      New Tab
                    </a>
                  </div>
                </div>
                
                {/* Mobile: Show info banner and controls below header */}
                <div className="md:hidden mt-3">
                  <div className="mb-3 text-center p-3 bg-gaming-accent/10 rounded-lg text-sm text-white">
                    <strong>Cuephoria Booking:</strong> PS5, VR, or Pool Table slots.<br />
                    Need more space? <span className="font-bold text-neon-blue">Expand</span> or <span className="font-bold text-neon-blue">open in new tab</span>.
                  </div>
                  
                  <div className="flex justify-center gap-2">
                    <button
                      aria-label="Expand booking in fullscreen modal"
                      className="px-4 py-2 rounded-md bg-neon-blue/80 text-white font-semibold hover:bg-neon-blue transition flex items-center gap-2 text-sm"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <Expand className="h-4 w-4" />
                      Expand
                    </button>
                    <a
                      href="https://admin.cuephoria.in/public/booking"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open in new tab"
                      className="px-4 py-2 rounded-md bg-gaming-accent text-white font-semibold hover:bg-neon-pink/80 flex items-center gap-2 transition text-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                      New Tab
                    </a>
                  </div>
                </div>
              </div>

              {/* Cuephoria Booking Website - Stretched to full container width */}
              <div className="relative w-full overflow-hidden" style={{ height: isMobile ? "1000px" : "1200px", minHeight: isMobile ? "1000px" : "1200px", width: '100%' }}>
                <iframe 
                  src="https://admin.cuephoria.in/public/booking" 
                  frameBorder="0" 
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    border: 'none',
                    margin: 0,
                    padding: 0,
                    display: 'block'
                  }}
                  title="Cuephoria Booking Website"
                  loading="lazy"
                  aria-label="Cuephoria session booking"
                />
              </div>
            </div>
          </div>

          {/* Information Container - Separate Section */}
          <div className="max-w-[95vw] lg:max-w-[1400px] mx-auto bg-gaming-darker/50 backdrop-blur-lg rounded-xl border border-neon-blue/30 p-4 md:p-6 lg:p-8">
            {/* Top Row - Three Equal Columns on Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
              {/* Why Cuephoria Section */}
              <div className="bg-gaming-accent/10 rounded-lg p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center">
                  <Star className="h-4 w-4 md:h-5 md:w-5 text-neon-pink mr-2" />
                  Why Cuephoria?
                </h3>
                <ul className="space-y-2 md:space-y-3 text-gray-200 text-sm md:text-base">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="h-4 w-4 md:h-5 md:w-5 rounded-full bg-neon-pink/20 flex items-center justify-center mr-2 mt-1">
                        <span className="text-neon-pink text-xs">✓</span>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Pricing Section */}
              <div className="bg-gaming-accent/10 rounded-lg p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center">
                  <Table2 className="h-4 w-4 md:h-5 md:w-5 text-neon-blue mr-2" />
                  Quick Pricing
                </h3>
                <div className="rounded-lg overflow-hidden border border-gaming-accent/30">
                  <div className="overflow-x-auto">
                    <Table className="w-full">
                      <TableBody>
                        {pricing.map(({ label, original, discounted }, idx) => (
                          <TableRow key={idx} className="border-b border-gaming-accent/30 hover:bg-gaming-accent/10">
                            <TableCell className="py-2 md:py-3 text-left font-medium text-white text-sm md:text-base">
                              {label}
                            </TableCell>
                            <TableCell className="py-2 md:py-3 text-right">
                              <div className="flex items-center justify-end">
                                <span className="font-bold text-neon-blue text-lg md:text-xl">₹{original}</span>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>

              {/* Monthly Memberships Section */}
              <div className="bg-gaming-accent/10 rounded-lg p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center">
                  <Award className="h-4 w-4 md:h-5 md:w-5 text-neon-pink mr-2" />
                  Monthly Memberships - 50% OFF
                </h3>
                <div className="rounded-lg overflow-hidden border border-gaming-accent/30">
                  <div className="overflow-x-auto">
                    <Table className="w-full">
                      <TableBody>
                        {memberships.map(({ name, description, price, priceColor }, idx) => (
                          <TableRow key={idx} className={`${idx !== memberships.length - 1 ? 'border-b border-gaming-accent/30' : ''} hover:bg-gaming-accent/10`}>
                            <TableCell className="py-2 md:py-3 text-left text-sm md:text-base">
                              <div className="flex items-center">
                                <span className="font-medium text-white">{name}</span>
                              </div>
                              {description && <p className="text-xs text-gray-400">{description}</p>}
                            </TableCell>
                            <TableCell className={`py-2 md:py-3 text-right text-sm md:text-base ${priceColor || ''}`}>
                              <span className="font-bold">{price !== undefined ? `₹${price}` : description}</span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - Special Offers on Left, Stats and Contact on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Special Offers / Coupon Codes Section */}
              <div className="bg-gaming-accent/10 rounded-lg p-4 md:p-6 lg:col-span-1">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center">
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-neon-pink mr-2 animate-pulse" />
                  Special Offers
                </h3>
                <div className="mb-4 p-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-lg border border-orange-500/40">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="h-4 w-4 md:h-5 md:w-5 text-orange-400" />
                    <span className="text-orange-400 font-bold text-xs md:text-sm">Game Insider Exclusive</span>
                  </div>
                  <p className="text-xs text-gray-300 mb-2">
                    Get <span className="text-orange-400 font-bold">50% OFF</span> on all game services with code <span className="font-mono font-bold text-white">GAMEINSIDER50</span> when you join the Game Insider program!
                  </p>
                  <a 
                    href="/gameinsider" 
                    className="text-orange-400 hover:text-orange-300 text-xs font-semibold flex items-center gap-1"
                  >
                    Learn More <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <div className="space-y-3">
                  {couponCodes.map((coupon, idx) => (
                    <div
                      key={idx}
                      className={`group relative p-3 md:p-4 bg-gradient-to-r ${coupon.bgGradient} rounded-xl border ${coupon.borderColor} transition-all duration-300 ${coupon.shadowColor} overflow-hidden cursor-pointer transform hover:scale-[1.02]`}
                      onClick={() => copyCouponCode(coupon.code)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className={`p-1.5 ${coupon.bgColor} rounded-lg`}>
                              {coupon.icon}
                            </div>
                            <h5 className={`${coupon.textColor} font-bold text-sm md:text-base`}>{coupon.code}</h5>
                          </div>
                          <span className={`px-2 py-1 ${coupon.bgColor} ${coupon.textColor} text-xs font-bold rounded-full border ${coupon.borderColor} ${coupon.animate ? 'animate-pulse' : ''}`}>
                            {coupon.discount}
                          </span>
                        </div>
                        {coupon.requirement && (
                          <div className="mb-2">
                            <span className="text-[10px] md:text-xs text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                              {coupon.requirement}
                            </span>
                          </div>
                        )}
                        <div className="space-y-1 text-xs md:text-sm">
                          {coupon.details.map((detail, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-300">
                              <span className="text-gray-500 line-through text-[10px] md:text-xs">{detail.original}</span>
                              <span className={`${coupon.textColor} font-semibold`}>→ {detail.discounted}</span>
                              <span className="text-green-400 text-[10px]">(Save {detail.savings})</span>
                              <span className="text-gray-500 text-[10px] md:text-xs">{detail.type}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-2 flex items-center gap-1 text-[10px] text-gray-400 group-hover:text-gray-300 transition-colors">
                          <Copy className="h-3 w-3" />
                          <span>Click to copy code</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <a 
                    href="https://www.cuephoria.in/book"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 w-full px-4 py-2.5 bg-gradient-to-r from-neon-pink via-purple-500 to-neon-blue text-white text-sm font-bold rounded-lg hover:shadow-[0_0_25px_rgba(255,45,239,0.5)] transition-all duration-300 group transform hover:scale-105"
                  >
                    <span>Book Now</span>
                    <Target className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Right Column - Stats and Contact */}
              <div className="lg:col-span-2 space-y-4 md:space-y-6">
                {/* Lazy load visitor stats component */}
                <div className="bg-gaming-accent/10 rounded-lg p-4 md:p-6">
                  <Suspense fallback={<div className="h-16 md:h-20 bg-gaming-accent/10 animate-pulse rounded-lg"></div>}>
                    <VisitorStats />
                  </Suspense>
                </div>

                {/* Contact Options Section */}
                <div className="bg-gaming-accent/10 rounded-lg p-4 md:p-6 text-center">
                <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
                  Can't book online right now? Reach us directly:
                </p>
                <div className="mb-4">
                  <a 
                    href={chatbotLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 rounded-md bg-neon-pink/90 text-white hover:bg-neon-pink transition-all duration-300 text-sm md:text-base"
                    aria-label="Chat with Cuephoria Assistant Chatbot on WhatsApp"
                  >
                    Chat with Cuephoria Assistant (Chatbot)
                    <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                  </a>
                  <p className="text-[11px] md:text-xs text-gray-400 mt-1">
                    WhatsApp AI Assistant (automated support) – <strong>+91 86376 25155</strong>
                  </p>
                </div>
                <div className="mb-4">
                  <a 
                    href={agentLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 rounded-md bg-neon-blue/90 text-white hover:bg-neon-blue transition-all duration-300 text-sm md:text-base"
                    aria-label="Talk to a Real Agent on WhatsApp"
                  >
                    Talk to a Real Agent on WhatsApp
                    <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                  </a>
                  <p className="text-[11px] md:text-xs text-gray-400 mt-1">
                    Direct WhatsApp with a human agent – <strong>+91 75500 25155</strong>
                  </p>
                </div>
                <div className="mt-4 text-gray-300 text-sm md:text-base">
                  📞 Call us:
                  <br />
                  <span className="block">+91 86376 25155 (Primary)</span>
                  <span className="block">+91 75500 25155 (Secondary)</span>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Return to main site button */}
          <div className="mt-6 md:mt-8 text-center">
            <button 
              onClick={() => navigate('/')}
              className="text-gray-400 hover:text-neon-blue transition-colors text-sm md:text-base"
              aria-label="Return to main site"
            >
              Return to main site
            </button>
          </div>
        </div>
      </section>
      
      {/* Fullscreen Booking Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent 
          className="max-w-[98vw] max-h-[98vh] w-[98vw] h-[98vh] p-0 bg-gaming-darker border border-neon-blue/30 rounded-lg overflow-hidden !translate-x-[-50%] !translate-y-[-50%] !left-1/2 !top-1/2"
          style={{
            maxWidth: '98vw',
            maxHeight: '98vh',
            width: '98vw',
            height: '98vh'
          }}
        >
          <div className="flex flex-col h-full w-full">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-neon-blue/30 bg-gaming-darker/80 flex-shrink-0">
              <div className="flex items-center gap-3">
                <h2 className="text-xl md:text-2xl font-bold text-neon-blue">
                  Cuephoria Booking
                </h2>
                <span className="text-xs md:text-sm text-gray-400 hidden md:inline">
                  Fullscreen booking experience
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://admin.cuephoria.in/public/booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-md bg-neon-blue/80 text-white font-semibold hover:bg-neon-blue transition flex items-center gap-2 text-sm"
                  aria-label="Open in new tab"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="hidden sm:inline">New Tab</span>
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-md bg-gaming-accent/50 hover:bg-gaming-accent text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Modal Content - Fullscreen Iframe */}
            <div className="flex-1 relative overflow-hidden bg-gaming-darker" style={{ minHeight: 0 }}>
              <iframe 
                width="100%" 
                height="100%"
                src="https://admin.cuephoria.in/public/booking" 
                frameBorder="0" 
                allowFullScreen
                className="w-full h-full"
                title="Cuephoria Booking Website - Fullscreen"
                loading="eager"
                aria-label="Cuephoria session booking in fullscreen"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default BookingLanding;
