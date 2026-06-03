export const siteConfig = {
  name: "EMESTÉ.CL",
  brand: "EMESTÉ",
  legalName: "EMESTÉ Technologies",
  founder: "Emerson Gil",
  brandCredit: "Software creado por Emerson Gil",
  tagline: "Tecnología premium para que tu negocio venda más y trabaje mejor.",
  domain: "https://www.emeste.cl",
  email: "emeste@emeste.cl",
  whatsapp: "56982328639",
  whatsappDisplay: "+56 9 8232 8639",
  instagramUrl: "https://www.instagram.com/dj___emerson/",
  instagramEmesteUrl: "https://www.instagram.com/emeste.cl/",
  calendarUrl: "https://calendar.app.google/KRBdfycwBGAwB3gT9",
  youtubeName: "Emesté Mente Diferente",
};

export const navItems = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Caso real", href: "/#caso-real" },
  { label: "Planes", href: "/#planes" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Press Kit", href: "/presskit" },
  { label: "Contacto", href: "/#contacto" },
];

export const businessLines = [
  {
    eyebrow: "Línea comercial principal",
    title: "Software y consultoría tecnológica",
    href: "/software",
    description:
      "Desarrollo web, sistemas a medida, automatizaciones, POS, ERP, integraciones e inteligencia artificial para negocios que necesitan crecer con orden.",
    cta: "Cotizar solución",
  },
  {
    eyebrow: "Marca artística",
    title: "EMESTÉ DJ",
    href: "/presskit",
    description:
      "Música, energía y conexión real para eventos privados, empresas, clubes y experiencias memorables.",
    cta: "Ver press kit",
  },
  {
    eyebrow: "Crecimiento humano",
    title: "EMESTÉ Mentorías",
    href: "/mentorias",
    description:
      "Mentorías y contenido educativo sobre paz, amor, respeto, disciplina, propósito y conciencia para vivir mejor.",
    cta: "Ver mentorías",
  },
];

export const softwareServices = [
  {
    title: "Desarrollo web premium",
    description:
      "Sitios rápidos, modernos, responsivos y preparados para convertir visitas en clientes reales.",
  },
  {
    title: "Software a medida",
    description:
      "Sistemas para ventas, inventario, reservas, gestión interna, reportes y operación diaria.",
  },
  {
    title: "Automatización inteligente",
    description:
      "Flujos conectados con WhatsApp, formularios, correos, reportes, agenda y procesos repetitivos.",
  },
  {
    title: "IA para empresas",
    description:
      "Asistentes, chatbots, análisis de información y herramientas internas para mejorar productividad.",
  },
];

export const commercialPackages = [
  {
    name: "Landing Express",
    price: "Desde $220.000 CLP",
    description:
      "Para negocios que necesitan presencia profesional inmediata y contacto directo.",
    items: ["Diseño responsive", "WhatsApp e Instagram", "SEO base", "Publicación"],
  },
  {
    name: "Web Profesional",
    price: "Desde $350.000 CLP",
    description:
      "Para empresas que necesitan más confianza, secciones comerciales y mejor imagen.",
    items: ["Secciones corporativas", "Diseño premium", "Formulario o agenda", "Optimización comercial"],
  },
  {
    name: "Software / Automatización",
    price: "Desde $550.000 CLP",
    description:
      "Para negocios que necesitan ordenar procesos, ventas, reservas o información interna.",
    items: ["Diagnóstico técnico", "Arquitectura escalable", "Panel o flujo interno", "Soporte inicial"],
  },
  {
    name: "Automatización",
    price: "Cotización personalizada",
    description:
      "Automatización de tareas repetitivas para ahorrar tiempo, responder mejor y ordenar el negocio.",
    items: ["Flujos automáticos", "Alertas", "Integraciones", "Documentación"],
  },
];

export const latestUpdates = [
  {
    tag: "Marca",
    title: "EMESTÉ evoluciona como ecosistema",
    description:
      "La marca crece hacia software, música y mentorías sin perder el foco comercial principal: crear soluciones tecnológicas rentables.",
    href: "/actualizaciones",
  },
  {
    tag: "DJ",
    title: "Nuevo press kit artístico",
    description:
      "La línea EMESTÉ DJ tendrá una página dedicada para booking, biografía, sesiones, videos y material profesional.",
    href: "/presskit",
  },
  {
    tag: "Mentorías",
    title: "Emesté Mente Diferente",
    description:
      "Nuevo canal educativo para compartir reflexiones, crecimiento personal, paz, amor, respeto y propósito.",
    href: "/mentorias",
  },
];

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
