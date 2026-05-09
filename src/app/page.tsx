"use client";

import { Menu } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#ff006a33,transparent_35%)]" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo-emeste.png" alt="EMESTÉ" className="h-12 w-12 rounded-xl object-cover" />
            <div>
              <p className="text-lg font-black tracking-[0.28em]">EMESTÉ</p>
              <p className="text-sm text-zinc-500">Technologies</p>
            </div>
          </a>

          <nav className="hidden items-center gap-12 text-base text-zinc-300 md:flex">
            <a href="#servicios" className="hover:text-white">Servicios</a>
            <a href="#nosotros" className="hover:text-white">Nosotros</a>
            <a href="https://calendar.app.google/KRBdfycwBGAwB3gT9" target="_blank" className="hover:text-white">Contacto</a>
          </nav>

          <a
            href="https://calendar.app.google/KRBdfycwBGAwB3gT9"
            target="_blank"
            className="hidden rounded-2xl bg-pink-600 px-7 py-4 text-base font-bold shadow-[0_0_45px_rgba(255,0,120,0.45)] transition hover:bg-pink-500 md:block"
          >
            Agendar reunión
          </a>

          <Menu className="md:hidden" />
        </div>
      </header>

      <section className="relative z-10 flex min-h-screen items-start justify-center px-6 pt-40 text-center">
        <div className="w-full max-w-5xl rounded-[2rem] border border-pink-500/30 bg-gradient-to-br from-pink-500/10 to-white/[0.03] p-12 shadow-[0_0_100px_rgba(255,0,120,0.22)]">
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Agenda una reunión con EMESTÉ
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Reserva una reunión para analizar tu negocio, tus necesidades y crear
            una solución tecnológica real.
          </p>

          <a
            href="https://calendar.app.google/KRBdfycwBGAwB3gT9"
            target="_blank"
            className="mt-12 inline-block rounded-2xl bg-white px-10 py-5 text-lg font-black text-black shadow-[0_0_45px_rgba(255,255,255,0.18)] transition hover:bg-zinc-200"
          >
            Agendar reunión
          </a>
        </div>
      </section>

      <a
        href="https://wa.me/56982328639"
        target="_blank"
        className="fixed bottom-8 right-8 z-50 rounded-full bg-pink-600 px-7 py-5 font-bold shadow-[0_0_55px_rgba(255,0,120,0.65)] transition hover:bg-pink-500"
      >
        WhatsApp
      </a>
    </main>
  );
}
