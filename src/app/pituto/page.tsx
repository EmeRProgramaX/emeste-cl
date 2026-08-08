import type { Metadata } from "next";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Instagram,
  Layers3,
  MessageCircle,
  Sparkles,
  Target,
} from "lucide-react";
import { buildWhatsappUrl } from "@/data/emeste";

export const metadata: Metadata = {
  title: "EMESTÉ × Pituto Club | Demo para tu empresa",
  description:
    "Soluciones empresariales, software escalable y automatización. Solicita una demo de EMESTÉ después de conocernos en Pituto Club.",
};

const instagramUrl = "https://www.instagram.com/emerson__gil/";

const capabilities = [
  {
    icon: Target,
    title: "Captar más clientes",
    description:
      "Mejoramos tu presencia digital y conectamos web, Instagram y WhatsApp para generar conversaciones comerciales reales.",
  },
  {
    icon: Bot,
    title: "Automatizar procesos",
    description:
      "Reducimos tareas manuales, tiempos perdidos y errores mediante automatización diseñada alrededor de tu operación.",
  },
  {
    icon: Layers3,
    title: "Software escalable",
    description:
      "Creamos sistemas para ventas, inventario, control, reportes y procesos internos adaptados a la realidad de tu empresa.",
  },
];

export default function PitutoClubPage() {
  const demoWhatsappUrl = buildWhatsappUrl(
    "Hola EMESTÉ 👋 Nos conocimos en Pituto Club. Quiero una DEMO para mi empresa."
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050305] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(236,0,140,0.22),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(160,10,32,0.28),transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.04),transparent_45%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-25" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 py-12 sm:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-5xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-pink-300/30 bg-pink-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-pink-200">
            <Sparkles size={15} /> EMESTÉ × Pituto Club
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.22em] text-zinc-400">
            Soluciones empresariales
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            ¿Tu empresa podría
            <span className="block bg-gradient-to-r from-pink-300 via-white to-red-300 bg-clip-text text-transparent">
              funcionar mejor?
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
            Analizamos cómo funciona tu negocio, detectamos dónde estás perdiendo tiempo, control o ventas y diseñamos una solución tecnológica aplicable a tu empresa.
          </p>

          <div className="mx-auto mt-9 flex max-w-3xl flex-wrap justify-center gap-3 text-sm font-bold text-zinc-200">
            {["Software escalable", "Automatización", "Ventas y clientes", "Control empresarial"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 backdrop-blur-xl">
                <CheckCircle2 size={15} className="text-pink-300" /> {item}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            <a
              href={demoWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-red-600 px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_0_50px_rgba(236,0,140,0.38)] transition hover:-translate-y-1 hover:scale-[1.01]"
            >
              Quiero una demo <MessageCircle size={21} />
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.08] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.13]"
            >
              Seguir @emerson__gil <Instagram size={21} />
            </a>
          </div>

          <p className="mt-4 text-xs leading-5 text-zinc-500">
            Si nos conocimos hoy, escríbenos ahora para que tu contacto no se pierda entre las conversaciones del evento.
          </p>
        </div>

        <div className="mx-auto mt-16 grid w-full max-w-5xl gap-4 md:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-[1.6rem] border border-white/10 bg-white/[0.065] p-6 text-left backdrop-blur-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-pink-300/20 bg-pink-500/10 text-pink-300">
                  <Icon size={22} />
                </div>
                <h2 className="mt-5 text-xl font-extrabold tracking-[-0.025em]">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 grid w-full max-w-5xl gap-4 rounded-[1.7rem] border border-white/10 bg-black/35 p-5 text-left backdrop-blur-xl sm:grid-cols-[1fr_auto] sm:items-center sm:p-7">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-pink-300">Siguiente paso</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.035em]">
              Cuéntanos qué hace tu empresa y qué quieres mejorar.
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Revisamos tu caso y te mostramos una propuesta o demo enfocada en un problema real de tu negocio.
            </p>
          </div>
          <a
            href={demoWhatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-pink-300/35 bg-pink-600/20 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-pink-600"
          >
            Solicitar demo <ArrowRight size={18} />
          </a>
        </div>

        <footer className="mx-auto mt-10 flex w-full max-w-5xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-zinc-500 sm:flex-row sm:text-left">
          <span>EMESTÉ · Software escalable y soluciones empresariales</span>
          <a href="https://www.emeste.cl" className="font-bold text-zinc-300 hover:text-white">
            emeste.cl
          </a>
        </footer>
      </section>
    </main>
  );
}
