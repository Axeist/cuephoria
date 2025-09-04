import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Gamepad2, Target, Users, Coffee, Heart, Trophy, Sparkles, Eye, MessageCircle, GraduationCap, Zap, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import SEOMetadata from '../components/SEOMetadata';
import Footer from '../components/Footer';

// Dynamic view count system
const useViewCounts = () => {
  const [viewCounts, setViewCounts] = useState({});
  
  const baseViews = {
    'why-we-started-cuephoria': 4112,
    'ultimate-student-hangout': 1713,
    'nervous-beginner-to-pool-pro': 3587,
    'late-night-gaming-sessions': 4294,
    'parents-ask-whats-special': 3250,
    'art-of-perfect-break': 1026,
    'nit50-student-discount': 2847,
    'nit99-happy-hours': 3156,
    'nit-trichy-gaming-culture': 1924,
    'student-stress-relief-gaming': 2341
  };

  useEffect(() => {
    const storedViews = localStorage.getItem('cuephoria-blog-views');
    const lastUpdate = localStorage.getItem('cuephoria-blog-last-update');
    
    if (storedViews && lastUpdate) {
      const views = JSON.parse(storedViews);
      const timeDiff = Date.now() - parseInt(lastUpdate);
      
      if (timeDiff > 300000) { // 5 minutes
        const updatedViews = {};
        Object.keys(baseViews).forEach(postId => {
          const increase = Math.floor(Math.random() * 3) + 1;
          updatedViews[postId] = (views[postId] || baseViews[postId]) + increase;
        });
        setViewCounts(updatedViews);
        localStorage.setItem('cuephoria-blog-views', JSON.stringify(updatedViews));
        localStorage.setItem('cuephoria-blog-last-update', Date.now().toString());
      } else {
        setViewCounts(views);
      }
    } else {
      setViewCounts(baseViews);
      localStorage.setItem('cuephoria-blog-views', JSON.stringify(baseViews));
      localStorage.setItem('cuephoria-blog-last-update', Date.now().toString());
    }
  }, []);

  return viewCounts;
};

