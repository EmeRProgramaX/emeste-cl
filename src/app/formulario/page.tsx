import type { Metadata } from "next";
import { FormularioClient } from "./FormularioClient";

export const metadata: Metadata = {
  title: "Formulario de proyecto web",
  description:
    "Cuéntanos sobre tu empresa, servicios y objetivos para preparar tu página web con EMESTÉ.CL.",
  alternates: {
    canonical: "https://www.emeste.cl/formulario",
  },
};

export default function FormularioPage() {
  return <FormularioClient />;
}
