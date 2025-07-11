
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
          const parsed = JSON.parse(storedTestimonials);
          console.log('Loaded testimonials from localStorage:', parsed.length);
          setTestimonials(parsed);
        } else {
          // Complete 37 reviews data
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
              "stars": 5,
              "name": "prashanth prakash",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21ONk9EQkxSRkZ0YUdOUmVIZ3dSSFRSUjB4NlVYYxAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CAIQACodChtycF9oOmN6ODBLRFFtaGNReHgwRHRRR0x6UXc%7C0cL_ok41AA-%7C?hl=en",
              "text": "Great setup and really nice play to chill with friends over a game of snooker or FIFA.. Spacious and comfortable with bean bags everywhere.. And of course snacks to order available as well. Loved it!!"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "rashad ali khan",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VLclB4ZFR4dllDOThBRRAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEKrPxdTxvYC98AE%7CCgwI6rP3wAYQkJCV6QI%7C?hl=en",
              "text": "Went with a group of friends and had a blast. Spacious lounge, premium equipment, and chill music in the background – perfect weekend spot!"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Soham Kumar Dash",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VNTDEwSVA1dV9HbWhBRRAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEML10IP5u_GmhAE%7CCgwI6NyHwQYQgNaRyQM%7C?hl=en",
              "text": "Was a wonderful experience. Definitely recommended. You have PS5 and billiards. It costed us less than 200₹ for playing little over 1 hr. Currently 50% discount is going on."
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Mohammed Maaz",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VMZnc0Ny0yMW9uR25RRRAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKELfw47-21onGnQE%7CCgwIyvT2wAYQyNuSgwI%7C?hl=en",
              "text": "Cuephoria is a paradise for snooker and 8-ball pool lovers. Great ambience, friendly staff, and well-maintained tables make every visit enjoyable."
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Mohammed Abdullah",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VPeWp3ZFQ4MnB2NFN3EAE!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEOyjwdT82pv4Sw%7CCgwI2tn0wAYQ-PvptwE%7C?hl=en",
              "text": "Absolutely loved the vibe at Cuephoria! The tables are top-notch, and the lighting is perfect for a game night. Easily the best pool lounge in town!\""
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Gaurav Bhandari",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VKcTBtNVRmdXFHUE53EAE!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEJq0m5TfuqGPNw%7CCgwIwbv-wAYQoJPz0gI%7C?hl=en",
              "text": "Nice ambience, great tables,  Trending games and latest updates. You guys have it all.... Highly recommend it for young crowd who wants to have a good time"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Arun Krishnan",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VKMlFzYldwc3RlckR3EAE!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEJ2QsbWpsterDw%7CCgwIotXywAYQ2J-ljAI%7C?hl=en",
              "text": "Perfect spot to chill with friends and game for hours. Highly recommend for serious and casual gamers alike!"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Vignesh S",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VKX0g0N1hacC1IaXVnRRAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEJ_H47XZp-HiugE%7CCgwI2q3ywAYQ2JrWlQM%7C?hl=en",
              "text": "Amazing place, amazing ambiance, reasonable rate, nice place to hang out with friends"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Saranya Chandrasekaran",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VQR284N1BjaVlLMDNBRRAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEPGo87PciYK03AE%7CCgsIrbCRwgYQ2PiDSw%7C?hl=en",
              "text": "The Cuephoria game center was a lot of fun! The staff was friendly and helpful, and the ambience is very good."
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "vinoth kumar",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJR0s1cGpUc05qWlZ3EAE!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEIGK5pjTsNjZVw%7CCgwI0oWLwgYQoM-AyAI%7C?hl=en",
              "text": "Good experiance.... Nice ambience..."
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Selvin Francis",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VQTDV1WXJhcUktRlNnEAE!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEPL5uYraqI-FSg%7CCgwIurSJwQYQ8MXgjAM%7C?hl=en",
              "text": "Hands down one of the best place in tirchy! \"CUEPHORIA\""
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "kalees kalees",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJU0RxOXladU1HUnp3RRAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEISDq9yZuMGRzwE%7CCgsIysCIwQYQiNyOLQ%7C?hl=en",
              "text": "🎱Very nice good ambiance 😍🎱"
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
              "name": "pavithra lakshminarayanan",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VMT3YwY3VCM3FhUTZnRRAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKELOv0cuB3qaQ6gE%7CCgsI7r7-wAYQwOb4GQ%7C?hl=en",
              "text": "Nice place.. and affordable"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Fayaz Ahamed",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VMbnBrdlBieWRyMm9nRRAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKELnpkvPbydr2ogE%7CCgsIwtT0wAYQkLXuaQ%7C?hl=en",
              "text": "Wonderful ambiance with great vision…"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Great place to spend time .",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VOYVZrZEdKNEpYcHdnRRAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKENaVkdGJ4JXpwgE%7CCgsIgff2wAYQgK-xIg%7C?hl=en",
              "text": "Great place to spend time ."
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "abdul wahith",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tFM1ZtRkZjREUxU2xGdlVtMVJhVXhJWTNJMlIzYxAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CAIQACodCbtycF9oOkE3VmFFcDE1SlFvUm1RaUxIY3I2R3c%7C0cPxoiti2pL%7C?hl=en",
              "text": "More enjoyable and joyfull"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Jhon Abraham",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xaSVluUkxWM1pPTVVWR1YyRk5iRlpmY1ZwNGVIYxAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CAIQACodCbtycF9oOlZIYnRLV3ZOMUVGV2FNbFZfcVp4eHc%7C0cPxnbV39Kg%7C?hl=en",
              "text": "No.1 Trichy"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "daya yugesh",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT210VU1uSmxWSFUzTmpkMVJWcHJTVXBXY0U0eWFYYxAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CAIQACodCbtycF9oOmtUMnJlVHU3Njd1RVprSUpWcE4yaXc%7C0cPZRgPXWk8%7C?hl=en",
              "text": "Nice place for gamers 💓"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Sk Sk",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VNQ2FzN0Q0ZzZLdTBBRRAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEMCas7D4g6Ku0AE%7CCgsI4_n2wAYQiPrqCw%7C?hl=en",
              "text": "Very nice cafe"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Mukesh G",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25wRVJWcFdUVVpOYldOZlRIRTVZVkJhVDI4MlRuYxAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CAIQACodCbtycF9oOnpERVpWTUZNbWNfTHE5YVBaT282Tnc%7C0cPZQ2ruSsC%7C?hl=en",
              "text": "Nice spot"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Wicked wango",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pSSU5XRm5ja2xtWDE5UE4wbFNTaTE1ZGpkTlQyYxAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CAIQACodCbtycF9oOjRINWFncklmX19PN0lSSi15djdNT2c%7C0cM16hPFAgM%7C?hl=en",
              "text": "good"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Adhiyan",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VMcUFfYV9MNnBDUnhRRRAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKELqA_a_L6pCRxQE%7CCgwIjqKgwgYQuKyDygI%7C?hl=en",
              "text": "Good"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Shan Vel",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTURJa2Ezc3dBRRAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEICAgMDIka3swAE%7CCgwIo4bgvwYQ-OeJ8gI%7C?hl=en",
              "text": "Very nice"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Ranjith Kumar S",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTURJd2NuaDh3RRAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEICAgMDIwcnh8wE%7CCgwIu_LevwYQgO6O9wE%7C?hl=en",
              "text": "Waiting for the launch 🚀"
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Pranesh Elangovan",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pkT2JsTmFjV2xoVG5WUGRYRXpZbHBTYW1OVkxYYxAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CAIQACodCbtycF9oOjdOblNacWlhTnVPdXEzYlpSamNVLXc%7C0cQ-lCMCMHu%7C?hl=en",
              "text": null
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "R O PrithiviRajan",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2w5VFFuUjZjSFJJUm1SclFtWnJaMll3WkhOTGNtYxAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CAIQACodCbtycF9oOl9TQnR6cHRIRmRrQmZrZ2YwZHNLcmc%7C0cPyrxeXohK%7C?hl=en",
              "text": null
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Mahesh Sharuk",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xBMlZXeHRlVFpFYzBaMU0wUjVUa2xwTFV0QlkxRRAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CAIQACodCbtycF9oOlA2VWxteTZEc0Z1M0R5TklpLUtBY1E%7C0cNeYWXILIg%7C?hl=en",
              "text": null
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Chithra L",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VNemxzS2ZMMU1lVmRREAE!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEMzlsKfL1MeVdQ%7CCgsI-ZOdwQYQoOnqDA%7C?hl=en",
              "text": null
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "ACE KID",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VPVzc1c0txcGRHaWNREAE!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEOW75sKqpdGicQ%7CCgwI0N-XwQYQsNDtxQM%7C?hl=en",
              "text": null
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Lifestyle Phantom",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJbmM4Ym03eS1YQjZnRRAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEInc8bm7y-XB6gE%7CCgwInKSCwQYQ4I7OxwM%7C?hl=en",
              "text": null
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Aravindh S",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VLZVByTGJidFA2cG1nRRAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEKePrLbbtP6pmgE%7CCgwIs6GCwQYQ8MKU_wE%7C?hl=en",
              "text": null
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Vickyraina3 Raina",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VQX2kwbzJ6b01takl3EAE!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEP_i0o2zoMmjIw%7CCgsIvPKAwQYQoOmoIg%7C?hl=en",
              "text": null
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "kl vishal",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VKRFRvNUNycjZxN2xnRRAB!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEJDTo5Crr6q7lgE%7CCgwI86vywAYQuLi93AM%7C?hl=en",
              "text": null
            },
            {
              "title": "Cuephoria Gaming Lounge & Café",
              "url": "https://www.google.com/maps/search/?api=1&query=Cuephoria%20Gaming%20Lounge%20%26%20Caf%C3%A9&query_place_id=ChIJ2cKrHw_zqjsRHpMUHV-CvYM",
              "stars": 5,
              "name": "Prem Nakrani",
              "reviewUrl": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTUNZenBfaUZnEAE!2m1!1s0x0:0x83bd825f1d14931e!3m1!1s2@1:CIHM0ogKEICAgMCYzp_iFg%7CCgwIiI3dwAYQgOTSnAE%7C?hl=en",
              "text": null
            }
          ];
          
          console.log('Using default testimonials:', defaultTestimonials.length);
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