const blogPosts = [
  {
    id: 'why-we-started-cuephoria',
    title: 'Why We Started Cuephoria: A Story from the Heart of Trichy',
    excerpt: 'The dream that started with a broken controller and became Trichy\'s premier gaming destination.',
    date: '2025-08-15',
    readTime: '5 min read',
    category: 'Our Story',
    image: 'https://i.postimg.cc/HxCs9LJ7/Cuephoria-begining.png',
    icon: Heart,
    featured: true,
    gradient: 'from-pink-500 via-red-500 to-yellow-500',
    comments: [
      { name: 'Arjun Kumar', comment: 'Bro, this place is actually amazing! Went there last weekend.' },
      { name: 'Sneha Patel', comment: 'Finally someone opened a proper gaming lounge in Trichy!' },
      { name: 'Vikram Singh', comment: 'Love the story behind it. Can relate to the gaming struggles.' },
      { name: 'Priya Menon', comment: 'The passion really shows. Keep it up guys!' },
      { name: 'Rahul Krishnan', comment: 'Been waiting for something like this in Trichy for years!' },
      { name: 'Meera Iyer', comment: 'The dedication to building a gaming community is inspiring.' },
      { name: 'Anand Sharma', comment: 'Great to see local entrepreneurs supporting gaming culture.' }
    ]
  },
  {
    id: 'ultimate-student-hangout',
    title: 'The Ultimate Student Hangout: Why Cuephoria is Perfect for College Life',
    excerpt: 'College life is supposed to be the best time of your life - let\'s make it affordable and fun.',
    date: '2025-08-01',
    readTime: '4 min read',
    category: 'Student Life',
    image: 'https://i.postimg.cc/zfTRr6KK/Ultimate-Student-Hangout.png',
    icon: Users,
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    comments: [
      { name: 'Divya Reddy', comment: 'Perfect after those long lectures! And it fits my budget too.' },
      { name: 'Suresh Balan', comment: 'Gaming + pool = dream combo. What more do you need?' },
      { name: 'Meera Shah', comment: 'The snacks are actually good too. Not overpriced like other places.' },
      { name: 'Kiran Patel', comment: 'My go-to spot for unwinding after stressful exams.' },
      { name: 'Aishwarya M', comment: 'Love how student-friendly the pricing is here.' },
      { name: 'Ravi Kumar', comment: 'Finally a place that understands college students\' needs!' }
    ]
  },
  {
    id: 'nervous-beginner-to-pool-pro',
    title: 'From Nervous Beginner to Pool Pro: Real Stories from Our Tables',
    excerpt: 'Watch someone play pool for the very first time and witness amazing transformations.',
    date: '2025-07-20',
    readTime: '6 min read',
    category: 'Player Stories',
    image: 'https://i.postimg.cc/8zS7bwqC/generated-image-1.png',
    icon: Target,
    gradient: 'from-green-500 via-teal-500 to-blue-500',
    comments: [
      { name: 'Karthik Venkat', comment: 'Dude I was exactly like this when I started. Now I can pot some decent shots.' },
      { name: 'Anjali Joshi', comment: 'The way you describe the first game is so accurate lol' },
      { name: 'Ramesh Dutta', comment: 'Practice makes perfect. This place definitely helped me improve.' },
      { name: 'Priyanka Nair', comment: 'Started as a complete noob, now I\'m teaching my friends!' },
      { name: 'Suraj Singh', comment: 'The patient staff really helped me learn the basics.' },
      { name: 'Kavya Menon', comment: 'From missing every shot to winning games - what a journey!' }
    ]
  },
  {
    id: 'late-night-gaming-sessions',
    title: 'Late Night Gaming Sessions: Why 11 PM is Just the Beginning',
    excerpt: 'When Trichy settles down, our gaming community comes alive. Discover the magic of evening sessions.',
    date: '2025-07-05',
    readTime: '4 min read',
    category: 'Gaming Culture',
    image: 'https://i.postimg.cc/k5MD0GM3/generated-image-2.png',
    icon: Gamepad2,
    gradient: 'from-purple-500 via-indigo-500 to-blue-500',
    comments: [
      { name: 'Pooja Nair', comment: 'Late night gaming hits different! The vibe is just unmatched.' },
      { name: 'Sanjay Rao', comment: 'Been coming here past midnight for weeks. Never gets old.' },
      { name: 'Deepa S', comment: 'Perfect way to unwind after work. Much needed stress buster.' },
      { name: 'Arjun Reddy', comment: 'Night owl gamers unite! This is our sanctuary.' },
      { name: 'Nisha Gupta', comment: 'The late night crowd here is so chill and friendly.' },
      { name: 'Vikram Das', comment: 'Nothing beats post-midnight FIFA matches with the crew.' }
    ]
  },
  {
    id: 'parents-ask-whats-special',
    title: 'When Your Parents Ask \'What\'s So Special About This Gaming Place?\'',
    excerpt: 'The conversation every gaming enthusiast knows - and how to explain why Cuephoria matters.',
    date: '2025-06-20',
    readTime: '5 min read',
    category: 'Family & Gaming',
    image: 'https://i.postimg.cc/xjNqDWQC/generated-image-3.png',
    icon: Coffee,
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    comments: [
      { name: 'Rahul Iyer', comment: 'Haha this is literally every conversation with my parents about gaming' },
      { name: 'Nisha Mukherjee', comment: 'Showed this to my mom. She finally gets why I spend time here.' },
      { name: 'Rakesh K', comment: 'The generation gap is real. But places like this help bridge it.' },
      { name: 'Shreya Patel', comment: 'Finally have the right words to explain gaming culture to family!' },
      { name: 'Arun Sharma', comment: 'My dad actually visited after reading this. He was impressed!' },
      { name: 'Priya Sundaram', comment: 'This article helped my parents understand my gaming passion.' }
    ]
  },
  {
    id: 'art-of-perfect-break',
    title: 'The Art of the Perfect Break: What We\'ve Learned from Watching Thousands of Games',
    excerpt: 'Every pool game begins with the break. After thousands of games, here\'s what we\'ve learned.',
    date: '2025-06-05',
    readTime: '7 min read',
    category: 'Pool Mastery',
    image: 'https://i.postimg.cc/ry5c9ccS/generated-image-4.png',
    icon: Trophy,
    gradient: 'from-yellow-500 via-orange-500 to-red-500',
    comments: [
      { name: 'Ganesh P', comment: 'The technique breakdown is really detailed. Gonna try this tonight.' },
      { name: 'Meena Sinha', comment: 'Finally someone explains the physics behind a good break shot!' },
      { name: 'Ramya T', comment: 'This helped me understand why my breaks sucked. Thanks!' },
      { name: 'Suresh Kumar', comment: 'Been playing for years but learned new techniques from this.' },
      { name: 'Kavitha M', comment: 'The step-by-step approach is perfect for beginners like me.' },
      { name: 'Ravi Shankar', comment: 'Applied these tips and my break game improved dramatically!' }
    ]
  },
  {
    id: 'nit50-student-discount',
    title: 'NIT50 Discount: 50% Off Pool Tables Exclusively for NIT Trichy Students',
    excerpt: 'Introducing our special NIT50 offer - 50% discount on all pool tables for NIT Trichy students with valid ID.',
    date: '2025-08-28',
    readTime: '4 min read',
    category: 'Student Discounts',
    image: 'https://images.unsplash.com/photo-1606889464198-fcb18894cf50?w=600&h=400&fit=crop',
    icon: GraduationCap,
    gradient: 'from-emerald-500 via-green-500 to-teal-500',
    comments: [
      { name: 'Aditya Sharma', comment: 'Finally! A discount that actually helps broke engineering students like us.' },
      { name: 'Kavitha M', comment: 'Used this offer yesterday, saved ₹300! Thanks Cuephoria.' },
      { name: 'Rohit Krishnan', comment: 'NIT students deserve this. Engineering is stressful enough!' },
      { name: 'Sneha Reddy', comment: 'This makes pool gaming actually affordable for students.' },
      { name: 'Arjun Patel', comment: 'Showed my student ID and the staff was super friendly about it.' },
      { name: 'Priya Nair', comment: 'Finally can play pool without worrying about the cost!' },
      { name: 'Vikram Singh', comment: 'NIT50 is a game-changer for us budget-conscious students.' }
    ]
  },
  {
    id: 'nit99-happy-hours',
    title: 'NIT99 Happy Hours: Play Pool for Just ₹99 from 11 AM to 3 PM',
    excerpt: 'Beat the afternoon blues! NIT students can enjoy pool for just ₹99 during our special happy hours.',
    date: '2025-08-25',
    readTime: '3 min read',
    category: 'Special Offers',
    image: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=600&h=400&fit=crop',
    icon: Zap,
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    comments: [
      { name: 'Priya Sundaram', comment: 'Perfect timing between classes! ₹99 is such a steal.' },
      { name: 'Vikram Das', comment: 'Been coming every Tuesday during lunch break. Love this deal!' },
      { name: 'Shreya Patel', comment: 'My friends and I pool money (pun intended) and play during happy hours.' },
      { name: 'Kiran Sharma', comment: 'Best way to spend those long afternoon breaks between lectures.' },
      { name: 'Anita Reddy', comment: '₹99 for premium gaming? This is unbelievable value!' },
      { name: 'Suresh Balan', comment: 'Happy hours have become my favorite part of the day.' }
    ]
  },
  {
    id: 'nit-trichy-gaming-culture',
    title: 'How Cuephoria is Shaping NIT Trichy\'s Gaming Culture',
    excerpt: 'From stressed engineering students to confident gamers - witness the transformation happening at NIT Trichy.',
    date: '2025-08-20',
    readTime: '6 min read',
    category: 'Campus Culture',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
    icon: Users,
    gradient: 'from-blue-600 via-purple-600 to-pink-600',
    comments: [
      { name: 'Ankit Gupta', comment: 'Gaming has become a legit stress buster for us NITians now.' },
      { name: 'Deepika Rao', comment: 'Never thought I\'d be good at pool until I started coming here regularly.' },
      { name: 'Suresh Kumar', comment: 'The gaming community at NIT has grown so much thanks to places like this.' },
      { name: 'Meera Shah', comment: 'From academic pressure to gaming passion - what a transformation!' },
      { name: 'Ravi Krishnan', comment: 'Cuephoria has become the unofficial NIT student hangout spot.' },
      { name: 'Kavya Menon', comment: 'The social aspect of gaming here helped me make so many friends.' }
    ]
  },
  {
    id: 'student-stress-relief-gaming',
    title: 'Gaming as Stress Relief: What NIT Students Are Discovering',
    excerpt: 'Research shows gaming helps with stress. NIT students are living proof of this phenomenon.',
    date: '2025-08-18',
    readTime: '5 min read',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
    icon: Heart,
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    comments: [
      { name: 'Ravi Shankar', comment: 'Pool really helps me clear my head after tough coding sessions.' },
      { name: 'Lakshmi Nair', comment: 'Better than scrolling social media during breaks, that\'s for sure!' },
      { name: 'Arjun Reddy', comment: 'My anxiety levels dropped after I started gaming regularly here.' },
      { name: 'Pooja Sharma', comment: 'Gaming therapy is real! This place proves it.' },
      { name: 'Karthik Venkat', comment: 'From exam stress to gaming joy - the transformation is real.' },
      { name: 'Nisha Gupta', comment: 'Who knew pool could be better than meditation for stress relief?' }
    ]
  }
];

