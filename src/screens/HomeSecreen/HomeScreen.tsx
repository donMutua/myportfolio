import AboutSection from "@/components/About/AboutSection";
import ContactMe from "@/components/Contact/ContactMe";
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
      <ContactMe />
    </div>
  );
}

export default HomeScreen;
