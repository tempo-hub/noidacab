import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { RouteData } from "@/data/routes/taxiroutes";
import { vehicles, type Vehicle } from "@/data/vehicles";

/**
 * Calculates fare using: (distance * 1.5 * vehicle_price) + 500
 */
function calculateFare(distanceStr: string, vehiclePriceStr: string): number {
  const distance = parseFloat(distanceStr.replace(/[^0-9.]/g, "")) || 0;
  const ratePerKm = parseFloat(vehiclePriceStr.replace(/[^0-9.]/g, "")) || 0;
  return Math.round(distance * 1.5 * ratePerKm + 500);
}

export default function RouteFareTable({ route }: { route: RouteData }) {
  return (
    <section className="border-b border-slate-200 bg-white/95 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Sparkles size={13} className="text-amber-600" />
            Pricing Breakdown
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            {route.from.name} to {route.to.name} Taxi Fare Chart
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Compare flat-rate fares across our fleet for your {route.distance} trip. All prices include vehicle rent, fuel, and chauffeur charges.
          </p>
        </div>

        {/* Dynamic Table Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead className="border-b border-slate-200 bg-slate-50/80">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-700">
                    Vehicle Model
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-700">
                    Category
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-700">
                    Capacity
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-700">
                    Estimated Fare
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-700">
                    Est. GST (5%)
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-slate-700">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-sm">
                {vehicles
  .filter((veh) => veh.slug !== "sedan-taxi")
  .map((veh) => {
                  const estimatedFare = calculateFare(route.distance, veh.price);
                  const gst = Math.round(estimatedFare * 0.05);

                  // Deep-link to vehicle landing page using established ternary rules
                  const vehicleHref = `/${veh.slug}${
                    veh.slug === "innova-crysta" ||
                    veh.category === "Tempo Traveller" ||
                    veh.category === "Urbania"
                      ? "-in-noida"
                      : "-taxi-in-noida"
                  }`;

                  const waMessage = encodeURIComponent(
                    `Hello NoidaCab, I want to book a ${veh.name} from ${route.from.name} to ${route.to.name}. Estimated Fare: ₹${estimatedFare.toLocaleString("en-IN")}. Please confirm booking.`
                  );

                  return (
                    <tr
                      key={veh.slug}
                      className="transition-colors hover:bg-amber-50/40"
                    >
                      {/* Vehicle Name */}
                      <td className="px-6 py-4.5">
  <span className="font-bold text-slate-900">
    {veh.name}
  </span>
  <span className="block text-[11px] text-slate-400">
    {veh.price} base rate
  </span>
</td>

                      {/* Category */}
                      <td className="px-6 py-4.5 font-medium text-slate-600">
                        {veh.category}
                      </td>

                      {/* Seats & Luggage */}
                      <td className="px-6 py-4.5 text-slate-600">
                        <span className="font-semibold text-slate-800">
                          {veh.seats}
                        </span>{" "}
                        Seats • {veh.luggage} Bags
                      </td>

                      {/* Estimated Price */}
                      <td className="px-6 py-4.5 font-black text-slate-900 sm:text-base">
                        ₹{estimatedFare.toLocaleString("en-IN")}
                      </td>

                      {/* Taxes */}
                      <td className="px-6 py-4.5 text-xs text-slate-500">
                        + ₹{gst}
                      </td>

                      {/* Book / WhatsApp Button */}
                      <td className="px-6 py-4.5 text-center">
                        <a
                          href={`https://wa.me/918377809809?text=${waMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white shadow-2xs transition hover:bg-amber-700 active:scale-[0.98]"
                        >
                          Book Now
                          <ArrowRight size={13} />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Informative Fine-print Note */}
        <p className="mt-4 text-center text-xs text-slate-500">
          * Toll taxes, state border entry permits (if applicable), and parking are additional and payable at actuals. Night driving allowance applies between 10:00 PM and 6:00 AM.
        </p>
      </div>
    </section>
  );
}