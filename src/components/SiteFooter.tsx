import { navItems, siteConfig } from "@/data/emeste";

export function SiteFooter() {
  return (
    <footer className="relative z-10 px-6 py-12 text-sm text-zinc-400">
      <div className="glass-pro mx-auto grid max-w-7xl gap-8 rounded-[2rem] p-8 md:grid-cols-[1.4fr_1fr_1fr] md:p-10">
        <div>
          <p className="text-lg font-black tracking-[0.2em] text-white">EMESTÉ.CL</p>
          <p className="mt-4 max-w-xl leading-relaxed">
            Tecnología premium, software a medida, páginas web y automatizaciones para negocios que necesitan vender y operar mejor.
          </p>
          <p className="mt-5 font-semibold text-zinc-300">{siteConfig.brandCredit}</p>
        </div>

        <div>
          <p className="font-black uppercase tracking-[0.18em] text-white">Mapa</p>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-black uppercase tracking-[0.18em] text-white">Contacto</p>
          <div className="mt-4 grid gap-2">
            <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
              {siteConfig.email}
            </a>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} className="transition hover:text-white">
              {siteConfig.whatsappDisplay}
            </a>
            <a href={siteConfig.calendarUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">
              Hablemos de tu proyecto
            </a>
            <a href={siteConfig.instagramEmesteUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">
              Instagram EMESTÉ
            </a>
            <a href="/presskit" className="transition hover:text-white">
              Press Kit DJ
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl px-4 text-center text-xs text-zinc-500 md:text-left">
        © 2026 EMESTÉ.CL. Todos los derechos reservados.
      </div>
    </footer>
  );
}

