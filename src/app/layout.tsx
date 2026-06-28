import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { TrackingScripts } from "@/components/TrackingScripts";
import "./globals.css";
import "./responsive.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

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
    default: "EMESTÉ.CL | Software, Web y Automatización",
    template: "%s | EMESTÉ.CL",
  },
  description:
    "EMESTÉ ayuda a empresas a captar clientes, crear páginas web, implementar WhatsApp comercial, automatizar procesos y desarrollar software a medida.",
  keywords: [
    "EMESTÉ",
    "EMESTÉ.CL",
    "páginas web para negocios",
    "software a medida Chile",
    "automatización de negocios",
    "WhatsApp Business Chile",
    "landing page Chile",
    "sistemas POS",
  ],
  authors: [{ name: "Emerson Gil" }],
  creator: "Emerson Gil",
  publisher: "EMESTÉ.CL",
  alternates: {
    canonical: "https://www.emeste.cl",
  },
  openGraph: {
    title: "EMESTÉ.CL | Software, Web y Automatización",
    description:
      "Evaluamos tu empresa y recomendamos la solución correcta: página web, WhatsApp comercial, landing, software, POS o automatización.",
    url: "https://www.emeste.cl",
    siteName: "EMESTÉ.CL",
    images: [
      {
        url: "/logo-emeste.png",
        width: 1200,
        height: 1200,
        alt: "EMESTÉ.CL - Software, web y automatización para empresas",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMESTÉ.CL | Software, Web y Automatización",
    description:
      "Páginas web, WhatsApp comercial, software a medida y automatización para empresas.",
    images: ["/logo-emeste.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <TrackingScripts />
        {children}
      </body>
    </html>
  );
}
