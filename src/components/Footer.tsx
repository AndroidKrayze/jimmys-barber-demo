import { siteConfig } from "../site.config";

export function Footer() {
  return (
    <footer className="border-t border-brass/20 bg-woodland px-4 py-10 text-cream/80 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl font-bold text-cream">
            {siteConfig.name}
          </p>
          <p className="mt-2 text-sm">{siteConfig.address.full}</p>
          <a
            href={siteConfig.phoneHref}
            className="focus-ring mt-2 inline-block text-sm font-semibold text-brass hover:text-cream"
          >
            {siteConfig.phoneDisplay}
          </a>
        </div>
        <div className="max-w-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brass/80">
            Suggested domains
          </p>
          <ul className="mt-2 space-y-1 text-sm text-cream/70">
            {siteConfig.suggestedDomains.map((d) => (
              <li key={d} className="font-mono text-xs sm:text-sm">
                {d}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-cream/45">
            Call to book · Ask for Jimmy
          </p>
        </div>
      </div>
    </footer>
  );
}
