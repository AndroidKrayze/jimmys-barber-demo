export function Gallery() {
  const blocks = [
    { bg: "bg-forest", label: "Forest apron", sub: "Brand colour" },
    { bg: "bg-parchment text-forest", label: "Cream tiles", sub: "Brand colour" },
    { bg: "bg-brass text-woodland", label: "Brass fixtures", sub: "Brand colour" },
    { bg: "bg-woodland text-cream", label: "Haverstock light", sub: "Brand colour" },
  ];

  return (
    <section className="bg-cream px-4 py-16 sm:px-6" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Atmosphere
          </p>
          <h2
            id="gallery-heading"
            className="mt-2 font-display text-3xl font-bold text-forest sm:text-4xl"
          >
            Colour of the shop
          </h2>
          <p className="mt-3 text-ink/75">
            Real shop photos will replace these brand blocks when owner assets
            are ready — no stock cuts invented for this demo.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map((b) => (
            <div
              key={b.label}
              className={`flex aspect-[4/5] flex-col justify-end rounded-sm p-5 ${b.bg}`}
            >
              <p className="font-display text-xl font-bold">{b.label}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] opacity-70">
                {b.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
