import BookingCTA from "@/components/routes/taxi-fare-in-noida/BookingCTA";
import DistanceTravelTime from "@/components/routes/taxi-fare-in-noida/DistanceTravelTime";
import FareCabs from "@/components/routes/taxi-fare-in-noida/FareCabs";
import FareCalculation from "@/components/routes/taxi-fare-in-noida/FareCalculation";
import FareHero from "@/components/routes/taxi-fare-in-noida/FareHero";
import FareInclusions from "@/components/routes/taxi-fare-in-noida/FareInclusions";
import FareTable from "@/components/routes/taxi-fare-in-noida/FareTable";
import PopularPickupLocations from "@/components/routes/taxi-fare-in-noida/PopularPickupLocations";
import RelatedRoutes from "@/components/routes/taxi-fare-in-noida/RelatedRoutes";
import TaxiFareFAQ from "@/components/routes/taxi-fare-in-noida/TaxiFareFAQ";
import TripFareComparison from "@/components/routes/taxi-fare-in-noida/TripFareComparison";
import WhyChooseUs from "@/components/routes/taxi-fare-in-noida/WhyChooseUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taxi Fare in Noida Cabs Starting @ ₹1100 + 10% OFF - Book Now",
  description: "Check affordable taxi fares in Noida. Book Hatchbacks, Sedans starting from ₹1100 and SUVs starting from ₹1280. Transparent pricing, no hidden costs. Call 8377809809.",
}

