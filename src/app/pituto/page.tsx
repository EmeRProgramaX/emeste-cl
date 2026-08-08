import type { Metadata } from "next";
import { PitutoClubClient } from "./PitutoClubClient";

export const metadata: Metadata = {
  title: "EMESTÉ × Pituto Club | Demo para tu empresa",
  description:
    "Soluciones empresariales, software escalable y automatización. Sigue a @emerson__gil y solicita una demo de EMESTÉ después de conocernos en Pituto Club.",
};

export default function PitutoClubPage() {
  return <PitutoClubClient />;
}
