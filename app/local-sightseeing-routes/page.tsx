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
import { sightseeingRoutes } from "@/data/allRoutesData";

export const metadata: Metadata = {
  title: "Local Sightseeing Routes | City Tour & Heritage Cab Packages - NoidaCab",
  description:
    "Book full-day local sightseeing routes and pilgrimage tours for Delhi Darshan, Agra Taj Mahal, Mathura-Vrindavan, Ayodhya Ram Mandir, and Varanasi Ghats. Clean AC cabs and expert local chauffeurs.",
  keywords: [
    "local sightseeing routes",
    "delhi darshan cab",
    "agra taj mahal day tour taxi",
    "mathura vrindavan tour cab",
    "ayodhya ram mandir sightseeing taxi",
    "varanasi ghats tour cab",
    "city tour cab packages",
  ],
  alternates: {
    canonical: "https://www.noidacab.com/local-sightseeing-routes",
  },
  openGraph: {
    title: "Local Sightseeing Routes | City Tour & Heritage Cab Packages - NoidaCab",
    description:
      "Explore historical monuments and sacred pilgrimage circuits at your own pace with hourly packages and full-day cab tours.",
    url: "https://www.noidacab.com/local-sightseeing-routes",
    siteName: "NoidaCab",
    type: "website",
  },
};

import { getCityDetails } from "@/lib/cityData";
import DynamicLocalSightseeingPage from "@/components/cab-routes/DynamicLocalSightseeingPage";

type SearchParams = Promise<{ city?: string }>;

export default async function LocalSightseeingRoutesPage(props: { searchParams?: SearchParams }) {
  const searchParams = await props.searchParams;
  const cityParam = searchParams?.city;

  if (cityParam) {
    const cityInfo = getCityDetails(cityParam);
    return <DynamicLocalSightseeingPage city={cityInfo} />;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    name: "NoidaCab Local Sightseeing & City Tours",
    description:
      "Full-day and multi-day local sightseeing cab routes across Delhi NCR, Agra, Mathura, Ayodhya, Varanasi, and Lucknow.",
    url: "https://www.noidacab.com/local-sightseeing-routes",
    telephone: "+918377809809",
    priceRange: "₹1,499 - ₹4,999",
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section */}
      <RouteHero
        title="Full Day City & Heritage"
        highlightText="Local Sightseeing Routes"
        subtitle="Explore magnificent temples, UNESCO heritage monuments, vibrant shopping bazars, and cultural landmarks in air-conditioned comfort. Enjoy flexible itineraries, zero parking disputes, and expert local chauffeurs."
        badgeText="Sightseeing & Pilgrimage Circuits"
        defaultTripType="Sightseeing"
        defaultPickupPlaceholder="Pickup City / Hotel (e.g. Noida, Delhi, Lucknow)"
        defaultDropPlaceholder="Tour Itinerary (e.g. Delhi Darshan, Agra Taj Tour)"
      />

      {/* 2. Taxi Fleet Section */}
      <CabFleet />

      {/* 3. Our Services Section */}
      <OurServicesGrid currentServiceSlug="local-sightseeing-routes" />

      {/* 3b. Popular Routes Section (Matching reference image) */}
      <PopularCityRoutes cityName="Delhi" vehicleSlug="taxi" vehicleName="Sightseeing Taxi" />

      {/* 4. All City Routes Section */}
      <AllCityRoutes
        routes={sightseeingRoutes}
        title="Top City Sightseeing & Tour Routes"
        subtitle="Curated sightseeing circuits covering historical monuments, spiritual ghats, and cultural highlights with transparent package pricing."
        badge="Tourist & Teerth Circuits"
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
