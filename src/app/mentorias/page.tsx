import type { Metadata } from "next";
import { ArrowRight, HeartHandshake, PlayCircle, Sparkles } from "lucide-react";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildWhatsappUrl, siteConfig } from "@/data/emeste";

export const metadata: Metadata = {
  title: "EMESTÉ Mentorías | Crecimiento Personal",
  description: "Mentorías y contenido educativo de Emerson Gil sobre crecimiento personal, paz, respeto, disciplina, propósito y conciencia.",
};

const pillars = [
  "Paz interior y decisiones conscientes",
  "Respeto, amor, lealtad y solidaridad",
  "Disciplina, propósito y mentalidad positiva",
  "Familia, crecimiento diario y servicio al mundo",
];

export default function MentoriasPage() {
  const whatsappUrl = buildWhatsappUrl("Hola EMESTÉ, quiero conocer las mentorías y contenidos educativos.");

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <SiteHeader />

      <section className="relative z-10 px-6 pb-20 pt-36">
        <div className="glass-pro glow-3d mx-auto max-w-7xl rounded-[2rem] p-8 md:p-12">
          <p className="mb-5 inline-flex rounded-full border border-pink-500/30 bg-pink-500/15 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-pink-200">Crecimiento humano</p>
          <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">EMESTÉ Mentorías</h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-zinc-200">Un espacio para compartir enseñanzas sobre paz, respeto, disciplina, propósito y crecimiento personal. Contenido creado por Emerson Gil para ayudar a las personas a vivir mejor y avanzar con conciencia.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-pink-600 px-7 py-4 font-black shadow-[0_0_45px_rgba(236,0,140,0.55)] transition hover:-translate-y-1 hover:bg-pink-500">Solicitar información <ArrowRight size={18} /></a>
            <a href="/actualizaciones" className="rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-black backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15">Ver contenidos</a>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar) => (
            <article key={pillar} className="glass-pro glow-3d rounded-[2rem] p-8">
              <HeartHandshake className="mb-5 text-pink-300" size={42} />
              <p className="text-lg font-bold leading-relaxed text-zinc-100">{pillar}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <article className="glass-pro glow-3d rounded-[2rem] p-8">
            <HeartHandshake className="mb-5 text-pink-300" size={42} />
            <h2 className="text-3xl font-black">Valores</h2>
            <p className="mt-4 leading-relaxed text-zinc-300">Respeto, amor, lealtad, solidaridad y una vida tranquila con decisiones conscientes.</p>
          </article>
          <article className="glass-pro glow-3d rounded-[2rem] p-8">
            <PlayCircle className="mb-5 text-pink-300" size={42} />
            <h2 className="text-3xl font-black">Videos</h2>
            <p className="mt-4 leading-relaxed text-zinc-300">Preparado para el canal {siteConfig.youtubeName}, con mensajes y contenidos educativos.</p>
          </article>
          <article className="glass-pro glow-3d rounded-[2rem] p-8">
            <Sparkles className="mb-5 text-pink-300" size={42} />
            <h2 className="text-3xl font-black">Propósito</h2>
            <p className="mt-4 leading-relaxed text-zinc-300">Crear una comunidad positiva alrededor del aprendizaje, la familia y la mejora diaria.</p>
          </article>
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
