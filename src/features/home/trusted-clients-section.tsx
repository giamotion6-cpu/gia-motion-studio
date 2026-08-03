import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { trustedClients } from "@/content/site-content";

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

export function TrustedClientsSection() {
  return (
    <section className="trusted section section--black" aria-label="Empresas que confían en GIA Motion">
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="Trayectoria"
          title={<>Empresas que<br /><em>confían en nosotros.</em></>}
        />

        <div className="trusted__groups">
          {trustedClients.map((group, groupIndex) => (
            <Reveal className="trusted-group" key={group.title} delay={groupIndex * 0.05}>
              <div className="trusted-group__heading">
                <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                <h3>{group.title}</h3>
              </div>

              <div className="trusted__grid">
                {group.items.map((client, clientIndex) => {
                  const logoSrc = resolveLogoSrc(client.logo);

                  return (
                    <Reveal
                      key={client.name}
                      className="trusted-card"
                      delay={groupIndex * 0.08 + clientIndex * 0.025}
                    >
                      <div className="trusted-card__logo">
                        {logoSrc ? (
                          <Image
                            src={logoSrc}
                            alt={`Logo de ${client.name}`}
                            width={200}
                            height={80}
                            className="trusted-card__logo-image"
                          />
                        ) : (
                          <span>Logo</span>
                        )}
                      </div>
                      <p>{client.name}</p>
                    </Reveal>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
