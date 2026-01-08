import React, { useState, useEffect } from 'react';
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
  Rocket,
  ExternalLink,
  Gift,
  Code,
  Briefcase,
  TrendingUp,
  Award,
  PlayCircle,
  Layers,
  Lightbulb,
  Shield
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOMetadata from '../components/SEOMetadata';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const GameInsider = () => {
  const [couponRevealed, setCouponRevealed] = useState(false);
  const { toast } = useToast();
  const couponCode = 'GAMEINSIDER50';
  const googleFormUrl = 'https://forms.gle/Vif6LFyfw5ptaH898';

  const handleGoogleFormClick = () => {
    setCouponRevealed(true);
    window.open(googleFormUrl, '_blank');
    toast({
      title: 'Opening Google Form!',
      description: 'Your exclusive coupon code will be revealed below.',
    });
  };

  const copyCouponCode = () => {
    navigator.clipboard.writeText(couponCode);
    toast({
      title: 'Coupon Copied!',
      description: `${couponCode} has been copied to clipboard`,
    });
  };

  // Enhanced scroll animations
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
    const targetElements = document.querySelectorAll('section, .glass-card, .feature-card, .animate-on-scroll');
    targetElements.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gaming-dark text-white overflow-x-hidden">
      <SEOMetadata 
        title="Game Insider × Cuephoria | Building Careers in Game Development & Esports" 
        description="Exclusive partnership between Cuephoria and Game Insider World. Access industry-relevant education in Game Development and Esports. Get your exclusive 50% discount coupon code!"
      />
      <Navbar activeSection="gameinsider" />
      
      <main className="pt-20">
        {/* Hero Section with Enhanced Animations */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Animated background with multiple layers */}
          <div className="absolute inset-0 bg-gaming-darker">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.2)_0,rgba(15,25,40,0.6)_100%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,255,255,0.1)_0,transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,45,239,0.1)_0,transparent_50%)]"></div>
            
            {/* Floating game icons with rotation */}
            <div className="absolute inset-0 overflow-hidden opacity-15">
              {Array.from({ length: 25 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-float"
                  style={{
                    left: `${(i * 4) % 100}%`,
                    top: `${(i * 4) % 100}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: `${4 + (i % 3)}s`,
                  }}
                >
                  <Gamepad2 
                    size={32} 
                    className="text-orange-400 animate-rotate-slow"
                    style={{ animationDuration: `${10 + (i % 5)}s` }}
                  />
                </div>
              ))}
            </div>
            
            {/* Animated grid lines with glow */}
            <div className="absolute inset-0">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent w-full"
                  style={{
                    top: `${i * 8.33}%`,
                    boxShadow: '0 0 10px rgba(255, 165, 0, 0.3)',
                  }}
                ></div>
              ))}
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-px h-full bg-gradient-to-b from-transparent via-neon-blue/20 to-transparent"
                  style={{
                    left: `${i * 12.5}%`,
                  }}
                ></div>
              ))}
            </div>
            
            {/* Floating particles with different sizes */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full animate-float"
                  style={{
                    left: `${(i * 2.5) % 100}%`,
                    top: `${(i * 2.5) % 100}%`,
                    width: `${2 + (i % 4)}px`,
                    height: `${2 + (i % 4)}px`,
                    backgroundColor: i % 4 === 0 ? 'rgba(255, 165, 0, 0.4)' : 
                                   i % 4 === 1 ? 'rgba(0, 255, 255, 0.3)' : 
                                   i % 4 === 2 ? 'rgba(255, 45, 239, 0.3)' : 
                                   'rgba(255, 255, 255, 0.2)',
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: `${3 + (i % 4)}s`,
                  }}
                ></div>
              ))}
            </div>

            {/* Pulsing orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse-neon"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-neon" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 py-20">
            <div className="flex flex-col items-center text-center">
              {/* Enhanced Logo Section */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-16 animate-fade-in">
                <div className="relative group">
                  <div className="absolute inset-0 bg-neon-blue/30 rounded-3xl blur-2xl group-hover:bg-neon-blue/40 transition-all animate-pulse-neon"></div>
                  <img
                    src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png"
                    alt="Cuephoria Logo"
                    className="h-32 md:h-48 w-auto relative z-10 animate-float"
                  />
                </div>
                
                <div className="text-5xl md:text-7xl font-bold text-white/20 animate-pulse-neon">
                  ×
                </div>
                
                {/* Enhanced Game Insider Logo - More Visual, Less Text */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-orange-500/30 rounded-3xl blur-2xl group-hover:bg-orange-500/40 transition-all animate-pulse-neon"></div>
                  <div className="relative z-10 h-32 md:h-48 w-64 md:w-80 flex items-center justify-center bg-gradient-to-br from-orange-500/20 via-orange-600/15 to-orange-500/20 rounded-3xl border-3 border-orange-500/50 backdrop-blur-md animate-float shadow-2xl shadow-orange-500/30">
                    {/* Visual game controller icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <Gamepad2 size={120} className="text-orange-500 animate-rotate-slow" />
                    </div>
                    {/* Logo text overlay */}
                    <div className="relative z-10 text-center px-6">
                      <div className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-1 drop-shadow-[0_0_10px_rgba(255,165,0,0.8)]">GAME</div>
                      <div className="text-4xl md:text-6xl font-black text-orange-500 tracking-tighter leading-none drop-shadow-[0_0_10px_rgba(255,165,0,0.8)]">INSIDER</div>
                      <div className="text-xs md:text-sm font-bold text-white/90 mt-2 tracking-[0.3em]">WORLD</div>
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 animate-fade-in leading-tight">
                <span className="block neon-text-blue mb-3 drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">Building Careers</span>
                <span className="block text-white">in Game Development & Esports</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 animate-fade-in leading-relaxed">
                Industry-relevant education designed to bridge the gap between aspiration and employability in the gaming ecosystem.
              </p>

              {/* Primary CTA - Google Form Button */}
              <div className="flex flex-col items-center gap-6 mb-16 animate-fade-in">
                <Button
                  onClick={handleGoogleFormClick}
                  size="lg"
                  className="group relative px-12 py-8 text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 hover:from-orange-600 hover:via-orange-700 hover:to-orange-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-orange-500/50 overflow-hidden border-2 border-orange-400/50"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Gift className="h-7 w-7 animate-pulse" />
                    Get Free Starter Series + 50% Discount
                    <ExternalLink className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></div>
                </Button>
                
                <div className="flex items-center gap-2 text-orange-500/90 text-sm animate-pulse">
                  <Sparkles className="h-4 w-4" />
                  <span>Exclusive offer for Cuephoria community</span>
                </div>
              </div>

              {/* Animated scroll indicator */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex-col items-center hidden md:flex animate-bounce-slow">
                <div className="w-6 h-10 border-2 border-orange-500/70 rounded-full flex justify-center p-1">
                  <div className="w-1 h-3 bg-orange-500 rounded-full"></div>
                </div>
                <span className="text-orange-500/70 text-sm mt-2">Scroll to Explore</span>
              </div>
            </div>
          </div>
        </section>

        {/* About the Initiative - Enhanced */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,165,0,0.15)_0,rgba(15,25,40,0)_70%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="glass-card rounded-3xl p-10 md:p-16 border-2 border-orange-500/40 bg-gradient-to-br from-orange-500/10 via-transparent to-neon-blue/10 relative overflow-hidden">
                {/* Animated border glow */}
                <div className="absolute inset-0 border-2 border-orange-500/30 rounded-3xl animate-pulse-neon pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-orange-500/20 rounded-2xl border border-orange-500/50">
                      <Target className="h-10 w-10 text-orange-500 animate-pulse-neon" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">About the Initiative</h2>
                  </div>
                  
                  <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                    The gaming and esports industry demands more than passion — it requires <span className="text-orange-500 font-semibold">skills, clarity, and ecosystem awareness</span>.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="flex items-start gap-4 p-6 bg-gaming-darker/60 rounded-2xl border-2 border-orange-500/30 hover:border-orange-500/60 transition-all group hover:scale-105">
                      <div className="p-3 bg-orange-500/20 rounded-xl group-hover:bg-orange-500/30 transition-all">
                        <Gamepad2 className="h-8 w-8 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">Game Insider World</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Delivers industry-designed programs built around real roles and workflows, ensuring practical, applicable learning.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-6 bg-gaming-darker/60 rounded-2xl border-2 border-neon-blue/30 hover:border-neon-blue/60 transition-all group hover:scale-105">
                      <div className="p-3 bg-neon-blue/20 rounded-xl group-hover:bg-neon-blue/30 transition-all">
                        <Rocket className="h-8 w-8 text-neon-blue" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">Cuephoria</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Extends access to these programs for its community, ensuring learners are guided toward credible and structured education.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-orange-500/20 to-neon-blue/20 rounded-2xl border border-orange-500/30">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      This approach allows gaming aspirants to <span className="text-orange-500 font-semibold">learn with clarity</span>, build relevant skills, and understand <span className="text-neon-blue font-semibold">real career pathways</span> within the industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For - Enhanced */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="neon-text-pink">Who This Is For</span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                No prior industry experience required — just <span className="text-orange-500 font-semibold">commitment</span> and <span className="text-neon-blue font-semibold">curiosity</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                { 
                  icon: GraduationCap, 
                  title: 'Students', 
                  desc: 'Exploring careers in gaming or esports', 
                  bgColor: 'bg-orange-500/20', 
                  iconColor: 'text-orange-500', 
                  borderColor: 'border-orange-500/30 hover:border-orange-500/70',
                  gradient: 'from-orange-500/10 to-orange-600/5'
                },
                { 
                  icon: Code, 
                  title: 'Game Developers', 
                  desc: 'Aspiring developers and designers', 
                  bgColor: 'bg-neon-blue/20', 
                  iconColor: 'text-neon-blue', 
                  borderColor: 'border-neon-blue/30 hover:border-neon-blue/70',
                  gradient: 'from-neon-blue/10 to-cyan-600/5'
                },
                { 
                  icon: Trophy, 
                  title: 'Esports Enthusiasts', 
                  desc: 'Looking for professional roles', 
                  bgColor: 'bg-neon-pink/20', 
                  iconColor: 'text-neon-pink', 
                  borderColor: 'border-neon-pink/30 hover:border-neon-pink/70',
                  gradient: 'from-neon-pink/10 to-pink-600/5'
                },
                { 
                  icon: Briefcase, 
                  title: 'Creators & Managers', 
                  desc: 'Wanting to enter the esports ecosystem', 
                  bgColor: 'bg-purple-500/20', 
                  iconColor: 'text-purple-400', 
                  borderColor: 'border-purple-500/30 hover:border-purple-500/70',
                  gradient: 'from-purple-500/10 to-purple-600/5'
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`feature-card glass-card rounded-2xl p-8 border-2 ${item.borderColor} transition-all hover:scale-110 group relative overflow-hidden bg-gradient-to-br ${item.gradient}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className={`p-5 rounded-xl ${item.bgColor} mb-6 inline-block group-hover:scale-110 transition-transform`}>
                    <item.icon className={`h-10 w-10 ${item.iconColor} animate-pulse-neon`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Game Insider World - Enhanced */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,165,0,0.15)_0,rgba(15,25,40,0)_70%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="glass-card rounded-3xl p-10 md:p-16 border-2 border-orange-500/40 bg-gradient-to-br from-orange-500/10 via-transparent to-neon-blue/10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-orange-500/20 rounded-2xl border border-orange-500/50">
                    <BookOpen className="h-10 w-10 text-orange-500 animate-pulse-neon" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white">About Game Insider World</h2>
                </div>
                
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  Game Insider World is a <span className="text-orange-500 font-semibold">career-focused learning platform</span> built to bridge the gap between aspiration and employability in the Game Development and Esports industry.
                </p>
                
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  Founded with a clear mission — to make gaming careers <span className="text-neon-blue font-semibold">accessible, structured, and industry-relevant</span> — Game Insider goes beyond generic courses to deliver practical, mentor-led programs aligned with real-world industry needs.
                </p>

                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                    <Star className="h-8 w-8 text-orange-500" />
                    What Game Insider Does Differently
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { icon: Layers, text: 'Industry-aligned learning paths' },
                      { icon: Target, text: 'Role-based career programs, not hobby-driven content' },
                      { icon: Users, text: 'Mentorship from working professionals' },
                      { icon: Briefcase, text: 'Practical exposure to real industry workflows' },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-6 bg-gaming-darker/60 rounded-xl border-2 border-orange-500/20 hover:border-orange-500/50 transition-all group hover:scale-105"
                      >
                        <div className="p-3 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-all">
                          <item.icon className="h-6 w-6 text-orange-500" />
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-r from-orange-500/20 via-neon-blue/20 to-orange-500/20 rounded-2xl border-2 border-orange-500/40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <Lightbulb className="h-7 w-7 text-orange-500 animate-pulse" />
                      Why This Matters
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      As gaming and esports continue to grow globally, the industry needs <span className="text-orange-500 font-semibold">trained, informed, and job-ready professionals</span>. Game Insider exists to reduce entry barriers, provide clarity in a fragmented ecosystem, and enable learners to move from <span className="text-neon-blue font-semibold">interest to industry</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Benefits Section - New */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="neon-text-blue">Program Benefits</span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                What you'll gain from the Game Insider World programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: TrendingUp, title: 'Career Clarity', desc: 'Understand real career pathways and industry roles', bgColor: 'bg-orange-500/20', iconColor: 'text-orange-500', borderColor: 'border-orange-500/30 hover:border-orange-500/70' },
                { icon: Award, title: 'Industry Skills', desc: 'Learn practical skills aligned with job requirements', bgColor: 'bg-neon-blue/20', iconColor: 'text-neon-blue', borderColor: 'border-neon-blue/30 hover:border-neon-blue/70' },
                { icon: Shield, title: 'Professional Network', desc: 'Connect with mentors and industry professionals', bgColor: 'bg-neon-pink/20', iconColor: 'text-neon-pink', borderColor: 'border-neon-pink/30 hover:border-neon-pink/70' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`glass-card rounded-2xl p-8 border-2 ${item.borderColor} transition-all hover:scale-105 group bg-gradient-to-br from-orange-500/10 to-transparent`}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className={`p-5 rounded-xl ${item.bgColor} mb-6 inline-block group-hover:scale-110 transition-transform`}>
                    <item.icon className={`h-10 w-10 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exclusive Offer & Coupon Section - Enhanced */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="glass-card rounded-3xl p-10 md:p-16 border-2 border-orange-500/50 bg-gradient-to-br from-orange-500/15 via-neon-blue/10 to-orange-500/15 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-neon-blue/10 animate-shimmer"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse-neon"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-neon" style={{ animationDelay: '1s' }}></div>
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-orange-500/30 rounded-full border-2 border-orange-500/50 mb-8">
                    <Zap className="h-6 w-6 text-orange-500 animate-pulse" />
                    <span className="text-orange-500 font-bold text-lg">EXCLUSIVE FOR CUEPHORIA COMMUNITY</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Free Starter Series
                  </h2>
                  
                  <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Game Insider World offers a <span className="text-orange-500 font-semibold">free Starter Series</span> in Game Development and Esports, curated specifically for the Cuephoria community.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
                    {[
                      'Introduce core industry concepts',
                      'Provide clarity on career paths',
                      'Help learners understand where to begin',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-gaming-darker/60 rounded-xl border border-orange-500/30">
                        <CheckCircle2 className="h-6 w-6 text-orange-500 flex-shrink-0" />
                        <p className="text-gray-300 text-left">{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Primary CTA Button */}
                  <div className="mb-12">
                    <Button
                      onClick={handleGoogleFormClick}
                      size="lg"
                      className="group relative px-16 py-10 text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 hover:from-orange-600 hover:via-orange-700 hover:to-orange-600 text-white rounded-3xl transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-orange-500/50 overflow-hidden border-3 border-orange-400/50"
                    >
                      <span className="relative z-10 flex items-center gap-4">
                        <PlayCircle className="h-8 w-8 animate-pulse" />
                        Access Free Starter Series
                        <ExternalLink className="h-7 w-7 group-hover:translate-x-2 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></div>
                    </Button>
                    <p className="text-gray-400 mt-4 text-sm">
                      Fill the form to unlock your exclusive 50% discount code below
                    </p>
                  </div>

                  {/* Coupon Code Section */}
                  {couponRevealed && (
                    <div className="mt-12 animate-fade-in">
                      <div className="glass-card rounded-2xl p-10 border-2 border-orange-500 bg-gradient-to-r from-orange-500/25 to-neon-blue/25 relative overflow-hidden">
                        {/* Animated background effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-neon-blue/10 animate-shimmer"></div>
                        
                        {/* Confetti effect */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          {Array.from({ length: 50 }).map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-3 h-3 rounded-full animate-float"
                              style={{
                                left: `${(i * 2) % 100}%`,
                                top: `${(i * 2) % 100}%`,
                                backgroundColor: i % 3 === 0 ? 'rgba(255, 165, 0, 0.7)' : i % 3 === 1 ? 'rgba(0, 255, 255, 0.7)' : 'rgba(255, 45, 239, 0.7)',
                                animationDelay: `${i * 0.08}s`,
                                animationDuration: `${2 + (i % 3)}s`,
                              }}
                            ></div>
                          ))}
                        </div>
                        
                        <div className="relative z-10">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/40 rounded-full border border-orange-500/70 mb-6">
                            <CheckCircle2 className="h-5 w-5 text-orange-500" />
                            <span className="text-orange-500 font-bold text-lg">YOUR EXCLUSIVE DISCOUNT</span>
                          </div>
                          
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            50% OFF Game Services
                          </h3>
                          
                          <div className="bg-gaming-darker/90 rounded-2xl p-8 mb-8 border-2 border-orange-500/50">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                              <code className="text-4xl md:text-5xl font-mono font-black text-white bg-gaming-dark px-10 py-5 rounded-xl border-2 border-neon-blue/50 tracking-wider drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">
                                {couponCode}
                              </code>
                              <Button
                                onClick={copyCouponCode}
                                className="bg-neon-blue hover:bg-neon-blue/80 text-white px-8 py-6 text-lg"
                                size="lg"
                              >
                                <Copy className="h-6 w-6 mr-2" />
                                Copy Code
                              </Button>
                            </div>
                            <p className="text-gray-400 text-center">
                              Valid for all game services at Cuephoria
                            </p>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                              href="/book"
                              className="inline-flex items-center justify-center px-8 py-4 bg-neon-pink text-white rounded-xl hover:bg-neon-pink/80 transition-all font-bold text-lg transform hover:scale-105"
                            >
                              Book Now with Discount
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {!couponRevealed && (
                    <div className="mt-8 p-6 bg-gaming-darker/60 rounded-xl border-2 border-orange-500/30">
                      <p className="text-gray-300 text-lg">
                        Click the button above to access the form and unlock your <span className="text-orange-500 font-bold">50% discount code</span>
                      </p>
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
