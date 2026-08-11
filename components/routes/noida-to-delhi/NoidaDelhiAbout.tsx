//components/routes/noida-delhi/NoidaDelhiAbout.tsx

import Link from "next/link";
import {
  Car,
  Clock3,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    title: "Flexible Pickup",
    description:
      "Pickup is available from residential, commercial and business locations across Noida.",
  },
  {
    icon: Car,
    title: "Multiple Cab Options",
    description:
      "Choose from hatchbacks, sedans, SUVs and larger vehicles based on your group size.",
  },
  {
    icon: Clock3,
    title: "Convenient Travel",
    description:
      "Book your cab according to your preferred pickup date and travel time.",
  },
  {
    icon: ShieldCheck,
    title: "Comfortable Journey",
    description:
      "Travel in a private cab with a vehicle selected according to your requirements.",
  },
];

export default function NoidaDelhiAbout() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          About Noida to Delhi Taxi Service
        </h2>

        {/* Content */}
        <div className="mt-5 max-w-5xl space-y-4 text-base leading-7 text-slate-600">
          <p>
            A Noida to Delhi taxi is a convenient option for travellers
            looking for private and comfortable transportation between
            Noida and different parts of Delhi. You can book a cab for
            business travel, family trips, airport transfers, shopping,
            sightseeing or other personal journeys.
          </p>

          <p>
            Depending on your travel requirements, you can choose from
            different vehicle options including hatchbacks, sedans, SUVs
            and larger vehicles. For individual or small-group travel,
            a sedan can be a practical choice, while families and larger
            groups can select vehicles such as the Ertiga, Innova Crysta
            or Tempo Traveller.
          </p>

          <p>
            The pickup and drop location can be selected according to
            your journey. Before booking, you can compare available
            vehicles, seating capacity, fuel type and fare information
            to choose a cab that suits your trip.
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Internal Links */}
        <div className="mt-8 rounded-xl border border-amber-100 bg-amber-50/50 p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-slate-900">
            Explore Noida to Delhi Taxi Options
          </h3>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link
              href="/noida-to-delhi-taxi-fare"
              className="font-medium text-amber-600 hover:underline"
            >
              Noida to Delhi Taxi Fare
            </Link>

            <Link
              href="/noida-to-delhi-one-way-taxi"
              className="font-medium text-amber-600 hover:underline"
            >
              Noida to Delhi One Way Taxi
            </Link>

            <Link
              href="/noida-to-delhi-sedan-taxi"
              className="font-medium text-amber-600 hover:underline"
            >
              Noida to Delhi Sedan Taxi
            </Link>

            <Link
              href="/noida-to-delhi-suv-taxi"
              className="font-medium text-amber-600 hover:underline"
            >
              Noida to Delhi SUV Taxi
            </Link>

            <Link
              href="/noida-to-delhi-innova-crysta-taxi"
              className="font-medium text-amber-600 hover:underline"
            >
              Noida to Delhi Innova Crysta Taxi
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}