// Import necessary libraries
import React, { useState } from "react";
import { motion } from "framer-motion";

// Define the habit interface
// This specifies the structure of each habit object.
interface Habit {
  id: number; // Unique identifier for the habit
  title: string; // Name of the habit
  goal: number; // Target value for the habit (e.g., 8 glasses of water)
  progress: number; // Current progress made towards the goal
  unit: string; // Unit of measurement (e.g., glasses, days)
}

// Define the HabitTracking component
const HabitTracking: React.FC = () => {
  // State to store habits using the Habit interface
  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, title: "Drink Water", goal: 8, progress: 4, unit: "glasses" },
    { id: 2, title: "Exercise", goal: 5, progress: 2, unit: "days" },
  ]);

  // Function to handle progress updates
  // `id` identifies the habit to update, and `change` is the increment or decrement value
  const updateProgress = (id: number, change: number) => {
    setHabits((prevHabits) =>
      prevHabits.map(
        (habit) =>
          habit.id === id
            ? {
                ...habit, // Spread operator (keep all other properties of the habit unchanged)
                progress: Math.min(
                  habit.goal, // Ensure progress doesn't exceed the goal
                  Math.max(0, habit.progress + change) // Ensure progress doesn't drop below zero
                ),
              }
            : habit // If the habit ID doesnt matchm return it unchanged
      )
    );
  };

  return (
    <div className="min-h-screen w-full pt-24 pb-12">
      {/* Main container for the component */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Page title */}
        <motion.h2
          className="text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -20 }} // Start with opacity 0 and move upwards
          animate={{ opacity: 1, y: 0 }} // Fade in and settle into place
          transition={{ duration: 0.8 }} // Animation duration
        >
          Your Habits
        </motion.h2>

        {/* Grid layout for habits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {habits.map((habit) => (
            <motion.div
              key={habit.id} // Use the habit ID as the unique key
              className="bg-gradient-to-br from-steel-gray/30 to-dark-purple/30 backdrop-blur-sm 
                         p-6 rounded-lg shadow-lg border border-white/10"
              initial={{ opacity: 0, scale: 0.9 }} // Initial state
              animate={{ opacity: 1, scale: 1 }} // Final state
              transition={{ duration: 0.5 }} // Animation duration
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }} // Hover effect
            >
              {/* Habit title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {habit.title}
              </h3>

              {/* Progress Section */}
              <div className="space-y-2">
                {/* Display habit progress */}
                <div className="flex items-center justify-between text-white/80">
                  <span>Progress</span>
                  <span>
                    {habit.progress}/{habit.goal} {habit.unit}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    className="bg-white h-2 rounded-full"
                    style={{ width: `${(habit.progress / habit.goal) * 100}%` }} // Width is a percentage of the goal
                    animate={{
                      width: `${(habit.progress / habit.goal) * 100}%`,
                    }} // Smooth animation for progress changes
                    transition={{ duration: 0.5 }} // Animation duration
                  ></motion.div>
                </div>
              </div>

              {/* Buttons to increment or decrement progress */}
              <div className="flex items-center justify-between mt-4">
                <button
                  className="bg-gradient-to-r from-steel-gray to-dark-purple text-white 
                             px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                  onClick={() => updateProgress(habit.id, -1)} // Decrease progress
                >
                  −
                </button>
                <button
                  className="bg-gradient-to-r from-steel-gray to-dark-purple text-white 
                             px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                  onClick={() => updateProgress(habit.id, 1)} // Increase progress
                >
                  +
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button to add new habits */}
        <motion.button
          className="bg-gradient-to-r from-steel-gray to-dark-purple text-white 
                     px-8 py-3 rounded-lg shadow-lg hover:shadow-xl 
                     transition-all duration-300 border border-white/10"
          whileHover={{ scale: 1.05 }} // Slight scaling on hover
          whileTap={{ scale: 0.95 }} // Slight shrinking on tap
          initial={{ opacity: 0 }} // Initial opacity
          animate={{ opacity: 1 }} // Fade in animation
          transition={{ duration: 0.5, delay: 0.3 }} // Add a delay for this animation
        >
          + Add Habit
        </motion.button>
      </div>
    </div>
  );
};

// Export the component for use in other files
export default HabitTracking;
