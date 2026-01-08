import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Gamepad2, 
  GraduationCap, 
  Users, 
  Target, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Copy,
  Trophy,
  BookOpen,
  Zap,
  Star,
  Rocket
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOMetadata from '../components/SEOMetadata';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  interest: z.string().min(1, 'Please select your area of interest'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const GameInsider = () => {
  const [couponRevealed, setCouponRevealed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();
  const couponCode = 'GAMEINSIDER50';

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Here you would typically send the data to your backend
      // For now, we'll just simulate a submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setFormSubmitted(true);
      setCouponRevealed(true);
      
      toast({
        title: 'Form Submitted Successfully!',
        description: 'Your exclusive coupon code has been revealed below.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const copyCouponCode = () => {
    navigator.clipboard.writeText(couponCode);
    toast({
      title: 'Coupon Copied!',
      description: `${couponCode} has been copied to clipboard`,
    });
  };

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.classList.add('animate-fade-in');
          });
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const targetElements = document.querySelectorAll('section, .glass-card, .feature-card');
    targetElements.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gaming-dark text-white">
      <SEOMetadata 
        title="Game Insider × Cuephoria | Building Careers in Game Development & Esports" 
        description="Exclusive partnership between Cuephoria and Game Insider World. Access industry-relevant education in Game Development and Esports. Get your exclusive 50% discount coupon code!"
      />
      <Navbar activeSection="gameinsider" />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gaming-darker">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.15)_0,rgba(15,25,40,0.5)_100%)]"></div>
            
            {/* Floating game icons */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-float"
                  style={{
                    left: `${(i * 6.67) % 100}%`,
                    top: `${(i * 6.67) % 100}%`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                >
                  <Gamepad2 size={28} className="text-orange-400" />
                </div>
              ))}
            </div>
            
            {/* Animated grid lines */}
            <div className="absolute inset-0">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent w-full"
                  style={{
                    top: `${i * 12.5}%`,
                  }}
                ></div>
              ))}
            </div>
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-orange-500/30 rounded-full animate-float"
                  style={{
                    left: `${(i * 5) % 100}%`,
                    top: `${(i * 7) % 100}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: `${3 + (i % 3)}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10 py-20">
            <div className="flex flex-col items-center text-center">
              {/* Logos */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 animate-fade-in">
                <div className="relative">
                  <img
                    src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png"
                    alt="Cuephoria Logo"
                    className="h-24 md:h-32 w-auto animate-float"
                  />
                </div>
                <div className="text-4xl md:text-6xl font-bold text-white animate-pulse-neon">
                  ×
                </div>
                <div className="relative">
                  {/* Game Insider Logo - placeholder until user attaches it */}
                  <div className="h-24 md:h-32 w-auto flex items-center justify-center bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-lg border-2 border-orange-500/50 px-8 animate-float">
                    <div className="relative flex items-start">
                      <div className="text-center">
                        <div className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight">GAME</div>
                        <div className="text-2xl md:text-4xl font-bold text-orange-500 tracking-tight leading-tight">INSIDER</div>
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-white ml-2 transform rotate-90 origin-top-left" style={{ writingMode: 'vertical-rl' }}>
                        WORLD
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
                <span className="block neon-text-blue">Building Careers</span>
                <span className="block text-white mt-2">in Game Development & Esports</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 animate-fade-in">
                Cuephoria strongly believes in empowering its community with the right guidance and career clarity within the gaming ecosystem.
              </p>

              {/* Animated pointer */}
              <div className="flex flex-col items-center gap-4 mb-12">
                <div className="flex items-center gap-2 text-neon-pink animate-bounce-slow">
                  <Sparkles className="h-6 w-6 animate-pulse" />
                  <span className="text-lg font-semibold">Scroll to learn more and get your exclusive discount!</span>
                  <ArrowRight className="h-6 w-6 animate-pulse" />
                </div>
                <div className="flex items-center gap-2 text-orange-500 animate-pulse">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex-col items-center hidden md:flex">
            <div className="w-6 h-10 border-2 border-orange-500/50 rounded-full flex justify-center p-1">
              <div className="w-1 h-3 bg-orange-500 rounded-full animate-bounce-slow"></div>
            </div>
            <span className="text-orange-500/70 text-sm mt-2 animate-pulse">Scroll Down</span>
          </div>
        </section>

        {/* About the Initiative */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,165,0,0.1)_0,rgba(15,25,40,0)_70%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-2xl p-8 md:p-12 border border-orange-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-8 w-8 text-orange-500 animate-pulse-neon" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">About the Initiative</h2>
                </div>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  The gaming and esports industry demands more than passion — it requires skills, clarity, and ecosystem awareness.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 p-4 bg-gaming-darker/50 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all">
                    <Gamepad2 className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Game Insider World</h3>
                      <p className="text-gray-300">
                        Delivers industry-designed programs built around real roles and workflows
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-gaming-darker/50 rounded-lg border border-neon-blue/20 hover:border-neon-blue/40 transition-all">
                    <Rocket className="h-6 w-6 text-neon-blue mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Cuephoria</h3>
                      <p className="text-gray-300">
                        Extends access to these programs for its community, ensuring learners are guided toward credible and structured education
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  This approach allows gaming aspirants to learn with clarity, build relevant skills, and understand real career pathways within the industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="neon-text-pink">Who This Is For</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                No prior industry experience required — just commitment and curiosity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: GraduationCap, title: 'Students', desc: 'Exploring careers in gaming or esports', bgColor: 'bg-orange-500/20', iconColor: 'text-orange-500', borderColor: 'border-orange-500/20 hover:border-orange-500/50' },
                { icon: Gamepad2, title: 'Game Developers', desc: 'Aspiring developers and designers', bgColor: 'bg-neon-blue/20', iconColor: 'text-neon-blue', borderColor: 'border-neon-blue/20 hover:border-neon-blue/50' },
                { icon: Trophy, title: 'Esports Enthusiasts', desc: 'Looking for professional roles', bgColor: 'bg-neon-pink/20', iconColor: 'text-neon-pink', borderColor: 'border-neon-pink/20 hover:border-neon-pink/50' },
                { icon: Users, title: 'Creators & Managers', desc: 'Wanting to enter the esports ecosystem', bgColor: 'bg-purple-500/20', iconColor: 'text-purple-400', borderColor: 'border-purple-500/20 hover:border-purple-500/50' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`feature-card glass-card rounded-xl p-6 border ${item.borderColor} transition-all hover:scale-105 group`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`p-4 rounded-lg ${item.bgColor} mb-4 inline-block`}>
                    <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Game Insider World */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,165,0,0.1)_0,rgba(15,25,40,0)_70%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-2xl p-8 md:p-12 border border-orange-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="h-8 w-8 text-orange-500 animate-pulse-neon" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">About Game Insider World</h2>
                </div>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Game Insider World is a career-focused learning platform built to bridge the gap between aspiration and employability in the Game Development and Esports industry.
                </p>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Founded with a clear mission — to make gaming careers accessible, structured, and industry-relevant — Game Insider goes beyond generic courses to deliver practical, mentor-led programs aligned with real-world industry needs.
                </p>

                <div className="space-y-4 mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">What Game Insider Does Differently</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Industry-aligned learning paths',
                      'Role-based career programs, not hobby-driven content',
                      'Mentorship from working professionals',
                      'Practical exposure to real industry workflows',
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 bg-gaming-darker/50 rounded-lg border border-orange-500/20"
                      >
                        <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-orange-500/10 to-neon-blue/10 rounded-lg border border-orange-500/30">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Star className="h-6 w-6 text-orange-500" />
                    Why This Matters
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    As gaming and esports continue to grow globally, the industry needs trained, informed, and job-ready professionals. Game Insider exists to reduce entry barriers, provide clarity in a fragmented ecosystem, and enable learners to move from interest to industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Offer Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-2xl p-8 md:p-12 border-2 border-orange-500/50 bg-gradient-to-br from-orange-500/10 to-neon-blue/10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/50 mb-4">
                    <Zap className="h-5 w-5 text-orange-500 animate-pulse" />
                    <span className="text-orange-500 font-bold">EXCLUSIVE FOR CUEPHORIA COMMUNITY</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Free Starter Series
                  </h2>
                  
                  <p className="text-lg text-gray-300 mb-6">
                    Game Insider World offers a free Starter Series in Game Development and Esports, curated specifically for the Cuephoria community.
                  </p>
                  
                  <div className="space-y-3 text-left max-w-2xl mx-auto mb-8">
                    {[
                      'Introduce core industry concepts',
                      'Provide clarity on career paths',
                      'Help learners understand where to begin',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0" />
                        <p className="text-gray-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form Section */}
                <div className="glass-card rounded-xl p-6 md:p-8 border-2 border-neon-blue/30 bg-gaming-darker/50 relative overflow-hidden">
                  {/* Animated border glow */}
                  <div className="absolute inset-0 border-2 border-orange-500/30 rounded-xl animate-pulse-neon pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
                      <Sparkles className="h-6 w-6 text-neon-pink animate-pulse" />
                      Fill out the form to learn more and get started
                    </h3>
                    
                    {/* Pointer to form */}
                    <div className="flex items-center justify-center gap-2 mb-4 text-orange-500 animate-bounce-slow">
                      <ArrowRight className="h-5 w-5 transform rotate-90" />
                      <span className="text-sm font-semibold">Fill all fields to unlock your exclusive coupon!</span>
                      <ArrowRight className="h-5 w-5 transform -rotate-90" />
                    </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name <span className="text-orange-500">*</span>
                      </label>
                      <Input
                        {...register('name')}
                        placeholder="Enter your full name"
                        className="bg-gaming-darker border-neon-blue/30 text-white placeholder:text-gray-500 focus:border-neon-blue"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address <span className="text-orange-500">*</span>
                      </label>
                      <Input
                        {...register('email')}
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-gaming-darker border-neon-blue/30 text-white placeholder:text-gray-500 focus:border-neon-blue"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number <span className="text-orange-500">*</span>
                      </label>
                      <Input
                        {...register('phone')}
                        type="tel"
                        placeholder="+91 1234567890"
                        className="bg-gaming-darker border-neon-blue/30 text-white placeholder:text-gray-500 focus:border-neon-blue"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Area of Interest <span className="text-orange-500">*</span>
                      </label>
                      <select
                        {...register('interest')}
                        className="flex h-10 w-full rounded-md border border-neon-blue/30 bg-gaming-darker px-3 py-2 text-base text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue focus-visible:ring-offset-2"
                      >
                        <option value="">Select your interest</option>
                        <option value="game-development">Game Development</option>
                        <option value="esports">Esports</option>
                        <option value="both">Both</option>
                      </select>
                      {errors.interest && (
                        <p className="text-red-400 text-sm mt-1">{errors.interest.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message (Optional)
                      </label>
                      <Textarea
                        {...register('message')}
                        placeholder="Tell us about your gaming aspirations..."
                        className="bg-gaming-darker border-neon-blue/30 text-white placeholder:text-gray-500 focus:border-neon-blue min-h-[100px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-6 text-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit & Get Exclusive Coupon
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                    </Button>
                  </form>
                </div>

                  {/* Coupon Reveal Section */}
                  {couponRevealed && (
                    <div className="mt-8 animate-fade-in">
                      <div className="glass-card rounded-xl p-8 border-2 border-orange-500 bg-gradient-to-r from-orange-500/20 to-neon-blue/20 relative overflow-hidden">
                        {/* Animated background effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-neon-blue/10 animate-shimmer"></div>
                        
                        {/* Confetti effect */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          {Array.from({ length: 30 }).map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-2 h-2 rounded-full animate-float"
                              style={{
                                left: `${(i * 3.33) % 100}%`,
                                top: `${(i * 3.33) % 100}%`,
                                backgroundColor: i % 3 === 0 ? 'rgba(255, 165, 0, 0.6)' : i % 3 === 1 ? 'rgba(0, 255, 255, 0.6)' : 'rgba(255, 45, 239, 0.6)',
                                animationDelay: `${i * 0.1}s`,
                                animationDuration: `${2 + (i % 2)}s`,
                              }}
                            ></div>
                          ))}
                        </div>
                        
                        <div className="relative z-10 text-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/30 rounded-full border border-orange-500/50 mb-4">
                            <CheckCircle2 className="h-5 w-5 text-orange-500" />
                            <span className="text-orange-500 font-bold">CONGRATULATIONS!</span>
                          </div>
                          
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Your Exclusive Discount Code
                          </h3>
                          
                          <div className="bg-gaming-darker/80 rounded-lg p-6 mb-6 border-2 border-orange-500/50">
                            <p className="text-gray-300 mb-2">Use this code for</p>
                            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2 animate-pulse-neon">
                              50% OFF
                            </div>
                            <div className="flex items-center justify-center gap-3 mb-4">
                              <code className="text-2xl md:text-3xl font-mono font-bold text-white bg-gaming-dark px-6 py-3 rounded-lg border border-neon-blue/50">
                                {couponCode}
                              </code>
                              <Button
                                onClick={copyCouponCode}
                                className="bg-neon-blue hover:bg-neon-blue/80 text-white"
                                size="lg"
                              >
                                <Copy className="h-5 w-5 mr-2" />
                                Copy
                              </Button>
                            </div>
                            <p className="text-gray-400 text-sm">
                              Valid for all game services at Cuephoria
                            </p>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                              href="https://forms.gle/Vif6LFyfw5ptaH898"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-6 py-3 bg-neon-blue text-white rounded-lg hover:bg-neon-blue/80 transition-all font-semibold"
                            >
                              Explore Starter Series
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                              href="/book"
                              className="inline-flex items-center justify-center px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-all font-semibold"
                            >
                              Book Now with Discount
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GameInsider;
