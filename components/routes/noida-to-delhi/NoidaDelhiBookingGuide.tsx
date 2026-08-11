import {
  CarFront,
  CircleIcon,
  Edit3,
  Map,
  Medal,
  Moon,
} from "lucide-react";

const guideItems = [
  {
    title: "Multi-City Trip Options",
    description:
      "Customize your journey with multiple stops between Noida and New Delhi.",
    icon: Map,
  },
  {
    title: "Choosing the Right Cab Type",
    description:
      "Select the ideal cab for your journey from Noida to New Delhi.",
    icon: CarFront,
  },
  {
    title: "Driver Quality and Experience",
    description:
      "Understand the professionalism and allowances for drivers during your journey from Noida to New Delhi.",
    icon: Medal,
  },
  {
    title: "Modifying Your Booking",
    description:
      "Learn how to easily adjust your cab booking details.",
    icon: Edit3,
  },
  {
    title: "Night Travel Policies",
    description:
      "Guidelines for late-night journeys from Noida to New Delhi.",
    icon: Moon,
  },
];

export default function NoidaDelhiBookingGuide() {
  return (
    <section className="bg-slate-50 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">

        {/* Heading */}
        <h2 className="mb-6 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          Noida to New Delhi Cab Booking Guide
        </h2>

        {/* Guide Grid */}
        <div className="grid gap-4 lg:grid-cols-2">
          {guideItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  group
                  flex
                  min-h-[86px]
                  items-center
                  gap-4
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-4
                  transition-all
                  duration-200
                  hover:border-slate-300
                  hover:shadow-sm
                  sm:px-5
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-slate-200
                    bg-slate-50
                    text-amber-600
                    transition-colors
                    group-hover:bg-teal-50
                  "
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-slate-900 sm:text-[17px]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-slate-600 sm:text-[15px]">
                    {item.description}
                  </p>
                </div>

                {/* Info Icon */}
                {/* <button
                  type="button"
                  aria-label={`More information about ${item.title}`}
                  className="
                    hidden
                    shrink-0
                    text-slate-500
                    transition-colors
                    hover:text-slate-900
                    sm:block
                  "
                >
                  <CircleIcon size={23} strokeWidth={1.7} />
                </button> */}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}