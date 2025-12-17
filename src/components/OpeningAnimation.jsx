import React, { useState, useEffect } from "react";
import "../styles/OpeningAnimation.css";

export default function OpeningAnimation() {
  const [phase, setPhase] = useState("initial"); // initial -> title -> subtitle -> reveal
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Phase 1: Title fade in (starts immediately, takes 2.5 seconds)
    const titleTimer = setTimeout(() => {
      setPhase("title");
    }, 100);

    // Phase 2: Subtitle fade in (starts after title is visible, takes 2.5 seconds)
    const subtitleTimer = setTimeout(() => {
      setPhase("subtitle");
    }, 2800);

    // Phase 3: Hold both visible for 1.5 seconds
    const holdTimer = setTimeout(() => {
      setPhase("reveal");
    }, 5500);

    // Phase 4: Fade out black background (takes 2 seconds)
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
          helloworld.js
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

