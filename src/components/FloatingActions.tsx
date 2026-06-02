import { buildWhatsappUrl, siteConfig } from "@/data/emeste";

export function FloatingActions() {
  const whatsappUrl = buildWhatsappUrl("Hola EMESTÉ, quiero información.");

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 md:right-6">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-emerald-500 px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_0_35px_rgba(16,185,129,0.45)] transition hover:-translate-y-0.5 hover:bg-emerald-400"
      >
        WhatsApp
      </a>
      <a
        href={siteConfig.instagramEmesteUrl}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-pink-600 px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_0_35px_rgba(236,0,140,0.45)] transition hover:-translate-y-0.5 hover:bg-pink-500"
      >
        Instagram EMESTÉ
      </a>
      <a
        href={siteConfig.instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-white/10 bg-zinc-900/85 px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-300 shadow-[0_0_24px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:text-white"
      >
        Instagram DJ
      </a>
    </div>
  );
}
