import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { trustedClients } from "@/content/site-content";
import type { TrustedClient } from "@/types/content";

function resolveLogoSrc(logo?: string) {
  const value = logo?.trim();

  if (!value) {
    return null;
  }

  if (value.endsWith("/")) {
    return null;
  }

  if (value.startsWith("/") || value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `/${value}`;
}

function loopBrands(items: { name: string; logo: string }[], minLength = 6) {
  if (items.length === 0) {
    return [];
  }

  const looped: { name: string; logo: string }[] = [];
  while (looped.length < minLength) {
    looped.push(...items);
  }

  return looped;
}

export function TrustedClientsSection() {
  return (
    <section id="empresas" className="trusted section section--black" aria-label="Empresas que confían en GIA Motion">
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="Trayectoria"
          title={<>Empresas que<br /><em>confían en nosotros.</em></>}
        />
      </div>

      <div className="trusted__groups">
        {trustedClients.map((group, groupIndex) => {
          const brands = group.items
            .map((client) => ({ name: client.name, logo: resolveLogoSrc(client.logo) }))
            .filter((client) => client.logo !== null) as { name: string; logo: string }[];
          const unlisted = group.items.filter((client) => !resolveLogoSrc(client.logo));

          const half = loopBrands(brands);
          const track = [...half, ...half];
          const duration = Math.max(28, half.length * 4.2);
          const reverse = groupIndex % 2 === 1;

          return (
            <Reveal className="trusted-group" key={group.title} delay={groupIndex * 0.05}>
              <div className="shell">
                <div className="trusted-group__heading">
                  <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                  <h3>{group.title}</h3>
                </div>
              </div>

              {track.length > 0 && (
                <div
                  className={`trusted-marquee${reverse ? " trusted-marquee--reverse" : ""}`}
                  style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
                >
                  <ul className="trusted-marquee__track" aria-hidden="true">
                    {track.map((client, index) => (
                      <li className="trusted-brand-card" key={`${client.name}-${index}`}>
                        <Image
                          src={client.logo}
                          alt={`Logo de ${client.name}`}
                          width={220}
                          height={100}
                          className="trusted-brand-card__image"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {unlisted.length > 0 && (
                <div className="shell">
                  <p className="trusted-more">
                    <span className="trusted-more__label">+ También trabajamos con</span>
                    {" " + unlisted.map((client) => client.name).join(" · ")}
                  </p>
                </div>
              )}

              <p className="sr-only">{group.items.map((client) => client.name).join(", ")}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
