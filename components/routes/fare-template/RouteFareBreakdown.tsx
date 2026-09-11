import {
  CarFront,
  Route,
  Clock3,
  ReceiptText,
  Users,
  Repeat2,
  Sparkles,
  Calculator,
} from "lucide-react";
import { RouteData } from "@/data/routes/taxiroutes";

export default function RouteFareBreakdown({ route }: { route: RouteData }) {
  const fareFactors = [
    {
      title: "Vehicle Category",
      description:
        "The vehicle rate per kilometer varies by model. Choose from budget hatchbacks, executive sedans, spacious SUVs like Ertiga/Innova, or Tempo Travellers.",
      icon: CarFront,
    },
    {
      title: "Total Distance",
      description: `The standard highway distance of ${route.distance} between ${route.from.name} and ${route.to.name} sets the baseline fare calculation.`,
      icon: Route,
    },
    {
      title: "Estimated Travel Time",
      description: `Normal travel duration is ${route.duration}. Standard stops and nominal traffic delays are included; waiting fees apply only for prolonged detention.`,
      icon: Clock3,
    },
    {
      title: "Standard Fare Formula",
      description:
        "Transparent pricing calculated as (Trip Distance × 1.5 × Vehicle Km Rate) + ₹500 fixed dispatch & allowance base, ensuring zero surprise surges.",
      icon: Calculator,
    },
    {
      title: "Seating Capacity",
      description:
        "From solo travellers (4-seater Sedans) to family outings (6-7 seater SUVs) and group tours (12-26 seater Tempo Travellers), pick what fits your luggage and passenger count.",
      icon: Users,
    },
    {
      title: "Trip Format",
      description:
        "One-way drops are billed for point-to-point transit. Round-trip bookings include return travel, local waiting in the destination, and flexible departure slots.",
      icon: Repeat2,
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-white/95 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Sparkles size={13} className="text-amber-600" />
            Fare Calculation
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            How Is {route.from.name} to {route.to.name} Taxi Fare Calculated?
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Your journey fare is structured around straightforward parameters: vehicle class, highway mileage, trip type, and commercial chauffer allowances.
          </p>
        </div>

        {/* Factors Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fareFactors.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200/90 bg-[#FFFDF5] p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    {item.title}
                  </h3>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100/80 text-amber-600 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                    <Icon size={22} />
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Callout Box */}
        <div className="mt-10 rounded-2xl bg-slate-900 p-7 text-white sm:p-9 shadow-lg">
          <h3 className="text-xl font-bold sm:text-2xl">
            Get a Verified Fare Before You Depart
          </h3>

          <p className="mt-3 max-w-4xl text-xs sm:text-sm leading-relaxed text-slate-300">
            NoidaCab guarantees transparent upfront billing for the entire {route.distance} transit to {route.to.name}. Provide your pickup sector, desired departure schedule, and preferred vehicle to lock in an all-inclusive rate with no surge pricing at the end of the trip.
          </p>
        </div>
      </div>
    </section>
  );
}