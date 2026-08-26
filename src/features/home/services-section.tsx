"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Film, Pause, Play, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/content/site-content";

function ServiceVideo({
  src,
  poster,
  isMuted,
  isPlaying,
  onPlay,
  onPause,
}: {
  src: string;
  poster: string;
  isMuted: boolean;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;
    if (isPlaying) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser blocked unmuted autoplay, mute and retry
          if (!video.muted) {
            video.muted = true;
            video.play().catch(() => {});
          }
        });
      }
    } else {
      video.pause();
    }
  }, [isMuted, isPlaying, src]);

  return (
    <video
      ref={videoRef}
      src={encodeURI(src)}
      autoPlay
      muted={isMuted}
      loop
      playsInline
      preload="auto"
      poster={poster}
      className="services__video"
      onPlay={onPlay}
      onPause={onPause}
    />
  );
}

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const reduceMotion = useReducedMotion();
  const current = services[active];

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

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
                onMouseEnter={() => {
                  setActive(index);
                  setIsPlaying(true);
                }}
                onFocus={() => {
                  setActive(index);
                  setIsPlaying(true);
                }}
                onClick={() => {
                  setActive(index);
                  setIsPlaying(true);
                }}
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
                {current.video ? (
                  <>
                    <ServiceVideo
                      key={current.video}
                      src={current.video}
                      poster={current.image}
                      isMuted={isMuted}
                      isPlaying={isPlaying}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    />

                    <div className="services__video-bar">
                      <div className="services__video-badge">
                        <span className="services__video-dot" />
                        <Film size={12} aria-hidden="true" />
                        <span>{current.videoLabel || "Video"}</span>
                      </div>

                      <div className="services__video-actions">
                        <button
                          type="button"
                          className="services__video-btn"
                          onClick={togglePlay}
                          aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                          title={isPlaying ? "Pausar video" : "Reproducir video"}
                        >
                          {isPlaying ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
                        </button>
                        <button
                          type="button"
                          className="services__video-btn"
                          onClick={toggleMute}
                          aria-label={isMuted ? "Activar audio" : "Silenciar audio"}
                          title={isMuted ? "Activar audio" : "Silenciar audio"}
                        >
                          {isMuted ? <VolumeX size={14} aria-hidden="true" /> : <Volume2 size={14} aria-hidden="true" />}
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <Image
                    src={current.image}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 40vw"
                    priority={active === 0}
                  />
                )}

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

