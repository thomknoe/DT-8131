import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ArrowNav({ onPrev, onNext, disablePrev, disableNext }) {
  return (
    <>
      {!disablePrev && (
        <button
          onClick={onPrev}
          className="fixed top-6 left-1/2 -translate-x-1/2 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition cursor-pointer"
          aria-label="Previous section"
        >
          <ChevronUp size={24} />
        </button>
      )}
      {!disableNext && (
        <button
          onClick={onNext}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition cursor-pointer"
          aria-label="Next section"
        >
          <ChevronDown size={24} />
        </button>
      )}
    </>
  );
}
