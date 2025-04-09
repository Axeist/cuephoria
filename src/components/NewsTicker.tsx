
import React, { useState, useEffect } from 'react';

const news = [
  "SPECIAL ONLINE OFFER! Get FLAT 10% OFF your bill + 1 FREE AR Metashot Cricket Challenge",
  "Book online to secure your slot and enjoy exclusive discounts",
  "Try our latest AR and VR games with friends and family",
  "Join Cuephoria's gaming tournaments and win exciting prizes",
  "Perfect spot for birthday parties and corporate events"
];

const NewsTicker = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % news.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="bg-gaming-darker/80 backdrop-blur-md border-y border-neon-blue/20 py-1 overflow-hidden">
      <div className="ticker-container">
        <div className="ticker-wrapper">
          <div className="ticker-text">
            {news.map((item, index) => (
              <span 
                key={index} 
                className={`inline-block whitespace-nowrap px-4 text-white ${index === currentNewsIndex ? 'ticker-visible' : 'ticker-hidden'}`}
              >
                <span className="mr-2 text-neon-pink">★</span>
                <span className="glow-text">{item}</span>
                <span className="ml-2 text-neon-blue">★</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <style>
      {`
        .ticker-container {
          width: 100%;
          overflow: hidden;
        }
        
        .ticker-wrapper {
          width: 100%;
          padding: 0.25rem 0;
        }
        
        .ticker-text {
          width: 100%;
          text-align: center;
          position: relative;
        }
        
        .ticker-visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.5s ease, transform 0.5s ease;
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .ticker-hidden {
          opacity: 0;
          height: 0;
          position: absolute;
          transform: translateY(10px);
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            text-shadow: 0 0 8px rgba(0, 255, 255, 0.6);
          }
          50% {
            text-shadow: 0 0 15px rgba(255, 45, 239, 0.8), 0 0 20px rgba(255, 45, 239, 0.5);
          }
        }
      `}
      </style>
    </div>
  );
};

export default NewsTicker;