const Blog = () => {
  const viewCounts = useViewCounts();
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  // Auto-rotate comments in featured post
  useEffect(() => {
    if (!featuredPost) return;
    
    const interval = setInterval(() => {
      setCurrentCommentIndex(prev => 
        prev >= featuredPost.comments.length - 2 ? 0 : prev + 1
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [featuredPost]);

  const formatViews = (postId) => {
    const views = viewCounts[postId] || 0;
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  const nextComment = () => {
    if (!featuredPost) return;
    setCurrentCommentIndex(prev => 
      prev >= featuredPost.comments.length - 2 ? 0 : prev + 1
    );
  };

  const prevComment = () => {
    if (!featuredPost) return;
    setCurrentCommentIndex(prev => 
      prev <= 0 ? featuredPost.comments.length - 2 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gaming-darker text-white overflow-hidden">
      <SEOMetadata
        title="Blog | Cuephoria Stories - Gaming & Pool Experiences in Trichy"
        description="Read authentic stories from Cuephoria - from our founding journey to customer experiences, gaming tips, and the vibrant community we've built in Trichy."
        keywords="Cuephoria blog, gaming stories Trichy, pool stories, student gaming experiences, gaming lounge blog, NIT Trichy gaming"
      />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <section className="relative py-12 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Logo Section */}
          <div className="text-center mb-16 md:mb-20">
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="absolute -inset-8 bg-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
                <img 
                  src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png" 
                  alt="Cuephoria Logo" 
                  className="h-32 md:h-40 w-auto hover:scale-105 transition-all duration-500 relative z-10"
                />
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-neon-pink/10 rounded-full border border-neon-pink/30">
              <Sparkles className="h-4 w-4 text-neon-pink animate-pulse" />
              <span className="text-neon-pink font-semibold text-sm">Fresh Stories from Trichy</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-neon-blue via-purple-400 to-neon-pink bg-clip-text text-transparent animate-pulse">
                Cuephoria Chronicles
              </span>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-pink/20 rounded-full blur-xl animate-bounce delay-500"></div>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Real stories from Trichy's premier gaming destination - our journey, our community, and the experiences that make us special since <span className="text-neon-blue font-bold">May 2025</span>.
            </p>
          </div>

          {/* Enhanced Featured Post */}
          {featuredPost && (
            <div className="mb-20">
              <Link to={`/blog/${featuredPost.id}`} className="block">
                <div className="relative bg-gaming-darker/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-neon-blue/30 shadow-2xl hover:shadow-neon-blue/40 transition-all duration-700 group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-pink via-purple-500 to-neon-blue opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-700"></div>
                  
                  <div className="relative bg-gaming-darker/90 backdrop-blur-xl rounded-3xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/2 p-4 sm:p-6 lg:p-12 relative">
                        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-neon-pink/20 to-purple-500/20 rounded-full flex items-center justify-center animate-pulse">
                          <featuredPost.icon className="h-8 w-8 text-neon-pink" />
                        </div>
                        
                        <div className="flex items-center gap-3 mb-6">
                          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-pink/20 to-purple-500/20 rounded-full">
                            <Trophy className="h-4 w-4 text-neon-pink animate-pulse" />
                            <span className="text-neon-pink font-bold text-sm uppercase tracking-wider">Featured Story</span>
                          </div>
                        </div>
                        
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                          {featuredPost.title}
                        </h2>
                        
                        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                        
                        {/* Mobile-Responsive Metadata */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-6 text-xs sm:text-sm text-gray-400">
                          <div className="flex items-center gap-2 min-w-0">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span className="truncate">{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-2 min-w-0">
                            <Clock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span className="whitespace-nowrap">{featuredPost.readTime}</span>
                          </div>
                          <div className="flex items-center gap-2 min-w-0">
                            <Eye className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span className="whitespace-nowrap">{formatViews(featuredPost.id)} views</span>
                          </div>
                          <div className="flex items-center gap-2 min-w-0">
                            <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span className="whitespace-nowrap">{featuredPost.comments.length} comments</span>
                          </div>
                        </div>
                        
                        {/* Comments Carousel */}
                        <div className="mb-6 sm:mb-8 p-4 bg-gaming-darker/50 rounded-lg border border-purple-500/20 relative">
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-xs text-gray-400">Latest Comments:</div>
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={(e) => {e.preventDefault(); prevComment();}}
                                className="p-1 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-colors"
                              >
                                <ChevronLeft className="h-3 w-3 text-purple-400" />
                              </button>
                              <button 
                                onClick={(e) => {e.preventDefault(); nextComment();}}
                                className="p-1 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-colors"
                              >
                                <ChevronRight className="h-3 w-3 text-purple-400" />
                              </button>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            {featuredPost.comments.slice(currentCommentIndex, currentCommentIndex + 2).map((comment, index) => (
                              <div key={index} className="text-xs sm:text-sm">
                                <span className="text-neon-blue font-semibold">{comment.name}</span>
                                <span className="text-gray-300 ml-2 break-words">"{comment.comment}"</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Comment indicators */}
                          <div className="flex justify-center mt-3 gap-1">
                            {Array.from({ length: Math.max(1, featuredPost.comments.length - 1) }).map((_, index) => (
                              <div 
                                key={index}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  index === currentCommentIndex ? 'bg-purple-400' : 'bg-purple-400/30'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-pink via-purple-500 to-neon-blue p-[2px] rounded-full group-hover:scale-105 transition-all duration-300">
                          <div className="bg-gaming-darker px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-3">
                            <span className="font-bold text-white text-sm sm:text-base">Read Full Story</span>
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-neon-pink group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:w-1/2 relative overflow-hidden min-h-[300px] lg:min-h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/30 to-neon-blue/30 z-10"></div>
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gaming-darker/80 to-transparent z-20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Enhanced Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {regularPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="block"
              >
                <article className="bg-gaming-darker/20 backdrop-blur-xl rounded-2xl overflow-hidden border border-gaming-accent/30 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 group relative cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-2xl`}></div>
                  
                  <div className="relative">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gaming-darker/60 to-transparent"></div>
                      
                      <div className="absolute top-4 left-4 flex items-center gap-2 bg-gaming-darker/80 backdrop-blur-sm px-4 py-2 rounded-full border border-neon-blue/30">
                        <post.icon className="h-4 w-4 text-neon-blue animate-pulse" />
                        <span className="text-xs font-bold text-neon-blue uppercase tracking-wider">{post.category}</span>
                      </div>
                      
                      <div className="absolute top-4 right-4 bg-gaming-darker/80 backdrop-blur-sm px-3 py-1 rounded-full">
                        <div className="flex items-center gap-3 text-xs text-gray-300">
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            <span>{formatViews(post.id)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-3 w-3" />
                            <span>{post.comments.length}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 lg:p-8">
                      <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white line-clamp-2 leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="mb-6 p-3 bg-gaming-darker/30 rounded-lg border border-purple-500/10">
                        <div className="text-xs text-gray-400 mb-2">Recent comment:</div>
                        <div className="text-sm">
                          <span className="text-neon-blue font-semibold">{post.comments[0]?.name}</span>
                          <span className="text-gray-300 ml-2 break-words">"{post.comments[0]?.comment}"</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="text-neon-blue hover:text-neon-pink font-bold text-sm flex items-center gap-2 transition-all duration-300 group/link">
                          Read More
                          <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-20">
            <div className="relative bg-gaming-darker/30 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-neon-pink/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 via-purple-500/10 to-neon-blue/10 animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-neon-blue/20 rounded-full">
                  <Sparkles className="h-4 w-4 text-neon-blue animate-pulse" />
                  <span className="text-neon-blue font-semibold text-sm">Join Our Community</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
                  Be Part of Our Story
                </h3>
                
                <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                  Every visit to Cuephoria adds a new chapter to our community story. Come create your own gaming memories in the heart of Trichy.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/book"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-blue via-purple-500 to-neon-pink p-[2px] rounded-full hover:scale-105 transition-all duration-300"
                  >
                    <div className="bg-gaming-darker px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-3">
                      <Gamepad2 className="h-5 w-5 text-neon-blue" />
                      <span className="font-bold text-white">Book Your Session</span>
                      <ArrowRight className="h-4 w-4 text-neon-pink" />
                    </div>
                  </Link>
                  
                  <Link
                    to="https://maps.app.goo.gl/vUNCsMkiMEgHfbVPA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gaming-darker/50 backdrop-blur-sm border border-neon-blue/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:border-neon-blue/60"
                  >
                    <Coffee className="h-5 w-5 text-neon-blue" />
                    <span className="text-white">Visit Our Lounge</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
