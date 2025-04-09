
import React from 'react';
import { galleryData } from '../utils/gameData';
import { Card } from '@/components/ui/card';

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-gaming-dark relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(157,78,221,0.1)_0,rgba(15,25,40,0)_70%)]"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[radial-gradient(circle,rgba(0,255,255,0.05)_0,rgba(15,25,40,0)_70%)]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,45,239,0.05)_0,rgba(15,25,40,0)_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Explore Our <span className="neon-text-pink">Premium Spaces</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover the ultimate gaming and entertainment experience at Cuephoria through our meticulously designed spaces
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden border-0 bg-gaming-darker/50 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gaming-darker/30 to-gaming-darker"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:neon-text-blue transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-pink to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
