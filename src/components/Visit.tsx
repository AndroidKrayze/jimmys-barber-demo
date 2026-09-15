import { siteConfig } from "../site.config";

export function Visit() {
  return (
    <section id="visit" className="scroll-mt-20 bg-cream px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Visit
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-forest sm:text-4xl">
            Find Jimmy
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <a
              href={siteConfig.phoneHref}
              className="focus-ring block rounded-sm border border-brass/30 bg-forest p-6 text-cream transition hover:bg-woodland sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
                Call to book
              </p>
              <p className="mt-2 font-display text-3xl font-bold tracking-wide sm:text-4xl">
                {siteConfig.phoneDisplay}
              </p>
              <p className="mt-2 text-sm text-cream/75">
                Primary booking — tap to call
              </p>
            </a>

            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-sage">
                  Address
                </h3>
                <p className="mt-1 text-ink">{siteConfig.address.full}</p>
                <p className="mt-1 text-sm text-ink/65">{siteConfig.nearNote}</p>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-2 inline-block text-sm font-semibold text-forest underline decoration-brass underline-offset-4"
                >
                  Open in Google Maps
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-sage">
                  Hours
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {siteConfig.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between gap-4 border-b border-brass/15 py-1.5 text-sm"
                    >
                      <span className="font-medium text-ink">{h.day}</span>
                      <span className="text-ink/70">
                        {h.closed ? "Closed" : `${h.opens} – ${h.closes}`}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 rounded-sm bg-parchment px-3 py-2 text-sm text-ink/80">
                  {siteConfig.hoursNote}
                </p>
                <p className="mt-2 text-xs text-sage">{siteConfig.paymentNote}</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border border-brass/25 bg-parchment shadow-soft">
            <iframe
              title="Map — Jimmy's Barber Shop, 92 Haverstock Hill"
              src={siteConfig.mapsEmbed}
              className="h-[320px] w-full border-0 lg:h-full lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
