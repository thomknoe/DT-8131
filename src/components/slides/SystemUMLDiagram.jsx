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

  return (
    <div className="system-uml-container">
      <div className="diagram-pages">
        {currentPage === 0 && (
          <div className="diagram-page">
            <img 
              src="diagrams/systemDiagram.png" 
              alt="System Diagram"
              className="diagram-image"
            />
          </div>
        )}
        {currentPage === 1 && (
          <div className="diagram-page">
            <img 
              src="diagrams/UMLDiagram.png" 
              alt="UML Diagram"
              className="diagram-image"
            />
          </div>
        )}
        {currentPage === 2 && (
          <div className="diagram-page">
            <img 
              src="diagrams/sequencingDiagram.png" 
              alt="Sequencing Diagram"
              className="diagram-image"
            />
          </div>
        )}
      </div>
    </div>
  );
}
