import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import HeroSection3 from "./components/HeroSection3";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HeroSection2 />
      <HeroSection3 />
    </div>
  );
};

export default LandingPage;
