import type { Metadata } from "next";
import { ArrowRight, CalendarCheck, Sparkles } from "lucide-react";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildWhatsappUrl, siteConfig } from "@/data/emeste";

export const metadata: Metadata = {
  title: "EMESTÉ DJ | Booking y Press Kit",
  description: "Página oficial de EMESTÉ DJ para eventos privados, empresas, clubes y experiencias memorables.",
};

const highlights = [
  "Eventos privados y corporativos",
  "Clubes, celebraciones y experiencias especiales",
  "Energía, lectura de público y conexión real",
  "Booking directo por WhatsApp y agenda",
];

export default function DjPage() {
  const bookingUrl = buildWhatsappUrl("Hola EMESTÉ, quiero consultar disponibilidad de EMESTÉ DJ para un evento.");

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <SiteHeader />
      <section className="relative z-10 px-6 pb-20 pt-36">
        <div className="glass-pro glow-3d mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-pink-500/30 bg-pink-500/15 px-5 py-2 text-xs font-black uppercase tracking-widest text-pink-200">Press kit oficial</p>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">EMESTÉ DJ</h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-zinc-200">Música, energía y conexión real para eventos privados, empresas, clubes y experiencias memorables. Una propuesta artística profesional creada por Emerson Gil.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-pink-600 px-7 py-4 font-black shadow-[0_0_45px_rgba(236,0,140,0.55)] transition hover:-translate-y-1 hover:bg-pink-500">Solicitar booking <CalendarCheck size={18} /></a>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-black backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15">Instagram DJ <ArrowRight size={18} /></a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/30 p-7 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
            <Sparkles className="mx-auto text-pink-300" size={86} />
            <h2 className="mt-6 text-3xl font-black">Booking profesional</h2>
            <p className="mt-4 leading-relaxed text-zinc-300">Disponible para eventos donde la música debe sentirse elegante, potente y conectada con el público.</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <article className="glass-pro glow-3d rounded-[2rem] p-8">
            <h2 className="text-3xl font-black">Biografía artística</h2>
            <p className="mt-5 leading-relaxed text-zinc-300">EMESTÉ DJ nace como una extensión artística de Emerson Gil, uniendo música, energía, tecnología y propósito. Su presentación busca crear momentos de conexión real, alegría y presencia, elevando cada evento con profesionalismo y sensibilidad musical.</p>
          </article>
          <article className="glass-pro glow-3d rounded-[2rem] p-8">
            <h2 className="text-3xl font-black">Ideal para</h2>
            <ul className="mt-5 space-y-3 text-zinc-300">
              {highlights.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="glass-pro mx-auto max-w-7xl rounded-[2rem] p-8 text-center md:p-12">
          <h2 className="text-4xl font-black md:text-5xl">Press kit descargable</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-zinc-300">La sección queda preparada para incorporar fotos oficiales, videos, sesiones, ficha técnica y PDF profesional de booking.</p>
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-black text-black transition hover:-translate-y-1 hover:bg-zinc-200">Solicitar información <ArrowRight size={18} /></a>
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
