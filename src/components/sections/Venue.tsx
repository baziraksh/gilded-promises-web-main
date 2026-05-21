import { motion } from "framer-motion";
import { Divider } from "../Divider";

const LAT = 19.825408;
const LNG = 85.847781;
const MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;
const EMBED = `https://www.google.com/maps?q=${LAT},${LNG}&z=15&output=embed`;

export function Venue() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-xs uppercase tracking-[0.5em] text-amber-300/70">
            With Love, Join Us At
          </div>
          <h2 className="font-script text-gold-gradient mt-3 text-5xl sm:text-7xl">
            The Venue
          </h2>
        </motion.div>

        <Divider />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="glass gold-border overflow-hidden rounded-3xl"
        >
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <div className="text-xs uppercase tracking-[0.4em] text-amber-300/70">
                Wedding Location
              </div>
              <h3 className="font-script text-gold-gradient mt-3 text-4xl sm:text-5xl">
                Balighat
              </h3>
              <p className="mt-4 text-lg text-amber-50/90">
                Balighat, Puri,
                <br />
                Odisha 752002, India
              </p>
              <p className="mt-2 text-sm text-amber-200/60">
                19.825408° N, 85.847781° E
              </p>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-rose-950 shadow-lg shadow-amber-500/30 transition hover:scale-105 hover:shadow-amber-400/50"
              >
                Navigate Now
                <span>→</span>
              </a>
            </div>

            <div className="relative aspect-square md:aspect-auto">
              <iframe
                title="Wedding venue map"
                src={EMBED}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ filter: "saturate(1.1) contrast(0.95)" }}
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-amber-400/30" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
