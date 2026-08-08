"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Layers3,
  MessageCircle,
  MonitorSmartphone,
  Sparkles,
  Target,
} from "lucide-react";
import { buildWhatsappUrl } from "@/data/emeste";

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

const priorities = [
  "Conseguir más clientes",
  "Ordenar ventas y seguimiento",
  "Controlar inventario, caja o sucursales",
  "Automatizar tareas repetitivas",
  "Crear o mejorar un software / POS",
  "Mejorar web, WhatsApp o presencia digital",
  "Otro desafío empresarial",
];

export function PitutoClubClient() {
  const [instagramOpened, setInstagramOpened] = useState(false);
  const [followConfirmed, setFollowConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [business, setBusiness] = useState("");
  const [priority, setPriority] = useState("");
  const [challenge, setChallenge] = useState("");

  const formComplete =
    name.trim().length > 1 &&
    company.trim().length > 1 &&
    business.trim().length > 4 &&
    priority.length > 0;

  const diagnosisWhatsappUrl = buildWhatsappUrl(
    [
      "Hola EMESTÉ 👋 Vengo de Pituto Club y quiero coordinar mi Diagnóstico Ejecutivo.",
      "",
      `Nombre: ${name.trim()}`,
      `Empresa: ${company.trim()}`,
      `¿Qué hace la empresa?: ${business.trim()}`,
      `Principal prioridad: ${priority}`,
      challenge.trim() ? `Desafío actual: ${challenge.trim()}` : "",
      "",
      "Ya sigo a @emerson__gil en Instagram.",
      "Quiero coordinar una reunión para diagnosticar mi empresa y conocer qué solución podría aplicar EMESTÉ.",
    ]
      .filter(Boolean)
      .join("\n")
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050305] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(236,0,140,0.22),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(160,10,32,0.28),transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.04),transparent_45%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-25" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-5 py-10 sm:px-8 lg:py-16">
        <div className="mx-auto w-full max-w-5xl text-center">
          <Image
            src="/logo-emeste.png"
            alt="EMESTÉ"
            width={560}
            height={260}
            priority
            className="mx-auto h-auto w-52 sm:w-72"
          />

          <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-pink-300/30 bg-pink-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-pink-200">
            <Sparkles size={15} /> Beneficio exclusivo · Pituto Club
          </div>

          <h1 className="mt-7 text-4xl font-black tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Diagnostiquemos tu empresa
            <span className="block bg-gradient-to-r from-pink-300 via-white to-red-300 bg-clip-text text-transparent">
              antes de ofrecerte una solución
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
            Por conocernos en Pituto Club accedes a un <strong className="text-white">Diagnóstico Ejecutivo EMESTÉ sin costo</strong>. Revisamos tu negocio, identificamos oportunidades y, si existe un buen encaje, preparamos una demo o propuesta enfocada en tu realidad.
          </p>

          <div className="mx-auto mt-8 max-w-3xl rounded-[1.7rem] border border-pink-300/20 bg-gradient-to-br from-pink-500/12 to-red-500/5 p-5 text-left backdrop-blur-xl sm:p-7">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-pink-300">Tu beneficio Pituto Club</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                "Diagnóstico empresarial sin costo",
                "Mapa de oportunidades prioritarias",
                "Demo o propuesta personalizada si aplica",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-white/10 bg-black/25 p-4">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-pink-300" />
                  <span className="text-sm font-bold leading-6 text-zinc-100">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-9 grid max-w-4xl gap-3 sm:grid-cols-4">
            {[
              ["Paso 1", "Seguir @emerson__gil", instagramOpened || followConfirmed],
              ["Paso 2", "Confirmar seguimiento", followConfirmed],
              ["Paso 3", "Contarnos sobre tu empresa", followConfirmed],
              ["Paso 4", "Coordinar diagnóstico", followConfirmed && formComplete],
            ].map(([step, label, active]) => (
              <div
                key={String(step)}
                className={`rounded-2xl border p-4 text-left ${
                  active ? "border-pink-300/35 bg-pink-500/10" : "border-white/10 bg-white/[0.06]"
                }`}
              >
                <span className="text-xs font-black uppercase tracking-[0.12em] text-pink-300">{String(step)}</span>
                <p className="mt-2 text-sm font-bold leading-5">{String(label)}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-4xl rounded-[1.8rem] border border-white/10 bg-white/[0.065] p-5 text-left backdrop-blur-xl sm:p-7">
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setInstagramOpened(true)}
                className="inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-red-600 px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_0_45px_rgba(236,0,140,0.32)] transition hover:-translate-y-1"
              >
                <MonitorSmartphone size={21} /> 1. Seguir @emerson__gil
              </a>

              <button
                type="button"
                disabled={!instagramOpened}
                onClick={() => setFollowConfirmed(true)}
                className={`inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl border px-6 py-4 text-sm font-black uppercase tracking-[0.08em] transition ${
                  instagramOpened
                    ? "border-white/20 bg-white/[0.1] text-white hover:-translate-y-1 hover:bg-white/[0.15]"
                    : "cursor-not-allowed border-white/10 bg-white/[0.04] text-zinc-600"
                }`}
              >
                <CheckCircle2 size={21} /> 2. Ya sigo a EMESTÉ
              </button>
            </div>

            <p className="mt-3 text-xs leading-5 text-zinc-500">
              El acceso al beneficio se habilita después de pasar por Instagram y confirmar el seguimiento. Instagram no permite verificar automáticamente el follow desde una web externa.
            </p>

            {followConfirmed ? (
              <div className="mt-7 border-t border-white/10 pt-7">
                <div className="mb-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-pink-300">Paso 3 · Cuéntanos sobre tu empresa</p>
                  <h2 className="mt-2 text-2xl font-black tracking-[-0.035em]">Queremos entender el negocio antes de hablar de software.</h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">Completa estos datos breves. Al finalizar, WhatsApp abrirá con toda la información lista para coordinar la reunión.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-bold text-zinc-200">
                    Tu nombre
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Ej: Carlos Pérez"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-normal text-white outline-none placeholder:text-zinc-600 focus:border-pink-300/60"
                    />
                  </label>

                  <label className="text-sm font-bold text-zinc-200">
                    Nombre de la empresa
                    <input
                      value={company}
                      onChange={(event) => setCompany(event.target.value)}
                      placeholder="Ej: Constructora Norte SpA"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-normal text-white outline-none placeholder:text-zinc-600 focus:border-pink-300/60"
                    />
                  </label>
                </div>

                <label className="mt-4 block text-sm font-bold text-zinc-200">
                  ¿A qué se dedica tu empresa?
                  <textarea
                    value={business}
                    onChange={(event) => setBusiness(event.target.value)}
                    placeholder="Cuéntanos brevemente qué vende, produce o qué servicio entrega."
                    rows={3}
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-normal text-white outline-none placeholder:text-zinc-600 focus:border-pink-300/60"
                  />
                </label>

                <label className="mt-4 block text-sm font-bold text-zinc-200">
                  ¿Qué te gustaría mejorar primero?
                  <select
                    value={priority}
                    onChange={(event) => setPriority(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b090d] px-4 py-3 font-normal text-white outline-none focus:border-pink-300/60"
                  >
                    <option value="">Selecciona una opción</option>
                    {priorities.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </label>

                <label className="mt-4 block text-sm font-bold text-zinc-200">
                  ¿Cuál es hoy tu principal problema o desafío? <span className="font-normal text-zinc-500">(opcional)</span>
                  <textarea
                    value={challenge}
                    onChange={(event) => setChallenge(event.target.value)}
                    placeholder="Ej: perdemos tiempo haciendo reportes manuales, no tenemos control de inventario, necesitamos más clientes..."
                    rows={3}
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-normal text-white outline-none placeholder:text-zinc-600 focus:border-pink-300/60"
                  />
                </label>

                {formComplete ? (
                  <a
                    href={diagnosisWhatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-black transition hover:-translate-y-1 hover:bg-emerald-400"
                  >
                    <MessageCircle size={21} /> 4. Coordinar mi diagnóstico por WhatsApp
                  </a>
                ) : (
                  <div className="mt-6 inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-zinc-500">
                    <MonitorSmartphone size={20} /> Completa nombre, empresa, actividad y prioridad
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-6 inline-flex min-h-20 w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-zinc-500">
                <MonitorSmartphone size={20} /> Información empresarial bloqueada · completa los pasos 1 y 2
              </div>
            )}
          </div>

          <div className="mx-auto mt-9 flex max-w-3xl flex-wrap justify-center gap-3 text-sm font-bold text-zinc-200">
            {["Software escalable", "Automatización", "Ventas y clientes", "Control empresarial"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 backdrop-blur-xl">
                <CheckCircle2 size={15} className="text-pink-300" /> {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 grid w-full max-w-5xl gap-4 md:grid-cols-3">
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
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-pink-300">Qué ocurre después</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.035em]">Diagnóstico → oportunidad → solución → demo/propuesta.</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              No intentamos venderte un sistema genérico. Primero entendemos el problema y luego definimos qué tecnología realmente tiene sentido para tu empresa.
            </p>
          </div>
          <span className="inline-flex items-center justify-center gap-2 rounded-xl border border-pink-300/25 bg-pink-600/10 px-5 py-3 text-sm font-extrabold text-pink-100">
            Pituto Club <ArrowRight size={18} /> EMESTÉ
          </span>
        </div>

        <footer className="mx-auto mt-10 flex w-full max-w-5xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-zinc-500 sm:flex-row sm:text-left">
          <span>EMESTÉ · Software escalable y soluciones empresariales</span>
          <a href="https://www.emeste.cl" className="font-bold text-zinc-300 hover:text-white">emeste.cl</a>
        </footer>
      </section>
    </main>
  );
}
