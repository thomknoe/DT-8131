/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Section from "../components/Section";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const entries = [
  { name: "Minecraft", studio: "Mojang, Microsoft", form: "Sandbox Builder", image: "images/games/minecraft.png" },
  { name: "Spore", studio: "Maxis, EA", form: "Evolutionary Sandbox", image: "images/games/spore.png" },
  { name: "The Sims", studio: "Maxis, EA", form: "Character Simulator", image: "images/games/sims.png" },
  { name: "No Man Sky", studio: "Hello Games", form: "Procedural Universe", image: "images/games/no-man-sky.png" },
  { name: "Genie 3", studio: "Google DeepMind", form: "AI Generated Worlds", image: "images/engines/genie-3.png" },
  { name: "Twine", studio: "Chris Klimas", form: "Interactive Narrative", image: "images/engines/twine.png" },
  { name: "Unity", studio: "Unity Technologies", form: "Game Engine", image: "images/engines/unity.png" },
  { name: "VLGE", studio: "[VIL] + [IJ]", form: "AI Generated Assets", image: "images/engines/vlge.png" },
  { name: "Frank Lloyd Wright", studio: "Broadacre City", form: "Suburban Utopia", image: "images/styles/utopia.png" },
  { name: "James Turrel", studio: "Light Form", form: "Installation", image: "images/styles/turrel.png" },
  { name: "Karim Rashid", studio: "Heartbeat", form: "Furniture", image: "images/styles/karim.png" },
  { name: "Hieronymus Bosch", studio: "Garden of Earthly Delights", form: "Painting", image: "images/styles/garden.png" },
];

const chunk = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const pages = chunk(entries, 4);

export default function StudyOfConstituenciesSection() {
  const [pageIndex, setPageIndex] = useState(0);
  const goNext = () => setPageIndex((p) => Math.min(p + 1, pages.length - 1));
  const goPrev = () => setPageIndex((p) => Math.max(p - 1, 0));

  return (
    <Section title="Study of Constituencies — Games, Engines, Styles">
      <div
        className="
          relative w-full h-full flex flex-col justify-center items-center
          px-[3vw] sm:px-[4vw] md:px-[5vw]
          overflow-hidden
        "
      >
        {/* --- Navigation Arrows --- */}
        {pageIndex > 0 && (
          <button
            onClick={goPrev}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 
              p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full 
              text-white z-20 transition cursor-pointer cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        {pageIndex < pages.length - 1 && (
          <button
            onClick={goNext}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 
              p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full 
              text-white z-20 transition cursor-pointer cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>
        )}

        {/* --- Carousel --- */}
        <div className="relative w-full h-[100%] max-w-[1000px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={pageIndex}
              initial={{ opacity: 0, x: pageIndex > 0 ? 40 : -40, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: pageIndex > 0 ? -40 : 40, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2
                grid-rows-2 gap-2 sm:gap-3 md:gap-4
                w-full h-full place-items-center
              "
            >
              {pages[pageIndex].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.35 }}
                  className="
                    relative w-full h-full
                    bg-white/10 border border-white/20
                    backdrop-blur-md overflow-hidden shadow-md
                    flex flex-col justify-end
                    hover:shadow-2xl transition-all duration-500
                  "
                  style={{
                    aspectRatio: "4 / 3",
                    maxHeight: "260px",
                  }}
                >
                  {/* Background image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent pointer-events-none" />

                  {/* Text */}
                  <div className="relative z-10 p-3 sm:p-4 text-white">
                    <h3 className="text-base md:text-lg font-semibold leading-tight truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70">{item.studio}</p>
                    <p className="text-xs sm:text-sm italic text-white/80 truncate">
                      {item.form}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
