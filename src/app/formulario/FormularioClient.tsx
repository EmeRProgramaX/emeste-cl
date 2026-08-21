"use client";

import { FormEvent, useState } from "react";
import { Check, ClipboardList, Send } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { siteConfig } from "@/data/emeste";

type Question = {
  name: string;
  label: string;
  hint?: string;
  placeholder?: string;
  multiline?: boolean;
  required?: boolean;
  inputMode?: "email" | "tel";
};

type FormSection = {
  title: string;
  description: string;
  questions: Question[];
};

const sections: FormSection[] = [
  {
    title: "Sobre tu empresa",
    description: "Partamos por entender qué haces y dónde trabajas.",
    questions: [
      { name: "q1", label: "Nombre oficial de la empresa", required: true },
      {
        name: "q2",
        label: "¿A qué se dedica?",
        hint: "Explícalo de forma simple, como si no conociéramos tu rubro.",
        multiline: true,
        required: true,
      },
      { name: "q3", label: "¿Hace cuánto tiempo funciona el negocio?" },
      { name: "q4", label: "¿En qué ciudad o comunas trabajas o entregas el servicio?" },
    ],
  },
  {
    title: "Marca visual",
    description: "Cuéntanos qué material visual ya tienes disponible.",
    questions: [
      {
        name: "q5",
        label: "¿Tienes logo?",
        hint: "Si tienes uno, luego puedes enviarlo por WhatsApp junto con este formulario.",
        placeholder: "Sí / No / Lo enviaré por WhatsApp",
      },
      {
        name: "q6",
        label: "¿Cuáles son tus colores de marca?",
        hint: "Si no están definidos, dinos qué colores te gustan o cuáles no quieres usar.",
      },
      {
        name: "q7",
        label: "¿Tienes fotos propias del negocio, equipo o trabajos terminados?",
        hint: "Si no tienes, podemos seleccionar imágenes profesionales.",
        multiline: true,
      },
    ],
  },
  {
    title: "Servicios",
    description: "Así podremos ordenar y presentar correctamente tu oferta.",
    questions: [
      { name: "q8", label: "Lista todos los servicios o planes que ofreces", multiline: true, required: true },
      {
        name: "q9",
        label: "¿Qué precio tiene cada uno?",
        hint: "También puedes indicar que prefieres no mostrar precios y usar “Cotiza aquí”.",
        multiline: true,
      },
      { name: "q10", label: "¿Tienes un servicio estrella que quieras destacar?" },
    ],
  },
  {
    title: "Cómo trabajas",
    description: "Queremos explicar tu proceso para que el cliente sepa qué esperar.",
    questions: [
      {
        name: "q11",
        label: "Describe paso a paso cómo es contratar tu servicio",
        hint: "Desde el primer contacto hasta la entrega final.",
        multiline: true,
      },
      { name: "q12", label: "¿Cuánto demora normalmente el servicio completo?" },
    ],
  },
  {
    title: "Confianza",
    description: "Pruebas reales que ayuden a tus futuros clientes a decidir.",
    questions: [
      {
        name: "q13",
        label: "¿Tienes testimonios, reseñas o clientes que puedan recomendarte?",
        hint: "Puedes copiarlos aquí o indicar que los enviarás después.",
        multiline: true,
      },
      {
        name: "q14",
        label: "¿Qué números pueden dar confianza?",
        hint: "Ejemplo: “Más de 200 clientes” o “5 años de experiencia”.",
      },
    ],
  },
  {
    title: "Contacto",
    description: "Estos datos aparecerán en la nueva página web.",
    questions: [
      { name: "q15", label: "Número de WhatsApp para el botón de contacto", inputMode: "tel" },
      { name: "q16", label: "Correo electrónico", inputMode: "email" },
      {
        name: "q17",
        label: "Redes sociales",
        hint: "Instagram, Facebook, TikTok u otras. Deja el enlace o nombre de usuario.",
      },
      {
        name: "q18",
        label: "¿Quieres un formulario de contacto en tu página?",
        hint: "Si lo quieres, indica a qué correo deben llegar los mensajes.",
      },
    ],
  },
  {
    title: "Aspectos técnicos",
    description: "No te preocupes si no conoces estos conceptos; podemos ayudarte.",
    questions: [
      {
        name: "q19",
        label: "¿Tienes un dominio comprado?",
        hint: "Ejemplo: tuempresa.cl. Si no tienes uno, te ayudamos a gestionarlo.",
      },
      { name: "q20", label: "¿Tienes hosting o necesitas que lo gestionemos?" },
      {
        name: "q21",
        label: "¿Tienes correo corporativo?",
        hint: "Ejemplo: contacto@tuempresa.cl",
      },
    ],
  },
  {
    title: "Objetivo final",
    description: "Terminemos definiendo el resultado que quieres conseguir.",
    questions: [
      {
        name: "q22",
        label: "Cuando alguien entre a tu página, ¿qué quieres que haga?",
        hint: "Ejemplo: escribir por WhatsApp, llamar, cotizar o agendar.",
        required: true,
      },
      {
        name: "q23",
        label: "¿Hay alguna fecha límite importante?",
        hint: "Lanzamiento, temporada alta, evento u otra fecha.",
      },
    ],
  },
];

