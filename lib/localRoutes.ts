// // lib/localRoutes.ts
// import { allRoutes, RouteKey } from "@/data/routes";

// export function findRoute(pageKey: RouteKey, slug: string) {
//   return allRoutes[pageKey].find((r) => `${r.fromSlug}-to-${r.toSlug}` === slug);
// }

// export function getAllSlugs(pageKey: RouteKey) {
//   return allRoutes[pageKey].map((r) => ({ slug: `${r.fromSlug}-to-${r.toSlug}` }));
// }