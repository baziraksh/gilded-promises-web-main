import { useEffect, useRef, useState } from "react";
import { Fireworks } from "../Fireworks";

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <footer ref={ref} className="relative overflow-hidden py-24 text-center">
      <Fireworks active={active} />
      <div className="relative z-30 mx-auto max-w-2xl px-6">
        <div className="font-script text-gold-gradient text-5xl sm:text-7xl">
          Rajesh & Rupa
        </div>
        <div className="mt-4 text-amber-200/80">3 · 7 · 2026 · Balighat, Puri</div>
        <div className="mx-auto my-8 h-px w-48 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
        <p className="text-sm uppercase tracking-[0.4em] text-amber-100/60">
          Made with <span className="text-rose-400">❤</span> for Rajesh & Rupa
        </p>
      </div>
    </footer>
  );
}
