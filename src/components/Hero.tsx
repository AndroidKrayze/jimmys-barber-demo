"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "../site.config";
import { withBase } from "../lib/paths";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-woodland"
    >
      {/* Full-bleed shopfront */}
      <motion.img
        src={withBase("/assets/hero.jpg")}
        alt="Jimmy's Barber Shop shopfront on Haverstock Hill"
        className="absolute inset-0 h-full w-full object-cover object-[center_38%]"
        initial={reduce ? false : { scale: 1.1, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        fetchPriority="high"
      />

      {/* Dark gradient — type pops, premium traditional */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-woodland via-woodland/75 to-woodland/35"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-woodland/80 via-woodland/40 to-transparent"
        aria-hidden
      />

      {/* Soft vignette */}
      <div
        className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_40px_rgba(10,18,12,0.55)]"
        aria-hidden
      />

      {/* Subtle film grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      {/* Optional second-image peek — interior chair */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 hidden h-[42%] w-[28%] opacity-30 sm:block lg:w-[24%]"
        aria-hidden
      >
        <img
          src={withBase("/assets/shop-1.jpg")}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-woodland/40 to-woodland" />
        <div className="absolute inset-0 bg-gradient-to-t from-woodland via-transparent to-woodland/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:pb-24">
        <motion.p
          className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brass"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Haverstock Hill · Belsize Park
        </motion.p>

        <motion.h1
          className="max-w-3xl font-display text-5xl font-bold leading-[1.05] text-cream sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          Ask for Jimmy.
        </motion.h1>

        {/* Brass hairline */}
        <motion.div
          className="my-6 h-px w-28 origin-left bg-gradient-to-r from-brass via-brass to-transparent sm:w-36"
          initial={reduce ? false : { scaleX: 0 }}
          animate={reduce ? undefined : { scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          aria-hidden
        />

        <motion.p
          className="max-w-lg text-base leading-relaxed text-cream/85 sm:text-lg"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Old-school chair. Proper cut. Classic neighbourhood barbershop at{" "}
          {siteConfig.address.street} — call to book, walk-in when the chair is
          free.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={siteConfig.phoneHref}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-brass px-8 py-4 text-base font-bold tracking-wide text-woodland shadow-[0_8px_32px_rgba(176,141,87,0.35)] transition hover:bg-cream sm:text-lg"
          >
            Call {siteConfig.phoneDisplay}
          </a>
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-cream/35 bg-transparent px-7 py-3.5 text-sm font-semibold text-cream transition hover:border-brass hover:text-brass sm:text-base"
          >
            Directions
          </a>
        </motion.div>

        <motion.div
          className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-cream/70"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brass/40 bg-woodland/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brass">
            Google {siteConfig.rating.value} · {siteConfig.rating.count}
          </span>
          <span>Phone / walk-in · No online booking</span>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        className="focus-ring absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-cream/50 transition hover:text-brass md:bottom-6"
        aria-label="Scroll to services"
      >
        <span className="text-[10px] uppercase tracking-[0.22em]">Scroll</span>
        <motion.span
          aria-hidden
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={
            reduce
              ? undefined
              : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.span>
      </a>
    </section>
  );
}
