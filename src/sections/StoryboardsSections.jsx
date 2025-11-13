/* eslint-disable no-unused-vars */
// src/sections/StoryboardsSection.jsx
import React, { useState } from "react";
import Section from "../components/Section";
import FullscreenImage from "../components/FullscreenImage";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const storyboardImages = [
  "images/storyboards/Storyboard_1.png",
  "images/storyboards/Storyboard_2.png",
  "images/storyboards/Storyboard_3.png",
];

export default function StoryboardsSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % storyboardImages.length);
  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? storyboardImages.length - 1 : prev - 1
    );

  return (
    <Section title="Storyboards — Good, Unexpected, Disaster">
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* --- Navigation Arrows --- */}
        <button
          onClick={prev}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20
                     p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full
                     text-white transition cursor-pointer"
          aria-label="Previous"
        >
          <ChevronLeft size={26} />
        </button>

        <button
          onClick={next}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20
                     p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full
                     text-white transition cursor-pointer"
          aria-label="Next"
        >
          <ChevronRight size={26} />
        </button>

        {/* --- Animated Carousel Image --- */}
        <div className="relative w-full h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <FullscreenImage
                src={storyboardImages[index]}
                alt={`Storyboard ${index + 1}`}
                className="w-full h-full object-contain select-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
    </Section>
  );
}