function buildWhatsappMessage(form: HTMLFormElement) {
  const data = new FormData(form);
  const lines = [
    "📋 *NUEVO FORMULARIO DE PROYECTO WEB — EMESTÉ.CL*",
    `*Enviado por:* ${String(data.get("respondente") || "—").trim()}`,
    "",
  ];

  sections.forEach((section) => {
    const answers = section.questions
      .map((question) => ({
        label: question.label,
        value: String(data.get(question.name) || "").trim(),
      }))
      .filter((answer) => answer.value);

    if (!answers.length) return;

    lines.push(`*${section.title.toUpperCase()}*`);
    answers.forEach((answer) => {
      lines.push(`_${answer.label}_`);
      lines.push(answer.value);
      lines.push("");
    });
  });

  return lines.join("\n");
}

export function FormularioClient() {
  const [sentUrl, setSentUrl] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = buildWhatsappMessage(event.currentTarget);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
    setSentUrl(whatsappUrl);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <SiteHeader />

      <section className="relative z-10 px-4 pb-20 pt-40 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="bevel-title-shell rounded-[2rem] px-6 py-10 text-center sm:px-10 sm:py-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/15 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-pink-200">
              <ClipboardList size={16} aria-hidden="true" /> Cuéntanos tu idea
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
              Formulario de tu proyecto web
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-300 sm:text-lg">
              Completa esta ficha con calma. Mientras más detalles nos entregues, mejor podremos entender, cotizar y construir tu página.
            </p>
            <div className="mx-auto mt-7 flex max-w-xl flex-wrap justify-center gap-3 text-xs font-bold text-zinc-200">
              {["Toma 10–15 minutos", "Puedes omitir lo que no aplique", "Envío directo por WhatsApp"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <Check size={14} className="text-emerald-300" aria-hidden="true" /> {item}
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-7">
            {sections.map((section, sectionIndex) => (
              <fieldset key={section.title} className="glass-pro rounded-[2rem] p-5 sm:p-8">
                <legend className="sr-only">{section.title}</legend>
                <div className="mb-7 border-b border-white/10 pb-6">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-pink-300">Paso {sectionIndex + 1} de {sections.length}</p>
                  <h2 className="mt-3 text-2xl font-black sm:text-3xl">{section.title}</h2>
                  <p className="mt-3 text-sm text-zinc-400 sm:text-base">{section.description}</p>
                </div>

                <div className="space-y-6">
                  {section.questions.map((question) => (
                    <div key={question.name}>
                      <label htmlFor={question.name} className="block text-sm font-bold text-zinc-100 sm:text-base">
                        {question.label}
                        {question.required && <span className="ml-1 text-pink-400" aria-label="obligatorio">*</span>}
                      </label>
                      {question.hint && <p id={`${question.name}-hint`} className="mt-1 text-sm text-zinc-400">{question.hint}</p>}
                      {question.multiline ? (
                        <textarea
                          id={question.name}
                          name={question.name}
                          required={question.required}
                          placeholder={question.placeholder}
                          aria-describedby={question.hint ? `${question.name}-hint` : undefined}
                          rows={4}
                          className="mt-3 w-full resize-y rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-base text-white outline-none transition placeholder:text-zinc-600 focus:border-pink-400 focus:ring-4 focus:ring-pink-500/15"
                        />
                      ) : (
                        <input
                          id={question.name}
                          name={question.name}
                          required={question.required}
                          placeholder={question.placeholder}
                          aria-describedby={question.hint ? `${question.name}-hint` : undefined}
                          type={question.inputMode === "email" ? "email" : "text"}
                          inputMode={question.inputMode === "tel" ? "tel" : undefined}
                          className="mt-3 w-full rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-base text-white outline-none transition placeholder:text-zinc-600 focus:border-pink-400 focus:ring-4 focus:ring-pink-500/15"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </fieldset>
            ))}

            <fieldset className="glass-pro rounded-[2rem] p-5 sm:p-8">
              <legend className="sr-only">Datos de quien responde</legend>
              <label htmlFor="respondente" className="block text-base font-bold text-zinc-100">
                Tu nombre <span className="text-pink-400" aria-label="obligatorio">*</span>
              </label>
              <p id="respondente-hint" className="mt-1 text-sm text-zinc-400">Nombre de la persona que completa este formulario.</p>
              <input
                id="respondente"
                name="respondente"
                required
                aria-describedby="respondente-hint"
                autoComplete="name"
                className="mt-3 w-full rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-base text-white outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-500/15"
              />
            </fieldset>

            <div className="glass-pro rounded-[2rem] p-5 text-center sm:p-8">
              <button type="submit" className="attention-cta inline-flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base font-black uppercase tracking-[0.1em] text-white sm:w-auto sm:min-w-80">
                Enviar por WhatsApp <Send size={20} aria-hidden="true" />
              </button>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400">
                Al enviar, se abrirá WhatsApp con tus respuestas listas. Solo tendrás que confirmar el mensaje.
              </p>
              {sentUrl && (
                <a href={sentUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex font-bold text-pink-300 underline underline-offset-4">
                  Abrir WhatsApp nuevamente
                </a>
              )}
            </div>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
