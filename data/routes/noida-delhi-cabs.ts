// src/data/routes/noida-delhi-cabs.ts

//noidataxi
export type NoidaDelhiTaxi = {
  id: string;
  name: string;
  category:
    | "Tempo Traveller"
    | "Urbania";

  models: string[];
  seats: number;
  ac: boolean;

  rating: number;
  ratingsCount: number;

  description: string;

  price: number;
  taxes: number;

  extraKmFare: string;
  extraTimeFare: string;

  fuelType: "CNG" | "DIESEL" | "ELECTRIC" | "PETROL";

  cancellation: string;

  image: string;
  href?: string;
};

//noidacabs
export type NoidaDelhiCab = {
  id: string;
  name: string;
  category:
    | "Sedan"
    | "Hatchback"
    | "SUV"

  models: string[];
  seats: number;
  ac: boolean;

  rating: number;
  ratingsCount: number;

  description: string;

  price: number;
  taxes: number;

  extraKmFare: string;
  extraTimeFare: string;

  fuelType: "CNG" | "DIESEL" | "ELECTRIC" | "PETROL";

  cancellation: string;

  image: string;
  href?: string;
};

export const noidaDelhiCabs: NoidaDelhiCab[] = [
  // --------------------------------------------------
  // SEDAN
  // --------------------------------------------------

  {
    id: "dzire",
    name: "Dzire",
    category: "Sedan",
    models: ["Swift Dzire"],
    seats: 4,
    ac: true,
    rating: 4.2,
    ratingsCount: 467,
    description: "Affordable and spacious sedan for comfortable Noida to Delhi travel.",
    price: 1000,
    taxes: 95,
    extraKmFare: "₹18/km after 40 kms",
    extraTimeFare: "₹166 per hr after 4hr",
    fuelType: "CNG",
    cancellation: "Free till 6 hours of departure",
    image: "/cabs/dzirefirst.webp",
    href: "/noida-to-delhi-dzire-taxi",
  },

  {
    id: "etios",
    name: "Etios",
    category: "Sedan",
    models: ["Toyota Etios"],
    seats: 4,
    ac: true,
    rating: 4.3,
    ratingsCount: 0,
    description: "Reliable sedan with comfortable seating for everyday and outstation travel.",
    price: 1100,
    taxes: 100,
    extraKmFare: "₹18/km after 40 kms",
    extraTimeFare: "₹175 per hr after 4hr",
    fuelType: "DIESEL",
    cancellation: "Free till 6 hours of departure",
    image: "/cabs/etiosfirst.webp",
    href: "/noida-to-delhi-etios-taxi",
  },

  {
    id: "amaze",
    name: "Amaze",
    category: "Sedan",
    models: ["Honda Amaze"],
    seats: 4,
    ac: true,
    rating: 4.4,
    ratingsCount: 0,
    description: "Comfortable premium sedan for city, airport and outstation rides.",
    price: 1150,
    taxes: 105,
    extraKmFare: "₹19/km after 40 kms",
    extraTimeFare: "₹180 per hr after 4hr",
    fuelType: "PETROL",
    cancellation: "Free till 6 hours of departure",
    image: "/cabs/amazefirst.webp",
    href: "/noida-to-delhi-amaze-taxi",
  },

  // --------------------------------------------------
  // HATCHBACK
  // --------------------------------------------------

  {
    id: "wagonr",
    name: "WagonR / Swift",
    category: "Hatchback",
    models: ["WagonR", "Swift"],
    seats: 4,
    ac: true,
    rating: 4.4,
    ratingsCount: 15240,
    description: "Economical compact cars for affordable everyday travel.",
    price: 1041,
    taxes: 95,
    extraKmFare: "₹10/km after 40 kms",
    extraTimeFare: "₹1.82 per min after 4hr",
    fuelType: "CNG",
    cancellation: "Free till 1 hour of departure",
    image: "/cabs/dzirefirst.webp",
  },

  // --------------------------------------------------
  // SUV
  // --------------------------------------------------

  {
    id: "ertiga",
    name: "Maruti Suzuki Ertiga",
    category: "SUV",
    models: ["Ertiga"],
    seats: 6,
    ac: true,
    rating: 4.4,
    ratingsCount: 820,
    description: "Spacious family SUV with comfortable seating for group travel.",
    price: 1450,
    taxes: 120,
    extraKmFare: "₹20/km after 40 kms",
    extraTimeFare: "₹200 per hr after 4hr",
    fuelType: "CNG",
    cancellation: "Free till 6 hours of departure",
    image: "/cabs/ertigafirst.webp",
    href: "/noida-to-delhi-ertiga-taxi",
  },

  {
    id: "innova-crysta",
    name: "Innova Crysta",
    category: "SUV",
    models: ["Innova Crysta"],
    seats: 6,
    ac: true,
    rating: 4.6,
    ratingsCount: 1120,
    description: "Premium spacious SUV for family, business and long-distance travel.",
    price: 2100,
    taxes: 150,
    extraKmFare: "₹25/km after 40 kms",
    extraTimeFare: "₹250 per hr after 4hr",
    fuelType: "DIESEL",
    cancellation: "Free till 6 hours of departure",
    image: "/cabs/innovafirst.webp",
    href: "/noida-to-delhi-innova-crysta-taxi",
  },
];



