import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  Clock,
  Code2,
  Gauge,
  Headphones,
  Layers3,
  MessageCircle,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildWhatsappUrl, commercialPackages, siteConfig } from "@/data/emeste";

const heroSeals = ["Revisión gratis", "Respuesta por WhatsApp", "Entrega rápida", "Desde $49.000"];

const services = [
  {
    icon: MessageCircle,
    title: "WhatsApp + Instagram",
    description:
      "Ordenamos tu bio, enlace, mensajes automáticos y respuestas rápidas para que tu negocio reciba más consultas.",
  },
  {
    icon: MonitorSmartphone,
    title: "Landing Express",
    description:
      "Creamos una página simple y profesional para enviar clientes desde Facebook o Instagram directo a tu WhatsApp.",
  },
  {
    icon: Target,
    title: "Captación de clientes",
    description:
      "Te ayudamos a mostrar una oferta clara, explicar tus servicios y guiar al cliente hacia una consulta real.",
  },
  {
    icon: Gauge,
    title: "Página profesional",
    description:
      "Diseño moderno, rápido y adaptable a celular para que tu negocio se vea confiable desde el primer clic.",
  },
  {
    icon: Code2,
    title: "Software y sistemas",
    description:
      "Si tu negocio necesita algo más grande, desarrollamos sistemas, POS, reservas, inventario y procesos internos.",
  },
  {
    icon: Headphones,
    title: "Soporte tecnológico",
    description:
      "Apoyo técnico, configuración, respaldos, correos, computadores, sistemas y mantención para negocios.",
  },
];

const caseIndicators = ["Sistema real entregado", "Cliente en operación", "Control de ventas", "Base para nuevos negocios"];

const processSteps = [
  "Me escribes por WhatsApp",
  "Reviso tu negocio",
  "Te digo qué conviene",
  "Definimos el plan",
  "Pagas reserva",
  "Entrego y ajustamos",
];

const clientTypes = [
  "Estética y belleza",
  "Barberías",
  "Restaurantes",
  "Servicios técnicos",
  "Tiendas y emprendedores",
  "Profesionales independientes",
];

