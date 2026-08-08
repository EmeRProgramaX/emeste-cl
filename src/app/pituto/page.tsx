import type { Metadata } from "next";
import { PitutoClubClient } from "./PitutoClubClient";

export const metadata: Metadata = {
  title: "EMESTÉ × Pituto Club | Diagnóstico Ejecutivo para tu empresa",
  description:
    "Beneficio exclusivo para contactos de Pituto Club: sigue a @emerson__gil, cuéntanos sobre tu empresa y coordina un Diagnóstico Ejecutivo EMESTÉ sin costo.",
};

export default function PitutoClubPage() {
  return <PitutoClubClient />;
}
