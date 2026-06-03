import type { Metadata } from "next";
import { ArrowRight, CalendarCheck, Sparkles } from "lucide-react";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildWhatsappUrl, siteConfig } from "@/data/emeste";

export const metadata: Metadata = {
  title: "Press Kit EMESTÉ DJ",
  description: "Press kit oficial de EMESTÉ DJ con biografía, booking, material artístico y contacto profesional.",
};

const sections = [
  "Biografía artística profesional",
  "Booking para eventos privados y empresas",
  "Material preparado para fotos, videos y sesiones",
  "Contacto directo para contratación",
];

export default function PresskitPage() {
  const bookingUrl = buildWhatsappUrl("Hola EMESTÉ, quiero solicitar el press kit y disponibilidad de EMESTÉ DJ.");

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <SiteHeader />

      <section className="relative z-10 px-6 pb-20 pt-36">
        <div className="glass-pro glow-3d mx-auto max-w-7xl rounded-[2rem] p-8 md:p-12">
          <p className="mb-5 inline-flex rounded-full border border-pink-500/30 bg-pink-500/15 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-pink-200">Material artístico</p>
          <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">Press Kit EMESTÉ DJ</h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-zinc-200">Página preparada para centralizar el material profesional de EMESTÉ DJ: biografía, fotos, videos, sesiones, ficha técnica y contacto de booking.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-pink-600 px-7 py-4 font-black shadow-[0_0_45px_rgba(236,0,140,0.55)] transition hover:-translate-y-1 hover:bg-pink-500">Solicitar press kit <ArrowRight size={18} /></a>
            <a href={siteConfig.calendarUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-black backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15">Agendar booking <CalendarCheck size={18} /></a>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {sections.map((item) => (
            <article key={item} className="glass-pro glow-3d rounded-[2rem] p-8">
              <Sparkles className="mb-5 text-pink-300" size={42} />
              <p className="text-lg font-bold leading-relaxed text-zinc-100">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
