import React, { useState } from "react";
import { motion } from "framer-motion";

interface Habit {
  id: number;
  name: string;
  goal: number; // Total goal (e.g., 8 glasses, 5 days)
  progress: number; // Current progress
  unit: string; // Unit (e.g., "glasses", "days")
}

const HabitTracking: React.FC = () => {
  // State to store habits
  const [habits, setHabits] = useState<Habit[]>([
    {
      id: 1,
      name: "Drink Water",
      goal: 8,
      progress: 6,
      unit: "glasses",
    },
    {
      id: 2,
      name: "Exercise",
      goal: 5,
      progress: 2,
      unit: "days",
    },
  ]);

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
          {habits.map((habit) => (
            <motion.div
              key={habit.id}
              className="bg-gradient-to-br from-steel-gray/30 to-dark-purple/30 backdrop-blur-sm 
                         p-6 rounded-lg shadow-lg border border-white/10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {habit.name}
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-white/80">
                  <span>Daily Goal</span>
                  <span>
                    {habit.progress}/{habit.goal} {habit.unit}
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-white h-2 rounded-full"
                    style={{
                      width: `${(habit.progress / habit.goal) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HabitTracking;
