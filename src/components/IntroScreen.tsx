import { motion } from "framer-motion";
import { Sparkles } from "./Petals";

export function IntroScreen({ onDone }: { onDone: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.15 }}
      transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at center, #3a0d12 0%, #1a0608 60%, #000 100%)",
      }}
    >
      <Sparkles count={40} />

      {/* Floating roses */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          initial={{ x: `${Math.random() * 100}%`, y: "110%", rotate: 0 }}
          animate={{ y: "-20%", rotate: 360 }}
          transition={{
            duration: 6 + Math.random() * 4,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🌹
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <motion.div
          initial={{ letterSpacing: "0.1em", opacity: 0 }}
          animate={{ letterSpacing: "0.6em", opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-xs uppercase text-amber-300/70"
        >
          You're Invited
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="font-script text-gold-gradient mt-6 text-6xl sm:text-8xl md:text-9xl"
          style={{ textShadow: "0 0 40px rgba(245,200,100,0.5)" }}
        >
          Save the Date
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-8 text-lg text-amber-100/80 sm:text-2xl"
        >
          Rajesh <span className="text-rose-300">❤</span> Rupa
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8 }}
          onClick={onDone}
          className="glass mt-12 rounded-full px-8 py-3 text-sm uppercase tracking-[0.3em] text-amber-100 transition hover:scale-105 hover:text-amber-50"
        >
          Open Invitation ✦
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
