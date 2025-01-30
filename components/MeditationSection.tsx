import React from "react";
import { motion } from "framer-motion";

const meditations = [
  {
    title: "Morning Mindfulness",
    category: "Daily Practice",
    description: "Start your day with clarity and purpose through guided breathing and gentle awareness exercises",
    image: "🌅",
    color: "from-orange-500/20 to-yellow-500/20",
    duration: "10 min",
    benefits: ["Improved focus", "Reduced morning anxiety", "Better daily planning"]
  },
  {
    title: "Stress Release",
    category: "Anxiety Relief",
    description: "Learn powerful breathing techniques to calm your nervous system and release tension",
    image: "🌊",
    color: "from-blue-500/20 to-cyan-500/20",
    duration: "15 min",
    benefits: ["Lower stress levels", "Mental clarity", "Emotional balance"]
  },
  {
    title: "Deep Sleep",
    category: "Rest & Recovery",
    description: "Gentle guidance into deep relaxation to help you fall asleep naturally and peacefully",
    image: "🌙",
    color: "from-indigo-500/20 to-purple-500/20",
    duration: "20 min",
    benefits: ["Better sleep quality", "Easier to fall asleep", "Morning freshness"]
  },
  {
    title: "Focus Flow",
    category: "Performance",
    description: "Enhance your concentration and enter a state of focused calm for better productivity",
    image: "🎯",
    color: "from-green-500/20 to-emerald-500/20",
    duration: "12 min",
    benefits: ["Increased concentration", "Task clarity", "Reduced distractions"]
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
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Daily Mindfulness</h2>
            <p className="text-white/80">Cultivate peace and clarity with guided meditations</p>
          </div>
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
                       p-6 rounded-xl border border-white/10 cursor-pointer group
                       hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{meditation.image}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {meditation.title}
              </h3>
              <p className="text-white/80 text-sm mb-3">
                {meditation.category}
              </p>
              <p className="text-white/70 text-sm mb-4 line-clamp-2">
                {meditation.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-white/60 text-sm">{meditation.duration}</span>
                <span className="text-white/60 hover:text-white/80 text-sm">Start →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeditationSection;
