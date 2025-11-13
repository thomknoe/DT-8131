import React, { useState } from "react";

export default function FullscreenImage({ src, alt, className }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);
  
  React.useEffect(() => {
  const handleKey = (e) => e.key === "Escape" && setIsFullscreen(false);
  if (isFullscreen) document.addEventListener("keydown", handleKey);
  return () => document.removeEventListener("keydown", handleKey);
}, [isFullscreen]);


  return (
    <>
   {/* Base image inside section */}
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-zoom-in transition-all duration-300`}
        onClick={toggleFullscreen}
      />

      {/* Fullscreen overlay */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={toggleFullscreen}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl cursor-zoom-out transition-transform duration-300"
          />
          {/* Close button (optional) */}
          <button
            className="absolute top-6 right-8 text-white text-3xl font-light hover:text-white/70"
            onClick={toggleFullscreen}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
