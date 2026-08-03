"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useProgress } from "@react-three/drei";
import Image from "next/image";

const SESSION_KEY = "gia-intro-shown";
const CLIMB_TARGET = 92;
const CLIMB_DURATION = 2.6;
const MAX_WAIT_MS = 7000;
const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_CLIMB = [0.65, 0, 0.35, 1] as const;

export function IntroOverlay() {
  const [hidden, setHidden] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [climbDone, setClimbDone] = useState(false);
  const [displayPercent, setDisplayPercent] = useState(0);
  const { progress } = useProgress();
  const progressValue = useMotionValue(0);
  const barWidth = useTransform(progressValue, (v) => `${v}%`);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadyShown = sessionStorage.getItem(SESSION_KEY);

    if (reduceMotion || alreadyShown) {
      setHidden(true);
      return;
    }

    sessionStorage.setItem(SESSION_KEY, "1");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const climb = animate(progressValue, CLIMB_TARGET, {
      duration: CLIMB_DURATION,
      ease: EASE_CLIMB,
      onUpdate: (v) => setDisplayPercent(Math.round(v)),
      onComplete: () => setClimbDone(true),
    });

    const maxTimer = window.setTimeout(() => setExiting(true), MAX_WAIT_MS);

    return () => {
      climb.stop();
      window.clearTimeout(maxTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [progressValue]);

  useEffect(() => {
    if (hidden || exiting || !climbDone || progress < 100) {
      return;
    }

    const finish = animate(progressValue, 100, {
      duration: 0.35,
      ease: EASE_OUT,
      onUpdate: (v) => setDisplayPercent(Math.round(v)),
    });

    const timer = window.setTimeout(() => setExiting(true), 550);

    return () => {
      finish.stop();
      window.clearTimeout(timer);
    };
  }, [climbDone, progress, hidden, exiting, progressValue]);

  useEffect(() => {
    if (!exiting) {
      return;
    }
    document.body.style.overflow = "";
    const timer = window.setTimeout(() => setHidden(true), 650);
    return () => window.clearTimeout(timer);
  }, [exiting]);

  if (hidden) {
    return null;
  }

  return (
    <motion.div
      className="intro"
      aria-hidden="true"
      animate={{ opacity: exiting ? 0 : 1, scale: exiting ? 1.04 : 1 }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
      style={{ pointerEvents: exiting ? "none" : "auto" }}
    >
      <motion.div
        className="intro__glow"
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.1, 1] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="intro__mark"
        initial={{ opacity: 0, scale: 1.06, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: EASE_OUT }}
      >
        <Image src="/images/gia-logo.png" alt="GIA Motion" width={954} height={475} priority />
        <motion.span
          className="intro__mark-sheen"
          initial={{ x: "-140%" }}
          animate={{ x: "220%" }}
          transition={{ duration: 1.3, delay: 0.5, repeat: 1, repeatDelay: 1.2, ease: EASE_CLIMB }}
        />
      </motion.div>

      <motion.p
        className="intro__label"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: EASE_OUT }}
      >
        Cargando experiencia
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="intro__dot"
            animate={{ opacity: [0.25, 1, 0.25] }}
            transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.16, ease: "easeInOut" }}
          >
            .
          </motion.span>
        ))}
      </motion.p>

      <motion.div
        className="intro__bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.span className="intro__bar-fill" style={{ width: barWidth }} />
      </motion.div>

      <motion.span
        className="intro__percent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {displayPercent}%
      </motion.span>
    </motion.div>
  );
}
