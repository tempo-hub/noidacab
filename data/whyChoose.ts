import {
  BadgeCheck,
  IndianRupee,
  Clock3,
  ShieldCheck,
  CarFront,
  Headphones,
  Clock,
  MapPin,
  Car,
} from "lucide-react";

import { WhyChoose } from "@/types/why-choose";

export const whyChoose: WhyChoose[] = [
 {
    icon: IndianRupee,
    title: "Upfront, Transparent Fares",
    description:
      "Share your pickup and drop locations to get your fare before confirming your ride. Know the quoted price in advance and clarify any applicable extra charges before your journey.",
  },
  {
    icon: ShieldCheck,
    title: "Driver & Vehicle Details",
    description:
      "Get the available driver and vehicle details before pickup so you can identify your cab and travel with greater confidence.",
  },
  {
    icon: Car,
    title: "Vehicles for Every Group",
    description:
      "Choose a hatchback for short trips, a sedan for airport transfers, an Ertiga or Innova Crysta for family travel and luggage, or a Tempo Traveller for group journeys.",
  },
  {
    icon: MapPin,
    title: "Local Noida Route Knowledge",
    description:
      "Book rides across Noida and Greater Noida with drivers familiar with local sectors, the DND Flyway, the Noida–Greater Noida Expressway, airports and railway stations.",
  },
  {
    icon: Clock,
    title: "Convenient Cab Booking",
    description:
      "Arrange a cab for office commutes, school runs, airport drop-offs, weddings, family outings and outstation trips. Book by phone or WhatsApp according to your travel plans.",
  },
];