"use client";

import { useState } from "react";
import { CheckCircle2, ExternalLink, Sparkles, Heart, GraduationCap, ArrowRight } from "lucide-react";

const instagramUrl = "https://www.instagram.com/emeste_studio_academy/";

export function StudioClient() {
  const [instagramOpened, setInstagramOpened] = useState(false);
  const [followConfirmed, setFollowConfirmed] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070407] text-white">
      <style>{`
        @keyframes studioFloat {
          0%,100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-5px) scale(1.018); }
        }
        @keyframes studioGlow {
          0%,100% { box-shadow: 0 0 22px rgba(255,62,141,.28), 0 0 0 0 rgba(255,62,141,.28); }
          50% { box-shadow: 0 0 48px rgba(255,62,141,.52), 0 0 0 8px rgba(255,62,141,0); }
        }
        @keyframes studioShine {
          0% { transform: translateX(-170%) skewX(-18deg); opacity:0; }
          18% { opacity:.85; }
          48%,100% { transform: translateX(220%) skewX(-18deg); opacity:0; }
        }
        .studio-attention { animation: studioFloat 2.15s ease-in-out infinite, studioGlow 2.15s ease-in-out infinite; }
        .studio-shine { animation: studioShine 2.7s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .studio-attention,.studio-shine { animation:none !important; }
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,57,145,0.18),transparent_30%),radial-gradient(circle_at_15%_65%,rgba(255,44,104,0.14),transparent_32%),radial-gradient(circle_at_85%_70%,rgba(173,30,94,0.18),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-8 sm:px-8 sm:py-12">
        <div className="mx-auto w-full max-w-4xl text-center">
          <div className="mx-auto mt-2 inline-flex max-w-full items-center gap-2 rounded-full border border-pink-300/25 bg-pink-500/10 px-4 py-2 text-[clamp(.66rem,2.8vw,.75rem)] font-extrabold uppercase tracking-[.12em] text-pink-200 sm:tracking-[.18em]">
            <Sparkles size={15} className="shrink-0" /> Acceso exclusivo desde EMESTÉ.CL
          </div>

          <h1 className="mx-auto mt-8 max-w-4xl break-words text-[clamp(2.4rem,12vw,5rem)] font-black leading-[.9] tracking-[-.05em]">
            EMESTÉ
            <span className="mt-3 block text-[clamp(1rem,5.2vw,1.65rem)] font-extrabold uppercase tracking-[.22em] text-pink-200 sm:tracking-[.34em]">
              Studio & Academy
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[clamp(.7rem,3vw,.85rem)] font-bold uppercase tracking-[.16em] text-zinc-400 sm:tracking-[.24em]">
            Estética · Belleza · Formación
          </p>

          <p className="mx-auto mt-7 max-w-2xl text-[clamp(.95rem,3.8vw,1.08rem)] leading-7 text-zinc-300">
            Antes de solicitar información o una orientación, sigue nuestro perfil oficial. Así podrás conocer resultados, servicios, novedades y formación de EMESTÉ Studio & Academy.
          </p>

          <div className="mx-auto mt-9 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              ["Paso 1", "Seguir Instagram", instagramOpened || followConfirmed],
              ["Paso 2", "Confirmar seguimiento", followConfirmed],
              ["Paso 3", "Acceder al beneficio", followConfirmed],
            ].map(([step, label, active]) => (
              <div key={String(step)} className={`min-w-0 rounded-2xl border p-4 text-left ${active ? "border-pink-300/35 bg-pink-500/10" : "border-white/10 bg-white/[0.055]"}`}>
                <span className="text-[clamp(.68rem,2.7vw,.75rem)] font-black uppercase tracking-[.1em] text-pink-300">{String(step)}</span>
                <p className="mt-2 break-words text-[clamp(.82rem,3.2vw,.9rem)] font-bold leading-5">{String(label)}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-[1.5rem] border border-white/10 bg-white/[0.065] p-4 text-left backdrop-blur-xl sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className={`rounded-2xl ${!followConfirmed ? "studio-attention" : ""}`}>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setInstagramOpened(true)}
                  className="group relative inline-flex min-h-16 w-full min-w-0 items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-rose-600 px-4 py-4 text-center text-[clamp(.74rem,3vw,.9rem)] font-black uppercase leading-5 tracking-[.04em] text-white transition hover:scale-[1.015] sm:px-6 sm:tracking-[.08em]"
                >
                  {!followConfirmed && <span className="studio-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent" />}
                  <ExternalLink size={20} className="relative z-10 shrink-0" />
                  <span className="relative z-10 min-w-0 break-words">1. Seguir @emeste_studio_academy</span>
                </a>
              </div>

              <button
                type="button"
                disabled={!instagramOpened}
                onClick={() => setFollowConfirmed(true)}
                className={`inline-flex min-h-16 min-w-0 items-center justify-center gap-2 rounded-2xl border px-4 py-4 text-center text-[clamp(.74rem,3vw,.9rem)] font-black uppercase leading-5 tracking-[.04em] transition sm:px-6 sm:tracking-[.08em] ${instagramOpened ? "border-white/20 bg-white/[0.1] text-white hover:-translate-y-1 hover:bg-white/[0.15]" : "cursor-not-allowed border-white/10 bg-white/[0.04] text-zinc-600"}`}
              >
                <CheckCircle2 size={20} className="shrink-0" />
                <span className="min-w-0 break-words">2. Ya sigo a EMESTÉ</span>
              </button>
            </div>

            {followConfirmed ? (
              <div className="mt-7 border-t border-white/10 pt-7">
                <div className="rounded-2xl border border-pink-300/20 bg-gradient-to-br from-pink-500/12 to-rose-500/5 p-5">
                  <p className="text-[clamp(.68rem,2.7vw,.75rem)] font-black uppercase tracking-[.12em] text-pink-300">Beneficio desbloqueado</p>
                  <h2 className="mt-2 text-[clamp(1.2rem,5vw,1.55rem)] font-black tracking-[-.03em]">Orientación inicial sin costo</h2>
                  <p className="mt-3 text-[clamp(.86rem,3.3vw,.96rem)] leading-6 text-zinc-300">
                    Cuéntanos qué te gustaría mejorar y te orientamos sobre el servicio o formación que mejor se adapta a ti antes de decidir.
                  </p>
                </div>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex min-h-16 w-full items-center justify-center gap-2 rounded-2xl border border-pink-300/25 bg-pink-500/10 px-5 py-4 text-center text-[clamp(.76rem,3vw,.9rem)] font-black uppercase tracking-[.04em] text-pink-100 transition hover:-translate-y-1 hover:bg-pink-500/15 sm:tracking-[.08em]"
                >
                  Solicitar orientación por Instagram <ArrowRight size={19} />
                </a>
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 px-4 py-5 text-center text-[clamp(.72rem,2.9vw,.84rem)] font-black uppercase tracking-[.04em] text-zinc-500 sm:tracking-[.08em]">
                Beneficio bloqueado · completa los pasos 1 y 2
              </div>
            )}
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-left">
              <Heart className="shrink-0 text-pink-300" size={22} />
              <div className="min-w-0">
                <p className="font-extrabold">Studio</p>
                <p className="text-sm leading-5 text-zinc-400">Belleza, estética y cuidado personalizado.</p>
              </div>
            </div>
            <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-left">
              <GraduationCap className="shrink-0 text-pink-300" size={22} />
              <div className="min-w-0">
                <p className="font-extrabold">Academy</p>
                <p className="text-sm leading-5 text-zinc-400">Formación y perfeccionamiento en belleza.</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mx-auto mt-10 w-full max-w-4xl border-t border-white/10 pt-6 text-center text-xs text-zinc-500">
          EMESTÉ Studio & Academy · emeste.cl/studio
        </footer>
      </section>
    </main>
  );
}
