
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Clock, MapPin, Star, Calendar } from 'lucide-react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import SEOMetadata from '../components/SEOMetadata';

const BookingLanding = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [countdownEnds] = useState(() => {
    // Set countdown to end 3 days from now
    const end = new Date();
    end.setDate(end.getDate() + 3);
    return end;
  });
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize Calendly
    if (window.Calendly && calendlyRef.current) {
      calendlyRef.current.innerHTML = '';
      
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/cuephoriaclub/60min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=131e2c&text_color=01ffff&primary_color=ff2cef',
        parentElement: calendlyRef.current,
        prefill: {},
        utm: {}
      });
    }
    
    // Countdown timer
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownEnds.getTime() - now;
      
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
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
      <section className="relative py-16 md:py-24 overflow-hidden">
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
                className="h-16 md:h-20 mx-auto"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="block neon-text-blue">BOOK YOUR SPOT</span>
              <span className="block text-2xl md:text-3xl mt-2 text-white">PS5 Gaming & Pool Tables</span>
            </h1>
            
            <div className="bg-gaming-darker/80 backdrop-blur-md p-4 rounded-lg border border-neon-pink/30 mb-6">
              <p className="text-xl text-neon-pink font-bold mb-2">
                STUDENT SPECIAL OFFER!
              </p>
              <p className="text-lg text-white">
                Show your student ID for <span className="text-neon-blue font-bold">15% OFF</span> on all gaming & pool sessions!
              </p>
            </div>
            
            {/* Countdown Timer */}
            <div className="mb-8">
              <p className="text-gray-300 mb-2">Limited time offer ends in:</p>
              <div className="flex justify-center gap-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="text-center">
                    <div className="bg-gaming-accent/20 backdrop-blur-sm px-3 py-2 rounded-md border border-neon-blue/30">
                      <span className="text-2xl font-bold text-neon-blue">{value}</span>
                    </div>
                    <span className="text-xs text-gray-400 mt-1 block capitalize">{unit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <div className="flex items-center space-x-2 text-gray-200">
                <Clock className="h-5 w-5 text-neon-pink" />
                <span>11:00 AM - 11:00 PM</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-200">
                <MapPin className="h-5 w-5 text-neon-blue" />
                <span>Thiruverumbur, Trichy, Tamil Nadu</span>
              </div>
            </div>
          </div>
          
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row bg-gaming-darker/50 backdrop-blur-lg rounded-xl overflow-hidden border border-neon-blue/30">
            {/* Booking Widget Column */}
            <div className="w-full lg:w-7/12 p-4 lg:p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-neon-blue">
                Book Your Session Now
              </h2>
              
              <div 
                ref={calendlyRef}
                className="w-full h-[600px] rounded-lg overflow-hidden"
              ></div>
            </div>
            
            {/* Info Column */}
            <div className="w-full lg:w-5/12 p-4 lg:p-8 bg-gaming-accent/10">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Star className="h-5 w-5 text-neon-pink mr-2" />
                  Why Cuephoria?
                </h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neon-pink/20 flex items-center justify-center mr-2 mt-1">
                      <span className="text-neon-pink text-xs">✓</span>
                    </div>
                    <span>Latest PS5 games with 4K display</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neon-pink/20 flex items-center justify-center mr-2 mt-1">
                      <span className="text-neon-pink text-xs">✓</span>
                    </div>
                    <span>Professional pool tables</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neon-pink/20 flex items-center justify-center mr-2 mt-1">
                      <span className="text-neon-pink text-xs">✓</span>
                    </div>
                    <span>Comfortable gaming environment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neon-pink/20 flex items-center justify-center mr-2 mt-1">
                      <span className="text-neon-pink text-xs">✓</span>
                    </div>
                    <span>Student-friendly pricing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neon-pink/20 flex items-center justify-center mr-2 mt-1">
                      <span className="text-neon-pink text-xs">✓</span>
                    </div>
                    <span>AR Metashot Cricket Challenge</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 text-neon-blue mr-2" />
                  Quick Pricing
                </h3>
                <div className="space-y-2 text-gray-200">
                  <div className="flex justify-between items-center pb-2 border-b border-gaming-accent/30">
                    <span>PS5 Gaming (per hour)</span>
                    <span className="font-bold text-neon-blue">₹200</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gaming-accent/30">
                    <span>Pool Table (per hour)</span>
                    <span className="font-bold text-neon-blue">₹300</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gaming-accent/30">
                    <span>Student Package (2 hours)</span>
                    <span className="font-bold text-neon-pink">₹350</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span>Group Discount (4+ people)</span>
                    <span className="font-bold text-neon-pink">10% OFF</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-sm text-gray-400 mb-4">
                  Can't book online right now?
                </p>
                <a 
                  href={`https://wa.me/918637625155?text=${encodeURIComponent("Hi! I'd like to book a slot at Cuephoria. [Student Offer]")}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-md bg-neon-pink/90 text-white hover:bg-neon-pink transition-all duration-300"
                >
                  WhatsApp Us Directly
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Return to main site button */}
          <div className="mt-8 text-center">
            <button 
              onClick={() => navigate('/')}
              className="text-gray-400 hover:text-neon-blue transition-colors"
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
