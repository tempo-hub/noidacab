// data/routes/noidaRoutes.ts

export interface CabOption {
  name: string;
  slug: string;
  category: "Hatchback" | "Sedan" | "SUV";
  pricePerKm: number;
}

export interface RouteData {
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

export const noidaRoutes: Record<string, RouteData> = {
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

    recommendedCab: {
      name: "Dzire",
      slug: "dzire",
      category: "Sedan",
      pricePerKm: 14,
    },

    routes: [
      "DND Flyway",
      "Noida Expressway",
      "Maharani Bagh",
    ],

    cabs: [
      {
        name: "Dzire",
        slug: "dzire",
        category: "Sedan",
        pricePerKm: 14,
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
    ],
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

    recommendedCab: {
      name: "Dzire",
      slug: "dzire",
      category: "Sedan",
      pricePerKm: 14,
    },

    routes: [
      "NH 9",
      "Noida-Ghaziabad Road",
    ],

    cabs: [
      {
        name: "Dzire",
        slug: "dzire",
        category: "Sedan",
        pricePerKm: 14,
      },
      {
        name: "Ertiga",
        slug: "ertiga",
        category: "SUV",
        pricePerKm: 18,
      },
    ],
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

    recommendedCab: {
      name: "Dzire",
      slug: "dzire",
      category: "Sedan",
      pricePerKm: 14,
    },

    routes: [
      "DND Flyway",
      "Kalindi Kunj",
      "Mathura Road",
    ],

    cabs: [
      {
        name: "Dzire",
        slug: "dzire",
        category: "Sedan",
        pricePerKm: 14,
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
    ],
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

    recommendedCab: {
      name: "Ertiga",
      slug: "ertiga",
      category: "SUV",
      pricePerKm: 18,
    },

    routes: [
      "DND Flyway",
      "Ring Road",
      "NH 48",
    ],

    cabs: [
      {
        name: "Dzire",
        slug: "dzire",
        category: "Sedan",
        pricePerKm: 14,
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
    ],
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

    recommendedCab: {
      name: "Dzire",
      slug: "dzire",
      category: "Sedan",
      pricePerKm: 14,
    },

    routes: [
      "Noida-Greater Noida Expressway",
    ],

    cabs: [
      {
        name: "Dzire",
        slug: "dzire",
        category: "Sedan",
        pricePerKm: 14,
      },
      {
        name: "Ertiga",
        slug: "ertiga",
        category: "SUV",
        pricePerKm: 18,
      },
    ],
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

    recommendedCab: {
      name: "Ertiga",
      slug: "ertiga",
      category: "SUV",
      pricePerKm: 18,
    },

    routes: [
      "NH 9",
      "Delhi-Meerut Expressway",
    ],

    cabs: [
      {
        name: "Dzire",
        slug: "dzire",
        category: "Sedan",
        pricePerKm: 14,
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
    ],
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

    recommendedCab: {
      name: "Dzire",
      slug: "dzire",
      category: "Sedan",
      pricePerKm: 14,
    },

    routes: [
      "NH 9",
    ],

    cabs: [
      {
        name: "Dzire",
        slug: "dzire",
        category: "Sedan",
        pricePerKm: 14,
      },
      {
        name: "Ertiga",
        slug: "ertiga",
        category: "SUV",
        pricePerKm: 18,
      },
    ],
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

    recommendedCab: {
      name: "Ertiga",
      slug: "ertiga",
      category: "SUV",
      pricePerKm: 18,
    },

    routes: [
      "NH 34",
      "Bulandshahr Road",
    ],

    cabs: [
      {
        name: "Dzire",
        slug: "dzire",
        category: "Sedan",
        pricePerKm: 14,
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
    ],
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

    recommendedCab: {
      name: "Innova Crysta",
      slug: "innova-crysta",
      category: "SUV",
      pricePerKm: 22,
    },

    routes: [
      "Yamuna Expressway",
    ],

    cabs: [
      {
        name: "Dzire",
        slug: "dzire",
        category: "Sedan",
        pricePerKm: 14,
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
    ],
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

    recommendedCab: {
      name: "Innova Crysta",
      slug: "innova-crysta",
      category: "SUV",
      pricePerKm: 22,
    },

    routes: [
      "Yamuna Expressway",
    ],

    cabs: [
      {
        name: "Dzire",
        slug: "dzire",
        category: "Sedan",
        pricePerKm: 14,
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
    ],
  },
};