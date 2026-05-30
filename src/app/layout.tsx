import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./responsive.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#020006",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.emeste.cl"),
  title: {
    default: "EMESTÉ.CL | Software, DJ y Mentorías",
    template: "%s | EMESTÉ.CL",
  },
  description:
    "EMESTÉ.CL une desarrollo de software, páginas web, automatizaciones, sistemas empresariales, carrera DJ y mentorías de crecimiento personal desde Chile.",
  keywords: [
    "EMESTÉ",
    "EMESTÉ.CL",
    "Emerson Gil",
    "desarrollo web Chile",
    "software a medida Chile",
    "automatización de negocios",
    "sistemas POS",
    "consultoría tecnológica",
    "DJ Emesté",
    "mentorías de crecimiento personal",
    "Emesté Mente Diferente",
  ],
  authors: [{ name: "Emerson Gil" }],
  creator: "Emerson Gil",
  publisher: "EMESTÉ.CL",
  alternates: {
    canonical: "https://www.emeste.cl",
  },
  openGraph: {
    title: "EMESTÉ.CL | Software, DJ y Mentorías",
    description:
      "Tecnología, música y conciencia para construir negocios, experiencias y vidas con propósito.",
    url: "https://www.emeste.cl",
    siteName: "EMESTÉ.CL",
    images: [
      {
        url: "/logo-emeste.png",
        width: 1200,
        height: 1200,
        alt: "Logo oficial EMESTÉ.CL",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMESTÉ.CL | Software, DJ y Mentorías",
    description:
      "Software, páginas web, automatización, música y mentorías creadas por Emerson Gil.",
    images: ["/logo-emeste.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <body>{children}</body>
    </html>
  );
}
