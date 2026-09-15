"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "../site.config";

const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid
          ? "border-b border-brass/25 bg-woodland/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="focus-ring font-display text-xl font-bold tracking-tight text-cream"
        >
          {siteConfig.shortName}
          <span className="ml-2 hidden text-xs font-sans font-normal uppercase tracking-[0.2em] text-brass/90 sm:inline">
            Haverstock Hill
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring text-sm font-medium text-cream/80 transition hover:text-brass"
            >
              {l.label}
            </a>
          ))}
          <a
            href={siteConfig.phoneHref}
            className="focus-ring rounded-full bg-brass px-5 py-2 text-sm font-semibold text-woodland shadow-soft transition hover:bg-cream"
          >
            Call
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={siteConfig.phoneHref}
            className="focus-ring rounded-full bg-brass px-4 py-2 text-sm font-semibold text-woodland"
          >
            Call
          </a>
          <button
            type="button"
            className="focus-ring rounded-md p-2 text-cream"
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
          className="border-t border-brass/20 bg-woodland px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="focus-ring py-2 text-base font-medium text-cream"
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
