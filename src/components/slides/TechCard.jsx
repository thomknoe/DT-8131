import React from "react";
import "../../styles/TechCard.css";

export default function TechCard({ title, description, imageSrc, href = "#" }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="tech-card-link">
      <div className="tech-card">
        <div className="tech-card-image-container">
          {imageSrc ? (
            <img src={imageSrc} alt={title} className="tech-card-image" />
          ) : (
            <div className="tech-card-placeholder">
              <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none">
                <rect width="200" height="200" fill="rgba(255, 255, 255, 0.1)" />
                <path
                  d="M60 60L140 140M140 60L60 140"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="tech-card-content">
          <div className="tech-card-text-left">
            <h3 className="tech-card-title">{title}</h3>
            <p className="tech-card-description">{description}</p>
          </div>
          <div className="tech-card-text-right">
            <svg
              className="tech-card-link-arrow"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 12L12 4M12 4H6M12 4V10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}

