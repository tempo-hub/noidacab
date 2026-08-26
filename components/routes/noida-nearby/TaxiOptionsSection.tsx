import type { RouteData } from "@/data/routes/taxiroutes";
import type { Vehicle } from "@/data/vehicles";

type TaxiOptionsSectionProps = {
    route: RouteData;
    vehicles: Vehicle[];
};

type TaxiOption = {
    vehicle: string;
    seating: string;
    luggage: string;
    suitedFor: string;
};

const categoryOrder: Vehicle["category"][] = [
    "Hatchback",
    "Sedan",
    "SUV",
    "Tempo Traveller",
    "Urbania",
];

const suitedFor: Record<
    Vehicle["category"],
    string
> = {
    Hatchback:
        "Solo trips, quick city drops",

    Sedan:
        "Couples, business travel, airport transfers",

    SUV:
        "Families, small groups, extra luggage",

    "Tempo Traveller":
        "Office groups, events, bigger families",

    Urbania:
        "Large groups, corporate travel, events",
};

function getCategoryVehicles(
    vehicles: Vehicle[],
    category: Vehicle["category"]
) {
    return vehicles.filter(
        (vehicle) =>
            vehicle.category === category
    );
}

function getSeating(
    vehicles: Vehicle[]
): string {
    if (!vehicles.length) return "-";

    const seats = vehicles.map(
        (vehicle) => vehicle.seats
    );

    const min = Math.min(...seats);
    const max = Math.max(...seats);

    if (min === max) {
        return `${min} passengers`;
    }

    return `${min} to ${max} passengers`;
}

function getLuggage(
    vehicles: Vehicle[]
): string {
    if (!vehicles.length) return "-";

    const luggage = vehicles.map(
        (vehicle) => vehicle.luggage
    );

    const min = Math.min(...luggage);
    const max = Math.max(...luggage);

    if (min === max) {
        return `${min} bags`;
    }

    return `${min} to ${max} bags`;
}

export default function TaxiOptionsSection({
    route,
    vehicles,
}: TaxiOptionsSectionProps) {
    const categoryOrder: Vehicle["category"][] = [
        "Hatchback",
        "Sedan",
        "SUV",
        "Tempo Traveller",
        "Urbania",
    ];

    const taxiOptions: TaxiOption[] = [];

    for (const category of categoryOrder) {
        const categoryVehicles =
            getCategoryVehicles(
                vehicles,
                category
            );

        if (categoryVehicles.length === 0) {
            continue;
        }

        taxiOptions.push({
            vehicle: category,
            seating: getSeating(categoryVehicles),
            luggage: getLuggage(categoryVehicles),
            suitedFor: suitedFor[category],
        });
    }

    return (
        <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="max-w-4xl">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Taxi Options for{" "}
                        {route.from.name} to{" "}
                        {route.to.name}
                    </h2>

                    <p className="mt-3 text-base leading-7 text-slate-600">
                        Pick a cab from{" "}
                        {route.from.name} to{" "}
                        {route.to.name} based on how many
                        people are travelling and how much
                        luggage you&apos;re carrying. Solo
                        commuters and couples usually go for
                        a hatchback or sedan, while families
                        and larger groups can choose an SUV,
                        Tempo Traveller or Urbania.
                    </p>
                </div>

                {/* Taxi Options Table */}
                <div className="mt-7 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[760px] border-collapse text-sm">

                            <thead>
                                <tr className="bg-slate-50 text-left">
                                    <th className="px-5 py-4 font-semibold text-slate-700">
                                        Vehicle
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

                            <tbody>
                                {taxiOptions.map((item) => (
                                    <tr
                                        key={item.vehicle}
                                        className="border-t border-slate-200"
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
            </div>
        </section>
    );
}