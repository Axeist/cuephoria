
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExpandIcon } from 'lucide-react';
import { galleryImages } from '../utils/gameData';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { cn } from '@/lib/utils';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(new Array(galleryImages.length).fill(false));

  // Track which images have loaded
  const handleImageLoad = (index: number) => {
    const newLoaded = [...isLoaded];
    newLoaded[index] = true;
    setIsLoaded(newLoaded);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        switch (e.key) {
          case 'ArrowLeft':
            setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
            break;
          case 'ArrowRight':
            setCurrentImage((prev) => (prev + 1) % galleryImages.length);
            break;
          case 'Escape':
            setIsModalOpen(false);
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <section id="gallery" className="py-16 md:py-24 relative">
      {/* Background with radial gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(157,78,221,0.15)_0,rgba(15,25,40,0)_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="neon-text-pink">Gallery</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Experience the premium ambiance of Cuephoria through our cutting-edge gaming and entertainment spaces
          </p>
        </div>

        {/* Main Carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              loop: true,
              align: "center",
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={image.id} className="md:basis-4/5">
                  <div className="p-1">
                    <Card className="border-0 rounded-xl overflow-hidden bg-transparent">
                      <CardContent className="flex aspect-video p-0 relative group cursor-pointer" onClick={() => {
                        setCurrentImage(index);
                        setIsModalOpen(true);
                      }}>
                        <div className={cn(
                          "absolute inset-0 bg-gaming-darker/50 flex items-center justify-center transition-opacity duration-300",
                          isLoaded[index] ? "opacity-0" : "opacity-100"
                        )}>
                          <div className="w-8 h-8 border-t-2 border-neon-blue rounded-full animate-spin"></div>
                        </div>
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onLoad={() => handleImageLoad(index)}
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                          fetchPriority={index === 0 ? "high" : "auto"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* View fullscreen icon */}
                        <div className="absolute top-4 right-4 bg-black/60 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ExpandIcon className="w-5 h-5 text-white" />
                        </div>
                        
                        {/* Caption */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                          <h3 className="text-xl md:text-2xl font-semibold neon-text-blue">
                            {image.title}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-2 h-12 w-12 bg-gaming-darker/70 hover:bg-neon-blue hover:text-gaming-darker border-neon-blue/20" />
              <CarouselNext className="right-2 h-12 w-12 bg-gaming-darker/70 hover:bg-neon-blue hover:text-gaming-darker border-neon-blue/20" />
            </div>
          </Carousel>
        </div>
        
        {/* Thumbnail Navigation */}
        <div className="max-w-4xl mx-auto mt-6">
          <div className="flex justify-center gap-2 overflow-x-auto pb-2 px-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentImage(index);
                  setIsModalOpen(true);
                }}
                className={`min-w-20 h-16 rounded-md overflow-hidden transition-all ${
                  currentImage === index 
                    ? 'border-2 border-neon-blue scale-105' 
                    : 'border border-white/20 opacity-70 hover:opacity-100'
                }`}
                aria-label={`View ${image.alt}`}
              >
                <img 
                  src={image.src} 
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="80"
                  height="64"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-gaming-darker/70 hover:bg-neon-blue hover:text-gaming-darker"
            onClick={() => setIsModalOpen(false)}
            aria-label="Close gallery"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gaming-darker/70 p-3 rounded-full hover:bg-neon-blue hover:text-gaming-darker"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="w-full max-w-5xl max-h-[80vh] relative">
            <img 
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].alt}
              className="w-full h-full object-contain"
              loading="eager"
              decoding="async"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl md:text-3xl font-bold text-white neon-text-blue">
                {galleryImages[currentImage].title}
              </h3>
            </div>
          </div>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gaming-darker/70 p-3 rounded-full hover:bg-neon-blue hover:text-gaming-darker"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImage((prev) => (prev + 1) % galleryImages.length);
            }}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Thumbnail indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${currentImage === index ? 'bg-neon-blue' : 'bg-white/30'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage(index);
                }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
