import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  CircleDollarSign,
  Code2,
  Gauge,
  Headphones,
  Layers3,
  MessageCircle,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildWhatsappUrl, commercialPackages, siteConfig } from "@/data/emeste";

const heroSeals = ["Responsive", "WhatsApp + Instagram", "SEO base", "Publicación"];

const services = [
  {
    icon: MonitorSmartphone,
    title: "Páginas web profesionales",
    description:
      "Sitios modernos, rápidos y responsivos para que tu negocio se vea serio, confiable y preparado para recibir clientes.",
  },
  {
    icon: Gauge,
    title: "Landing pages de venta",
    description:
      "Páginas enfocadas en conversión con WhatsApp, Instagram, formulario, agenda y una oferta clara para captar contactos.",
  },
  {
    icon: Code2,
    title: "Software a medida",
    description:
      "Sistemas para ventas, inventario, reservas, reportes, clientes, paneles administrativos y operación diaria.",
  },
  {
    icon: Workflow,
    title: "Automatización inteligente",
    description:
      "Flujos conectados con formularios, correos, WhatsApp, agenda, reportes y tareas repetitivas para ahorrar tiempo.",
  },
  {
    icon: CircleDollarSign,
    title: "POS y sistemas de venta",
    description:
      "Soluciones para caja, comandas, pedidos, ventas, control operativo y trazabilidad para negocios y restaurantes.",
  },
  {
    icon: Headphones,
    title: "Soporte informático",
    description:
      "Configuración, instalación, respaldo, mantención, seguridad básica y asistencia técnica para operar sin interrupciones.",
  },
];

const caseIndicators = ["Sistema real entregado", "Cliente satisfecho", "Flujo comercial ordenado", "Base para escalar"];

const processSteps = ["Diagnóstico", "Propuesta clara", "Diseño UI/UX", "Desarrollo", "Revisión", "Publicación", "Soporte"];

export default function Home() {
  const quoteUrl = buildWhatsappUrl(
    "Hola EMESTÉ, quiero cotizar una página web, software o automatización para mi negocio.",
  );
  const caseUrl = buildWhatsappUrl(
    "Hola EMESTÉ, vi el caso real de software de ventas y quiero una solución similar para mi negocio.",
  );
  const finalWhatsappUrl = buildWhatsappUrl(
    "Hola EMESTÉ, quiero revisar qué solución tecnológica conviene para mi negocio.",
  );

  return (
    <main id="inicio" className="relative min-h-screen overflow-hidden bg-[#030104] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(236,0,140,0.22),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(120,10,30,0.36),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_42%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />
      <SiteHeader />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 pb-20 pt-36 sm:px-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
          <h1 className="hero-retro-title max-w-5xl text-[2.6rem] font-extrabold sm:text-6xl md:text-7xl lg:text-8xl">
            <span>Software, web y</span>
            <span>automatización para</span>
            <span className="accent">hacer crecer</span>
            <span className="accent">tu negocio</span>
          </h1>

          <p className="mx-auto mt-9 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
            EMESTÉ.CL crea páginas web, landing pages, sistemas y automatizaciones con diseño profesional,
            enfoque comercial y desarrollo a medida para empresas, emprendedores y profesionales en Chile.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={quoteUrl}
              target="_blank"
              rel="noreferrer"
              className="emeste-button inline-flex items-center justify-center gap-2 rounded-2xl bg-pink-600 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-[0_0_40px_rgba(236,0,140,0.45)] transition hover:-translate-y-0.5 hover:bg-pink-500"
            >
              Cotizar mi proyecto <ArrowRight size={18} />
            </a>
            <a
              href={siteConfig.calendarUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Asesoría gratis <CalendarCheck size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {heroSeals.map((seal) => (
              <span
                key={seal}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-bold text-zinc-200 backdrop-blur-xl"
              >
                <Check size={14} className="text-pink-300" /> {seal}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="relative z-10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-pink-300">Servicios</p>
            <h2 className="title-3d mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">Soluciones tecnológicas para vender, operar y escalar.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-6 shadow-xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:border-pink-300/50 hover:bg-white/[0.1]"
                >
                  <Icon className="text-pink-300" size={30} />
                  <h3 className="mt-5 text-xl font-extrabold tracking-[-0.025em]">{service.title}</h3>
                  <p className="mt-4 leading-7 text-zinc-300">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="caso-real" className="relative z-10 px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.1] via-pink-950/20 to-black/40 p-6 shadow-2xl shadow-black/35 backdrop-blur-2xl md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-pink-300">Caso real entregado</p>
            <h2 className="title-3d mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">Software de ventas para cliente real</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-zinc-300">
              EMESTÉ.CL ya desarrolló una solución personalizada para un cliente que necesitaba ordenar su proceso
              comercial. El resultado fue un sistema funcional, claro y adaptado a su forma de trabajo.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {caseIndicators.map((indicator) => (
                <span key={indicator} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-bold text-zinc-100">
                  <BadgeCheck size={18} className="text-pink-300" /> {indicator}
                </span>
              ))}
            </div>
            <a
              href={caseUrl}
              target="_blank"
              rel="noreferrer"
              className="emeste-button mt-8 inline-flex items-center justify-center gap-2 rounded-2xl border border-pink-300/40 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-red-600 px-6 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-[0_0_45px_rgba(236,0,140,0.45)] transition hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_70px_rgba(236,0,140,0.75)]"
            >
              Quiero una solución similar <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="planes" className="relative z-10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-pink-300">Planes</p>
            <h2 className="title-3d mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">Puntos de partida claros para cotizar con orden.</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {commercialPackages.map((plan) => (
              <article key={plan.name} className="rounded-[1.5rem] border border-white/10 bg-white/[0.075] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-pink-300/50">
                <p className="text-2xl font-extrabold tracking-[-0.025em]">{plan.name}</p>
                <p className="mt-4 text-xl font-extrabold text-pink-200">{plan.price}</p>
                <p className="mt-4 min-h-20 leading-7 text-zinc-300">{plan.description}</p>
                <div className="mt-6 grid gap-3">
                  {plan.items.map((item) => (
                    <span key={item} className="flex items-center gap-2 text-sm font-bold text-zinc-200">
                      <Check size={16} className="text-pink-300" /> {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="relative z-10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-pink-300">Proceso</p>
              <h2 className="title-3d mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">Proceso profesional, claro y protegido</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                Trabajamos por etapas, con alcance definido, propuesta formal y pagos ordenados para que el proyecto
                avance con seguridad.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-pink-600/20 text-sm font-extrabold text-pink-100">
                    {index + 1}
                  </span>
                  <span className="font-extrabold">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="relative z-10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-pink-600/20 via-white/[0.08] to-red-950/25 p-6 text-center shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-10">
          <Sparkles className="mx-auto text-pink-200" size={34} />
          <h2 className="title-3d mt-5 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">Tu negocio puede verse, vender y funcionar mejor.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Agenda una asesoría gratuita y revisamos qué solución te conviene: página web, landing, software,
            automatización o sistema interno.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={siteConfig.calendarUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-pink-600 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-pink-500"
            >
              Agendar asesoría gratis <CalendarCheck size={18} />
            </a>
            <a
              href={finalWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Hablar por WhatsApp <MessageCircle size={18} />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-bold text-zinc-300">
            <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-pink-300" /> Propuesta formal</span>
            <span className="inline-flex items-center gap-2"><Layers3 size={16} className="text-pink-300" /> Alcance definido</span>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
