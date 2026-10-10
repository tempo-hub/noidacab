type Props = {
  route: {
    from: string;
    to: string;
    distance: string;
    travelTime: string;
  };
};

export function OneWayFAQ({ route }: Props) {
  
const faqs = [
  {
    question: `How can I book a one-way cab from ${route.from} to ${route.to}?`,
    answer: `Select your preferred vehicle, enter your pickup and destination details, choose your travel date and confirm your ${route.from} to ${route.to} one-way cab booking.`,
  },
  {
    question: `What is the distance between ${route.from} and ${route.to}?`,
    answer: `The approximate road distance from ${route.from} to ${route.to} is ${route.distance}. The actual distance may vary depending on your pickup location, destination and selected route.`,
  },
  {
    question: `How long does a one-way cab journey from ${route.from} to ${route.to} take?`,
    answer: `The journey generally takes around ${route.travelTime}, depending on traffic, weather, road conditions and your exact pickup and drop-off locations.`,
  },
  {
    question: `How much does a one-way taxi from ${route.from} to ${route.to} cost?`,
    answer: `The fare depends on the selected vehicle, journey distance and applicable charges. Check the available cab options and confirm the total fare before booking.`,
  },
  {
    question: `Which vehicles can I book for a one-way trip?`,
    answer: `You can choose from available vehicle categories such as hatchbacks, sedans, SUVs and larger passenger vehicles, depending on availability and your travel requirements.`,
  },
  {
    question: `Do I need to pay for the return journey on a one-way cab?`,
    answer: `A one-way booking is intended for travel from ${route.from} to ${route.to} without booking a return trip. Check the fare details and booking terms to confirm whether any additional charges apply.`,
  },
  {
    question: `Are toll charges and driver allowances included in the fare?`,
    answer: `Inclusions can vary depending on the selected cab and fare policy. Check whether tolls, parking, state taxes and driver allowances are included or charged separately before confirming your booking.`,
  },
  {
    question: `Can I book a one-way taxi for an early morning or late-night journey?`,
    answer: `You can request a pickup for your preferred departure time, subject to cab and driver availability. Advance booking is recommended for early morning and late-night trips.`,
  },
  {
    question: `Can I book a one-way cab from ${route.from} to ${route.to} for the same day?`,
    answer: `Same-day bookings may be possible depending on vehicle and driver availability. Contact the booking team or check available options to confirm your pickup.`,
  },
  {
    question: `Can I choose my pickup and drop-off locations?`,
    answer: `Yes, provide your preferred pickup address in ${route.from} and drop-off address in ${route.to} while booking. The final route and fare may depend on these locations.`,
  },
  {
    question: `Can I carry luggage in a one-way taxi?`,
    answer: `Yes, you can carry luggage within the selected vehicle's capacity. Choose a vehicle with sufficient boot space based on the number of passengers and bags.`,
  },
  {
    question: `Can I travel with my family on a one-way cab?`,
    answer: `Yes, you can select a vehicle according to your family size, luggage and comfort requirements. Make sure the vehicle has enough seats for all passengers.`,
  },
  {
    question: `Can I change my travel date after booking?`,
    answer: `Date or time changes depend on the booking policy and vehicle availability. Contact the booking team as early as possible to request a change.`,
  },
  {
    question: `Can I cancel my one-way taxi booking?`,
    answer: `Cancellation may be available according to the applicable booking policy. Check the cancellation terms before confirming your reservation, as charges may apply.`,
  },
  {
    question: `How early should I book my ${route.from} to ${route.to} taxi?`,
    answer: `Booking in advance is recommended, especially during weekends, holidays and peak travel periods. Same-day availability depends on the selected vehicle and departure time.`,
  },
  {
    question: `Is a one-way taxi suitable for business or outstation travel?`,
    answer: `Yes, a one-way taxi can be suitable for business trips, family visits, airport transfers and other intercity journeys when you do not need to book a return ride.`,
  },
];


  return (
    <section className="bg-white/95 py-12 sm:py-12 border-b border-slate-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            FAQs
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            {route.from} to {route.to} One Way Cab FAQs
          </h2>
        </div>

        <div className="mt-10 divide-y divide-gray-200 rounded-2xl border bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6">
              <summary className="cursor-pointer list-none pr-8 font-semibold text-gray-900">
                {faq.question}
              </summary>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}