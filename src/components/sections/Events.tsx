import { motion } from "framer-motion";
import { Divider } from "../Divider";

const events = [
  { icon: "🌼", name: "Haldi", date: "2 Jul 2026", time: "10:00 AM", desc: "A golden bath of blessings" },
  { icon: "🌿", name: "Mehendi", date: "2 Jul 2026", time: "4:00 PM", desc: "Henna, laughter, and music" },
  { icon: "🎶", name: "Sangeet", date: "2 Jul 2026", time: "7:00 PM", desc: "An evening of dance & melodies" },
  { icon: "🔥", name: "Wedding Ceremony", date: "3 Jul 2026", time: "8:00 AM", desc: "Saat Phere around the sacred fire" },
  { icon: "✨", name: "Reception", date: "3 Jul 2026", time: "7:00 PM", desc: "A grand celebration awaits" },
];

export function Events() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-xs uppercase tracking-[0.5em] text-amber-300/70">
            Wedding Festivities
          </div>
          <h2 className="font-script text-gold-gradient mt-3 text-5xl sm:text-7xl">
            The Celebrations
          </h2>
        </motion.div>

        <Divider />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass group relative overflow-hidden rounded-3xl p-8 text-center transition"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="shimmer absolute inset-0" />
              </div>
              <div className="relative">
                <div className="mb-4 text-5xl">{e.icon}</div>
                <h3 className="font-script text-gold-gradient text-4xl">{e.name}</h3>
                <div className="mt-3 text-sm uppercase tracking-[0.25em] text-amber-200/80">
                  {e.date}
                </div>
                <div className="mt-1 text-amber-100/70">{e.time}</div>
                <p className="mt-4 italic text-amber-50/70">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
