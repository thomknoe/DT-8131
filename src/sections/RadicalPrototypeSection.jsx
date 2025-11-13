/* eslint-disable no-unused-vars */
import React from "react";
import Section from "../components/Section";
import FullscreenImage from "../components/FullScreenImage";

export default function RadicalPrototypeSection() {
  return (
    <Section title={null} overrideStyles>
      <div className="w-full h-full bg-white flex items-center justify-center p-0 m-0">
        <FullscreenImage
          src="images/radical-prototype.png"
          alt="Radical Prototype"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </Section>
  );
}
