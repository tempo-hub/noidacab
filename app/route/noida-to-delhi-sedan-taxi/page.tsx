// app/noida-to-delhi-sedan-taxi/page.tsx

import type { Metadata } from "next";

import NoidaDelhiSedanHero from "@/components/routes/noida-delhi-sedan/NoidaDelhiSedanHero";
import NoidaDelhiSedanCabs from "@/components/routes/noida-delhi-sedan/NoidaDelhiSedanCabs";
import NoidaDelhiSedanFare from "@/components/routes/noida-delhi-sedan/NoidaDelhiSedanFare";
import NoidaDelhiSedanComparison from "@/components/routes/noida-delhi-sedan/NoidaDelhiSedanComparison";
import NoidaDelhiSedanAbout from "@/components/routes/noida-delhi-sedan/NoidaDelhiSedanAbout";
import NoidaDelhiSedanFeatures from "@/components/routes/noida-delhi-sedan/NoidaDelhiSedanFeatures";
import NoidaDelhiSedanWhyChoose from "@/components/routes/noida-delhi-sedan/NoidaDelhiSedanWhyChoose";
import NoidaDelhiSedanRoute from "@/components/routes/noida-delhi-sedan/NoidaDelhiSedanRoute";
import NoidaDelhiSedanPickupLocations from "@/components/routes/noida-delhi-sedan/NoidaDelhiSedanPickupLocations";
import NoidaDelhiFareFAQ from "@/components/routes/noida-delhi-fare/NoidaDelhiFareFAQ";
import NoidaDelhiBookingCTA from "@/components/routes/noida-to-delhi/NoidaDelhiBookingCTA";

export const metadata: Metadata = {
  title: "Noida to Delhi Sedan Taxi | Book Sedan Cab",
  description:
    "Book a Noida to Delhi sedan taxi for comfortable one-way travel. Choose from Dzire, Etios, Amaze and other sedan options.",
};

export default function NoidaToDelhiSedanTaxiPage() {
  return (
    <main>
      <NoidaDelhiSedanHero />

      <NoidaDelhiSedanCabs />

      <NoidaDelhiSedanFare />

      <NoidaDelhiSedanComparison />

       <NoidaDelhiSedanAbout />

        <NoidaDelhiSedanFeatures />

        <NoidaDelhiSedanWhyChoose />

        <NoidaDelhiSedanRoute />

        <NoidaDelhiSedanPickupLocations />

        <NoidaDelhiFareFAQ />
        
        <NoidaDelhiBookingCTA />
    </main>
  );
}