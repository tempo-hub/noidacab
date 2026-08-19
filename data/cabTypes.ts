// data/cabTypes.ts
export interface CabType {
  id: string;
  name: string;
  type: string;
  seats: number;
  perKmRate: number;
  image: string;
}

export const cabTypes: CabType[] = [
  { id: "wagonr", name: "WagonR", type: "Hatchback", seats: 4, perKmRate: 10, image: "/cabs/wagonrfirst.webp", },
  { id: "dzire",  name: "Dzire",  type: "Sedan",     seats: 4, perKmRate: 10,image: "/cabs/dzirefirst.webp", },
  { id: "etios",  name: "Etios",  type: "Sedan",     seats: 4, perKmRate: 10, image: "/cabs/etiosfirst.webp", },
  { id: "amaze",  name: "Amaze",  type: "Sedan",     seats: 4, perKmRate: 12, image: "/cabs/amazefirst.webp", },
  { id: "ertiga", name: "Ertiga", type: "SUV",       seats: 6, perKmRate: 14, image: "/cabs/ertigafirst.webp", },
  { id: "innova", name: "Innova", type: "SUV",       seats: 7, perKmRate: 17,  image: "/cabs/innovafirst.webp", },
  
];