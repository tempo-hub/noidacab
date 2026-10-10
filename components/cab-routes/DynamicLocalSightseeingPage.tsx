"use client";

import { CityInfo } from "@/lib/cityData";
import RouteHero from "@/components/cab-routes/RouteHero";
import CabFleet from "@/components/cab/CabFleet";
import OurServicesGrid from "@/components/cab-routes/OurServicesGrid";
import AllCityRoutes from "@/components/cab-routes/AllCityRoutes";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import HowToBook from "@/components/cab/HowToBook";
import WhyChooseCab from "@/components/cab/WhyChooseCab";
import CabTestimonials from "@/components/cab/CabTestimonials";
import CabFAQ from "@/components/cab/CabFAQ";
import CabCTA from "@/components/cab/CabCTA";
import { sightseeingRoutes } from "@/data/allRoutesData";
import { Compass, Sparkles, MapPin, CheckCircle2 } from "lucide-react";

interface Props {
  city: CityInfo;
}

export default function DynamicLocalSightseeingPage({ city }: Props) {
  // Filter or prioritize sightseeing routes for this city
  const cityRoutes = sightseeingRoutes.filter(
    (r) =>
      r.from.toLowerCase().includes(city.slug) ||
      r.to.toLowerCase().includes(city.slug) ||
      r.from.toLowerCase().includes(city.name.toLowerCase()) ||
      r.to.toLowerCase().includes(city.name.toLowerCase())
  );

  const displayRoutes = cityRoutes.length > 0 ? cityRoutes : sightseeingRoutes;

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Dynamic Hero Section */}
      <RouteHero
        title={`Local Sightseeing & Tour Cabs in`}
        highlightText={city.name}
        subtitle={`Explore ${city.name}'s top heritage monuments, sacred temples, and cultural landmarks including ${city.attractions.slice(0, 4).join(", ")}. Full-day 8hr/80km packages, continuous AC comfort, and courteous local tour chauffeurs.`}
        badgeText={`${city.name} City Darshan & Tour Desk`}
        defaultTripType="Sightseeing"
        defaultPickupPlaceholder={`${city.name} (Hotel or Residence)`}
        defaultDropPlaceholder={`${city.name} Sightseeing Tour Circuit`}
      />

      {/* Sightseeing Attractions Showcase Bar */}
      <section className="bg-amber-50/50 py-10 border-b border-amber-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-3.5 rounded-2xl bg-white p-5 border border-amber-200/60 shadow-xs">
              <Compass className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">Key Tour Attractions</p>
                <p className="text-sm font-bold text-gray-900 mt-1">
                  {city.attractions.slice(0, 4).join(" • ")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 rounded-2xl bg-white p-5 border border-amber-200/60 shadow-xs">
              <Sparkles className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">Flexible Hourly Packages</p>
                <p className="text-sm font-bold text-gray-900 mt-1">
                  Half-day (4hr/40km) & Full-day (8hr/80km) AC rentals
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 rounded-2xl bg-white p-5 border border-amber-200/60 shadow-xs">
              <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">Local Driver Guides</p>
                <p className="text-sm font-bold text-gray-900 mt-1">
                  Chauffeurs trained in temple darshan & monument parking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Taxi Fleet Section */}
      <CabFleet />

      {/* 3. Our Services Section */}
      <OurServicesGrid currentServiceSlug="local-sightseeing-routes" />

      {/* 4. Popular Routes Section (Matching reference image) */}
      <PopularCityRoutes cityName={city.name} vehicleSlug="taxi" vehicleName="Sightseeing Taxi" />

      {/* 4b. All City Routes Section */}
      <AllCityRoutes
        routes={displayRoutes}
        title={`Top Sightseeing Circuits in & around ${city.name}`}
        subtitle={`Experience the spiritual energy and historical glory of ${city.name} with custom private tour vehicles.`}
        badge={`${city.name} City Tour`}
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
