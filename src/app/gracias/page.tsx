import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarCheck, CheckCircle2, MessageCircle } from "lucide-react";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildWhatsappUrl, siteConfig } from "@/data/emeste";

export const metadata: Metadata = {
  title: "Gracias | EMESTÉ.CL",
  description: "Gracias por contactar a EMESTÉ.CL. Revisaremos tu solicitud para responder con una solución profesional.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GraciasPage() {
  const whatsappUrl = buildWhatsappUrl("Hola EMESTÉ, acabo de visitar la página de gracias y quiero continuar la conversación.");

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <SiteHeader />

      <section className="relative z-10 flex min-h-screen items-center px-6 pb-20 pt-36">
        <div className="glass-pro glow-3d mx-auto max-w-5xl rounded-[2rem] p-8 text-center md:p-12">
          <CheckCircle2 className="mx-auto mb-6 text-pink-300" size={72} />
          <p className="mb-5 inline-flex rounded-full border border-pink-500/30 bg-pink-500/15 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-pink-200">
            Solicitud recibida
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Gracias por confiar en EMESTÉ.CL
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-zinc-200">
            Tu interés es importante. El siguiente paso es revisar la necesidad, definir el alcance y preparar una respuesta profesional para avanzar con claridad.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-pink-600 px-7 py-4 font-black shadow-[0_0_45px_rgba(236,0,140,0.55)] transition hover:-translate-y-1 hover:bg-pink-500"
            >
              Continuar por WhatsApp <MessageCircle size={18} />
            </a>

            <a
              href={siteConfig.calendarUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-black backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15"
            >
              Agendar reunión <CalendarCheck size={18} />
            </a>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-black backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15"
            >
              Volver al inicio <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
