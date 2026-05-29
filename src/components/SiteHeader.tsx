import { navItems, siteConfig } from "@/data/emeste";

export function SiteHeader() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/70 px-4 py-3 shadow-[0_0_60px_rgba(236,0,140,0.18)] backdrop-blur-2xl md:px-6">
        <a href="/#inicio" className="flex min-w-max items-center gap-3" aria-label="Ir al inicio de EMESTÉ.CL">
          <img
            src="/logo-emeste.png"
            alt="Logo oficial EMESTÉ.CL"
            className="h-10 w-10 rounded-xl object-cover ring-1 ring-white/10"
          />
          <div className="leading-none">
            <p className="text-sm font-black tracking-[0.22em] text-white">EMESTÉ.CL</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-pink-200/80">
              Software · DJ · Mentorías
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-zinc-300 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={siteConfig.calendarUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-pink-600 px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-white shadow-[0_0_28px_rgba(236,0,140,0.45)] transition hover:bg-pink-500 md:inline-flex"
        >
          Agendar ahora
        </a>
      </div>
    </header>
  );
}
