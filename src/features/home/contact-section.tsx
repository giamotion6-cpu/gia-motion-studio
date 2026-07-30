"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { services } from "@/content/site-content";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site-config";

export function ContactSection() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const company = String(data.get("company") || "").trim();
    const email = String(data.get("email") || "").trim();
    const projectType = String(data.get("projectType") || "").trim();
    const project = String(data.get("project") || "").trim();
    const message = [
      "Hola GIA Motion, quiero conversar sobre un proyecto.",
      `Nombre: ${name}`,
      company ? `Empresa: ${company}` : "",
      `Correo: ${email}`,
      projectType ? `Servicio: ${projectType}` : "",
      `Proyecto: ${project}`,
    ].filter(Boolean).join("\n");

    if (siteConfig.contact.whatsapp) {
      setStatus("Abriendo WhatsApp para continuar tu consulta…");
      window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
      return;
    }

    setStatus("Abriendo tu aplicación de correo para continuar…");
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(`Nuevo proyecto — ${name}`)}&body=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contacto" className="contact section section--black-soft">
      <div className="shell">
        <div className="contact__top">
          <div>
            <span className="section-number">06</span>
            <p className="eyebrow">Tu próximo proyecto</p>
          </div>
          <h2>Hagamos algo<br /><em>difícil de ignorar.</em></h2>
        </div>

        <div className="contact__grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Tu nombre</label>
              <input id="name" name="name" type="text" autoComplete="name" placeholder="Ej. Andrea Salazar…" required />
            </div>
            <div className="field">
              <label htmlFor="company">Empresa</label>
              <input id="company" name="company" type="text" autoComplete="organization" placeholder="Nombre de tu empresa…" />
            </div>
            <div className="field">
              <label htmlFor="email">Correo de contacto</label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                spellCheck={false}
                placeholder="nombre@empresa.com…"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="projectType">Tipo de proyecto</label>
              <select id="projectType" name="projectType" defaultValue="" autoComplete="off" required>
                <option value="" disabled>Selecciona un servicio…</option>
                {services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}
              </select>
            </div>
            <div className="field field--wide">
              <label htmlFor="project">¿Qué necesitas producir?</label>
              <textarea id="project" name="project" rows={3} autoComplete="off" placeholder="Cuéntanos el objetivo, lugar y fecha aproximada…" required />
            </div>
            <button className="button button--light" type="submit">
              {siteConfig.contact.whatsapp ? "Conversar por WhatsApp" : "Enviar consulta"} <ArrowUpRight size={18} aria-hidden="true" />
            </button>
            <p className="form-status" aria-live="polite">{status}</p>
          </form>

          <div className="contact__details">
            <p>¿Prefieres ir directo?</p>
            <a href={`mailto:${siteConfig.contact.email}`}><Mail size={18} aria-hidden="true" /> {siteConfig.contact.email}</a>
            {siteConfig.contact.whatsapp ? (
              <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
                <Phone size={18} aria-hidden="true" /> {siteConfig.contact.phoneLabel || "WhatsApp"}
              </a>
            ) : null}
            <span><MapPin size={18} aria-hidden="true" /> {siteConfig.contact.city}</span>
            <div className="contact__availability"><i /> Agenda abierta para nuevos proyectos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
