import { useState, useEffect } from 'react';

export interface Testimonial {
  title: string;
  url: string;
  stars: number;
  name: string;
  reviewUrl: string;
  text: string | null;
  category?: string;
  verified?: boolean;
}

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reviewStats, setReviewStats] = useState({
    totalReviews: 0,
    averageRating: 0,
    ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
  });

  useEffect(() => {
    // Load testimonials from localStorage or use default data
    const loadTestimonials = async () => {
      try {
        // Try to load processed reviews
        const { processReviews, getReviewStats } = await import('../utils/reviewProcessor');
        const processedReviews = processReviews();
        const stats = getReviewStats();
        
        setTestimonials(processedReviews);
        setReviewStats(stats);
        
        // Cache in localStorage
        localStorage.setItem('cuephoria_testimonials', JSON.stringify(processedReviews));
        localStorage.setItem('cuephoria_review_stats', JSON.stringify(stats));
      } catch (error) {
        console.warn('Failed to load new reviews, falling back to defaults:', error);
        // Fallback to existing testimonials data
        const defaultTestimonials: Testimonial[] = [
          {
            "title": "Cuephoria Gaming Lounge & Café",
            "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
            "stars": 5,
            "name": "S H A A N",
            "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VKS203LXJ5dzhtUVBnEAE!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEJKm7-ryw8mQPg%7CCgwIqcf4wAYQ2IeptwI%7C?hl=en",
            "text": "One of the coolest hangout spots in Trichy!\nCuephoria has an awesome vibe — whether you're into 8-ball pool, console gaming, or just looking for a chilled place to unwind with friends. The tables are top-notch, the lighting is perfect, and everything feels clean and well-maintained. The staff is friendly and professional, and the whole place has a premium yet welcoming atmosphere. Highly recommend for anyone who loves billiards or gaming — you'll keep coming back!"
          },
          {
            "title": "Cuephoria Gaming Lounge & Café",
            "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
            "stars": 5,
            "name": "iam sesh",
            "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VMQ0Nnc3pCdnVpd3hRRRAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKELCCgszBvuiwxQE%7CCgwI_9r2wAYQ2ODdgwE%7C?hl=en",
            "text": "Experienced Fantastic Vibe and Fun at Cuephoria. The Games and Activities are so fun especially PS5 and Billiards.Must recommend this place to have fun with your friends and colleagues, even you can make friends who matches your Vibe if you are Solo."
          },
          {
            "title": "Cuephoria Gaming Lounge & Café",
            "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
            "stars": 4,
            "name": "prashanth prakash",
            "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21ONk9EQkxSRkZ0YUdOUmVIZ3dSSFRSUjB4NlVYYxAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CAIQACodChtycF9oOmN6ODBLRFFtaGNReHgwRHRRR0x6UXc%7C0cL_ok41AA-%7C?hl=en",
            "text": "Great setup and really nice place to chill with friends over a game of snooker or FIFA.. Spacious and comfortable with bean bags everywhere.. And of course snacks to order available as well. Could use some improvements in service speed."
          }
        ];
        
        setTestimonials(defaultTestimonials);
        setReviewStats({
          totalReviews: 175,
          averageRating: 4.8,
          ratingDistribution: { 5: 168, 4: 4, 3: 2, 2: 1, 1: 0 }
        });
        localStorage.setItem('cuephoria_testimonials', JSON.stringify(defaultTestimonials));
      } finally {
        setIsLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  const updateTestimonials = (newTestimonials: Testimonial[]) => {
    setTestimonials(newTestimonials);
    localStorage.setItem('cuephoria_testimonials', JSON.stringify(newTestimonials));
  };

  return { testimonials, isLoading, updateTestimonials, reviewStats };
};

export default useTestimonials;