import {
  Check,
  Luggage,
  Snowflake,
  Users,
  Wifi,
  UserRoundCheck,
} from "lucide-react";

import { vehicles } from "@/data/vehicles";

export default function SedanTaxiNoidaComparison() {
  const sedanVehicles = vehicles.filter(
    (vehicle) => vehicle.category === "Sedan"
  );

  return (
    <section className="bg-white/95 border-b border-gray-300 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600">
            <Users className="h-4 w-4" />
            Compare Sedan Cabs
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Choose the Right Sedan for Your Noida Trip
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Compare our available sedan taxis by seating capacity, luggage
            space, comfort and included features before booking.
          </p>
        </div>

        {/* Desktop Comparison */}
        <div className="mt-10 hidden overflow-hidden rounded-2xl border border-slate-200 lg:block">
          <div
            className="grid"
            style={{
              gridTemplateColumns: `1.4fr repeat(${sedanVehicles.length}, 1fr)`,
            }}
          >
            {/* Header */}
            <div className="bg-slate-950 p-5 text-sm font-semibold text-white">
              Sedan Features
            </div>

            {sedanVehicles.map((vehicle) => (
              <div
                key={vehicle.slug}
                className="border-l border-slate-800 bg-slate-950 p-5 text-center"
              >
                <h3 className="font-bold text-white">{vehicle.name}</h3>

                <p className="mt-1 text-sm text-amber-400">
                  {vehicle.price}
                </p>
              </div>
            ))}

            {/* Seats */}
            <ComparisonLabel icon={Users} label="Passenger Capacity" />

            {sedanVehicles.map((vehicle) => (
              <ComparisonValue key={`${vehicle.slug}-seats`}>
                {vehicle.seats}+1
              </ComparisonValue>
            ))}

            {/* Luggage */}
            <ComparisonLabel icon={Luggage} label="Luggage Capacity" />

            {sedanVehicles.map((vehicle) => (
              <ComparisonValue key={`${vehicle.slug}-luggage`}>
                {vehicle.luggage} Bags
              </ComparisonValue>
            ))}

            {/* Doors */}
            <ComparisonLabel icon={Users} label="Doors" />

            {sedanVehicles.map((vehicle) => (
              <ComparisonValue key={`${vehicle.slug}-doors`}>
                {vehicle.doors}
              </ComparisonValue>
            ))}

            {/* AC */}
            <ComparisonLabel icon={Snowflake} label="Air Conditioning" />

            {sedanVehicles.map((vehicle) => (
              <ComparisonCheck
                key={`${vehicle.slug}-ac`}
                enabled={vehicle.airCondition}
              />
            ))}

            {/* GPS */}
            <ComparisonLabel icon={Wifi} label="GPS" />

            {sedanVehicles.map((vehicle) => (
              <ComparisonCheck
                key={`${vehicle.slug}-gps`}
                enabled={vehicle.gps}
              />
            ))}

            {/* Driver */}
            <ComparisonLabel
              icon={UserRoundCheck}
              label="Professional Driver"
            />

            {sedanVehicles.map((vehicle) => (
              <ComparisonCheck
                key={`${vehicle.slug}-driver`}
                enabled={vehicle.driverChoice}
              />
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Cards */}
        <div className="mt-10 grid gap-5 lg:hidden">
          {sedanVehicles.map((vehicle) => (
            <div
              key={vehicle.slug}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between bg-slate-950 px-5 py-4">
                <div>
                  <h3 className="font-bold text-white">{vehicle.name}</h3>
                  <p className="mt-1 text-sm text-amber-400">
                    {vehicle.price}
                  </p>
                </div>

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-300">
                  Sedan
                </span>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-px bg-slate-100">
                <MobileSpec
                  icon={Users}
                  label="Capacity"
                  value={`${vehicle.seats}+1`}
                />

                <MobileSpec
                  icon={Luggage}
                  label="Luggage"
                  value={`${vehicle.luggage} Bags`}
                />

                <MobileSpec
                  icon={Users}
                  label="Doors"
                  value={`${vehicle.doors}`}
                />

                <MobileSpec
                  icon={Snowflake}
                  label="AC"
                  value={vehicle.airCondition ? "Yes" : "No"}
                />
              </div>

              {/* Features */}
              <div className="space-y-3 p-5">
                <FeatureRow
                  label="GPS Enabled"
                  enabled={vehicle.gps}
                />

                <FeatureRow
                  label="Professional Driver"
                  enabled={vehicle.driverChoice}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-center">
          <p className="text-sm leading-6 text-slate-600">
            All sedan options are suitable for local Noida travel, airport
            transfers, business trips and outstation journeys. Select the
            vehicle based on your passenger and luggage requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------
   Desktop Components
--------------------------------------------- */

function ComparisonLabel({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 border-t border-slate-200 bg-slate-50 p-5 text-sm font-medium text-slate-700">
      <Icon className="h-4 w-4 text-slate-500" />
      {label}
    </div>
  );
}

function ComparisonValue({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center border-l border-t border-slate-200 bg-white p-5 text-sm font-semibold text-slate-700">
      {children}
    </div>
  );
}

function ComparisonCheck({ enabled }: { enabled: boolean }) {
  return (
    <div className="flex items-center justify-center border-l border-t border-slate-200 bg-white p-5">
      {enabled ? (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-50">
          <Check className="h-4 w-4 text-green-600" />
        </span>
      ) : (
        <span className="text-slate-300">—</span>
      )}
    </div>
  );
}

/* ---------------------------------------------
   Mobile Components
--------------------------------------------- */

function MobileSpec({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white p-4">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-amber-600" />

        <span className="text-xs text-slate-500">{label}</span>
      </div>

      <p className="mt-1 text-sm font-semibold text-slate-800">{value}</p>
    </div>
  );
}

function FeatureRow({
  label,
  enabled,
}: {
  label: string;
  enabled: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
      <span className="text-sm text-slate-600">{label}</span>

      {enabled ? (
        <span className="flex items-center gap-1 text-xs font-semibold text-green-600">
          <Check className="h-4 w-4" />
          Included
        </span>
      ) : (
        <span className="text-xs text-slate-400">Not available</span>
      )}
    </div>
  );
}

