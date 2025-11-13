/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Section from "../components/Section";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Tech stack entries
const entries = [
  {
    name: "Three.js",
    form: "3D Web Graphics Engine",
    image: "images/tech/threejs.png",
    link: "https://threejs.org/",
  },
  {
    name: "React + TailwindCSS",
    form: "UI Framework & Styling",
    image: "images/tech/react-tailwind.png",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Vite",
    form: "Build Tool & Dev Server",
    image: "images/tech/vite.png",
    link: "https://vitejs.dev/",
  },
  {
    name: "React-Flow",
    form: "Interactive Graphs & Nodes",
    image: "images/tech/react-flow.png",
    link: "https://reactflow.dev/",
  },
  {
    name: "Stable Diffusion",
    form: "Image Generation Model",
    image: "images/tech/stable-diffusion.png",
    link: "https://stability.ai/stable-diffusion",
  },
  {
    name: "OpenAI Chat Completion",
    form: "Text-Based Generative API",
    image: "images/tech/openai-chat.png",
    link: "https://platform.openai.com/docs/guides/gpt",
  },
  {
    name: "ElevenLabs TTS",
    form: "Voice Synthesis API",
    image: "images/tech/elevenlabs.png",
    link: "https://www.elevenlabs.io/",
  },
    {
    name: "Stable Fast 3D",
    form: "Image-to-3D Mesh Generation",
    image: "images/tech/stable-fast-3d.gif",
    link: "https://www.stablefast3d.com",
  },
  {
    name: "geotic",
    form: "Entity-Component System",
    image: "images/tech/geotic.gif",
    link: "https://github.com/ddmills/geotic",
  },
  {
    name: "XState",
    form: "State Machine Library",
    image: "images/tech/xstate.png",
    link: "https://xstate.js.org",
  },
  {
    name: "recast-navigation-js",
    form: "NavMesh Pathfinding",
    image: "images/tech/recast.png",
    link: "https://github.com/isaac-mason/recast-navigation-js/tree/main",
  },
  {
    name: "json-rules-engine",
    form: "Rules-Based Logic Engine",
    image: "images/tech/json-rules-engine.png",
    link: "https://github.com/CacheControl/json-rules-engine",
  },
];

// Group into pages of 4
const chunk = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const pages = chunk(entries, 4);

export default function TechStackSection() {
  const [pageIndex, setPageIndex] = useState(0);
  const goNext = () => setPageIndex((p) => Math.min(p + 1, pages.length - 1));
  const goPrev = () => setPageIndex((p) => Math.max(p - 1, 0));

  return (
    <Section title="Technology Stack — Frameworks, APIs, Models">
      <div className="relative w-full h-full flex flex-col justify-center items-center px-[3vw] sm:px-[4vw] md:px-[5vw] overflow-hidden">
        {/* Navigation Arrows */}
        {pageIndex > 0 && (
          <button
            onClick={goPrev}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 
              p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full 
              text-white z-20 transition cursor-pointer"
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
              text-white z-20 transition cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>
        )}

        {/* Carousel Grid */}
        <div className="relative w-full h-[100%] max-w-[1000px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={pageIndex}
              initial={{ opacity: 0, x: pageIndex > 0 ? 40 : -40, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: pageIndex > 0 ? -40 : 40, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 grid-rows-2 gap-2 sm:gap-3 md:gap-4 w-full h-full place-items-center"
            >
              {pages[pageIndex].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.35 }}
                    className="relative w-full h-full bg-white/10 border border-white/20 backdrop-blur-md overflow-hidden shadow-md flex flex-col justify-end hover:shadow-2xl hover:ring-2 hover:ring-white/30 transition-all duration-500"
                    style={{
                      aspectRatio: "4 / 3",
                      maxHeight: "260px",
                    }}
                  >
                    {/* Background Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent pointer-events-none" />

                    {/* Text Content */}
                    <div className="relative z-10 p-3 sm:p-4 text-white">
                      <h3 className="text-base md:text-lg font-semibold leading-tight truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm italic text-white/80 truncate">
                        {item.form}
                      </p>
                    </div>
                  </motion.div>
                </a>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
