import Link from "next/link";

const useCases = [
  { title: "Noida to Delhi airport taxi", description: "Early flights, late arrivals and round trips.", href: "/airport-transfer" },
  { title: "Railway station transfers", description: "New Delhi, Old Delhi, Hazrat Nizamuddin and Anand Vihar.", href: "/taxi" },
  { title: "Hospital visits", description: "Travel to AIIMS, Fortis, Max, Jaypee and local hospitals.", href: "/taxi" },
  { title: "Weddings and group travel", description: "Bride and groom cars, guest transport and Tempo Travellers for the baraat.", href: "/tempo-traveller-in-noida" },
  { title: "Office and corporate travel", description: "Daily or monthly commute, client pickups and airport transfers.", href: "/contact" },
  { title: "Sightseeing trips", description: "Delhi city tours, Agra's Taj Mahal and Mathura–Vrindavan.", href: "/routes" },
  { title: "Family trips", description: "Choose an Ertiga or Innova Crysta with room for luggage.", href: "/suv-taxi-in-noida" },
  { title: "Pilgrimage travel", description: "Haridwar, Rishikesh, Mathura–Vrindavan and longer journeys.", href: "/routes" },
  { title: "Student and relocation travel", description: "Arrange hostel drops, railway station rides and airport transfers.", href: "/taxi" },
];

export default function HomeUseCases() {
  return (
    <section className="border-b border-slate-300 bg-white/95 py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-amber-700">Travel for every occasion</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">Taxi in Noida for Every Need</h2>
        </div>
        <div className="mt-8 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => (
            <Link key={item.title} href={item.href} className="group border-t border-slate-300 py-5">
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700">{item.title}</h3>
              <p className="mt-2 leading-6 text-slate-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}