import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-white pt-24"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.1 }}
    >
      <h1 className="text-5xl font-bold mb-4">Welcome to Wellness Tracker</h1>
      <p className="text-xl mb-6 text-center">
        Your personalized journey toward better health and habits starts here.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-white text-dark-purple rounded-lg shadow-lg hover:bg-gray-100 transition">
          Get Started
        </button>
        <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg shadow-lg hover:bg-gray-100 hover:text-blue-500 transition">
          Learn More
        </button>
      </div>
    </motion.section>
  );
};

export default Hero;
