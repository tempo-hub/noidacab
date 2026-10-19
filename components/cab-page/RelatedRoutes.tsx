import Link from "next/link";
import {
  ArrowRight,
  MapPinned,
  Route,
} from "lucide-react";
import RelatedCityRoutes from "@/components/cab/RelatedCityRoutes";

export type RelatedRoute = {
  fromName: string;
  toName: string;
  url: string;
};

type Props = {
  route?: {
    fromName: string;
    toName: string;
  };
  vehicle?: {
    name: string;
  };
  routes?: RelatedRoute[];
  destinationCity?: string;
  vehicleSlug?: string;
  vehicleName?: string;
  distanceTravelTime?: boolean;
  taxiFare?: boolean;
  oneWayTaxi?: boolean;
  buttonText?: string;
  title?: string;
  subtitle?: string;
};

export function RelatedRoutes({
  route,
  vehicle,
  routes = [],
  destinationCity,
  vehicleSlug,
  vehicleName,
  ...restProps
}: Props) {
  // If static routes are passed, render them
  if (routes && routes.length > 0) {
    const fromName = route?.fromName || "Noida";
    const toName = route?.toName || destinationCity || "Uttar Pradesh";
    const vName = vehicle?.name || vehicleName || "Cab";

    return (
      <section className="bg-white/95 border-b border-gray-300 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                <Route className="h-4 w-4" />
                RELATED ROUTES
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                More {vName} Cab Routes
              </h2>

              <p className="mt-3 text-base leading-7 text-slate-600">
                Explore other popular cab routes and travel options similar to your
                journey from{" "}
                <span className="font-semibold text-slate-900">{fromName}</span> to{" "}
                <span className="font-semibold text-slate-900">{toName}</span>.
              </p>
            </div>
          </div>

          {/* Route Cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((relatedRoute) => (
              <Link
                key={relatedRoute.url}
                href={relatedRoute.url}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-100 transition group-hover:bg-amber-50">
                    <MapPinned className="h-5 w-5 text-slate-700 group-hover:text-amber-600" />
                  </div>

                  <ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-amber-500" />
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {vName} Cab
                  </p>

                  <h3 className="mt-2 text-lg font-bold leading-7 text-slate-900">
                    {relatedRoute.fromName} to {relatedRoute.toName}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    View route details and cab booking options
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // When static routes are not provided, render the comprehensive RelatedCityRoutes component
  const effectiveDest = destinationCity || route?.toName || "Uttar Pradesh";
  const effectiveVehicleSlug = vehicleSlug || (vehicle?.name ? vehicle.name.toLowerCase().replace(/[^a-z0-9]/g, "-") : "taxi");
  const effectiveVehicleName = vehicleName || vehicle?.name || "Cab";

  return (
    <RelatedCityRoutes
      destinationCity={effectiveDest}
      vehicleSlug={effectiveVehicleSlug}
      vehicleName={effectiveVehicleName}
      {...restProps}
    />
  );
}

export default RelatedRoutes;
export { RelatedCityRoutes };