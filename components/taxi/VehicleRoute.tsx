import Link from "next/link";
import {
  Clock3,
  MapPin,
  Route as RouteIcon,
  Plane,
  Compass,
  ArrowRight,
  Navigation2,
  Building2,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

export default function VehicleRoute({ vehicle }: { vehicle: Vehicle }) {
  const routes = [
    {
      title: "IGI Airport Transfers",
      category: "Dedicated Transit",
      icon: Plane,
      badge: "24x7 Express",
      distance: "42 - 50 km",
      duration: "60 - 80 mins",
      routePath: "Noida / Greater Noida ➔ DND / Barapullah ➔ IGI T1/T2/T3",
      description: `Punctual flight pickups and drop-offs. Generous boot space for ${vehicle.luggage} bags with zero luggage handling hassle.`,
      ctaText: "Book Airport Cab",
    },
    {
      title: "Noida to Delhi Intercity",
      category: "Commute & Corporate",
      icon: Building2,
      badge: "Fastest Corridor",
      distance: "20 - 35 km",
      duration: "35 - 55 mins",
      routePath: "Noida Sectors ➔ Connaught Place / South Delhi / Gurgaon",
      description: `AC comfort through peak traffic. Ideal for office meetings, family visits, hospital transits, and shopping excursions.`,
      ctaText: "Book Delhi Cab",
    },
    {
      title: "Outstation Road Trips",
      category: "Highways & Tours",
      icon: Compass,
      badge: "Yamuna & Agra Exp.",
      distance: "180 - 450 km",
      duration: "Same / Multi Day",
      routePath: "Noida ➔ Agra / Jaipur / Mathura-Vrindavan / Dehradun",
      description: `Highway-tested ${vehicle.name} with commercial tourist permit, professional chauffeurs, and transparent per-km billing.`,
      ctaText: "Book Outstation",
    },
    {
      title: "Noida & Greater Noida Local",
      category: "Daily & Hourly Rentals",
      icon: MapPin,
      badge: "8 Hr / 80 Km",
      distance: "Custom City Run",
      duration: "Flexible Hours",
      routePath: "Sector 18 / 62 / 137 ➔ Pari Chowk ➔ Knowledge Park",
      description: `Multiple stopovers made easy. Keep the vehicle on standby with professional driver service for all-day local convenience.`,
      ctaText: "Book City Ride",
    },
  ];

  return (
    <section className="bg-white/95 border-b border-slate-200 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 border border-amber-200/80 mb-3">
            <RouteIcon size={13} className="text-amber-600" />
            Coverage & Destinations
          </div>
          <h2 className="text-2xl font-black text-slate-900 sm:text-4xl tracking-tight">
            Popular {vehicle.name} Taxi Routes from Noida
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            From local sector commutes and quick airport transfers to weekend outstation getaways, hire a verified {vehicle.name} on the most frequent routes across Delhi NCR.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((route, index) => {
            const Icon = route.icon;

            return (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-600/40 transition-all duration-200"
              >
                <div>
                  {/* Card Top Strip */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-600">
                      {route.badge}
                    </span>
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                    {route.category}
                  </p>
                  <h3 className="text-base font-extrabold text-slate-900 mt-1">
                    {route.title}
                  </h3>

                  {/* Route Corridor */}
                  <div className="mt-3 rounded-lg bg-slate-50 border border-slate-100 p-2 text-[11px] font-semibold text-slate-700 flex items-start gap-1.5">
                    <Navigation2 size={13} className="text-amber-600 shrink-0 mt-0.5" />
                    <span className="leading-tight">{route.routePath}</span>
                  </div>

                  {/* Distance & Duration */}
                  <div className="mt-3 grid grid-cols-2 gap-2 border-t border-b border-slate-100 py-2.5 text-xs">
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-400">Distance</span>
                      <span className="font-extrabold text-slate-800">{route.distance}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-400">Duration</span>
                      <span className="font-extrabold text-slate-800">{route.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {route.description}
                  </p>
                </div>

                {/* Direct Booking CTA */}
                <a
                  href={`https://wa.me/918377809809?text=Hi,%20I%20want%20to%20book%20a%20${encodeURIComponent(vehicle.name)}%20for%20${encodeURIComponent(route.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-slate-50/70 py-2.5 text-xs font-bold text-slate-800 transition hover:border-amber-600 hover:bg-amber-600 hover:text-white"
                >
                  {route.ctaText}
                  <ArrowRight size={13} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom Route Note Banner */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Clock3 className="h-5 w-5 text-amber-600 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-600">
              Need a customized multi-city or round-trip itinerary? We provide custom route packages tailored to your schedule.
            </p>
          </div>
          <a
            href="https://wa.me/918377809809?text=Hello,%20I%20need%20a%20custom%20route%20package%20for%20Noida%20cab%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-amber-700 transition shrink-0"
          >
            Request Custom Route
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}