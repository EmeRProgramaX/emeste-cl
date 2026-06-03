import type { Metadata } from "next";
import { ArrowRight, Newspaper, Sparkles } from "lucide-react";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { latestUpdates } from "@/data/emeste";

export const metadata: Metadata = {
  title: "Actualizaciones",
  description: "Novedades de EMESTÉ.CL: software, DJ, mentorías, videos, lanzamientos y evolución de marca.",
};

export default function ActualizacionesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <SiteHeader />

      <section className="relative z-10 px-6 pb-20 pt-36">
        <div className="glass-pro glow-3d mx-auto max-w-7xl rounded-[2rem] p-8 md:p-12">
          <p className="mb-5 inline-flex rounded-full border border-pink-500/30 bg-pink-500/15 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-pink-200">Marca viva</p>
          <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">Actualizaciones EMESTÉ</h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-zinc-200">Espacio para publicar lanzamientos, videos, noticias, sesiones DJ, contenidos educativos y avances del ecosistema EMESTÉ.CL.</p>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {latestUpdates.map((item) => (
            <a key={item.title} href={item.href} className="glass-pro glow-3d rounded-[2rem] p-8">
              <Newspaper className="mb-5 text-pink-300" size={42} />
              <p className="text-xs font-black uppercase tracking-[0.18em] text-pink-300">{item.tag}</p>
              <h2 className="mt-4 text-2xl font-black">{item.title}</h2>
              <p className="mt-4 leading-relaxed text-zinc-300">{item.description}</p>
              <span className="mt-7 inline-flex items-center gap-2 font-black text-pink-200">Abrir <ArrowRight size={16} /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="glass-pro mx-auto max-w-7xl rounded-[2rem] p-8 text-center md:p-12">
          <Sparkles className="mx-auto mb-5 text-pink-300" size={44} />
          <h2 className="text-4xl font-black md:text-5xl">Preparado para contenido en tiempo real</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-zinc-300">Esta sección queda lista para evolucionar hacia noticias, videos, sesiones DJ, reflexiones, lanzamientos de software y panel administrativo.</p>
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
