import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/content/site-content";

export function StatsSection() {
  return (
    <section className="stats section section--black-raised" aria-label="Cifras de GIA Motion">
      <div className="shell stats__grid">
        {stats.map((stat, index) => (
          <Reveal className="stat" key={stat.label} delay={index * 0.06}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
