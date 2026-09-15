"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Gallery() {
  const reduce = useReducedMotion();
  const blocks = [
    { bg: "bg-forest", label: "Forest apron", sub: "Neighbourhood craft" },
    { bg: "bg-parchment text-forest", label: "Cream tiles", sub: "Calm chair" },
    { bg: "bg-brass text-woodland", label: "Brass fixtures", sub: "High-street feel" },
    { bg: "bg-woodland text-cream", label: "Haverstock light", sub: "Belsize Park" },
  ];

  return (
    <section className="bg-cream px-4 py-16 sm:px-6" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Atmosphere
          </p>
          <h2
            id="gallery-heading"
            className="mt-2 font-display text-3xl font-bold text-forest sm:text-4xl"
          >
            Colour of the shop
          </h2>
          <p className="mt-3 text-ink/75">
            Forest, cream and brass — the feel of a trusted Haverstock Hill
            chair until owner photos are ready.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map((b, i) => (
            <motion.div
              key={b.label}
              className={`flex aspect-[4/5] flex-col justify-end rounded-sm p-5 ${b.bg}`}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <p className="font-display text-xl font-bold">{b.label}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] opacity-70">
                {b.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
