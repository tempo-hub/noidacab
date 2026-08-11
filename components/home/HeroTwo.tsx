import Image from "next/image";
import { Car, ShieldCheck, Tag } from "lucide-react";
import BookingCard from "./BookingCard";

const features = [
  { icon: Car, title: "15,000+", subtitle: "Rides Completed" },
  { icon: ShieldCheck, title: "Verified Drivers", subtitle: "Background Checked" },
  { icon: Tag, title: "Fixed Pricing", subtitle: "No Hidden Charges" },
];

export default function Hero() {
  return (
    <section className="relative overflow-visible">
      <div className="relative min-h-[560px] overflow-hidden bg-white pb-28 pt-24 sm:min-h-[640px] sm:pb-32 sm:pt-28 lg:min-h-[720px] lg:pb-40 lg:pt-32">
        {/* Background photo — inset to the right ~55-60%, not full-bleed */}
        <div className="absolute inset-y-0 right-0 hidden w-full md:block md:w-[65%] lg:w-[58%] xl:w-[55%]">
          <Image
            src="/hero1.webp"
            alt="NoidaCab vehicles"
            fill
            priority
            className="object-cover"
          />
          {/* Fade the image's left edge into the white background */}
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl lg:max-w-lg">
              <div className="mt-4 mb-4 flex flex-wrap gap-x-8 gap-y-5">
                {features.map(({ icon: Icon, title, subtitle }) => (
                  <div key={title} className="flex items-center gap-3 ">
                    <Icon className="h-6 w-6 shrink-0 text-amber-600" />
                    <div>
                      <p className="text-sm font-bold leading-tight text-gray-900">
                        {title}
                      </p>
                      <p className="text-xs leading-tight text-gray-500">
                        {subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <h1 className="text-3xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-4xl lg:text-6xl">
                Find Your Perfect Ride,
                <span className="block text-amber-600">Travel With Confidence</span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Book verified cabs for local trips, Delhi transfers, and
                outstation journeys. Fixed fares, no surge, support around
                the clock.
              </p>

              <div className="mt-4 flex flex-wrap gap-4">
                <button className="rounded-xl bg-amber-400 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-amber-600/25 transition hover:bg-amber-500">
                  Book Now
                </button>
                <button className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 text-base font-semibold text-gray-800 transition hover:border-gray-400 hover:bg-gray-50">
                  View Fleet
                </button>
              </div>

              

              {/* Mobile-only image — the inset side panel is hidden below md, so show a contained photo here instead */}
              <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl md:hidden">
                <Image
                  src="/hero1.webp"
                  alt="NoidaCab vehicles"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Card — floats over the bottom edge of the hero */}
      <div className="absolute pt-96 md:pt-36 mb-18 md:mb-0 lg:mb-0 lg:pt-0 bottom-0 left-1/2 z-30 w-full max-w-6xl -translate-x-1/2 translate-y-1/2 px-4 sm:px-6 lg:px-8">
        <BookingCard />
      </div>
    </section>
  );
}