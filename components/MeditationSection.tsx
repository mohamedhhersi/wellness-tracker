import React from "react";
import { motion } from "framer-motion";

const meditations = [
  {
    title: "Morning Calm",
    category: "Mindfulness",
    image: "🌅",
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    title: "Stress Relief",
    category: "Breathing",
    image: "🌊",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Better Sleep",
    category: "Sleep",
    image: "🌙",
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Focus Flow",
    category: "Productivity",
    image: "🎯",
    color: "from-green-500/20 to-emerald-500/20",
  },
];

const MeditationSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center mb-8"
        >
          <h2 className="text-4xl font-bold text-white">Mindfulness</h2>
          <button className="text-white/80 hover:text-white transition-colors">
            View All →
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {meditations.map((meditation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${meditation.color} backdrop-blur-sm 
                       p-6 rounded-xl border border-white/10 cursor-pointer
                       hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-4xl mb-4">{meditation.image}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {meditation.title}
              </h3>
              <p className="text-white/80 text-sm mb-2">
                {meditation.category}
              </p>
              <p className="text-white/60 text-sm">{meditation.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeditationSection;
