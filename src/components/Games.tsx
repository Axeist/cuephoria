import React, { useState } from 'react';
import { Gamepad2, Crosshair, TrophyIcon, Target, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useIsMobile } from "../hooks/use-mobile";

// Updated games array with uploaded images
const games = [
  {
    name: "8-Ball Pool",
    image: "/lovable-uploads/49cea69d-9aaf-4b3c-811e-de6cea2ec236.png",
    description: "Challenge your friends to a game of precision and strategy on our professional pool tables.",
    icon: <Target className="h-6 w-6" />,
    detailedDescription: "Experience the classic game of 8-Ball Pool at Cuephoria on our premium tournament-grade tables. Perfect your skills with precision cues and professional equipment. Our tables feature Italian slate surfaces and championship cloth for the ultimate playing experience. Regular tournaments are held for both beginners and advanced players, with prizes for winners.",
    benefits: [
      "Professional grade tables with Italian slate surfaces",
      "Premium cues and accessories available", 
      "Regular tournaments with prizes",
      "One-on-one coaching sessions available"
    ]
  },
  {
    name: "Snooker",
    image: "/lovable-uploads/a8c2452f-9057-4737-9fe0-08855baa94e5.png",
    description: "Experience the classic game of snooker on our premium tables with professional equipment.",
    icon: <Crosshair className="h-6 w-6" />,
    detailedDescription: "Enjoy the strategic game of Snooker on our full-size professional tables at Cuephoria. Our snooker setups feature premium equipment, including championship balls and high-quality cues. The dedicated snooker area offers a quiet, focused environment for serious players, with proper lighting and ample space around each table for comfortable gameplay.",
    benefits: [
      "Full-size professional tables (12ft x 6ft)",
      "Championship quality balls and accessories",
      "Dedicated quiet playing area",
      "Snooker league membership available"
    ]
  },
  {
    name: "PS5 Gaming",
    image: "/lovable-uploads/2663021f-e6d3-4c75-8f66-b2672cc5f988.png",
    description: "Enjoy the latest PS5 titles including FIFA, Call of Duty, GTA, and more on large screens.",
    icon: <Gamepad2 className="h-6 w-6" />,
    detailedDescription: "Immerse yourself in next-generation gaming on our PlayStation 5 setups at Cuephoria. Each gaming station features 4K HDR displays, premium gaming chairs, and high-quality headsets for an optimal gaming experience. We regularly update our game library with the latest titles across various genres, from sports simulations to action adventures and competitive multiplayer games.",
    benefits: [
      "Premium gaming setups with 4K HDR displays",
      "Comfortable gaming chairs and accessories",
      "Latest game titles across all popular genres",
      "Multiplayer tournament capabilities"
    ]
  }
];

// Updated game menu with specific titles
const gameTitles = [
  { category: "PS5 Games", titles: ["FIFA 24", "Call of Duty: Modern Warfare", "GTA V", "God of War Ragnarök", "Spider-Man 2", "Elden Ring", "Hogwarts Legacy", "Mortal Kombat 1"] },
  { category: "Multiplayer Favorites", titles: ["Fortnite", "Rocket League", "Fall Guys", "It Takes Two", "Overcooked 2", "Tekken 8", "Street Fighter 6", "NBA 2K24"] },
];

// Updated pricing information with new membership structure
const pricingOptions = [
  { 
    name: "💎 Silver Membership",
    price: "₹199",
    description: "Up to 2 players • 50% OFF for entire month • Priority bookings • Premium membership card",
    features: ["PS5 & 8-Ball Pool at half price", "Priority bookings", "Premium membership card", "₹49 per extra player/hour"]
  },
  { 
    name: "🌟 Gold Membership",
    price: "₹349", 
    description: "Up to 4 players • 50% OFF for entire month • Priority bookings • Premium membership card",
    features: ["PS5 & 8-Ball Pool at half price", "Priority bookings", "Premium membership card", "₹49 per extra player/hour"]
  }
];

