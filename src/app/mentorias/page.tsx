import type { Metadata } from "next";
import { HeartHandshake, PlayCircle, Sparkles } from "lucide-react";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildWhatsappUrl, siteConfig } from "@/data/emeste";

export const metadata: Metadata = {
  title: "EMESTÉ Mentorías",
  description: "Mentorías y contenido educativo de Emerson Gil sobre crecimiento personal, propósito, respeto y disciplina.",
};

export default function MentoriasPage() {
  const whatsappUrl = buildWhatsappUrl("Hola EMESTÉ, quiero conocer las mentorías y contenidos educativos.");

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#ff006a33,transparent_38%)]" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
      <SiteHeader />

      <section className="relative z-10 px-6 pb-20 pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-pink-200">Crecimiento humano</p>
          <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">EMESTÉ Mentorías</h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-zinc-300">Un espacio para compartir enseñanzas sobre paz, respeto, disciplina, propósito y crecimiento personal. Contenido creado por Emerson Gil para avanzar con una mentalidad positiva.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-2xl bg-pink-600 px-7 py-4 font-black shadow-[0_0_45px_rgba(255,0,120,0.45)] transition hover:bg-pink-500">Solicitar información</a>
            <a href="/actualizaciones" className="rounded-2xl border border-white/10 bg-white/10 px-7 py-4 font-black transition hover:bg-white/15">Ver contenidos</a>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <article className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
            <HeartHandshake className="mb-5 text-pink-300" size={42} />
            <h2 className="text-3xl font-black">Valores</h2>
            <p className="mt-4 leading-relaxed text-zinc-300">Respeto, amor, lealtad, solidaridad y una vida tranquila con decisiones conscientes.</p>
          </article>
          <article className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
            <PlayCircle className="mb-5 text-pink-300" size={42} />
            <h2 className="text-3xl font-black">Videos</h2>
            <p className="mt-4 leading-relaxed text-zinc-300">Preparado para el canal {siteConfig.youtubeName}, con mensajes y contenidos educativos.</p>
          </article>
          <article className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
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
