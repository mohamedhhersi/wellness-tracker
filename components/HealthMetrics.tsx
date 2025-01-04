import React from "react";
import { motion } from "framer-motion";

const metrics = [
  {
    title: "Sleep Score",
    value: "85",
    unit: "/100",
    icon: "😴",
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Step Count",
    value: "8,432",
    unit: "steps",
    icon: "👣",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Water Intake",
    value: "1.8",
    unit: "L",
    icon: "💧",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Mindful Minutes",
    value: "15",
    unit: "min",
    icon: "🧘‍♀️",
    color: "from-orange-500/20 to-yellow-500/20",
  },
];

const HealthMetrics: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Today's Health Metrics
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${metric.color} backdrop-blur-sm 
                       p-6 rounded-xl border border-white/10`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-3xl">{metric.icon}</div>
                <motion.div
                  className="text-white/60 text-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  ⋮
                </motion.div>
              </div>
              <h3 className="text-white/80 text-sm mb-1">{metric.title}</h3>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-white">
                  {metric.value}
                </span>
                <span className="text-white/60 ml-1">{metric.unit}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthMetrics;
