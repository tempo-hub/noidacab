"use client";

import Image from "next/image";
import {
  MapPin,
  Car,
  BusFront,
  MapPinned,
  ArrowRight,
  ShieldCheck,
  Clock,
  Building2,
  Plane,
  Train,
  HeartHandshake,
  Compass,
  Users,
  Briefcase,
} from "lucide-react";
import type { Vehicle } from "@/data/vehicles";

type Props = {
  location: {
    slug: string;
    name: string;
  };
  vehicle: Vehicle;
};

export function RouteInfo({ location, vehicle }: Props) {
  const isTempo =
    vehicle.category?.toLowerCase() === "tempo-traveller" ||
    vehicle.slug?.toLowerCase().includes("tempo") ||
    vehicle.slug?.toLowerCase().includes("urbania") ||
    vehicle.name?.toLowerCase().includes("tempo") ||
    vehicle.name?.toLowerCase().includes("urbania");

  const vehicleLabel = isTempo ? "rental" : "taxi";

  const whatsappUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
    `Hello NoidaCab, I need to book a ${vehicle.name} ${vehicleLabel} from ${location.name}. Please share availability and booking details.`
  )}`;

  // Use cases switch dynamically based on Tempo Traveller vs regular Cab
  const travelUseCases = isTempo
    ? [
        {
          title: "Outstation Group Tours",
          desc: `Comfortable road journeys from ${location.name} to Agra, Jaipur, Shimla, Manali & Rishikesh.`,
          icon: Compass,
        },
        {
          title: "Weddings & Celebrations",
          desc: `Guest group transit, baraat transfers, and family event logistics across Noida & Delhi NCR.`,
          icon: HeartHandshake,
        },
        {
          title: "Family Vacations",
          desc: `Spacious travel with expansive luggage storage, reclining pushback seats, and chilled dual AC.`,
          icon: Users,
        },
        {
          title: "Corporate & Team Events",
          desc: `Reliable transit for offsites, client visits, conferences, and multi-day group tours.`,
          icon: Briefcase,
        },
      ]
    : [
        {
          title: "Airport Transfers",
          desc: `Direct drop to IGI T3/T1 & upcoming Jewar Airport from ${location.name}.`,
          icon: Plane,
        },
        {
          title: "Railway Drop",
          desc: "Fast drops to New Delhi (NDLS), Anand Vihar & Nizamuddin stations.",
          icon: Train,
        },
        {
          title: "Business Parks",
          desc: "Daily office commutes to Sector 62, 125, 135, and Express Trade Towers.",
          icon: Building2,
        },
        {
          title: "Local Sightseeing",
          desc: `Hourly rentals across ${location.name} for shopping, dining, and city chores.`,
          icon: MapPinned,
        },
      ];

  return (
    <section className="border-b border-gray-300 bg-white/95 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="max-w-7xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-700">
            <MapPinned className="h-4 w-4 text-amber-600" />
            {isTempo ? "GROUP DEPARTURE HUB" : "LOCAL CONNECTIVITY"}
          </div>

          <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            {vehicle.name} {isTempo ? "Rental Service" : "Cab Service"} in {location.name}
          </h2>

          <p className="mt-3 max-w-7xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            {isTempo
              ? `Doorstep group departures across all sectors and societies in ${location.name} for outstation tours, family trips, and wedding events.`
              : `Reliable doorstep pickups across all blocks, societies, and commercial complexes in ${location.name} with fixed meter prices.`}
          </p>
        </div>

        {/* ================= HERO HUB CARD ================= */}
        <div className="mt-10 max-w-7xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
          <div className="grid lg:grid-cols-12 lg:items-center">

            {/* Left: Pickup Origin Info */}
            <div className="p-6 sm:p-8 lg:col-span-4 xl:p-10">
              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 shadow-xs">
                  <MapPin className="h-6 w-6" />
                  <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-amber-500" />
                  </span>
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Pickup Sector / Locality
                  </p>
                  <h3 className="mt-1 truncate text-xl font-extrabold text-slate-950">
                    {location.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {isTempo
                      ? "Doorstep pickup for group departures & wedding venues"
                      : "Doorstep pickup at your apartment / office gate"}
                  </p>
                </div>
              </div>
            </div>

            {/* Center: Real Vehicle Photo & Badge */}
            <div className="relative border-y border-slate-100 bg-slate-50/70 p-4 lg:col-span-4 lg:border-x lg:border-y-0">
              <div className="relative h-58 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white sm:h-58">
                <Image
                  src={vehicle.image || "/cabs/amazemain.webp"}
                  alt={`${vehicle.name} in ${location.name}`}
                  fill
                  className={`transition-transform duration-300 hover:scale-105 ${
                    isTempo ? "object-contain p-3" : "object-cover"
                  }`}
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
                <div className="absolute top-2.5 left-2.5 rounded-md bg-slate-950/80 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-xs">
                  {vehicle.name} • {vehicle.category || (isTempo ? "Luxury Tempo" : "AC Cab")}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between px-1 text-xs">
                <span className="font-semibold text-slate-600">Base Price</span>
                <span className="font-black text-amber-600">{vehicle.price}</span>
              </div>
            </div>

            {/* Right: Service Dispatch Metrics & Action */}
            <div className="p-6 sm:p-8 lg:col-span-4 xl:p-10">
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-700">
                  <Clock className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>
                    <strong>{isTempo ? "Guaranteed On-Time" : "10–15 Mins"}</strong>{" "}
                    {isTempo ? "scheduled departure" : "average driver arrival"}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>
                    {isTempo
                      ? "Commercial All-India Tourist Permit & verified chauffeurs"
                      : "Verified chauffeurs & zero cancellation fee"}
                  </span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-slate-800"
              >
                {isTempo ? (
                  <BusFront className="h-4 w-4 text-amber-400" />
                ) : (
                  <Car className="h-4 w-4 text-amber-400" />
                )}
                Book {vehicle.name} in {location.name}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* ================= FREQUENT TRAVEL USE CASES ================= */}
        <div className="mt-8 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {travelUseCases.map((useCase, idx) => {
            const Icon = useCase.icon;

            return (
              <div
                key={idx}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-xs transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-700 transition-colors group-hover:bg-amber-400 group-hover:text-slate-950">
                  <Icon className="h-4 w-4" />
                </div>
                <h4 className="mt-3 text-sm font-bold text-slate-900">
                  {useCase.title}
                </h4>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {useCase.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM SUMMARY BANNER ================= */}
        <div className="mt-6 max-w-7xl">
          <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3.5 sm:px-5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-400 text-slate-950">
              <MapPin className="h-4 w-4" strokeWidth={2.5} />
            </div>
            <p className="text-xs leading-5 text-slate-700 sm:text-sm">
              {isTempo ? (
                <>
                  Planning a group outing or wedding? Luxury{" "}
                  <strong className="text-slate-950">{vehicle.name}</strong> rentals are available from{" "}
                  <strong className="text-slate-950">{location.name}</strong> with transparent per-km billing and verified highway chauffeurs.
                </>
              ) : (
                <>
                  Need a cab right now? Dedicated{" "}
                  <strong className="text-slate-950">{vehicle.name}</strong> cabs are stationed near{" "}
                  <strong className="text-slate-950">{location.name}</strong> for swift dispatch with zero peak-hour surge charges.
                </>
              )}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}