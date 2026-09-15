"use client";

import { motion } from "framer-motion";
import { siteConfig } from "../site.config";

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-parchment px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Reviews
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-forest sm:text-4xl">
            What locals say
          </h2>
          <p className="mt-2 text-sm text-ink/60">
            Paraphrased from public Google-style reviews · ★ Google
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          {siteConfig.reviews.map((r, i) => (
            <motion.blockquote
              key={i}
              className="border-l-4 border-forest bg-cream px-5 py-4 shadow-soft"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
            >
              <div className="mb-2 text-brass" aria-hidden>
                ★★★★★
              </div>
              <p className="font-display text-lg leading-relaxed text-ink">
                “{r.quote}”
              </p>
              <footer className="mt-3 text-sm text-sage">— {r.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
