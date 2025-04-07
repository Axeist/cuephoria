
import React from 'react';

const games = [
  {
    name: "8-Ball Pool",
    image: "https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Challenge your friends to a game of precision and strategy on our professional pool tables."
  },
  {
    name: "PC Gaming",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Experience the latest PC games on high-end rigs with premium peripherals and displays."
  },
  {
    name: "Console Gaming",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Jump into action with PlayStation and Xbox games on large screens and comfortable seating."
  },
  {
    name: "VR Experiences",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    description: "Immerse yourself in virtual worlds with our cutting-edge VR setups and experiences."
  }
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
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:neon-text-blue transition-all duration-300">
            {game.name}
          </h3>
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
            Discover the variety of gaming experiences we offer at Cuephoria, from classic billiards to cutting-edge virtual reality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <GameCard key={index} game={game} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="glass-card inline-block rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Looking for more? We regularly update our game library!
            </h3>
            <p className="text-gray-400 mb-6">
              Follow us on social media to stay updated on the latest additions to our game collection and upcoming events.
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
