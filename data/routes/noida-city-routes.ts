export type NoidaCityRoute = {
  slug: string;

  from: string;
  to: string;

  distance: string;
  travelTime: string;

  description: string;
};

export const noidaCityRoutes: NoidaCityRoute[] = [
  {
    slug: "noida-to-delhi",

    from: "Noida",
    to: "Delhi",

    distance: "35–45 km",
    travelTime: "1–2 hours",

    description:
      "Book a reliable taxi from Noida to Delhi with comfortable vehicles and professional drivers.",
  },

  {
    slug: "noida-to-ghaziabad",

    from: "Noida",
    to: "Ghaziabad",

    distance: "20–30 km",
    travelTime: "45–90 minutes",

    description:
      "Book a reliable taxi from Noida to Ghaziabad for comfortable local and outstation travel.",
  },

  {
    slug: "noida-to-faridabad",

    from: "Noida",
    to: "Faridabad",

    distance: "35–45 km",
    travelTime: "1–1.5 hours",

    description:
      "Book a comfortable taxi from Noida to Faridabad with professional drivers and convenient pickup options.",
  },

  {
    slug: "noida-to-gurgaon",

    from: "Noida",
    to: "Gurgaon",

    distance: "55–65 km",
    travelTime: "1.5–2.5 hours",

    description:
      "Book a comfortable taxi from Noida to Gurgaon for local, business, airport and outstation travel.",
  },

  {
    slug: "noida-to-greater-noida",

    from: "Noida",
    to: "Greater Noida",

    distance: "25–35 km",
    travelTime: "45–90 minutes",

    description:
      "Book a reliable taxi from Noida to Greater Noida for comfortable and convenient city travel.",
  },

  {
    slug: "noida-to-meerut",

    from: "Noida",
    to: "Meerut",

    distance: "65–80 km",
    travelTime: "1.5–2.5 hours",

    description:
      "Book a comfortable taxi from Noida to Meerut for family trips, business travel and outstation journeys.",
  },

  {
    slug: "noida-to-hapur",

    from: "Noida",
    to: "Hapur",

    distance: "55–70 km",
    travelTime: "1.5–2 hours",

    description:
      "Book a reliable taxi from Noida to Hapur with comfortable cabs and professional drivers.",
  },

  {
    slug: "noida-to-bulandshahr",

    from: "Noida",
    to: "Bulandshahr",

    distance: "75–90 km",
    travelTime: "2–2.5 hours",

    description:
      "Book a comfortable taxi from Noida to Bulandshahr for family, business and outstation travel.",
  },

  {
    slug: "noida-to-mathura",

    from: "Noida",
    to: "Mathura",

    distance: "145–165 km",
    travelTime: "2.5–3.5 hours",

    description:
      "Book a reliable taxi from Noida to Mathura for family trips, temple visits and outstation travel.",
  },

  {
    slug: "noida-to-agra",

    from: "Noida",
    to: "Agra",

    distance: "165–180 km",
    travelTime: "3–4 hours",

    description:
      "Book a comfortable taxi from Noida to Agra for family trips and outstation travel.",
  },

  {
    slug: "noida-to-jaipur",

    from: "Noida",
    to: "Jaipur",

    distance: "280–300 km",
    travelTime: "5–6 hours",

    description:
      "Book a reliable taxi from Noida to Jaipur with comfortable vehicles and professional drivers.",
  },

  {
    slug: "noida-to-lucknow",

    from: "Noida",
    to: "Lucknow",

    distance: "500–550 km",
    travelTime: "8–10 hours",

    description:
      "Book a comfortable taxi from Noida to Lucknow for long-distance travel.",
  },
];

export function getNoidaCityRoute(
  slug: string
): NoidaCityRoute | null {
  return (
    noidaCityRoutes.find(
      (route) => route.slug === slug
    ) ?? null
  );
}