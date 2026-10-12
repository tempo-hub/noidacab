import {
  BadgeCheck,
  Headphones,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const safetyPoints = [
  {
    title: "Verified Drivers",
    description:
      "Drivers are checked and experienced with Delhi-NCR roads.",
    icon: BadgeCheck,
  },
  {
    title: "Clean AC Vehicles",
    description:
      "Cars are cleaned and checked before pickup.",
    icon: Sparkles,
  },
  {
    title: "GPS-Enabled Cabs",
    description:
      "Navigation helps keep every trip on the right route.",
    icon: MapPin,
  },
  {
    title: "Respectful Chauffeurs",
    description:
      "Professional, polite drivers focused on punctual pickups.",
    icon: ShieldCheck,
  },
  {
    title: "Responsive Support",
    description:
      "Reach our team by call or WhatsApp before, during and after your trip.",
    icon: Headphones,
  },
  {
    title: "Family-Friendly Travel",
    description:
      "A comfortable option for women travelling alone, senior citizens and families with children.",
    icon: ShieldCheck,
  },
];

export default function SafetyFeatures() {
  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Safe, Clean and Verified, Every Trip
        </h3>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
          Travel with professional drivers, clean vehicles and responsive
          support for journeys across Noida and Delhi-NCR.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {safetyPoints.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="rounded-xl border border-gray-200 bg-white p-5 transition-colors duration-200 hover:border-amber-300"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Icon
                size={22}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </div>

            <h4 className="text-base font-semibold text-gray-900">
              {title}
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}