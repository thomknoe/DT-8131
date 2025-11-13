import React from "react";
import Section from "../components/Section";

export default function PortersForcesSection() {
  const forces = [
    {
      name: "1. Bargaining Power of Buyers",
      level: "↑ High Force",
      explanation:
        "Indie developers, small studios, and educators expect affordable, flexible, and interoperable creation tools.",
    },
    {
      name: "2. Bargaining Power of Suppliers",
      level: "↓ Low Force",
      explanation:
        "Because engines, AI frameworks, and cloud infrastructure are largely open or commoditized, supplier control is limited.",
    },
    {
      name: "3. Industry Rivalry",
      level: "↑ High Force",
      explanation:
        "A crowded field of creative simulation platforms—from Unity and Unreal to emerging AI world builders etc.",
    },
    {
      name: "4. Threat of New Entrants",
      level: "~ Moderate Force",
      explanation:
        "New entrants can leverage AI to accelerate development, but sustaining engagement requires deep ecosystems.",
    },
    {
      name: "5. Threat of Substitutes",
      level: "↑ High Force",
      explanation:
        "Sandbox games and generative platforms—like Minecraft or Firefly—offer similar creative potential and opportunities.",
    },
  ];

  return (
    <Section title="Barriers to Entry — Porter’s Five Forces">
      <div
        className="
          relative w-full h-full flex flex-col justify-center items-center
          px-[3vw] sm:px-[4vw] md:px-[5vw]
          overflow-hidden
        "
      >
        <div
          className="
            flex flex-col w-full max-w-[1100px]
            gap-[0.4rem] sm:gap-[0.5rem] md:gap-[0.6rem]
          "
        >
          {forces.map((force, idx) => (
            <div
              key={idx}
              className="
                relative w-full
                bg-white/10 border border-white/20
                backdrop-blur-md shadow-md
                text-white transition-all duration-500
                flex flex-col justify-center
                px-[0.9rem] py-[0.7rem] sm:px-[1rem] sm:py-[0.8rem]
              "
            >
              {/* --- Title + Pill --- */}
              <div
                className="
                  flex items-center justify-between flex-wrap
                  mb-[0.3em]
                "
              >
                <h3
                  className="
                    font-semibold leading-snug
                    text-[clamp(0.7rem,0.8vw,0.9rem)]
                    max-w-[85%] line-clamp-2 sm:line-clamp-1
                    overflow-hidden text-ellipsis
                  "
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                  }}
                >
                  {force.name}
                </h3>

                <span
                  className="
                    px-[0.4em] py-[0.15em]
                    rounded-full border border-white/25 bg-white/10 text-white/70
                    backdrop-blur-sm whitespace-nowrap
                    text-[clamp(0.48rem,0.55vw,0.6rem)]
                    line-clamp-1
                  "
                >
                  {force.level}
                </span>
              </div>

              {/* --- Description --- */}
              <p
                className="
                  text-white/75
                  text-[clamp(0.55rem,0.7vw,0.8rem)]
                  leading-snug max-w-[95%]
                  line-clamp-2 sm:line-clamp-3 md:line-clamp-4 lg:line-clamp-none
                  overflow-hidden text-ellipsis
                "
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                }}
              >
                {force.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
