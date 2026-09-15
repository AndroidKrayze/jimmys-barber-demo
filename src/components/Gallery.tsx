"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "../site.config";
import { withBase } from "../lib/paths";

const spans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-8",
  "md:col-span-12",
] as const;

const aspects = [
  "aspect-[4/3] sm:aspect-[16/11]",
  "aspect-[4/3] md:h-full md:aspect-auto",
  "aspect-[4/3]",
  "aspect-[16/10]",
  "aspect-[16/9] sm:aspect-[21/9]",
] as const;

export function Gallery() {
  const reduce = useReducedMotion();
  const shots = siteConfig.gallery;

  return (
    <section
      id="gallery"
      className="scroll-mt-20 bg-cream px-4 py-16 sm:px-6"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            The shop
          </p>
          <h2
            id="gallery-heading"
            className="mt-2 font-display text-3xl font-bold text-forest sm:text-4xl"
          >
            On Haverstock Hill
          </h2>
          <p className="mt-3 text-ink/75">
            The gold fascia, the chair inside, hours on the door — Jimmy&apos;s
            neighbourhood shop next to Haverstock Tavern.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-12 md:gap-4">
          {shots.map((shot, i) => {
            const fill = i === 1;
            return (
              <motion.figure
                key={shot.src}
                className={`group relative overflow-hidden rounded-sm bg-parchment shadow-soft ${
                  spans[i] ?? "md:col-span-6"
                } ${fill ? "h-full min-h-[220px]" : ""}`}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <img
                  src={withBase(shot.src)}
                  alt={shot.alt}
                  className={`w-full object-cover transition duration-700 group-hover:scale-[1.03] ${
                    aspects[i] ?? "aspect-[4/3]"
                  } ${
                    fill
                      ? "md:absolute md:inset-0 md:h-full md:w-full md:aspect-auto"
                      : ""
                  }`}
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-woodland/80 to-transparent px-4 pb-3 pt-12">
                  <p className="font-display text-sm text-cream sm:text-base">
                    {shot.caption}
                  </p>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
