import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ArahAssist · Pendamping Suroboyo Bus",
    short_name: "ArahAssist",
    description: "Rencanakan perjalanan, lacak bus, dan jelajahi wisata Surabaya naik Suroboyo Bus.",
    start_url: "/",
    display: "standalone",
    background_color: "#EFE8DE",
    theme_color: "#1664B0",
    lang: "id",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
