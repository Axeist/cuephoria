import React, { useEffect, useState } from 'react';
import { Star, Quote, ExternalLink, MessageSquarePlus } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { useTestimonials } from '../hooks/useTestimonials';
import { Button } from './ui/button';

const Testimonials = () => {
  const { testimonials, isLoading } = useTestimonials();
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

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

  // Auto-scroll functionality
  useEffect(() => {
    if (!api || !isAutoScrolling) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Move every 4 seconds

    return () => clearInterval(interval);
  }, [api, isAutoScrolling]);

  // Track current slide for seamless loop
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    onSelect();

    return () => api?.off('select', onSelect);
  }, [api]);

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

  // Calculate statistics from actual reviews
  const totalReviews = testimonials.length;
  const averageRating = totalReviews > 0 
    ? (testimonials.reduce((sum, review) => sum + review.stars, 0) / totalReviews).toFixed(1)
    : '5.0';
  const satisfactionRate = totalReviews > 0
    ? Math.round((testimonials.filter(review => review.stars >= 4).length / totalReviews) * 100)
    : 100;

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
        {/* Header with Google branding and Review Collection Button */}
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
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Real reviews from our amazing gaming community in Trichy
          </p>

          {/* Review Collection Button */}
          <div className="mb-8">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 hover:border-white/40"
            >
              <a
                href="https://g.page/r/CR6TFB1fgr2DEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <MessageSquarePlus className="w-5 h-5" />
                <span>Write a Review</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Featured Reviews Carousel with Auto-scroll */}
        {featuredTestimonials.length > 0 && (
          <div className="mb-16">
            <Carousel 
              className="max-w-7xl mx-auto"
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
                skipSnaps: false,
                dragFree: true,
              }}
            >
              <CarouselContent 
                className="-ml-2 md:-ml-4"
                onMouseEnter={() => setIsAutoScrolling(false)}
                onMouseLeave={() => setIsAutoScrolling(true)}
              >
                {featuredTestimonials.map((review, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="glass-card rounded-xl p-6 h-full border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 group relative overflow-hidden">
                      {/* Animated gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="flex items-center justify-between mb-4 relative z-10">
                        <div className="flex items-center space-x-2">
                          <Quote className="w-8 h-8 text-blue-400 drop-shadow-lg" />
                          <div className="flex space-x-1">
                            {renderStars(review.stars)}
                          </div>
                        </div>
                        <a 
                          href={review.reviewUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      
                      <p className="text-gray-100 mb-6 text-sm leading-relaxed relative z-10 font-medium">
                        "{review.text}"
                      </p>
                      
                      <div className="flex items-center relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-green-500 to-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                          <span className="text-white font-bold text-sm">
                            {review.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">{review.name}</p>
                          <div className="flex items-center space-x-1">
                            <span className="text-xs text-blue-400 font-medium">Google</span>
                            <div className="flex space-x-1">
                              <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                              <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                              <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                              <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-gaming-darker/80 backdrop-blur-sm border-blue-400/30 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/50 shadow-lg -left-4 md:-left-12" />
              <CarouselNext className="bg-gaming-darker/80 backdrop-blur-sm border-blue-400/30 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/50 shadow-lg -right-4 md:-right-12" />
            </Carousel>

            {/* Auto-scroll indicator */}
            <div className="flex justify-center mt-4">
              <div className="flex items-center space-x-2 text-gray-400 text-xs">
                <div className={`w-2 h-2 rounded-full ${isAutoScrolling ? 'bg-blue-400 animate-pulse' : 'bg-gray-600'}`}></div>
                <span>{isAutoScrolling ? 'Auto-scrolling' : 'Paused on hover'}</span>
              </div>
            </div>
          </div>
        )}

        {/* Quick Reviews Grid */}
        {quickReviews.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-8 font-orbitron">
              <span className="neon-text-blue glow-text">5-Star Reviews</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {quickReviews.slice(0, 18).map((review, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-lg p-4 border border-white/10 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex justify-center mb-2 relative z-10">
                    <div className="flex space-x-1">
                      {renderStars(review.stars)}
                    </div>
                  </div>
                  <div className="text-center relative z-10">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-green-500 to-red-500 rounded-full flex items-center justify-center mb-2 mx-auto shadow-md">
                      <span className="text-white font-bold text-xs">
                        {review.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <p className="text-white text-xs font-medium truncate mb-1">{review.name}</p>
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <span className="text-[10px] text-blue-400">Google</span>
                    </div>
                    {review.text && (
                      <p className="text-gray-400 text-[10px] truncate">"{review.text}"</p>
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
                  {totalReviews}
                </div>
                <div className="text-gray-300 font-medium">Happy Customers</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  {averageRating}
                </div>
                <div className="text-gray-300 font-medium">Average Rating</div>
                <div className="flex justify-center mt-2">
                  {renderStars(parseFloat(averageRating))}
                </div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  {satisfactionRate}%
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
