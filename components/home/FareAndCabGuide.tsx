import Link from "next/link";

const fareRows = [
  { type: "Hatchback", examples: "WagonR", passengers: "4", rate: "₹10 per km" },
  { type: "Sedan", examples: "Dzire, Etios, Amaze", passengers: "4", rate: "₹10 per km" },
  { type: "7-seater SUV", examples: "Ertiga", passengers: "6", rate: "₹13 per km" },
  { type: "Premium SUV", examples: "Innova Crysta", passengers: "6", rate: "₹16 per km" },
  { type: "Tempo Traveller", examples: "12, 16, 20 or 24 seater", passengers: "12–24", rate: "Quote on request" },
];

const cabChoices = [
  { situation: "1–3 people, short city ride", cab: "WagonR (hatchback)", href: "/taxi/wagonr" },
  { situation: "Airport drop or Delhi meeting, 1–4 people", cab: "Dzire, Amaze or Etios (sedan)", href: "/sedan-taxi-in-noida" },
  { situation: "Family of 5–6 with bags", cab: "Ertiga", href: "/suv-taxi-in-noida" },
  { situation: "Long outstation trip, comfort priority", cab: "Innova Crysta", href: "/suv-taxi-in-noida" },
  { situation: "Group of 10+", cab: "12-seater Tempo Traveller", href: "/tempo-traveller-in-noida" },
  { situation: "Wedding, large family or corporate group", cab: "16, 20 or 24-seater Tempo Traveller", href: "/tempo-traveller-in-noida" },
];

export default function FareAndCabGuide() {
  return (
    <>
      <section className="border-b border-slate-300 bg-white/95 py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-amber-700">Noida taxi fare</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">Noida Taxi Fare and Cab Rates – What You Pay and What Affects It</h2>
            <p className="mt-4 leading-7 text-slate-600">Indicative per-kilometre rates help you compare vehicles. Your total is confirmed before you book.</p>
          </div>

          <div className="mt-8 overflow-x-auto border border-slate-200 bg-white">
            <table className="w-full min-w-160 text-left text-sm">
              <thead className="bg-slate-100 text-slate-900">
                <tr>
                  <th className="px-5 py-4 font-semibold">Cab type</th>
                  <th className="px-5 py-4 font-semibold">Examples</th>
                  <th className="px-5 py-4 font-semibold">Passengers</th>
                  <th className="px-5 py-4 font-semibold">Indicative rate</th>
                </tr>
              </thead>
              <tbody>
                {fareRows.map((row) => (
                  <tr key={row.type} className="border-t border-slate-200 text-slate-700">
                    <th scope="row" className="px-5 py-4 font-semibold text-slate-900">{row.type}</th>
                    <td className="px-5 py-4">{row.examples}</td>
                    <td className="px-5 py-4">{row.passengers}</td>
                    <td className="px-5 py-4 font-semibold text-slate-900">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-7 grid gap-7 lg:grid-cols-2">
            <p className="leading-7 text-slate-600">Your final fare depends on distance, one-way or round-trip travel, waiting time, night travel, tolls and state tax on outstation routes, and the vehicle you choose. We confirm the total before you book. For Noida to Delhi, a hatchback or sedan suits 1–3 people; for 4+ people with luggage, an Ertiga can cost less per person than two cabs.</p>
            <div className="flex flex-col items-start justify-center gap-3 border-l-2 border-amber-500 pl-5">
              <p className="font-semibold text-slate-900">Check the full Noida taxi fare chart</p>
              <Link href="/noida-taxi-fare" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4">View Noida taxi fares</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white/95 py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-amber-700">Choose a vehicle</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">Which Cab Should You Book? A Quick Guide</h2>
          </div>
          <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
            {cabChoices.map((choice) => (
              <div key={choice.situation} className="grid gap-2 py-4 sm:grid-cols-[1fr_1fr] sm:gap-8">
                <p className="text-slate-600">{choice.situation}</p>
                <Link href={choice.href} className="font-semibold text-slate-900 hover:text-amber-700">{choice.cab} <span aria-hidden="true">→</span></Link>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-600">All our cars are air-conditioned, GPS-enabled and cleaned before every trip.</p>
          <nav aria-label="Cab types" className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-amber-700">
            <Link href="/sedan-taxi-in-noida">Sedan taxi in Noida</Link>
            <Link href="/suv-taxi-in-noida">SUV taxi in Noida</Link>
            <Link href="/tempo-traveller-in-noida">Tempo Traveller in Noida</Link>
            <Link href="/taxi">All cabs</Link>
          </nav>
        </div>
      </section>
    </>
  );
}