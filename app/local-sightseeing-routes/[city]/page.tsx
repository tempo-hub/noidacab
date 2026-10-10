import type { Metadata } from "next";
import { getCityDetails, citiesData } from "@/lib/cityData";
import DynamicLocalSightseeingPage from "@/components/cab-routes/DynamicLocalSightseeingPage";

type Params = Promise<{ city: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { city } = await params;
  const cityInfo = getCityDetails(city);

  return {
    title: `Local Sightseeing Taxi in ${cityInfo.name} | City Tour Packages & Heritage Cabs`,
    description: `Book full-day sightseeing taxi in ${cityInfo.name}. Visit ${cityInfo.attractions.slice(0, 3).join(", ")} in comfortable AC cabs with courteous local chauffeurs.`,
    alternates: {
      canonical: `https://www.noidacab.com/local-sightseeing-routes/${cityInfo.slug}`,
    },
    openGraph: {
      title: `Local Sightseeing & Heritage Tour in ${cityInfo.name} | NoidaCab`,
      description: `Explore ${cityInfo.name} at your own pace with 8hr/80km full-day packages and custom temple tours.`,
      url: `https://www.noidacab.com/local-sightseeing-routes/${cityInfo.slug}`,
      siteName: "NoidaCab",
    },
  };
}

export function generateStaticParams() {
  return Object.keys(citiesData).map((city) => ({ city }));
}

export default async function CitySightseeingRoutePage({ params }: { params: Params }) {
  const { city } = await params;
  const cityInfo = getCityDetails(city);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    name: `NoidaCab Local Sightseeing in ${cityInfo.name}`,
    description: `Sightseeing and city tour cab services across ${cityInfo.name}, ${cityInfo.state}.`,
    url: `https://www.noidacab.com/local-sightseeing-routes/${cityInfo.slug}`,
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
      <DynamicLocalSightseeingPage city={cityInfo} />
    </>
  );
}
