import type { Metadata } from "next";
import { CalendarCheck, Mail, MessageCircle } from "lucide-react";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildWhatsappUrl, siteConfig } from "@/data/emeste";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta a EMESTÉ.CL para cotizar software, páginas web, automatizaciones, booking DJ o mentorías.",
};

export default function ContactoPage() {
  const whatsappUrl = buildWhatsappUrl("Hola EMESTÉ, quiero contactar para cotizar o pedir información.");

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#ff006a33,transparent_38%)]" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
      <SiteHeader />

      <section className="relative z-10 px-6 pb-20 pt-36">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-5 inline-flex rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-pink-200">Contacto directo</p>
          <h1 className="mx-auto max-w-5xl text-5xl font-black leading-tight md:text-7xl">Hablemos de tu próximo proyecto.</h1>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-zinc-300">Cotiza software, páginas web, automatizaciones, booking DJ o mentorías. EMESTÉ.CL responde con enfoque profesional y soluciones reales.</p>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-xl transition hover:-translate-y-1 hover:border-pink-400/50">
            <MessageCircle className="mx-auto mb-5 text-pink-300" size={44} />
            <h2 className="text-2xl font-black">WhatsApp</h2>
            <p className="mt-3 text-zinc-300">{siteConfig.whatsappDisplay}</p>
          </a>
          <a href={siteConfig.calendarUrl} target="_blank" rel="noreferrer" className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-xl transition hover:-translate-y-1 hover:border-pink-400/50">
            <CalendarCheck className="mx-auto mb-5 text-pink-300" size={44} />
            <h2 className="text-2xl font-black">Agenda gratis</h2>
            <p className="mt-3 text-zinc-300">Reserva una reunión de diagnóstico.</p>
          </a>
          <a href={`mailto:${siteConfig.email}`} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-xl transition hover:-translate-y-1 hover:border-pink-400/50">
            <Mail className="mx-auto mb-5 text-pink-300" size={44} />
            <h2 className="text-2xl font-black">Correo</h2>
            <p className="mt-3 text-zinc-300">{siteConfig.email}</p>
          </a>
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
