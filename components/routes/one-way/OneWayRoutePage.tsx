import Link from "next/link";
import { OneWayHero } from "./OneWayHero";
import { OneWayBookingBar } from "./OneWayBookingBar";
import { OneWayRouteOverview } from "./OneWayRouteOverview";
import { OneWayVehicles } from "./OneWayVehicles";
import { OneWayFareHighlights } from "./OneWayFareHighlights";
import { OneWayRouteDetails } from "./OneWayRouteDetails";
import { OneWayTravelInfo } from "./OneWayTravelInfo";
import { OneWayPickupAreas } from "./OneWayPickupAreas";
import { OneWayWhyChoose } from "./OneWayWhyChoose";
import CabTestimonials from "@/components/cab/CabTestimonials";
import { OneWayFAQ } from "./OneWayFAQ";
import { OneWayCTA } from "./OneWayCTA";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";

type Props = {
  route: {
    slug: string;
    from: string;
    to: string;
    distance: string;
    travelTime: string;
    fare?: string;
    highway?: string;
    description: string;
  };
};

export function OneWayRoutePage({ route }: Props) {
  const schemaBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.noidacab.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cab Routes",
        item: "https://www.noidacab.com/cab",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${route.from} to ${route.to} One Way Cab`,
        item: `https://www.noidacab.com/route/${route.slug}`,
      },
    ],
  };

  const schemaTaxiService = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `${route.from} to ${route.to} One Way Cab - NoidaCab`,
    serviceType: "One Way Outstation Taxi",
    provider: {
      "@type": "LocalBusiness",
      name: "NoidaCab",
      telephone: "+91-8377809809",
      url: "https://www.noidacab.com",
    },
    areaServed: [
      { "@type": "City", name: route.from },
      { "@type": "City", name: route.to },
    ],
    description: route.description,
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Schema Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaTaxiService) }}
      />

      {/* 1. Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-slate-50 py-3 text-xs sm:text-sm text-gray-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-amber-600 transition">Home</Link>
          <span>/</span>
          <Link href="/cab" className="hover:text-amber-600 transition">Cab Routes</Link>
          <span>/</span>
          <span className="font-semibold text-gray-800">{route.from} to {route.to} One Way Cab</span>
        </div>
      </nav>

      {/* 2. Hero */}
      <OneWayHero route={route} />

      {/* 3. Quick booking / route summary strip */}
      <OneWayBookingBar route={route} />

      {/* 4. SEO route introduction */}
      <OneWayRouteOverview route={route} />

      {/* 5. Fleet / Available Vehicles */}
      <OneWayVehicles />

      {/* 6. Fare information */}
      <OneWayFareHighlights route={route} />

      {/* 7. Detailed route information */}
      <OneWayRouteDetails route={route} />

      {/* 8. Travel information */}
      <OneWayTravelInfo route={route} />

      {/* 9. Pickup & Drop locations */}
      <OneWayPickupAreas route={route} />

      {/* 10. Why choose NoidaCab */}
      <OneWayWhyChoose />

      {/* 11. Customer Reviews */}
      <CabTestimonials />

      {/* 12. FAQ Section */}
      <OneWayFAQ route={route} />

      {/* 13. Popular City Routes Section (PLACED BEFORE CTA AS USER REQUESTED) */}
      <PopularCityRoutes
        cityName={route.from || "Noida"}
        vehicleSlug="one-way-taxi"
        vehicleName="One Way Taxi"
        title={`Popular One Way Routes from ${route.from || "Noida"}`}
        subtitle={`Explore top-rated one-way routes from ${route.from || "Noida"} with transparent per-km billing and verified drivers.`}
        badgeText={`${(route.from || "NOIDA").toUpperCase()} ONE WAY CORRIDORS`}
      />

      {/* 14. Final conversion CTA section */}
      <OneWayCTA route={route} />
    </main>
  );
}