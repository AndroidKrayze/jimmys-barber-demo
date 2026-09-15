"use client";

import { siteConfig } from "../site.config";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brass/40 bg-forest pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_rgba(19,38,28,0.25)] md:hidden">
      <a
        href={siteConfig.phoneHref}
        className="focus-ring flex items-center justify-center gap-3 px-4 py-3.5 text-cream"
        aria-label={`Call Jimmy on ${siteConfig.phoneDisplay}`}
      >
        <span
          className="flex h-9 w-9 items-center justify-center rounded-full border border-brass/60 bg-woodland"
          aria-hidden
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#B08D57"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </span>
        <span className="text-center">
          <span className="block text-xs uppercase tracking-[0.18em] text-brass">
            Call Jimmy
          </span>
          <span className="block font-semibold tracking-wide">
            {siteConfig.phoneDisplay}
          </span>
        </span>
      </a>
    </div>
  );
}
