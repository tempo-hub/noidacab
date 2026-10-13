import type { Metadata } from "next";
import { parseDynamicRouteSlug } from "@/data/popularRoutesData";
import DynamicTaxiRoutePage from "@/components/routes/taxi-routes/DynamicTaxiRoutePage";

export const metadata: Metadata = {
  title: "Noida to Delhi Cab | @ ₹1,100 + 10% OFF | Book Now",
  description:
    "Book a reliable Noida to Delhi taxi for one-way and round trips. Choose from Sedan, SUV and other cabs with comfortable rides and affordable fares.",
  alternates: {
    canonical: "https://www.noidacab.com/route/noida-to-delhi-taxi",
  },
};

export default function NoidaToDelhiTaxiPage() {
  const route = parseDynamicRouteSlug("noida-to-delhi-taxi")!;
  return <DynamicTaxiRoutePage route={route} />;
}