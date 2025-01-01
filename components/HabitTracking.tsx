// Import necessary libraries
import React from "react";
import { motion } from "framer-motion";

// Define the HabitTracking component
const HabitTracking: React.FC = () => {
  return (
    <div className="min-h-screen w-full pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Habits
        </motion.h2>

        {/* Habits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Habit Cards */}
          <motion.div
            className="bg-gradient-to-br from-steel-gray/30 to-dark-purple/30 backdrop-blur-sm 
                       p-6 rounded-lg shadow-lg border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Drink Water
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-white/80">
                <span>Daily Goal</span>
                <span>8 glasses</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-white w-3/4 h-2 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-steel-gray/30 to-dark-purple/30 backdrop-blur-sm 
                       p-6 rounded-lg shadow-lg border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">Exercise</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-white/80">
                <span>Weekly Goal</span>
                <span>5 days</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-white w-1/2 h-2 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Add Habit Button */}
        <motion.button
          className="bg-gradient-to-r from-steel-gray to-dark-purple text-white 
                     px-8 py-3 rounded-lg shadow-lg hover:shadow-xl 
                     transition-all duration-300 border border-white/10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          + Add Habit
        </motion.button>
      </div>
    </div>
  );
};

// Export the component
export default HabitTracking;
