import React from "react";
import TechCard from "./TechCard";
import "../../styles/TechnologyEcosystem.css";

export default function TechnologyEcosystem() {
  const technologies = [
    // Row 1
    {
      id: 1,
      title: "React",
      description: "UI Framework",
      imageSrc: "tech/react-tailwind.png",
      href: "https://react.dev/"
    },
    {
      id: 3,
      title: "Geotic",
      description: "Entity-Component System",
      imageSrc: "tech/geotic.gif",
      href: "https://github.com/ddmills/geotic"
    },
    // Row 2
    {
      id: 4,
      title: "Vite",
      description: "Build Tool",
      imageSrc: "tech/vite.png",
      href: "https://vitejs.dev/"
    },
    {
      id: 6,
      title: "XState",
      description: "State Machines & System Logic",
      imageSrc: "tech/xstate.png",
      href: "https://xstate.js.org/"
    },
    // Row 3
    {
      id: 7,
      title: "Three.js",
      description: "3D World Rendering",
      imageSrc: "tech/threejs.png",
      href: "https://threejs.org/"
    },
    {
      id: 9,
      title: "Recast/Detour",
      description: "NavMesh & Agent Pathfinding",
      imageSrc: "tech/recast.png",
      href: "https://github.com/recastnavigation/recastnavigation"
    },
    // Row 4
    {
      id: 10,
      title: "React Flow",
      description: "Node-Based Editor",
      imageSrc: "tech/react-flow.png",
      href: "https://reactflow.dev/"
    },
    {
      id: 12,
      title: "JSON Rules Engine",
      description: "Procedural Logic Evaluation",
      imageSrc: "tech/json-rules-engine.png",
      href: "https://github.com/CacheControl/json-rules-engine"
    }
  ];

  return (
    <div className="technology-ecosystem-container">
      <div className="tech-grid-2x4">
        {technologies.map((tech) => (
          <TechCard
            key={tech.id}
            title={tech.title}
            description={tech.description}
            imageSrc={tech.imageSrc}
            href={tech.href}
          />
        ))}
      </div>
    </div>
  );
}
