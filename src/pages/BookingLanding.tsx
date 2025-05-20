
import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { ArrowRight, Clock, MapPin, Star, Calendar, Award, Table2, Siren, ActivitySquare } from 'lucide-react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import SEOMetadata from '../components/SEOMetadata';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { useIsMobile } from '../hooks/use-mobile';

// Lazy load VisitorStats to reduce initial load time
const VisitorStats = lazy(() => import('../components/VisitorStats'));

const BookingLanding = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [countdownEnds] = useState(() => {
    // Set countdown to end with a random time between 15-30 minutes
    const end = new Date();
    const randomMinutes = Math.floor(Math.random() * (30 - 15 + 1)) + 15; // Random between 15-30
    end.setMinutes(end.getMinutes() + randomMinutes);
    return end;
  });
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);
  const [calendlyInitialized, setCalendlyInitialized] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  // Initialize Calendly only when it's visible in the viewport
  useEffect(() => {
    // Create an intersection observer to detect when Calendly container is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !calendlyInitialized) {
          // Only initialize Calendly when the container is visible and not already initialized
          initializeCalendly();
          setCalendlyInitialized(true);
          // Once initialized, disconnect the observer
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible
    
    // Start observing the Calendly container element
    if (calendlyRef.current) {
      observer.observe(calendlyRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [calendlyInitialized]);
  
  // Function to initialize Calendly
  const initializeCalendly = () => {
    if (window.Calendly && calendlyRef.current) {
      // Clear any existing content
      calendlyRef.current.innerHTML = '';
      
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/cuephoriaclub/60min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=131e2c&text_color=01ffff&primary_color=ff2cef',
        parentElement: calendlyRef.current,
        prefill: {},
        utm: {}
      });
      
      // Set a timeout to consider Calendly as loaded after 2 seconds
      // This helps provide better user experience if Calendly is slow to load
      const timer = setTimeout(() => {
        setIsCalendlyLoaded(true);
      }, 2000);
      
      // Listen for Calendly iframe to load
      const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.addedNodes.length > 0) {
            // Check if iframe is added
            if (calendlyRef.current?.querySelector('iframe')) {
              setIsCalendlyLoaded(true);
              clearTimeout(timer);
              mutationObserver.disconnect();
            }
          }
        });
      });
      
      mutationObserver.observe(calendlyRef.current, { childList: true, subtree: true });
      
      return () => {
        clearTimeout(timer);
        mutationObserver.disconnect();
      };
    }
  };
  
  // Separate useEffect for the countdown timer to ensure it runs independently
  useEffect(() => {
    // Countdown timer
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownEnds.getTime() - now;
      
      if (distance < 0) {
        // If time expired, reset to a new random time
        const newEnd = new Date();
        const newRandomMinutes = Math.floor(Math.random() * (30 - 15 + 1)) + 15;
        newEnd.setMinutes(newEnd.getMinutes() + newRandomMinutes);
        
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: newRandomMinutes,
          seconds: 0
        });
        
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };
    
    // Run immediately once
    updateCountdown();
    
    // Then update every second
    const timer = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(timer);
  }, [countdownEnds]);

  return (
    <div className="min-h-screen bg-gaming-darker text-white">
      <SEOMetadata 
        title="Book Now | Student Discount Gaming & Pool in Trichy | Cuephoria" 
        description="Book your PS5 gaming session or 8-ball pool table at Cuephoria - Special discounts for college & school students in Trichy! Best hangout place for students with exclusive offers."
        keywords="student gaming trichy, college hangout trichy, student discount gaming, ps5 gaming student discount, pool table student offers trichy"
      />
      
      {/* Hero Section with CTA */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gaming-darker">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,78,221,0.1)_0,rgba(15,25,40,0.5)_100%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-block animate-pulse-neon mb-4">
              <img 
                src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png" 
                alt="Cuephoria Logo"
                className="h-14 md:h-20 mx-auto"
                loading="eager" // Load this important image eagerly
              />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="block neon-text-blue">BOOK YOUR SPOT</span>
              <span className="block text-xl md:text-3xl mt-2 text-white">PS5 Gaming & Pool Tables</span>
            </h1>
            
            <div className="bg-gaming-darker/80 backdrop-blur-md p-3 md:p-4 rounded-lg border border-neon-pink/30 mb-4 md:mb-6">
              <p className="text-lg md:text-xl text-neon-pink font-bold mb-1 md:mb-2 animate-blink-slow flex items-center justify-center gap-2">
                <Siren className="h-5 w-5 text-red-500 animate-pulse" />
                OPENING MEGA OFFER!
                <Siren className="h-5 w-5 text-red-500 animate-pulse" />
              </p>
              <p className="text-base md:text-lg text-white">
                Get <span className="text-neon-blue font-bold">FLAT 50% OFF</span> on your total bill with online bookings!
              </p>
            </div>
            
            {/* Enhanced Countdown Timer with Blinking Effect - mobile optimized */}
            <div className="mb-6 md:mb-8">
              <p className="text-gray-300 mb-2 flex items-center justify-center gap-2 animate-blink-slow">
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-red-500 animate-pulse" />
                <span className="text-sm md:text-base uppercase tracking-wider font-semibold">OFFER ENDING SOON:</span>
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-red-500 animate-pulse" />
              </p>
              <div className="relative">
                {/* Pulsing background for urgency - enhanced */}
                <div className="absolute inset-0 bg-red-600/15 rounded-lg animate-pulse"></div>
                
                {/* Timer display - enhanced with mobile optimization */}
                <div className="flex justify-center gap-2 md:gap-3 relative z-10 p-3 md:p-4">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="text-center">
                      <div className="bg-gaming-accent/30 backdrop-blur-sm px-2 md:px-4 py-2 md:py-3 rounded-md border border-neon-pink/50 shadow-[0_0_15px_rgba(255,45,239,0.4)]">
                        <span className="text-lg md:text-3xl font-bold text-white">{value.toString().padStart(2, '0')}</span>
                      </div>
                      <span className="text-[10px] md:text-xs font-medium text-neon-blue mt-1 block uppercase tracking-wider">{unit}</span>
                    </div>
                  ))}
                </div>
                
                {/* Enhanced border effect with animation */}
                <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-neon-pink via-neon-blue to-neon-pink opacity-50 blur-[2px] animate-pulse -z-10"></div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6">
              <div className="flex items-center space-x-1 md:space-x-2 text-gray-200 text-sm md:text-base">
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-neon-pink" />
                <span>11:00 AM - 11:00 PM</span>
              </div>
              
              <div className="flex items-center space-x-1 md:space-x-2 text-gray-200 text-sm md:text-base">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-neon-blue" />
                <span>Thiruverumbur, Trichy</span>
              </div>
            </div>
          </div>
          
          {/* Live Occupancy Status Section - Improved for mobile */}
          <div className="max-w-5xl mx-auto mb-6 md:mb-8">
            <div className="bg-gaming-darker/70 backdrop-blur-lg border border-neon-blue/30 rounded-xl overflow-hidden shadow-lg shadow-neon-blue/10">
              <div className="p-3 md:p-4 border-b border-neon-blue/20 text-center">
                <h2 className="text-xl md:text-2xl font-bold flex items-center justify-center gap-1 md:gap-2">
                  <ActivitySquare className="text-neon-pink h-5 w-5 md:h-6 md:w-6" />
                  <span className="text-neon-blue">Live Occupancy Status</span>
                </h2>
                <p className="text-center text-gray-300 text-xs md:text-sm">
                  Check real-time availability of Pool Tables and PS5 controllers
                </p>
              </div>
              
              {/* Iframe with loading skeleton - height adjusted for mobile */}
              <div className="relative w-full" style={{ height: isMobile ? "400px" : "500px" }}>
                {/* Loading skeleton */}
                <div className="absolute inset-0 bg-gaming-darker/70 flex flex-col items-center justify-center z-10 animate-pulse" id="occupancy-loader">
                  <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-neon-blue rounded-full border-t-transparent animate-spin mb-3 md:mb-4"></div>
                  <p className="text-neon-blue text-sm md:text-base">Loading occupancy data...</p>
                </div>
                
                {/* Iframe for the occupancy view - height adjusted for mobile */}
                <iframe 
                  src="https://admin.cuephoria.in/public/stations" 
                  className="w-full h-full border-0"
                  style={{ minHeight: isMobile ? "400px" : "500px" }}
                  title="Cuephoria Live Occupancy"
                  onLoad={() => {
                    const loader = document.getElementById('occupancy-loader');
                    if (loader) loader.style.display = 'none';
                  }}
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* Two Column Layout - mobile optimized */}
          <div className="flex flex-col lg:flex-row bg-gaming-darker/50 backdrop-blur-lg rounded-xl overflow-hidden border border-neon-blue/30">
            {/* Booking Widget Column */}
            <div className="w-full lg:w-7/12 p-3 md:p-4 lg:p-8 relative">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-neon-blue">
                Book Your Session Now
              </h2>
              
              {/* Improved loading state with skeleton */}
              {!isCalendlyLoaded && (
                <div className="absolute inset-0 bg-gaming-darker/80 z-10 flex flex-col items-center justify-center rounded-xl">
                  <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-neon-blue rounded-full border-t-transparent animate-spin mb-3 md:mb-4"></div>
                  <p className="text-neon-blue text-center text-sm md:text-base">Loading booking calendar...</p>
                  
                  {/* Skeleton for calendar to show loading state */}
                  <div className="w-11/12 max-w-md mt-6 md:mt-8">
                    <div className="h-8 md:h-10 bg-gaming-accent/20 rounded-md mb-3 md:mb-4 animate-pulse"></div>
                    <div className="grid grid-cols-7 gap-1 mb-3 md:mb-4">
                      {[...Array(7)].map((_, i) => (
                        <div key={i} className="h-6 md:h-8 bg-gaming-accent/20 rounded-sm animate-pulse"></div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {[...Array(28)].map((_, i) => (
                        <div 
                          key={i} 
                          className="h-8 md:h-10 bg-gaming-accent/20 rounded-sm animate-pulse"
                          style={{ animationDelay: `${i * 50}ms` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              <div 
                ref={calendlyRef}
                className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden"
              ></div>
            </div>
            
            {/* Info Column */}
            <div className="w-full lg:w-5/12 p-3 md:p-4 lg:p-8 bg-gaming-accent/10">
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center">
                  <Star className="h-4 w-4 md:h-5 md:w-5 text-neon-pink mr-2" />
                  Why Cuephoria?
                </h3>
                <ul className="space-y-2 md:space-y-3 text-gray-200 text-sm md:text-base">
                  <li className="flex items-start">
                    <div className="h-4 w-4 md:h-5 md:w-5 rounded-full bg-neon-pink/20 flex items-center justify-center mr-2 mt-1">
                      <span className="text-neon-pink text-xs">✓</span>
                    </div>
                    <span>Latest PS5 games with 4K display</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-4 w-4 md:h-5 md:w-5 rounded-full bg-neon-pink/20 flex items-center justify-center mr-2 mt-1">
                      <span className="text-neon-pink text-xs">✓</span>
                    </div>
                    <span>Professional pool tables</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-4 w-4 md:h-5 md:w-5 rounded-full bg-neon-pink/20 flex items-center justify-center mr-2 mt-1">
                      <span className="text-neon-pink text-xs">✓</span>
                    </div>
                    <span>Comfortable gaming environment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-4 w-4 md:h-5 md:w-5 rounded-full bg-neon-pink/20 flex items-center justify-center mr-2 mt-1">
                      <span className="text-neon-pink text-xs">✓</span>
                    </div>
                    <span>Student-friendly pricing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-4 w-4 md:h-5 md:w-5 rounded-full bg-neon-pink/20 flex items-center justify-center mr-2 mt-1">
                      <span className="text-neon-pink text-xs">✓</span>
                    </div>
                    <span>Free AR Metashot Cricket Challenge</span>
                  </li>
                </ul>
              </div>
              
              {/* Updated Quick Pricing Section with Table - Mobile optimized */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center">
                  <Table2 className="h-4 w-4 md:h-5 md:w-5 text-neon-blue mr-2" />
                  Quick Pricing
                </h3>
                
                <div className="rounded-lg overflow-hidden border border-gaming-accent/30">
                  <div className="overflow-x-auto">
                    <Table className="w-full">
                      <TableBody>
                        <TableRow className="border-b border-gaming-accent/30 hover:bg-gaming-accent/10">
                          <TableCell className="py-2 md:py-3 text-left font-medium text-white text-sm md:text-base">
                            PS5 Gaming (per controller)
                          </TableCell>
                          <TableCell className="py-2 md:py-3 text-right">
                            <div className="flex items-center justify-end">
                              <span className="font-bold text-gray-400 line-through mr-1 md:mr-2 text-sm md:text-base">₹150</span>
                              <span className="font-bold text-neon-blue text-lg md:text-xl">₹75</span>
                            </div>
                          </TableCell>
                        </TableRow>
                        
                        <TableRow className="border-b border-gaming-accent/30 hover:bg-gaming-accent/10">
                          <TableCell className="py-2 md:py-3 text-left font-medium text-white text-sm md:text-base">
                            Pool Table (per hour)
                          </TableCell>
                          <TableCell className="py-2 md:py-3 text-right">
                            <div className="flex items-center justify-end">
                              <span className="font-bold text-gray-400 line-through mr-1 md:mr-2 text-sm md:text-base">₹300</span>
                              <span className="font-bold text-neon-blue text-lg md:text-xl">₹150</span>
                            </div>
                          </TableCell>
                        </TableRow>
                        
                        <TableRow className="border-b border-gaming-accent/30 hover:bg-gaming-accent/10">
                          <TableCell className="py-2 md:py-3 text-left font-medium text-white text-sm md:text-base">
                            Student Package (2 hours)
                          </TableCell>
                          <TableCell className="py-2 md:py-3 text-right">
                            <span className="font-bold text-neon-pink text-lg md:text-xl">₹350</span>
                          </TableCell>
                        </TableRow>
                        
                        <TableRow className="border-b border-gaming-accent/30 hover:bg-gaming-accent/10">
                          <TableCell className="py-2 md:py-3 text-left text-sm md:text-base">
                            <div className="flex items-center">
                              <Award className="h-4 w-4 md:h-5 md:w-5 text-neon-pink mr-1 md:mr-2" />
                              <span className="font-medium text-white">Loyalty (non-members)</span>
                            </div>
                          </TableCell>
                          <TableCell className="py-2 md:py-3 text-right text-sm md:text-base">
                            <span className="font-bold text-neon-pink">2 pts per ₹100</span>
                          </TableCell>
                        </TableRow>
                        
                        <TableRow className="border-b border-gaming-accent/30 hover:bg-gaming-accent/10">
                          <TableCell className="py-2 md:py-3 text-left text-sm md:text-base">
                            <div className="flex items-center">
                              <Award className="h-4 w-4 md:h-5 md:w-5 text-neon-blue mr-1 md:mr-2" />
                              <span className="font-medium text-white">Loyalty (members)</span>
                            </div>
                          </TableCell>
                          <TableCell className="py-2 md:py-3 text-right text-sm md:text-base">
                            <span className="font-bold text-neon-blue">5 pts per ₹100</span>
                          </TableCell>
                        </TableRow>
                        
                        <TableRow className="hover:bg-gaming-accent/10">
                          <TableCell className="py-2 md:py-3 text-left font-medium text-white text-sm md:text-base">
                            1 Loyalty Point Value
                          </TableCell>
                          <TableCell className="py-2 md:py-3 text-right">
                            <span className="font-bold text-neon-pink">₹1</span>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
              
              {/* Lazy load visitor stats component */}
              <div className="mt-4">
                <Suspense fallback={<div className="h-16 md:h-20 bg-gaming-accent/10 animate-pulse rounded-lg"></div>}>
                  <VisitorStats />
                </Suspense>
              </div>
              
              <div className="text-center mt-6 md:mt-8">
                <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
                  Can't book online right now?
                </p>
                <a 
                  href={`https://wa.me/918637625155?text=${encodeURIComponent("Hi! I'd like to book a slot at Cuephoria. [Student Offer]")}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-md bg-neon-pink/90 text-white hover:bg-neon-pink transition-all duration-300 text-sm md:text-base"
                >
                  WhatsApp Us Directly
                  <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Return to main site button */}
          <div className="mt-6 md:mt-8 text-center">
            <button 
              onClick={() => navigate('/')}
              className="text-gray-400 hover:text-neon-blue transition-colors text-sm md:text-base"
            >
              Return to main site
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BookingLanding;
