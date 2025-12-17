import React from "react";
import AestheticCard from "./AestheticCard";
import "../../styles/ProjectAesthetics.css";

export default function ProjectAesthetics() {
  const aesthetics = [
    {
      id: 1,
      title: "Frank Lloyd Wright",
      subtitle: "Broadacre City, Suburban Utopia",
      imageSrc: "styles/utopia.png"
    },
    {
      id: 4,
      title: "Hieronymus Bosch",
      subtitle: "Garden of Earthly Delights, Painting",
      imageSrc: "styles/garden.png"
    }
  ];

  return (
    <div className="project-aesthetics-container">
      <div className="aesthetics-grid-2x1">
        {aesthetics.map((aesthetic) => (
          <AestheticCard
            key={aesthetic.id}
            title={aesthetic.title}
            subtitle={aesthetic.subtitle}
            imageSrc={aesthetic.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}
