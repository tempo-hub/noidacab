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
import { intercityTaxiRoutes } from "@/data/allRoutesData";

export const metadata: Metadata = {
  title: "Taxi Service Routes | Intercity & Outstation Cab Routes - NoidaCab",
  description:
    "Explore all intercity taxi service routes across Delhi NCR, Agra, Jaipur, Lucknow, Haridwar, Ayodhya, and Varanasi. Flat per-km fares, zero surge, verified drivers.",
  keywords: [
    "taxi service routes",
    "outstation cab routes",
    "intercity taxi routes",
    "noida to agra cab",
    "noida to jaipur taxi",
    "delhi to lucknow taxi route",
    "one-way taxi routes",
  ],
  alternates: {
    canonical: "https://www.noidacab.com/taxi-service-routes",
  },
  openGraph: {
    title: "Taxi Service Routes | Intercity & Outstation Cab Routes - NoidaCab",
    description:
      "Book outstation and intercity taxi service routes across North India with transparent pricing starting at ₹10/km.",
    url: "https://www.noidacab.com/taxi-service-routes",
    siteName: "NoidaCab",
    type: "website",
  },
};

import { getCityDetails } from "@/lib/cityData";
import DynamicTaxiServicePage from "@/components/cab-routes/DynamicTaxiServicePage";

type SearchParams = Promise<{ city?: string }>;

export default async function TaxiServiceRoutesPage(props: { searchParams?: SearchParams }) {
  const searchParams = await props.searchParams;
  const cityParam = searchParams?.city;

  if (cityParam) {
    const cityInfo = getCityDetails(cityParam);
    return <DynamicTaxiServicePage city={cityInfo} />;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "NoidaCab Intercity Taxi Routes",
    description:
      "Comprehensive intercity taxi service routes connecting Noida, Delhi NCR, Agra, Jaipur, Lucknow, Haridwar, Ayodhya, and Varanasi.",
    url: "https://www.noidacab.com/taxi-service-routes",
    telephone: "+918377809809",
    priceRange: "₹10/km - ₹25/km",
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section */}
      <RouteHero
        title="Intercity & Outstation"
        highlightText="Taxi Service Routes"
        subtitle="Book one-way and round-trip highway cabs to Agra, Jaipur, Lucknow, Haridwar, Ayodhya, and 50+ cities across North India with verified chauffeurs and flat per-km tariffs."
        badgeText="Intercity Taxi Network"
        defaultTripType="Outstation"
        defaultPickupPlaceholder="Pickup City (e.g. Noida, Delhi, Lucknow)"
        defaultDropPlaceholder="Destination (e.g. Agra, Jaipur, Ayodhya)"
      />

      {/* 2. Taxi Fleet Section */}
      <CabFleet />

      {/* 3. Our Services Section */}
      <OurServicesGrid currentServiceSlug="taxi-service-routes" />

      {/* 3b. Popular Routes Section (Matching reference image) */}
      <PopularCityRoutes cityName="Noida" vehicleSlug="taxi" vehicleName="Taxi" />

      {/* 4. All City Routes Section */}
      <AllCityRoutes
        routes={intercityTaxiRoutes}
        title="All Intercity Taxi Service Routes"
        subtitle="Choose from popular highway corridors with transparent kilometer billing, estimated travel times, and recommended vehicles."
        badge="Highway & Expressways"
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
