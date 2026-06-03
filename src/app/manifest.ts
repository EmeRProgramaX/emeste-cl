import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EMESTÉ.CL",
    short_name: "EMESTÉ",
    description: "Software, DJ y mentorías creadas por Emerson Gil.",
    start_url: "/",
    display: "standalone",
    background_color: "#020003",
    theme_color: "#ec008c",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/logo-emeste.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
