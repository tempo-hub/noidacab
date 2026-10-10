import type { Metadata } from "next";
import { getCityDetails, citiesData } from "@/lib/cityData";
import DynamicAirportServicePage from "@/components/cab-routes/DynamicAirportServicePage";

type Params = Promise<{ city: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { city } = await params;
  const cityInfo = getCityDetails(city);

  return {
    title: `Airport Taxi Service in ${cityInfo.name} | 24×7 Cab Transfers to ${cityInfo.airportName}`,
    description: `Book 24/7 airport taxi transfers in ${cityInfo.name} to ${cityInfo.airportName}. Real-time flight tracking, 15-min early arrival, and zero waiting surcharges.`,
    alternates: {
      canonical: `https://www.noidacab.com/airport-service-routes/${cityInfo.slug}`,
    },
    openGraph: {
      title: `Airport Taxi in ${cityInfo.name} | NoidaCab`,
      description: `Guaranteed flight catching transfers to ${cityInfo.airportName} from anywhere in ${cityInfo.name}.`,
      url: `https://www.noidacab.com/airport-service-routes/${cityInfo.slug}`,
      siteName: "NoidaCab",
    },
  };
}

export function generateStaticParams() {
  return Object.keys(citiesData).map((city) => ({ city }));
}

export default async function CityAirportRoutePage({ params }: { params: Params }) {
  const { city } = await params;
  const cityInfo = getCityDetails(city);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `NoidaCab Airport Service in ${cityInfo.name}`,
    description: `24/7 Airport pickup and drop service in ${cityInfo.name} for ${cityInfo.airportName}.`,
    url: `https://www.noidacab.com/airport-service-routes/${cityInfo.slug}`,
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
      <DynamicAirportServicePage city={cityInfo} />
    </>
  );
}
