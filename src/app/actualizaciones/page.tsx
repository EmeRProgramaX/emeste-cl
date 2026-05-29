import type { Metadata } from "next";
import { ArrowRight, Newspaper } from "lucide-react";
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
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#ff006a33,transparent_38%)]" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
      <SiteHeader />

      <section className="relative z-10 px-6 pb-20 pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-pink-200">Marca viva</p>
          <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">Actualizaciones EMESTÉ</h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-zinc-300">Espacio para publicar lanzamientos, videos, noticias, sesiones DJ, contenidos educativos y avances del ecosistema EMESTÉ.CL.</p>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {latestUpdates.map((item) => (
            <a key={item.title} href={item.href} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-pink-400/50">
              <Newspaper className="mb-5 text-pink-300" size={42} />
              <p className="text-xs font-black uppercase tracking-[0.18em] text-pink-300">{item.tag}</p>
              <h2 className="mt-4 text-2xl font-black">{item.title}</h2>
              <p className="mt-4 leading-relaxed text-zinc-400">{item.description}</p>
              <span className="mt-7 inline-flex items-center gap-2 font-black text-pink-200">Abrir <ArrowRight size={16} /></span>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