const fareCabs = [
  {
    id: "wagonr",
    name: "WagonR",
    image: "/cabs/wagonrmain.webp",
    href: "/taxi/wagonr",
    rating: 4.8,
    ratingsCount: 1250,
    category: "Hatchback",
    ac: true,
    seats: 4,
    description:
      "Affordable and comfortable WagonR for budget-friendly taxi travel.",
    extraKmFare: "₹10/km",
    extraTimeFare: "₹100/hour",
    fuelType: "Petrol/CNG",
    cancellation: "Free cancellation",
    price: 1100,
    taxes: 250,
  },

  {
    id: "dzire",
    name: "Dzire",
    image: "/cabs/dziremain.webp",
    href: "/taxi/dzire",
    rating: 4.8,
    ratingsCount: 1400,
    category: "Sedan",
    ac: true,
    seats: 4,
    description:
      "Comfortable Dzire sedan with spacious seating and a smooth ride.",
    extraKmFare: "₹10/km",
    extraTimeFare: "₹100/hour",
    fuelType: "Petrol/CNG",
    cancellation: "Free cancellation",
    price: 1100,
    taxes: 250,
  },

  {
    id: "etios",
    name: "Etios",
    image: "/cabs/etiosmain.webp",
    href: "/taxi/etios",
    rating: 4.8,
    ratingsCount: 1100,
    category: "Sedan",
    ac: true,
    seats: 4,
    description:
      "Reliable Etios sedan offering comfortable seating and generous luggage space.",
    extraKmFare: "₹10/km",
    extraTimeFare: "₹100/hour",
    fuelType: "Diesel",
    cancellation: "Free cancellation",
    price: 1100,
    taxes: 250,
  },

  {
    id: "amaze",
    name: "Amaze",
    image: "/cabs/amazemain.webp",
    href: "/taxi/amaze",
    rating: 4.8,
    ratingsCount: 950,
    category: "Sedan",
    ac: true,
    seats: 4,
    description:
      "Honda Amaze with comfortable interiors for a relaxed taxi journey.",
    extraKmFare: "₹10/km",
    extraTimeFare: "₹100/hour",
    fuelType: "Petrol",
    cancellation: "Free cancellation",
    price: 1100,
    taxes: 250,
  },

  {
    id: "ertiga",
    name: "Ertiga",
    image: "/cabs/ertigamain.webp",
    href: "/taxi/ertiga",
    rating: 4.9,
    ratingsCount: 1300,
    category: "SUV",
    ac: true,
    seats: 6,
    description:
      "Spacious Ertiga suitable for families and small groups with extra luggage.",
    extraKmFare: "₹13/km",
    extraTimeFare: "₹120/hour",
    fuelType: "Petrol/CNG",
    cancellation: "Free cancellation",
    price: 1280,
    taxes: 580,
  },

  {
    id: "innova-crysta",
    name: "Innova Crysta",
    image: "/cabs/innovamain.webp",
    href: "/taxi/innova-crysta",
    rating: 4.9,
    ratingsCount: 1500,
    category: "SUV",
    ac: true,
    seats: 6,
    description:
      "Premium Innova Crysta offering spacious seating and comfortable travel.",
    extraKmFare: "₹16/km",
    extraTimeFare: "₹150/hour",
    fuelType: "Diesel",
    cancellation: "Free cancellation",
    price: 1460,
    taxes: 580,
  },

//   {
//     id: "urbania",
//     name: "Force Urbania",
//     image: "/cabs/urbaniafirst.webp",
//     href: "/taxi/urbania",
//     rating: 4.9,
//     ratingsCount: 700,
//     category: "Urbania",
//     ac: true,
//     seats: 12,
//     description:
//       "Premium Force Urbania for comfortable group travel with spacious interiors.",
//     extraKmFare: "₹20/km",
//     extraTimeFare: "₹200/hour",
//     fuelType: "Diesel",
//     cancellation: "Free cancellation",
//     price: 1700,
//     taxes: 0,
//   },

//   {
//     id: "12-seater-tempo-traveller",
//     name: "12 Seater Tempo Traveller",
//     image: "/cabs/tempofirst.webp",
//     href: "/taxi/12-seater-tempo-traveller",
//     rating: 4.9,
//     ratingsCount: 500,
//     category: "Tempo Traveller",
//     ac: true,
//     seats: 12,
//     description:
//       "Comfortable 12-seater Tempo Traveller for family and group journeys.",
//     extraKmFare: "₹20/km",
//     extraTimeFare: "₹200/hour",
//     fuelType: "Diesel",
//     cancellation: "Free cancellation",
//     price: 1700,
//     taxes: 0,
//   },

//   {
//     id: "16-seater-tempo-traveller",
//     name: "16 Seater Tempo Traveller",
//     image: "/cabs/tempofirst.webp",
//     href: "/taxi/16-seater-tempo-traveller",
//     rating: 4.9,
//     ratingsCount: 450,
//     category: "Tempo Traveller",
//     ac: true,
//     seats: 16,
//     description:
//       "Spacious 16-seater Tempo Traveller designed for comfortable group travel.",
//     extraKmFare: "₹20/km",
//     extraTimeFare: "₹200/hour",
//     fuelType: "Diesel",
//     cancellation: "Free cancellation",
//     price: 1700,
//     taxes: 0,
//   },

//   {
//     id: "20-seater-tempo-traveller",
//     name: "20 Seater Tempo Traveller",
//     image: "/cabs/tempofirst.webp",
//     href: "/taxi/20-seater-tempo-traveller",
//     rating: 4.9,
//     ratingsCount: 350,
//     category: "Tempo Traveller",
//     ac: true,
//     seats: 20,
//     description:
//       "Large 20-seater Tempo Traveller for comfortable group and family travel.",
//     extraKmFare: "₹20/km",
//     extraTimeFare: "₹200/hour",
//     fuelType: "Diesel",
//     cancellation: "Free cancellation",
//     price: 1700,
//     taxes: 0,
//   },

//   {
//     id: "24-seater-tempo-traveller",
//     name: "24 Seater Tempo Traveller",
//     image: "/cabs/tempofirst.webp",
//     href: "/taxi/24-seater-tempo-traveller",
//     rating: 4.9,
//     ratingsCount: 300,
//     category: "Tempo Traveller",
//     ac: true,
//     seats: 24,
//     description:
//       "Spacious 24-seater Tempo Traveller ideal for large groups and tours.",
//     extraKmFare: "₹20/km",
//     extraTimeFare: "₹200/hour",
//     fuelType: "Diesel",
//     cancellation: "Free cancellation",
//     price: 1700,
//     taxes: 0,
//   },
];


export default function FarePage() {
  return (
    <>
      <FareHero />

      <FareCabs cabs={fareCabs} />

      <TripFareComparison />

      <FareTable cabs={fareCabs} />

      <FareInclusions />

      <DistanceTravelTime />

      <FareCalculation />

      <RelatedRoutes />

      <WhyChooseUs />

      <PopularPickupLocations />

      <TaxiFareFAQ />

      <BookingCTA />

    </>
  );
}