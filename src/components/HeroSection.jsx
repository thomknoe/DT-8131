import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100); // small delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className={`
        min-h-screen flex items-center justify-center snap-start
        px-[6vw] md:px-[10vw]
        transition-opacity duration-[1500ms] ease-in
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
    >
      <div
        className="
          w-full max-w-[1400px]
          flex flex-col justify-center
          text-left
          space-y-5 sm:space-y-8
        "
      >
        <h1
          className="
            font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]
            leading-[1.05] tracking-tight
            text-[9vw] sm:text-[7vw] md:text-[5vw] lg:text-[4.2vw] xl:text-[3.6vw]
            transition-all duration-500
          "
        >
          hello.world
        </h1>

        <p
          className="
            text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
            text-white/80 max-w-3xl md:max-w-4xl
            leading-relaxed tracking-wide
            transition-all duration-500
          "
        >
          Towards participatory computer-assisted world building and immersive, interactive experiences — bridging the imagination with games.
        </p>
      </div>
    </section>
  );
}
