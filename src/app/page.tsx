import {
  ArrowRight,
  BadgeCheck,
  Check,
  Clock,
  Code2,
  Gauge,
  Headphones,
  Instagram,
  Layers3,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  buildWhatsappUrl,
  clientProblems,
  clientTypes,
  commercialPackages,
  processSteps,
  realCaseIndicators,
  recommendationCards,
  serviceCards,
  siteConfig,
} from "@/data/emeste";

const heroSeals = ["Revisión sin costo", "Respuesta por WhatsApp", "Diseño responsive", "Desde $49.000 CLP"];

const serviceIcons = {
  MessageCircle,
  MonitorSmartphone,
  Gauge,
  Code2,
  Headphones,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.domain,
  email: siteConfig.email,
  telephone: siteConfig.whatsappDisplay,
  founder: siteConfig.founder,
  areaServed: "Chile",
  sameAs: [siteConfig.instagramUrl],
  description:
    "EMESTÉ.CL crea páginas web, optimiza WhatsApp Business, desarrolla software/POS, automatiza procesos y entrega soporte tecnológico para negocios.",
  serviceType: [
    "Páginas web para empresas",
    "WhatsApp Business",
    "Landing pages",
    "Software a medida",
    "POS",
    "Automatización",
    "Soporte tecnológico",
  ],
};

