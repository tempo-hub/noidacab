import {
  CarFront,
  UserRound,
  Fuel,
  ReceiptText,
  ShieldCheck,
  Clock3,
  Sparkles,
} from "lucide-react";
import { RouteData } from "@/data/routes/taxiroutes";

export default function RouteFareInclusions({ route }: { route: RouteData }) {
  const fareDetails = [
    {
      title: "Selected Cab Allocation",
      description: `Guaranteed allocation of your chosen vehicle class for the complete ${route.from.name} to ${route.to.name} itinerary.`,
      icon: CarFront,
    },
    {
      title: "Commercial Chauffeur",
      description:
        "Dedicated driver allowance included. Verified background, commercial badge, and experienced highway route navigation.",
    },
    {
      title: "Fuel & Running Costs",
      description: `Standard fuel expenses for the ${route.distance} transit are fully covered in the upfront base fare calculation.`,
      icon: Fuel,
    },
    {
      title: "Transparent Billing",
      description:
        "Taxes and applicable charges are itemized transparently. Zero surge pricing during peak hours or weather changes.",
      icon: ReceiptText,
    },
    {
      title: "Clean & Inspected Fleet",
      description:
        "Full AC climate control, active GPS route tracking, and pre-departure sanitized vehicle interiors.",
      icon: ShieldCheck,
    },
    {
      title: "Waiting & Grace Time",
      description: `Includes complimentary pickup grace time in ${route.from.name}. Minimal extra waiting charges apply only for prolonged delays.`,
      icon: Clock3,
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-white/95 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Sparkles size={13} className="text-amber-600" />
            Fare Inclusions
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            What Is Included in Your {route.from.name} to {route.to.name} Taxi Fare?
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Understand the complete breakdown of your {route.distance} journey before confirming your booking.
          </p>
        </div>

        {/* Inclusions Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fareDetails.map((item) => {
            const Icon = item.icon || UserRound;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200/90 bg-[#FFFDF5] p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    {item.title}
                  </h3>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100/70 text-amber-600 transition-colors group-hover:bg-amber-600 group-hover:text-white">
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

        {/* Note Bar */}
        <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 text-center">
          <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
            <strong className="text-slate-900">Important Note:</strong> State border toll permits, MCD entrance charges (if crossing into Delhi/Haryana), and parking fees are charged at actuals based on state transport guidelines.
          </p>
        </div>
      </div>
    </section>
  );
}