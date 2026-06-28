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
    default: "EMESTÉ.CL | Consigue más clientes por WhatsApp",
    template: "%s | EMESTÉ.CL",
  },
  description:
    "EMESTÉ ayuda a negocios locales a captar más clientes por WhatsApp desde Facebook, Instagram y páginas web. Revisión gratis, Pack WhatsApp + Instagram, Landing Express y soluciones tecnológicas.",
  keywords: [
    "EMESTÉ",
    "EMESTÉ.CL",
    "Emerson Gil",
    "clientes por WhatsApp",
    "landing page Chile",
    "páginas web para negocios",
    "Instagram para negocios",
    "WhatsApp Business Chile",
    "desarrollo web Chile",
    "software a medida Chile",
    "automatización de negocios",
    "sistemas POS",
    "soporte informático",
  ],
  authors: [{ name: "Emerson Gil" }],
  creator: "Emerson Gil",
  publisher: "EMESTÉ.CL",
  alternates: {
    canonical: "https://www.emeste.cl",
  },
  openGraph: {
    title: "EMESTÉ.CL | Más clientes por WhatsApp para tu negocio",
    description:
      "Revisamos tu negocio y te ayudamos a mejorar Instagram, WhatsApp y tu página web para recibir más consultas desde Facebook e Instagram.",
    url: "https://www.emeste.cl",
    siteName: "EMESTÉ.CL",
    images: [
      {
        url: "/logo-emeste.png",
        width: 1200,
        height: 1200,
        alt: "EMESTÉ.CL - Clientes por WhatsApp y soluciones digitales",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMESTÉ.CL | Clientes por WhatsApp",
    description:
      "Landing pages, WhatsApp, Instagram, páginas web y soluciones tecnológicas para negocios que quieren vender más.",
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
    <html lang="es-CL" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <TrackingScripts />
        {children}
      </body>
    </html>
  );
}
