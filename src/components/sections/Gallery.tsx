import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Divider } from "../Divider";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const images = [g1, g2, g3, g4];

export function Gallery() {
  const [idx, setIdx] = useState(0);

  return (
    <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-xs uppercase tracking-[0.5em] text-amber-300/70">
            Cherished Frames
          </div>
          <h2 className="font-script text-gold-gradient mt-3 text-5xl sm:text-7xl">
            Memories
          </h2>
        </motion.div>

        <Divider />

        <div className="relative mx-auto aspect-[4/5] max-w-2xl overflow-hidden rounded-3xl sm:aspect-[3/2]">
          <AnimatePresence mode="wait">
            <motion.img
              key={idx}
              src={images[idx]}
              alt=""
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full object-cover"
            />
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-amber-400/30" />

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Image ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? "w-8 bg-amber-300" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setIdx((idx - 1 + images.length) % images.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-amber-200 backdrop-blur transition hover:bg-black/60"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={() => setIdx((idx + 1) % images.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-amber-200 backdrop-blur transition hover:bg-black/60"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
