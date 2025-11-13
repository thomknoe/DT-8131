import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

export default function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("ambient.m4a"));

  const toggleSound = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.loop = true;
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleSound}
      className="
        fixed top-6 right-6 z-50
        text-white bg-white/10 hover:bg-white/20
        backdrop-blur-md p-3 rounded-full shadow-lg
        transition-all duration-300
      "
      aria-label="Toggle sound"
    >
      <FontAwesomeIcon
        icon={isPlaying ? faVolumeUp : faVolumeMute}
        size="lg"
      />
    </button>
  );
}
