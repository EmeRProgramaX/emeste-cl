import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EMESTÉ | Software, Automatización e Inteligencia Artificial",
  description:
    "EMESTÉ desarrolla páginas web premium, software empresarial, automatizaciones e inteligencia artificial para impulsar empresas.",
  keywords: [
    "EMESTÉ",
    "emeste.cl",
    "desarrollo web",
    "software",
    "automatización",
    "inteligencia artificial",
    "sistemas empresariales",
    "landing pages",
  ],
  authors: [{ name: "EMESTÉ Technologies" }],
  creator: "EMESTÉ Technologies",
  openGraph: {
    title: "EMESTÉ Technologies",
    description:
      "Tecnología creada para crecer. Desarrollo web, software, automatización e inteligencia artificial.",
    url: "https://emeste.cl",
    siteName: "EMESTÉ",
    images: [
      {
        url: "/logo-emeste.png",
        width: 1200,
        height: 1200,
        alt: "Logo oficial EMESTÉ",
      },
    ],
    locale: "es_CL",
    type: "website",
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
