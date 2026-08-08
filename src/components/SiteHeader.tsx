import Image from "next/image";
import Link from "next/link";
import { buildWhatsappUrl, navItems } from "@/data/emeste";

export function SiteHeader() {
  const whatsappUrl = buildWhatsappUrl(
    "Hola EMESTÉ, quiero una revisión sin costo para saber qué servicio digital le conviene a mi negocio."
  );

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/75 px-4 py-3 shadow-[0_0_60px_rgba(236,0,140,0.18)] backdrop-blur-2xl md:px-6">
        <Link href="/#inicio" className="flex min-w-0 items-center gap-3" aria-label="Ir al inicio de EMESTÉ.CL">
          <Image
            src="/logo-emeste.png"
            alt="Logo oficial EMESTÉ.CL"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 rounded-xl object-cover ring-1 ring-white/10 sm:h-10 sm:w-10"
            priority
          />
          <div className="min-w-0 leading-none">
            <p className="truncate text-xs font-black tracking-[0.16em] text-white sm:text-sm">EMESTÉ.CL</p>
            <p className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-pink-200/80 sm:block">
              Web · WhatsApp · Software · Soporte
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-semibold text-zinc-300 xl:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="attention-cta hidden shrink-0 rounded-full bg-emerald-500 px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-white md:inline-flex"
        >
          Revisión gratis
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="attention-cta shrink-0 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-black uppercase tracking-[0.1em] text-white md:hidden"
        >
          WhatsApp
        </a>
      </div>

      <nav className="mx-auto mt-2 flex max-w-7xl gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-black/65 px-3 py-2 text-xs font-bold text-zinc-300 backdrop-blur-2xl xl:hidden">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="shrink-0 rounded-full bg-white/5 px-4 py-2 transition hover:bg-white/10 hover:text-white">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
