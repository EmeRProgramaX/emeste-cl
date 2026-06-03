import type { MetadataRoute } from "next";

const baseUrl = "https://www.emeste.cl";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/software", "/dj", "/presskit", "/mentorias", "/actualizaciones", "/contacto"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
