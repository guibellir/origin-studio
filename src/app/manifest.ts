import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Origin",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#0a0a0b",
    lang: "pt-BR",
    categories: ["business", "productivity"],
  };
}
