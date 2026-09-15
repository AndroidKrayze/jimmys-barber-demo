"use client";

import { motion } from "framer-motion";
import { siteConfig } from "../site.config";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-cream px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Services
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-forest sm:text-4xl">
            Cuts & grooming
          </h2>
          <p className="mt-3 text-ink/75">{siteConfig.priceNote}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((s, i) => (
            <motion.article
              key={s.id}
              className="ticket-corner rounded-sm border border-brass/25 bg-parchment p-6 shadow-soft"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <h3 className="font-display text-xl font-bold text-forest">
                {s.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {s.blurb}
              </p>
              <a
                href={siteConfig.phoneHref}
                className="focus-ring mt-5 inline-flex text-sm font-semibold text-forest underline decoration-brass decoration-2 underline-offset-4 transition hover:text-woodland"
              >
                Call to book
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
