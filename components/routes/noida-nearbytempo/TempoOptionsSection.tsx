import type { RouteData } from "@/data/routes/taxiroutes";
import type { Vehicle } from "@/data/vehicles";

type TempoOptionsSectionProps = {
  route: RouteData;
  vehicles: Vehicle[];
};

type TempoOption = {
  vehicle: string;
  seating: string;
  luggage: string;
  suitedFor: string;
};

function getTempoVehicles(vehicles: Vehicle[]) {
  return vehicles.filter(
    (vehicle) =>
      vehicle.category === "Tempo Traveller"
  );
}

export default function TempoOptionsSection({
  route,
  vehicles,
}: TempoOptionsSectionProps) {
  const tempoVehicles =
    getTempoVehicles(vehicles);

  const tempoOptions: TempoOption[] =
    tempoVehicles.map((vehicle) => ({
      vehicle: vehicle.name,
      seating: `${vehicle.seats} passengers`,
      luggage: `${vehicle.luggage} bags`,
      suitedFor:
        vehicle.seats >= 20
          ? "Large groups, events and corporate travel"
          : vehicle.seats >= 12
            ? "Families, office groups and group trips"
            : "Small groups and family travel",
    }));

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* ================================================================ */}
        {/* Heading */}
        {/* ================================================================ */}

        <div className="max-w-4xl">

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Tempo Traveller Options for{" "}
            {route.from.name} to{" "}
            {route.to.name}
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Choose a Tempo Traveller for your{" "}
            {route.from.name} to{" "}
            {route.to.name} journey based on your
            group size and luggage requirements.
            Different seating capacities are available
            for families, office groups, events and
            other group trips.
          </p>

        </div>

        {/* ================================================================ */}
        {/* Tempo Options Table */}
        {/* ================================================================ */}

        <div className="mt-7 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[760px] border-collapse text-sm">

              {/* ======================================================== */}
              {/* Table Header */}
              {/* ======================================================== */}

              <thead>
                <tr className="bg-slate-50 text-left">

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Tempo Traveller
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Seating Capacity
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Luggage Capacity
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Best Suited For
                  </th>

                </tr>
              </thead>

              {/* ======================================================== */}
              {/* Table Body */}
              {/* ======================================================== */}

              <tbody>

                {tempoOptions.map((item) => (
                  <tr
                    key={item.vehicle}
                    className="border-t border-slate-200 transition hover:bg-amber-50/30"
                  >

                    <th
                      scope="row"
                      className="px-5 py-4 text-left font-semibold text-slate-900"
                    >
                      {item.vehicle}
                    </th>

                    <td className="px-5 py-4 text-slate-600">
                      {item.seating}
                    </td>

                    <td className="px-5 py-4 text-slate-600">
                      {item.luggage}
                    </td>

                    <td className="px-5 py-4 text-slate-600">
                      {item.suitedFor}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        </div>

        {/* ================================================================ */}
        {/* Empty State */}
        {/* ================================================================ */}

        {tempoOptions.length === 0 && (
          <div className="mt-7 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">

            <h3 className="text-lg font-semibold text-slate-900">
              Tempo Traveller options coming soon
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              We currently do not have Tempo Traveller
              vehicle details available for this route.
            </p>

          </div>
        )}

      </div>
    </section>
  );
}