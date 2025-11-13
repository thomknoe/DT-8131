import React from "react";
import Section from "../components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountainCity,
  faUsers,
  faMapLocationDot,
  faHandshake,
  faImage,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";

const precedents = [
  {
    icon: faMountainCity,
    title: "Dynamic Terrain and Building Generation",
    description:
      "Procedural algorithms and AI tools like Google Genie enable scalable, diverse landscapes and structures.",
    type: "Procedural Generation",
  },
  {
    icon: faUsers,
    title: "Organic NPC Interaction and Organization",
    description:
      "Agent-based AI and LLM-driven dialogue for emergent social systems, inspired by MVI-frameworks.",
    type: "AI Systems",
  },
  {
    icon: faMapLocationDot,
    title: "Choice, Story, and Narrative Emergence",
    description:
      "AI-driven branching narrative systems to enable dynamic quests and storytelling like No Man's Sky.",
    type: "Narrative Design",
  },
  {
    icon: faHandshake,
    title: "Procedural Verbs and Compound Mechanics",
    description:
      "Combinatorial action systems, grammar-based simulations, and language parsing for agency.",
    type: "Systemic Design",
  },
  {
    icon: faImage,
    title: "User-Generated Content and Modifications",
    description:
      "Player-driven creation, 3D assets facilitated through databases, local storage, or P2P data.",
    type: "Participatory Creation",
  },
  {
    icon: faPeopleArrows,
    title: "Player Sharing and Collaboration",
    description:
      "Multiplayer collaboration via cloud tech (WebRTC, CRDTs), like MMO RPGs or Minecraft Servers.",
    type: "Networked Systems",
  },
];

export default function KeyPrecedentsSection() {
  return (
    <Section title="Key Precedents — Base Parameters">
      <div
        className="
          relative w-full h-full flex flex-col justify-center items-center
          px-[3vw] sm:px-[4vw] md:px-[5vw]
          overflow-hidden
        "
      >
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-2 sm:gap-3 md:gap-4
            w-full h-full max-w-[1100px]
            place-items-center
          "
        >
          {precedents.map((precedent, i) => (
            <div
              key={i}
              className="
                relative w-full h-full
                bg-white/10 border border-white/20
                backdrop-blur-md shadow-md
                flex flex-col items-center justify-center text-center
                hover:shadow-2xl transition-all duration-500
                overflow-hidden
                p-[1.5%] sm:p-[2%] md:p-[2.5%]
              "
              style={{
                aspectRatio: "2 / 3",
                maxHeight: "420px",
              }}
            >
              {/* --- Icon --- */}
              <FontAwesomeIcon
                icon={precedent.icon}
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
                {precedent.title}
              </h3>

              {/* --- Description --- */}
              <p
                className="
                  text-[clamp(0.6rem,0.7vw,0.75rem)]
                  text-white/80 leading-snug mb-[0.5em] max-w-[85%]
                  line-clamp-4 md:line-clamp-5 lg:line-clamp-6
                "
              >
                {precedent.description}
              </p>

              {/* --- Type Pill --- */}
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
                {precedent.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
