import React, { useState, useEffect } from "react";
import "../../styles/TitleBuffer.css";

export default function TitleBuffer() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    // Show scroll indicator after a short delay
    const scrollIndicatorTimer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 1000);

    return () => {
      clearTimeout(scrollIndicatorTimer);
    };
  }, []);

  return (
    <div className="title-buffer">
      <div className="title-buffer-content">
        <h1 className="main-title">
          helloworld.js
        </h1>
        <p className="subtitle">
          Towards computational design for interactive, web-based 3D
          environments using procedural algorithms and object-oriented systems for
          real-time authorship.
        </p>
      </div>
      {showScrollIndicator && (
        <div className="scroll-indicator">
          <div className="scroll-text">Scroll down</div>
          <div className="scroll-arrow">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

