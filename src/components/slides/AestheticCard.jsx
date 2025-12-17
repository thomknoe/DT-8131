import React from "react";
import "../../styles/AestheticCard.css";

export default function AestheticCard({ title, subtitle, imageSrc }) {
  return (
    <div className="aesthetic-card">
      <div className="aesthetic-card-image-container">
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="aesthetic-card-image" />
        ) : (
          <div className="aesthetic-card-placeholder">
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
      <div className="aesthetic-card-text-overlay">
        <div className="aesthetic-card-text-content">
          <div className="aesthetic-card-text-left">
            <h3 className="aesthetic-card-title">{title}</h3>
            <p className="aesthetic-card-subtitle">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

