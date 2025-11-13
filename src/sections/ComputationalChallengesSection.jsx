import React from "react";
import Section from "../components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faCube,
  faSliders,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";

const computationalChallenges = [
  {
    icon: faTachometerAlt,
    title: "Computational Efficiency",
    description:
      "Balancing world fidelity, interaction density, and processing load — ensuring smooth performance across varying device capabilities and expanding world scales.",
    type: "Systems Performance",
  },
  {
    icon: faCube,
    title: "Real-Time Rendering",
    description:
      "Managing the real-time display of complex, populated environments — addressing latency, frame drops, and the cost of rendering numerous dynamic objects and shaders.",
    type: "Rendering & Memory",
  },
  {
    icon: faSliders,
    title: "Generative Novelty",
    description:
      "Assessing the diversity and coherence of AI-generated or procedural outputs — ensuring that systems create truly dynamic stories, not repetitive or predictable worlds.",
    type: "AI & Content Generation",
  },
  {
    icon: faUniversalAccess,
    title: "User Accessibility & Cognitive Load",
    description:
      "Designing interfaces and interactions that remain navigable and clear, even as system complexity scales — preventing cognitive overload while retaining rich player agency.",
    type: "User Experience",
  },
];

export default function ComputationalChallengesSection() {
  return (
    <Section title="Computational Challenges — Technical & User Experience">
      <div
        className="
          relative w-full h-full flex flex-col justify-center items-center
          px-[3vw] sm:px-[4vw] md:px-[5vw]
          overflow-hidden
        "
      >
        {/* 2×2 Grid */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2
            gap-2 sm:gap-3 md:gap-4
            w-full h-full max-w-[1100px]
            place-items-center
          "
        >
          {computationalChallenges.map((challenge, i) => (
            <div
              key={i}
              className="
                relative w-full h-full
                bg-white/10 border border-white/20
                backdrop-blur-md overflow-hidden shadow-md
                flex flex-col items-center justify-center text-center text-white
                hover:shadow-2xl transition-all duration-500
                p-[1.5%] sm:p-[2%] md:p-[2.5%]
              "
              style={{
                aspectRatio: '2 / 3',
                maxHeight: '420px',
              }}
            >
              {/* --- Icon --- */}
              <FontAwesomeIcon
                icon={challenge.icon}
                className="text-white/90 mb-[0.4em]"
                style={{ fontSize: 'clamp(1.3rem, 1.5vw, 1.7rem)' }}
              />

              {/* --- Title --- */}
              <h3
                className="
                  font-semibold leading-snug mb-[0.4em] max-w-[90%]
                  text-[clamp(0.7rem,0.85vw,0.95rem)]
                  line-clamp-2
                "
              >
                {challenge.title}
              </h3>

              {/* --- Description --- */}
              <p
                className="
                  text-[clamp(0.6rem,0.7vw,0.75rem)]
                  text-white/80 leading-snug mb-[0.5em] max-w-[85%]
                  line-clamp-4 md:line-clamp-5 lg:line-clamp-6
                "
              >
                {challenge.description}
              </p>

              {/* --- Pill --- */}
              <span
                className="
                  mt-[0.2em]
                  px-[0.55em] py-[0.2em]
                  rounded-full border border-white/25 bg-white/10 text-white/70
                  backdrop-blur-sm whitespace-nowrap
                  text-[clamp(0.55rem,0.65vw,0.7rem)]
                  line-clamp-1
                "
              >
                {challenge.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
