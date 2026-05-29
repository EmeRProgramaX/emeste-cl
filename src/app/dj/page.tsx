import type { Metadata } from "next";
import { ArrowRight, Sparkles } from "lucide-react";
import { FloatingActions } from "@/components/FloatingActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildWhatsappUrl } from "@/data/emeste";

export const metadata: Metadata = {
  title: "EMESTÉ DJ",
  description: "Página oficial de EMESTÉ DJ.",
};

export default function DjPage() {
  const bookingUrl = buildWhatsappUrl("Hola EMESTÉ, quiero información de EMESTÉ DJ.");

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 bg-pink-950/30" />
      <SiteHeader />
      <section className="relative z-10 px-6 pb-20 pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-widest text-pink-200">Marca artística</p>
          <h1 className="text-5xl font-black leading-tight md:text-7xl">EMESTÉ DJ</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-zinc-300">Música, energía y conexión real con una presentación profesional.</p>
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-pink-600 px-7 py-4 font-black transition hover:bg-pink-500">Solicitar información <ArrowRight size={18} /></a>
        </div>
      </section>
      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/10 p-8">
          <Sparkles className="mb-5 text-pink-300" size={42} />
          <h2 className="text-3xl font-black">Press kit en construcción</h2>
          <p className="mt-4 text-zinc-300">Esta sección quedará preparada para biografía, fotos, videos y booking.</p>
        </div>
      </section>
      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
