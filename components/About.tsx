import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="py-24" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            About Wellness Tracker
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Your personal companion for building better habits and achieving
            wellness goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-gradient-to-br from-mice-elf-dark/20 to-dark-purple/20 backdrop-blur-sm 
                     p-6 rounded-lg border border-white/10"
          >
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Our Mission
            </h3>
            <p className="text-white/80">
              Empowering individuals to build lasting habits through intuitive
              tracking and mindful progress monitoring.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-mice-elf-dark/20 to-dark-purple/20 backdrop-blur-sm 
                     p-6 rounded-lg border border-white/10"
          >
            <div className="text-3xl mb-4">✨</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Key Features
            </h3>
            <ul className="text-white/80 space-y-2">
              <li>• Habit tracking & analytics</li>
              <li>• Mood & gratitude journaling</li>
              <li>• Meditation guidance</li>
              <li>• Health metrics dashboard</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-mice-elf-dark/20 to-dark-purple/20 backdrop-blur-sm 
                     p-6 rounded-lg border border-white/10"
          >
            <div className="text-3xl mb-4">💪</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Why Choose Us
            </h3>
            <p className="text-white/80">
              Beautiful design meets powerful tracking tools to make your
              wellness journey enjoyable and effective.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
