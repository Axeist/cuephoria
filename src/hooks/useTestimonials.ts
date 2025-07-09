
import { useState, useEffect } from 'react';

interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
  avatar: string;
}

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      // For now, import from JSON file
      // In the future, this can be replaced with an API call to fetch scraped data
      const { default: data } = await import('../data/testimonials.json');
      setTestimonials(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching testimonials:', err);
      setError('Failed to load testimonials');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const refreshTestimonials = () => {
    fetchTestimonials();
  };

  return {
    testimonials,
    loading,
    error,
    refreshTestimonials
  };
};