export default function Home() {
  const mainWhatsappUrl = buildWhatsappUrl(
    "Hola EMESTÉ, vengo desde Facebook y quiero una revisión gratis para saber cómo conseguir más clientes por WhatsApp.",
  );
  const expressWhatsappUrl = buildWhatsappUrl(
    "Hola EMESTÉ, quiero el Pack WhatsApp + Instagram desde $49.000 CLP.",
  );
  const landingWhatsappUrl = buildWhatsappUrl(
    "Hola EMESTÉ, quiero una Landing Express para enviar clientes desde Facebook a WhatsApp.",
  );
  const caseUrl = buildWhatsappUrl(
    "Hola EMESTÉ, vi el caso real de software/POS y quiero una solución similar para mi negocio.",
  );
  const finalWhatsappUrl = buildWhatsappUrl(
    "Hola EMESTÉ, quiero que revisen mi negocio y me digan qué solución me conviene.",
  );

  return (
    <main id="inicio" className="relative min-h-screen overflow-hidden bg-[#030104] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(236,0,140,0.22),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(120,10,30,0.36),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_42%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />
      <SiteHeader />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 pb-20 pt-36 sm:px-6">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-pink-300/30 bg-pink-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-pink-200 lg:mx-0">
              <Sparkles size={16} /> Oferta para negocios locales
            </p>

            <h1 className="hero-retro-title mt-7 max-w-5xl text-[2.55rem] font-extrabold sm:text-6xl md:text-7xl lg:text-7xl">
              <span>Consigue más</span>
              <span className="accent">clientes por</span>
              <span className="accent">WhatsApp</span>
              <span>desde Facebook</span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
              En EMESTÉ revisamos tu negocio y te ayudamos a mejorar Instagram, WhatsApp y tu página web para que las personas entiendan rápido qué vendes y te escriban directo.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href={mainWhatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="emeste-button inline-flex items-center justify-center gap-2 rounded-2xl bg-pink-600 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-[0_0_40px_rgba(236,0,140,0.45)] transition hover:-translate-y-0.5 hover:bg-pink-500"
              >
                Revisar mi negocio gratis <MessageCircle size={18} />
              </a>
              <a
                href={expressWhatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Ver pack desde $49.000 <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
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

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-7">
            <div className="rounded-[1.5rem] border border-pink-300/20 bg-black/35 p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-pink-300">Diagnóstico rápido</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">Primero vemos qué necesitas. Después te vendo lo correcto.</h2>
              <p className="mt-5 leading-7 text-zinc-300">
                No necesitas pagar por algo grande si tu negocio solo requiere ordenar WhatsApp, mejorar Instagram o tener una landing simple.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  "¿Tu Instagram explica bien lo que vendes?",
                  "¿Tu WhatsApp responde y filtra clientes?",
                  "¿Tienes una página para enviar tráfico desde Facebook?",
                  "¿Tu negocio necesita un sistema o solo captar más consultas?",
                ].map((item) => (
                  <span key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-sm font-bold text-zinc-200">
                    <BadgeCheck size={18} className="mt-0.5 shrink-0 text-pink-300" /> {item}
                  </span>
                ))}
              </div>
              <a
                href={mainWhatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-red-600 px-6 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-[0_0_45px_rgba(236,0,140,0.45)] transition hover:-translate-y-1 hover:scale-[1.01]"
              >
                Hablar ahora por WhatsApp <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="relative z-10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-pink-300">Servicios</p>
            <h2 className="title-3d mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">Soluciones para captar clientes y vender mejor.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Creamos desde mejoras rápidas para WhatsApp hasta páginas y sistemas completos. La idea es partir por lo que genere retorno más rápido.
            </p>
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

      <section id="planes" className="relative z-10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-pink-300">Oferta directa</p>
            <h2 className="title-3d mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">Elige un punto de partida simple.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Si vienes desde Facebook o Marketplace, puedes partir con una revisión gratis y elegir el servicio que más sentido tenga para tu negocio.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {commercialPackages.map((plan) => (
              <article key={plan.name} className="flex flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.075] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-pink-300/50">
                <p className="text-2xl font-extrabold tracking-[-0.025em]">{plan.name}</p>
                <p className="mt-4 text-xl font-extrabold text-pink-200">{plan.price}</p>
                <p className="mt-4 min-h-24 leading-7 text-zinc-300">{plan.description}</p>
                <div className="mt-6 grid gap-3">
                  {plan.items.map((item) => (
                    <span key={item} className="flex items-center gap-2 text-sm font-bold text-zinc-200">
                      <Check size={16} className="text-pink-300" /> {item}
                    </span>
                  ))}
                </div>
                <a
                  href={plan.name.includes("Landing") ? landingWhatsappUrl : expressWhatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl border border-pink-300/40 bg-pink-600/20 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-pink-600"
                >
                  Consultar por WhatsApp <MessageCircle size={16} />
                </a>
              </article>
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
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-pink-300">Caso real entregado</p>
            <h2 className="title-3d mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">También desarrollamos software y POS.</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-zinc-300">
              EMESTÉ ya desarrolló una solución real para negocio, con control operativo, ventas, usuarios por rol y soporte. Si tu empresa necesita algo más que una página, también podemos construirlo.
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

      <section id="proceso" className="relative z-10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-pink-300">Proceso</p>
              <h2 className="title-3d mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">Simple, rápido y directo a WhatsApp.</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                El objetivo es no hacerte perder tiempo: revisamos tu negocio, definimos qué conviene y partimos por la solución que pueda generar resultados más rápido.
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
          <h2 className="title-3d mt-5 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">¿Quieres que revise tu negocio ahora?</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Escríbeme por WhatsApp. Te digo si te conviene partir con Instagram + WhatsApp, una landing express, una página pro o una solución más avanzada.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={finalWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-pink-600 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-pink-500"
            >
              Escribir por WhatsApp <MessageCircle size={18} />
            </a>
            <a
              href={siteConfig.calendarUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Agendar asesoría <CalendarCheck size={18} />
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
