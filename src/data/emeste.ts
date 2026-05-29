export const siteConfig = {
  name: "EMESTÉ.CL",
  brand: "EMESTÉ",
  legalName: "EMESTÉ Technologies",
  founder: "Emerson Gil",
  brandCredit: "Software creado por Emerson Gil",
  tagline: "Tecnología, música y conciencia para crecer con propósito.",
  domain: "https://www.emeste.cl",
  email: "emeste@emeste.cl",
  whatsapp: "56982328639",
  whatsappDisplay: "+56 9 8232 8639",
  instagramUrl: "https://www.instagram.com/dj___emerson/",
  calendarUrl: "https://calendar.app.google/KRBdfycwBGAwB3gT9",
  youtubeName: "Emesté Mente Diferente",
};

export const navItems = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Software", href: "/software" },
  { label: "DJ", href: "/dj" },
  { label: "Mentorías", href: "/mentorias" },
  { label: "Actualizaciones", href: "/actualizaciones" },
  { label: "Contacto", href: "/contacto" },
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
    href: "/dj",
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
    price: "Desde $120.000 CLP",
    description:
      "Página de venta rápida para emprendedores y negocios que necesitan presencia profesional inmediata.",
    items: ["Diseño responsive", "Botón WhatsApp", "Formulario o agenda", "SEO base"],
  },
  {
    name: "Web Profesional",
    price: "Desde $250.000 CLP",
    description:
      "Sitio corporativo elegante para vender servicios, mostrar confianza y captar clientes constantemente.",
    items: ["Hasta 5 secciones", "Diseño premium", "Integración redes", "Optimización comercial"],
  },
  {
    name: "Software a Medida",
    price: "Cotización por proyecto",
    description:
      "Sistema personalizado para controlar procesos, ventas, inventario, clientes, paneles y operación.",
    items: ["Levantamiento técnico", "Arquitectura escalable", "Panel administrativo", "Soporte inicial"],
  },
  {
    name: "Automatización",
    price: "Desde $150.000 CLP",
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
    href: "/dj",
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
