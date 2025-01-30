import React from "react";
import { motion } from "framer-motion";

interface Metric {
  title: string;
  value: string;
  unit: string;
  icon: string;
  color: string;
  trend?: {
    value: number;
    label: string;
  };
  progress?: number;
  goal?: string;
}

const metrics: Metric[] = [
  {
    title: "Sleep Quality",
    value: "85",
    unit: "/100",
    icon: "😴",
    color: "from-indigo-500/20 to-purple-500/20",
    trend: {
      value: 5,
      label: "vs last week"
    },
    progress: 85,
    goal: "Target: 85-90"
  },
  {
    title: "Daily Steps",
    value: "8,432",
    unit: "steps",
    icon: "👣",
    color: "from-green-500/20 to-emerald-500/20",
    trend: {
      value: -500,
      label: "vs yesterday"
    },
    progress: 70,
    goal: "Goal: 10,000"
  },
  {
    title: "Hydration",
    value: "1.8",
    unit: "L",
    icon: "💧",
    color: "from-blue-500/20 to-cyan-500/20",
    trend: {
      value: 0.3,
      label: "vs average"
    },
    progress: 75,
    goal: "Goal: 2.4L"
  },
  {
    title: "Mindful Minutes",
    value: "15",
    unit: "min",
    icon: "🧘‍♀️",
    color: "from-orange-500/20 to-yellow-500/20",
    trend: {
      value: 5,
      label: "streak days"
    },
    progress: 50,
    goal: "Goal: 30min"
  },
];

const HealthMetrics: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-2">
              Today&apos;s Health Metrics
            </h2>
            <p className="text-white/60">
              Last updated: {new Date().toLocaleTimeString()}
            </p>
          </motion.div>
          <motion.button
            className="text-white/80 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            View History →
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${metric.color} backdrop-blur-sm 
                       p-6 rounded-xl border border-white/10 hover:border-white/20
                       transition-all duration-300 cursor-pointer group`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-3xl group-hover:scale-110 transition-transform">
                  {metric.icon}
                </div>
                <motion.button
                  className="text-white/60 hover:text-white/90 text-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  ⋮
                </motion.button>
              </div>
              
              <h3 className="text-white/80 text-sm mb-1">{metric.title}</h3>
              
              <div className="flex items-baseline mb-2">
                <span className="text-2xl font-bold text-white">
                  {metric.value}
                </span>
                <span className="text-white/60 ml-1">{metric.unit}</span>
              </div>

              {metric.trend && (
                <div className="flex items-center mb-2">
                  <span className={`text-sm ${
                    metric.trend.value > 0 ? 'text-green-400' : 
                    metric.trend.value < 0 ? 'text-red-400' : 
                    'text-white/60'
                  }`}>
                    {metric.trend.value > 0 ? '↑' : metric.trend.value < 0 ? '↓' : '→'}
                    {' '}
                    {Math.abs(metric.trend.value)}
                  </span>
                  <span className="text-white/40 text-xs ml-1">
                    {metric.trend.label}
                  </span>
                </div>
              )}

              {metric.progress !== undefined && (
                <div className="w-full bg-white/5 rounded-full h-1.5 mb-1">
                  <div
                    className="bg-white/25 h-full rounded-full transition-all duration-500"
                    style={{ width: `${metric.progress}%` }}
                  />
                </div>
              )}

              {metric.goal && (
                <div className="text-white/40 text-xs">
                  {metric.goal}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthMetrics;
