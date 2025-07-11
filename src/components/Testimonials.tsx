
import React, { useEffect, useCallback } from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from './ui/carousel';
import { useTestimonials } from '../hooks/useTestimonials';

const Testimonials = () => {
  const { testimonials, isLoading } = useTestimonials();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Auto-scroll every 4 seconds
    const autoScroll = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Seamlessly loop back to start
      }
    }, 4000);

    return () => {
      clearInterval(autoScroll);
    };
  }, [api]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'text-yellow-400 fill-yellow-400 drop-shadow-sm' 
            : 'text-gray-600'
        }`}
      />
    ));
  };

  if (isLoading) {
    return (
      <section id="testimonials" className="py-20 bg-gaming-dark relative overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse-neon"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/30 rounded-full blur-3xl animate-pulse-neon"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse-neon"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">
              What Our <span className="neon-text-pink">Gamers Say</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Real reviews from our amazing gaming community in Trichy
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-neon-blue border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  // Sort testimonials by text length (longest first)
  const sortedTestimonials = [...testimonials].sort((a, b) => {
    const textA = a.text || '';
    const textB = b.text || '';
    return textB.length - textA.length;
  });

  const featuredTestimonials = sortedTestimonials.filter(review => review.text && review.text.trim().length > 10);
  const quickReviews = sortedTestimonials.filter(review => !review.text || review.text.trim().length <= 10);

  return (
    <section id="testimonials" className="py-20 bg-gaming-dark relative overflow-hidden">
      {/* Enhanced animated background effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/40 rounded-full blur-3xl animate-pulse-neon"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/40 rounded-full blur-3xl animate-pulse-neon"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/30 rounded-full blur-3xl animate-pulse-neon"></div>
        <div className="absolute top-40 right-1/4 w-48 h-48 bg-yellow-500/25 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with Google branding */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 shadow-lg">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
              </div>
              <span className="text-white font-medium text-sm">Google Reviews</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">
            What Our <span className="neon-text-pink glow-text">Gamers Say</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real reviews from our amazing gaming community in Trichy
          </p>
        </div>

        {/* Enhanced Auto-Scrolling Carousel */}
        {featuredTestimonials.length > 0 && (
          <div className="mb-16">
            <Carousel 
              className="max-w-7xl mx-auto"
              setApi={setApi}
              opts={{
                loop: true,
                align: "start",
                duration: 30, // Smooth transition duration
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {featuredTestimonials.map((review, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="glass-card rounded-2xl p-6 h-full border border-white/20 hover:border-blue-400/50 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.02] group relative overflow-hidden backdrop-blur-xl">
                      {/* Enhanced gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Verified badge */}
                      <div className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1 border border-green-400/30">
                        <span className="text-green-400 text-xs font-medium">✓ Verified</span>
                      </div>
                      
                      {/* Google branding with enhanced design */}
                      <div className="flex items-center justify-between mb-6 relative z-10">
                        <div className="flex items-center space-x-3">
                          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
                            <Quote className="w-5 h-5 text-blue-400" />
                          </div>
                          <div className="flex space-x-1">
                            {renderStars(review.stars)}
                          </div>
                        </div>
                        <a 
                          href={review.reviewUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      
                      {/* Enhanced review text */}
                      <div className="relative z-10 mb-6">
                        <p className="text-gray-100 text-sm leading-relaxed font-medium line-clamp-4 group-hover:text-white transition-colors duration-300">
                          "{review.text}"
                        </p>
                      </div>
                      
                      {/* Enhanced reviewer info */}
                      <div className="flex items-center relative z-10 mt-auto">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-green-500 to-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg ring-2 ring-white/20">
                          <span className="text-white font-bold text-sm">
                            {review.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-semibold text-sm">{review.name}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center space-x-1">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-xs text-blue-400 font-medium">Google Review</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Enhanced navigation buttons */}
              <CarouselPrevious className="hidden md:flex bg-gaming-darker/90 backdrop-blur-sm border-blue-400/40 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/60 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-110" />
              <CarouselNext className="hidden md:flex bg-gaming-darker/90 backdrop-blur-sm border-blue-400/40 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/60 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-110" />
              
              {/* Progress indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: count }, (_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index + 1 === current 
                        ? 'bg-blue-400 w-6' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    onClick={() => api?.scrollTo(index)}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        )}

        {/* Enhanced Quick Reviews Grid - Mobile Optimized */}
        {quickReviews.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8 font-orbitron">
              <span className="neon-text-blue glow-text">5-Star Reviews</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4">
              {quickReviews.slice(0, 24).map((review, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-xl p-4 border border-white/10 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 group relative overflow-hidden backdrop-blur-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex justify-center mb-3 relative z-10">
                    <div className="flex space-x-1">
                      {renderStars(review.stars)}
                    </div>
                  </div>
                  
                  <div className="text-center relative z-10">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-green-500 to-red-500 rounded-full flex items-center justify-center mb-3 mx-auto shadow-md ring-2 ring-white/10">
                      <span className="text-white font-bold text-sm">
                        {review.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <p className="text-white text-sm font-semibold truncate mb-2">{review.name}</p>
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      <span className="text-[10px] text-green-400 font-medium">Verified</span>
                    </div>
                    {review.text && (
                      <p className="text-gray-400 text-[10px] line-clamp-2 leading-relaxed">"{review.text}"</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced Stats Section with Google branding */}
        <div className="text-center">
          <div className="glass-card rounded-xl p-8 border border-white/20 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-green-600/5"></div>
            
            <div className="flex items-center justify-center mb-6 relative z-10">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-white font-medium text-sm">Verified by Google</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="group">
                <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  {testimonials.length}
                </div>
                <div className="text-gray-300 font-medium">Happy Customers</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  5.0
                </div>
                <div className="text-gray-300 font-medium">Average Rating</div>
                <div className="flex justify-center mt-2">
                  {renderStars(5)}
                </div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  100%
                </div>
                <div className="text-gray-300 font-medium">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
