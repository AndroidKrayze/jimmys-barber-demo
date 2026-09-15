import { siteConfig } from "../site.config";

export function TrustStrip() {
  return (
    <section
      className="border-b border-brass/20 bg-parchment"
      aria-label="At a glance"
    >
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5 sm:justify-between sm:px-6">
        {siteConfig.trustChips.map((chip) => (
          <li
            key={chip}
            className="text-sm font-semibold uppercase tracking-[0.12em] text-forest"
          >
            <span className="mr-2 text-brass" aria-hidden>
              ◆
            </span>
            {chip}
          </li>
        ))}
      </ul>
    </section>
  );
}
