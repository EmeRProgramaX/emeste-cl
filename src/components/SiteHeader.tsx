import { navItems, siteConfig } from "@/data/emeste";

export function SiteHeader() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 md:px-6">
      <div className="glass-pro mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl px-3 py-3 md:px-6">
        <a href="/#inicio" className="flex min-w-0 items-center gap-3" aria-label="Ir al inicio de EMESTÉ.CL">
          <img src="/logo-emeste.png" alt="Logo oficial EMESTÉ.CL" className="h-9 w-9 shrink-0 rounded-xl object-cover ring-1 ring-white/10 sm:h-10 sm:w-10" />
          <div className="min-w-0 leading-none">
            <p className="truncate text-xs font-black tracking-[0.16em] text-white sm:text-sm">EMESTÉ.CL</p>
            <p className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-pink-200/80 sm:block">Software · DJ · Mentorías</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-zinc-300 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a href={siteConfig.calendarUrl} target="_blank" rel="noreferrer" className="hidden shrink-0 rounded-full bg-pink-600 px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-white shadow-[0_0_28px_rgba(236,0,140,0.45)] transition hover:bg-pink-500 md:inline-flex">
          Agendar ahora
        </a>

        <a href="/contacto" className="shrink-0 rounded-full bg-pink-600 px-4 py-2 text-[11px] font-black uppercase tracking-[0.1em] text-white shadow-[0_0_24px_rgba(236,0,140,0.35)] transition hover:bg-pink-500 md:hidden">
          Contacto
        </a>
      </div>

      <nav className="mx-auto mt-2 flex max-w-7xl gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-black/55 px-3 py-2 text-xs font-bold text-zinc-300 backdrop-blur-2xl lg:hidden">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="shrink-0 rounded-full bg-white/5 px-4 py-2 transition hover:bg-white/10 hover:text-white">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
