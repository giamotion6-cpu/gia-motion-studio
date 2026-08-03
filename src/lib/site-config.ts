import type { NavigationItem } from "@/types/content";

export const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Contacto", href: "/#contacto" },
] as const satisfies readonly NavigationItem[];

export const siteConfig = {
  name: "GIA Motion",
  legalName: "GIA MOTION",
  tagline: "Productora audiovisual",
  url: "https://gia-motion-zeta.vercel.app",
  locale: "es_PE",
  contact: {
    email: "giamotionsac@gmail.com",
    phoneLabel: process.env.NEXT_PUBLIC_WHATSAPP_LABEL ?? "+51 958 428 325",
    whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "51958428325").replace(/\D/g, ""),
    city: "Cajamarca, Perú",
  },
} as const;

export function buildWhatsAppUrl(message?: string) {
  const number = siteConfig.contact.whatsapp;
  if (!number) return "";
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${query}`;
}
