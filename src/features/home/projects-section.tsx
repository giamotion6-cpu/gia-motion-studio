import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/content/site-content";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="projects section section--black">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="Trabajo seleccionado"
          title={<>Proyectos que<br /><em>dejan señal.</em></>}
          side={<Link className="arrow-link" href="#contacto">Inicia un proyecto <ArrowUpRight size={18} aria-hidden="true" /></Link>}
        />

        <div className="projects__list">
          {projects.map((project, index) => (
            <Reveal key={project.number} className="project-card" delay={index * 0.05}>
              <article>
                <div className="project-card__media">
                  <Image
                    src={project.image}
                    alt={`${project.title}, proyecto de ${project.category}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 88vw"
                  />
                  <div className="project-card__wash" style={{ "--project-accent": project.accent } as React.CSSProperties} />
                  <span className="project-card__number">{project.number}</span>
                  <span className="project-card__action"><ArrowUpRight aria-hidden="true" /></span>
                </div>
                <div className="project-card__meta">
                  <div>
                    <p>{project.category}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.description}</p>
                  <span>{project.location}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
