import { Instagram, Mail, MessageCircle } from "lucide-react";
import { buildWhatsappUrl, siteConfig } from "@/data/emeste";

export function SiteFooter() {
  const whatsappUrl = buildWhatsappUrl(
    "Hola EMESTÉ, vengo desde la web y quiero revisar qué servicio necesita mi negocio."
  );

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/50 px-4 py-10 text-zinc-300 backdrop-blur-xl sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-white">EMESTÉ.CL</p>
          <p className="mt-3 max-w-2xl text-sm leading-7">
            Soluciones de páginas web, WhatsApp Business, Instagram, software, POS, automatización y soporte tecnológico para negocios.
          </p>
          <p className="mt-4 text-xs font-semibold text-zinc-500">Responsable: {siteConfig.founder}</p>
        </div>

        <div className="grid gap-3 text-sm font-bold">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
            <MessageCircle size={17} className="text-emerald-300" /> {siteConfig.whatsappDisplay}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 transition hover:text-white">
            <Mail size={17} className="text-pink-300" /> {siteConfig.email}
          </a>
          <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
            <Instagram size={17} className="text-pink-300" /> Instagram corporativo
          </a>
        </div>
      </div>
    </footer>
  );
}
