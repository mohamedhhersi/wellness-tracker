import React from "react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HabitTracking from "../components/HabitTracking";
import FeatureShowcase from "../components/FeatureShowcase";
import WellnessJournal from "../components/WellnessJournal";
import MeditationSection from "../components/MeditationSection";
import HealthMetrics from "../components/HealthMetrics";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HealthMetrics />
      <HabitTracking />
      <MeditationSection />
      <WellnessJournal />
      <FeatureShowcase />
    </div>
  );
};

export default Home;
