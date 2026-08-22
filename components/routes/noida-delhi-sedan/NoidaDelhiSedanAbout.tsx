import Link from "next/link";
import {
  CarFront,
  CheckCircle2,
  MapPin,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: CarFront,
    title: "Comfortable Sedan",
    description:
      "Travel in an air-conditioned sedan designed for comfortable journeys between Noida and Delhi.",
  },
  {
    icon: Users,
    title: "Up to 4 Passengers",
    description:
      "Sedans are suitable for individuals, couples, families and small groups of up to four passengers.",
  },
  {
    icon: MapPin,
    title: "Flexible Pickup",
    description:
      "Choose your preferred pickup location in Noida and destination in Delhi while booking.",
  },
  {
    icon: CheckCircle2,
    title: "Private Journey",
    description:
      "Travel directly to your destination without sharing the vehicle with other passengers.",
  },
];

export default function NoidaDelhiSedanAbout() {
  return (
    <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            About Noida to Delhi Sedan Taxi
          </h2>

          <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
            <p>
              A Noida to Delhi sedan taxi is a convenient option for
              travellers who want a private and comfortable cab for
              travelling between Noida and Delhi. Sedans are suitable
              for individuals, couples, families and small groups.
            </p>

            <p>
              Popular sedan options include the Maruti Dzire, Toyota
              Etios and Honda Amaze. These cars provide air conditioning,
              comfortable seating and luggage space for everyday travel,
              business trips and family journeys.
            </p>

            <p>
              You can select your pickup location in Noida, choose your
              destination in Delhi and select a suitable travel date
              and time. Compare the available sedan options and fares
              before confirming your booking.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >

                <div className="flex items-center justify-between">
                  <h3 className="mt-4 text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <Icon size={21} strokeWidth={1.8} />
                </div>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Internal Links */}
        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <h3 className="text-lg font-bold text-slate-900">
            Explore Sedan Taxi Options
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Compare individual sedan options and find the right car
            for your Noida to Delhi journey.
          </p>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/noida-to-delhi-dzire-taxi"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              Noida to Delhi Dzire Taxi
            </Link>

            <Link
              href="/noida-to-delhi-etios-taxi"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              Noida to Delhi Etios Taxi
            </Link>

            <Link
              href="/noida-to-delhi-amaze-taxi"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              Noida to Delhi Amaze Taxi
            </Link>

            <Link
              href="/noida-to-delhi-taxi-fare"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              Noida to Delhi Taxi Fare
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}