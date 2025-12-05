"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startMusic = () => {
      if (!started && audioRef.current) {
        audioRef.current.play();
        setStarted(true);
      }
    };

    document.addEventListener("scroll", startMusic, { once: true });
    document.addEventListener("click", startMusic, { once: true });

    return () => {
      document.removeEventListener("scroll", startMusic);
      document.removeEventListener("click", startMusic);
    };
  }, [started]);

  return (
    <audio ref={audioRef} loop>
      <source src="/music/background.mp3" type="audio/mp3" />
    </audio>
  );
}
