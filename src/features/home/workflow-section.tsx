import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { workflow } from "@/content/site-content";

export function WorkflowSection() {
  return (
    <section className="process section section--dark">
      <div className="shell">
        <SectionHeading
          index="06"
          eyebrow="Nuestro proceso"
          title={<>Del desafío<br /><em>a la pantalla.</em></>}
          side={<p>Un proceso claro mantiene la creatividad enfocada y la producción bajo control.</p>}
        />
        <div className="process__grid">
          {workflow.map((step, index) => (
            <Reveal key={step.number} className="process-card" delay={index * 0.06}>
              <span>{step.number}</span>
              <div className="process-card__line"><i /></div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
