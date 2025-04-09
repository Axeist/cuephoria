
import React from 'react';
import { Card, CardContent } from "./ui/card";
import { gameData } from "../utils/gameData";
import { LucideIcon, Gamepad, Target, Baseball } from 'lucide-react';

const GamesSection: React.FC = () => {
  // Helper function to get the appropriate icon based on icon name
  const getIcon = (iconName: string): LucideIcon => {
    // Map of supported icon names to their components
    const iconMap: Record<string, LucideIcon> = {
      'gamepad': Gamepad,
      'target': Target,
      'baseball': Baseball
    };
    
    // Return the mapped icon or Gamepad as fallback
    return iconMap[iconName] || Gamepad;
  };

  return (
    <section id="games" className="py-12 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-orbitron text-center mb-12 text-white">
          Games & Activities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gameData.map((game, index) => {
            const Icon = getIcon(game.icon);
            return (
              <Card key={index} className="overflow-hidden bg-black border-0 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 h-full">
                <div className="relative h-60">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
                  <div className="absolute bottom-0 left-0 p-4 flex items-center">
                    {React.createElement(Icon, { className: "text-primary mr-2 h-5 w-5" })}
                    <h3 className="font-orbitron text-xl text-white">{game.title}</h3>
                  </div>
                </div>
                <CardContent className="p-4 bg-black text-gray-300">
                  <p>{game.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
