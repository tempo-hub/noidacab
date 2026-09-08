import type { Vehicle } from "@/data/vehicles";
import {
  Users,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  AirVent,
  Navigation,
  Clock,
  Sparkles,
} from "lucide-react";

export default function VehicleOverview({ vehicle }: { vehicle: Vehicle }) {
  const categoryDescriptions: Record<string, string> = {
    Hatchback: "economical, compact city travel and quick local daily rides",
    Sedan: "comfortable city commutes, executive airport transfers, and business travel",
    SUV: "family vacations, spacious outstation travel, and highway endurance",
    Urbania: "luxury executive road trips, VIP transit, and elite group comfort",
    "Tempo Traveller": "large family pilgrimage tours, wedding transit, and corporate group travel",
  };

  const defaultCategoryText = "comfortable, safe, and reliable travel across Delhi NCR and outstation routes";
  const categorySummary = categoryDescriptions[vehicle.category] || defaultCategoryText;

  return (
    <section className="bg-white/95 border-b border-slate-200 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Context & Overview Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold text-amber-700 border border-amber-200/70">
              <Sparkles size={13} className="text-amber-600" />
              <span>{vehicle.category} Overview</span>
            </div>

            <div>
              <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Experience Comfort with {vehicle.name} Taxi in Noida
              </h2>
              <p className="mt-2 text-sm font-medium text-slate-500">
                Premium sanitized fleet &bull; Commercial verified drivers &bull; Transparent distance-based billing
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
              <p>
                The <strong className="font-semibold text-slate-900">{vehicle.name}</strong> is a dedicated{" "}
                {vehicle.category.toLowerCase()} cab designed specifically for {categorySummary}. Engineered 
                for spaciousness, it comfortably accommodates up to{" "}
                <strong className="font-semibold text-slate-900">{vehicle.seats} passengers</strong> along with ample 
                boot space for around <strong className="font-semibold text-slate-900">{vehicle.luggage} bags</strong>, 
                ensuring your travel across Noida and Greater Noida is seamless.
              </p>

              <p>
                Every vehicle in our fleet is climate-controlled with high-efficiency air conditioning
                {vehicle.gps ? ", live GPS-enabled tracking for optimal safety," : ""} 
                {vehicle.driverChoice ? " and manned by vetted, route-trained chauffeurs." : "."} 
                Whether you require an early morning pickup for IGI Airport, a round-trip to Agra, or an all-day local hire, 
                this vehicle adapts flexibly to your group size and scheduling needs.
              </p>
            </div>

            {/* Quick Benefits Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "100% On-Time Pickup Guarantee",
                "Sanitized & Smoke-Free Interiors",
                "Zero Hidden Surge Pricing",
                "24x7 Roadside & Helpline Assistance",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Highlights Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-6 sm:p-8 shadow-md">
              <h3 className="text-base font-bold uppercase tracking-wider text-slate-900 mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-600" />
                Vehicle Snapshot
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {/* Seating */}
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2.5 text-slate-400 mb-1.5">
                    <Users size={18} className="text-amber-600" />
                    <span className="text-xs font-bold uppercase tracking-wider">Capacity</span>
                  </div>
                  <p className="text-base font-extrabold text-slate-900">
                    {vehicle.seats} Passengers
                  </p>
                </div>

                {/* Luggage */}
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2.5 text-slate-400 mb-1.5">
                    <Briefcase size={18} className="text-amber-600" />
                    <span className="text-xs font-bold uppercase tracking-wider">Luggage</span>
                  </div>
                  <p className="text-base font-extrabold text-slate-900">
                    {vehicle.luggage} Bags / Bags
                  </p>
                </div>

                {/* AC / Climate */}
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2.5 text-slate-400 mb-1.5">
                    <AirVent size={18} className="text-amber-600" />
                    <span className="text-xs font-bold uppercase tracking-wider">Climate</span>
                  </div>
                  <p className="text-base font-extrabold text-slate-900">
                    Dual AC System
                  </p>
                </div>

                {/* Tracking */}
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2.5 text-slate-400 mb-1.5">
                    <Navigation size={18} className="text-amber-600" />
                    <span className="text-xs font-bold uppercase tracking-wider">Navigation</span>
                  </div>
                  <p className="text-base font-extrabold text-slate-900">
                    Live GPS Tracked
                  </p>
                </div>
              </div>

              {/* Verified Trust Strip */}
              <div className="mt-5 rounded-xl border border-amber-200/80 bg-amber-50/50 p-3.5 flex items-center gap-3">
                <ShieldCheck size={24} className="text-amber-600 shrink-0" />
                <p className="text-xs leading-tight font-medium text-slate-700">
                  Inspected before departure. Commercial yellow-plate licensed cab with verified background-checked drivers.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}