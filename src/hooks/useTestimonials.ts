
import { useState, useEffect } from 'react';

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
          setTestimonials(JSON.parse(storedTestimonials));
        } else {
          // Default testimonials data
          const defaultTestimonials: Testimonial[] = [
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "abdul wahith",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tFM1ZtRkZjREUxU2xGdlVtMVJhVXhJWTNJMlIzYxAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CAIQACodChtycF9oOkE3VmFFcDE1SlFvUm1RaUxIY3I2R3c%7C0cPxoiti2pL%7C?hl=en",
              "text": "More enjoyable and joyfull"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Jhon Abraham",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xaSVluUkxWM1pPTVVWR1YyRk5iRlpmY1ZwNGVIYxAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CAIQACodChtycF9oOlZIYnRLV3ZOMUVGV2FNbFZfcVp4eHc%7C0cPxnbV39Kg%7C?hl=en",
              "text": "No.1 Trichy"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A6&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "prashanth prakash",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21ONk9EQkxSRkZ0YUdOUmVIZ3dSSFJSUjB4NlVYYxAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CAIQACodChtycF9oOmN6ODBLRFFtaGNReHgwRHRRR0x6UXc%7C0cL_ok41AA-%7C?hl=en",
              "text": "Great setup and really nice play to chill with friends over a game of snooker or FIFA.. Spacious and comfortable with bean bags everywhere.. And of course snacks to order available as well. Loved it!!"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "S H A A N",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VKS203LXJ5dzhtUVBnEAE!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEJKm7-ryw8mQPg%7CCgwIqcf4wAYQ2IeptwI%7C?hl=en",
              "text": "One of the coolest hangout spots in Trichy! Cuephoria has an awesome vibe — whether you're into 8-ball pool, console gaming, or just looking for a chilled place to unwind with friends. The tables are top-notch, the lighting is perfect, and everything feels clean and well-maintained. The staff is friendly and professional, and the whole place has a premium yet welcoming atmosphere. Highly recommend for anyone who loves billiards or gaming — you'll keep coming back!"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Tony Tony",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChRDSUhNMG9nS0VKcnBpcDd3MDkwTxAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEJrpip7w090O%7CCgwIl8ixwQYQkPqjpAE%7C?hl=en",
              "text": "One of the best gaming experiences I ever had 🫶🏻❤️‍🩹"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Pranesh Elangovan",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pkT2JsTmFjV2xoVG5WUGRYRXpZbHBTYW1OVkxYYxAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CAIQACodChtycF9oOjdOblNacWlhTnVPdXEzYlpSamNVLXc%7C0cQ-lCMCMHu%7C?hl=en",
              "text": null
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "daya yugesh",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT210VU1uSmxWSFUzTmpkMVJWcHJTVXBXY0U0eWFYYxAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CAIQACodChtycF9oOmtUMnJlVHU3Njd1RVprSUpWcE4yaXc%7C0cPZRgPXWk8%7C?hl=en",
              "text": "Nice place for gamers 💓"
            }
          ];
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
    setTestimonials(newTestimonials);
    localStorage.setItem('cuephoria_testimonials', JSON.stringify(newTestimonials));
  };

  return {
    testimonials,
    isLoading,
    updateTestimonials
  };
};
