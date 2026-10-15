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
import { airportServiceRoutes } from "@/data/allRoutesData";
import { Plane, ShieldCheck, Clock, MapPin } from "lucide-react";

interface Props {
  city: CityInfo;
}

export default function DynamicAirportServicePage({ city }: Props) {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Dynamic Hero Section */}
      <RouteHero
        title={`24×7 Airport Taxi Service in`}
        highlightText={city.name}
        subtitle={`Catch your flight on time with dedicated airport cab transfers in ${city.name}. Reliable pickups and drops to ${city.airportName}. Real-time flight tracking, zero waiting penalties, and doorstep pickup across ${city.localities.slice(0, 3).join(", ")}.`}
        badgeText={`Flight Transfer Desk • ${city.name}`}
        defaultTripType="Airport"
        defaultPickupPlaceholder={`${city.name} (${city.localities[0] || "Home / Hotel"})`}
        defaultDropPlaceholder={city.airportName}
      />

      {/* Airport Highlights Bar */}
      <section className="bg-amber-50/50 py-10 border-b border-amber-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-3.5 rounded-2xl bg-white p-5 border border-amber-200/60 shadow-xs">
              <Plane className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">Primary Airport Hub</p>
                <p className="text-sm font-bold text-gray-900 mt-1">
                  {city.airportName}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 rounded-2xl bg-white p-5 border border-amber-200/60 shadow-xs">
              <Clock className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">15-Min Early Arrival</p>
                <p className="text-sm font-bold text-gray-900 mt-1">
                  Chauffeur reaches doorstep 15 mins prior to departure time
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 rounded-2xl bg-white p-5 border border-amber-200/60 shadow-xs">
              <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">Flight Delay Shield</p>
                <p className="text-sm font-bold text-gray-900 mt-1">
                  Free waiting when your incoming flight is delayed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Taxi Fleet Section */}
      <CabFleet />

      {/* 3. Our Services Section */}
      <OurServicesGrid currentServiceSlug="airport-service-routes" />

      {/* 4. Popular Routes Section (Matching reference image) */}
      {/* <PopularCityRoutes cityName={city.name} vehicleSlug="taxi" vehicleName="Airport Taxi" /> */}

      {/* 4b. All City Routes Section */}
      <AllCityRoutes
        routes={airportServiceRoutes}
        title={`Airport Transfer Routes for ${city.name}`}
        subtitle={`Flat rates from ${city.name} localities and outstation connecting corridors directly to airport terminals.`}
        badge="Airport Express"
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
