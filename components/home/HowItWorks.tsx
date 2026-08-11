import Image from "next/image";
import { howItWorks } from "@/data/howItWorks";

export default function HowItWorks() {
  return (
    <section className=" py-6 lg:py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mb-4 text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-600">
            How It Works
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Book Your Cab in
            <span className="block text-amber-600">
              Just 3 Easy Steps
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Booking a taxi with NoidaCab is quick, simple and hassle-free.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left Image */}
          <div className="overflow-hidden rounded-3xl bg-white p-8 shadow-lg">
            <Image
              src="/howtobook.webp"
              alt="How NoidaCab Works"
              width={600}
              height={600}
              className="mx-auto object-contain"
            />
          </div>

          {/* Steps */}
          <div className="space-y-10">
            {howItWorks.map((step) => (
              <div
                key={step.number}
                className="flex gap-6 rounded-3xl bg-white p-6 shadow-md transition hover:shadow-xl"
              >
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-amber-400 text-xl font-bold text-white">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}