import { ArrowRight, CalendarCheck } from "lucide-react";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildWhatsappUrl, businessLines, siteConfig, softwareServices } from "@/data/emeste";

export default function Home() {
  const quoteUrl = buildWhatsappUrl("Hola EMESTÉ, quiero cotizar software, web o automatización para mi negocio.");

  return (
    <main id="inicio" className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 bg-pink-950/30" />
      <SiteHeader />

      <section className="relative z-10 flex min-h-screen items-center px-6 pb-24 pt-32 text-center">
        <div className="mx-auto max-w-6xl">
          <p className="mx-auto mb-6 inline-flex rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-widest text-pink-100">
            Software · Web · Automatización · DJ · Mentorías
          </p>
          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            SOFTWARE, WEB Y AUTOMATIZACIÓN PARA HACER CRECER TU NEGOCIO
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300">
            EMESTÉ.CL desarrolla soluciones tecnológicas profesionales y evoluciona como ecosistema de software, música y mentorías creado por Emerson Gil.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={quoteUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-pink-600 px-8 py-4 font-black transition hover:bg-pink-500">
              Cotizar proyecto <ArrowRight size={18} />
            </a>
            <a href={siteConfig.calendarUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-8 py-4 font-black transition hover:bg-white/15">
              Asesoría gratis <CalendarCheck size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="ecosistema" className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black md:text-6xl">Ecosistema EMESTÉ</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {businessLines.map((line) => (
              <a key={line.title} href={line.href} className="rounded-3xl border border-white/10 bg-white/10 p-8 transition hover:border-pink-400">
                <p className="text-xs font-black uppercase tracking-widest text-pink-300">{line.eyebrow}</p>
                <h3 className="mt-4 text-3xl font-black">{line.title}</h3>
                <p className="mt-5 leading-relaxed text-zinc-300">{line.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black md:text-6xl">Servicios tecnológicos</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {softwareServices.map((service) => (
              <article key={service.title} className="rounded-3xl border border-white/10 bg-white/10 p-7">
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-4 leading-relaxed text-zinc-400">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
