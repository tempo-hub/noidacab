import { MapPin, Navigation } from "lucide-react";

type Props = {
  route: {
    from: string;
    to: string;
  };
};

export function OneWayPickupAreas({ route }: Props) {
  const isNoidaFrom = route.from.toLowerCase().includes("noida");
  const isGhaziabadTo = route.to.toLowerCase().includes("ghaziabad");

  const pickupAreas = isNoidaFrom
    ? [
        "Noida Sector 18 (Atta Market)",
        "Noida Sector 62 & IT Hub",
        "Noida Sector 15 & 16 Metro",
        "Noida Sector 50 & 76",
        "Noida Sector 137 & Express City",
        "Noida Extension / Gaur City",
        "Pari Chowk & Greater Noida",
        "Botanical Garden Metro Hub",
      ]
    : [
        `${route.from} Railway Station`,
        `${route.from} Airport / Terminal`,
        `${route.from} City Center / Civil Lines`,
        `${route.from} Bus Terminal / ISBT`,
        `${route.from} Commercial & IT Hubs`,
        "Doorstep Residence / Hotel Pickup",
      ];

  const dropAreas = isGhaziabadTo
    ? [
        "Indirapuram & Shipra Sun City",
        "Vaishali & Kaushambi Metro",
        "Vasundhara & Sahibabad",
        "Raj Nagar Extension",
        "Crossings Republik",
        "Old Ghaziabad Railway Station",
        "Kavi Nagar & Shastri Nagar",
        "Direct Doorstep Drop in Ghaziabad",
      ]
    : [
        `${route.to} Railway Station Area`,
        `${route.to} City Center & Markets`,
        `${route.to} Airport / Highway Junction`,
        `${route.to} Bus Terminal / ISBT`,
        `${route.to} Hotels & Commercial Zones`,
        `Doorstep Delivery Across All ${route.to} Localities`,
      ];

  return (
    <section className="bg-white/95 py-14 sm:py-18 border-b border-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">COVERAGE HUBS</span>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Pickup & Drop Locations ({route.from} to {route.to})
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Enjoy seamless door-to-door cab connectivity across all sectors, metro stations, residential colonies, and transit hubs.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Pickup Points */}
          <div className="rounded-3xl border border-gray-200 bg-slate-50/70 p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white shadow-xs">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Starting Point</p>
                <h3 className="text-lg font-bold text-gray-900">Doorstep Pickup Across {route.from}</h3>
              </div>
            </div>

            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {pickupAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white p-3 text-xs sm:text-sm font-medium text-gray-800 shadow-2xs"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-amber-600" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Drop Points */}
          <div className="rounded-3xl border border-gray-200 bg-slate-50/70 p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white shadow-xs">
                <Navigation className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Destination Drop</p>
                <h3 className="text-lg font-bold text-gray-900">Doorstep Drop Across {route.to}</h3>
              </div>
            </div>

            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {dropAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white p-3 text-xs sm:text-sm font-medium text-gray-800 shadow-2xs"
                >
                  <Navigation className="h-3.5 w-3.5 shrink-0 text-amber-600" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}