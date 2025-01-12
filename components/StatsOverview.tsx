import React from "react";
import { motion } from "framer-motion";

interface StatCardProps {
  number: string;
  label: string;
  icon: string;
  delay: number;
}

const StatsOverview: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard number="87%" label="Success Rate" icon="📈" delay={0} />
          <StatCard number="12k+" label="Active Users" icon="👥" delay={0.2} />
          <StatCard number="28k" label="Habits Tracked" icon="✅" delay={0.4} />
        </div>
      </div>
    </section>
  );
};

const StatCard: React.FC<StatCardProps> = ({ number, label, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className="bg-gradient-to-br from-mice-elf-dark/20 to-dark-purple/20 
               backdrop-blur-sm p-6 rounded-xl border border-white/10
               flex flex-col items-center justify-center text-center"
  >
    <div className="text-4xl mb-2">{icon}</div>
    <div className="text-3xl font-bold text-white mb-1">{number}</div>
    <div className="text-white/80">{label}</div>
  </motion.div>
);

export default StatsOverview;
