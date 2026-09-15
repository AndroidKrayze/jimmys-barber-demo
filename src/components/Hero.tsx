"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "../site.config";
import { withBase } from "../lib/paths";

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-brass/20"
    >
      <div className="mx-auto grid max-w-6xl md:grid-cols-2">
        <div className="flex flex-col justify-center bg-cream px-4 py-14 sm:px-8 sm:py-20 lg:px-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sage">
            Ask for Jimmy · Belsize Park
          </p>
          <motion.h1
            className="font-display text-4xl font-bold leading-tight text-forest sm:text-5xl lg:text-[3.25rem]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {siteConfig.tagline}
          </motion.h1>
          <motion.div
            className="my-5 h-0.5 w-24 origin-left bg-brass"
            initial={reduce ? false : { scaleX: 0 }}
            animate={reduce ? undefined : { scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            aria-hidden
          />
          <p className="max-w-md text-lg leading-relaxed text-ink/80">
            Jimmy listens. Then he cuts. Classic neighbourhood barbershop on
            Haverstock Hill — call to book, walk-in welcome when the chair is
            free.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteConfig.phoneHref}
              className="focus-ring inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream shadow-soft transition hover:bg-woodland"
            >
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-forest/30 bg-transparent px-6 py-3 text-sm font-semibold text-forest transition hover:border-brass hover:text-woodland"
            >
              Directions
            </a>
          </div>
          <p className="mt-5 text-sm text-sage">
            Phone / walk-in · No online booking widget
          </p>
        </div>

        <div className="relative min-h-[280px] overflow-hidden bg-woodland sm:min-h-[360px] md:min-h-full">
          <motion.img
            src={withBase("/assets/hero.jpg")}
            alt="Jimmy's Barber Shop shopfront on Haverstock Hill"
            className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
            initial={reduce ? false : { scale: 1.08, opacity: 0.85 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-woodland/70 via-woodland/10 to-transparent"
            aria-hidden
          />
          <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-wrap items-end justify-between gap-3">
            <p className="font-display text-lg text-cream sm:text-xl">
              92 Haverstock Hill
            </p>
            <span className="rounded-full bg-cream/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-forest">
              Google {siteConfig.rating.value} · {siteConfig.rating.count} reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
