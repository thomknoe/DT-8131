import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function VerticalNav({ sections, activeIndex, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* --- Desktop / Tablet Vertical Nav --- */}
      <ul
        className={`
          hidden sm:flex
          fixed z-50 flex-col items-start gap-4
          right-[max(2vw,1rem)] md:right-[2vw] top-1/2 -translate-y-1/2
          transition-all duration-500
        `}
      >
        {sections.map((title, i) => {
          const isActive = i === activeIndex;
          return (
            <li
              key={i}
              className="flex items-center gap-2 group transition-all duration-300"
            >
              {/* Dot */}
              <button
                onClick={() => onNavigate(i)}
                aria-label={`Go to ${title}`}
                className={`
                  w-3 h-3 rounded-full cursor-pointer transition-all duration-300
                  ${isActive
                    ? "bg-white scale-110 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    : "bg-white/30 group-hover:bg-white/60"}
                `}
              />

              {/* Title */}
              <span 
                className={`
                  text-xs transition-all duration-300
                  ${isActive
                    ? "text-white font-semibold"
                    : "text-white/60 group-hover:text-white"}
                `}
              >
                {title}
              </span>
            </li>
          );
        })}
      </ul>

      {/* --- Mobile Floating Tab --- */}
      <div className="sm:hidden fixed right-4 top-1/2 -translate-y-1/2 z-50">
        {/* Pull tab button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Slide-out menu */}
        <div
          className={`
            absolute right-full mr-2 top-1/2 -translate-y-1/2
            bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl
            flex flex-col items-start gap-3 p-4
            transition-all duration-300 ease-in-out
            ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}
          `}
        >
          {sections.map((title, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={i}
                onClick={() => {
                  onNavigate(i);
                  setIsOpen(false);
                }}
                className={`
                  text-sm transition-all duration-300
                  ${isActive
                    ? "font-semibold text-white"
                    : "text-white/80 hover:text-white"}
                `}
              >
                {title}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
