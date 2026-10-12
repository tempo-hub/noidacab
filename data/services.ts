import {
  FaMapMarkedAlt,
  FaPlaneDeparture,
  FaRoute,
  FaBusinessTime,
  FaClock,
  FaCarSide,
  FaTaxi,
  FaUsers,
  FaGem,
  FaRoad,
} from "react-icons/fa";

import { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "local-cab",
    title: "Local Cab Service in Noida",
    description:
      "Book a local cab across Noida and Greater Noida for shopping, office commutes, school runs, city travel and everyday transportation.",
    image: "/service/local.webp",
    icon: FaMapMarkedAlt,
    href: "/local-cab",
  },
  {
    slug: "airport-transfer",
    title: "Airport Transfer",
    description:
      "Arrange airport pickup and drop-offs between Noida, Delhi IGI Airport Terminals 1, 2 and 3, and Jewar Airport. Share your flight details when booking.",
    image: "/service/airport.webp",
    icon: FaPlaneDeparture,
    href: "/airport-transfer",
  },
  // {
  //   slug: "noida-to-delhi-taxi",
  //   title: "Noida to Delhi Taxi",
  //   description:
  //     "Book a cab from Noida to Delhi for office meetings, hospitals, railway stations, sightseeing and other city journeys. One-way and round-trip options are available.",
  //   image: "/service/local.webp",
  //   icon: FaTaxi,
  //   href: "/route/noida-to-delhi-taxi",
  // },
  {
    slug: "one-way-taxi",
    title: "One-Way Taxi Service",
    description:
      "Arrange a one-way cab from Noida to Delhi, Gurgaon, Ghaziabad, airports and other destinations. Confirm the applicable fare before your journey.",
    image: "/service/outstaion.webp",
    icon: FaRoute,
    href: "/route/noida-to-delhi-one-way-taxi",
  },
  {
    slug: "outstation-cab",
    title: "Outstation Taxi",
    description:
      "Plan one-way or round-trip journeys from Noida to Agra, Mathura-Vrindavan, Jaipur, Haridwar, Rishikesh, Dehradun, Nainital and other destinations.",
    image: "/service/outstaion.webp",
    icon: FaRoad,
    href: "/outstation-cab",
  },
  {
    slug: "corporate-cab",
    title: "Corporate Cab Service",
    description:
      "Arrange employee transportation, business meeting transfers, executive airport pickups and recurring corporate travel across Noida.",
    image: "/service/corporate.webp",
    icon: FaBusinessTime,
    href: "/corporate-cab",
  },
  {
    slug: "hourly-rental",
    title: "Hourly and Full-Day Cab Rental",
    description:
      "Hire a cab with a driver for shopping, multiple meetings, weddings, Delhi sightseeing and full-day travel according to your itinerary.",
    image: "/service/hourly.webp",
    icon: FaClock,
    href: "/hourly-rental",
  },
  {
    slug: "chauffeur-service",
    title: "Premium Chauffeur Service",
    description:
      "Arrange chauffeur-driven sedans and premium vehicles for weddings, VIP guests, corporate events and special occasions.",
    image: "/service/chauffeur.webp",
    icon: FaCarSide,
    href: "/chauffeur-service",
  },
  {
    slug: "tempo-traveller",
    title: "Tempo Traveller on Rent in Noida",
    description:
      "Book a Tempo Traveller for family holidays, wedding guests, corporate outings, pilgrimages and group tours. Choose a suitable seating capacity based on availability.",
    image: "/service/outstaion.webp",
    icon: FaUsers,
    href: "/route/noida-to-delhi-tempo-traveller",
  },
  {
    slug: "luxury-tempo-traveller",
    title: "Luxury Tempo Traveller",
    description:
      "Explore luxury Tempo Traveller rental options for group outings, family tours, weddings and comfortable outstation journeys from Noida.",
    image: "/cabs/urbaniafirst.webp",
    icon: FaGem,
    href: "/route/noida-to-delhi-luxury-tempo-traveller",
  },
];