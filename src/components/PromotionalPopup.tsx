
import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface PromotionalPopupProps {
  delayInSeconds?: number;
  reappearInSeconds?: number;
}

const PromotionalPopup = ({ 
  delayInSeconds = 30, 
  reappearInSeconds = 120 
}: PromotionalPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const hasBeenShownRef = useRef(false);
  
  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('promotional_popup_shown');
    
    if (!popupShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        hasBeenShownRef.current = true;
        sessionStorage.setItem('promotional_popup_shown', 'true');
      }, delayInSeconds * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [delayInSeconds]);
  
  // Effect for reappearing popup after closing
  useEffect(() => {
    if (hasBeenShownRef.current && !isVisible) {
      const reappearTimer = setTimeout(() => {
        setIsVisible(true);
      }, reappearInSeconds * 1000);
      
      return () => clearTimeout(reappearTimer);
    }
  }, [isVisible, reappearInSeconds]);
  
  if (!isVisible) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="popup-title"
    >
      <div className="glass-card relative rounded-xl max-w-md w-full p-6 border-2 border-neon-pink animate-scale-pulse">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-white/70 hover:text-white"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>
        
        <div className="text-center mb-6">
          <h3 id="popup-title" className="text-2xl font-bold neon-text-pink mb-2">
            SPECIAL ONLINE OFFER!
          </h3>
          <p className="text-gray-300 mb-4">
            Get <span className="text-neon-blue font-bold">FLAT 10% OFF</span> your bill + 
            <span className="text-neon-pink font-bold"> 1 FREE AR Metashot Cricket Challenge </span> 
            only through online bookings!
          </p>
          <p className="text-sm text-gray-400">
            Limited time offer. Book now to avail this exclusive deal.
          </p>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={() => {
              setIsVisible(false);
              // Open Calendly popup
              if (window.Calendly) {
                window.Calendly.initPopupWidget({
                  url: 'https://calendly.com/cuephoriaclub/60min?background_color=0b101a&text_color=1cd0d3&primary_color=fd2dee'
                });
              }
            }}
            className="px-6 py-3 rounded-md bg-neon-blue text-gaming-darker font-semibold hover:bg-neon-blue/80 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
          >
            Book a Slot Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionalPopup;
