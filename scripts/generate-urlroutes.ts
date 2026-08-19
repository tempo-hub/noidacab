// import fs from "fs";
// import path from "path";
// import { cityPairRoutes } from "../data/routes";
// import { vehicles } from "../data/vehicles";

// type UrlRouteEntry = {
//   path: string[];
//   url: string;
//   vehicleSlug: string;
//   template: string;
//   route: {
//     fromSlug: string;
//     fromName: string;
//     toSlug: string;
//     toName: string;
//     distanceKm: number;
//   };
//   vehicle: {
//     name: string;
//     seats: number;
//     ratePerKm: number;
//   };
// };

// const entries: UrlRouteEntry[] = [];

// for (const [cityPair, routes] of Object.entries(cityPairRoutes)) {
//   for (const r of routes) {
//     const routeSlug = `${r.fromSlug}-to-${r.toSlug}`;
//     for (const v of vehicles) {
//       entries.push({
//         path: [cityPair, routeSlug, v.slug],
//         url: `/${cityPair}/${routeSlug}/${v.slug}`,
//         vehicleSlug: v.slug,
//         template: v.templateKey,
//         route: {
//           fromSlug: r.fromSlug,
//           fromName: r.fromName,
//           toSlug: r.toSlug,
//           toName: r.toName,
//           distanceKm: r.distanceKm,
//         },
//         vehicle: {
//           name: v.name,
//           seats: v.seats,
//           ratePerKm: v.ratePerKm,
//         },
//       });
//     }
//   }
// }

// const outPath = path.join(process.cwd(), "data", "urlroute.json");
// fs.writeFileSync(outPath, JSON.stringify(entries));

// console.log(`Generated ${entries.length} URLs -> data/urlroute.json`);