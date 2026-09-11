import AirportTaxiService from "./AirportTaxiService";
import CustomerReviews from "./CustomerReviews";
import FinalBookingCTA from "./FinalBookingCTA";
import FleetSection from "./FleetSection";
import HeroSection from "./HeroSection";
import LocalSightseeing from "./LocalSightseeing";
import OutstationTaxi from "./OutstationTaxi";
import PopularRoutes from "./PopularRoutes";
import RailwayStationTaxi from "./RailwayStationTaxi";
import ServiceAreas from "./ServiceAreas";
import TaxiServiceFAQ from "./TaxiServiceFAQ";
import TaxiServices from "./TaxiServices";
import TaxiTypes from "./TaxiTypes";
import WhyChooseUs from "./WhyChooseUs";

type Props = {
  serviceName?: string;
  url?: string;
};

export default function TaxiServiceNoidaTemplate({
  serviceName = "Taxi Service in Noida",
  url = "/taxi-service-in-noida",
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `${serviceName} | NoidaCab`,
    provider: {
      "@type": "LocalBusiness",
      name: "Noida Cab",
      telephone: "+91-8377809809",
    },
    areaServed: ["Noida", "Delhi Airport", "Greater Noida", "NCR"],
    description: `24x7 Reliable ${serviceName} with verified chauffeurs, transparent flat fares, and doorstep pickup.`,
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroSection />
      <AirportTaxiService />
      {/* <FleetSection /> */}
      
      <TaxiTypes />
      <TaxiServices />
      <OutstationTaxi />
      <LocalSightseeing />
      <RailwayStationTaxi />
      <PopularRoutes />
      <ServiceAreas />
      <WhyChooseUs />
      <CustomerReviews />
      <TaxiServiceFAQ />
      <FinalBookingCTA />
    </main>
  );
}