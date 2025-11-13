import React, { useEffect, useRef, useState } from "react";
import Section from "./components/Section";
import ArrowNav from "./components/ArrowNav";
import VerticalNav from "./components/VerticalNav";
import BackgroundScene from "./components/BackgroundScene";
import HeroSection from "./components/HeroSection";
import SoundToggle from "./components/SoundToggle";

// Custom sections
import ProjectQuestionSection from "./sections/ProjectQuestionSection";
import StudyOfConstituenciesSection from "./sections/StudyOfConstituenciesSection";
import LiteratureReviewSection from "./sections/LiteratureReviewSection";
import KeyPrecedentsSection from "./sections/KeyPrecedentsSection";
import TechnologyEcosystemSection from "./sections/TechnologyEcosystemSection";
import ResearchMethodsSection from "./sections/ResearchMethodsSection";
import ComputationalChallengesSection from "./sections/ComputationalChallengesSection";
import BarriersToEntrySection from "./sections/BarriersToEntrySection";
import OntographyDiagramSection from "./sections/OntographyDiagramSection";
import SystemsDiagramSection from "./sections/SystemsDiagramSection";
import RadicalPrototypeSection from "./sections/RadicalPrototypeSection";
import UMLDiagramSection from "./sections/UMLDiagramSection";
import ProccessDiagramSection from "./sections/ProccessDiagramSection";
import TechStackSection from "./sections/TechStackSection";
import ModelDiagramSection from "./sections/ModelDiagramSection";
import StoryboardsSections from "./sections/StoryboardsSections";


export default function App() {
  const sections = [
    "Project Question",
    "Study of Constituencies",
    "Literature Review",
    "Key Precedents",
    "Technology Ecosystem",
    "Research Methods",
    "Computational Challenges",
    "Barriers to Entry",
    "Ontography Diagram",
    "Systems Diagram",    
    "Radical Prototype",
    "Tech Stack",
    "UML Diagram",
    "Proccess Diagram",
    "Model Diagram",
    "Storyboards",
  ];

  const sectionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.6 }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (i) => {
    if (i < 0 || i >= sections.length + 1) return;
    sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

return (
  <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
    <BackgroundScene />

    {/* 🔊 Sound Toggle Button in upper-right corner */}
    <SoundToggle />

    <div ref={(el) => (sectionRefs.current[0] = el)} data-index={0} className="snap-start">
      <HeroSection />
    </div>

    {sections.map((title, index) => {
      const currentIndex = index + 1;
      return (
        <div
          key={currentIndex}
          ref={(el) => (sectionRefs.current[currentIndex] = el)}
          data-index={currentIndex}
          className="snap-start"
        >
          {title === "Project Question" ? (
            <ProjectQuestionSection />
          ) : title === "Study of Constituencies" ? (
            <StudyOfConstituenciesSection />
          ) : title === "Literature Review" ? (
            <LiteratureReviewSection />
          ) : title === "Key Precedents" ? (
            <KeyPrecedentsSection />
          ) : title === "Technology Ecosystem" ? (
            <TechnologyEcosystemSection />
          ) : title === "Research Methods" ? (
            <ResearchMethodsSection />
          ) : title === "Computational Challenges" ? (
            <ComputationalChallengesSection />
          ) : title === "Barriers to Entry" ? (
            <BarriersToEntrySection />
          ) : title === "Ontography Diagram" ? (
            <OntographyDiagramSection />
          ) : title === "Systems Diagram" ? (
            <SystemsDiagramSection />
          ) : title === "Radical Prototype" ? (
            <RadicalPrototypeSection />
          ) : title === "Tech Stack" ? (
            <TechStackSection />
          ) : title === "UML Diagram" ? (
            <UMLDiagramSection />
          ) : title === "Proccess Diagram" ? (
            <ProccessDiagramSection />
          ) : title === "Model Diagram" ? (
            <ModelDiagramSection />
          ) : title === "Storyboards" ? (
            <StoryboardsSections />
          ) : (
            <Section title={title} />
          )}
        </div>
      );
    })}

    <ArrowNav
      onPrev={() => scrollToIndex(activeIndex - 1)}
      onNext={() => scrollToIndex(activeIndex + 1)}
      disablePrev={activeIndex === 0}
      disableNext={activeIndex === sections.length}
    />

    <VerticalNav
      sections={["hello.world", ...sections]}
      activeIndex={activeIndex}
      onNavigate={scrollToIndex}
    />
  </div>
);

}
