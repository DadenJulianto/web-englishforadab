import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const isPlayed = useRef(false);

  useEffect(() => {
    const playAudio = () => {
      if (!isPlayed.current) {
        audioRef.current.play().catch(() => {});
        isPlayed.current = true;

        // Setelah diputar, event listener dihapus biar tidak dobel
        window.removeEventListener("scroll", playAudio);
        window.removeEventListener("click", playAudio);
      }
    };

    // Mulai setelah user scroll atau klik
    window.addEventListener("scroll", playAudio);
    window.addEventListener("click", playAudio);

    return () => {
      window.removeEventListener("scroll", playAudio);
      window.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/bg-music.mp3" type="audio/mpeg" />
    </audio>
  );
}
