import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alfa Rizi — Software Engineer Portfolio",
    short_name: "Alfa Rizi",
    description: "Building quiet, powerful systems. Distributed backend microservices & RAG AI pipelines.",
    start_url: "/",
    display: "standalone",
    background_color: "#141414",
    theme_color: "#f4f3ef",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
