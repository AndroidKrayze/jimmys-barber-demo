export const siteConfig = {
  name: "Jimmy's Barber Shop",
  shortName: "Jimmy's",
  tagline: "Your barber on Haverstock Hill.",
  description:
    "Classic neighbourhood barbershop in Belsize Park. Men's haircuts, scissor cuts, beard trim, and wet shave. Call Jimmy to book.",
  address: {
    street: "92 Haverstock Hill",
    locality: "Belsize Park",
    city: "London",
    postcode: "NW3 2BD",
    country: "GB",
    full: "92 Haverstock Hill, Belsize Park, London NW3 2BD",
  },
  phoneDisplay: "07932 633 702",
  phoneTel: "+447932633702",
  phoneHref: "tel:+447932633702",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=92+Haverstock+Hill+Belsize+Park+London+NW3+2BD",
  mapsEmbed:
    "https://maps.google.com/maps?q=92+Haverstock+Hill,+Belsize+Park,+London+NW3+2BD&z=16&output=embed",
  nearNote: "Near Chalk Farm tube (~0.3 mi)",
  rating: {
    value: 4.8,
    count: 81,
    label: "Google",
  },
  hoursNote:
    "Hours vary by listing — call Jimmy to confirm before you visit.",
  hours: [
    { day: "Monday", opens: "10:30", closes: "18:30", closed: false },
    { day: "Tuesday", opens: "10:30", closes: "18:30", closed: false },
    { day: "Wednesday", opens: null, closes: null, closed: true },
    { day: "Thursday", opens: null, closes: null, closed: true },
    { day: "Friday", opens: "10:30", closes: "18:30", closed: false },
    { day: "Saturday", opens: "09:00", closes: "17:00", closed: false },
    { day: "Sunday", opens: null, closes: null, closed: true },
  ] as const,
  paymentNote:
    "Some listings mention cash — please confirm with Jimmy when you call.",
  services: [
    {
      id: "mens-haircut",
      name: "Men's Haircut",
      blurb: "Clean, tidy cut — no fuss, just how you like it.",
    },
    {
      id: "scissor",
      name: "Scissor / Dry Cut",
      blurb: "Scissor work with a careful finish.",
    },
    {
      id: "long-curly",
      name: "Long & Curly-Friendly",
      blurb: "Locals recommend Jimmy for curly and longer hair.",
    },
    {
      id: "beard",
      name: "Beard Trim",
      blurb: "Shape and tidy — ask for what you want.",
    },
    {
      id: "wet-shave",
      name: "Wet / Cut-Throat Shave",
      blurb: "Traditional wet shave when you want the full ritual.",
    },
    {
      id: "hot-towel",
      name: "Hot Towel Shave",
      blurb: "Hot towel finish for a proper neighbourhood treat.",
    },
  ],
  priceNote: "Call for today's prices — consistent quality, fair for Belsize.",
  story:
    "Jimmy's is a classic Haverstock Hill chair — the kind of neighbourhood shop where people come back because he actually listens. Reviews talk about tidy cuts, good chat, and a barber who doesn't push a style on you. No corporate chain energy. Just a trusted seat on the high street.",
  reviews: [
    {
      quote:
        "Quality barber. No fuss, efficient and very tidy job. Good conversation too.",
      author: "Harry Clements",
      source: "Google",
    },
    {
      quote:
        "Very quality haircut, cheap prices, superb service! Will definitely come back. Thanks Jimmy!",
      author: "Alex T",
      source: "Google",
    },
    {
      quote:
        "Jimmy's always a good chat and is really knowledgeable on all things hair. He really listens to what you're after.",
      author: "S. V.",
      source: "Google",
    },
    {
      quote:
        "Jimmy has been cutting my hair for 25 years and I can honestly say this is the best barber shop in the world!!",
      author: "H. H.",
      source: "Google",
    },
    {
      quote:
        "He immediately understood what I wanted and gave me a great cut, while also explaining what he was doing technically.",
      author: "M. G.",
      source: "Google",
    },
    {
      quote:
        "Finally found a barber who listens to his customers offering genuine advice and a great cut at a brilliant price.",
      author: "V. H.",
      source: "Google",
    },
    {
      quote:
        "Fast affordable and professional, haven't had a bad cut over several years. Very amicable man, worth it for the conversation alone!",
      author: "Local regular",
      source: "Google",
    },
  ],
  trustChips: [
    "4.8 Google · 81 reviews",
    "Call to book",
    "Near Chalk Farm",
    "No fuss, tidy cuts",
  ],
  suggestedDomains: [
    "jimmysbarbernw3.co.uk",
    "jimmyshaverstock.co.uk",
    "jimmysbarberbelsize.co.uk",
  ],
  seo: {
    title:
      "Jimmy's Barber Shop | Barber · Haverstock Hill, Belsize Park",
    description:
      "Men's haircuts, beard trim & wet shave at Jimmy's Barber Shop, 92 Haverstock Hill, Belsize Park. Call 07932 633 702 to book.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
