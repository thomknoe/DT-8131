import React, { useState, useEffect, useRef } from "react";
import "../styles/AmbientSound.css";

export default function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set up audio properties
    audio.loop = true;
    audio.volume = 0.5; // Set to a comfortable volume level

    // Try to play audio when component mounts
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        // Autoplay may be blocked by browser
        console.log("Autoplay blocked, user interaction required");
        setIsPlaying(false);
      }
    };

    playAudio();

    // Handle audio events
    const handleEnded = () => {
      // Shouldn't happen with loop, but just in case
      if (audio.loop) {
        audio.play();
      }
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/ambient.m4a" preload="auto" />
      <button
        className="sound-toggle"
        onClick={toggleSound}
        aria-label={isPlaying ? "Mute sound" : "Unmute sound"}
      >
        {isPlaying ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M13.5 10.5a2 2 0 0 1 0 3" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>
    </>
  );
}

