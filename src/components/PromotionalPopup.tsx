import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, GraduationCap, Siren } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface PromotionalPopupProps {
  delayInSeconds?: number;
  reappearInSeconds?: number;
}

// Enum to track which popup to show
enum PopupType {
  BOOKING_OFFER,
  STUDENT_DISCOUNT,
  NONE
}

const PromotionalPopup = ({ 
  delayInSeconds = 10,
  reappearInSeconds = 120 
}: PromotionalPopupProps) => {
  const [activePopup, setActivePopup] = useState<PopupType>(PopupType.NONE);
  const bookingPopupShownRef = useRef(false);
  const studentPopupShownRef = useRef(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Don't show popup immediately on page load to improve initial load performance
    // Delay the popup check to not compete with main page resources
    const checkAndShowPopup = () => {
      // Function to check if user is in the booking section
      const isInBookingSection = () => {
        // Check if URL hash is #book-now
        if (window.location.hash === '#book-now') {
          return true;
        }
        
        // Check if user has scrolled to booking section
        const bookingSection = document.getElementById('book-now');
        if (bookingSection) {
          const rect = bookingSection.getBoundingClientRect();
          // If booking section is currently visible in the viewport
          if (rect.top >= -300 && rect.top <= window.innerHeight) {
            return true;
          }
        }
        
        return false;
      };
      
      // Function to check if Calendly is active
      const isCalendlyActive = () => {
        // Check for Calendly iframe or popup
        const calendlyElements = document.querySelectorAll('.calendly-inline-widget, .calendly-overlay');
        return calendlyElements.length > 0;
      };
      
      // Check if popups were already shown in this session
      const bookingPopupShown = sessionStorage.getItem('promotional_popup_shown');
      
      // Function to determine if popup should be shown
      const shouldShowPopup = () => {
        return !bookingPopupShown && !isInBookingSection() && !isCalendlyActive();
      };
      
      // Initial check and setup timer for first popup
      if (shouldShowPopup()) {
        const timer = setTimeout(() => {
          // Re-check conditions right before showing
          if (shouldShowPopup()) {
            setActivePopup(PopupType.BOOKING_OFFER);
            bookingPopupShownRef.current = true;
            sessionStorage.setItem('promotional_popup_shown', 'true');
            
            // Schedule the second popup to appear 15 seconds after the first one
            setTimeout(() => {
              if (!isInBookingSection() && !isCalendlyActive()) {
                setActivePopup(PopupType.STUDENT_DISCOUNT);
                studentPopupShownRef.current = true;
              }
            }, 15000); // 15 seconds after first popup
          }
        }, delayInSeconds * 1000);
        
        return () => clearTimeout(timer);
      }
    };
    
    // Delay popup initialization to not compete with critical page load
    const initTimeout = setTimeout(checkAndShowPopup, 3000);
    
    // Set up event listeners for scroll and hash changes
    const handleScroll = () => {
      if (activePopup !== PopupType.NONE) {
        // Check if in booking section
        const bookingSection = document.getElementById('book-now');
        if (bookingSection) {
          const rect = bookingSection.getBoundingClientRect();
          if (rect.top >= -300 && rect.top <= window.innerHeight) {
            setActivePopup(PopupType.NONE);
          }
        }
        
        // Check for Calendly
        const calendlyElements = document.querySelectorAll('.calendly-inline-widget, .calendly-overlay');
        if (calendlyElements.length > 0) {
          setActivePopup(PopupType.NONE);
        }
      }
    };
    
    const handleHashChange = () => {
      if (activePopup !== PopupType.NONE && window.location.hash === '#book-now') {
        setActivePopup(PopupType.NONE);
      }
    };
    
    // Use passive event listeners to not block the main thread
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHashChange);
    
    // Optimize observer to only check when popup is active
    let observer: MutationObserver | null = null;
    
    if (activePopup !== PopupType.NONE) {
      observer = new MutationObserver(() => {
        const calendlyElements = document.querySelectorAll('.calendly-inline-widget, .calendly-overlay');
        if (calendlyElements.length > 0) {
          setActivePopup(PopupType.NONE);
          observer?.disconnect();
        }
      });
      
      observer.observe(document.body, { 
        childList: true, 
        subtree: true,
        attributes: false,
        characterData: false
      });
    }
    
    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      observer?.disconnect();
    };
  }, [delayInSeconds, activePopup]);
  
  // Effect for reappearing popup after closing
  useEffect(() => {
    if ((bookingPopupShownRef.current || studentPopupShownRef.current) && activePopup === PopupType.NONE) {
      const reappearTimer = setTimeout(() => {
        // Check if we should show the popup before showing it again
        const isInBookingSection = window.location.hash === '#book-now' || 
          document.querySelectorAll('.calendly-inline-widget, .calendly-overlay').length > 0;
        
        if (!isInBookingSection) {
          // Alternate between the popups when they reappear
          if (studentPopupShownRef.current) {
            setActivePopup(PopupType.BOOKING_OFFER);
          } else {
            setActivePopup(PopupType.STUDENT_DISCOUNT);
          }
        }
      }, reappearInSeconds * 1000);
      
      return () => clearTimeout(reappearTimer);
    }
  }, [activePopup, reappearInSeconds]);
  
  const handleBookNow = () => {
    setActivePopup(PopupType.NONE);
    // Open Calendly popup
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/cuephoriaclub/60min?background_color=0b101a&text_color=1cd0d3&primary_color=fd2dee'
      });
    }
    
    toast({
      title: "Booking Started",
      description: "You're getting FLAT 50% OFF + FREE Metashot Challenge!",
    });
  };
  
  const handleStudentDiscount = () => {
    setActivePopup(PopupType.NONE);
    
    toast({
      title: "Student Discount Applied!",
      description: "₹100 will be discounted on showing valid ID at venue",
    });
    
    // Navigate to booking section
    const bookingSection = document.getElementById('book-now');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Render the Booking Offer Popup
  const renderBookingOfferPopup = () => (
    <div className="glass-card relative rounded-xl max-w-md w-full p-6 border-2 border-neon-pink animate-scale-pulse">
      <button 
        onClick={() => setActivePopup(PopupType.NONE)}
        className="absolute top-3 right-3 text-white/70 hover:text-white"
        aria-label="Close popup"
      >
        <X size={20} />
      </button>
      
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Siren size={24} className="text-red-500 animate-pulse" />
          <h3 id="booking-popup-title" className="text-2xl font-bold neon-text-pink animate-blink-slow">
            SPECIAL ONLINE OFFER!
          </h3>
          <Siren size={24} className="text-red-500 animate-pulse" />
        </div>
        <p className="text-gray-300 mb-4">
          Get <span className="text-neon-blue font-bold">FLAT 50% OFF</span> your bill + 
          <span className="text-neon-pink font-bold"> 1 FREE AR Metashot Cricket Challenge </span> 
          only through online bookings!
        </p>
        <p className="text-sm text-gray-400">
          Limited time offer. Book now to avail this exclusive deal.
        </p>
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={handleBookNow}
          className="px-6 py-3 rounded-md bg-neon-blue text-gaming-darker font-semibold hover:bg-neon-blue/80 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
        >
          Book a Slot Now
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
  
  // Render the Student Discount Popup
  const renderStudentDiscountPopup = () => (
    <div className="glass-card relative rounded-xl max-w-md w-full p-6 border-2 border-neon-blue animate-scale-pulse">
      <button 
        onClick={() => setActivePopup(PopupType.NONE)}
        className="absolute top-3 right-3 text-white/70 hover:text-white"
        aria-label="Close popup"
      >
        <X size={20} />
      </button>
      
      <div className="text-center mb-6">
        <div className="flex justify-center items-center mb-2 gap-2">
          <Siren size={20} className="text-red-500 animate-pulse" />
          <GraduationCap size={32} className="text-neon-blue" />
          <Siren size={20} className="text-red-500 animate-pulse" />
        </div>
        <h3 id="student-popup-title" className="text-2xl font-bold neon-text-blue mb-2 animate-blink-slow">
          STUDENT SPECIAL OFFER!
        </h3>
        <p className="text-gray-300 mb-4">
          Get <span className="text-neon-pink font-bold">FLAT ₹100 OFF</span> on 
          <span className="text-neon-blue font-bold"> Weekly & Monthly Passes </span> 
          with a valid student ID!
        </p>
        <p className="text-sm text-gray-400">
          Just show your valid student ID card when you arrive at Cuephoria.
        </p>
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={handleStudentDiscount}
          className="px-6 py-3 rounded-md bg-neon-pink text-gaming-darker font-semibold hover:bg-neon-pink/80 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
        >
          View Passes
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
  
  if (activePopup === PopupType.NONE) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      role="dialog" 
      aria-modal="true" 
      aria-labelledby={activePopup === PopupType.BOOKING_OFFER ? "booking-popup-title" : "student-popup-title"}
    >
      {activePopup === PopupType.BOOKING_OFFER ? renderBookingOfferPopup() : renderStudentDiscountPopup()}
    </div>
  );
};

export default PromotionalPopup;
