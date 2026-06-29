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
    default: "EMESTÉ.CL | Páginas Web, WhatsApp Business y Software para Negocios",
    template: "%s | EMESTÉ.CL",
  },
  description:
    "EMESTÉ.CL ayuda a negocios, emprendedores y profesionales a vender más con páginas web, WhatsApp Business, Instagram, software, POS, automatización y soporte tecnológico.",
  applicationName: "EMESTÉ.CL",
  keywords: [
    "EMESTÉ.CL",
    "páginas web para negocios Chile",
    "landing page Chile",
    "WhatsApp Business Chile",
    "optimización Instagram empresas",
    "software a medida Chile",
    "sistema POS Chile",
    "automatización de negocios",
    "soporte tecnológico Chile",
  ],
  authors: [{ name: "Emerson Gil" }],
  creator: "Emerson Gil",
  publisher: "EMESTÉ.CL",
  alternates: {
    canonical: "https://www.emeste.cl",
  },
  openGraph: {
    title: "EMESTÉ.CL | Consigue más clientes por WhatsApp",
    description:
      "Páginas web, WhatsApp Business, Instagram, software/POS, automatización y soporte tecnológico para negocios que quieren vender mejor.",
    url: "https://www.emeste.cl",
    siteName: "EMESTÉ.CL",
    images: [
      {
        url: "/logo-emeste.png",
        width: 1200,
        height: 1200,
        alt: "EMESTÉ.CL - Páginas web, WhatsApp Business y software para negocios",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMESTÉ.CL | Páginas Web, WhatsApp Business y Software",
    description:
      "Presencia digital profesional para captar clientes desde Facebook, Marketplace, Instagram y WhatsApp.",
    images: ["/logo-emeste.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
