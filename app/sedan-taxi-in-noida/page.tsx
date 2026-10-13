import SedanTaxiNoidaAbout from "@/components/routes/sedan-taxi-noida/SedanTaxiNoidaAbout";
import SedanTaxiNoidaBookingCTA from "@/components/routes/sedan-taxi-noida/SedanTaxiNoidaBookingCTA";
import SedanTaxiNoidaCabs from "@/components/routes/sedan-taxi-noida/SedanTaxiNoidaCabs";
import SedanTaxiNoidaComparison from "@/components/routes/sedan-taxi-noida/SedanTaxiNoidaComparison";
import SedanTaxiNoidaFAQ from "@/components/routes/sedan-taxi-noida/SedanTaxiNoidaFAQ";
import SedanTaxiNoidaFare from "@/components/routes/sedan-taxi-noida/SedanTaxiNoidaFare";
import SedanTaxiNoidaFeatures from "@/components/routes/sedan-taxi-noida/SedanTaxiNoidaFeatures";
import SedanTaxiNoidaHero from "@/components/routes/sedan-taxi-noida/SedanTaxiNoidaHero";
import SedanTaxiNoidaLocations from "@/components/routes/sedan-taxi-noida/SedanTaxiNoidaLocations";
import SedanTaxiNoidaTripTypes from "@/components/routes/sedan-taxi-noida/SedanTaxiNoidaTripTypes";
import SedanTaxiNoidaWhyChoose from "@/components/routes/sedan-taxi-noida/SedanTaxiNoidaWhyChoose";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Sedan Taxi in Noida - NoidaCab @ ₹10/KM | Book Now",
  description:
    "Book Dzire, Etios & Amaze sedan taxi in Noida for local travel, airport transfers & outstation trips. Comfortable cars at the best rates. Call 8377809809.",
  keywords: [
    "sedan taxi in Noida",
    "sedan cab Noida",
    "Dzire taxi Noida",
    "Etios taxi Noida",
    "Amaze cab Noida",
    "sedan taxi service Noida",
    "Noida to Delhi sedan cab",
  ],
  alternates: {
    canonical: "https://www.noidacab.com/sedan-taxi-in-noida",
  },
  openGraph: {
    title: "Sedan Taxi in Noida | Dzire, Etios & Amaze - NoidaCab",
    description:
      "Reliable sedan taxi service in Noida starting @ ₹10/km. Verified chauffeurs, clean AC cars for local and outstation travel.",
    url: "https://www.noidacab.com/sedan-taxi-in-noida",
    siteName: "NoidaCab",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sedan Taxi in Noida | NoidaCab",
    description: "Book Dzire and Etios sedan cabs in Noida at flat per-km rates.",
  },
};

export default function SedanTaxiInNoidaPage() {
  return (
    <main>
      {/* Hero */}
      <SedanTaxiNoidaHero />

      {/* Sedan Vehicles */}
      <SedanTaxiNoidaCabs />

      {/* Sedan Fare */}
      <SedanTaxiNoidaFare />

      {/* Sedan Comparison */}
      <SedanTaxiNoidaComparison />

      {/* About Sedan Taxi Service */}
      <SedanTaxiNoidaAbout />

      {/* Features */}
      <SedanTaxiNoidaFeatures />

      {/* Why Choose Us */}
      <SedanTaxiNoidaWhyChoose />

      {/* Noida Locations */}
      <SedanTaxiNoidaLocations />

      {/* Trip Types */}
      <SedanTaxiNoidaTripTypes />

      {/* Popular Routes */}
      <PopularCityRoutes cityName="Noida" vehicleSlug="sedan" vehicleName="Sedan Taxi" />

      {/* FAQ */}
      <SedanTaxiNoidaFAQ />

      {/* Final CTA */}
      <SedanTaxiNoidaBookingCTA />
    </main>
  );
}

