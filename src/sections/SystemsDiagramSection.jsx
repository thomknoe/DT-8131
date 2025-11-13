import React from "react";
import Section from "../components/Section";
import FullscreenImage from "../components/FullScreenImage";

export default function SystemsDiagramSection() {
  return (
    <Section title={null} overrideStyles>
      <div className="w-full h-full bg-white flex items-center justify-center p-0 m-0">
        <FullscreenImage
          src="images/systems-diagram.png"
          alt="Systems Diagram"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </Section>
  );
}
