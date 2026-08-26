import { RouteData } from "@/data/routes/taxiroutes";
import type { Vehicle } from "@/data/vehicles";
import HeroSection from "./HeroSection";
import VehicleSection from "./VehicleSection";
import BookingGuideSection from "./BookingGuideSection";
import RatingsSection from "./RatingsSection";
import WhyBookSection from "./WhyBookSection";
import AboutSection from "./AboutSection";
import FareSection from "./FareSection";
import TaxiOptionsSection from "./TaxiOptionsSection";
import VehicleComparisonSection from "./VehicleComparisonSection";
import TravelGuideSection from "./TravelGuideSection";
import PickupLocationsSection from "./PickupLocationsSection";
import RouteInfoSection from "./RouteInfoSection";
import FAQsSection from "./FAQsSection";
import RelatedServicesSection from "./RelatedServicesSection";
import BookingCTASection from "./BookingCTASection";


type Props = {
    route: RouteData;
    vehicles: Vehicle[];
};

export default function NoidaNearbyTemplate({
    route,
    vehicles,
}: Props) {
    const sedans = vehicles.filter(
        (vehicle) => vehicle.category === "Sedan"
    );

    const suvs = vehicles.filter(
        (vehicle) => vehicle.category === "SUV"
    );

    const tempoTravellers = vehicles.filter(
        (vehicle) => vehicle.category === "Tempo Traveller"
    );

    return (
        <main>
            <HeroSection
                route={route}
            />

            {/* Section 2 */}
            <VehicleSection
                route={route}
                vehicles={vehicles}
            />

            {/* Section 3 */}
            <BookingGuideSection
                route={route}
            />

            {/* Section 4 */}
            <RatingsSection
                route={route}
            />

            {/* Section 5 */}
            <WhyBookSection
                route={route}
            />

            {/* Section 6 */}
            <AboutSection
                route={route}
            />

            {/* Section 7 */}
            <FareSection
                route={route}
            />

            {/* Section 8 */}
            <TaxiOptionsSection
                route={route}
                vehicles={vehicles}
            />

            {/* Section 9 */}
<VehicleComparisonSection
  route={route}
  vehicles={vehicles}
/>

{/* Section 10 */}
<TravelGuideSection
  route={route}
/>

{/* Section 11 */}
<PickupLocationsSection
  route={route}
/>

{/* Section 12 */}
<RouteInfoSection
  route={route}
/>

{/* Section 13 */}
<RelatedServicesSection />

{/* Section 14 */}
<FAQsSection
  route={route}
/>

{/* Section 15 */}
<BookingCTASection
  route={route}
/>
        </main>
    );
}