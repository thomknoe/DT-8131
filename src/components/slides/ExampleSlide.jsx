import React from "react";
import SlideContainer from "./SlideContainer";

export default function ExampleSlide() {
  return (
    <SlideContainer>
      <h2 style={{ color: "#ffffff", fontSize: "2.5rem", marginBottom: "1rem" }}>
        Example Slide
      </h2>
      <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "1.2rem" }}>
        This is a template slide with glass aesthetic
      </p>
    </SlideContainer>
  );
}

