import { whyChoose } from "@/data/whyChoose";

export default function WhyChooseCards() {
  return (
    <section className=" py-12">
      <div className="container-custom">
        {/* Heading */}
        <div className="mx-auto mb-4 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-600">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Why Thousands of Customers
            <span className="block text-amber-600">
              Choose NoidaCab
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Experience reliable, affordable, and comfortable cab services
            designed for every type of journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3  ">
          {whyChoose.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl justify-center items-center text-center"
              >
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition group-hover:bg-amber-400 group-hover:text-white">
                  <Icon size={30} />
                </div>
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}