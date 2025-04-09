
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
    alt: "Player enjoying PS5 gaming at Cuephoria Trichy",
    caption: "Immersive PS5 Gaming Experience"
  },
  {
    url: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop",
    alt: "Weekly gaming tournament at Cuephoria Trichy",
    caption: "Weekly Gaming Tournaments"
  },
  {
    url: "https://images.unsplash.com/photo-1642132652069-08f20ae393eb?q=80&w=2070&auto=format&fit=crop",
    alt: "Professional 8-Ball pool table at Cuephoria Trichy",
    caption: "Professional 8-Ball Tables"
  },
  {
    url: "https://images.unsplash.com/photo-1607034071380-031f8b1692be?q=80&w=2070&auto=format&fit=crop",
    alt: "Metashot challenge experience at Cuephoria Trichy",
    caption: "Metashot Challenge Experience"
  },
  {
    url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=2047&auto=format&fit=crop",
    alt: "Relaxing gaming lounge atmosphere at Cuephoria Trichy",
    caption: "Relaxing Gaming Lounge Atmosphere"
  },
  {
    url: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2057&auto=format&fit=crop",
    alt: "State-of-the-art gaming console setup at Cuephoria Trichy",
    caption: "State-of-the-art Console Setup"
  }
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section id="gallery" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(157,78,221,0.15)_0,rgba(15,25,40,0)_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="neon-text-pink">Gallery</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Take a look at our premium gaming and billiards experience at Cuephoria
          </p>
        </div>
        
        <div className="relative overflow-hidden glass-card rounded-xl p-4 md:p-6 border border-neon-blue/20 max-w-5xl mx-auto">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            {/* Main gallery display */}
            <div 
              className={`w-full h-full transition-opacity duration-500 ${isTransitioning ? 'opacity-30' : 'opacity-100'}`}
              style={{
                backgroundImage: `url(${galleryImages[currentIndex].url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gaming-darker via-transparent to-transparent"></div>
            </div>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
              <h3 className="text-xl md:text-2xl font-semibold neon-text-blue">
                {galleryImages[currentIndex].caption}
              </h3>
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gaming-darker/70 p-2 rounded-full hover:bg-neon-blue hover:text-gaming-darker transition-colors"
              aria-label="Previous image"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gaming-darker/70 p-2 rounded-full hover:bg-neon-blue hover:text-gaming-darker transition-colors"
              aria-label="Next image"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Thumbnail navigation */}
          <div className="flex justify-center mt-4 gap-2 overflow-x-auto pb-2">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isTransitioning) return;
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 500);
                }}
                className={`w-16 h-12 rounded-md overflow-hidden transition-all ${
                  currentIndex === index 
                    ? 'border-2 border-neon-blue scale-110' 
                    : 'border border-white/20 opacity-70 hover:opacity-100'
                }`}
                aria-label={`View ${image.alt}`}
              >
                <img 
                  src={image.url} 
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
