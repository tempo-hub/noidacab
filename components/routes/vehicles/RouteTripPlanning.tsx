export default function RouteTripPlanning({
  from,
  to,
  vehicleName,
  summary,
  planningPoint,
}: {
  from: string;
  to: string;
  vehicleName: string;
  summary: string;
  planningPoint: string;
}) {
  return (
    <section className="border-b border-gray-200 bg-white py-12">
      <div className="mx-auto grid max-w-5xl gap-5 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Route and vehicle planning</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
            {vehicleName} trip from {from} to {to}
          </h2>
          <p className="mt-3 leading-7 text-gray-600">{summary}</p>
        </div>
        <div className="border-l-2 border-amber-400 pl-4 lg:max-w-xs">
          <h3 className="font-semibold text-gray-900">Trip planning point</h3>
          <p className="mt-1 text-sm leading-6 text-gray-600">{planningPoint}</p>
        </div>
      </div>
    </section>
  );
}