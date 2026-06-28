import { buildWhatsappUrl, siteConfig } from "@/data/emeste";

export function FloatingActions() {
  const whatsappUrl = buildWhatsappUrl("Hola EMESTÉ, quiero información para mejorar mi negocio.");

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
    </div>
  );
}
