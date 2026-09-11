import type { Vehicle } from "@/data/vehicles";

export type RouteData = {
  slug: string;

  from: {
    name: string;
    slug: string;
  };

  to: {
    name: string;
    slug: string;
  };

  distance: string;
  duration: string;

  popular?: boolean;

  description?: string;
};

export const routes: RouteData[] = [
  {
    slug: "noida-to-delhi",
    from: {
      name: "Noida",
      slug: "noida",
    },
    to: {
      name: "Delhi",
      slug: "delhi",
    },
    distance: "25 km",
    duration: "45 min",
    popular: true,
    description:
      "Book a reliable taxi from Noida to Delhi with comfortable cabs, professional drivers and affordable fares.",
  },

  {
    slug: "noida-to-gurgaon",
    from: {
      name: "Noida",
      slug: "noida",
    },
    to: {
      name: "Gurgaon",
      slug: "gurgaon",
    },
    distance: "55 km",
    duration: "1 hr 30 min",
    popular: true,
    description:
      "Book a reliable taxi from Noida to Gurgaon with comfortable cabs and professional drivers.",
  },
  {
    slug: "noida-to-jaipur",
    from: {
      name: "Noida",
      slug: "noida",
    },
    to: {
      name: "Jaipur",
      slug: "jaipur",
    },
    distance: "290 km",
    duration: "4 hr 45 min",
    popular: true,
    description:
      "Book a comfortable outstation taxi from Noida to Jaipur via the Delhi-Mumbai Expressway with verified drivers and flat pricing.",
  },
  {
    slug: "noida-to-haridwar",
    from: {
      name: "Noida",
      slug: "noida",
    },
    to: {
      name: "Haridwar",
      slug: "haridwar",
    },
    distance: "215 km",
    duration: "3 hr 45 min",
    popular: true,
    description:
      "Plan your spiritual trip with reliable Noida to Haridwar cab service. Sanitized AC cabs with direct doorstep pickup.",
  },
  {
    slug: "noida-to-lucknow",
    from: {
      name: "Noida",
      slug: "noida",
    },
    to: {
      name: "Lucknow",
      slug: "lucknow",
    },
    distance: "510 km",
    duration: "6 hr 30 min",
    popular: true,
    description:
      "Seamless highway travel from Noida to Lucknow via Agra-Lucknow Expressway. Clean Sedans, SUVs, and Tempo Travellers available.",
  },
  {
    slug: "noida-to-vrindavan",
    from: {
      name: "Noida",
      slug: "noida",
    },
    to: {
      name: "Vrindavan",
      slug: "vrindavan",
    },
    distance: "140 km",
    duration: "2 hr 15 min",
    popular: true,
    description:
      "Book a one-way or same-day round-trip taxi from Noida to Vrindavan via Yamuna Expressway for a peaceful pilgrimage journey.",
  },

  {
    slug: "noida-to-ghaziabad",
    from: {
      name: "Noida",
      slug: "noida",
    },
    to: {
      name: "Ghaziabad",
      slug: "ghaziabad",
    },
    distance: "20 km",
    duration: "40 min",
    popular: true,
    description:
      "Book a reliable taxi from Noida to Ghaziabad with affordable fares and comfortable vehicles.",
  },

  {
    slug: "noida-to-greater-noida",
    from: {
      name: "Noida",
      slug: "noida",
    },
    to: {
      name: "Greater Noida",
      slug: "greater-noida",
    },
    distance: "30 km",
    duration: "45 min",
    popular: true,
    description:
      "Book a comfortable taxi from Noida to Greater Noida with reliable drivers and transparent fares.",
  },

  {
    slug: "noida-to-faridabad",
    from: {
      name: "Noida",
      slug: "noida",
    },
    to: {
      name: "Faridabad",
      slug: "faridabad",
    },
    distance: "35 km",
    duration: "1 hr",
    description:
      "Book a taxi from Noida to Faridabad with comfortable cabs and reliable service.",
  },

  {
    slug: "noida-to-meerut",
    from: {
      name: "Noida",
      slug: "noida",
    },
    to: {
      name: "Meerut",
      slug: "meerut",
    },
    distance: "65 km",
    duration: "1 hr 30 min",
    description:
      "Book a reliable taxi from Noida to Meerut with comfortable cabs, professional drivers and affordable fares.",
  },

  {
    slug: "noida-to-hapur",
    from: {
      name: "Noida",
      slug: "noida",
    },
    to: {
      name: "Hapur",
      slug: "hapur",
    },
    distance: "50 km",
    duration: "1 hr 15 min",
    description:
      "Book a reliable taxi from Noida to Hapur with comfortable vehicles and professional drivers.",
  },

  {
    slug: "noida-to-bulandshahr",
    from: {
      name: "Noida",
      slug: "noida",
    },
    to: {
      name: "Bulandshahr",
      slug: "bulandshahr",
    },
    distance: "65 km",
    duration: "1 hr 30 min",
    description:
      "Book a reliable taxi from Noida to Bulandshahr with comfortable cabs and professional drivers.",
  },

  {
    slug: "noida-to-mathura",
    from: {
      name: "Noida",
      slug: "noida",
    },
    to: {
      name: "Mathura",
      slug: "mathura",
    },
    distance: "145 km",
    duration: "2 hr 30 min",
    description:
      "Book a comfortable taxi from Noida to Mathura with reliable drivers and convenient pickup service.",
  },

  {
    slug: "noida-to-agra",
    from: {
      name: "Noida",
      slug: "noida",
    },
    to: {
      name: "Agra",
      slug: "agra",
    },
    distance: "165 km",
    duration: "3 hr",
    description:
      "Book a reliable taxi from Noida to Agra with comfortable vehicles and professional drivers.",
  },
];

export function getRouteBySlug(slug: string) {
  return routes.find((route) => route.slug === slug);
}

export function getVehicleRouteSlug(
  route: RouteData,
  vehicle: Vehicle
) {
  return `${route.slug}-${vehicle.slug}-taxi`;
}