import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { ReelDialog } from "./reel-dialog";

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="metadata" poster="/images/industrial-aerial.jpg">
          <source src="/media/gia-reel.mp4" type="video/mp4" />
        </video>
        <div className="hero__media-overlay" />
      </div>
      <div className="hero__noise" aria-hidden="true" />

      <div className="hero__content shell">
        <div className="hero__kicker">
          <span className="signal-dot" />
          Productora audiovisual · Cajamarca, Perú
        </div>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__title-line"><span>Ideas que</span></span>
          <span className="hero__title-line hero__title-line--accent"><span>se mueven.</span></span>
        </h1>
        <div className="hero__bottom">
          <p className="hero__summary">
            Creamos imágenes, experiencias y tecnología audiovisual para marcas que necesitan ocupar la pantalla.
          </p>
          <div className="hero__actions">
            <Link className="button button--light" href="#proyectos">
              Ver proyectos <ArrowDownRight size={17} aria-hidden="true" />
            </Link>
            <ReelDialog />
          </div>
        </div>
      </div>

      <div className="hero__rail" aria-hidden="true">
        <span>Scroll para descubrir</span>
        <div className="hero__rail-line"><i /></div>
      </div>
      <div className="hero__index" aria-hidden="true">01 / 06</div>
    </section>
  );
}
