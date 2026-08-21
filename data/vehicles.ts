export type Vehicle = {
  name: string;
  slug: string;
  image: string;
  price: string;
  

  seats: number;
  doors: number;
  luggage: number;

  airCondition: boolean;
  gps: boolean;
  driverChoice: boolean;

  category:
    | "Hatchback"
    | "Sedan"
    | "SUV"
    | "Urbania"
    | "Tempo Traveller";
};

export const vehicles: Vehicle[] = [
  // -----------------------------
  // HATCHBACK
  // -----------------------------

  {
    name: "WagonR",
    slug: "wagonr",
    image: "/cabs/wagonrmain.webp",
    price: "₹11/km",

    seats: 4,
    doors: 4,
    luggage: 2,

    airCondition: true,
    gps: true,
    driverChoice: true,

    category: "Hatchback",
  },

  {
    name: "Swift",
    slug: "swift",
    image: "/cabs/dziremain.webp",
    price: "₹12/km",

    seats: 4,
    doors: 4,
    luggage: 2,

    airCondition: true,
    gps: true,
    driverChoice: true,

    category: "Hatchback",
  },
  {
    name: "Dzire",
    slug: "dzire",
    image: "/cabs/dziremain.webp",
    price: "₹12/km",

    seats: 4,
    doors: 4,
    luggage: 2,

    airCondition: true,
    gps: true,
    driverChoice: true,

    category: "Hatchback",
  },

  // -----------------------------
  // SEDAN
  // -----------------------------

  // {
  //   name: "Swift Dzire",
  //   slug: "dzire",
  //   image: "/cabs/dziremain.webp",
  //   price: "₹12/km",

  //   seats: 4,
  //   doors: 4,
  //   luggage: 2,

  //   airCondition: true,
  //   gps: true,
  //   driverChoice: true,

  //   category: "Sedan",
  // },

  {
    name: "Etios",
    slug: "etios",
    image: "/cabs/etiosmain.webp",
    price: "₹13/km",

    seats: 4,
    doors: 4,
    luggage: 3,

    airCondition: true,
    gps: true,
    driverChoice: true,

    category: "Sedan",
  },

  {
    name: "Amaze",
    slug: "amaze",
    image: "/cabs/amazemain.webp",
    price: "₹13/km",

    seats: 4,
    doors: 4,
    luggage: 3,

    airCondition: true,
    gps: true,
    driverChoice: true,

    category: "Sedan",
  },

  // -----------------------------
  // SUV
  // -----------------------------

  {
    name: "Ertiga",
    slug: "ertiga",
    image: "/cabs/ertigamain.webp",
    price: "₹16/km",

    seats: 6,
    doors: 4,
    luggage: 4,

    airCondition: true,
    gps: true,
    driverChoice: true,

    category: "SUV",
  },

  {
    name: "Innova Crysta",
    slug: "innova",
    image: "/cabs/innovamain.webp",
    price: "₹18/km",

    seats: 6,
    doors: 4,
    luggage: 4,

    airCondition: true,
    gps: true,
    driverChoice: true,

    category: "SUV",
  },
  {
    name: "Innova Crysta",
    slug: "innova-crysta",
    image: "/cabs/innovamain.webp",
    price: "₹18/km",

    seats: 6,
    doors: 4,
    luggage: 4,

    airCondition: true,
    gps: true,
    driverChoice: true,

    category: "SUV",
  },

  // {
  //   name: "Toyota Innova Crysta",
  //   slug: "innova-crysta",
  //   image: "/cabs/innovamain.webp",
  //   price: "₹20/km",

  //   seats: 7,
  //   doors: 4,
  //   luggage: 5,

  //   airCondition: true,
  //   gps: true,
  //   driverChoice: true,

  //   category: "SUV",
  // },

  // {
  //   name: "MG ZS",
  //   slug: "mg-zs",
  //   image: "/cabs/mgzsmain.webp",
  //   price: "₹20/km",

  //   seats: 5,
  //   doors: 5,
  //   luggage: 3,

  //   airCondition: true,
  //   gps: true,
  //   driverChoice: true,

  //   category: "SUV",
  // },

  // -----------------------------
  // URBANIA
  // -----------------------------

  {
    name: "Force Urbania",
    slug: "urbania",
    image: "/cabs/urbaniamain.webp",
    price: "₹28/km",

    seats: 12,
    doors: 4,
    luggage: 8,

    airCondition: true,
    gps: true,
    driverChoice: true,

    category: "Urbania",
  },

  // -----------------------------
  // TEMPO TRAVELLER
  // -----------------------------

  {
    name: "Luxury Tempo Traveller",
    slug: "luxury-tempo-traveller",
    image: "/cabs/luxurytempomain.webp",
    price: "₹30/km",

    seats: 12,
    doors: 4,
    luggage: 10,

    airCondition: true,
    gps: true,
    driverChoice: true,

    category: "Tempo Traveller",
  },

  {
    name: "12 Seater Tempo Traveller",
    slug: "12-seater-tempo-traveller",
    image: "/cabs/tempo12main.webp",
    price: "₹28/km",

    seats: 12,
    doors: 4,
    luggage: 10,

    airCondition: true,
    gps: true,
    driverChoice: true,

    category: "Tempo Traveller",
  },

  {
    name: "16 Seater Tempo Traveller",
    slug: "16-seater-tempo-traveller",
    image: "/cabs/tempo16main.webp",
    price: "₹32/km",

    seats: 16,
    doors: 4,
    luggage: 14,

    airCondition: true,
    gps: true,
    driverChoice: true,

    category: "Tempo Traveller",
  },

  {
    name: "20 Seater Tempo Traveller",
    slug: "20-seater-tempo-traveller",
    image: "/cabs/tempo20main.webp",
    price: "₹36/km",

    seats: 20,
    doors: 4,
    luggage: 18,

    airCondition: true,
    gps: true,
    driverChoice: true,

    category: "Tempo Traveller",
  },

  {
    name: "24 Seater Tempo Traveller",
    slug: "24-seater-tempo-traveller",
    image: "/cabs/tempo24main.webp",
    price: "₹40/km",

    seats: 24,
    doors: 4,
    luggage: 20,

    airCondition: true,
    gps: true,
    driverChoice: true,

    category: "Tempo Traveller",
  },
];