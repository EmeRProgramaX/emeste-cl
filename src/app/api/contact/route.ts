import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Faltan datos obligatorios." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"EMESTÉ Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `Nuevo contacto desde EMESTÉ.CL - ${name}`,
      html: `
        <h2>Nuevo contacto desde EMESTÉ.CL</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No indicado"}</p>
        <p><strong>Servicio:</strong> ${service || "No indicado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    await transporter.sendMail({
      from: `"EMESTÉ" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Recibimos tu solicitud en EMESTÉ",
      html: `
        <h2>Hola ${name}, recibimos tu mensaje.</h2>
        <p>Gracias por contactar a EMESTÉ.</p>
        <p>Revisaremos tu solicitud y responderemos lo antes posible.</p>
        <p><strong>EMESTÉ Technologies</strong><br/>Tecnología creada para crecer.</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "Error enviando el mensaje." },
      { status: 500 }
    );
  }
}
