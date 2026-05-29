import type { Metadata } from "next";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildWhatsappUrl, commercialPackages, siteConfig, softwareServices } from "@/data/emeste";

export const metadata: Metadata = {
  title: "Software, Web y Automatización",
  description: "Desarrollo web premium, software a medida, automatizaciones, POS, ERP e inteligencia artificial para negocios en Chile.",
};

export default function SoftwarePage() {
  const whatsappUrl = buildWhatsappUrl("Hola EMESTÉ, quiero cotizar software, página web o automatización para mi negocio.");

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#ff006a33,transparent_38%)]" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
      <SiteHeader />

      <section className="relative z-10 px-6 pb-20 pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-pink-200">Línea comercial principal</p>
          <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">Software, web y automatización para hacer crecer tu negocio.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-zinc-300">Creamos soluciones digitales profesionales para vender más, ordenar procesos, automatizar tareas y escalar negocios con tecnología real.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-pink-600 px-7 py-4 font-black shadow-[0_0_45px_rgba(255,0,120,0.45)] transition hover:bg-pink-500">Cotizar ahora <ArrowRight size={18} /></a>
            <a href={siteConfig.calendarUrl} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/10 px-7 py-4 font-black transition hover:bg-white/15">Agendar asesoría gratis</a>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {softwareServices.map((service) => (
            <article key={service.title} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-black">{service.title}</h2>
              <p className="mt-4 leading-relaxed text-zinc-400">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black md:text-5xl">Planes comerciales claros</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {commercialPackages.map((plan) => (
              <article key={plan.name} className="rounded-[2rem] border border-white/10 bg-black/45 p-7 backdrop-blur-xl">
                <h3 className="text-2xl font-black">{plan.name}</h3>
                <p className="mt-3 text-xl font-black text-pink-200">{plan.price}</p>
                <p className="mt-4 text-zinc-400">{plan.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                  {plan.items.map((item) => <li key={item} className="flex gap-2"><ShieldCheck className="mt-0.5 text-pink-400" size={16} /> {item}</li>)}
                </ul>
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
