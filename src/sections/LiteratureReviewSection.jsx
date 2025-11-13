/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Section from "../components/Section";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const entries = [
  {
    title:
      "Algorithms and Approaches for Procedural Terrain Generation – A Brief Review of Current Techniques",
    author: "Thomas J. Rose & Anastasios G. Bakaoukas",
    type: "Paper",
    image: "images/papers/generative-terrain.png",
    abstract:
      "This technical review surveys algorithms for procedural terrain generation (PTG) in virtual environments — from classic noise functions (Perlin, Simplex, Worley, Diamond–Square) to evolutionary algorithms, erosion models, and agent-based terrain sculpting.",
    link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7590336",
  },
  {
    title:
      "The Past, Present & Future of Interactive Narrative Storytelling: Multi-Branching Narratives”",
    author: "Louis Alfieri (in dialogue with Tim Madison, Raven Sun Creative)",
    type: "Article",
    image: "images/papers/choice-design.png",
    abstract:
      "Alfieri and Madison outline architectures of interactive storytelling—from “string of pearls” and “branch-and-bottleneck” to “map of many endings” and “open-world” structures—and discuss the limits of branching design versus the promise of AI-driven emergent narrative systems.",
    link: "https://blooloop.com/theme-park/opinion/multi-branching-narrative/",
  },
  {
    title: "Minimum Viable Interiority",
    author: "Iulia Ionescu, Murad Khan, Alasdair Milde, & Cezar Mocan",
    type: "Paper",
    image: "images/papers/mvi.png",
    abstract:
      "This paper theorizes how interiority—a sense of subjective agency—can emerge from systems of collective intelligence. It uses pandemonium architecture (layered decision “daemons”) and agent-based modeling (via DeepMind’s Concordia library) to suggest how NPCs might develop minimal forms of “selfhood” through functional closure.",
    link: "https://cdn.sanity.io/files/y9ih15q4/production/8582841485d5ea4af7e875c42d735fae267bfc76.pdf",
  },
  {
    title: "Speculative Everything: Design, Fiction, and Social Dreaming",
    author: "Anthony Dunne & Fiona Raby (MIT Press, 2013)",
    type: "Book",
    image: "images/papers/spec-everything.png",
    abstract:
      "Dunne & Raby propose speculative design as a means to imagine alternative futures, using design artifacts as philosophical provocations rather than commercial solutions. Their framework emphasizes “critical fiction”, “narrative prototypes”, and the construction of possible worlds as a design method.",
    link: "https://mitpress.mit.edu/9780262019842/speculative-everything/",
  },
  {
    title: "The Art of Game Design: A Book of Lenses",
    author: "Jesse Schell (CRC Press, 1st ed. 2008; 3rd ed. 2020)",
    type: "Book",
    image: "images/papers/art-of-games.png",
    abstract:
      "Schell provides a systematic framework for designing interactive experiences through a set of conceptual “lenses” (player psychology, aesthetics, mechanics, story, technology). It bridges formal game design with systems thinking and experience design.",
    link: "https://www.crcpress.com/The-Art-of-Game-Design-A-Book-of-Lenses/Schell/p/book/9781138632059",
  },
  {
    title: "The Aesthetics of Our New Fictions",
    author: "Caio Braga, Fabrício Teixeira, & Luciano Infanti",
    type: "Article",
    image: "images/papers/new-fiction.png",
    abstract:
      "This essay examines how design aesthetics construct, reinforce, and evolve the social fictions that underpin human cooperation—from money and national identity to the emerging mythologies of AI, Web3, and the metaverse. Drawing on Harari, Graeber, and Stewart Brand, the authors argue that design’s power lies in its ability to make fiction feel real through shared symbols and visual codes.",
    link: "https://www.doc.cc/articles/the-aesthetics-of-our-new-fictions",
  },
];

const pages = [entries.slice(0, 3), entries.slice(3, 6)];

export default function LiteratureReviewSection() {
  const [pageIndex, setPageIndex] = useState(0);

  const goNext = () =>
    setPageIndex((prev) => Math.min(prev + 1, pages.length - 1));
  const goPrev = () => setPageIndex((prev) => Math.max(prev - 1, 0));

  return (
    <Section title="Literature Review — Papers, Articles, Books">
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

        {/* --- Carousel --- */}
        <div className="relative w-full h-[100%] max-w-[1100px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={pageIndex}
              initial={{ opacity: 0, x: pageIndex > 0 ? 40 : -40, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: pageIndex > 0 ? -40 : 40, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                gap-2 sm:gap-3 md:gap-4
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
                    flex flex-col justify-start
                    hover:shadow-2xl transition-all duration-500
                  "
                  style={{
                    aspectRatio: "2 / 3",
                    maxHeight: "420px",
                  }}
                >
                  {/* --- Image --- */}
                  <div className="relative aspect-[3/2] w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent pointer-events-none" />
                  </div>

                  {/* --- Text Content --- */}
                  <div className="relative z-10 p-3 sm:p-4 flex flex-col text-white flex-1">
                    <h3 className="text-base sm:text-lg font-semibold leading-tight mb-1 truncate">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 mb-2">
                      {item.author} — {item.type}
                    </p>
                    <p className="text-xs sm:text-sm text-white/80 leading-snug mb-3 line-clamp-6">
                      {item.abstract}
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-300 hover:text-blue-400 mt-auto underline underline-offset-2"
                    >
                      Learn more →
                    </a>
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
