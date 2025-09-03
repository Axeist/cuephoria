import React, { useEffect, useState, lazy, Suspense, useCallback, useMemo } from 'react';
import { ArrowRight, Clock, MapPin, Star, Award, Table2, Siren, ActivitySquare, Expand, ExternalLink, Minimize2, Phone, Maximize2 } from 'lucide-react';
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
  const [showQuickAccess, setShowQuickAccess] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  // Define height based on device and expanded state
  const getIframeHeight = () => {
    if (iframeExpanded) {
      return isMobile ? '95vh' : '85vh';
    } else {
      return isMobile ? '500px' : '600px';
    }
  };

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

  // Mobile Hero Component
  const MobileHero = () => (
    <div className="px-4 py-6 text-center bg-gradient-to-b from-gaming-darker to-gaming-accent/20">
      <div className="inline-block animate-pulse-neon mb-3">
        <img
          src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png"
          alt="Cuephoria Logo"
          className="h-12 mx-auto"
          loading="eager"
        />
      </div>
      <h1 className="text-2xl font-bold text-neon-blue mb-2">Book Your Spot</h1>
      <p className="text-sm text-gray-300 mb-4">PS5 Gaming & Pool Tables</p>
      
      {/* Mobile-optimized offer banner */}
      <div className="bg-neon-pink/20 border border-neon-pink/50 rounded-lg p-3 mb-4">
        <p className="text-neon-pink font-bold text-sm flex items-center justify-center gap-1">
          <Siren className="h-4 w-4 animate-pulse" />
          25% OFF Online Bookings!
          <Siren className="h-4 w-4 animate-pulse" />
        </p>
      </div>

      {/* Compact countdown for mobile */}
      <div className="mb-4">
        <p className="text-gray-300 mb-2 text-xs uppercase font-semibold flex items-center justify-center gap-1">
          <Clock className="h-3 w-3 text-red-500 animate-pulse" />
          Offer Ends Soon
        </p>
        <div className="flex justify-center gap-1">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="bg-gaming-accent/40 px-2 py-1 rounded border border-neon-pink/50">
                <span className="text-sm font-bold text-white">{value.toString().padStart(2, '0')}</span>
              </div>
              <span className="text-[8px] text-neon-blue mt-1 block uppercase">{unit[0]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick info */}
      <div className="flex items-center justify-center gap-4 text-xs text-gray-300">
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3 text-neon-pink" />
          <span>11AM-11PM</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="h-3 w-3 text-neon-blue" />
          <span>Trichy</span>
        </div>
      </div>
    </div>
  );

  // Quick Stats Row Component
  const QuickStatsRow = () => (
    <div className="flex justify-around py-4 bg-gaming-accent/10 text-center text-xs border-b border-gaming-accent/20">
      <div className="flex flex-col items-center">
        <div className="font-bold text-neon-blue text-lg">₹113</div>
        <div className="text-gray-400">PS5/hour</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-bold text-neon-blue text-lg">₹225</div>
        <div className="text-gray-400">Pool/hour</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-bold text-neon-pink text-lg">50%</div>
        <div className="text-gray-400">Membership</div>
      </div>
    </div>
  );

  // Floating Action Button
  const FloatingActionButton = () => (
    <div className="fixed bottom-20 right-4 z-50 md:hidden">
      <button
        onClick={() => setIframeExpanded(true)}
        className="bg-neon-pink text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-neon-pink/90 transition-all duration-300 animate-pulse"
        aria-label="Quick book now"
      >
        <span className="text-2xl">📅</span>
      </button>
    </div>
  );

  // Quick Access Panel
  const QuickAccessPanel = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-gaming-darker/95 backdrop-blur-sm border-t border-neon-blue/30 p-3 md:hidden z-40">
      <div className="flex justify-around">
        <button 
          className="flex flex-col items-center gap-1 text-xs min-h-[44px] min-w-[44px] justify-center"
          onClick={() => setShowQuickAccess(!showQuickAccess)}
        >
          <Clock className="h-5 w-5 text-neon-blue" />
          <span>Hours</span>
        </button>
        <a
          href="https://maps.google.com/?q=Thiruverumbur,+Trichy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-xs min-h-[44px] min-w-[44px] justify-center"
        >
          <MapPin className="h-5 w-5 text-neon-pink" />
          <span>Location</span>
        </a>
        <a
          href="tel:+918637625155"
          className="flex flex-col items-center gap-1 text-xs min-h-[44px] min-w-[44px] justify-center"
        >
          <Phone className="h-5 w-5 text-neon-blue" />
          <span>Call</span>
        </a>
      </div>
    </div>
  );

  // Mobile Booking Layout
  const MobileBookingLayout = () => (
    <div className="flex flex-col min-h-screen pb-20">
      <MobileHero />
      <QuickStatsRow />
      
      {/* Live Occupancy - Compact for Mobile */}
      <div className="p-4">
        <div className="bg-gaming-darker/70 backdrop-blur-lg border border-neon-blue/30 rounded-xl overflow-hidden">
          <div className="p-3 border-b border-neon-blue/20 text-center">
            <h2 className="text-lg font-bold text-neon-blue flex items-center justify-center gap-2">
              <ActivitySquare className="h-5 w-5 text-neon-pink" />
              Live Status
            </h2>
            <p className="text-xs text-gray-300">Real-time availability</p>
          </div>
          <div className="relative h-80">
            <div className="absolute inset-0 bg-gaming-darker/70 flex items-center justify-center z-10 animate-pulse" id="mobile-occupancy-loader">
              <div className="w-8 h-8 border-4 border-neon-blue rounded-full border-t-transparent animate-spin"></div>
            </div>
            <iframe
              src="https://admin.cuephoria.in/public/stations"
              className="w-full h-full border-0"
              title="Cuephoria Live Occupancy"
              onLoad={() => {
                const loader = document.getElementById('mobile-occupancy-loader');
                if (loader) loader.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="flex-1 px-4">
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 bg-gaming-darker/95 backdrop-blur-sm border-b border-neon-blue/30 p-3 mb-4 rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-neon-blue">Book Your Slot</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setIframeExpanded(!iframeExpanded)}
                className="px-3 py-2 bg-neon-blue/80 text-white rounded-full text-sm font-medium flex items-center gap-1 min-h-[44px]"
              >
                {iframeExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                {iframeExpanded ? "Collapse" : "Expand"}
              </button>
              <a
                href="https://admin.cuephoria.in/public/booking"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-gaming-accent text-white rounded-full text-sm font-medium flex items-center gap-1 min-h-[44px]"
              >
                <ExternalLink className="h-4 w-4" />
                New Tab
              </a>
            </div>
          </div>
          {iframeExpanded && (
            <p className="text-xs text-neon-blue mt-2">Full screen booking active</p>
          )}
        </div>

        {/* Booking iframe */}
        <div 
          className={`w-full rounded-lg overflow-hidden border border-neon-blue/30 bg-gaming-darker/50 transition-all duration-500 ${
            iframeExpanded ? 'shadow-2xl shadow-neon-blue/20' : 'shadow-md'
          }`}
          style={{ height: getIframeHeight() }}
        >
          <iframe 
            width="100%" 
            height="100%"
            src="https://admin.cuephoria.in/public/booking" 
            frameBorder="0" 
            allowFullScreen
            className="w-full h-full rounded-lg"
            title="Cuephoria Booking Website"
            loading="lazy"
            style={{ minHeight: getIframeHeight() }}
          />
        </div>

        {/* Contact Buttons - Mobile Optimized */}
        <div className="mt-4 space-y-3">
          <p className="text-center text-xs text-gray-400">Can't book online? Contact us:</p>
          <a 
            href={chatbotLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full py-3 px-4 rounded-lg bg-neon-pink/90 text-white text-center font-semibold text-sm min-h-[44px] flex items-center justify-center gap-2"
          >
            💬 Chat with Bot
            <ArrowRight className="h-4 w-4" />
          </a>
          <a 
            href={agentLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full py-3 px-4 rounded-lg bg-neon-blue/90 text-white text-center font-semibold text-sm min-h-[44px] flex items-center justify-center gap-2"
          >
            👨‍💼 Talk to Agent
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <FloatingActionButton />
      <QuickAccessPanel />
    </div>
  );

  // Desktop Layout (existing layout)
  const DesktopBookingLayout = () => (
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="inline-block animate-pulse-neon mb-4">
          <img
            src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png"
            alt="Cuephoria Logo"
            className="h-20 mx-auto"
            loading="eager"
          />
        </div>
        <h1 className="text-5xl font-bold mb-6">
          <span className="block neon-text-blue">BOOK YOUR SPOT</span>
          <span className="block text-3xl mt-2 text-white">PS5 Gaming & Pool Tables</span>
        </h1>
        <div className="bg-gaming-darker/80 backdrop-blur-md p-4 rounded-lg border border-neon-pink/30 mb-6">
          <p className="text-xl text-neon-pink font-bold mb-2 animate-blink-slow flex items-center justify-center gap-2">
            <Siren className="h-5 w-5 text-red-500 animate-pulse" />
            MONTHLY MEMBERSHIP - 50% OFF!
            <Siren className="h-5 w-5 text-red-500 animate-pulse" />
          </p>
          <p className="text-lg text-white">
            Get <span className="text-neon-blue font-bold">25% OFF</span> on your total bill with online bookings!
          </p>
        </div>
        <div className="mb-8">
          <p className="text-gray-300 mb-2 flex items-center justify-center gap-2 animate-blink-slow">
            <Clock className="h-5 w-5 text-red-500 animate-pulse" />
            <span className="text-base uppercase tracking-wider font-semibold">OFFER ENDING SOON:</span>
            <Clock className="h-5 w-5 text-red-500 animate-pulse" />
          </p>
          <div className="relative">
            <div className="absolute inset-0 bg-red-600/15 rounded-lg animate-pulse" />
            <div className="flex justify-center gap-3 relative z-10 p-4">
              {Object.entries(timeLeft).map(renderTimeUnit)}
            </div>
            <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-neon-pink via-neon-blue to-neon-pink opacity-50 blur-[2px] animate-pulse -z-10" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 mb-6 text-gray-200 text-base">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-neon-pink" />
            <span>11:00 AM - 11:00 PM</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-neon-blue" />
            <span>Thiruverumbur, Trichy</span>
          </div>
        </div>
      </div>

      {/* Live Occupancy Status Section */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="bg-gaming-darker/70 backdrop-blur-lg border border-neon-blue/30 rounded-xl overflow-hidden shadow-lg shadow-neon-blue/10">
          <div className="p-4 border-b border-neon-blue/20 text-center">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
              <ActivitySquare className="text-neon-pink h-6 w-6" />
              <span className="text-neon-blue">Live Occupancy Status</span>
            </h2>
            <p className="text-center text-gray-300 text-sm">
              Check real-time availability of Pool Tables and PS5 controllers
            </p>
          </div>
          <div className="relative w-full h-[500px]">
            <div
              className="absolute inset-0 bg-gaming-darker/70 flex flex-col items-center justify-center z-10 animate-pulse"
              id="desktop-occupancy-loader"
            >
              <div className="w-12 h-12 border-4 border-neon-blue rounded-full border-t-transparent animate-spin mb-4" />
              <p className="text-neon-blue">Loading occupancy data...</p>
            </div>
            <iframe
              src="https://admin.cuephoria.in/public/stations"
              className="w-full h-full border-0"
              title="Cuephoria Live Occupancy"
              onLoad={() => {
                const loader = document.getElementById('desktop-occupancy-loader');
                if (loader) loader.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="flex flex-row bg-gaming-darker/50 backdrop-blur-lg rounded-xl overflow-hidden border border-neon-blue/30 max-w-7xl mx-auto">
        {/* Booking Widget Column */}
        <div className="w-7/12 p-8 relative">
          <div className="flex flex-row items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-neon-blue">Book Your Session Now</h2>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIframeExpanded(!iframeExpanded)}
                className="px-4 py-2 rounded-md bg-neon-blue/80 text-white font-semibold hover:bg-neon-blue transition flex items-center gap-2 text-sm whitespace-nowrap"
              >
                {iframeExpanded ? <Minimize2 className="h-4 w-4" /> : <Expand className="h-4 w-4" />}
                {iframeExpanded ? "Collapse" : "Expand"}
              </button>
              <a
                href="https://admin.cuephoria.in/public/booking"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-gaming-accent text-white font-semibold hover:bg-neon-pink/80 flex items-center gap-2 transition text-sm whitespace-nowrap"
              >
                <ExternalLink className="h-4 w-4" />
                New Tab
              </a>
            </div>
          </div>

          <div 
            className={`w-full rounded-lg overflow-hidden border border-neon-blue/30 bg-gaming-darker/50 transition-all duration-500 ${
              iframeExpanded ? 'shadow-2xl shadow-neon-blue/20' : 'shadow-md'
            }`}
            style={{ height: getIframeHeight() }}
          >
            <iframe 
              width="100%" 
              height="100%"
              src="https://admin.cuephoria.in/public/booking" 
              frameBorder="0" 
              allowFullScreen
              className="w-full h-full rounded-lg"
              title="Cuephoria Booking Website"
              loading="lazy"
            />
          </div>
        </div>

        {/* Info Column */}
        <div className="w-5/12 p-8 bg-gaming-accent/10">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Star className="h-5 w-5 text-neon-pink mr-2" />
              Why Cuephoria?
            </h3>
            <ul className="space-y-3 text-gray-200">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-neon-pink/20 flex items-center justify-center mr-2 mt-1">
                    <span className="text-neon-pink text-xs">✓</span>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Table2 className="h-5 w-5 text-neon-blue mr-2" />
              Quick Pricing
            </h3>
            <div className="rounded-lg overflow-hidden border border-gaming-accent/30">
              <Table className="w-full">
                <TableBody>
                  {pricing.map(({ label, original, discounted }, idx) => (
                    <TableRow key={idx} className="border-b border-gaming-accent/30 hover:bg-gaming-accent/10">
                      <TableCell className="py-3 text-left font-medium text-white">{label}</TableCell>
                      <TableCell className="py-3 text-right">
                        <div className="flex items-center justify-end">
                          <span className="font-bold text-gray-400 line-through mr-2">₹{original}</span>
                          <span className="font-bold text-neon-blue text-xl">₹{discounted}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Award className="h-5 w-5 text-neon-pink mr-2" />
              Monthly Memberships - 50% OFF
            </h3>
            <div className="rounded-lg overflow-hidden border border-gaming-accent/30">
              <Table className="w-full">
                <TableBody>
                  {memberships.map(({ name, description, price, priceColor }, idx) => (
                    <TableRow key={idx} className={`${idx !== memberships.length - 1 ? 'border-b border-gaming-accent/30' : ''} hover:bg-gaming-accent/10`}>
                      <TableCell className="py-3 text-left">
                        <div className="flex items-center">
                          <span className="font-medium text-white">{name}</span>
                        </div>
                        {description && <p className="text-xs text-gray-400">{description}</p>}
                      </TableCell>
                      <TableCell className={`py-3 text-right ${priceColor || ''}`}>
                        <span className="font-bold">{price !== undefined ? `₹${price}` : description}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="mt-4">
            <Suspense fallback={<div className="h-20 bg-gaming-accent/10 animate-pulse rounded-lg"></div>}>
              <VisitorStats />
            </Suspense>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-400 mb-4">Can't book online right now? Reach us directly:</p>
            <div className="mb-4">
              <a 
                href={chatbotLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-neon-pink/90 text-white hover:bg-neon-pink transition-all duration-300"
              >
                Chat with Cuephoria Assistant (Chatbot)
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <p className="text-xs text-gray-400 mt-1">WhatsApp AI Assistant – <strong>+91 86376 25155</strong></p>
            </div>
            <div className="mb-4">
              <a 
                href={agentLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-neon-blue/90 text-white hover:bg-neon-blue transition-all duration-300"
              >
                Talk to a Real Agent on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <p className="text-xs text-gray-400 mt-1">Direct WhatsApp – <strong>+91 75500 25155</strong></p>
            </div>
            <div className="mt-4 text-gray-300">
              📞 Call us: +91 86376 25155 | +91 75500 25155
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button 
          onClick={() => navigate('/')}
          className="text-gray-400 hover:text-neon-blue transition-colors"
        >
          Return to main site
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gaming-darker text-white">
      <SEOMetadata
        title="Book Now | Student Discount Gaming & Pool in Trichy | Cuephoria"
        description="Book your PS5 gaming session or 8-ball pool table at Cuephoria - Special discounts for college & school students in Trichy! Best hangout place for students with exclusive offers."
        keywords="student gaming trichy, college hangout trichy, student discount gaming, ps5 gaming student discount, pool table student offers trichy"
      />
      <section className="relative py-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gaming-darker">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,78,221,0.1)_0,rgba(15,25,40,0.5)_100%)]" />
        </div>
        
        {/* Conditional Layout Based on Device */}
        {isMobile ? <MobileBookingLayout /> : <DesktopBookingLayout />}
      </section>
      <Footer />
    </div>
  );
};

export default BookingLanding;
