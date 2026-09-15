import { siteConfig } from "../site.config";

export function Story() {
  return (
    <section className="bg-woodland px-4 py-16 text-cream sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-5 md:items-center">
        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
            The chair
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            A proper neighbourhood barber
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/85">
            {siteConfig.story}
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-sm border border-brass/40 bg-forest p-6">
            <p className="font-display text-5xl font-bold text-brass">
              {siteConfig.rating.value}
            </p>
            <p className="mt-1 text-sm text-cream/70">
              {siteConfig.rating.count} {siteConfig.rating.label} reviews
            </p>
            <div className="mt-4 flex gap-1 text-brass" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/80">
              Guests praise listening, curly-hair skill, value, and
              consistency — genuine local reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
