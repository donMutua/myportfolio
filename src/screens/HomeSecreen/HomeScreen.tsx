import HeroSection from "@/components/HeroSection/HeroSection";
import NavBar from "@/components/NavBar/NavBar";
import React from "react";

function HomeScreen() {
  return (
    <div className="bg-black h-screen">
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default HomeScreen;
