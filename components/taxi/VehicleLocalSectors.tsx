import { MapPin, Navigation, Sparkles } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";

export default function VehicleLocalSectors({ vehicle }: { vehicle: Vehicle }) {
  const localHubs = [
    {
      title: "Commercial & IT Hubs",
      areas: [
        "Sector 62 (Electronic City)",
        "Sector 125 & 126 (Amity Hub)",
        "Sector 135 & 142 (Advant Navis)",
        "Sector 16 & 18 (Atta Market / Mall of India)",
      ],
    },
    {
      title: "Residential Sectors & Expressways",
      areas: [
        "Sector 50, 76, 78 & 79",
        "Sector 137 & Sector 143 (Noida Expressway)",
        "Sector 128 (Jaypee Wish Town)",
        "Sector 150 & Noida-Greater Noida Expressway",
      ],
    },
    {
      title: "Greater Noida & Connectivity Hubs",
      areas: [
        "Pari Chowk & Alpha / Beta / Gamma Sectors",
        "Knowledge Park I, II, & III",
        "Gaur City & Greater Noida West (Noida Extension)",
        "Yamuna Expressway & Upcoming Jewar Airport Corridor",
      ],
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-white/95 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 border border-amber-200/80 mb-3">
            <MapPin size={13} className="text-amber-600" />
            Noida Pickup Locations
          </div>
          <h2 className="text-2xl font-black text-slate-900 sm:text-4xl tracking-tight">
            {vehicle.name} Taxi Service Across All Noida Sectors
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            We provide doorstep pickups across every residential sector, metro terminal, and commercial tech park in Noida and Greater Noida within 30–45 minutes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {localHubs.map((hub, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 shadow-xs"
            >
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-600" />
                {hub.title}
              </h3>
              <ul className="space-y-2.5">
                {hub.areas.map((area, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                    <Navigation size={13} className="text-amber-600 shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}