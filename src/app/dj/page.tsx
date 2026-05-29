import type { Metadata } from "next";
import { CalendarCheck, Disc3, Instagram, Music2, Sparkles } from "lucide-react";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildWhatsappUrl, siteConfig } from "@/data/emeste";

export const metadata: Metadata = {
  title: "EMESTÉ DJ | Booking y Press Kit",
  description: "Página oficial de EMESTÉ DJ. Música, energía y conexión real para eventos privados, empresas y experiencias memorables.",
};

export default function DjPage() {
  const bookingUrl = buildWhatsappUrl("Hola EMESTÉ, quiero consultar disponibilidad de EMESTÉ DJ para un evento.");

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,#ff006a40,transparent_35%),radial-gradient(circle_at_80%_20%,#ff174433,transparent_32%)]" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
      <SiteHeader />

      <section className="relative z-10 px-6 pb-20 pt-36">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-pink-200">Marca artística oficial</p>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">EMESTÉ DJ</h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-zinc-300">Música, energía y conexión real para eventos privados, empresas, clubes y experiencias memorables. Una propuesta artística profesional creada por Emerson Gil.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-pink-600 px-7 py-4 font-black shadow-[0_0_45px_rgba(255,0,120,0.45)] transition hover:bg-pink-500">Solicitar booking <CalendarCheck size={18} /></a>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-7 py-4 font-black transition hover:bg-white/15">Instagram <Instagram size={18} /></a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-xl">
            <Disc3 className="mx-auto text-pink-300" size={92} />
            <h2 className="mt-6 text-3xl font-black">Booking profesional</h2>
            <p className="mt-4 leading-relaxed text-zinc-300">Disponible para eventos donde la música debe sentirse elegante, potente y conectada con el público.</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <article className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
            <Music2 className="mb-5 text-pink-300" size={42} />
            <h2 className="text-3xl font-black">Biografía artística</h2>
            <p className="mt-5 leading-relaxed text-zinc-300">EMESTÉ DJ nace como una extensión artística de Emerson Gil, uniendo música, energía, tecnología y propósito. Su propuesta busca crear momentos de conexión real, alegría y presencia, elevando cada evento con profesionalismo y sensibilidad musical.</p>
          </article>

          <article className="rounded-[2rem] border border-pink-500/20 bg-gradient-to-br from-pink-500/15 to-white/[0.04] p-8 backdrop-blur-xl">
            <Sparkles className="mb-5 text-pink-300" size={42} />
            <h2 className="text-3xl font-black">Ideal para</h2>
            <ul className="mt-5 space-y-3 text-zinc-300">
              <li>Eventos privados, empresas, clubes y celebraciones.</li>
              <li>Propuesta musical moderna, elegante y adaptable.</li>
              <li>Energía profesional, lectura de público y conexión real.</li>
              <li>Booking directo por WhatsApp y agenda.</li>
            </ul>
          </article>
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
