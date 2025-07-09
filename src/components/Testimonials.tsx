
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { useTestimonials } from '../hooks/useTestimonials';

const Testimonials = () => {
  const { testimonials, isLoading } = useTestimonials();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'text-yellow-400 fill-yellow-400' 
            : 'text-gray-600'
        }`}
      />
    ));
  };

  if (isLoading) {
    return (
      <section id="testimonials" className="py-20 bg-gaming-dark relative overflow-hidden">
        <div className="container mx-auto px-4">
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

  const featuredTestimonials = testimonials.filter(review => review.text && review.text.trim().length > 10);
  const quickReviews = testimonials.filter(review => !review.text || review.text.trim().length <= 10);

  return (
    <section id="testimonials" className="py-20 bg-gaming-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-pink/20 rounded-full blur-3xl"></div>
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

        {/* Featured Reviews Carousel */}
        {featuredTestimonials.length > 0 && (
          <div className="mb-16">
            <Carousel className="max-w-6xl mx-auto">
              <CarouselContent>
                {featuredTestimonials.map((review, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="glass-card rounded-xl p-6 h-full border border-neon-blue/30 hover:border-neon-pink/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20">
                      <div className="flex items-center mb-4">
                        <Quote className="w-8 h-8 text-neon-pink mr-3 flex-shrink-0" />
                        <div className="flex space-x-1">
                          {renderStars(review.stars)}
                        </div>
                      </div>
                      
                      <p className="text-gray-100 mb-6 text-sm leading-relaxed">
                        "{review.text}"
                      </p>
                      
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-pink rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-white font-bold text-sm">
                            {review.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">{review.name}</p>
                          <p className="text-gray-400 text-xs">Google Review</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-gaming-darker border-neon-blue/30 text-neon-blue hover:bg-neon-blue/20" />
              <CarouselNext className="bg-gaming-darker border-neon-blue/30 text-neon-blue hover:bg-neon-blue/20" />
            </Carousel>
          </div>
        )}

        {/* Quick Reviews Grid */}
        {quickReviews.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-8 font-orbitron">
              <span className="neon-text-blue">5-Star Reviews</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {quickReviews.slice(0, 12).map((review, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-lg p-4 border border-neon-blue/20 hover:border-neon-pink/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex justify-center mb-2">
                    <div className="flex space-x-1">
                      {renderStars(review.stars)}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-pink rounded-full flex items-center justify-center mb-2 mx-auto">
                      <span className="text-white font-bold text-xs">
                        {review.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <p className="text-white text-xs font-medium truncate">{review.name}</p>
                    {review.text && (
                      <p className="text-gray-400 text-xs mt-1 truncate">"{review.text}"</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="text-center">
          <div className="glass-card rounded-xl p-8 border border-neon-blue/30 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-neon-pink mb-2">{testimonials.length}</div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-blue mb-2">5.0</div>
                <div className="text-gray-300">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-pink mb-2">100%</div>
                <div className="text-gray-300">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
