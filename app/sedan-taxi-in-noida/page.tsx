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
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Sedan Taxi in Noida Starting @ ₹10/KM – Book Now",
  description:
    "Book Dzire, Etios & Amaze sedan taxi in Noida for local travel, airport transfers & outstation trips. Comfortable cars at the best rates. Call 8377809809.",
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

      {/* FAQ */}
      <SedanTaxiNoidaFAQ />

      {/* Final CTA */}
      <SedanTaxiNoidaBookingCTA />
    </main>
  );
}

