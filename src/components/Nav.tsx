"use client";

import { useState } from "react";
import { siteConfig } from "../site.config";

const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brass/20 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="focus-ring font-display text-xl font-bold tracking-tight text-forest"
        >
          {siteConfig.shortName}
          <span className="ml-2 hidden text-xs font-sans font-normal uppercase tracking-[0.2em] text-sage sm:inline">
            Haverstock Hill
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring text-sm font-medium text-ink/80 transition hover:text-forest"
            >
              {l.label}
            </a>
          ))}
          <a
            href={siteConfig.phoneHref}
            className="focus-ring rounded-full bg-forest px-5 py-2 text-sm font-semibold text-cream shadow-soft transition hover:bg-woodland"
          >
            Call
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={siteConfig.phoneHref}
            className="focus-ring rounded-full bg-forest px-4 py-2 text-sm font-semibold text-cream"
          >
            Call
          </a>
          <button
            type="button"
            className="focus-ring rounded-md p-2 text-forest"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-brass/20 bg-cream px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="focus-ring py-2 text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
