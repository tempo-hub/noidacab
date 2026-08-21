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
    slug: "noida-to-gurgaon",

    from: "Noida",
    to: "Gurgaon",

    distance: "55–65 km",
    travelTime: "1.5–2.5 hours",

    description:
      "Book a comfortable taxi from Noida to Gurgaon for local and outstation travel.",
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