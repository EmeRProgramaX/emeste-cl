import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/data/emeste";

export const metadata: Metadata = {
  title: "Política de privacidad | EMESTÉ.CL",
  description:
    "Cómo EMESTÉ Control Total recoge, usa y protege los datos que compartes en formularios de Facebook e Instagram, WhatsApp y este sitio.",
  alternates: { canonical: `${siteConfig.domain}/privacidad` },
};

const secciones = [
  {
    titulo: "1. Quién es responsable de tus datos",
    cuerpo: [
      `${siteConfig.legalName}, marca ${siteConfig.name} y software EMESTÉ Control Total, a cargo de ${siteConfig.founder}, Chile.`,
      `Contacto: ${siteConfig.email} o WhatsApp ${siteConfig.whatsappDisplay}.`,
    ],
  },
  {
    titulo: "2. Qué datos recogemos",
    cuerpo: [
      "Cuando completas un formulario de nuestros anuncios en Facebook o Instagram, usas el formulario de este sitio o nos escribes por WhatsApp, recibimos:",
      "• Nombre, número de WhatsApp y comuna o ciudad.",
      "• Las respuestas del formulario: tipo de negocio, número de sucursales, cómo controlas hoy tus ventas y tu stock, y si te sirve el modelo de instalación única más mensualidad.",
    ],
  },
  {
    titulo: "3. Para qué los usamos",
    cuerpo: [
      "• Contactarte por WhatsApp para coordinar una demostración del sistema EMESTÉ Control Total.",
      "• Entender si el sistema se ajusta a tu negocio antes de conversar contigo.",
      "• Responder tus consultas.",
      "No usamos tus datos para otros fines sin avisarte y no vendemos tus datos a terceros.",
    ],
  },
  {
    titulo: "4. Con quién se comparten",
    cuerpo: [
      "• Meta Platforms (Facebook e Instagram), que procesa los formularios de anuncios según sus propias políticas.",
      "• WhatsApp, cuando conversamos contigo.",
      "No compartimos tus datos con otras empresas, salvo que la ley lo exija.",
    ],
  },
  {
    titulo: "5. Cuánto tiempo los conservamos",
    cuerpo: [
      "Mientras dure la conversación comercial y hasta 12 meses después del último contacto, salvo que pidas antes su eliminación.",
    ],
  },
  {
    titulo: "6. Tus derechos",
    cuerpo: [
      `Puedes pedir acceso, rectificación, eliminación u oposición al uso de tus datos escribiendo a ${siteConfig.email} o por WhatsApp al ${siteConfig.whatsappDisplay}. Responderemos en un plazo razonable.`,
    ],
  },
  {
    titulo: "7. Cambios en esta política",
    cuerpo: ["Si actualizamos esta política, publicaremos la nueva versión en esta misma página."],
  },
];

export default function PrivacidadPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <SiteHeader />

      <section className="relative z-10 px-6 pb-20 pt-36">
        <article className="glass-pro mx-auto max-w-3xl rounded-[2rem] p-8 md:p-12">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-pink-200">Legal</p>
          <h1 className="text-4xl font-black leading-tight md:text-5xl">Política de privacidad</h1>
          <p className="mt-4 text-sm text-zinc-400">Última actualización: 27 de noviembre de 2026</p>

          {secciones.map((s) => (
            <div key={s.titulo} className="mt-9">
              <h2 className="text-xl font-black text-white">{s.titulo}</h2>
              {s.cuerpo.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-zinc-200">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}
