
import { useState, useEffect } from 'react';
import reviewsData from '../data/reviews.json';

export interface Testimonial {
  title: string;
  url: string;
  stars: number;
  name: string;
  reviewUrl: string;
  text: string | null;
}

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load testimonials from localStorage or use default data
    const loadTestimonials = () => {
      try {
        const storedTestimonials = localStorage.getItem('cuephoria_testimonials');
        if (storedTestimonials) {
          const parsed = JSON.parse(storedTestimonials);
          console.log('Loaded testimonials from localStorage:', parsed.length);
          setTestimonials(parsed);
        } else {
          // Load reviews from JSON file (261 reviews)
          const defaultTestimonials: Testimonial[] = reviewsData as Testimonial[];
          
          console.log('Using default testimonials from JSON:', defaultTestimonials.length);
          setTestimonials(defaultTestimonials);
          localStorage.setItem('cuephoria_testimonials', JSON.stringify(defaultTestimonials));
        }
      } catch (error) {
        console.error('Error loading testimonials:', error);
        setTestimonials([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  const updateTestimonials = (newTestimonials: Testimonial[]) => {
    console.log('Updating testimonials with', newTestimonials.length, 'reviews');
    setTestimonials(newTestimonials);
    localStorage.setItem('cuephoria_testimonials', JSON.stringify(newTestimonials));
  };

  return {
    testimonials,
    isLoading,
    updateTestimonials
  };
};
