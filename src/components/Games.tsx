
import React from 'react';
import { Gamepad2, Crosshair, TrophyIcon, Target } from 'lucide-react';

// Updated games array with Metashot Challenges instead of VR
const games = [
  {
    name: "8-Ball Pool",
    image: "https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Challenge your friends to a game of precision and strategy on our professional pool tables.",
    icon: <Target className="h-6 w-6" />
  },
  {
    name: "Snooker",
    image: "https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    description: "Experience the classic game of snooker on our premium tables with professional equipment.",
    icon: <Crosshair className="h-6 w-6" />
  },
  {
    name: "PS5 Gaming",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Enjoy the latest PS5 titles including FIFA, Call of Duty, GTA, and more on large screens.",
    icon: <Gamepad2 className="h-6 w-6" />
  },
  {
    name: "Metashot Challenges",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Physical batting experience where you hit targets in our interactive gaming environment.",
    icon: <TrophyIcon className="h-6 w-6" />
  }
];

// Updated game menu with specific titles
const gameTitles = [
  { category: "PS5 Games", titles: ["FIFA 24", "Call of Duty: Modern Warfare", "GTA V", "God of War Ragnarök", "Spider-Man 2", "Elden Ring", "Hogwarts Legacy", "Mortal Kombat 1"] },
  { category: "Multiplayer Favorites", titles: ["Fortnite", "Rocket League", "Fall Guys", "It Takes Two", "Overcooked 2", "Tekken 8", "Street Fighter 6", "NBA 2K24"] },
];

// Pricing information
const pricingOptions = [
  { name: "Weekly Pass", price: "₹399", description: "Full access to all gaming facilities for 7 days" },
  { name: "Monthly Pass", price: "₹1499", description: "Full access to all gaming facilities for 30 days" }
];

const GameCard = ({ game, index }: { game: typeof games[0]; index: number }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl glass-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={game.image} 
          alt={game.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-8">
          <div className="flex items-center mb-2">
            <div className="mr-2 text-neon-pink">
              {game.icon}
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:neon-text-blue transition-all duration-300">
              {game.name}
            </h3>
          </div>
          <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {game.description}
          </p>
        </div>
      </div>
      
      {/* Animated border on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-blue animate-shimmer"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-neon-pink via-neon-blue to-neon-pink animate-shimmer"></div>
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-neon-blue via-neon-pink to-neon-blue animate-shimmer"></div>
        <div className="absolute right-0 bottom-0 w-1 h-full bg-gradient-to-b from-neon-pink via-neon-blue to-neon-pink animate-shimmer"></div>
      </div>
    </div>
  );
};

const Games = () => {
  return (
    <section id="games" className="py-20 relative">
      {/* Background elements */}
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <GameCard key={index} game={game} index={index} />
          ))}
        </div>
        
        {/* Game titles section */}
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
        
        {/* Pricing section */}
        <div className="mt-16">
          <div className="glass-card rounded-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">
              Membership <span className="neon-text-blue">Pricing</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pricingOptions.map((option, i) => (
                <div key={i} className="glass-card p-6 rounded-xl border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold neon-text-pink mb-2">{option.name}</h4>
                  <div className="text-3xl font-bold text-white mb-4">{option.price}</div>
                  <p className="text-gray-300">{option.description}</p>
                  <a 
                    href={`https://wa.me/918637625155?text=${encodeURIComponent(`Hello! I'd like to purchase the ${option.name} at Cuephoria.`)}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="mt-6 w-full py-2 rounded-md bg-neon-blue/20 hover:bg-neon-blue/30 text-white text-center block transition-colors"
                  >
                    Get This Pass
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
