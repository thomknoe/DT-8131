import React from "react";
import PrecedentCard from "./PrecedentCard";
import NoiseHeightfields from "../p5-animations/NoiseHeightfields";
import NaturalSystems from "../p5-animations/NaturalSystems";
import GenerativeGrammars from "../p5-animations/GenerativeGrammars";
import AgentBehavior from "../p5-animations/AgentBehavior";
import "../../styles/KeyPrecedents.css";

export default function KeyPrecedents() {
  const precedents = [
    {
      id: 1,
      title: "NOISE & HEIGHTFIELDS",
      description: "Perlin/Simplex noise algorithms for terrain topology, biome mask generation, and spatial continuity mapping.",
      P5Sketch: NoiseHeightfields,
      href: "https://en.wikipedia.org/wiki/Perlin_noise"
    },
    {
      id: 2,
      title: "SIMULATION & NATURAL SYSTEMS",
      description: "Flow field particle systems, erosion simulation algorithms, and procedural landform evolution logic.",
      P5Sketch: NaturalSystems,
      href: "https://en.wikipedia.org/wiki/Particle_system"
    },
    {
      id: 3,
      title: "STRUCTURAL & GENERATIVE GRAMMARS",
      description: "L-systems, shape grammars, and WFC tiling algorithms for procedural structure generation.",
      P5Sketch: GenerativeGrammars,
      href: "https://en.wikipedia.org/wiki/L-system"
    },
    {
      id: 4,
      title: "AGENT & BEHAVIOR SYSTEMS",
      description: "Flocking algorithms, GOAP/HTN planning, and utility-based AI for emergent agent behaviors.",
      P5Sketch: AgentBehavior,
      href: "https://en.wikipedia.org/wiki/Boids"
    }
  ];

  return (
    <div className="key-precedents-container">
      <div className="precedents-grid-2x2">
        {precedents.map((precedent) => (
          <PrecedentCard
            key={precedent.id}
            title={precedent.title}
            description={precedent.description}
            P5Sketch={precedent.P5Sketch}
            href={precedent.href}
          />
        ))}
      </div>
    </div>
  );
}
