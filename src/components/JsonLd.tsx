import { siteConfig } from "../site.config";

export function JsonLd() {
  const openingHoursSpecification = siteConfig.hours
    .filter((h) => !h.closed && h.opens && h.closes)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    }));

  const data = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    name: siteConfig.name,
    description: siteConfig.description,
    telephone: siteConfig.phoneTel,
    url: "https://androidkrayze.github.io/jimmys-barber-demo/",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: "Greater London",
      postalCode: siteConfig.address.postcode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5485,
      longitude: -0.1555,
    },
    openingHoursSpecification,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(siteConfig.rating.value),
      reviewCount: String(siteConfig.rating.count),
      bestRating: "5",
    },
    priceRange: "££",
    areaServed: "Belsize Park, London",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
