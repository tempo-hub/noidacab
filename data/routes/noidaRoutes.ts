// data/routes/noidaRoutes.ts

export interface CabOption {
  name: string;
  slug: string;
  category: "Hatchback" | "Sedan" | "SUV" | "Tempo Traveller";
  pricePerKm: number;
}

export interface NoidaRouteData {
  slug: string;

  from: {
    name: string;
    slug: string;
  };

  to: {
    name: string;
    slug: string;
  };

  distance: number;
  travelTime: string;

  recommendedCab: CabOption;

  routes: string[];

  cabs: CabOption[];
}

/**
 * All cabs available for Noida city routes
 */
export const noidaCabs: CabOption[] = [
  {
    name: "Dzire",
    slug: "dzire",
    category: "Sedan",
    pricePerKm: 14,
  },

  {
    name: "Amaze",
    slug: "amaze",
    category: "Sedan",
    pricePerKm: 15,
  },

  {
    name: "Etios",
    slug: "etios",
    category: "Sedan",
    pricePerKm: 15,
  },

  {
    name: "Ertiga",
    slug: "ertiga",
    category: "SUV",
    pricePerKm: 18,
  },

  {
    name: "Innova Crysta",
    slug: "innova-crysta",
    category: "SUV",
    pricePerKm: 22,
  },

  {
    name: "Luxury Tempo Traveller",
    slug: "luxury-tempo-traveller",
    category: "Tempo Traveller",
    pricePerKm: 25,
  },

  {
    name: "12 Seater Tempo Traveller",
    slug: "12-seater-tempo-traveller",
    category: "Tempo Traveller",
    pricePerKm: 20,
  },

  {
    name: "16 Seater Tempo Traveller",
    slug: "16-seater-tempo-traveller",
    category: "Tempo Traveller",
    pricePerKm: 22,
  },

  {
    name: "20 Seater Tempo Traveller",
    slug: "20-seater-tempo-traveller",
    category: "Tempo Traveller",
    pricePerKm: 24,
  },

  {
    name: "24 Seater Tempo Traveller",
    slug: "24-seater-tempo-traveller",
    category: "Tempo Traveller",
    pricePerKm: 26,
  },
];

/**
 * Noida city routes
 */
export const noidaRoutes: Record<string, NoidaRouteData> = {
  "noida-to-delhi": {
    slug: "noida-to-delhi",

    from: {
      name: "Noida",
      slug: "noida",
    },

    to: {
      name: "Delhi",
      slug: "delhi",
    },

    distance: 20,
    travelTime: "45 minutes",

    recommendedCab: noidaCabs[0],

    routes: [
      "DND Flyway",
      "Noida Expressway",
      "Maharani Bagh",
    ],

    cabs: noidaCabs,
  },

  "noida-to-ghaziabad": {
    slug: "noida-to-ghaziabad",

    from: {
      name: "Noida",
      slug: "noida",
    },

    to: {
      name: "Ghaziabad",
      slug: "ghaziabad",
    },

    distance: 20,
    travelTime: "45 minutes",

    recommendedCab: noidaCabs[0],

    routes: [
      "NH 9",
      "Noida-Ghaziabad Road",
    ],

    cabs: noidaCabs,
  },

  "noida-to-faridabad": {
    slug: "noida-to-faridabad",

    from: {
      name: "Noida",
      slug: "noida",
    },

    to: {
      name: "Faridabad",
      slug: "faridabad",
    },

    distance: 30,
    travelTime: "60 minutes",

    recommendedCab: noidaCabs[0],

    routes: [
      "DND Flyway",
      "Kalindi Kunj",
      "Mathura Road",
    ],

    cabs: noidaCabs,
  },

  "noida-to-gurgaon": {
    slug: "noida-to-gurgaon",

    from: {
      name: "Noida",
      slug: "noida",
    },

    to: {
      name: "Gurgaon",
      slug: "gurgaon",
    },

    distance: 45,
    travelTime: "90 minutes",

    recommendedCab: noidaCabs[3],

    routes: [
      "DND Flyway",
      "Ring Road",
      "NH 48",
    ],

    cabs: noidaCabs,
  },

  "noida-to-greater-noida": {
    slug: "noida-to-greater-noida",

    from: {
      name: "Noida",
      slug: "noida",
    },

    to: {
      name: "Greater Noida",
      slug: "greater-noida",
    },

    distance: 30,
    travelTime: "45 minutes",

    recommendedCab: noidaCabs[0],

    routes: [
      "Noida-Greater Noida Expressway",
    ],

    cabs: noidaCabs,
  },

  "noida-to-meerut": {
    slug: "noida-to-meerut",

    from: {
      name: "Noida",
      slug: "noida",
    },

    to: {
      name: "Meerut",
      slug: "meerut",
    },

    distance: 65,
    travelTime: "90 minutes",

    recommendedCab: noidaCabs[3],

    routes: [
      "NH 9",
      "Delhi-Meerut Expressway",
    ],

    cabs: noidaCabs,
  },

  "noida-to-hapur": {
    slug: "noida-to-hapur",

    from: {
      name: "Noida",
      slug: "noida",
    },

    to: {
      name: "Hapur",
      slug: "hapur",
    },

    distance: 50,
    travelTime: "75 minutes",

    recommendedCab: noidaCabs[0],

    routes: [
      "NH 9",
    ],

    cabs: noidaCabs,
  },

  "noida-to-bulandshahr": {
    slug: "noida-to-bulandshahr",

    from: {
      name: "Noida",
      slug: "noida",
    },

    to: {
      name: "Bulandshahr",
      slug: "bulandshahr",
    },

    distance: 65,
    travelTime: "90 minutes",

    recommendedCab: noidaCabs[3],

    routes: [
      "NH 34",
      "Bulandshahr Road",
    ],

    cabs: noidaCabs,
  },

  "noida-to-mathura": {
    slug: "noida-to-mathura",

    from: {
      name: "Noida",
      slug: "noida",
    },

    to: {
      name: "Mathura",
      slug: "mathura",
    },

    distance: 145,
    travelTime: "150 minutes",

    recommendedCab: noidaCabs[4],

    routes: [
      "Yamuna Expressway",
    ],

    cabs: noidaCabs,
  },

  "noida-to-agra": {
    slug: "noida-to-agra",

    from: {
      name: "Noida",
      slug: "noida",
    },

    to: {
      name: "Agra",
      slug: "agra",
    },

    distance: 165,
    travelTime: "180 minutes",

    recommendedCab: noidaCabs[4],

    routes: [
      "Yamuna Expressway",
    ],

    cabs: noidaCabs,
  },
};

/**
 * Get route by slug
 */
export function getNoidaRoute(
  slug: string
): NoidaRouteData | null {
  return noidaRoutes[slug] ?? null;
}