import React, { useState, useEffect } from "react";
import LiteratureCard from "./LiteratureCard";
import "../../styles/CommunitiesOfPractice.css";

export default function CommunitiesOfPractice({ onPaginationChange }) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 2;

  useEffect(() => {
    if (onPaginationChange) {
      onPaginationChange({
        currentPage,
        totalPages,
        onPageChange: setCurrentPage
      });
    }
  }, [currentPage, totalPages, onPaginationChange]);

  const communities = [
    {
      id: 1,
      title: "Mod Communities (Skyrim)",
      subtitle: "Reinterpretations of procedural grammars",
      abstract: "Modding communities in Skyrim demonstrate how players reinterpret and extend procedural generation systems. These communities create new content generation rules, modify existing algorithms, and share procedural grammars that transform the base game's systems. The modding ecosystem showcases how procedural logic can be democratized and reimagined by user communities, creating new forms of generative expression within established frameworks.",
      imageSrc: "communities/skyrim.png"
    },
    {
      id: 2,
      title: "Machinima (Garry's Mod)",
      subtitle: "Worlds used as performative stages",
      abstract: "Garry's Mod communities use procedural worlds as performative stages for machinima production. These creative subcultures leverage the game's physics-based systems and object placement tools to construct narrative spaces and cinematic experiences. The community transforms game engines into creative platforms, demonstrating how procedural environments can serve as both technical infrastructure and artistic medium for collaborative storytelling.",
      imageSrc: "communities/mod.png"
    },
    {
      id: 3,
      title: "Browser-native PCG Artists (OpenProcessing)",
      subtitle: "Proceduralism adapted to web constraints",
      abstract: "Browser-native procedural content generation artists working with platforms like OpenProcessing adapt generative algorithms to web browser constraints. These communities explore real-time procedural generation within browser runtime environments, leveraging JavaScript's capabilities for computational art. The work demonstrates how procedural systems can be optimized for web infrastructure, balancing computational complexity with browser performance limitations while maintaining creative expression.",
      imageSrc: "communities/open.png"
    }
  ];

  const literature = [
    {
      id: 1,
      title: "Don't Hate the Player, Hate the Game: The Racialization of Labor in World of Warcraft",
      author: "Lisa Nakamura",
      abstract: "This article examines the racialization of informational labor in machinima about Chinese player workers in World of Warcraft. Such fan-produced video content extends the representational space of the game and produces overtly racist narrative space, illustrating the problematics of informationalized capitalism and the dispossession of information workers in processes of globalization.",
      imageSrc: "papers/wow.png",
      href: "https://lisanakamura.net/wp-content/uploads/2012/03/donthatetheplayer.pdf"
    },
    {
      id: 2,
      title: "Constructions and Reconstructions of Self in Virtual Reality: Playing in the MUDs",
      author: "Sherry Turkle",
      abstract: "Multi-user games on the Internet provide worlds for social interaction in virtual space, where you can present yourself as a character, be anonymous, and play roles as close or far from your real self as you choose. In MUDs, the projections of self are engaged in a resolutely postmodern context where authorship is exploded and the self is multiplied without limit, offering unparalleled opportunity to play with identity.",
      imageSrc: "papers/mud.png",
      href: "https://www.tandfonline.com/doi/abs/10.1080/10749039409524667"
    },
    {
      id: 3,
      title: "Virtual 'Third Places': A Case Study of Sociability in Massively Multiplayer Games",
      author: "Nicolas Ducheneaut, Robert J. Moore & Eric Nickell",
      abstract: "Massively Multiplayer Online Games are extensive, persistent online 3D environments populated by hundreds of thousands of players. Based on ethnographic observations and data collection in Star Wars Galaxies, we use Oldenburg's notion of 'third places' to evaluate whether virtual world social spaces fit existing definitions of sociable environments and discuss the role online games play in formation of social capital.",
      imageSrc: "papers/place.png",
      href: "https://link.springer.com/article/10.1007/s10606-007-9041-8"
    }
  ];

  return (
    <div className="communities-of-practice-container">
      <div className={`literature-page ${currentPage === 0 ? 'active' : ''}`}>
        <div className="literature-grid-3col">
          {communities.map((item) => (
            <LiteratureCard
              key={item.id}
              title={item.title}
              author={item.subtitle}
              abstract={item.abstract}
              imageSrc={item.imageSrc}
              showLink={false}
            />
          ))}
        </div>
      </div>
      <div className={`literature-page ${currentPage === 1 ? 'active' : ''}`}>
        <div className="literature-grid-3col">
          {literature.map((item) => (
            <LiteratureCard
              key={item.id}
              title={item.title}
              author={item.author}
              abstract={item.abstract}
              imageSrc={item.imageSrc}
              showLink={true}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