const GameCard = ({ game, index }: { game: typeof games[0]; index: number }) => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <>
      <div 
        className="group relative overflow-hidden rounded-xl glass-card cursor-pointer"
        style={{ animationDelay: `${index * 0.1}s` }}
        onClick={() => setOpen(true)}
        role="button"
        aria-label={`Learn more about ${game.name}`}
        tabIndex={0}
      >
        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-10 transition-opacity duration-300"></div>
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={game.image} 
            alt={`${game.name} at Cuephoria Gaming Lounge in Trichy`} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            decoding="async"
            width="400"
            height="300"
          />
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-8">
            <div className="flex items-center mb-2">
              <div className="mr-2 text-neon-pink">
                {game.icon}
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:neon-text-blue transition-all duration-300 break-words">
                {game.name}
              </h3>
            </div>
            <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 break-words hyphens-auto">
              {game.description}
            </p>
          </div>
        </div>
        
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-blue animate-shimmer"></div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-neon-pink via-neon-blue to-neon-pink animate-shimmer"></div>
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-neon-blue via-neon-pink to-neon-blue animate-shimmer"></div>
          <div className="absolute right-0 bottom-0 w-1 h-full bg-gradient-to-b from-neon-pink via-neon-blue to-neon-pink animate-shimmer"></div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent 
          className={`bg-gaming-darker border border-neon-blue/30 text-white ${isMobile 
            ? 'max-w-[95vw] max-h-[90vh] w-[95vw] rounded-lg' 
            : 'max-w-3xl max-h-[90vh]'} overflow-y-auto p-4 md:p-6`}
        >
          <DialogHeader className="relative mb-2 md:mb-4">
            <div className="flex justify-between items-center w-full">
              <div>
                <DialogTitle className="text-xl md:text-2xl font-bold neon-text-blue flex items-center gap-2 break-words">
                  {game.icon} {game.name}
                </DialogTitle>
                <DialogDescription className="text-gray-300 mb-4">
                  Experience premium entertainment at Cuephoria, Trichy
                </DialogDescription>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="h-8 w-8 rounded-full bg-gaming-accent/50 flex items-center justify-center hover:bg-neon-blue/30 transition-colors"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {isMobile && (
              <a 
                href="#book-now" 
                className="w-full mt-4 py-2 rounded-md bg-neon-pink text-white text-center block transition-colors"
                onClick={() => setOpen(false)}
              >
                Book This Experience
              </a>
            )}
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 overflow-hidden">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={game.image} 
                alt={`${game.name} at Cuephoria Gaming Lounge in Trichy`} 
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                width="600"
                height="450"
              />
            </div>
            
            <div className="space-y-3 md:space-y-4 overflow-y-auto max-h-[40vh] md:max-h-[60vh] pr-1">
              <p className="text-sm md:text-base text-gray-200 break-words whitespace-normal">
                {game.detailedDescription}
              </p>
              
              <h4 className="text-md md:text-lg font-semibold neon-text-pink mt-3 md:mt-4">Key Features</h4>
              <ul className="space-y-2">
                {game.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-2 md:mr-3 mt-1 h-4 md:h-5 w-4 md:w-5 text-neon-blue flex-shrink-0">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base text-gray-300 break-words whitespace-normal">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-3 md:pt-4">
                {!isMobile && (
                  <a 
                    href="#book-now" 
                    className="px-4 md:px-6 py-2 rounded-md bg-neon-pink text-white text-sm md:text-base font-medium hover:bg-neon-pink/80 transition-colors inline-flex items-center"
                    onClick={() => setOpen(false)}
                  >
                    Book This Experience
                    <svg className="ml-2 h-4 md:h-5 w-4 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                )}
                {isMobile && (
                  <button 
                    onClick={() => setOpen(false)}
                    className="w-full py-2 rounded-md bg-gaming-accent text-white text-sm font-medium hover:bg-gaming-accent/70 transition-colors"
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const Games = () => {
  return (
    <section id="games" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,45,239,0.1)_0,rgba(15,25,40,0)_60%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="neon-text-pink">Gaming</span> Experiences
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Discover the variety of gaming experiences we offer at Cuephoria, from classic billiards to the latest PS5 games.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <GameCard key={index} game={game} index={index} />
          ))}
        </div>
        
        <div className="mt-16">
          <div className="glass-card rounded-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">
              Available <span className="neon-text-blue">Game Titles</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gameTitles.map((category, i) => (
                <div key={i} className="space-y-4">
                  <h4 className="text-xl font-semibold neon-text-pink">{category.category}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category.titles.map((title, j) => (
                      <div 
                        key={j} 
                        className="bg-gaming-accent/30 px-3 py-2 rounded-md text-white hover:bg-neon-blue/20 transition-colors cursor-default"
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="glass-card rounded-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">
              Monthly <span className="neon-text-blue">Memberships</span> - 50% OFF
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pricingOptions.map((option, i) => (
                <div key={i} className="glass-card p-6 rounded-xl border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold neon-text-pink mb-2">{option.name}</h4>
                  <div className="text-3xl font-bold text-white mb-4">{option.price}</div>
                  <p className="text-gray-300 mb-4">{option.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {option.features.map((feature, j) => (
                      <div key={j} className="flex items-center text-sm text-gray-200">
                        <div className="h-4 w-4 rounded-full bg-neon-blue/20 flex items-center justify-center mr-2">
                          <span className="text-neon-blue text-xs">✓</span>
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={`https://wa.me/918637625155?text=${encodeURIComponent(`Hello! I'd like to purchase the ${option.name} at Cuephoria.`)}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="mt-6 w-full py-2 rounded-md bg-neon-blue/20 hover:bg-neon-blue/30 text-white text-center block transition-colors"
                  >
                    Get This Membership
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="glass-card inline-block rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Looking for more? We regularly update our game library!
            </h3>
            <p className="text-gray-400 mb-6">
              Follow us on social media to stay updated on the latest additions to our game collection and upcoming tournaments.
            </p>
            <a 
              href="#book-now" 
              className="px-8 py-3 rounded-md bg-neon-blue text-gaming-darker font-semibold hover:bg-neon-blue/80 transition-all duration-300 inline-flex items-center"
            >
              Book a Session
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
