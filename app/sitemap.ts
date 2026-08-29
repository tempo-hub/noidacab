import type { MetadataRoute } from "next";
import urlRoutes from "@/data/urlroute.json";

const BASE_URL = "https://noidacab.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicRoutes = urlRoutes
    .filter((route) => route.url !== "/")
    .map((route) => ({
      url: `${BASE_URL}${route.url.startsWith("/") ? "" : "/"}${route.url}`,
      lastModified: new Date(),
      priority: route.url.includes("-to-") ? 0.9 : 0.7,
    }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      priority: 1.0,
    },
    ...dynamicRoutes,
  ];
}