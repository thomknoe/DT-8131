import React, { useState, useEffect } from "react";
import "../../styles/StoryboardForkingPath.css";

export default function StoryboardForkingPath({ onPaginationChange }) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 3;

  const pages = [
    {
      id: 1,
      imageSrc: "storyboards/goodPath.png",
      alt: "Good Path Storyboard"
    },
    {
      id: 2,
      imageSrc: "storyboards/neutralPath.png",
      alt: "Neutral Path Storyboard"
    },
    {
      id: 3,
      imageSrc: "storyboards/badPath.png",
      alt: "Bad Path Storyboard"
    }
  ];

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

  useEffect(() => {
    if (onPaginationChange) {
      onPaginationChange({
        currentPage,
        totalPages,
        onPageChange: handlePageChange
      });
    }
  }, [currentPage, totalPages, onPaginationChange]);

  return (
    <div className="storyboard-forking-path-container">
      {pages.map((page, index) => (
        <div 
          key={page.id}
          className={`storyboard-page ${index === currentPage ? 'active' : ''}`}
        >
          <div className="storyboard-image-wrapper">
            {page.imageSrc ? (
              <img 
                src={page.imageSrc} 
                alt={page.alt}
                className="storyboard-image"
              />
            ) : (
              <div className="storyboard-image-placeholder">
                <svg width="100%" height="100%" viewBox="0 0 400 600" fill="none">
                  <rect width="400" height="600" fill="rgba(0, 0, 0, 0.1)" />
                  <rect x="20" y="20" width="360" height="560" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" strokeDasharray="8 8" />
                  <text x="200" y="280" textAnchor="middle" fill="rgba(255, 255, 255, 0.4)" fontSize="24" fontFamily="system-ui">
                    Longform Image Placeholder
                  </text>
                  <text x="200" y="310" textAnchor="middle" fill="rgba(255, 255, 255, 0.3)" fontSize="16" fontFamily="system-ui">
                    Page {index + 1} of {totalPages}
                  </text>
                </svg>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

