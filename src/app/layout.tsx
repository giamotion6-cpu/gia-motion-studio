import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import { CursorGlow } from "@/providers/cursor-glow";
import { IntroOverlay } from "@/providers/intro-overlay";
import { SmoothScroll } from "@/providers/smooth-scroll";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site-config";
import "./globals.css";

const display = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const body = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "GIA Motion — Productora audiovisual en Cajamarca",
    template: "%s — GIA Motion",
  },
  description:
    "Producción audiovisual, fotografía industrial, streaming, experiencias 360° y topografía con drones para marcas que necesitan hacerse visibles.",
  keywords: [
    "productora audiovisual Cajamarca",
    "video corporativo Perú",
    "fotografía industrial",
    "topografía con drones",
    "streaming multicámara",
  ],
  openGraph: {
    title: "GIA Motion — Ideas que se mueven",
    description:
      "Producción audiovisual y tecnología para marcas que quieren ocupar la pantalla.",
    type: "website",
    locale: "es_PE",
    images: [
      {
        url: "/images/gia-social-preview.png",
        width: 1265,
        height: 633,
        alt: "GIA Motion — Ideas que se mueven",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GIA Motion — Ideas que se mueven",
    description: "Productora audiovisual, drone, streaming y experiencias 360°.",
    images: ["/images/gia-social-preview.png"],
  },
  // CAMBIAMOS LA BARRA POR TU ENLACE OFICIAL ABSOLUTO:
  alternates: { canonical: "https://giamotionstudio.com" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0c0d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const whatsappUrl = buildWhatsAppUrl();

  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/gia-logo-master.png`,
    image: `${siteConfig.url}/images/industrial-aerial.jpg`,
    description: "Productora audiovisual, fotografía industrial, streaming, experiencias 360° y topografía con drones.",
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cajamarca",
      addressCountry: "PE",
    },
    areaServed: "Perú",
  };

  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <IntroOverlay />
        <SmoothScroll />
        <CursorGlow />
        <div className="scroll-progress" aria-hidden="true" />
        {children}
        {whatsappUrl ? (
          <a
            className="floating-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Contactar por WhatsApp al ${siteConfig.contact.phoneLabel}`}
            title={`WhatsApp: ${siteConfig.contact.phoneLabel}`}
          >
            <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <path d="M16.004 3.2C8.944 3.2 3.2 8.944 3.2 16.004c0 2.248.588 4.444 1.704 6.38L3.2 28.8l6.58-1.674a12.74 12.74 0 0 0 6.224 1.616H16c7.06 0 12.8-5.744 12.8-12.8S23.06 3.2 16.004 3.2Zm0 23.358h-.004a10.6 10.6 0 0 1-5.398-1.48l-.386-.23-3.906.994 1.044-3.81-.252-.392a10.59 10.59 0 0 1-1.624-5.634c0-5.852 4.76-10.612 10.62-10.612 2.836 0 5.498 1.104 7.5 3.106 2.002 2 3.104 4.664 3.104 7.5 0 5.86-4.76 10.618-10.618 10.618Zm5.822-7.944c-.318-.16-1.88-.928-2.17-1.034-.29-.106-.5-.16-.712.16-.212.318-.818 1.034-1.004 1.248-.186.212-.372.24-.69.08-.318-.16-1.342-.494-2.556-1.576-.946-.842-1.584-1.882-1.77-2.2-.186-.318-.02-.49.14-.65.144-.144.318-.372.476-.558.16-.186.212-.318.318-.53.106-.212.054-.398-.026-.558-.08-.16-.712-1.716-.976-2.352-.258-.62-.52-.536-.712-.546l-.608-.01c-.212 0-.558.08-.85.398s-1.116 1.09-1.116 2.66c0 1.57 1.142 3.086 1.302 3.298.16.212 2.25 3.44 5.456 4.824.762.328 1.356.524 1.82.67.766.244 1.464.21 2.014.128.614-.092 1.88-.768 2.144-1.51.264-.742.264-1.378.184-1.51-.08-.132-.292-.212-.61-.372Z" />
            </svg>
          </a>
        ) : null}
      </body>
    </html>
  );
}
