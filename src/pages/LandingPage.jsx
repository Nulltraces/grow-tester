import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HeroSection2 from "../components/HeroSection2";
import HeroSection3 from "../components/HeroSection3";
import ResChat from "../components/ResChat";

const LandingPage = () => {
  const [showModal, setShowModal] = useState(true);
  // const [balance,setbalance] = useState(0);
  return (
    <div>
      <Navbar />
      <ResChat showModal={showModal} setShowModal={setShowModal} />
      <HeroSection />
      <HeroSection2 />
      <HeroSection3 />
    </div>
  );
};

export default LandingPage;
