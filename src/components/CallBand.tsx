import { siteConfig } from "../site.config";

export function CallBand() {
  return (
    <section className="bg-forest px-4 py-14 text-center text-cream sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
        Ready?
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
        Want Jimmy&apos;s chair?
      </h2>
      <p className="mx-auto mt-3 max-w-md text-cream/80">
        One tap to call. Tell him what you need — he listens.
      </p>
      <a
        href={siteConfig.phoneHref}
        className="focus-ring mt-8 inline-flex rounded-full bg-cream px-8 py-3.5 text-sm font-bold text-forest shadow-soft transition hover:bg-parchment"
      >
        Call now · {siteConfig.phoneDisplay}
      </a>
    </section>
  );
}