export default function Home() {
  const mainWhatsappUrl = buildWhatsappUrl(
    "Hola EMESTÉ, quiero una revisión para mejorar mi negocio y conseguir más clientes por WhatsApp."
  );
  const servicesWhatsappUrl = buildWhatsappUrl(
    "Hola EMESTÉ, quiero ver qué servicio me conviene para mejorar mi presencia digital."
  );
  const caseUrl = buildWhatsappUrl(
    "Hola EMESTÉ, quiero evaluar una solución de software, POS o automatización para ordenar mi negocio."
  );
  const finalWhatsappUrl = buildWhatsappUrl(
    "Hola EMESTÉ, quiero que revises mi negocio sin costo y me recomiendes la mejor opción."
  );

  return (
    <main id="inicio" className="relative min-h-screen overflow-hidden bg-[#030104] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(236,0,140,0.22),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,23,68,0.22),transparent_28%),radial-gradient(circle_at_50%_86%,rgba(16,185,129,0.13),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.055),transparent_44%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      <SiteHeader />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 pb-20 pt-40 sm:px-6">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="text-center lg:text-left">
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-pink-300/30 bg-pink-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-pink-200 lg:mx-0">
              <Sparkles size={16} /> EMESTÉ.CL · Tecnología para negocios
            </p>

            <h1 className="hero-retro-title mt-7 max-w-5xl text-[2.35rem] font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
              <span>Consigue más clientes</span>
              <span className="accent">por WhatsApp</span>
              <span>con una presencia digital profesional</span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
              En <strong className="text-white">EMESTÉ.CL</strong> ayudamos a negocios, emprendedores y profesionales a vender más con páginas web, WhatsApp Business, automatización, software, POS y soporte tecnológico.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a href={mainWhatsappUrl} target="_blank" rel="noreferrer" className="emeste-button inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-[0_0_40px_rgba(16,185,129,0.42)] transition hover:-translate-y-0.5 hover:bg-emerald-400">
                Escribir por WhatsApp <MessageCircle size={18} />
              </a>
              <a href="#servicios" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15">
                Ver servicios <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {heroSeals.map((seal) => (
                <span key={seal} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-bold text-zinc-200 backdrop-blur-xl">
                  <Check size={14} className="text-emerald-300" /> {seal}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-7">
            <div className="rounded-[1.5rem] border border-pink-300/20 bg-black/35 p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-pink-300">Diagnóstico comercial</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">Primero entendemos tu negocio. Después elegimos la solución correcta.</h2>
              <p className="mt-5 leading-7 text-zinc-300">
                La idea es simple: no pagar por algo grande si hoy necesitas ordenar WhatsApp, mejorar Instagram, crear una landing o resolver un problema técnico específico.
              </p>
              <div className="mt-6 grid gap-3">
                {["Qué vendes", "Cómo te contactan", "Dónde se pierden clientes", "Qué solución conviene primero"].map((item) => (
                  <span key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-sm font-bold text-zinc-200">
                    <BadgeCheck size={18} className="mt-0.5 shrink-0 text-pink-300" /> {item}
                  </span>
                ))}
              </div>
              <a href={servicesWhatsappUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-pink-600 to-red-600 px-6 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-[0_0_45px_rgba(236,0,140,0.42)] transition hover:-translate-y-1 hover:scale-[1.01]">
                Quiero que revises mi negocio <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="problemas" className="relative z-10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-pink-300">Problemas frecuentes</p>
              <h2 className="title-3d mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">Cuando el negocio se ve desordenado, el cliente duda.</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                La web está pensada para visitantes que llegan desde Facebook, Marketplace, Instagram o recomendaciones y necesitan entender rápido cómo contactarte.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {clientProblems.map((problem) => (
                <div key={problem} className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 font-bold text-zinc-100 backdrop-blur-xl">
                  <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-pink-600/20 text-pink-200">!</span>
                  <p>{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="relative z-10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-pink-300">Servicios principales</p>
            <h2 className="title-3d mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">Soluciones claras para vender mejor y trabajar más ordenado.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Desde una optimización rápida de WhatsApp hasta una web profesional, software/POS o soporte técnico para mantener tu operación funcionando.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {serviceCards.map((service) => {
              const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
              return (
                <article key={service.title} className="group rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-6 shadow-xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:border-pink-300/50 hover:bg-white/[0.1]">
                  <Icon className="text-pink-300" size={30} />
                  <h3 className="mt-5 text-xl font-extrabold tracking-[-0.025em]">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="planes" className="relative z-10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-pink-300">Planes y precios</p>
            <h2 className="title-3d mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">Elige un punto de partida simple.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Precios visibles para decidir rápido. Los proyectos de software, POS y automatización se cotizan según alcance real.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {commercialPackages.map((plan) => (
              <article key={plan.name} className={`flex flex-col rounded-[1.5rem] border p-6 backdrop-blur-xl transition hover:-translate-y-1 ${plan.featured ? "border-pink-300/50 bg-pink-600/15 shadow-[0_0_55px_rgba(236,0,140,0.24)]" : "border-white/10 bg-white/[0.075]"}`}>
                {plan.featured ? <p className="mb-4 inline-flex w-fit rounded-full bg-pink-500/25 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-pink-100">Recomendado</p> : null}
                <p className="text-2xl font-extrabold tracking-[-0.025em]">{plan.name}</p>
                <p className="mt-4 text-xl font-extrabold text-pink-200">{plan.price}</p>
                <p className="mt-4 min-h-28 text-sm leading-7 text-zinc-300">{plan.description}</p>
                <div className="mt-6 grid gap-3">
                  {plan.items.map((item) => (
                    <span key={item} className="flex items-center gap-2 text-sm font-bold text-zinc-200">
                      <Check size={16} className="text-emerald-300" /> {item}
                    </span>
                  ))}
                </div>
                <a href={buildWhatsappUrl(plan.message)} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-pink-300/40 bg-pink-600/20 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-pink-600">
                  Consultar <MessageCircle size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="recomendador" className="relative z-10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.1] via-pink-950/20 to-black/45 p-6 shadow-2xl shadow-black/35 backdrop-blur-2xl md:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-pink-300">¿No sabes qué necesitas?</p>
            <h2 className="title-3d mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">Toca la opción que más se parece a tu caso.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Cada botón abre WhatsApp con un mensaje preparado para revisar tu situación sin perder tiempo.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {recommendationCards.map((card) => (
              <a key={card.need} href={buildWhatsappUrl(card.message)} target="_blank" rel="noreferrer" className="group rounded-[1.5rem] border border-white/10 bg-black/35 p-5 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.08]">
                <Target className="text-emerald-300" size={28} />
                <p className="mt-5 text-lg font-extrabold">{card.need}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-300">Recomendado: <strong className="text-white">{card.recommended}</strong></p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-pink-200">Abrir WhatsApp <ArrowRight size={14} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.1] via-pink-950/20 to-black/40 p-6 shadow-2xl shadow-black/35 backdrop-blur-2xl md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-pink-300">Ideal para</p>
            <h2 className="title-3d mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">Negocios que necesitan consultas ahora.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {clientTypes.map((type) => (
              <span key={type} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-bold text-zinc-100">
                <Check size={18} className="text-pink-300" /> {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="caso-real" className="relative z-10 px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.1] via-pink-950/20 to-black/40 p-6 shadow-2xl shadow-black/35 backdrop-blur-2xl md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-pink-300">Caso real</p>
            <h2 className="title-3d mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">EMESTÉ.CL también desarrolla software/POS real para negocios.</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-zinc-300">
              EMESTÉ.CL ya desarrolló un sistema real para operación de negocio, con control de ventas, caja, usuarios por rol, trazabilidad operativa y soporte. Cuando una página web no es suficiente, también podemos construir la herramienta interna.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {realCaseIndicators.map((indicator) => (
                <span key={indicator} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-bold text-zinc-100">
                  <BadgeCheck size={18} className="text-pink-300" /> {indicator}
                </span>
              ))}
            </div>
            <a href={caseUrl} target="_blank" rel="noreferrer" className="emeste-button mt-8 inline-flex items-center justify-center gap-2 rounded-2xl border border-pink-300/40 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-red-600 px-6 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-[0_0_45px_rgba(236,0,140,0.45)] transition hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_70px_rgba(236,0,140,0.75)]">
              Quiero una solución similar <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="proceso" className="relative z-10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-pink-300">Proceso</p>
              <h2 className="title-3d mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">Simple, ordenado y directo a WhatsApp.</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                La prioridad es venderte lo correcto según tu etapa actual: primero diagnóstico, después alcance, reserva, entrega y ajustes.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-pink-600/20 text-sm font-extrabold text-pink-100">{index + 1}</span>
                    <span className="font-extrabold">{step.title}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="relative z-10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-pink-600/20 via-white/[0.08] to-red-950/25 p-6 text-center shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-10">
          <Sparkles className="mx-auto text-pink-200" size={34} />
          <h2 className="title-3d mt-5 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">Escríbeme por WhatsApp y revisamos tu negocio sin costo.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Te digo si conviene partir por WhatsApp + Instagram, una Landing Express, una Web Profesional, software/POS, automatización o soporte tecnológico.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={finalWhatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-emerald-400">
              Escribir por WhatsApp <MessageCircle size={18} />
            </a>
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-white/15">
              Enviar correo <Mail size={18} />
            </a>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-pink-300/30 bg-pink-600/15 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-pink-600/25">
              Instagram <Instagram size={18} />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-bold text-zinc-300">
            <span className="inline-flex items-center gap-2"><Clock size={16} className="text-pink-300" /> Respuesta rápida</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-pink-300" /> Revisión honesta</span>
            <span className="inline-flex items-center gap-2"><Layers3 size={16} className="text-pink-300" /> Solución según necesidad</span>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
