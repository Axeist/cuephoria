
import React, { useState, useEffect } from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import testimonialsData from '../data/testimonials.json';

interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Load testimonials data
    setTestimonials(testimonialsData);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-600'
        }`}
      />
    ));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gaming-dark relative overflow-hidden">
      {/* Cyberpunk background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.05)_0,rgba(15,25,40,0)_70%)]"></div>
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,45,239,0.05)_0,rgba(15,25,40,0)_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[radial-gradient(circle,rgba(157,78,221,0.05)_0,rgba(15,25,40,0)_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            What Our <span className="neon-text-blue">Gamers</span> Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Real reviews from our amazing community of students and gaming enthusiasts
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="flex items-center space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-white font-medium">4.8/5</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">{testimonials.length}+ Reviews</span>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full glass-card border-gaming-accent/30 hover:border-neon-blue/50 transition-all duration-500 group">
                    <CardContent className="p-6">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Quote className="h-8 w-8 text-neon-pink opacity-60" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center space-x-1 mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-300 mb-6 line-clamp-4 text-sm leading-relaxed">
                        {testimonial.text}
                      </p>

                      {/* User Info */}
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-pink flex items-center justify-center text-white font-medium text-sm">
                          {testimonial.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="text-white font-medium text-sm group-hover:neon-text-blue transition-all duration-300">
                              {testimonial.name}
                            </h4>
                            {testimonial.verified && (
                              <CheckCircle className="h-4 w-4 text-green-400" />
                            )}
                          </div>
                          <p className="text-gray-400 text-xs">
                            {formatDate(testimonial.date)}
                          </p>
                        </div>
                      </div>

                      {/* Animated border effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-gaming-accent/50 bg-gaming-darker/80 text-neon-blue hover:bg-gaming-accent/20" />
            <CarouselNext className="hidden md:flex -right-12 border-gaming-accent/50 bg-gaming-darker/80 text-neon-blue hover:bg-gaming-accent/20" />
          </Carousel>
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Love your experience at Cuephoria?</p>
          <a
            href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-pink text-white font-medium rounded-full hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300"
          >
            Leave us a Google Review
            <Star className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
