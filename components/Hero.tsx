import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-white pt-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transform Your Daily <br />
            Habits with{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r 
            from-purple-400 to-pink-400"
            >
              Flourish
            </span>
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-xl mb-8 text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Track your habits, monitor your wellness, and achieve your goals with
          our comprehensive tracking system.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="#habits" className="inline-block">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm 
                       border border-white/10 rounded-xl text-lg font-semibold shadow-lg 
                       hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Tracking →
            </motion.button>
          </Link>
          <Link href="#features" className="inline-block">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-steel-gray/10 to-dark-purple/10 backdrop-blur-sm 
                       border border-white/10 rounded-xl text-lg font-semibold shadow-lg 
                       hover:from-steel-gray/20 hover:to-dark-purple/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Features
            </motion.button>
          </Link>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: "10k+", label: "Active Users" },
            { number: "50k+", label: "Habits Tracked" },
            { number: "95%", label: "Success Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm 
                         border border-white/10 rounded-xl p-6"
            >
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
