
import React from "react";
import { Calendar } from "lucide-react";

const sampleEvents = [
  {
    name: "8-Ball Pool Tournament",
    date: "2025-06-20",
    time: "5:00 PM",
    desc: "Compete with top players. Prizes for winners!",
  },
  {
    name: "FIFA 24 PS5 Showdown",
    date: "2025-07-02",
    time: "3:00 PM",
    desc: "Play on the latest PS5 setups. Spots limited!",
  },
  {
    name: "AR Metashot Cricket",
    date: "2025-07-10",
    time: "5:30 PM",
    desc: "Experience our exclusive AR cricket game event."
  }
];

const BlogCalendar = () => {
  return (
    <div className="min-h-screen bg-gaming-dark text-white">
      <section className="container mx-auto pt-28 pb-10 px-4">
        <div className="flex items-center gap-3 mb-8">
          <Calendar className="text-neon-pink" size={36}/>
          <h1 className="text-3xl md:text-4xl font-bold neon-text-blue">Cuephoria Gaming Calendar</h1>
        </div>
        <div className="grid gap-6 max-w-xl mx-auto">
          {sampleEvents.map((event, idx) => (
            <div key={idx} className="glass-card rounded-lg px-6 py-4 border border-neon-blue/20">
              <h2 className="text-2xl font-bold text-neon-pink mb-1">{event.name}</h2>
              <div className="flex gap-5 text-sm text-gray-300 mb-2">
                <span className="bg-neon-blue/20 text-neon-blue rounded px-2">{event.date}</span>
                <span className="bg-neon-pink/20 text-neon-pink rounded px-2">{event.time}</span>
              </div>
              <p className="text-gray-200">{event.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogCalendar;
