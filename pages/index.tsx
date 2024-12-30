import React from "react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
const Home: React.FC = () => {
  return (
    <div>
      <Navbar />

      <Hero />
    </div>
  );
};

export default Home;
