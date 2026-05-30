import type { Metadata } from "next";
import { CalendarCheck, Mail, MessageCircle, Sparkles } from "lucide-react";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildWhatsappUrl, siteConfig } from "@/data/emeste";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta a EMESTÉ.CL para software, páginas web, automatizaciones, booking DJ o mentorías.",
};

const contactOptions = [
  "Software, web y automatización",
  "Sistemas a medida para negocios",
  "Booking EMESTÉ DJ",
  "Mentorías y contenido educativo",
];

export default function ContactoPage() {
  const whatsappUrl = buildWhatsappUrl("Hola EMESTÉ, quiero conversar sobre un proyecto o servicio.");

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <SiteHeader />

      <section className="relative z-10 px-6 pb-20 pt-36">
        <div className="glass-pro glow-3d mx-auto max-w-7xl rounded-[2rem] p-8 text-center md:p-12">
          <p className="mb-5 inline-flex rounded-full border border-pink-500/30 bg-pink-500/15 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-pink-200">Contacto directo</p>
          <h1 className="mx-auto max-w-5xl text-5xl font-black leading-tight md:text-7xl">Hablemos de tu próximo proyecto.</h1>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-zinc-200">EMESTÉ.CL responde con enfoque profesional, soluciones reales y atención directa para definir la mejor ruta según tu necesidad.</p>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="glass-pro glow-3d rounded-[2rem] p-8 text-center">
            <MessageCircle className="mx-auto mb-5 text-pink-300" size={44} />
            <h2 className="text-2xl font-black">WhatsApp</h2>
            <p className="mt-3 text-zinc-300">{siteConfig.whatsappDisplay}</p>
          </a>
          <a href={siteConfig.calendarUrl} target="_blank" rel="noreferrer" className="glass-pro glow-3d rounded-[2rem] p-8 text-center">
            <CalendarCheck className="mx-auto mb-5 text-pink-300" size={44} />
            <h2 className="text-2xl font-black">Agenda gratis</h2>
            <p className="mt-3 text-zinc-300">Reserva una reunión de diagnóstico.</p>
          </a>
          <a href={`mailto:${siteConfig.email}`} className="glass-pro glow-3d rounded-[2rem] p-8 text-center">
            <Mail className="mx-auto mb-5 text-pink-300" size={44} />
            <h2 className="text-2xl font-black">Correo</h2>
            <p className="mt-3 break-words text-zinc-300">{siteConfig.email}</p>
          </a>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="glass-pro mx-auto max-w-7xl rounded-[2rem] p-8 md:p-12">
          <Sparkles className="mb-5 text-pink-300" size={44} />
          <h2 className="text-4xl font-black md:text-5xl">Podemos conversar sobre</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {contactOptions.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-5 font-bold text-zinc-200">{item}</div>)}
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
