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
  const whatsappUrl = buildWhatsappUrl("Hola EMESTÉ, quiero evaluar un proyecto de software, web o automatización para mi negocio.");

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <SiteHeader />

      <section className="relative z-10 px-6 pb-20 pt-36">
        <div className="glass-pro glow-3d mx-auto max-w-7xl rounded-[2rem] p-8 md:p-12">
          <p className="mb-5 inline-flex rounded-full border border-pink-500/30 bg-pink-500/15 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-pink-200">Soluciones a medida</p>
          <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">Software, web y automatización para hacer crecer tu negocio.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-zinc-200">Creamos soluciones digitales profesionales para vender más, ordenar procesos, automatizar tareas y escalar negocios con tecnología real. Cada proyecto se evalúa según necesidad, alcance e impacto esperado.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-pink-600 px-7 py-4 font-black shadow-[0_0_45px_rgba(236,0,140,0.55)] transition hover:-translate-y-1 hover:bg-pink-500">Solicitar evaluación <ArrowRight size={18} /></a>
            <a href={siteConfig.calendarUrl} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-black backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15">Agendar asesoría gratis</a>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {softwareServices.map((service) => (
            <article key={service.title} className="glass-pro glow-3d rounded-[2rem] p-8">
              <h2 className="text-2xl font-black">{service.title}</h2>
              <p className="mt-4 leading-relaxed text-zinc-300">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black md:text-5xl">Soluciones comerciales personalizadas</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-300">No publicamos precios fijos porque cada negocio requiere un alcance distinto. Primero entendemos el objetivo, luego diseñamos una propuesta técnica y comercial seria.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {commercialPackages.map((plan) => (
              <article key={plan.name} className="glass-pro glow-3d rounded-[2rem] p-7">
                <h3 className="text-2xl font-black">{plan.name}</h3>
                <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-pink-200">{plan.price}</p>
                <p className="mt-4 text-zinc-300">{plan.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                  {plan.items.map((item) => <li key={item} className="flex gap-2"><ShieldCheck className="mt-0.5 shrink-0 text-pink-400" size={16} /> {item}</li>)}
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
