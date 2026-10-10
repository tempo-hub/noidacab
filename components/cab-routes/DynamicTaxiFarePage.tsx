import { CityInfo } from "@/lib/cityData";
import FareHero from "@/components/routes/taxi-fare-in-noida/FareHero";
import FareCabs, { type FareCab } from "@/components/routes/taxi-fare-in-noida/FareCabs";
import TripFareComparison from "@/components/routes/taxi-fare-in-noida/TripFareComparison";
import FareTable from "@/components/routes/taxi-fare-in-noida/FareTable";
import FareInclusions from "@/components/routes/taxi-fare-in-noida/FareInclusions";
import DistanceTravelTime from "@/components/routes/taxi-fare-in-noida/DistanceTravelTime";
import FareCalculation from "@/components/routes/taxi-fare-in-noida/FareCalculation";
import RelatedRoutes from "@/components/routes/taxi-fare-in-noida/RelatedRoutes";
import WhyChooseUs from "@/components/routes/taxi-fare-in-noida/WhyChooseUs";
import PopularPickupLocations from "@/components/routes/taxi-fare-in-noida/PopularPickupLocations";
import TaxiFareFAQ from "@/components/routes/taxi-fare-in-noida/TaxiFareFAQ";
import BookingCTA from "@/components/routes/taxi-fare-in-noida/BookingCTA";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";

interface Props {
  city: CityInfo;
}

export function getCityFareCabs(citySlug: string): FareCab[] {
  const isNoida = citySlug === "noida";

  return [
    {
      id: "wagonr",
      name: "WagonR",
      image: "/cabs/wagonr.webp",
      href: isNoida ? "/taxi/wagonr" : `/wagonr-taxi-in-${citySlug}`,
      rating: 4.8,
      ratingsCount: 1250,
      category: "Hatchback",
      ac: true,
      seats: 4,
      description: "Affordable and comfortable WagonR for budget-friendly taxi travel.",
      extraKmFare: "₹10/km",
      extraTimeFare: "₹100/hour",
      fuelType: "Petrol/CNG",
      cancellation: "Free cancellation",
      price: 1100,
      taxes: 250,
    },
    {
      id: "dzire",
      name: "Dzire",
      image: "/cabs/dzire.webp",
      href: isNoida ? "/taxi/dzire" : `/dzire-taxi-in-${citySlug}`,
      rating: 4.8,
      ratingsCount: 1400,
      category: "Sedan",
      ac: true,
      seats: 4,
      description: "Comfortable Dzire sedan with spacious seating and a smooth ride.",
      extraKmFare: "₹10/km",
      extraTimeFare: "₹100/hour",
      fuelType: "Petrol/CNG",
      cancellation: "Free cancellation",
      price: 1100,
      taxes: 250,
    },
    {
      id: "etios",
      name: "Etios",
      image: "/cabs/etios.webp",
      href: isNoida ? "/taxi/etios" : `/etios-taxi-in-${citySlug}`,
      rating: 4.8,
      ratingsCount: 1100,
      category: "Sedan",
      ac: true,
      seats: 4,
      description: "Reliable Etios sedan offering comfortable seating and generous luggage space.",
      extraKmFare: "₹10/km",
      extraTimeFare: "₹100/hour",
      fuelType: "Diesel",
      cancellation: "Free cancellation",
      price: 1100,
      taxes: 250,
    },
    {
      id: "amaze",
      name: "Amaze",
      image: "/cabs/amaze.webp",
      href: isNoida ? "/taxi/amaze" : `/amaze-taxi-in-${citySlug}`,
      rating: 4.8,
      ratingsCount: 950,
      category: "Sedan",
      ac: true,
      seats: 4,
      description: "Honda Amaze with comfortable interiors for a relaxed taxi journey.",
      extraKmFare: "₹10/km",
      extraTimeFare: "₹100/hour",
      fuelType: "Petrol",
      cancellation: "Free cancellation",
      price: 1100,
      taxes: 250,
    },
    {
      id: "ertiga",
      name: "Ertiga",
      image: "/cabs/ertiga.webp",
      href: isNoida ? "/taxi/ertiga" : `/ertiga-taxi-in-${citySlug}`,
      rating: 4.9,
      ratingsCount: 1300,
      category: "SUV",
      ac: true,
      seats: 6,
      description: "Spacious Ertiga suitable for families and small groups with extra luggage.",
      extraKmFare: "₹13/km",
      extraTimeFare: "₹120/hour",
      fuelType: "Petrol/CNG",
      cancellation: "Free cancellation",
      price: 1280,
      taxes: 580,
    },
    {
      id: "innova-crysta",
      name: "Innova Crysta",
      image: "/cabs/innova.webp",
      href: isNoida ? "/taxi/innova-crysta" : `/innova-crysta-taxi-in-${citySlug}`,
      rating: 4.9,
      ratingsCount: 1500,
      category: "SUV",
      ac: true,
      seats: 6,
      description: "Premium Innova Crysta offering spacious seating and comfortable travel.",
      extraKmFare: "₹16/km",
      extraTimeFare: "₹150/hour",
      fuelType: "Diesel",
      cancellation: "Free cancellation",
      price: 1460,
      taxes: 580,
    },
  ];
}

export default function DynamicTaxiFarePage({ city }: Props) {
  const cabs = getCityFareCabs(city.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `NoidaCab Taxi Fare in ${city.name}`,
    description: `Transparent per-kilometer taxi fares in ${city.name} starting from ₹10/km for sedans, ₹13/km for Ertiga, and ₹16/km for Innova Crysta.`,
    url: `https://www.noidacab.com/taxi-fare-in-${city.slug}`,
    telephone: "+918377809809",
    provider: {
      "@type": "LocalBusiness",
      name: "NoidaCab",
      telephone: "+918377809809",
      url: "https://www.noidacab.com",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: city.state,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white">
        {/* 1. Dynamic Hero Section */}
        <FareHero cityName={city.name} tagline={city.tagline} />

        {/* 2. Available Cabs List */}
        <FareCabs
          cabs={cabs}
          title={`Available Taxi Options in ${city.name}`}
          description={`Choose from comfortable cabs with transparent fares and flexible options for your journey in and from ${city.name}.`}
        />

        {/* 3. Popular City Fare Routes (e.g. /route/lucknow-to-manali-taxi-fare) */}
        <PopularCityRoutes
          cityName={city.name}
          vehicleSlug="taxi-fare"
          vehicleName="Taxi Fare"
          limit={12}
        />

        {/* 4. One-Way & Round-Trip Comparison */}
        <TripFareComparison cityName={city.name} />

        {/* 4. Fare Table */}
        <FareTable cabs={cabs} cityName={city.name} />

        {/* 5. Inclusions */}
        <FareInclusions cityName={city.name} />

        {/* 6. Distance & Travel Time Info */}
        <DistanceTravelTime cityName={city.name} localities={city.localities} />

        {/* 7. Fare Calculation Factors */}
        <FareCalculation cityName={city.name} />

        {/* 8. Related Popular Routes */}
        {/* <RelatedRoutes cityName={city.name} /> */}

        {/* 9. Why Choose NoidaCab */}
        <WhyChooseUs cityName={city.name} />

        {/* 10. Popular Pickup Locations */}
        <PopularPickupLocations
          cityName={city.name}
          localities={city.localities}
          airportName={city.airportName}
        />

        {/* 11. FAQs */}
        <TaxiFareFAQ cityName={city.name} />

        {/* 12. Booking Call-To-Action */}
        <BookingCTA cityName={city.name} />
      </main>
    </>
  );
}
