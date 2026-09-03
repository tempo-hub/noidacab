import {
  BadgeCheck,
  BriefcaseBusiness,
  CarFront,
  CheckCircle2,
  MapPinned,
  Navigation,
  Snowflake,
  Users,
} from "lucide-react";

import { vehicles } from "@/data/vehicles";

export default function SedanTaxiNoidaFeatures() {
  const sedanVehicles = vehicles.filter(
    (vehicle) => vehicle.category === "Sedan"
  );

  const hasAC = sedanVehicles.some((vehicle) => vehicle.airCondition);
  const hasGPS = sedanVehicles.some((vehicle) => vehicle.gps);
  const hasDriverChoice = sedanVehicles.some(
    (vehicle) => vehicle.driverChoice
  );

  const maxLuggage = Math.max(
    ...sedanVehicles.map((vehicle) => vehicle.luggage)
  );

  const maxSeats = Math.max(
    ...sedanVehicles.map((vehicle) => vehicle.seats)
  );

  const features = [
    {
      icon: Snowflake,
      title: "Air Conditioned Sedans",
      description:
        "Travel comfortably with air-conditioned sedan cabs suitable for Noida's local and longer journeys.",
      enabled: hasAC,
    },
    {
      icon: BadgeCheck,
      title: "Professional Drivers",
      description:
        "Experienced drivers are available to make your local, airport and outstation journey convenient.",
      enabled: hasDriverChoice,
    },
    {
      icon: Navigation,
      title: "GPS Enabled",
      description:
        "GPS-equipped vehicles help drivers navigate Noida and nearby destinations efficiently.",
      enabled: hasGPS,
    },
    {
      icon: Users,
      title: "Comfortable 4+1 Seating",
      description: `Our sedan fleet provides comfortable seating for up to ${maxSeats} passengers plus the driver.`,
      enabled: true,
    },
    {
      icon: BriefcaseBusiness,
      title: "Practical Luggage Space",
      description: `Sedan options provide luggage capacity of up to ${maxLuggage} bags depending on the vehicle selected.`,
      enabled: true,
    },
    {
      icon: MapPinned,
      title: "Flexible Pickup Locations",
      description:
        "Arrange sedan taxi pickup from major Noida sectors, residential areas, business hubs and nearby locations.",
      enabled: true,
    },
  ];

  return (
    <section className="bg-white/95 border-b border-gray-300 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
            <CarFront className="h-4 w-4" />
            Sedan Taxi Features
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comfortable Features for Every Noida Ride
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Our sedan taxi service combines everyday comfort with practical
            features for local travel, airport transfers and outstation
            journeys.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
              >
                {/* Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-800">
                    <Icon className="h-5 w-5 text-amber-400" />
                  </div>

                  {feature.enabled && (
                    <span className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Available
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Feature Summary */}
        <div className="mt-8 overflow-hidden rounded-3xl bg-amber-400">
          <div className="grid gap-0 md:grid-cols-3">
            <SummaryItem
              value={`${sedanVehicles.length}`}
              label="Sedan Models"
            />

            <SummaryItem
              value={`${maxSeats}+1`}
              label="Passenger Capacity"
            />

            <SummaryItem
              value={`${maxLuggage}`}
              label="Max Luggage Bags"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryItem({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-b border-white/10 px-6 py-6 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
      <p className="text-3xl font-bold text-amber-800">{value}</p>

      <p className="mt-1 text-sm text-slate-800">{label}</p>
    </div>
  );
}

