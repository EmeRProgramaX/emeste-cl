export const siteConfig = {
  name: "EMESTÉ.CL",
  brand: "EMESTÉ",
  legalName: "EMESTÉ Technologies",
  founder: "Emerson Gil",
  brandCredit: "Software creado por Emerson Gil",
  tagline: "Clientes por WhatsApp, páginas web y tecnología para vender más.",
  domain: "https://www.emeste.cl",
  email: "emeste@emeste.cl",
  whatsapp: "56982328639",
  whatsappDisplay: "+56 9 8232 8639",
  instagramUrl: "https://www.instagram.com/emeste.cl/",
  instagramEmesteUrl: "https://www.instagram.com/emeste.cl/",
  calendarUrl: "https://wa.me/56982328639",
  youtubeName: "EMESTÉ",
};

export const navItems = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Oferta", href: "/#planes" },
  { label: "Caso real", href: "/#caso-real" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Contacto", href: "/#contacto" },
];

export const businessLines = [
  {
    eyebrow: "Captación rápida",
    title: "WhatsApp + Instagram",
    href: "/#planes",
    description:
      "Optimizamos tu perfil, mensaje de contacto y respuestas para que más personas te escriban por WhatsApp.",
    cta: "Quiero revisión",
  },
  {
    eyebrow: "Página de venta",
    title: "Landing Express",
    href: "/#planes",
    description:
      "Una página profesional enfocada en convertir visitas de campañas, redes sociales o Marketplace en consultas por WhatsApp.",
    cta: "Cotizar landing",
  },
  {
    eyebrow: "Operación y sistemas",
    title: "Software / POS / Automatización",
    href: "/#caso-real",
    description:
      "Sistemas para ordenar ventas, reservas, caja, clientes, reportes y procesos internos del negocio.",
    cta: "Ver solución",
  },
];

export const softwareServices = [
  {
    title: "Landing pages que llevan a WhatsApp",
    description:
      "Páginas claras, rápidas y orientadas a captar clientes desde redes sociales, Marketplace o campañas pagadas.",
  },
  {
    title: "Optimización de Instagram y WhatsApp",
    description:
      "Bio, enlace directo, mensajes automáticos, respuestas rápidas y textos comerciales para vender mejor.",
  },
  {
    title: "Software a medida",
    description:
      "Sistemas para ventas, inventario, reservas, reportes, clientes, paneles administrativos y operación diaria.",
  },
  {
    title: "Automatización inteligente",
    description:
      "Flujos conectados con WhatsApp, formularios, correos, reportes, agenda y procesos repetitivos.",
  },
];

export const commercialPackages = [
  {
    name: "Pack WhatsApp + Instagram",
    price: "Desde $49.000 CLP",
    description:
      "Para negocios que necesitan ordenar su perfil y recibir más consultas sin crear todavía una web completa.",
    items: ["Bio optimizada", "Link directo a WhatsApp", "Mensaje automático", "Respuestas rápidas", "Textos para publicar"],
  },
  {
    name: "Landing Express",
    price: "Desde $149.000 CLP",
    description:
      "Para negocios que quieren transformar visitas en consultas por WhatsApp con una página clara y profesional.",
    items: ["Página responsive", "Botón WhatsApp", "Textos comerciales", "Secciones de servicios", "Publicación online"],
  },
  {
    name: "Landing Pro",
    price: "Desde $349.000 CLP",
    description:
      "Para empresas que necesitan más confianza, mejor presentación, estructura comercial y captación profesional.",
    items: ["Diseño premium", "Más secciones", "Formulario o agenda", "SEO base", "Optimización comercial"],
  },
  {
    name: "Software / POS / Automatización",
    price: "Cotización según alcance",
    description:
      "Para negocios que necesitan ordenar ventas, procesos, inventario, reservas o información interna.",
    items: ["Diagnóstico técnico", "Propuesta formal", "Sistema a medida", "Soporte inicial"],
  },
];

export const latestUpdates = [
  {
    tag: "Oferta rápida",
    title: "Pack WhatsApp + Instagram",
    description:
      "Servicio de entrada para negocios que necesitan captar más consultas desde redes sociales sin invertir de inmediato en un sistema grande.",
    href: "/#planes",
  },
  {
    tag: "Página de venta",
    title: "Landing Express",
    description:
      "Página profesional para campañas, redes sociales y Marketplace con contacto directo a WhatsApp.",
    href: "/#planes",
  },
  {
    tag: "Caso real",
    title: "EMESTÉ POS",
    description:
      "Software real para negocio, con operación, caja, roles y control comercial.",
    href: "/#caso-real",
  },
];

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
