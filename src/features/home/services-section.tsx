"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/content/site-content";

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = services[active];

  return (
    <section id="servicios" className="services section section--dark">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Lo que hacemos"
          title={<>Un equipo.<br /><em>Muchas posibilidades.</em></>}
          side={<p>Desde la primera idea hasta la entrega final, integramos estrategia, producción y tecnología.</p>}
        />

        <div className="services__layout">
          <div className="services__list">
            {services.map((service, index) => (
              <button
                key={service.slug}
                className={`service-row${active === index ? " service-row--active" : ""}`}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                aria-pressed={active === index}
              >
                <span className="service-row__number">{service.number}</span>
                <span className="service-row__content">
                  <strong>{service.title}</strong>
                  <small>{service.short}</small>
                </span>
                <span className="service-row__icon"><ArrowUpRight aria-hidden="true" /></span>
              </button>
            ))}
          </div>

          <div className="services__stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                className="services__visual"
                initial={reduceMotion ? false : { opacity: 0, scale: 1.035, clipPath: "inset(0 0 8% 0)" }}
                animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0)" }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985, clipPath: "inset(8% 0 0 0)" }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image src={current.image} alt="" fill sizes="(max-width: 900px) 100vw, 40vw" />
                <div className="services__visual-overlay" />
                <div className="services__visual-copy">
                  <p>{current.description}</p>
                  <div>{current.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
