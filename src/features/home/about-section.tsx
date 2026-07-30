import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function AboutSection() {
  return (
    <section id="nosotros" className="about section section--black">
      <div className="shell">
        <div className="about__intro">
          <Reveal className="about__label">
            <span className="section-number">02</span>
            <p>Acerca de GIA</p>
          </Reveal>
          <Reveal className="about__statement" delay={0.08}>
            <p>
              No solo registramos lo que haces. <strong>Revelamos por qué importa.</strong>
            </p>
          </Reveal>
        </div>

        <div className="about__grid">
          <Reveal className="about__media">
            <Image
              src="/images/studio-gear.jpg"
              alt="Estudio profesional de producción audiovisual"
              fill
              sizes="(max-width: 768px) 100vw, 44vw"
            />
            <div className="about__media-badge">
              <span>GIA</span>
              <small>Motion Lab</small>
            </div>
          </Reveal>
          <Reveal className="about__copy" delay={0.12}>
            <p className="eyebrow">Estrategia · Técnica · Emoción</p>
            <h2>Historias visuales con precisión industrial.</h2>
            <div className="about__columns">
              <p>
                Somos una productora audiovisual de Cajamarca especializada en transformar procesos complejos en historias claras, humanas y memorables.
              </p>
              <p>
                Combinamos producción, fotografía, drone, streaming y experiencias inmersivas en un solo equipo listo para trabajar dentro y fuera de campo.
              </p>
            </div>
            <Link className="arrow-link" href="#contacto">
              Conoce cómo trabajamos <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          <span>PRODUCCIÓN</span><i>✦</i><span>DRONE</span><i>✦</i><span>STREAMING</span><i>✦</i><span>360°</span><i>✦</i>
          <span>PRODUCCIÓN</span><i>✦</i><span>DRONE</span><i>✦</i><span>STREAMING</span><i>✦</i><span>360°</span><i>✦</i>
        </div>
      </div>
    </section>
  );
}
