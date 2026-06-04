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
    default: "EMESTÉ.CL | Páginas web, software y automatización en Chile",
    template: "%s | EMESTÉ.CL",
  },
  description:
    "EMESTÉ.CL crea páginas web, landing pages, software a medida, automatizaciones, POS y soporte informático para empresas, emprendedores y profesionales en Chile.",
  keywords: [
    "EMESTÉ",
    "EMESTÉ.CL",
    "Emerson Gil",
    "desarrollo web Chile",
    "landing pages Chile",
    "software a medida Chile",
    "automatización de negocios",
    "sistemas POS",
    "soporte informático",
    "consultoría tecnológica",
  ],
  authors: [{ name: "Emerson Gil" }],
  creator: "Emerson Gil",
  publisher: "EMESTÉ.CL",
  alternates: {
    canonical: "https://www.emeste.cl",
  },
  openGraph: {
    title: "EMESTÉ.CL | Tecnología premium para vender y operar mejor",
    description:
      "Páginas web, landing pages, sistemas, automatizaciones, POS y soporte informático con diseño profesional y enfoque comercial.",
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
    title: "EMESTÉ.CL | Páginas web, software y automatización",
    description:
      "Soluciones tecnológicas profesionales para negocios que necesitan vender más y trabajar mejor.",
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
