import type { Metadata } from "next";
import { masterRoutes } from "@/data/masterRoutes";
import MasterRoutesExplorer from "@/components/routes/MasterRoutesExplorer";
import CabFleet from "@/components/cab/CabFleet";
import HowToBook from "@/components/cab/HowToBook";
import WhyChooseCab from "@/components/cab/WhyChooseCab";
import CabTestimonials from "@/components/cab/CabTestimonials";
import CabCTA from "@/components/cab/CabCTA";
import { Sparkles, Route, ShieldCheck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "All Available Intercity Routes & Taxi Services - NoidaCab",
  description:
    "Explore all available intercity cab routes across North India including Lucknow, Delhi NCR, Agra, Gwalior, Manali, Ayodhya, and Varanasi. Flat per-km fares, zero surge pricing.",
  alternates: {
    canonical: "https://www.noidacab.com/routes",
  },
  openGraph: {
    title: "All Available Routes & Outstation Taxi Services - NoidaCab",
    description:
      "Direct highway cab bookings connecting major North Indian cities, hill stations, and pilgrimage hubs. Verified chauffeurs and fixed per-km pricing.",
    url: "https://www.noidacab.com/routes",
    siteName: "NoidaCab",
    type: "website",
  },
};

export default function MasterRoutesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "NoidaCab Intercity Routes Directory",
    description: "Master list of all available intercity routes, distances, travel durations, and fares.",
    url: "https://www.noidacab.com/routes",
    telephone: "+918377809809",
    provider: {
      "@type": "LocalBusiness",
      name: "NoidaCab",
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-500 via-amber-300 to-white/95 py-16 sm:py-24 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/80 px-4 py-1.5 text-xs sm:text-sm font-bold text-amber-900 mb-6 shadow-xs">
            <Sparkles className="h-4 w-4 text-amber-600" />
            <span>Master Route Network</span>
            <span className="h-1 w-1 rounded-full bg-amber-500" />
            <span>{masterRoutes.length} Active Corridors</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
            All Available Intercity Routes
          </h1>

          <p className="mt-4 text-base sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Choose your origin and destination. Transparent per-km billing, zero surge, door-to-door pickup, and expressway-verified highway chauffeurs.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-800 font-semibold">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Verified Highway Chauffeurs
            </span>
            <span className="flex items-center gap-1.5">
              <Route className="h-4 w-4 text-amber-600" />
              Formula-Based Fair Pricing
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-amber-600" />
              Doorstep Pickup & Drop
            </span>
          </div>
        </div>
      </section>

      {/* Explorer / Route Cards Grid Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-600">
              EXPLORE OUR NETWORK
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Direct Highway Routes & Fixed Fares
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-3xl">
              Fares calculated with formula: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-800 font-bold">(Distance × 1.5 × Cab Rate) + ₹500</code>. Select any route below to book.
            </p>
          </div>

          <MasterRoutesExplorer routes={masterRoutes} />
        </div>
      </section>

      {/* Fleet Overview */}
      <CabFleet />

      {/* How to Book */}
      <HowToBook />

      {/* Why Choose Us */}
      <WhyChooseCab />

      {/* Testimonials */}
      <CabTestimonials />

      {/* Final CTA */}
      <CabCTA />
    </main>
  );
}
