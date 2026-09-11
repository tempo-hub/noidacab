import Link from "next/link";
import {
  Building2,
  MapPin,
  TrainFront,
  ShoppingBag,
  BriefcaseBusiness,
  Plane,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { RouteData } from "@/data/routes/taxiroutes";

export default function RoutePickupLocations({
  route,
}: {
  route: RouteData;
}) {
  const pickupHubs = [
    {
      name: "Sector 18",
      slug: "sector-18",
      type: "Commercial & Retail",
      description: `Fast doorstep cab pickup near Atta Market, DLF Mall of India, and Sector 18 Metro for direct transit to ${route.to.name}.`,
      icon: ShoppingBag,
    },
    {
      name: "Sector 62",
      slug: "sector-62",
      type: "IT & Corporate Hub",
      description: `Convenient pickup from Electronic City, Fortis Hospital, and major tech parks headed toward ${route.to.name}.`,
      icon: BriefcaseBusiness,
    },
    {
      name: "Sector 137",
      slug: "sector-137",
      type: "Expressway Residential",
      description: `Prompt pickup across Paras Tierea, Purvanchal Royal Park, and surrounding high-rise societies on Noida Expressway.`,
      icon: Building2,
    },
    {
      name: "Botanical Garden",
      slug: "botanical-garden",
      type: "Transit Interchange",
      description: `Accessible meeting point with immediate expressway feeder access toward ${route.to.name}.`,
      icon: TrainFront,
    },
    {
      name: "Noida Extension",
      slug: "noida-extension",
      type: "Greater Noida West",
      description: `Doorstep cabs from Gaur City, Char Murti, and Crossing Republik for outstation and intercity travel.`,
      icon: MapPin,
    },
    {
      name: "Pari Chowk",
      slug: "pari-chowk",
      type: "Greater Noida Gateway",
      description: `Quick pickup for travelers situated in Alpha, Beta, Delta, Knowledge Park, and Yamuna Expressway entry points.`,
      icon: Plane,
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-white/95 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Sparkles size={13} className="text-amber-600" />
            Pickup Coverage
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Popular {route.from.name} Pickup Hubs for {route.to.name} Cabs
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            We provide doorstep arrivals across residential societies, commercial complexes, and metro stations throughout {route.from.name}.
          </p>
        </div>

        {/* Location Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pickupHubs.map((location) => {
            const Icon = location.icon;
            // Matches your dynamic local route format: /noida/sector-18/innova-crysta
            const href = `/${route.from.slug}/${location.slug}/innova-crysta`;

            return (
              <Link
                key={location.name}
                href={href}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-[#FFFDF5] p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100/80 text-amber-600 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <span className="rounded-md border border-amber-200/60 bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-800">
                      {location.type}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900 transition-colors group-hover:text-amber-600">
                    {route.from.name} to {route.to.name} Taxi from {location.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {location.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:underline">
                  <span>Explore Cabs from {location.name}</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
            Don't see your sector listed? NoidaCab operates in <strong>all sectors and residential communities</strong> across {route.from.name} and Greater Noida. Specify your exact gate or landmark at the time of booking for direct doorstep dispatch.
          </p>
        </div>
      </div>
    </section>
  );
}