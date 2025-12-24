import React, { useState } from "react";
import "../../styles/StateOfTheArt.css";
import ArtCard from "./ArtCard";

export default function StateOfTheArt({ onPaginationChange }) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 2;

  const allCards = [
    { title: "Minecraft", subtitle: "Mojang, Microsoft", description: "Sandbox Builder", imageSrc: "games/minecraft.png", href: "https://www.minecraft.net/", id: 1 },
    { title: "Spore", subtitle: "Maxis, EA", description: "Evolutionary Sandbox", imageSrc: "games/spore.png", href: "https://www.ea.com/games/spore", id: 2 },
    { title: "The Sims", subtitle: "Maxis, EA", description: "Character Simulator", imageSrc: "games/sims.png", href: "https://www.ea.com/games/the-sims", id: 3 },
    { title: "No Man's Sky", subtitle: "Hello Games", description: "Procedural Universe", imageSrc: "games/sky.jpg", href: "https://www.nomanssky.com/", id: 4 },
    { title: "Dwarf Fortress", subtitle: "Bay 12 Games", description: "Procedural World Simulation", imageSrc: "games/fortress.png", href: "https://www.bay12games.com/dwarves/", id: 5 },
    { title: "SimCity", subtitle: "Maxis, EA", description: "City Builder", imageSrc: "games/simcity.png", href: "https://www.ea.com/games/simcity", id: 6 },
    { 
      title: "Unity Engine", 
      subtitle: "Unity Technologies", 
      description: "Game Engine",
      imageSrc: "engines/unity.png",
      href: "https://unity.com/",
      id: 7 
    },
    { 
      title: "Unreal Engine", 
      subtitle: "Epic Games", 
      description: "Game Engine",
      imageSrc: "engines/unreal.png",
      href: "https://www.unrealengine.com/",
      id: 8 
    },
    { 
      title: "Twine", 
      subtitle: "Interactive Narrative", 
      description: "Branching Stories",
      imageSrc: "engines/twine.png",
      href: "https://twinery.org/",
      id: 9 
    },
    { 
      title: "Genie 3", 
      subtitle: "Google DeepMind", 
      description: "AI World Generation",
      imageSrc: "engines/genie-3.png",
      href: "https://3dgen.io/",
      id: 10 
    },
    { 
      title: "VLGE", 
      subtitle: "VIL + IJ", 
      description: "AI Asset Pipeline",
      imageSrc: "engines/vlge.png",
      href: "https://www.vlge.com/",
      id: 11 
    },
    { 
      title: "RPG Maker", 
      subtitle: "Enterbrain, Degica", 
      description: "Game Development Tool",
      imageSrc: "engines/rpg.png",
      href: "https://www.rpgmakerweb.com/",
      id: 12 
    },
  ];

  const getCurrentPageCards = () => {
    const startIndex = currentPage * 6;
    return allCards.slice(startIndex, startIndex + 6);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (onPaginationChange) {
      onPaginationChange({
        currentPage: page,
        totalPages,
        onPageChange: handlePageChange
      });
    }
  };

  React.useEffect(() => {
    if (onPaginationChange) {
      onPaginationChange({
        currentPage,
        totalPages,
        onPageChange: handlePageChange
      });
    }
  }, [currentPage, totalPages, onPaginationChange]);

  return (
    <div className="state-of-art-container">
      {Array.from({ length: totalPages }).map((_, pageIndex) => {
        const pageCards = allCards.slice(pageIndex * 6, (pageIndex + 1) * 6);
        return (
          <div 
            key={pageIndex}
            className={`cards-page ${pageIndex === currentPage ? 'active' : ''}`}
          >
            <div className="cards-grid">
              {pageCards.map((card) => (
                <ArtCard 
                  key={card.id} 
                  title={card.title} 
                  subtitle={card.subtitle}
                  description={card.description}
                  imageSrc={card.imageSrc}
                  href={card.href}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
