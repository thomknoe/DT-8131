import React from "react";
import Section from "../components/Section";

export default function ModelDiagramSection() {
  return (
    <Section title={null} overrideStyles>
      <div className="w-full h-full bg-white flex items-center justify-center p-0 m-0">
        <iframe
          frameBorder="0"
          width="100%"
          height="100%"
          src="https://my.machinations.io/d/copy-of-copy-of-consecutive-hits-dealing-extra-damage-/25ac5d46afe311f0865c0abc5ce0dcc9"
          style={{
            backgroundColor: "transparent",
            borderStyle: "none",
            borderWidth: 0,
            overflow: "hidden",
          }}
          allowFullScreen
        />
      </div>
    </Section>
  );
}
