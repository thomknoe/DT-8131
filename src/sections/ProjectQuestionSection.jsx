import React from "react";
import Section from "../components/Section";

export default function ProjectQuestionSection() {
  return (
    <Section title={null} overrideStyles>
      <div className="flex items-center justify-center w-full h-full px-[4vw] sm:px-[6vw] py-4 sm:py-6">
        <p
          className="
            text-center md:text-left
            font-light text-white/90
            leading-snug sm:leading-normal md:leading-relaxed
            text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl
            max-w-[900px]
            transition-all duration-500
          "
        >
          How might we design AI-assisted and procedural world-building systems that translate
          player interaction into dynamic environments and evolving narratives —
          enabling spaces for emergence, experimentation, and play?
        </p>
      </div>
    </Section>
  );
}
