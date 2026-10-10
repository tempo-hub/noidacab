import type { Metadata } from "next";
import CabHero from "@/components/cab/CabHero";
import CabFleet from "@/components/cab/CabFleet";
import CabServicesByCity from "@/components/cab/CabServicesByCity";
import HowToBook from "@/components/cab/HowToBook";
import WhyChooseCab from "@/components/cab/WhyChooseCab";
import CabTestimonials from "@/components/cab/CabTestimonials";
import CabFAQ from "@/components/cab/CabFAQ";
import CabCTA from "@/components/cab/CabCTA";

export const metadata: Metadata = {
  title: "Cab Booking Online | Taxi & Tempo Traveller Services by City",
  description:
    "Book reliable cabs and luxury tempo travellers across Lucknow, Varanasi, Ayodhya, Prayagraj, Noida, and top destinations. Fixed per-km fares, verified chauffeurs, and 24/7 service.",
  keywords: [
    "cab service",
    "online taxi booking",
    "cab services by city",
    "lucknow taxi service",
    "varanasi cab service",
    "ayodhya taxi service",
    "tempo traveller booking",
    "outstation cabs",
    "airport taxi transfer",
  ],
  alternates: {
    canonical: "https://www.noidacab.com/cab",
  },
  openGraph: {
    title: "Cab Booking Online | Taxi & Tempo Traveller Services by City",
    description:
      "Explore our complete range of taxi and tempo traveller services across Lucknow, Varanasi, Ayodhya, Prayagraj, and top North India destinations.",
    url: "https://www.noidacab.com/cab",
    siteName: "NoidaCab",
    type: "website",
    locale: "en_IN",
  },
};

export default function CabPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "NoidaCab Taxi & Tempo Traveller Services",
    description:
      "Reliable cab booking and luxury tempo traveller rental across Lucknow, Varanasi, Ayodhya, Prayagraj, Noida and Delhi NCR.",
    url: "https://www.noidacab.com/cab",
    telephone: "+918377809809",
    priceRange: "₹10/km - ₹25/km",
    areaServed: [
      { "@type": "City", name: "Lucknow" },
      { "@type": "City", name: "Varanasi" },
      { "@type": "City", name: "Ayodhya" },
      { "@type": "City", name: "Prayagraj" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Haridwar" },
      { "@type": "City", name: "Agra" },
      { "@type": "City", name: "Mathura" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "15420",
    },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section */}
      <CabHero />

      {/* 2. Cab Fleet Section */}
      <CabFleet />

      {/* 3. Cab Services by City Section (Matching reference image) */}
      <CabServicesByCity />

      {/* 4. How to Book Section */}
      <HowToBook />

      {/* 5. Why Choose Us Section */}
      <WhyChooseCab />

      {/* 6. Testimonials Section */}
      <CabTestimonials />

      {/* 7. FAQ Section */}
      <CabFAQ />

      {/* 8. Call to Action (CTA) Section */}
      <CabCTA />
    </main>
  );
}
