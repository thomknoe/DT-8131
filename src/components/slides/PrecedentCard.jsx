import React from "react";
import "../../styles/PrecedentCard.css";

export default function PrecedentCard({ title, description, P5Sketch, href = "#" }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="precedent-card-link">
      <div className="precedent-card">
        <div className="card-sketch-container">
          <div className="card-sketch-wrapper">
            {P5Sketch && <P5Sketch />}
          </div>
          <div className="card-text-overlay">
            <div className="card-text-content">
              <div className="card-text-left">
                <h3 className="card-title">{title}</h3>
                <p className="card-subtitle">{description}</p>
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

