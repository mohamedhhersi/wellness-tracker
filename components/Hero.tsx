import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-purple-600 text-white pt-24" // Added pt-24 for padding-top to prevent content from being hidden behind fixed navbar
      initial={{ opacity: 0, y: 50 }} // Initially, the Hero section is invisible (opacity: 0) and moved 50px down (y: 50)
      animate={{ opacity: 1, y: 0 }} // Animates to full opacity and moves up to its original position (y: 0)
      transition={{ duration: 1, delay: 0.5 }} // Animation lasts 1 second with a 0.5-second delay (starts after Navbar animation)
    >
      <h1 className="text-5xl font-bold mb-4">Welcome to Wellness Tracker</h1>
      <p className="text-xl mb-6 text-center">
        Your personalized journey toward better health and habits starts here.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-white text-blue-500 rounded-lg shadow-lg hover:bg-gray-100 transition">
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
