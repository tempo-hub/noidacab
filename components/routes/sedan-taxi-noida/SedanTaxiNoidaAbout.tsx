import {
  CarFront,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: CarFront,
    title: "Comfortable Sedans",
    description:
      "Choose from Dzire, Etios and Amaze sedans for comfortable everyday travel and longer journeys.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Drivers",
    description:
      "Travel with experienced drivers who understand Noida roads, major sectors and nearby destinations.",
  },
  {
    icon: MapPin,
    title: "Convenient Pickup",
    description:
      "Get sedan taxi pickup from major Noida sectors, residential areas, business hubs and nearby locations.",
  },
  {
    icon: Sparkles,
    title: "Clean & Well Maintained",
    description:
      "Our sedan options are selected for comfortable rides with air conditioning and essential travel features.",
  },
];

export default function SedanTaxiNoidaAbout() {
  return (
    <section className="bg-white/95 border-b border-gray-300 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-600 shadow-sm ring-1 ring-slate-200">
              <CarFront className="h-4 w-4" />
              About Our Sedan Service
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Reliable Sedan Taxi Service in Noida
            </h2>

            <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
              <p>
                Looking for a comfortable sedan taxi in Noida? Our sedan cab
                service is designed for passengers who want a convenient,
                comfortable and dependable way to travel around Noida and
                beyond.
              </p>

              <p>
                Whether you are travelling to a business meeting, heading to
                the airport, visiting another city or planning an outstation
                trip, you can choose a sedan that matches your travel
                requirements.
              </p>

              <p>
                Our available sedan fleet includes popular options such as
                Dzire, Etios and Amaze. These cars are suitable for individuals,
                couples, families and small groups looking for a practical
                4+1 seater taxi.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#book-sedan"
              className="mt-7 inline-flex items-center justify-center rounded-xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-500 hover:text-slate-950"
            >
              Book a Sedan in Noida
            </a>
          </div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
                    <Icon className="h-5 w-5 text-amber-600" />
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Content */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Sedan Cabs for Local and Outstation Travel
          </h3>

          <p className="mt-3 max-w-5xl text-sm leading-7 text-slate-600 sm:text-base">
            From Noida Sector 15 and Sector 18 to Sector 62, Sector 137,
            Greater Noida, Noida Extension and other nearby areas, our sedan
            taxi service helps you arrange convenient point-to-point travel.
            Sedan cabs can also be booked for airport transfers, one-way
            journeys, round trips, corporate travel and outstation
            transportation.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <InfoItem text="Local Noida Travel" />
            <InfoItem text="Airport Transfers" />
            <InfoItem text="One-Way Trips" />
            <InfoItem text="Outstation Travel" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-50">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 text-green-600"
        >
          <path
            fillRule="evenodd"
            d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.42 0l-3.2-3.2a1 1 0 111.42-1.42l2.49 2.49 6.49-6.49a1 1 0 011.42 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>

      <span className="text-sm font-medium text-slate-700">{text}</span>
    </div>
  );
}

