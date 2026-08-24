import {
  Building2,
  MapPinned,
  Navigation,
  ShieldCheck,
} from "lucide-react";

type Props = {
  route: {
    fromName: string;
    toName: string;
  };
  vehicle: {
    name: string;
  };
};

export function ServiceAreas({
  route,
  vehicle,
}: Props) {
  const areas = [
    {
      icon: MapPinned,
      title: route.fromName,
      description: `Cab pickup service available around ${route.fromName}.`,
    },
    {
      icon: Navigation,
      title: route.toName,
      description: `Convenient drop-off service around ${route.toName}.`,
    },
    {
      icon: Building2,
      title: "Nearby Areas",
      description:
        "Pickup and drop locations can be arranged around nearby residential and commercial areas.",
    },
  ];

  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-3xl">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
            <MapPinned className="h-4 w-4" />
            SERVICE AREAS
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Cab Service Around {route.fromName} & {route.toName}
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Book a {vehicle.name} cab for travel between{" "}
            <span className="font-semibold text-slate-900">
              {route.fromName}
            </span>{" "}
            and{" "}
            <span className="font-semibold text-slate-900">
              {route.toName}
            </span>
            , with convenient pickup and drop-off options.
          </p>

        </div>

        {/* Areas */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {areas.map((area) => {
            const Icon = area.icon;

            return (
              <div
                key={area.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 transition group-hover:bg-amber-50">
                  <Icon className="h-6 w-6 text-slate-700 group-hover:text-amber-600" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {area.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {area.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* Service Note */}
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-5">

          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

          <p className="text-sm leading-6 text-slate-700">
            Pickup and drop locations may depend on road access and the
            location provided during booking. Please confirm your exact
            pickup and destination when making your reservation.
          </p>

        </div>

      </div>
    </section>
  );
}