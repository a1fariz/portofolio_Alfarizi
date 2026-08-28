import { MetadataRoute } from "next";
import { REAL_PROJECTS } from "@/data/realPortfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alfarizi.my.id";

  const projectRoutes = REAL_PROJECTS.map((project) => ({
    url: `${baseUrl}/work/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projectRoutes,
  ];
}
