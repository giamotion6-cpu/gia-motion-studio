"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const KineticHalo = dynamic(
  () => import("./kinetic-halo").then((module) => module.KineticHalo),
  {
    ssr: false,
    loading: () => <div className="hero-orbit hero-orbit--loading" />,
  },
);

export function HeroScene() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(
      "(min-width: 821px) and (prefers-reduced-motion: no-preference)",
    );
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return enabled ? <KineticHalo /> : <div className="hero-orbit hero-orbit--fallback" />;
}
