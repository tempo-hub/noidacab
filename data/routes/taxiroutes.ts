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