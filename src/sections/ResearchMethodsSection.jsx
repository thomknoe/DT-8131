import React from "react";
import Section from "../components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faSitemap,
  faMicrochip,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";

const researchMethods = [
  {
    icon: faGamepad,
    title: "Playtesting",
    description:
      "Observing player engagement and emergent behavior to assess how users explore mechanics, interact with systems, and interpret feedback.",
    type: "Qualitative Methods",
  },
  {
    icon: faSitemap,
    title: "Choice Mapping",
    description:
      "Diagramming and visualizing branching narrative structures to identify decision density, dead ends, and systemic balance for player experience in virtual worlds.",
    type: "Mixed Methods",
  },
  {
    icon: faMicrochip,
    title: "Computational Performance",
    description:
      "Measuring how efficiently the system allocates CPU and memory resources as simulated worlds expand—tracking scalability, load, and procedural generation cost over time.",
    type: "Quantitative Methods",
  },
  {
    icon: faPersonChalkboard,
    title: "Contextual Inquiry",
    description:
      "Ethnographic observations and interviewing to uncover how participants interpret and navigate the designed environment in real or simulated contexts.",
    type: "Qualitative Methods",
  },
];

export default function ResearchMethodsSection() {
  return (
    <Section title="Research Methods — Qualitative, Quantitative, Mixed">
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
          {researchMethods.map((method, i) => (
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
                aspectRatio: "2 / 3",
                maxHeight: "420px",
              }}
            >
              {/* --- Icon --- */}
              <FontAwesomeIcon
                icon={method.icon}
                className="text-white/90 mb-[0.4em]"
                style={{ fontSize: "clamp(1.3rem, 1.5vw, 1.7rem)" }}
              />

              {/* --- Title --- */}
              <h3
                className="
                  font-semibold leading-snug mb-[0.4em] max-w-[90%]
                  text-[clamp(0.7rem,0.85vw,0.95rem)]
                  line-clamp-2
                "
              >
                {method.title}
              </h3>

              {/* --- Description --- */}
              <p
                className="
                  text-[clamp(0.6rem,0.7vw,0.75rem)]
                  text-white/80 leading-snug mb-[0.5em] max-w-[85%]
                  line-clamp-4 md:line-clamp-5 lg:line-clamp-6
                "
              >
                {method.description}
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
                {method.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
