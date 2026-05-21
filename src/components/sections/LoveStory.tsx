import { motion } from "framer-motion";
import { Divider } from "../Divider";

const story = [
  {
    year: "2019",
    title: "First Glance",
    text: "Their eyes met at a college festival in Bhubaneswar — a moment neither could forget.",
  },
  {
    year: "2020",
    title: "Friendship Blossoms",
    text: "Long conversations under starry skies turned strangers into the closest of friends.",
  },
  {
    year: "2022",
    title: "The Proposal",
    text: "By the temple bells of Puri, Rajesh asked the question and Rupa smiled, 'Always.'",
  },
  {
    year: "2026",
    title: "Forever Begins",
    text: "Two families, two souls, one beautiful new beginning.",
  },
];

export function LoveStory() {
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
            Our Journey
          </div>
          <h2 className="font-script text-gold-gradient mt-3 text-5xl sm:text-7xl">
            Love Story
          </h2>
        </motion.div>

        <Divider />

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-amber-400/50 to-transparent sm:left-1/2" />

          {story.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative mb-12 flex ${
                i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              <div className="absolute left-4 top-6 -translate-x-1/2 sm:left-1/2">
                <div className="h-4 w-4 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(245,200,100,0.8)]" />
              </div>

              <div
                className={`glass ml-12 w-full max-w-md rounded-2xl p-6 sm:ml-0 sm:w-[45%] ${
                  i % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                }`}
              >
                <div className="text-gold-gradient text-3xl font-bold">{item.year}</div>
                <div className="font-script mt-1 text-2xl text-amber-200">
                  {item.title}
                </div>
                <p className="mt-3 text-amber-50/80">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
