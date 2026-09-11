import {
  ArrowRight,
  Check,
  RefreshCcw,
  Plane,
  Sparkles,
  PhoneCall,
  CalendarCheck,
} from "lucide-react";
import { RouteData } from "@/data/routes/taxiroutes";
import { vehicles } from "@/data/vehicles";

/**
 * Calculates fare using: (distance * 1.5 * vehicle_price) + 500
 */
function calculateFare(distanceStr: string, rateKm: number): number {
  const dist = parseFloat(distanceStr.replace(/[^0-9.]/g, "")) || 0;
  return Math.round(dist * 1.5 * rateKm + 500);
}

export default function RouteTripFareComparison({
  route,
}: {
  route: RouteData;
}) {
  // Base rate from entry sedan/hatchback (₹10/km)
  const baseRate = 10;
  const oneWayFare = calculateFare(route.distance, baseRate);
  
  // Round trip formula: 2x distance base plus driver night/day allowance concession
  const roundTripFare = Math.round(oneWayFare * 1.85);

  const fareOptions = [
    {
      type: "One-Way Drop Taxi",
      icon: ArrowRight,
      badge: "Most Popular",
      price: `₹${oneWayFare.toLocaleString("en-IN")}`,
      priceSubtitle: "Fixed flat drop fare",
      description: `Best for travelers who only need a direct doorstep drop from ${route.from.name} to ${route.to.name} with zero return liability.`,
      features: [
        `Direct point-to-point drop in ${route.to.name}`,
        "Pay only for one-sided distance",
        "No night stay or return charges",
        "Commercial driver with toll guidance",
        "Air-conditioned & GPS-tracked cab",
      ],
      highlight: true,
      ctaText: "Book One-Way Cab",
    },
    {
      type: "Round-Trip Return Cab",
      icon: RefreshCcw,
      badge: "Best Value",
      price: `₹${roundTripFare.toLocaleString("en-IN")}`,
      priceSubtitle: "Covers onward & return travel",
      description: `Ideal when visiting ${route.to.name} for business meetings, same-day family events, or weekend getaways with same-cab return.`,
      features: [
        `Same chauffeur & cab reserved for return`,
        `Includes local sightseeing & waiting in ${route.to.name}`,
        "Flexible departure timings",
        "Cost-effective alternative to booking twice",
        "Luggage stays safe inside vehicle",
      ],
      highlight: false,
      ctaText: "Reserve Round-Trip",
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-white/95 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Sparkles size={13} className="text-amber-600" />
            Travel Formats
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            {route.from.name} to {route.to.name} One-Way vs Round-Trip
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Select the travel plan that matches your schedule. All packages include fuel, commercial chauffeur allowance, and clean AC vehicles.
          </p>
        </div>

        {/* 2-Card Grid */}
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {fareOptions.map((option) => {
            const Icon = option.icon;
            const waBookingUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
              `Hello NoidaCab, I want to book a ${option.type} from ${route.from.name} to ${route.to.name}. Quoted base: ${option.price}. Please confirm availability.`
            )}`;

            return (
              <div
                key={option.type}
                className={`relative flex flex-col justify-between rounded-3xl border bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9 ${
                  option.highlight
                    ? "border-amber-400/90 ring-2 ring-amber-400/20"
                    : "border-slate-200/90"
                }`}
              >
                <div>
                  {/* Top Badge & Icon Row */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                        option.highlight
                          ? "bg-amber-600 text-white shadow-2xs"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {option.badge}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 border border-amber-100">
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Title & Estimated Starting Price */}
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                      {option.type}
                    </h3>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-3xl font-black text-slate-900">
                        {option.price}
                      </span>
                      <span className="text-xs text-slate-500">
                        ({option.priceSubtitle})
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {option.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="mt-7 space-y-3 border-t border-slate-100 pt-6">
                    {option.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span className="text-xs font-medium text-slate-700 sm:text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-8 flex items-center gap-3">
                  <a
                    href={waBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 rounded-xl py-3 text-center text-xs sm:text-sm font-bold shadow-sm transition active:scale-[0.98] ${
                      option.highlight
                        ? "bg-amber-600 text-white hover:bg-amber-700"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    {option.ctaText}
                  </a>

                  <a
                    href="tel:8377809809"
                    aria-label="Call Helpline"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100"
                  >
                    <PhoneCall size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}