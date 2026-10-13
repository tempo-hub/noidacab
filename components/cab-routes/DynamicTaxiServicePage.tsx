"use client";

import Link from "next/link";
import { CityInfo } from "@/lib/cityData";
import RouteHero from "@/components/cab-routes/RouteHero";
import CabFleet from "@/components/cab/CabFleet";
import OurServicesGrid from "@/components/cab-routes/OurServicesGrid";
import AllCityRoutes from "@/components/cab-routes/AllCityRoutes";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import RelatedCityRoutes from "@/components/cab/RelatedCityRoutes";
import HowToBook from "@/components/cab/HowToBook";
import WhyChooseCab from "@/components/cab/WhyChooseCab";
import CabTestimonials from "@/components/cab/CabTestimonials";
import CabFAQ from "@/components/cab/CabFAQ";
import CabCTA from "@/components/cab/CabCTA";
import { intercityTaxiRoutes } from "@/data/allRoutesData";
import { ShieldCheck, MapPin, CheckCircle2, Phone, Star } from "lucide-react";

interface Props {
  city: CityInfo;
}

export default function DynamicTaxiServicePage({ city }: Props) {
  // Filter or prioritize routes connecting with this city
  const cityRoutes = intercityTaxiRoutes.filter(
    (r) =>
      r.from.toLowerCase().includes(city.slug) ||
      r.to.toLowerCase().includes(city.slug) ||
      r.from.toLowerCase().includes(city.name.toLowerCase()) ||
      r.to.toLowerCase().includes(city.name.toLowerCase())
  );

  const displayRoutes = cityRoutes.length > 0 ? cityRoutes : intercityTaxiRoutes;

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Dynamic Hero Section */}
      <RouteHero
        title={`Reliable Taxi Service in`}
        highlightText={city.name}
        subtitle={`Book verified hatchbacks, sedans, SUVs, and luxury tempo travellers in ${city.name} (${city.state}). Doorstep pickup across ${city.localities.slice(0, 4).join(", ")}, flat per-km tariffs starting at ₹10/km, and 24/7 on-road support.`}
        badgeText={`${city.name} Taxi Network • ${city.tagline}`}
        defaultTripType="Outstation"
        defaultPickupPlaceholder={`${city.name} (${city.localities[0] || "City Center"})`}
        defaultDropPlaceholder={city.popularOutstation[0] || "Destination City"}
      />

      {/* City Overview Highlight Box */}
      <section className="bg-amber-50/50 py-12 border-b border-amber-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-3.5 rounded-2xl bg-white p-5 border border-amber-200/60 shadow-xs">
              <MapPin className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">Popular Pickup Hubs</p>
                <p className="text-sm font-bold text-gray-900 mt-1">
                  {city.localities.slice(0, 5).join(", ")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 rounded-2xl bg-white p-5 border border-amber-200/60 shadow-xs">
              <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">Top Outstation Corridors</p>
                <p className="text-sm font-bold text-gray-900 mt-1">
                  {city.popularOutstation.slice(0, 4).map((c) => `${city.name} to ${c}`).join(" • ")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 rounded-2xl bg-white p-5 border border-amber-200/60 shadow-xs">
              <Star className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">24/7 {city.name} Helpdesk</p>
                <p className="text-sm font-bold text-gray-900 mt-1">
                  Instant allocation & zero waiting disputes
                </p>
                <a href="tel:+918377809809" className="text-xs font-bold text-amber-600 hover:underline">
                  Call +91 8377809809
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Taxi Fleet Section */}
      <CabFleet />

      {/* 3. Our Services Section */}
      <OurServicesGrid currentServiceSlug="taxi-service-routes" />

      {/* 4. Popular Routes Section (Matching reference image) */}
      <PopularCityRoutes cityName={city.name} vehicleSlug="taxi" vehicleName="Taxi" />

      {/* 4b. Related Regional Routes */}
      <RelatedCityRoutes destinationCity={city.name} vehicleSlug="taxi" vehicleName="Taxi" />

      {/* 4b. All City Routes Section */}
      <AllCityRoutes
        routes={displayRoutes}
        title={`All Intercity Taxi Routes from ${city.name}`}
        subtitle={`Seamless one-way drops and round-trip highway cabs connecting ${city.name} with major pilgrimage centers, expressways, and business hubs.`}
        badge={`${city.name} Corridors`}
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
