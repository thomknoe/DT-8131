import React, { useState, useEffect } from "react";
import "../styles/OpeningAnimation.css";

export default function OpeningAnimation() {
  const [phase, setPhase] = useState("initial");
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const titleTimer = setTimeout(() => {
      setPhase("title");
    }, 100);

    const subtitleTimer = setTimeout(() => {
      setPhase("subtitle");
    }, 2800);

    const holdTimer = setTimeout(() => {
      setPhase("reveal");
    }, 5500);

    const revealTimer = setTimeout(() => {
      setShowOverlay(false);
    }, 6000);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(holdTimer);
      clearTimeout(revealTimer);
    };
  }, []);

  return (
    <div className="opening-animation">
      <div
        className={`black-overlay ${showOverlay ? "visible" : "faded-out"}`}
      />
      <div className={`opening-content ${!showOverlay ? "faded-out" : ""}`}>
        <h1
          className={`main-title ${phase !== "initial" ? "fade-in" : ""}`}
        >
          Hello Worlds
        </h1>
        <p
          className={`subtitle ${
            phase === "subtitle" || phase === "reveal" ? "fade-in" : ""
          }`}
        >
          Towards computational design for interactive, web-based 3D
          environments using procedural algorithms and object-oriented systems for
          real-time authorship.
        </p>
      </div>
    </div>
  );
}

