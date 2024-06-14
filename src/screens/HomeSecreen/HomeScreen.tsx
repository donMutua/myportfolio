import React, { useContext } from "react";

import AboutSection from "@/components/About/AboutSection";
import ContactMe from "@/components/Contact/ContactMe";
import HeroSection from "@/components/HeroSection/HeroSection";
import NavBar from "@/components/NavBar/NavBar";
import ProjectSection from "@/components/Projects/ProjectSection";
import SkillsSection from "@/components/Skills/SkillsSection";

import { PortfolioContext } from "@/store/PortfolioContext";
import Loader from "@/components/Loader";
import Highlights from "@/components/highlights/Highlights";

function HomeScreen() {
  const { portfolio, isLoading } = useContext(PortfolioContext);

  if (isLoading)
    return (
      <div className="flex justify-center items-center  h-screen">
        <Loader />
      </div>
    );

  const portfolioData = portfolio?.[0]?.attributes;

  const { aboutMe, skills, projects, highlights } = portfolioData || {};

  const aboutMeContent = aboutMe?.content ?? undefined;
  const highlightsContent = highlights?.content ?? undefined;

  return (
    <div className="bg-black">
      <NavBar />
      <HeroSection />
      <AboutSection about={aboutMeContent} />
      <Highlights highlights={highlightsContent} />
      <SkillsSection skills={skills} />
      <ProjectSection projects={projects} />
      <ContactMe />
    </div>
  );
}

export default HomeScreen;
