import type { Metadata } from "next";

import TaxiServiceFAQ from "@/components/routes/TaxiServiceNoida/TaxiServiceFAQ";
import Testimonials from "@/components/home/Testimonials";
import AirportTaxiService from "@/components/routes/TaxiServiceNoida/AirportTaxiService";
import FinalBookingCTA from "@/components/routes/TaxiServiceNoida/FinalBookingCTA";
import FleetSection from "@/components/routes/TaxiServiceNoida/FleetSection";
import HeroSection from "@/components/routes/TaxiServiceNoida/HeroSection";
import LocalSightseeing from "@/components/routes/TaxiServiceNoida/LocalSightseeing";
import OutstationTaxi from "@/components/routes/TaxiServiceNoida/OutstationTaxi";
import PopularRoutes from "@/components/routes/TaxiServiceNoida/PopularRoutes";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import RailwayStationTaxi from "@/components/routes/TaxiServiceNoida/RailwayStationTaxi";
import ServiceAreas from "@/components/routes/TaxiServiceNoida/ServiceAreas";
import TaxiServices from "@/components/routes/TaxiServiceNoida/TaxiServices";
import TaxiTypes from "@/components/routes/TaxiServiceNoida/TaxiTypes";
import WhyChooseUs from "@/components/routes/TaxiServiceNoida/WhyChooseUs";

export const metadata: Metadata = {
  title: "Taxi Service in Noida - NoidaCab @ ₹10/KM | Book Now",
  description:
    "Book reliable taxi service in Noida for local, airport, outstation trips & sightseeing. Choose Sedans, SUVs & Tempo Travellers. Call 8377809809.",
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
    canonical: "https://www.noidacab.com/taxi-service-in-noida",
  },
  openGraph: {
    title: "Taxi Service in Noida | Local, Airport & Outstation Cabs",
    description:
      "Book a taxi in Noida for local rides, airport transfers, outstation travel and sightseeing. Sedans, SUVs and Tempo Travellers available.",
    url: "https://www.noidacab.com/taxi-service-in-noida",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "NoidaCab - Taxi Service in Noida",
    description:
      "Book reliable taxi service in Noida for local city travel, IGI airport transfers, and outstation trips starting @ ₹10/km. Verified drivers, 24/7 service.",
    url: "https://www.noidacab.com/taxi-service-in-noida",
    telephone: "+918377809809",
    priceRange: "₹10/km - ₹32/km",
    areaServed: {
      "@type": "City",
      name: "Noida",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "8420",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />

      <TaxiTypes />

      <TaxiServices />

      <ServiceAreas />

      <AirportTaxiService />

      <RailwayStationTaxi />

      <OutstationTaxi />

      <LocalSightseeing />

      {/* Popular Routes Section */}
      <PopularCityRoutes cityName="Noida" vehicleSlug="taxi" vehicleName="Taxi" />

      {/* <FleetSection /> */}

      <WhyChooseUs />

      <Testimonials />

      <TaxiServiceFAQ />

      <FinalBookingCTA />
    </main>
  );
}