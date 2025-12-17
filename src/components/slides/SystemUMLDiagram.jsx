import React, { useState, useEffect } from "react";
import "../../styles/SystemUMLDiagram.css";

export default function SystemUMLDiagram({ onPaginationChange }) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 3;

  useEffect(() => {
    if (onPaginationChange) {
      onPaginationChange({
        currentPage,
        totalPages,
        onPageChange: setCurrentPage
      });
    }
  }, [currentPage, totalPages, onPaginationChange]);

  const diagrams = [
    { src: "diagrams/systemDiagram.png", alt: "System Diagram" },
    { src: "diagrams/UMLDiagram.png", alt: "UML Diagram" },
    { src: "diagrams/sequencingDiagram.png", alt: "Sequencing Diagram" }
  ];

  return (
    <div className="system-uml-container">
      <div className="diagram-pages">
        {diagrams.map((diagram, index) => (
          <div 
            key={index} 
            className={`diagram-page ${index === currentPage ? 'active' : ''}`}
          >
            <img 
              src={diagram.src} 
              alt={diagram.alt}
              className="diagram-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
