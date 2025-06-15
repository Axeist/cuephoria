
import React from "react";
import { useParams, Link } from "react-router-dom";

const samplePosts = {
  "1": {
    title: "How to Master the Break Shot in 8-Ball Pool",
    content: (
      <>
        <p><strong>The break shot sets the tone of the game.</strong> Here’s how to deliver a solid break:</p>
        <ul className="list-disc pl-6">
          <li>Use a wider stance for stability.</li>
          <li>Focus your aim just off-center of the 1-ball.</li>
          <li>Follow through for maximum cue ball speed.</li>
        </ul>
        <p className="mt-2">Practice often, and you’ll start every game strong!</p>
      </>
    ),
    category: "pool-tips"
  },
  "2": {
    title: "PS5 Review: FIFA 24 Tournament at Cuephoria",
    content: (
      <>
        <p>The excitement was palpable as players faced off on the PS5 at our recent FIFA 24 event.</p>
        <p>Lightning-fast load times, ultra-smooth gameplay, and a stadium atmosphere! The DualSense controller haptics made every goal feel real.</p>
      </>
    ),
    category: "ps5-reviews"
  },
  "3": {
    title: "Upcoming Cuephoria Event: AR Metashot Cricket",
    content: (
      <>
        <p>Ready for a new gaming challenge? Try our <span className="font-bold text-neon-pink">AR Metashot Cricket</span> event next week! Book your slot soon for a unique experience.</p>
      </>
    ),
    category: "cuephoria-happenings"
  }
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = samplePosts[id as keyof typeof samplePosts];

  if (!post) return (
    <div className="min-h-screen bg-gaming-dark text-white flex flex-col items-center pt-32">
      <h1 className="text-2xl neon-text-pink mb-4">Post not found</h1>
      <Link to="/blog" className="underline text-neon-blue">Back to Blog</Link>
    </div>
  );
  return (
    <div className="min-h-screen bg-gaming-dark text-white">
      <section className="container mx-auto pt-28 pb-10 px-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-3 neon-text-blue">{post.title}</h1>
        <div className="mb-6 text-gray-300">{post.content}</div>
        <Link to="/blog" className="text-neon-blue underline">← Back to Blog</Link>
      </section>
    </div>
  );
};

export default BlogPost;
