"use client";

import { motion } from "framer-motion";
import { siteConfig } from "../site.config";

export function Hero() {
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {siteConfig.tagline}
          </motion.h1>
          <motion.div
            className="my-5 h-0.5 w-24 origin-left bg-brass"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
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

        <div className="relative flex min-h-[280px] flex-col justify-end bg-forest px-6 py-10 text-cream sm:min-h-[360px] sm:px-10">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, transparent, transparent 12px, rgba(176,141,87,0.15) 12px, rgba(176,141,87,0.15) 13px)",
            }}
            aria-hidden
          />
          <div className="relative z-10 space-y-4">
            <p className="font-display text-2xl sm:text-3xl">
              Trusted chair.
              <br />
              Cream walls. Brass fixtures.
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-cream/75">
              Forest-green leather energy — traditional high-street craft, not a
              chrome nightclub.
            </p>
            <div className="flex gap-2 pt-2">
              <span className="h-3 w-12 rounded-sm bg-cream" aria-hidden />
              <span className="h-3 w-8 rounded-sm bg-brass" aria-hidden />
              <span className="h-3 w-6 rounded-sm bg-parchment/80" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
