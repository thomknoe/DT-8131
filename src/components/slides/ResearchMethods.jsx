import React from "react";
import { Eye, Network, Gauge, Search } from "lucide-react";
import "../../styles/ResearchMethods.css";

export default function ResearchMethods() {
  const researchCards = [
    {
      id: 1,
      title: "Playtesting",
      description: "Observing player engagement and emergent behavior to assess how users explore mechanics, interact with systems, and interpret feedback.",
      methodType: "Qualitative Methods",
      Icon: Eye
    },
    {
      id: 2,
      title: "Choice Mapping",
      description: "Diagramming and visualizing branching narrative structures to identify decision density, dead ends, and systemic balance for player experience in virtual worlds.",
      methodType: "Mixed Methods",
      Icon: Network
    },
    {
      id: 3,
      title: "Computational Performance",
      description: "Measuring how efficiently the system allocates CPU and memory resources as simulated worlds expand—tracking scalability, load, and procedural generation cost over time.",
      methodType: "Quantitative Methods",
      Icon: Gauge
    },
    {
      id: 4,
      title: "Contextual Inquiry",
      description: "Ethnographic observations and interviewing to uncover how participants interpret and navigate the designed environment in real or simulated contexts.",
      methodType: "Qualitative Methods",
      Icon: Search
    }
  ];

  return (
    <div className="research-methods-container">
      <div className="research-split">
        {/* Left side - Cards grid */}
        <div className="research-cards-section">
          <div className="cards-grid-2x2">
            {researchCards.map((card) => {
              const IconComponent = card.Icon;
              return (
                <div key={card.id} className="research-card">
                  <div className="research-card-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="research-card-content">
                    <div className="research-card-title">{card.title}</div>
                    <div className="research-card-description">{card.description}</div>
                    <div className="research-card-method">{card.methodType}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider line */}
        <div className="research-divider"></div>

        {/* Right side - Image */}
        <div className="research-image-section">
          <img 
            src="diagrams/researchMethods.png" 
            alt="Research Methods Diagram"
            className="research-methods-image"
          />
        </div>
      </div>
    </div>
  );
}
