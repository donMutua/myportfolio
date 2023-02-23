import AboutSection from "@/components/About/AboutSection";
import ContactMe from "@/components/Contact/ContactMe";
import HeroSection from "@/components/HeroSection/HeroSection";
import NavBar from "@/components/NavBar/NavBar";
import ProjectSection from "@/components/Projects/ProjectSection";
import SkillsSection from "@/components/Skills/SkillsSection";
import { getPortfolio, Portfolio } from "@/lib/api";
import React, { useEffect, useState } from "react";

function HomeScreen() {
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);

  const fetchData = async () => {
    try {
      const data = await getPortfolio();
      setPortfolio(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!portfolio) return <div>Loading...</div>;

  const { attributes: portfolioData } = portfolio[0];

  const { about, skills, projects } = portfolioData;
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
