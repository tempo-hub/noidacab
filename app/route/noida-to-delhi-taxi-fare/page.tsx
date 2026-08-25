import HourlyCabPackages from "@/components/home/HourlyCabPackages";
import DistanceTravelTime from "@/components/routes/noida-delhi-fare/DistanceTravelTime";
import FareCalculation from "@/components/routes/noida-delhi-fare/FareCalculation";
import FareInclusions from "@/components/routes/noida-delhi-fare/FareInclusions";
import NoidaDelhiFareCabs from "@/components/routes/noida-delhi-fare/NoidaDelhiFareCabs";
import NoidaDelhiFareCTA from "@/components/routes/noida-delhi-fare/NoidaDelhiFareCTA";
import NoidaDelhiFareFAQ from "@/components/routes/noida-delhi-fare/NoidaDelhiFareFAQ";
import NoidaDelhiFareHero from "@/components/routes/noida-delhi-fare/NoidaDelhiFareHero";
import NoidaDelhiFareTable from "@/components/routes/noida-delhi-fare/NoidaDelhiFareTable";
import PopularPickupLocations from "@/components/routes/noida-delhi-fare/PopularPickupLocations";
import TripFareComparison from "@/components/routes/noida-delhi-fare/TripFareComparison";
import WhyChooseNoidaCab from "@/components/routes/noida-delhi-fare/WhyChooseNoidaCab";
import NoidaDelhiBookingCTA from "@/components/routes/noida-to-delhi/NoidaDelhiBookingCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noida to Delhi Taxi Fare | Cab Fare & Tariff",
  description:
    "Check Noida to Delhi taxi fare for Sedan, SUV and other cabs. Compare cab prices, fare details and choose an affordable taxi for your journey.",
};
export default function NoidaToDelhiTaxiFarePage() {
  return (
    <main className="bg-[#FFFDF5]">
      <NoidaDelhiFareHero />

      <NoidaDelhiFareCabs />

      <TripFareComparison />

      <NoidaDelhiFareTable />  

       {/* <HourlyCabPackages /> */}

        <FareInclusions />

        <DistanceTravelTime />

        <FareCalculation />

        <WhyChooseNoidaCab />

        <PopularPickupLocations />

        <NoidaDelhiFareFAQ />

        <NoidaDelhiBookingCTA />
      {/* More sections will come here */}
    </main>
  );
}