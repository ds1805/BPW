import { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bhaijipedewale.com";

  const staticRoutes = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/our-story`, priority: 0.9 },
    { url: `${baseUrl}/the-craft`, priority: 0.9 },
    { url: `${baseUrl}/our-pede`, priority: 0.9 },
    { url: `${baseUrl}/the-journey`, priority: 0.8 },
    { url: `${baseUrl}/gallery`, priority: 0.8 },
    { url: `${baseUrl}/visit-us`, priority: 0.9 },
  ];

  const productRoutes = products.map((p) => ({
    url: `${baseUrl}/our-pede/${p.slug}`,
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes].map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));
}
