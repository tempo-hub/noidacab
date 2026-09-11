import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Navigation } from "lucide-react";
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
  vehicle?: Vehicle; // Optional: specify vehicle, otherwise defaults to lowest base cab (WagonR/Dzire)
};

export default function RouteFareHero({ route, vehicle }: RouteFareHeroProps) {
  // Use specified vehicle or default to entry-level vehicle (WagonR/Dzire at ₹10/km)
  const selectedVehicle = vehicle || vehicles[0];

  const estimatedFare = calculateRouteFare(
    route.distance,
    selectedVehicle.price
  );
  const formattedFare = `₹${estimatedFare.toLocaleString("en-IN")}`;

  const waMessage = encodeURIComponent(
    `Hello NoidaCab, I want to book a taxi from ${route.from.name} to ${route.to.name}. Estimated fare shown is ${formattedFare}. Please share cab availability.`
  );

  return (
    <section className="relative overflow-hidden bg-amber-950">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,179,0,0.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-12 lg:px-8 lg:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_420px]">
          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-3xl">
            {/* Route & Distance Tag */}
            <div className="inline-flex items-center gap-3 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-400 backdrop-blur-md">
              <span className="flex items-center gap-1.5">
                <Navigation size={13} className="text-amber-400" />
                {route.from.name} ➔ {route.to.name}
              </span>
              <span className="text-amber-600/70">•</span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-amber-400" />
                {route.distance} ({route.duration})
              </span>
            </div>

            {/* Dynamic Headline */}
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {route.from.name} to {route.to.name} Taxi Fare
              <span className="mt-2 block text-amber-400">
                Starting From {formattedFare}
              </span>
            </h1>

            {/* Dynamic Description */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-300">
              {route.description ||
                `Book transparent, fixed-fare taxi service from ${route.from.name} to ${route.to.name}. Choose from verified Sedans, SUVs, and Tempo Travellers with commercial chauffeurs and zero hidden charges.`}
            </p>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="w-full lg:justify-self-end">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle2 size={21} className="shrink-0 text-amber-400" />
                <span className="text-base sm:text-lg">
                  Transparent fares & zero surge charges
                </span>
              </div>

              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle2 size={21} className="shrink-0 text-amber-400" />
                <span className="text-base sm:text-lg">
                  Sedans, Ertiga, Innova & Tempo Travellers
                </span>
              </div>

              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle2 size={21} className="shrink-0 text-amber-400" />
                <span className="text-base sm:text-lg">
                  Commercial verified highway chauffeurs
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`https://wa.me/918377809809?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-amber-500/20 transition hover:bg-amber-600 hover:shadow-amber-500/30 active:scale-[0.98]"
              >
                Book Your Cab
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="tel:+918377809809"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Call Helpline
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}