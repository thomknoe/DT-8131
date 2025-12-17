import React from "react";
import "../../styles/LiteratureCard.css";

export default function LiteratureCard({ title, author, abstract, imageSrc, showLink = true, href = "#" }) {
  const CardContent = () => (
    <div className="literature-card">
      <div className="literature-card-image-container">
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="literature-card-image" />
        ) : (
          <div className="literature-card-placeholder">
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
      <div className="literature-card-content">
        <div className="literature-card-header">
          <h3 className="literature-card-title">{title}</h3>
          {author && (
            <p className="literature-card-author">{author}</p>
          )}
        </div>
        <div className={`literature-card-abstract ${!showLink ? 'full-text' : ''}`}>
          <p className="literature-card-abstract-text">{abstract}</p>
        </div>
        {showLink && (
          <div className="literature-card-link">
            <svg
              className="literature-card-link-arrow"
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
        )}
      </div>
    </div>
  );

  if (showLink) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="literature-card-link-wrapper">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
}

