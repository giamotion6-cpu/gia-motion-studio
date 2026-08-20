import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://giamotionstudio.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-08-20"),
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date("2026-08-20"),
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date("2026-08-20"),
    },
    {
      url: `${baseUrl}/portafolio`,
      lastModified: new Date("2026-08-20"),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-08-20"),
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date("2026-08-20"),
    },
  ];
}
