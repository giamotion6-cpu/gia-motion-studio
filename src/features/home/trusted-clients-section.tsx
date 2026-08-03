"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
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

interface Brand {
  name: string;
  logo: string;
}

interface CarouselProps {
  brands: Brand[];
  groupTitle: string;
}

function Carousel({ brands, groupTitle }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const maxIndex = Math.max(0, brands.length - 1);
  const currentIndexClamped = Math.max(0, Math.min(currentIndex, maxIndex));

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    if (clampedIndex !== currentIndexClamped) {
      setIsAnimating(true);
      setCurrentIndex(clampedIndex);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [currentIndexClamped, maxIndex, isAnimating]);

  const goToPrev = useCallback(() => {
    if (currentIndexClamped > 0) {
      goToSlide(currentIndexClamped - 1);
    } else if (maxIndex > 0) {
      goToSlide(maxIndex);
    }
  }, [currentIndexClamped, maxIndex, goToSlide]);

  const goToNext = useCallback(() => {
    if (currentIndexClamped < maxIndex) {
      goToSlide(currentIndexClamped + 1);
    } else if (maxIndex > 0) {
      goToSlide(0);
    }
  }, [currentIndexClamped, maxIndex, goToSlide]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrev();
    if (e.key === "ArrowRight") goToNext();
  }, [goToPrev, goToNext]);

  useEffect(() => {
    if (brands.length <= 1 || isPaused) return;
    const autoplay = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4200);
    return () => clearInterval(autoplay);
  }, [brands.length, isPaused, maxIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (brands.length <= 1) return;
    const deltaX = e.touches[0].clientX - touchStartX.current;
    const deltaY = e.touches[0].clientY - touchStartY.current;
    const threshold = 50;
    // Only prevent default if horizontal swipe clearly exceeds vertical (intentional carousel swipe)
    if (Math.abs(deltaX) > threshold && Math.abs(deltaX) > Math.abs(deltaY)) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (brands.length <= 1) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 50;
    if (deltaX < -threshold) goToNext();
    else if (deltaX > threshold) goToPrev();
    setIsPaused(false);
  };

  const deckCards = useMemo(() => {
    const visibleDepth = 2;
    const results: Array<{ brand: Brand; deckIndex: number; offset: number }> = [];

    for (let offset = -visibleDepth; offset <= visibleDepth; offset += 1) {
      const deckIndex = (currentIndexClamped + offset + brands.length) % brands.length;
      results.push({
        brand: brands[deckIndex],
        deckIndex,
        offset,
      });
    }

    return results;
  }, [brands, currentIndexClamped]);

  if (brands.length === 0) return null;

  return (
    <div
      className="trusted-carousel"
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label={`Carrusel de ${groupTitle}`}
      aria-roledescription="carousel"
    >
      <div className="trusted-carousel__viewport">
        <div className="trusted-carousel__track" aria-live="polite">
          {deckCards.map(({ brand: client, deckIndex, offset }) => {
            const depth = Math.abs(offset);
            const isActive = offset === 0;
            return (
              <article
                className={`trusted-brand-card${isActive ? " trusted-brand-card--active" : ""}`}
                key={`${client.name}-${deckIndex}-${offset}`}
                style={{ "--offset": offset, "--depth": depth } as React.CSSProperties}
                aria-hidden={!isActive}
              >
                <div className="trusted-brand-card__status" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="trusted-brand-card__media">
                  <Image
                    src={client.logo}
                    alt={`Logo de ${client.name}`}
                    width={300}
                    height={160}
                    className="trusted-brand-card__image"
                    loading={isActive ? "eager" : "lazy"}
                  />
                </div>

                <div className="trusted-brand-card__body">
                  <p className="trusted-brand-card__eyebrow">Cliente aliado</p>
                  <h4 className="trusted-brand-card__title">{client.name}</h4>
                  <p className="trusted-brand-card__copy">
                    Empresa que confia en nuestro trabajo audiovisual y en nuestra comunicacion de marca.
                  </p>
                  <div className="trusted-brand-card__cta">Marca aliada</div>
                </div>

                <div className="trusted-brand-card__actions" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {brands.length > 1 && (
        <>
          <button
            className="trusted-carousel__btn trusted-carousel__btn--prev"
            onClick={goToPrev}
            aria-label="Marcas anteriores"
            disabled={isAnimating}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className="trusted-carousel__btn trusted-carousel__btn--next"
            onClick={goToNext}
            aria-label="Marcas siguientes"
            disabled={isAnimating}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="trusted-carousel__dots" aria-label="Paginación">
            {Array.from({ length: brands.length }, (_, i) => (
              <button
                key={i}
                className={`trusted-carousel__dot${currentIndexClamped === i ? " trusted-carousel__dot--active" : ""}`}
                onClick={() => goToSlide(i)}
                aria-label={`Ir a grupo ${i + 1}`}
                aria-current={currentIndexClamped === i ? "true" : "false"}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function TrustedClientsSection() {
  const allClients = trustedClients.flatMap<TrustedClient>((group) => [...group.items]);
  const brands = allClients
    .map((client) => ({ name: client.name, logo: resolveLogoSrc(client.logo) }))
    .filter((client) => client.logo !== null) as Brand[];
  const unlisted = allClients.filter((client) => !resolveLogoSrc(client.logo));

  return (
    <section id="empresas" className="trusted section section--black" aria-label="Empresas que confían en GIA Motion">
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="Trayectoria"
          title={<>Empresas que<br /><em>trabajan con nosotros.</em></>}
        />
      </div>

      <div className="trusted__groups">
        <Reveal className="trusted-group" delay={0.08}>
          <div className="shell">
            <div className="trusted-group__heading">
              <span>01</span>
              <h3>Empresas que trabajan con nosotros</h3>
            </div>
          </div>

          <Carousel brands={brands} groupTitle="Empresas que trabajan con nosotros" />

          {unlisted.length > 0 && (
            <div className="shell">
              <p className="trusted-more">
                <span className="trusted-more__label">+ También trabajamos con</span>
                {" " + unlisted.map((client) => client.name).join(" · ")}
              </p>
            </div>
          )}

          <p className="sr-only">{allClients.map((client) => client.name).join(", ")}</p>
        </Reveal>
      </div>
    </section>
  );
}
