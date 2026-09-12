import {
  FaMapMarkedAlt,
  FaPlaneDeparture,
  FaRoute,
  FaBusinessTime,
  FaClock,
  FaCarSide,
} from "react-icons/fa";

import { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "local-cab",
    title: "Local Cab",
    description:
      "Comfortable and affordable local taxi service across Noida and Greater Noida.",
    image: "/service/local.webp",
    icon: FaMapMarkedAlt,
    href: "/local-cab",
  },
  {
    slug: "airport-transfer",
    title: "Airport Transfer",
    description:
      "24×7 airport pickup and drop service to Delhi Airport and Jewar Airport.",
    image: "/service/airport.webp",
    icon: FaPlaneDeparture,
    href: "/airport-transfer",
  },
  {
    slug: "outstation-cab",
    title: "Outstation Taxi",
    description:
      "Book one-way and round-trip outstation taxis with verified drivers.",
    image: "/service/outstaion.webp",
    icon: FaRoute,
    href: "/outstation-cab",
  },
  {
    slug: "corporate-cab",
    title: "Corporate Travel",
    description:
      "Reliable transportation solutions for business meetings and corporate travel.",
    image: "/service/corporate.webp",
    icon: FaBusinessTime,
    href: "/corporate-cab",
  },
  {
    slug: "hourly-rental",
    title: "Hourly Rental",
    description:
      "Flexible cab rentals for shopping, meetings and city tours.",
    image: "/service/hourly.webp",
    icon: FaClock,
    href: "/hourly-rental",
  },
  {
    slug: "chauffeur-service",
    title: "Chauffeur Service",
    description:
      "Professional chauffeurs with premium vehicles for every occasion.",
    image: "/service/chauffeur.webp",
    icon: FaCarSide,
    href: "/chauffeur-service",
  },
];