import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface JournalEntry {
  mood: string;
  notes: string;
  gratitude: string[];
  date: string;
  id: number;
}

const WellnessJournal: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [gratitudeList, setGratitudeList] = useState<string[]>(["", "", ""]);
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  // Load saved entries
  useEffect(() => {
    const savedEntries = localStorage.getItem("journal_entries");
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  const handleSubmit = () => {
    if (!selectedMood && !notes && gratitudeList.every((item) => !item)) {
      return; // Don't submit empty entries
    }

    const newEntry: JournalEntry = {
      mood: selectedMood,
      notes: notes,
      gratitude: gratitudeList,
      date: new Date().toLocaleDateString(),
      id: Date.now(),
    };

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem("journal_entries", JSON.stringify(updatedEntries));

    // Reset form
    setSelectedMood("");
    setNotes("");
    setGratitudeList(["", "", ""]);
  };

  const deleteEntry = (id: number) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem("journal_entries", JSON.stringify(updatedEntries));
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Mood Tracker */}
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
              {["😊", "😌", "😐", "😔", "😫"].map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => setSelectedMood(emoji)}
                  className={`text-3xl p-3 hover:scale-110 transition-transform duration-200 
                            ${
                              selectedMood === emoji
                                ? "scale-110 bg-white/10 rounded-lg"
                                : ""
                            }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="How are you feeling today?"
              className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white 
                       focus:outline-none focus:border-white/30 transition-colors duration-300"
              rows={4}
            />
          </motion.div>

          {/* Gratitude Journal */}
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
              {gratitudeList.map((item, index) => (
                <input
                  key={index}
                  type="text"
                  value={item}
                  onChange={(e) => {
                    const newList = [...gratitudeList];
                    newList[index] = e.target.value;
                    setGratitudeList(newList);
                  }}
                  placeholder={`I'm grateful for...`}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                           focus:outline-none focus:border-white/30 transition-colors duration-300"
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mb-12">
          <motion.button
            onClick={handleSubmit}
            className="px-8 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                     backdrop-blur-sm border border-white/10 rounded-xl text-white 
                     font-semibold shadow-lg hover:from-purple-500/30 hover:to-pink-500/30 
                     transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Save Entry
          </motion.button>
        </div>

        {/* Entries Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map((entry) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-mice-elf-dark/20 to-dark-purple/20 
                       backdrop-blur-sm p-6 rounded-xl border border-white/10"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-white/60 text-sm">{entry.date}</span>
                <button
                  onClick={() => deleteEntry(entry.id)}
                  className="text-white/40 hover:text-red-400 transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="text-3xl mb-4">{entry.mood}</div>
              {entry.notes && (
                <p className="text-white/80 mb-4">{entry.notes}</p>
              )}
              {entry.gratitude.some((item) => item) && (
                <div className="space-y-2">
                  <h4 className="text-white/60 text-sm">Grateful for:</h4>
                  <ul className="list-disc list-inside text-white/80">
                    {entry.gratitude.map(
                      (item, index) => item && <li key={index}>{item}</li>
                    )}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessJournal;
