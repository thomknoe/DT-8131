// src/App.jsx
import { useState } from "react";
import Background3D from "./components/Background3D";
import AmbientSound from "./components/AmbientSound";
import HamburgerMenu from "./components/HamburgerMenu";
import SlidesContainer from "./components/slides/SlidesContainer";
import SlideContainer from "./components/slides/SlideContainer";
import TitleBuffer from "./components/slides/TitleBuffer";
import StateOfTheArt from "./components/slides/StateOfTheArt";
import OntologyDiagram from "./components/slides/OntologyDiagram";
import ProjectQuestion from "./components/slides/ProjectQuestion";
import ResearchMethods from "./components/slides/ResearchMethods";
import KeyPrecedents from "./components/slides/KeyPrecedents";
import TechnologyEcosystem from "./components/slides/TechnologyEcosystem";
import StudyOfSetting from "./components/slides/StudyOfSetting";
import SystemUMLDiagram from "./components/slides/SystemUMLDiagram";
import ComputationalChallenges from "./components/slides/ComputationalChallenges";
import CommunitiesOfPractice from "./components/slides/CommunitiesOfPractice";
import ProjectAesthetics from "./components/slides/ProjectAesthetics";
import RadicalPrototype from "./components/slides/RadicalPrototype";
import StoryboardForkingPath from "./components/slides/StoryboardForkingPath";

export default function App() {
  const [stateOfArtPagination, setStateOfArtPagination] = useState(null);
  const [systemUMLPagination, setSystemUMLPagination] = useState(null);
  const [communitiesPagination, setCommunitiesPagination] = useState(null);
  const [storyboardPagination, setStoryboardPagination] = useState(null);

  return (
    <div className="relative w-screen h-screen">
      <Background3D />
      <HamburgerMenu />
      <AmbientSound />
      <SlidesContainer>
        <TitleBuffer />
        <SlideContainer 
          title="State of the Art" 
          slideNumber={1}
          pagination={stateOfArtPagination}
        >
          <StateOfTheArt onPaginationChange={setStateOfArtPagination} />
        </SlideContainer>
        <SlideContainer title="Ontology Diagram" slideNumber={2}>
          <OntologyDiagram />
        </SlideContainer>
        <SlideContainer title="Project Question" slideNumber={3}>
          <ProjectQuestion />
        </SlideContainer>
        <SlideContainer title="Research Methods" slideNumber={4}>
          <ResearchMethods />
        </SlideContainer>
        <SlideContainer title="Key Precedents" slideNumber={5}>
          <KeyPrecedents />
        </SlideContainer>
        <SlideContainer title="Technology Ecosystem" slideNumber={6}>
          <TechnologyEcosystem />
        </SlideContainer>
        <SlideContainer title="Study of Setting & Constituencies" slideNumber={7}>
          <StudyOfSetting />
        </SlideContainer>
        <SlideContainer 
          title="System + UML Diagram" 
          slideNumber={8}
          pagination={systemUMLPagination}
        >
          <SystemUMLDiagram onPaginationChange={setSystemUMLPagination} />
        </SlideContainer>
        <SlideContainer title="Computational Challenges + Barriers to Entry" slideNumber={9}>
          <ComputationalChallenges />
        </SlideContainer>
        <SlideContainer 
          title="Communities of Practice + Literature Review" 
          slideNumber={10}
          pagination={communitiesPagination}
        >
          <CommunitiesOfPractice onPaginationChange={setCommunitiesPagination} />
        </SlideContainer>
        <SlideContainer title="Project Aesthetics" slideNumber={11}>
          <ProjectAesthetics />
        </SlideContainer>
        <SlideContainer title="Radical Prototype" slideNumber={12}>
          <RadicalPrototype />
        </SlideContainer>
        <SlideContainer 
          title="Storyboard + Forking Path (Generated Using Gemini)" 
          slideNumber={13}
          pagination={storyboardPagination}
        >
          <StoryboardForkingPath onPaginationChange={setStoryboardPagination} />
        </SlideContainer>
      </SlidesContainer>
    </div>
  );
}
