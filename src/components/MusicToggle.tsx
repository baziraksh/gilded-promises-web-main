import { useEffect, useRef, useState } from "react";

// Soft sitar/temple bell ambient loop (royalty-free CDN sample)
const TRACK =
  // "https://cdn.pixabay.com/download/audio/2022/03/15/audio_8e3a5d7ce4.mp3?filename=indian-meditation-music-22167.mp3";
  "/song.mpeg";

export function MusicToggle({ autoStart }: { autoStart: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(TRACK);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (autoStart && audioRef.current) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [autoStart]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle background music"
      className="glass fixed right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full text-amber-200 transition hover:scale-110 hover:text-amber-100"
    >
      <span className={playing ? "animate-pulse" : ""}>{playing ? "♫" : "♪"}</span>
    </button>
  );
}
