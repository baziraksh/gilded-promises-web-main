import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Diya } from "../Diya";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mb-6 text-xs uppercase tracking-[0.5em] text-amber-200/80"
        >
          ✦ Shubh Vivaah ✦
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="font-script text-gold-gradient text-4xl leading-tight sm:text-6xl md:text-7xl"
          style={{ textShadow: "0 0 50px rgba(245,200,100,0.4)" }}
        >
          Two Hearts, One Soul
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.4, duration: 1.2 }}
          className="mx-auto my-8 h-px w-48 bg-gradient-to-r from-transparent via-amber-300 to-transparent"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1.2 }}
          className="text-gold-gradient text-6xl font-light tracking-wide sm:text-8xl md:text-9xl"
          // style={{ fontFamily: "'Lucida Handwriting', cursive" }}
          style={{ fontFamily: "'French Script Mt', cursive" }}
        >
          Rajesh
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mx-4 inline-block text-rose-400 sm:mx-6"
            style={{ filter: "drop-shadow(0 0 12px rgba(255,100,140,0.7))" }}
          >
            ❤
          </motion.span>
          Rupa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="mt-6 text-base text-amber-100/70 sm:text-lg"
        >
          Pradhan&nbsp;&nbsp;·&nbsp;&nbsp;Sahoo
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-10 flex items-center justify-center gap-8"
        >
          <Diya size={36} />
          <div className="font-script text-2xl text-amber-200 sm:text-3xl">
            3 · 7 · 2026
          </div>
          <Diya size={36} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6 }}
          className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 text-amber-200/60"
        >
          <div className="text-[10px] uppercase tracking-[0.4em]">Scroll</div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mx-auto mt-2 h-8 w-px bg-amber-200/40"
          />
        </motion.div>
      </div>
    </section>
  );
}
