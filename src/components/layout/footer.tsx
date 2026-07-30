import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Logo } from "./logo";
import { buildWhatsAppUrl, navigation, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <Logo />
          <p>Producción audiovisual, tecnología y perspectiva para empresas que quieren verse como líderes.</p>
          <a className="footer__top-link" href="#contenido" aria-label="Volver al inicio"><ArrowUp aria-hidden="true" /></a>
        </div>
        <div className="footer__grid">
          <nav aria-label="Navegación del pie de página">
            <span>Navegar</span>
            {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </nav>
          <div>
            <span>Social</span>
            <p>Instagram</p>
            <p>Facebook</p>
            {siteConfig.contact.whatsapp ? <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">WhatsApp</a> : null}
          </div>
          <div>
            <span>Contacto</span>
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            <p>{siteConfig.contact.city}</p>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} GIA Motion</span>
          <span>Ideas que se mueven.</span>
          <span>Hecho con intención en Perú</span>
        </div>
      </div>
    </footer>
  );
}