export const noidaDelhiTempo: NoidaDelhiTaxi[] = [
  // --------------------------------------------------
  // URBANIA
  // --------------------------------------------------
  {
    id: "force-urbania",
    name: "Force Urbania",
    category: "Urbania",
    models: ["Force Urbania"],
    seats: 12,
    ac: true,
    rating: 4.6,
    ratingsCount: 0,
    description:
      "Premium Urbania rental for comfortable family, corporate and group travel.",
    price: 2800,
    taxes: 200,
    extraKmFare: "₹30/km after 40 kms",
    extraTimeFare: "₹300 per hr after 4hr",
    fuelType: "DIESEL",
    cancellation: "Free till 12 hours of departure",
    image: "/cabs/urbaniafirst.webp",
    href: "/noida-to-delhi-urbania-rental",
  },

  // --------------------------------------------------
  // TEMPO TRAVELLER
  // --------------------------------------------------

  {
    id: "luxury-tempo-traveller",
    name: "Luxury Tempo Traveller",
    category: "Tempo Traveller",
    models: ["Luxury Tempo Traveller"],
    seats: 12,
    ac: true,
    rating: 4.7,
    ratingsCount: 0,
    description:
      "Premium Tempo Traveller designed for comfortable family and corporate group journeys.",
    price: 3200,
    taxes: 225,
    extraKmFare: "₹32/km after 40 kms",
    extraTimeFare: "₹325 per hr after 4hr",
    fuelType: "DIESEL",
    cancellation: "Free till 12 hours of departure",
    image: "/cabs/tempofirst.webp",
    href: "/noida-to-delhi-luxury-tempo-traveller",
  },

  {
    id: "12-seater-tempo-traveller",
    name: "12 Seater Tempo Traveller",
    category: "Tempo Traveller",
    models: ["12 Seater Tempo Traveller"],
    seats: 12,
    ac: true,
    rating: 4.5,
    ratingsCount: 0,
    description:
      "Comfortable 12-seater Tempo Traveller for family trips and group transportation.",
    price: 2600,
    taxes: 190,
    extraKmFare: "₹28/km after 40 kms",
    extraTimeFare: "₹280 per hr after 4hr",
    fuelType: "DIESEL",
    cancellation: "Free till 12 hours of departure",
    image: "/cabs/tempofirst.webp",
    href: "/noida-to-delhi-12-seater-tempo-traveller",
  },

  {
    id: "16-seater-tempo-traveller",
    name: "16 Seater Tempo Traveller",
    category: "Tempo Traveller",
    models: ["16 Seater Tempo Traveller"],
    seats: 16,
    ac: true,
    rating: 4.5,
    ratingsCount: 0,
    description:
      "Spacious 16-seater Tempo Traveller for larger families and group journeys.",
    price: 3400,
    taxes: 240,
    extraKmFare: "₹32/km after 40 kms",
    extraTimeFare: "₹340 per hr after 4hr",
    fuelType: "DIESEL",
    cancellation: "Free till 12 hours of departure",
    image: "/cabs/tempofirst.webp",
    href: "/noida-to-delhi-16-seater-tempo-traveller",
  },

  {
    id: "20-seater-tempo-traveller",
    name: "20 Seater Tempo Traveller",
    category: "Tempo Traveller",
    models: ["20 Seater Tempo Traveller"],
    seats: 20,
    ac: true,
    rating: 4.5,
    ratingsCount: 0,
    description:
      "Large-capacity Tempo Traveller for group tours, events and corporate travel.",
    price: 4000,
    taxes: 280,
    extraKmFare: "₹36/km after 40 kms",
    extraTimeFare: "₹400 per hr after 4hr",
    fuelType: "DIESEL",
    cancellation: "Free till 12 hours of departure",
    image: "/cabs/tempofirst.webp",
    href: "/noida-to-delhi-20-seater-tempo-traveller",
  },

  {
    id: "24-seater-tempo-traveller",
    name: "24 Seater Tempo Traveller",
    category: "Tempo Traveller",
    models: ["24 Seater Tempo Traveller"],
    seats: 24,
    ac: true,
    rating: 4.5,
    ratingsCount: 0,
    description:
      "High-capacity Tempo Traveller for large groups, tours and special events.",
    price: 4600,
    taxes: 320,
    extraKmFare: "₹40/km after 40 kms",
    extraTimeFare: "₹450 per hr after 4hr",
    fuelType: "DIESEL",
    cancellation: "Free till 12 hours of departure",
    image: "/cabs/tempofirst.webp",
    href: "/noida-to-delhi-24-seater-tempo-traveller",
  },
];