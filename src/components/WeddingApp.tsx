import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { IntroScreen } from "./IntroScreen";
import { MusicToggle } from "./MusicToggle";
import { Petals } from "./Petals";
import { CursorGlow } from "./CursorGlow";
import { Hero } from "./sections/Hero";

import { Events } from "./sections/Events";
import { CountdownSection } from "./sections/CountdownSection";
import { Venue } from "./sections/Venue";
import { Gallery } from "./sections/Gallery";
import { Blessings } from "./sections/Blessings";
import { Footer } from "./sections/Footer";

export function WeddingApp() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    let id: number;
    const raf = (t: number) => {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = introDone ? "" : "hidden";
  }, [introDone]);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {!introDone && <IntroScreen onDone={() => setIntroDone(true)} />}
      </AnimatePresence>

      <MusicToggle autoStart={introDone} />
      <CursorGlow />
      <Petals count={16} />

      <main>
        <Hero />
        
        <Events />
        <CountdownSection />
        <Venue />
        <Gallery />
        <Blessings />
        <Footer />
      </main>
    </div>
  );
}
