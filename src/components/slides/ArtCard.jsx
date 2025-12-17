import React from "react";
import "../../styles/ArtCard.css";

export default function ArtCard({ title, subtitle, description, imageSrc = null, href = "#" }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="art-card-link">
      <div className="art-card">
        <div className="card-image-container">
          {imageSrc ? (
            <img src={imageSrc} alt={title} className="card-image" />
          ) : (
          <div className="card-image-placeholder">
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
          <div className="card-text-overlay">
            <div className="card-text-content">
              <div className="card-text-left">
                <h3 className="card-title">{title}</h3>
                <p className="card-subtitle">{subtitle}</p>
                {description && (
                  <p className="card-description">{description}</p>
                )}
              </div>
              <div className="card-text-right">
                <svg
                  className="card-link-arrow"
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
        </div>
      </div>
    </a>
  );
}

