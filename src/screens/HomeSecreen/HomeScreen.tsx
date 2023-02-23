import AboutSection from "@/components/About/AboutSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import NavBar from "@/components/NavBar/NavBar";
import ProjectSection from "@/components/Projects/ProjectSection";
import SkillsSection from "@/components/Skills/SkillsSection";
import React from "react";

function HomeScreen() {
  return (
    <div className="bg-black">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
    </div>
  );
}

export default HomeScreen;
