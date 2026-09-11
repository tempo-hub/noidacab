import {
  MapPinned,
  Route,
  Clock3,
  CarFront,
  Sparkles,
} from "lucide-react";
import { RouteData } from "@/data/routes/taxiroutes";

export default function RouteDistanceTravelTime({
  route,
}: {
  route: RouteData;
}) {
  const travelInfo = [
    {
      title: "Approximate Distance",
      value: route.distance,
      description: `The road distance between ${route.from.name} and ${route.to.name} depends on your exact pickup sector and drop point.`,
      icon: Route,
    },
    {
      title: "Estimated Travel Time",
      value: route.duration,
      description: `Average travel duration via major expressways, subject to peak-hour traffic conditions and state border crossings.`,
      icon: Clock3,
    },
    {
      title: "Doorstep Pickup",
      value: `Across ${route.from.name}`,
      description: `Direct pickup available from all residential societies, metro stations, corporate IT parks, and transit hubs in ${route.from.name}.`,
      icon: MapPinned,
    },
    {
      title: "Fleet Options",
      value: "AC Cabs & Vans",
      description: `Choose from Hatchbacks, Sedans, Ertiga, Innova Crysta, or Tempo Travellers based on your group size.`,
      icon: CarFront,
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-white/95 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Sparkles size={13} className="text-amber-600" />
            Route Overview
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            {route.from.name} to {route.to.name} Distance & Travel Time
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Planning a journey from {route.from.name} to {route.to.name}? Review the verified route distance, expected highway duration, and pickup logistics before scheduling your ride.
          </p>
        </div>

        {/* 4 Info Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {travelInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-md"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-100 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-xl font-black text-amber-600">
                  {item.value}
                </p>

                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Route Explanatory Card */}
        <div className="mt-10 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
            How Long Does a {route.from.name} to {route.to.name} Taxi Take?
          </h3>

          <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
            A standard cab journey from {route.from.name} to {route.to.name} spans approximately <strong>{route.distance}</strong> and takes roughly <strong>{route.duration}</strong> under normal traffic. Peak rush hours (typically 8:30 AM – 11:00 AM and 5:30 PM – 8:30 PM) may introduce additional transit time around arterial flyways and state border toll checkpoints.
          </p>

          <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
            All our commercial chauffeurs use real-time GPS navigation to pick optimal bypasses and expressway corridors, ensuring prompt arrival at your destination in {route.to.name}.
          </p>
        </div>
      </div>
    </section>
  );
}