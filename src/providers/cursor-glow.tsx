"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const precisePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!glow || !precisePointer.matches || reducedMotion.matches) return;

    const onPointerMove = (event: PointerEvent) => {
      glow.style.setProperty("--cursor-x", `${event.clientX}px`);
      glow.style.setProperty("--cursor-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
