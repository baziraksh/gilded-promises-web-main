import { motion } from "framer-motion";
import { Divider } from "../Divider";
import { Diya } from "../Diya";

export function Blessings() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/3 h-96 w-96 rounded-full bg-rose-500/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-xs uppercase tracking-[0.5em] text-amber-300/70">
            With Blessings From
          </div>
          <h2 className="font-script text-gold-gradient mt-3 text-5xl sm:text-7xl">
            Our Families
          </h2>
        </motion.div>

        <Divider />

        <div className="grid gap-10 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-amber-300/70">
              The Groom
            </div>
            <h3 className="font-script text-gold-gradient mt-2 text-3xl">
              Pradhan Parivaar
            </h3>
            <p className="mt-4 text-amber-50/85">
  <span className="relative inline-block mr-3 text-white">
    ✓
    <span
      className="absolute h-[4px] w-[4px] rounded-full bg-white"
      style={{
        left: "5px",
        top: "6px",
      }}
    />
  </span>

  Mr. Jogeswar Pradhan & Mrs. Tuni Pradhan
  <br />

  <span className="text-sm text-amber-100/60">
    Parents of Rajesh
  </span>
</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-amber-300/70">
              The Bride
            </div>
            <h3 className="font-script text-gold-gradient mt-2 text-3xl">
              Sahoo Parivaar
            </h3>
            <p className="mt-4 text-amber-50/85">
              Mr. & Mrs. Sahoo
              <br />
              <span className="text-sm text-amber-100/60">Parents of Rupa</span>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex items-center justify-center gap-8"
        >
          <Diya size={40} />
          <Diya size={50} />
          <Diya size={40} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-script mt-8 text-2xl text-amber-200 sm:text-3xl"
        >
          Your presence is the greatest blessing we could ask for.
        </motion.p>
        <p className="mt-3 text-amber-100/60">
          Thank you for being part of our forever.
        </p>
      </div>
    </section>
  );
}
