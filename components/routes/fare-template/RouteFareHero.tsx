import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Navigation,
  PhoneCall,
  ShieldCheck,
  Star,
  Users,
  Luggage,
} from "lucide-react";
import { vehicles, type Vehicle } from "@/data/vehicles";
import { RouteData } from "@/data/routes/taxiroutes";

export function calculateRouteFare(
  distanceStr: string,
  vehiclePriceStr: string
): number {
  const distance = parseFloat(distanceStr.replace(/[^0-9.]/g, "")) || 0;
  const ratePerKm = parseFloat(vehiclePriceStr.replace(/[^0-9.]/g, "")) || 0;
  const total = distance * 1.5 * ratePerKm + 500;
  return Math.round(total);
}

type RouteFareHeroProps = {
  route: RouteData;
  vehicle?: Vehicle;
};

export default function RouteFareHero({ route, vehicle }: RouteFareHeroProps) {
  const selectedVehicle = vehicle || vehicles[0];

  const isTempo =
    selectedVehicle.category?.toLowerCase() === "tempo-traveller" ||
    selectedVehicle.slug?.toLowerCase().includes("tempo") ||
    selectedVehicle.slug?.toLowerCase().includes("urbania") ||
    selectedVehicle.name?.toLowerCase().includes("tempo") ||
    selectedVehicle.name?.toLowerCase().includes("urbania");

  const estimatedFare = calculateRouteFare(
    route.distance,
    selectedVehicle.price
  );
  const formattedFare = `₹${estimatedFare.toLocaleString("en-IN")}`;

  const waMessage = encodeURIComponent(
    `Hello NoidaCab, I want to book a ${
      isTempo ? "Tempo Traveller / Urbania rental" : "cab"
    } from ${route.from.name} to ${route.to.name}. Estimated fare shown is ${formattedFare}. Please share vehicle availability and confirmation.`
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-500 via-amber-300 to-white/95 py-16 sm:py-20 lg:py-24 text-slate-900 border-b border-slate-300">
      {/* Background Soft Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-7">
            {/* Live Status & Route Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-950/15 bg-white/70 px-3.5 py-1 text-xs font-bold text-slate-950 shadow-2xs backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                </span>
                Active Transit Corridor
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-900/10 bg-white/60 px-3 py-1 text-xs font-bold text-slate-800 backdrop-blur-md">
                <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                4.9/5 Rating
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-3xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {route.from.name} to {route.to.name}{" "}
              <span className="block text-slate-900">
                {isTempo ? "Luxury Tempo & Urbania" : `Taxi Fare strating at ${formattedFare} `}
              </span>
            </h1>

            {/* Route Stats Ribbon */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-900/10 bg-white/80 px-3.5 py-2 font-bold text-slate-800 shadow-2xs backdrop-blur-xs">
                <Navigation className="h-4 w-4 text-amber-700" />
                <span>
                  {route.from.name} ➔ {route.to.name}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-900/10 bg-white/80 px-3.5 py-2 font-bold text-slate-800 shadow-2xs backdrop-blur-xs">
                <Clock className="h-4 w-4 text-amber-700" />
                <span>
                  {route.distance} • Approx {route.duration}
                </span>
              </div>
            </div>

            {/* Editorial Summary */}
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-800 sm:text-base sm:leading-7 font-medium">
              {route.description ||
                (isTempo
                  ? `Hire a premium Force Urbania or Tempo Traveller (9 to 26 seater) from ${route.from.name} to ${route.to.name}. Complete with pushback seating, dual AC blowers, all-India tourist permits, and verified highway chauffeurs.`
                  : `Reliable doorstep pickup across ${route.from.name} for direct drop in ${route.to.name}. Clean air-conditioned sedans and SUVs with transparent per-kilometer billing, zero cancellation penalties, and verified chauffeurs.`)}
            </p>

            {/* Value Commitments */}
            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs sm:text-sm text-slate-800 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-950" />
                <span>Zero surge pricing &amp; transparent meter tariff</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-950" />
                <span>Verified FASTag expressway toll receipts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-950" />
                <span>Commercial green/yellow plate vehicles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-950" />
                <span>Doorstep reporting at homes, offices &amp; hotels</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={`https://wa.me/918377809809?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-slate-950 px-7 py-3.5 text-sm font-black text-white shadow-xl shadow-slate-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Book via WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:918377809809"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-900/20 bg-white/80 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xs backdrop-blur-xs transition hover:bg-white"
              >
                <PhoneCall className="h-4 w-4 text-amber-700" />
                Call 8377809809
              </a>
            </div>
          </div>

          {/* ================= RIGHT ESTIMATE CARD ================= */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/90 p-6 shadow-2xl shadow-amber-950/10 backdrop-blur-xl sm:p-7">
              {/* Decorative Card Accent */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-400/25 blur-2xl" />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-200/70 pb-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                    Transparent Estimate
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-slate-900">
                    Calculated Base Rate
                  </p>
                </div>
                <span className="rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-800">
                  Fixed Pricing
                </span>
              </div>

              {/* Price Box */}
              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/70 p-4.5">
                <p className="text-xs font-semibold text-slate-600">
                  {selectedVehicle.name} • Starting Base Fare
                </p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                    {formattedFare}
                  </span>
                  <span className="text-xs font-bold text-amber-800">
                    all-inclusive base
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] text-slate-600">
                  Covers fuel expenses, vehicle sanitation &amp; driver allowance.
                </p>
              </div>

              {/* Route Waypoints */}
              <div className="mt-5 space-y-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                    <MapPin className="h-3 w-3" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Pickup Origin: </span>
                    <span className="text-slate-700">{route.from.name}</span>
                    <p className="text-[10px] text-slate-500">
                      Doorstep arrival across all sectors &amp; societies
                    </p>
                  </div>
                </div>

                <div className="ml-2.5 h-3 border-l border-dashed border-slate-300" />

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                    <Navigation className="h-3 w-3" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Destination: </span>
                    <span className="text-slate-700">{route.to.name}</span>
                    <p className="text-[10px] text-slate-500">
                      Direct expressway point-to-point drop
                    </p>
                  </div>
                </div>
              </div>

              {/* Fleet Specs */}
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-slate-200/80 bg-white p-3">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Users className="h-3.5 w-3.5 text-amber-600" />
                    <span className="font-medium">Capacity</span>
                  </div>
                  <p className="mt-1 font-bold text-slate-950 truncate">
                    {selectedVehicle.seats || (isTempo ? 12 : 4)} Passengers
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200/80 bg-white p-3">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Luggage className="h-3.5 w-3.5 text-amber-600" />
                    <span className="font-medium">Luggage</span>
                  </div>
                  <p className="mt-1 font-bold text-slate-950 truncate">
                    {selectedVehicle.luggage || (isTempo ? 8 : 2)} Large Bags
                  </p>
                </div>
              </div>

              {/* Bottom Guarantee */}
              <div className="mt-5 flex items-center justify-between border-t border-slate-200/70 pt-4 text-[11px] font-medium text-slate-600">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  Instant WhatsApp Confirmation
                </span>
                <span>24x7 Driver Dispatch</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}