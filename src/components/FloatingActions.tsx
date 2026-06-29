import { MessageCircle } from "lucide-react";
import { buildWhatsappUrl } from "@/data/emeste";

export function FloatingActions() {
  const whatsappUrl = buildWhatsappUrl(
    "Hola EMESTÉ, quiero una revisión rápida para saber qué servicio necesita mi negocio."
  );

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 md:right-6">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Escribir a EMESTÉ.CL por WhatsApp"
        className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_0_35px_rgba(16,185,129,0.45)] transition hover:-translate-y-0.5 hover:bg-emerald-400"
      >
        <MessageCircle size={17} /> WhatsApp
      </a>
    </div>
  );
}
