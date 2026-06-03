import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Anirudh Kumar R Portfolio",
    short_name: "Anirudh AI",
    description: "AI-native software engineer portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#080810",
    theme_color: "#020617",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
