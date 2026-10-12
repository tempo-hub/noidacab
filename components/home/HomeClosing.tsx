import { Mail, MapPin, Phone } from "lucide-react";

export default function HomeClosing() {
  return (
    <>
      <section className="bg-slate-950 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-400">NoidaCab bookings</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Book Your Taxi in Noida Now</h2>
              <p className="mt-4 leading-7 text-slate-300">Whether you are heading to the airport, going to Delhi for a meeting or planning a family trip, your cab is one call away.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/918377809809" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 bg-amber-400 px-5 font-bold text-slate-950 hover:bg-amber-300">
                Book on WhatsApp
              </a>
              <a href="tel:+918377809809" className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/40 px-5 font-bold text-white hover:bg-white/10">
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>
          <div className="mt-9 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-slate-300 sm:flex-row sm:flex-wrap sm:gap-x-8">
            <a className="inline-flex items-center gap-2 hover:text-white" href="tel:+918377809809"><Phone size={16} /> +91 83778 09809</a>
            <a className="inline-flex items-center gap-2 hover:text-white" href="mailto:info@noidacab.com"><Mail size={16} /> info@noidacab.com</a>
            <span className="inline-flex items-center gap-2"><MapPin size={16} /> Sector 2, Noida, Uttar Pradesh</span>
          </div>
        </div>
      </section>
      <section className="bg-white py-7">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-sm leading-7 text-slate-600">NoidaCab offers taxi service in Noida, cab booking in Noida, Noida to Delhi taxi, airport taxi in Noida, outstation cabs from Noida, one way taxi in Noida, Tempo Traveller on rent in Noida, and cab service in Greater Noida and Noida Extension. Choose a sedan, SUV, Ertiga or Innova Crysta, with service available 24x7.</p>
        </div>
      </section>
    </>
  );
}