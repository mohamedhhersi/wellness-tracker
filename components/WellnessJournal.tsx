import React from "react";
import { motion } from "framer-motion";

const WellnessJournal: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Daily Reflection
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gradient-to-br from-mice-elf-dark/20 to-dark-purple/20 backdrop-blur-sm 
                     p-6 rounded-xl border border-white/10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Mood Tracker
            </h3>
            <div className="flex justify-between space-x-4 mb-6">
              {["😊", "😌", "😐", "😔", "😫"].map((emoji, index) => (
                <button
                  key={index}
                  className="text-3xl p-3 hover:scale-110 transition-transform duration-200"
                >
                  {emoji}
                </button>
              ))}
            </div>
            <textarea
              placeholder="How are you feeling today?"
              className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white 
                       focus:outline-none focus:border-white/30 transition-colors duration-300"
              rows={4}
            />
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-mice-elf-dark/20 to-dark-purple/20 backdrop-blur-sm 
                     p-6 rounded-xl border border-white/10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Gratitude Journal
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((num) => (
                <input
                  key={num}
                  type="text"
                  placeholder={`I'm grateful for...`}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                           focus:outline-none focus:border-white/30 transition-colors duration-300"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WellnessJournal;
