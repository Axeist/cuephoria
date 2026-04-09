import reviewsData from '../data/reviews.json';

export interface Testimonial {
  title: string;
  url: string;
  stars: number;
  name: string;
  reviewUrl: string;
  text: string | null;
}

// Return data directly from the imported JSON — no async, no localStorage,
// no 2 MB stringify on every load.
const allTestimonials: Testimonial[] = reviewsData as Testimonial[];

export const useTestimonials = () => {
  return {
    testimonials: allTestimonials,
    isLoading: false,
    // no-op kept for API compatibility
    updateTestimonials: (_: Testimonial[]) => {},
  };
};
