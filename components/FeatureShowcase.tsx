import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const features: Feature[] = [
  {
    title: "Progress Insights",
    description: "View detailed analytics and trends of your habits over time",
    icon: "📊",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Streak Tracking",
    description: "Build momentum with daily streaks and milestone celebrations",
    icon: "🔥",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Community Challenges",
    description: "Join group challenges and compete with friends",
    icon: "🤝",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Smart Reminders",
    description: "Get personalized notifications at optimal times",
    icon: "⏰",
    color: "from-blue-500/20 to-indigo-500/20",
  },
];

const FeatureShowcase: React.FC = () => {
  return (
    <section className="py-24" id="features">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover What's Possible
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`bg-gradient-to-br ${feature.color} backdrop-blur-sm 
                 p-8 rounded-2xl shadow-lg border border-white/10
                 hover:scale-105 transition-transform duration-300`}
    >
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className="text-2xl font-semibold text-white mb-3">
        {feature.title}
      </h3>
      <p className="text-white/80">{feature.description}</p>
    </motion.div>
  );
};

export default FeatureShowcase;
