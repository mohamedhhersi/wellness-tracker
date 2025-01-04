// AddHabitForm.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

// Define the habit interface
interface Habit {
  id: number;
  title: string;
  goal: number;
  progress: number;
  unit: string;
}

// Props type
interface AddHabitFormProps {
  addHabit: (habit: Habit) => void; // Function to add habit passed from parent
}

const AddHabitForm: React.FC<AddHabitFormProps> = ({ addHabit }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState("");
  const [unit, setUnit] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && goal && unit) {
      addHabit({
        id: Date.now(),
        title,
        goal: Number(goal),
        progress: 0,
        unit,
      });
      setTitle("");
      setGoal("");
      setUnit("");
      setIsFormVisible(false);
    }
  };

  return (
    <div className="mb-8">
      <motion.button
        className="bg-gradient-to-r from-steel-gray/10 to-dark-purple/10 backdrop-blur-sm 
                   border border-white/10 text-white px-6 py-3 rounded-lg shadow-lg 
                   hover:from-steel-gray/20 hover:to-dark-purple/20 transition-all duration-300"
        onClick={() => setIsFormVisible(!isFormVisible)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isFormVisible ? "Cancel" : "+ Add New Habit"}
      </motion.button>

      {isFormVisible && (
        <motion.form
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-4 bg-gradient-to-br from-mice-elf-dark/20 to-dark-purple/20 backdrop-blur-sm 
                     p-6 rounded-lg shadow-lg border border-white/10 space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <label className="block text-white/80 text-sm">Habit Name</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white 
                       focus:outline-none focus:border-white/30 transition-colors duration-300"
              placeholder="e.g., Daily Water Intake"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-white/80 text-sm">Goal</label>
              <input
                type="number"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white 
                         focus:outline-none focus:border-white/30 transition-colors duration-300"
                placeholder="e.g., 8"
                required
                min="1"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-white/80 text-sm">Unit</label>
              <input
                type="text"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white 
                         focus:outline-none focus:border-white/30 transition-colors duration-300"
                placeholder="e.g., glasses"
                required
              />
            </div>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-steel-gray/20 to-dark-purple/20 backdrop-blur-sm 
                     border border-white/10 text-white px-6 py-3 rounded-lg shadow-lg 
                     hover:from-steel-gray/30 hover:to-dark-purple/30 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Create Habit
          </motion.button>
        </motion.form>
      )}
    </div>
  );
};

export default AddHabitForm;
