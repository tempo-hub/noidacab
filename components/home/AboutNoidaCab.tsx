import Image from "next/image";

export default function AboutNoidaCab() {
  return (
    <section className="bg-white lg:pt-28 pt-96">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mb-4 text-center">
          <span className="inline-flex mt-6 rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-400">
            About NoidaCab
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Reliable Cab Service
            <br />
            <span className="text-amber-400">
              Across Noida & Greater Noida
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left Card */}
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              Travel Comfortably with NoidaCab
            </h3>

            <p className="leading-8 text-gray-600">
              NoidaCab offers safe, affordable, and reliable taxi services for
              local travel, airport transfers, and outstation trips. Our
              professional drivers, transparent pricing, and 24×7 availability
              ensure a comfortable travel experience every time.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-3xl font-bold text-amber-400">24×7</h4>
                <p className="text-gray-500">Cab Availability</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-amber-400">100%</h4>
                <p className="text-gray-500">Verified Drivers</p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/noida.png"
              alt="Noida City"
              width={700}
              height={500}
              className="h-[420px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-bold">
                Serving Every Corner of Noida
              </h3>

              <p className="mt-2 max-w-sm text-white/90">
                Local rides, airport transfers, corporate travel, and
                outstation taxis with premium comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}