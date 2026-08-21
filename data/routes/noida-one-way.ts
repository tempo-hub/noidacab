export type OneWayRoute = {
  slug: string;
  from: string;
  to: string;
  distance: string;
  travelTime: string;
  description: string;
};

export const noidaOneWayRoutes: OneWayRoute[] = [
  {
    slug: "noida-to-delhi-one-way-cab",
    from: "Noida",
    to: "Delhi",
    distance: "35–45 km",
    travelTime: "1–2 hours",
    description:
      "Book a reliable one-way cab from Noida to Delhi with comfortable vehicles and professional drivers.",
  },

  {
    slug: "noida-to-gurgaon-one-way-cab",
    from: "Noida",
    to: "Gurgaon",
    distance: "55–65 km",
    travelTime: "1.5–2.5 hours",
    description:
      "Book a comfortable one-way cab from Noida to Gurgaon.",
  },

  {
    slug: "noida-to-agra-one-way-cab",
    from: "Noida",
    to: "Agra",
    distance: "165–180 km",
    travelTime: "3–4 hours",
    description:
      "Book a one-way cab from Noida to Agra for a comfortable journey.",
  },

  {
    slug: "noida-to-jaipur-one-way-cab",
    from: "Noida",
    to: "Jaipur",
    distance: "280–300 km",
    travelTime: "5–6 hours",
    description:
      "Book a one-way cab from Noida to Jaipur with professional drivers.",
  },

  {
    slug: "noida-to-lucknow-one-way-cab",
    from: "Noida",
    to: "Lucknow",
    distance: "500–550 km",
    travelTime: "8–10 hours",
    description:
      "Book a comfortable one-way cab from Noida to Lucknow.",
  },
];

export function getNoidaOneWayRoute(slug: string) {
  return noidaOneWayRoutes.find((route) => route.slug === slug);
}