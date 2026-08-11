import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function NoidaDelhiTestimonials() {
  return (
    <section className=" py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-4 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-600">
            Testimonials
          </span>

          <h2 className="mt-5 text-3xl lg:text-5xl font-bold text-gray-900 md:text-5xl">
            What Our Customers  <span className="block text-amber-600"> Say About NoidaCab
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Thousands of customers trust NoidaCab for safe, affordable and
            comfortable journeys.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative overflow-hidden rounded-[30px] bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Accent Border */}
              <div className="absolute left-6 right-6 top-4 h-1 rounded-full bg-amber-400" />
              <div className="absolute right-4 top-6 h-40 w-1 rounded-full bg-amber-400" />

              {/* Huge Quote */}
              <Quote
                size={120}
                className="absolute bottom-4 right-4 text-amber-100"
                strokeWidth={1}
              />

              {/* Header */}
              <div className="relative flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full ring-4 ring-amber-400/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {testimonial.name}
                  </h3>

                  <p className="font-semibold text-amber-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Review */}
              <p className="relative mt-8 text-lg leading-9 text-slate-600">
                {testimonial.review}
              </p>

              {/* Stars */}
              <div className="relative mt-8 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}