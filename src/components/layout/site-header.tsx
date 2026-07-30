"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { navigation, siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const pageContent = [document.querySelector("main"), document.querySelector("footer")]
      .filter((element): element is HTMLElement => element instanceof HTMLElement);
    pageContent.forEach((element) => { element.inert = open; });

    return () => {
      document.body.classList.remove("menu-open");
      pageContent.forEach((element) => { element.inert = false; });
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (activeEntry) setActiveHref(`/#${activeEntry.target.id}`);
      },
      { rootMargin: "-30% 0px -58% 0px", threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <div className="site-header__inner">
        <Logo priority />
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.slice(1).map((item) => (
            <Link key={item.href} href={item.href} aria-current={activeHref === item.href ? "location" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" href="/#contacto">
          Hablemos <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mobile-menu__nav" aria-label="Navegación móvil">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduceMotion ? 0 : 0.08 + index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    aria-current={activeHref === item.href ? "location" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span>0{index + 1}</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mobile-menu__footer">
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              <span>{siteConfig.contact.city}</span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
