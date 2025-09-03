import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Gamepad2, Target, Users, Coffee, Heart, Trophy, Sparkles } from 'lucide-react';
import SEOMetadata from '../components/SEOMetadata';
import Footer from '../components/Footer';

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
    gradient: 'from-pink-500 via-red-500 to-yellow-500'
  },
  {
    id: 'ultimate-student-hangout',
    title: 'The Ultimate Student Hangout: Why Cuephoria is Perfect for College Life',
    excerpt: 'College life is supposed to be the best time of your life - let\'s make it affordable and fun.',
    date: '2025-08-01',
    readTime: '4 min read',
    category: 'Student Life',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    icon: Users,
    gradient: 'from-blue-500 via-purple-500 to-pink-500'
  },
  {
    id: 'nervous-beginner-to-pool-pro',
    title: 'From Nervous Beginner to Pool Pro: Real Stories from Our Tables',
    excerpt: 'Watch someone play pool for the very first time and witness amazing transformations.',
    date: '2025-07-20',
    readTime: '6 min read',
    category: 'Player Stories',
    image: 'https://images.unsplash.com/photo-1594736797933-d0871e6f0fc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80',
    icon: Target,
    gradient: 'from-green-500 via-teal-500 to-blue-500'
  },
  {
    id: 'late-night-gaming-sessions',
    title: 'Late Night Gaming Sessions: Why 11 PM is Just the Beginning',
    excerpt: 'When Trichy settles down, our gaming community comes alive. Discover the magic of evening sessions.',
    date: '2025-07-05',
    readTime: '4 min read',
    category: 'Gaming Culture',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: Gamepad2,
    gradient: 'from-purple-500 via-indigo-500 to-blue-500'
  },
  {
    id: 'parents-ask-whats-special',
    title: 'When Your Parents Ask \'What\'s So Special About This Gaming Place?\'',
    excerpt: 'The conversation every gaming enthusiast knows - and how to explain why Cuephoria matters.',
    date: '2025-06-20',
    readTime: '5 min read',
    category: 'Family & Gaming',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: Coffee,
    gradient: 'from-orange-500 via-red-500 to-pink-500'
  },
  {
    id: 'art-of-perfect-break',
    title: 'The Art of the Perfect Break: What We\'ve Learned from Watching Thousands of Games',
    excerpt: 'Every pool game begins with the break. After thousands of games, here\'s what we\'ve learned.',
    date: '2025-06-05',
    readTime: '7 min read',
    category: 'Pool Mastery',
    image: 'https://images.unsplash.com/photo-1604167719670-2a7703469f8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: Trophy,
    gradient: 'from-yellow-500 via-orange-500 to-red-500'
  }
];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gaming-darker text-white overflow-hidden">
      <SEOMetadata
        title="Blog | Cuephoria Stories - Gaming & Pool Experiences in Trichy"
        description="Read authentic stories from Cuephoria - from our founding journey to customer experiences, gaming tips, and the vibrant community we've built in Trichy."
        keywords="Cuephoria blog, gaming stories Trichy, pool stories, student gaming experiences, gaming lounge blog"
      />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <section className="relative py-12 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
         {/* Clean Logo Only - NO CONTAINER OR BORDERS */}
<div className="text-center mb-16 md:mb-20">
  <div className="flex justify-center mb-12">
    <div className="relative">
      {/* Simple light purple glow */}
      <div className="absolute -inset-8 bg-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
      
      {/* Just the logo - no container, no padding, no borders */}
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
                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-pink via-purple-500 to-neon-blue opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-700"></div>
                  
                  <div className="relative bg-gaming-darker/90 backdrop-blur-xl rounded-3xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/2 p-8 lg:p-12 relative">
                        {/* Floating Icons */}
                        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-neon-pink/20 to-purple-500/20 rounded-full flex items-center justify-center animate-pulse">
                          <featuredPost.icon className="h-8 w-8 text-neon-pink" />
                        </div>
                        
                        <div className="flex items-center gap-3 mb-6">
                          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-pink/20 to-purple-500/20 rounded-full">
                            <Trophy className="h-4 w-4 text-neon-pink animate-pulse" />
                            <span className="text-neon-pink font-bold text-sm uppercase tracking-wider">Featured Story</span>
                          </div>
                        </div>
                        
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                          {featuredPost.title}
                        </h2>
                        
                        <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-8 mb-10 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-pink via-purple-500 to-neon-blue p-[2px] rounded-full group-hover:scale-105 transition-all duration-300">
                          <div className="bg-gaming-darker px-8 py-4 rounded-full flex items-center gap-3">
                            <span className="font-bold text-white">Read Full Story</span>
                            <ArrowRight className="h-5 w-5 text-neon-pink group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:w-1/2 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/30 to-neon-blue/30 z-10"></div>
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-full min-h-[400px] object-cover"
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
                  {/* Gradient Border Animation */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-2xl`}></div>
                  
                  <div className="relative">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gaming-darker/60 to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 bg-gaming-darker/80 backdrop-blur-sm px-4 py-2 rounded-full border border-neon-blue/30">
                        <post.icon className="h-4 w-4 text-neon-blue animate-pulse" />
                        <span className="text-xs font-bold text-neon-blue uppercase tracking-wider">{post.category}</span>
                      </div>
                      
                      {/* Reading Time */}
                      <div className="absolute top-4 right-4 bg-gaming-darker/80 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-xs text-gray-300">{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="p-6 lg:p-8">
                      <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white line-clamp-2 leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
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
            <div className="relative bg-gaming-darker/30 backdrop-blur-xl rounded-3xl p-12 border border-neon-pink/30 overflow-hidden">
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 via-purple-500/10 to-neon-blue/10 animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-neon-blue/20 rounded-full">
                  <Sparkles className="h-4 w-4 text-neon-blue animate-pulse" />
                  <span className="text-neon-blue font-semibold text-sm">Join Our Community</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Be Part of Our Story
                </h3>
                
                <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                  Every visit to Cuephoria adds a new chapter to our community story. Come create your own gaming memories in the heart of Trichy.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/book"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-blue via-purple-500 to-neon-pink p-[2px] rounded-full hover:scale-105 transition-all duration-300"
                  >
                    <div className="bg-gaming-darker px-8 py-4 rounded-full flex items-center gap-3">
                      <Gamepad2 className="h-5 w-5 text-neon-blue" />
                      <span className="font-bold text-white">Book Your Session</span>
                      <ArrowRight className="h-4 w-4 text-neon-pink" />
                    </div>
                  </Link>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-gaming-darker/50 backdrop-blur-sm border border-neon-blue/30 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:border-neon-blue/60"
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
