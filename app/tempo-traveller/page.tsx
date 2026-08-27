import Link from "next/link";

import urlRoutes from "@/data/urlroute.json";

type Service = {
  title: string;
  url: string;
};

type RouteGroup = {
  route: string;
  services: Service[];
};

export default function TempoTravellerPage() {
  const services: Service[] = urlRoutes
    .map((item) => item.url)
    .filter(
      (url) =>
        url.endsWith("-tempo-traveller") ||
        url.endsWith("-luxury-tempo-traveller") ||
        url.endsWith("-urbania-rental")
    )
    .map((url) => {
      let title = "";

      if (url.endsWith("-luxury-tempo-traveller")) {
        title = "Luxury Tempo Traveller";
      } else if (url.endsWith("-urbania-rental")) {
        title = "Urbania Rental";
      } else {
        title = "Tempo Traveller";
      }

      return {
        title,
        url,
      };
    });

  const routeGroups: RouteGroup[] = [];

  for (const service of services) {
    let routeName = service.url
      .replace(/^\//, "")
      .replace("-luxury-tempo-traveller", "")
      .replace("-urbania-rental", "")
      .replace("-tempo-traveller", "");

    const parts = routeName.split("-to-");

    if (parts.length !== 2) {
      continue;
    }

    const from = parts[0]
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    const to = parts[1]
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    const route = `${from} → ${to}`;

    let group = routeGroups.find(
      (item) => item.route === route
    );

    if (!group) {
      group = {
        route,
        services: [],
      };

      routeGroups.push(group);
    }

    group.services.push(service);
  }

  return (
    <main className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tempo Traveller & Urbania Rental
          </h1>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Choose a destination and explore Tempo Traveller,
            Luxury Tempo Traveller and Urbania rental options.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {routeGroups.map((group) => (
            <section
              key={group.route}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"
            >
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                {group.route}
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {group.services.map((service) => (
                  <Link
                    key={service.url}
                    href={service.url}
                    className="rounded-xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
                  >
                    <h3 className="font-semibold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      {group.route}{" "}
                      {service.title.toLowerCase()}
                    </p>

                    <span className="mt-4 inline-block text-sm font-semibold text-amber-600">
                      View Details →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>
    </main>
  );
}