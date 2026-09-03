import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

const PHONE_NUMBER = "+918377809809";
const WHATSAPP_NUMBER = "+918377809809";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-6">
      {/* Background Glow */}
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-amber-600 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-500 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-amber-600 to-amber-500 p-8 shadow-2xl sm:p-10 lg:p-16">
          <div className="flex flex-col items-center text-center">

            {/* Badge */}
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur">
              Trusted by 15,000+ Riders
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
              Ready To Book
              <span className="block">
                Your Next Ride?
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-red-50 sm:text-lg">
              Whether it&apos;s a local ride, airport transfer or an
              outstation journey, we&apos;ve got a comfortable cab ready
              for you.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">

              {/* Book Now */}
              <Link
                href="/booking"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-amber-600 transition duration-200 hover:scale-105 hover:shadow-lg"
              >
                Book Your Ride

                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20book%20a%20cab%20from%20Noida.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white transition duration-200 hover:bg-white/20"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M20.52 3.449A11.816 11.816 0 0 0 12.05 0C5.495 0 .16 5.334.16 11.89c0 2.096.547 4.142 1.588 5.946L.054 24l6.307-1.655a11.89 11.89 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.89-11.89a11.82 11.82 0 0 0-3.42-8.454zM12.05 21.785h-.004a9.87 9.87 0 0 1-5.03-1.377l-.36-.214-3.742.982 1-3.649-.235-.374a9.87 9.87 0 0 1-1.515-5.263c0-5.45 4.437-9.886 9.89-9.886a9.83 9.83 0 0 1 7.007 2.906 9.85 9.85 0 0 1 2.899 7.016c0 5.45-4.437 9.887-9.89 9.887z" />
                </svg>

                WhatsApp
              </a>

              {/* Call Now */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition duration-200 hover:bg-white/10"
              >
                <Phone size={20} />
                Call Now
              </a>

            </div>

            {/* Trust Points */}
            {/* <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-red-100 sm:gap-8">
              <span>✓ Fixed Fare</span>
              <span>✓ No Hidden Charges</span>
              <span>✓ 24×7 Support</span>
              <span>✓ Verified Drivers</span>
            </div> */}

            {/* Phone Number */}
            {/* <p className="mt-6 text-sm text-white/80">
              Need help? Call us at{" "}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="font-bold text-white underline underline-offset-2"
              >
                8377809809
              </a>
            </p> */}

          </div>
        </div>
      </div>
    </section>
  );
}