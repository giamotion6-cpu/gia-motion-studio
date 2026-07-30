import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import { CursorGlow } from "@/providers/cursor-glow";
import { SmoothScroll } from "@/providers/smooth-scroll";
import { siteConfig } from "@/lib/site-config";
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
    default: "GIA Motion — Productora audiovisual en Lima",
    template: "%s — GIA Motion",
  },
  description:
    "Producción audiovisual, fotografía industrial, streaming, experiencias 360° y topografía con drones para marcas que necesitan hacerse visibles.",
  keywords: [
    "productora audiovisual Lima",
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
        url: "/images/industrial-aerial.jpg",
        width: 1800,
        height: 1200,
        alt: "Producción audiovisual industrial de GIA Motion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GIA Motion — Ideas que se mueven",
    description: "Productora audiovisual, drone, streaming y experiencias 360°.",
    images: ["/images/industrial-aerial.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0c0d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
      addressLocality: "Lima",
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
        <SmoothScroll />
        <CursorGlow />
        <div className="scroll-progress" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
