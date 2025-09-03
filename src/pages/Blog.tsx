import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Gamepad2, Target, Users, Coffee, Heart, Trophy } from 'lucide-react';
import SEOMetadata from '../components/SEOMetadata';
import Footer from '../components/Footer';

const blogPosts = [
  {
    id: 'why-we-started-cuephoria',
    title: 'Why We Started Cuephoria: A Story from the Heart of Trichy',
    excerpt: 'The dream that started with a broken controller and became Trichy\'s premier gaming destination.',
    date: '2024-12-15',
    readTime: '5 min read',
    category: 'Our Story',
    image: '/lovable-uploads/bf64c942-20de-45f0-a655-188a21952fc4.png',
    icon: Heart,
    featured: true
  },
  {
    id: 'ultimate-student-hangout',
    title: 'The Ultimate Student Hangout: Why Cuephoria is Perfect for College Life',
    excerpt: 'College life is supposed to be the best time of your life - let\'s make it affordable and fun.',
    date: '2024-12-10',
    readTime: '4 min read',
    category: 'Student Life',
    image: '/lovable-uploads/bf64c942-20de-45f0-a655-188a21952fc4.png',
    icon: Users
  },
  {
    id: 'nervous-beginner-to-pool-pro',
    title: 'From Nervous Beginner to Pool Pro: Real Stories from Our Tables',
    excerpt: 'Watch someone play pool for the very first time and witness amazing transformations.',
    date: '2024-12-05',
    readTime: '6 min read',
    category: 'Player Stories',
    image: '/lovable-uploads/bf64c942-20de-45f0-a655-188a21952fc4.png',
    icon: Target
  },
  {
    id: 'late-night-gaming-sessions',
    title: 'Late Night Gaming Sessions: Why 11 PM is Just the Beginning',
    excerpt: 'When Trichy settles down, our gaming community comes alive. Discover the magic of evening sessions.',
    date: '2024-11-30',
    readTime: '4 min read',
    category: 'Gaming Culture',
    image: '/lovable-uploads/bf64c942-20de-45f0-a655-188a21952fc4.png',
    icon: Gamepad2
  },
  {
    id: 'parents-ask-whats-special',
    title: 'When Your Parents Ask \'What\'s So Special About This Gaming Place?\'',
    excerpt: 'The conversation every gaming enthusiast knows - and how to explain why Cuephoria matters.',
    date: '2024-11-25',
    readTime: '5 min read',
    category: 'Family & Gaming',
    image: '/lovable-uploads/bf64c942-20de-45f0-a655-188a21952fc4.png',
    icon: Coffee
  },
  {
    id: 'art-of-perfect-break',
    title: 'The Art of the Perfect Break: What We\'ve Learned from Watching Thousands of Games',
    excerpt: 'Every pool game begins with the break. After thousands of games, here\'s what we\'ve learned.',
    date: '2024-11-20',
    readTime: '7 min read',
    category: 'Pool Mastery',
    image: '/lovable-uploads/bf64c942-20de-45f0-a655-188a21952fc4.png',
    icon: Trophy
  }
];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gaming-darker text-white">
      <SEOMetadata
        title="Blog | Cuephoria Stories - Gaming & Pool Experiences in Trichy"
        description="Read authentic stories from Cuephoria - from our founding journey to customer experiences, gaming tips, and the vibrant community we've built in Trichy."
        keywords="Cuephoria blog, gaming stories Trichy, pool stories, student gaming experiences, gaming lounge blog"
      />
      
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gaming-darker">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,78,221,0.1)_0,rgba(15,25,40,0.5)_100%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-blue via-purple-400 to-neon-pink bg-clip-text text-transparent">
                Cuephoria Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real stories from Trichy's premier gaming destination - our journey, our community, and the experiences that make us special.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <div className="bg-gaming-darker/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-neon-blue/30 shadow-2xl hover:shadow-neon-blue/20 transition-all duration-500">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center gap-2 mb-4">
                      <featuredPost.icon className="h-5 w-5 text-neon-pink" />
                      <span className="text-neon-pink font-semibold text-sm uppercase tracking-wider">Featured Story</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white hover:text-neon-blue transition-colors duration-300">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 mb-8 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center gap-2 bg-neon-pink/90 hover:bg-neon-pink text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Read Full Story
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="lg:w-1/2 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-neon-blue/20"></div>
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-gaming-darker/30 backdrop-blur-lg rounded-xl overflow-hidden border border-gaming-accent/30 shadow-lg hover:shadow-neon-blue/20 transition-all duration-500 hover:scale-105 group"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gaming-darker/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-gaming-darker/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <post.icon className="h-4 w-4 text-neon-blue" />
                    <span className="text-xs font-semibold text-neon-blue">{post.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-blue transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-neon-blue hover:text-neon-pink font-semibold text-sm flex items-center gap-1 transition-colors duration-300"
                    >
                      Read More
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gaming-darker/50 backdrop-blur-lg rounded-2xl p-8 border border-neon-pink/30">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Be Part of Our Story
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Every visit to Cuephoria adds a new chapter to our community story. Come create your own gaming memories in Trichy.
              </p>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 bg-neon-blue/90 hover:bg-neon-blue text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Book Your Session
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
