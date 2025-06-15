
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, PenSquare, Star } from "lucide-react";

const categories = [
  { slug: "pool-tips", label: "8-Ball Pool Tips" },
  { slug: "ps5-reviews", label: "PS5 Game Reviews" },
  { slug: "cuephoria-happenings", label: "Cuephoria Happenings" },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gaming-dark text-white">
      <section className="container mx-auto pt-28 pb-8 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 neon-text-pink flex items-center gap-3">
          <PenSquare className="text-neon-blue" size={40}/> Cuephoria Blog
        </h1>
        <p className="text-gray-300 mb-8 max-w-2xl">
          Strategies, reviews, news & more – discover top gaming content created by our team and YOU!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {categories.map(cat => (
            <Link
              to={`/blog/category/${cat.slug}`}
              key={cat.slug}
              className="glass-card rounded-lg p-6 flex flex-col gap-2 hover:scale-105 transition-transform border border-neon-blue/20"
            >
              <span className="text-xl font-medium">{cat.label}</span>
              <span className="text-xs text-neon-blue">View Posts</span>
            </Link>
          ))}
          <Link
            to="/blog/calendar"
            className="glass-card rounded-lg p-6 flex flex-col gap-2 hover:scale-105 border border-neon-pink/20"
          >
            <Calendar className="text-neon-pink" />
            <span className="text-xl font-medium">Gaming Calendar</span>
            <span className="text-xs text-neon-pink">Upcoming events & tournaments</span>
          </Link>
        </div>

        <div className="mb-6">
          <h2 className="font-bold text-neon-blue text-lg mb-2 flex items-center gap-2">
            <Star className="text-neon-pink" size={20}/> Featured / Latest Posts
          </h2>
          <div className="flex flex-col gap-2">
            <Link to="/blog/post/1" className="hover:underline text-base">How to Master the Break Shot in 8-Ball Pool</Link>
            <Link to="/blog/post/2" className="hover:underline text-base">PS5 Review: FIFA 24 Tournament at Cuephoria</Link>
            <Link to="/blog/post/3" className="hover:underline text-base">Upcoming Cuephoria Event: AR Metashot Cricket</Link>
          </div>
        </div>
        
        <div className="mt-8 py-6 px-6 rounded bg-gaming-accent/20 border-l-4 border-neon-blue/30 max-w-2xl">
          <h3 className="text-lg font-semibold text-neon-pink mb-2">Contribute a Post / Your Own Gaming Story!</h3>
          <p className="mb-2 text-gray-200">Got a hot tip, tournament recap, or game review? <strong>Submit your content to be featured!</strong></p>
          <Link to="/blog/submit" className="inline-block mt-2 px-5 py-2 rounded bg-neon-blue text-gaming-darker font-bold hover:bg-neon-blue/80 transition-all">Submit Your Post</Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
