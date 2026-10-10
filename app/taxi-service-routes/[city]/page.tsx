import type { Metadata } from "next";
import { getCityDetails, citiesData } from "@/lib/cityData";
import DynamicTaxiServicePage from "@/components/cab-routes/DynamicTaxiServicePage";

type Params = Promise<{ city: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { city } = await params;
  const cityInfo = getCityDetails(city);

  return {
    title: `Taxi Service in ${cityInfo.name} | Reliable Cabs & Outstation Routes - NoidaCab`,
    description: `Book reliable taxi service in ${cityInfo.name} for local travel, airport transfers, and outstation trips. Flat per-km fares, clean AC cabs, and verified drivers across ${cityInfo.localities.slice(0, 3).join(", ")}.`,
    alternates: {
      canonical: `https://www.noidacab.com/taxi-service-routes/${cityInfo.slug}`,
    },
    openGraph: {
      title: `Taxi Service in ${cityInfo.name} | NoidaCab`,
      description: `Book cabs in ${cityInfo.name} with fixed per-km pricing starting at ₹10/km. Doorstep pickup across all sectors and localities.`,
      url: `https://www.noidacab.com/taxi-service-routes/${cityInfo.slug}`,
      siteName: "NoidaCab",
    },
  };
}

export function generateStaticParams() {
  return Object.keys(citiesData).map((city) => ({ city }));
}

export default async function CityTaxiRoutePage({ params }: { params: Params }) {
  const { city } = await params;
  const cityInfo = getCityDetails(city);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `NoidaCab Taxi Service in ${cityInfo.name}`,
    description: `Reliable local and outstation taxi service in ${cityInfo.name}, ${cityInfo.state}.`,
    url: `https://www.noidacab.com/taxi-service-routes/${cityInfo.slug}`,
    telephone: "+918377809809",
    areaServed: {
      "@type": "City",
      name: cityInfo.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DynamicTaxiServicePage city={cityInfo} />
    </>
  );
}
