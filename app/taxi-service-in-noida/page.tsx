import type { Metadata } from "next";

import { FAQSection } from "@/components/cab-page";
import Testimonials from "@/components/home/Testimonials";
import AirportTaxiService from "@/components/routes/TaxiServiceNoida/AirportTaxiService";
import FinalBookingCTA from "@/components/routes/TaxiServiceNoida/FinalBookingCTA";
import FleetSection from "@/components/routes/TaxiServiceNoida/FleetSection";
import HeroSection from "@/components/routes/TaxiServiceNoida/HeroSection";
import LocalSightseeing from "@/components/routes/TaxiServiceNoida/LocalSightseeing";
import OutstationTaxi from "@/components/routes/TaxiServiceNoida/OutstationTaxi";
import PopularRoutes from "@/components/routes/TaxiServiceNoida/PopularRoutes";
import RailwayStationTaxi from "@/components/routes/TaxiServiceNoida/RailwayStationTaxi";
import ServiceAreas from "@/components/routes/TaxiServiceNoida/ServiceAreas";
import TaxiServices from "@/components/routes/TaxiServiceNoida/TaxiServices";
import TaxiTypes from "@/components/routes/TaxiServiceNoida/TaxiTypes";
import WhyChooseUs from "@/components/routes/TaxiServiceNoida/WhyChooseUs";

export const metadata: Metadata = {
  title: "Taxi Service in Noida | Local, Airport & Outstation Cabs",
  description:
    "Book reliable taxi service in Noida for local travel, airport transfers, outstation trips and sightseeing. Choose from sedans, SUVs and Tempo Travellers at competitive fares.",
  keywords: [
    "taxi service in Noida",
    "taxi service Noida",
    "cab service in Noida",
    "Noida taxi service",
    "Noida cab booking",
    "local taxi service Noida",
    "airport taxi Noida",
    "outstation taxi Noida",
  ],
  alternates: {
    canonical: "https://noidacab.com/taxi-services",
  },
  openGraph: {
    title: "Taxi Service in Noida | Local, Airport & Outstation Cabs",
    description:
      "Book a taxi in Noida for local rides, airport transfers, outstation travel and sightseeing. Sedans, SUVs and Tempo Travellers available.",
    url: "https://noidacab.com/taxi-services",
    siteName: "NoidaCab",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Service in Noida | NoidaCab",
    description:
      "Book reliable taxis in Noida for local, airport and outstation travel.",
  },
};

export default function TaxiServicePage() {
  return (
    <main>
      <HeroSection />

      <TaxiTypes />

      <TaxiServices />

      <ServiceAreas />

      <AirportTaxiService />

      <RailwayStationTaxi />

      <OutstationTaxi />

      <LocalSightseeing />

      <PopularRoutes />

      {/* <FleetSection /> */}

      <WhyChooseUs />

      {/* <HowItWorks />

      <WhyNoidaCab /> */}

      <Testimonials />

      {/* <FAQSection /> */}

      <FinalBookingCTA />
    </main>
  );
}