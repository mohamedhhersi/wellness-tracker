import React from "react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HabitTracking from "../components/HabitTracking";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HabitTracking />
    </div>
  );
};

export default Home;
