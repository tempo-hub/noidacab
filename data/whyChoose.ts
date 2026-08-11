import {
  BadgeCheck,
  IndianRupee,
  Clock3,
  ShieldCheck,
  CarFront,
  Headphones,
} from "lucide-react";

import { WhyChoose } from "@/types/why-choose";

export const whyChoose: WhyChoose[] = [
  {
    title: "Transparent Pricing",
    description:
      "No hidden charges. Get fair and affordable cab fares before confirming your booking.",
    icon: IndianRupee,
  },
  {
    title: "Verified Drivers",
    description:
      "Every driver is verified and experienced to ensure a safe and comfortable journey.",
    icon: ShieldCheck,
  },
  {
    title: "24×7 Availability",
    description:
      "Book a cab anytime for local rides, airport transfers, or outstation trips.",
    icon: Clock3,
  },
  {
    title: "Wide Fleet",
    description:
      "Choose from Hatchback, Sedan, Ertiga, Innova Crysta, SUVs, and Tempo Travellers.",
    icon: CarFront,
  },
  {
    title: "Instant Booking",
    description:
      "Quick booking process with instant confirmation and reliable pickup service.",
    icon: BadgeCheck,
  },
  {
    title: "Dedicated Support",
    description:
      "Our support team is available to help you before, during, and after your trip.",
    icon: Headphones,
  },
];