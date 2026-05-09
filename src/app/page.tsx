"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, Globe, LayoutDashboard, Menu, ShieldCheck, Sparkles, Workflow } from "lucide-react";

const services = [
  { icon: Globe, title: "Desarrollo Web Premium", desc: "Landing pages y sitios web rápidos, modernos y preparados para captar clientes." },
  { icon: Workflow, title: "Automatización Inteligente", desc: "Automatizamos reservas, WhatsApp, formularios, reportes y procesos repetitivos." },
  { icon: LayoutDashboard, title: "Software Empresarial", desc: "Sistemas personalizados para ventas, inventario, gestión, paneles y control operativo." },
  { icon: Bot, title: "Integración con IA", desc: "Chatbots, asistentes inteligentes y soluciones IA para atención y productividad." },
];

export default function Home() {
  const [status, setStatus] = useState("");

  async function sendForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Enviando...");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("Mensaje enviado correctamente. Te contactaremos pronto.");
      form.reset();
    } else {
      setStatus("No se pudo enviar. Intenta nuevamente.");
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#ff006a33,transparent_35%)]" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo-emeste.png" alt="EMESTÉ" className="h-11 w-11 rounded-xl object-cover" />
            <div>
              <p className="text-sm font-black tracking-[0.24em]">EMESTÉ</p>
              <p className="text-xs text-zinc-500">Technologies</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            <a href="#servicios" className="hover:text-white">Servicios</a>
            <a href="#nosotros" className="hover:text-white">Nosotros</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </nav>

          <a href="#contacto" className="hidden rounded-xl bg-pink-600 px-5 py-3 text-sm font-bold shadow-[0_0_30px_rgba(255,0,120,0.35)] transition hover:bg-pink-500 md:block">
            Solicitar solución
          </a>

          <Menu className="md:hidden" />
        </div>
      </header>

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
        <motion.img
          src="/logo-emeste.png"
          alt="Logo oficial EMESTÉ"
          initial={{ opacity: 0, scale: 0.75, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mb-8 h-72 w-72 rounded-[2rem] object-cover shadow-[0_0_120px_rgba(255,0,120,0.45)]"
        />

        <p className="mb-5 rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-sm font-medium text-pink-200">
          Tecnología creada para crecer
        </p>

        <h1 className="text-5xl font-black tracking-tight md:text-7xl">EMESTÉ</h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          Desarrollo web, software, automatización e inteligencia artificial.
          Creamos soluciones tecnológicas serias, responsables y hechas con amor para impulsar empresas.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#contacto" className="flex items-center gap-2 rounded-2xl bg-pink-600 px-8 py-4 font-semibold shadow-[0_0_45px_rgba(255,0,120,0.45)] transition hover:bg-pink-500">
            Solicitar solución <ArrowRight size={18} />
          </a>
          <a href="#servicios" className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold transition hover:bg-white/10">
            Ver servicios
          </a>
        </div>
      </section>

      <section id="servicios" className="relative z-10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black md:text-5xl">Soluciones Inteligentes</h2>
            <p className="mt-4 text-lg text-zinc-400">Tecnología premium para negocios que quieren crecer, ordenarse y vender mejor.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl transition hover:border-pink-500/40">
                <service.icon className="mb-6 text-pink-500" size={42} />
                <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                <p className="leading-relaxed text-zinc-400">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="relative z-10 px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-10">
            <Sparkles className="mb-6 text-pink-500" size={44} />
            <h2 className="text-4xl font-black">Tecnología con propósito humano</h2>
            <p className="mt-6 leading-relaxed text-zinc-400">
              EMESTÉ nace para crear soluciones digitales que ayuden a empresas y personas a trabajar mejor, ahorrar tiempo y crecer.
            </p>
          </div>

          <div className="rounded-[2rem] border border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-white/[0.04] p-10">
            <ShieldCheck className="mb-6 text-pink-500" size={44} />
            <h3 className="text-3xl font-black">Compromiso real con cada cliente</h3>
            <p className="mt-6 leading-relaxed text-zinc-400">
              Trabajamos con responsabilidad, claridad y dedicación. Cada proyecto se construye con amor por el detalle.
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" className="relative z-10 px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-white/[0.04] p-10">
            <h2 className="text-3xl font-black md:text-5xl">Solicita una solución para tu negocio</h2>
            <p className="mt-5 text-zinc-400">
              Cuéntanos qué necesitas automatizar, vender o mejorar. EMESTÉ te contactará para crear una solución real.
            </p>
            <a href="https://wa.me/56982328639" target="_blank" className="mt-8 inline-block rounded-2xl bg-pink-600 px-7 py-4 font-bold shadow-[0_0_45px_rgba(255,0,120,0.45)] transition hover:bg-pink-500">
              WhatsApp directo
            </a>
          </div>

          <form onSubmit={sendForm} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
            <div className="grid gap-4">
              <input name="name" required placeholder="Nombre" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-pink-500" />
              <input name="email" required type="email" placeholder="Correo" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-pink-500" />
              <input name="phone" placeholder="Teléfono / WhatsApp" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-pink-500" />
              <select name="service" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-pink-500">
                <option>Desarrollo Web Premium</option>
                <option>Automatización Inteligente</option>
                <option>Software Empresarial</option>
                <option>Inteligencia Artificial</option>
              </select>
              <textarea name="message" required placeholder="Cuéntanos qué necesitas" rows={5} className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-pink-500" />
              <button className="rounded-2xl bg-white px-7 py-4 font-black text-black transition hover:bg-zinc-200">
                Enviar solicitud
              </button>
              {status && <p className="text-sm text-pink-200">{status}</p>}
            </div>
          </form>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-center text-sm text-zinc-500">
        <p>© 2026 EMESTÉ Technologies. Todos los derechos reservados.</p>
      </footer>

      <a href="https://wa.me/56982328639" target="_blank" className="fixed bottom-6 right-6 z-50 rounded-full bg-pink-600 px-5 py-4 font-bold shadow-[0_0_45px_rgba(255,0,120,0.55)] transition hover:bg-pink-500">
        WhatsApp
      </a>
    </main>
  );
}
