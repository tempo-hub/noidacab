import { Star, Quote, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    name: "Rajesh & Meenakshi Sharma",
    route: "Lucknow to Ayodhya Ram Mandir",
    vehicle: "Innova Crysta",
    rating: 5,
    date: "Traveled last week",
    comment:
      "We booked an Innova Crysta for our family pilgrimage from Lucknow to Ayodhya. Driver Ashok was extremely polite, arrived 15 mins before time, and guided us directly to the best parking near Ram Mandir. Very clean car and transparent billing!",
  },
  {
    name: "Vikram Malhotra",
    route: "Varanasi to Prayagraj Sangam",
    vehicle: "16-Seater Tempo Traveller",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Arranged a 16-seater Tempo Traveller for an extended family holy dip in Prayagraj from Varanasi. The vehicle was spotlessly clean with pushback seats and powerful dual AC. Best rate with no hidden charges.",
  },
  {
    name: "Dr. Ananya Sen",
    route: "Noida to IGI Airport & Delhi NCR",
    vehicle: "Dzire Sedan Taxi",
    rating: 5,
    date: "Regular Rider",
    comment:
      "I frequently travel for medical conferences. NoidaCab is my go-to choice for airport transfers and meetings. Never had a driver cancel on me, and fares are much more economical and reliable than ride-hailing apps.",
  },
  // {
  //   name: "Alok Srivastava",
  //   route: "Noida to Agra Taj Mahal One-Way",
  //   vehicle: "Ertiga SUV",
  //   rating: 5,
  //   date: "3 weeks ago",
  //   comment:
  //     "Took the Yamuna Expressway ride with family. Smooth cruise in an Ertiga with child-friendly driving. Driver knew all the good expressway food stops and dropped us right at our hotel gate in Agra. 10/10 service!",
  // },
  // {
  //   name: "Pooja & Friends",
  //   route: "Haridwar & Rishikesh Tour",
  //   vehicle: "12-Seater Tempo Traveller",
  //   rating: 5,
  //   date: "Last month",
  //   comment:
  //     "Booked a 12-seater luxury tempo traveller for our college reunion trip to Rishikesh. The sound system, legroom, and driver's mountain driving skills were top notch. Everyone in the group loved the trip!",
  // },
  // {
  //   name: "Harish Gupta",
  //   route: "Lucknow City Local Sightseeing",
  //   vehicle: "Honda Amaze Sedan",
  //   rating: 5,
  //   date: "1 month ago",
  //   comment:
  //     "Full day local taxi booking in Lucknow for Bara Imambara and Hazratganj shopping. Transparent hourly package without any driver dispute over waiting or extra kilometers. Highly recommended!",
  // },
];

export default function CabTestimonials() {
  return (
    <section className="bg-white/95 py-12 sm:py-12 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-7xl text-center mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider">
            Client Testimonials
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Loved by Over <span className="text-amber-600">15,000+ Travelers</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Read authentic reviews from families, pilgrims, corporate travelers,
            and tour groups who ride with NoidaCab every day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-gray-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-300 hover:shadow-xl"
            >
              <div>
                {/* Header with stars & quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="h-7 w-7 text-amber-200" />
                </div>

                {/* Comment */}
                <p className="text-sm leading-relaxed text-gray-700 italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Rider Info Footer */}
              <div className="mt-6 pt-5 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-gray-900">
                    {rev.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    <CheckCircle2 className="h-3 w-3" />
                    Verified
                  </span>
                </div>
                <div className="mt-1 flex flex-wrap items-center justify-between text-xs text-gray-500">
                  <span className="font-medium text-amber-700">{rev.route}</span>
                  <span className="text-gray-400">{rev.vehicle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
