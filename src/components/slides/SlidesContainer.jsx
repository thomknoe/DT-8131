import React, { useRef, useEffect } from "react";
import "../../styles/SlidesContainer.css";

export default function SlidesContainer({ children }) {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="slides-container">
      {children}
    </div>
  );
}

