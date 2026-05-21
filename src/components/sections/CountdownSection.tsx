import { motion } from "framer-motion";
import { Countdown } from "../Countdown";
import { Divider } from "../Divider";
import { ScratchCard } from "../ScratchCard";

export function CountdownSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-xs uppercase tracking-[0.5em] text-amber-300/70">
            The Wait Begins
          </div>
          <h2 className="font-script text-gold-gradient mt-3 text-5xl sm:text-7xl">
            Counting Every Moment
          </h2>
          <p className="mt-4 text-amber-100/70">Until we say 'Forever'</p>
        </motion.div>

        <div className="mt-12">
          <Countdown />
        </div>

        <Divider />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-script text-gold-gradient text-4xl sm:text-5xl">
            A Little Surprise
          </h3>
          <p className="mt-3 text-amber-100/70">Scratch the card below ✨</p>
        </motion.div>

        <div className="mt-10">
          <ScratchCard />
        </div>
      </div>
    </section>
  );
}
