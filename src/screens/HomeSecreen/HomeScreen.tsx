import React, { useContext } from "react";

import AboutSection from "@/components/About/AboutSection";
import ContactMe from "@/components/Contact/ContactMe";
import HeroSection from "@/components/HeroSection/HeroSection";
import NavBar from "@/components/NavBar/NavBar";
import ProjectSection from "@/components/Projects/ProjectSection";
import SkillsSection from "@/components/Skills/SkillsSection";

import { PortfolioContext } from "@/store/PortfolioContext";

function HomeScreen() {
  const { portfolio, isLoading } = useContext(PortfolioContext);

  if (isLoading) return <div>Loading...</div>;

  const portfolioData = portfolio?.[0]?.attributes;

  const { about, skills, projects } = portfolioData || {};

  return (
    <div className="bg-black">
      <NavBar />
      <HeroSection />
      <AboutSection about={about} />
      <SkillsSection skills={skills} />
      <ProjectSection projects={projects} />
      <ContactMe />
    </div>
  );
}

export default HomeScreen;
