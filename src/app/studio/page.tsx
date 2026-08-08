import type { Metadata } from "next";
import { StudioClient } from "./StudioClient";

export const metadata: Metadata = {
  title: "EMESTÉ Studio & Academy | Beneficio exclusivo",
  description:
    "Sigue a @emeste_studio_academy y accede a una orientación estética inicial para conocer la opción adecuada para ti.",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  return <StudioClient />;
}
