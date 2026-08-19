// import urlRoutesRaw from "@/data/urlroute.json";

// export type UrlRouteEntry = {
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

// const urlRoutes = urlRoutesRaw as UrlRouteEntry[];

// const routeMap = new Map<string, UrlRouteEntry>(
//   urlRoutes.map((entry) => [entry.url, entry])
// );

// export function resolveUrl(slugParts: string[]): UrlRouteEntry | undefined {
//   return routeMap.get("/" + slugParts.join("/"));
// }

// export function getAllPaths() {
//   return urlRoutes.map((entry) => ({ slug: entry.path }));
// }

// export function getAllUrls() {
//   return urlRoutes.map((entry) => entry.url);
// }