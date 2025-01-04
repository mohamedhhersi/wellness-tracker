// HabitTracking.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AddHabitForm from "./AddHabitForm";

// Define the habit interface
interface Habit {
  id: number;
  title: string;
  goal: number;
  progress: number;
  unit: string;
}

const HabitTracking: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

  // Effect hook to load habits from localStorage on page load
  useEffect(() => {
    const savedHabits = localStorage.getItem("habits");
    if (savedHabits) {
      setHabits(JSON.parse(savedHabits));
    }
  }, []);

  // Update localStorage whenever habits change
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  // Function to handle progress updates
  const updateProgress = (id: number, change: number) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              progress: Math.min(
                habit.goal,
                Math.max(0, habit.progress + change)
              ),
            }
          : habit
      )
    );
  };

  const deleteHabit = (id: number) => {
    setHabits((prevHabits) => {
      const updatedHabits = prevHabits.filter((habit) => habit.id !== id);
      localStorage.setItem("habits", JSON.stringify(updatedHabits));
      return updatedHabits;
    });
  };

  // Function to add a new habit
  const addHabit = (habit: Habit) => {
    const updatedHabits = [...habits, habit];
    setHabits(updatedHabits);
    localStorage.setItem("habits", JSON.stringify(updatedHabits));
  };

  return (
    <section className="py-24" id="habits">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Track Your Progress
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Build lasting habits by tracking your daily progress and celebrating
            small wins
          </p>
        </motion.div>

        <AddHabitForm addHabit={addHabit} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {habits.length === 0 ? (
            <motion.div
              className="col-span-full text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white/60 text-lg mb-4">
                No habits tracked yet
              </p>
              <p className="text-white/40">
                Add your first habit to start your wellness journey
              </p>
            </motion.div>
          ) : (
            habits.map((habit) => (
              <motion.div
                key={habit.id}
                className="bg-gradient-to-br from-mice-elf-dark/20 to-dark-purple/20 backdrop-blur-sm 
                         p-6 rounded-lg shadow-lg border border-white/10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {habit.title}
                  </h3>
                  <motion.button
                    onClick={() => deleteHabit(habit.id)}
                    className="text-white/60 hover:text-red-400 transition-colors p-1"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Progress Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-white/80">
                    <span>Progress</span>
                    <span>
                      {habit.progress}/{habit.goal} {habit.unit}
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      className="bg-white h-2 rounded-full"
                      style={{
                        width: `${(habit.progress / habit.goal) * 100}%`,
                      }}
                      animate={{
                        width: `${(habit.progress / habit.goal) * 100}%`,
                      }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                  </div>
                </div>

                {/* Progress Buttons */}
                <div className="flex items-center justify-between mt-4">
                  <button
                    className="bg-gradient-to-r from-steel-gray/10 to-dark-purple/10 backdrop-blur-sm 
                               border border-white/10 text-white px-4 py-2 rounded-lg shadow-lg 
                               hover:from-steel-gray/20 hover:to-dark-purple/20 transition-all duration-300"
                    onClick={() => updateProgress(habit.id, -1)}
                  >
                    −
                  </button>
                  <button
                    className="bg-gradient-to-r from-steel-gray/10 to-dark-purple/10 backdrop-blur-sm 
                               border border-white/10 text-white px-4 py-2 rounded-lg shadow-lg 
                               hover:from-steel-gray/20 hover:to-dark-purple/20 transition-all duration-300"
                    onClick={() => updateProgress(habit.id, 1)}
                  >
                    +
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default HabitTracking;
