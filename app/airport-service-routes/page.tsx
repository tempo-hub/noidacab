import type { Metadata } from "next";
import RouteHero from "@/components/cab-routes/RouteHero";
import CabFleet from "@/components/cab/CabFleet";
import OurServicesGrid from "@/components/cab-routes/OurServicesGrid";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import AllCityRoutes from "@/components/cab-routes/AllCityRoutes";
import HowToBook from "@/components/cab/HowToBook";
import WhyChooseCab from "@/components/cab/WhyChooseCab";
import CabTestimonials from "@/components/cab/CabTestimonials";
import CabFAQ from "@/components/cab/CabFAQ";
import CabCTA from "@/components/cab/CabCTA";
import { airportServiceRoutes } from "@/data/allRoutesData";

export const metadata: Metadata = {
  title: "Airport Service Routes | 24/7 Airport Taxi & Cab Transfers - NoidaCab",
  description:
    "Book reliable 24×7 airport transfer routes to Delhi IGI Airport (T1, T2, T3), Jewar Noida Airport, Lucknow, and Varanasi. Flight tracking, zero surge, and on-time doorstep pickup.",
  keywords: [
    "airport service routes",
    "airport taxi transfer",
    "delhi igi airport cab",
    "noida to delhi airport taxi",
    "greater noida airport cab",
    "jewar airport taxi",
    "t3 airport cab",
  ],
  alternates: {
    canonical: "https://www.noidacab.com/airport-service-routes",
  },
  openGraph: {
    title: "Airport Service Routes | 24/7 Airport Taxi & Cab Transfers - NoidaCab",
    description:
      "Stress-free airport pickups and drops across NCR and UP airports with flight delay tracking and meet & greet chauffeurs.",
    url: "https://www.noidacab.com/airport-service-routes",
    siteName: "NoidaCab",
    type: "website",
  },
};

import { getCityDetails } from "@/lib/cityData";
import DynamicAirportServicePage from "@/components/cab-routes/DynamicAirportServicePage";

type SearchParams = Promise<{ city?: string }>;

export default async function AirportServiceRoutesPage(props: { searchParams?: SearchParams }) {
  const searchParams = await props.searchParams;
  const cityParam = searchParams?.city;

  if (cityParam) {
    const cityInfo = getCityDetails(cityParam);
    return <DynamicAirportServicePage city={cityInfo} />;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "NoidaCab Airport Transfer Routes",
    description:
      "24/7 airport taxi services connecting Noida, Greater Noida, Ghaziabad, and UP cities to Indira Gandhi International Airport and regional airports.",
    url: "https://www.noidacab.com/airport-service-routes",
    telephone: "+918377809809",
    priceRange: "₹499 - ₹2,499",
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section */}
      <RouteHero
        title="Guaranteed 24×7"
        highlightText="Airport Service Routes"
        subtitle="Never miss a flight. Dedicated airport taxi transfers to Delhi IGI (T1, T2, T3), Noida Jewar Airport, Lucknow, and Varanasi with real-time flight tracking, zero waiting fees, and courteous luggage assistance."
        badgeText="24/7 Flight Pickup & Drop"
        defaultTripType="Airport"
        defaultPickupPlaceholder="Pickup Location (e.g. Noida Sector 62, Pari Chowk)"
        defaultDropPlaceholder="Airport Terminal (e.g. IGI Airport Terminal 3)"
      />

      {/* 2. Taxi Fleet Section */}
      <CabFleet />

      {/* 3. Our Services Section */}
      <OurServicesGrid currentServiceSlug="airport-service-routes" />

      {/* 3b. Popular Routes Section (Matching reference image) */}
      <PopularCityRoutes cityName="Delhi" vehicleSlug="taxi" vehicleName="Airport Taxi" />

      {/* 4. All City Routes Section */}
      <AllCityRoutes
        routes={airportServiceRoutes}
        title="All Airport Taxi Transfer Routes"
        subtitle="Transparent fixed rates from Noida sectors, Greater Noida, Ghaziabad, and regional hubs directly to international and domestic terminals."
        badge="Airport Corridors"
      />

      {/* 5. How to Book Section */}
      <HowToBook />

      {/* 6. Why Choose Us Section */}
      <WhyChooseCab />

      {/* 7. Testimonials Section */}
      <CabTestimonials />

      {/* 8. FAQ Section */}
      <CabFAQ />

      {/* 9. CTA Section */}
      <CabCTA />
    </main>
  );
}
