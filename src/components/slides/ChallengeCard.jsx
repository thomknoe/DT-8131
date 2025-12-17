import React from "react";
import "../../styles/ChallengeCard.css";

export default function ChallengeCard({ title, description, keywords, Icon }) {
  return (
    <div className="challenge-card">
      <div className="challenge-card-icon-container">
        {Icon && <Icon size={24} />}
      </div>
      <div className="challenge-card-content">
        <div className="challenge-card-text-left">
          <h3 className="challenge-card-title">{title}</h3>
          <p className="challenge-card-description">{description}</p>
          {keywords && (
            <div className="challenge-card-keywords">{keywords}</div>
          )}
        </div>
      </div>
    </div>
  );
}

