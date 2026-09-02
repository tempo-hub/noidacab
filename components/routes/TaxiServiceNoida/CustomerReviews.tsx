import {
  ArrowRight,
  Quote,
  Star,
  UserRound,
} from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    location: "Noida",
    rating: 5,
    review:
      "Booked a taxi from Noida for an outstation trip. The booking process was simple and the driver was professional. The car was comfortable for the journey.",
  },
  {
    name: "Amit Kumar",
    location: "Sector 62, Noida",
    rating: 5,
    review:
      "Used the taxi service for an airport drop. Pickup was convenient and the overall experience was smooth. Good option for airport travel from Noida.",
  },
  {
    name: "Priya Singh",
    location: "Noida Extension",
    rating: 5,
    review:
      "We booked an SUV for a family trip. The vehicle had enough space for everyone and the journey was comfortable. Booking support was helpful as well.",
  },
];

export default function CustomerReviews() {
  return (
    <section className="bg-slate-50/50 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600">
              <Star className="h-3.5 w-3.5" />
              Customer Experience
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What Customers Say About Our Taxi Service
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              We focus on making every booking simple and every journey
              comfortable, whether you're travelling locally in Noida or
              going outstation.
            </p>
          </div>

          {/* Rating Summary */}
          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div>
              <div className="text-2xl font-bold text-slate-900">
                5.0
              </div>

              <div className="mt-1 flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-3.5 w-3.5 fill-current text-amber-500"
                  />
                ))}
              </div>
            </div>

            <div className="h-10 w-px bg-slate-200" />

            <p className="max-w-[130px] text-xs leading-5 text-slate-500">
              Customer-focused taxi booking and travel support
            </p>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard
              key={review.name}
              review={review}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
              <Quote className="h-4 w-4 text-slate-600" />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                Ready to plan your journey?
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                Choose your route and vehicle, then book your taxi in advance.
              </p>
            </div>
          </div>

          <a
            href="tel:8377809809"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Book Your Taxi
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   Review Card
--------------------------------- */

function ReviewCard({
  review,
}: {
  review: {
    name: string;
    location: string;
    rating: number;
    review: string;
  };
}) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_-20px_rgba(15,23,42,0.2)] sm:p-6">
      
      {/* Quote */}
      <div className="flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
          <Quote className="h-4 w-4 text-slate-600" />
        </div>

        <div className="flex items-center gap-0.5">
          {Array.from({ length: review.rating }).map((_, index) => (
            <Star
              key={index}
              className="h-3.5 w-3.5 fill-current text-amber-500"
            />
          ))}
        </div>
      </div>

      {/* Review */}
      <p className="mt-5 flex-1 text-sm leading-6 text-slate-600">
        “{review.review}”
      </p>

      {/* User */}
      <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100">
          <UserRound className="h-4 w-4 text-slate-600" />
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">
            {review.name}
          </p>

          <p className="mt-0.5 text-xs text-slate-500">
            {review.location}
          </p>
        </div>
      </div>
    </article>
  );
}