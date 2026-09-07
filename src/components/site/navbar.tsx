"use client";

import { List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { CONTACT_LABEL } from "./contact";

const links = [
  { href: "#niveles", label: "Niveles" },
  { href: "#metodo", label: "Método" },
  { href: "#camino", label: "Tu camino" },
  { href: "#sobre", label: "Sobre mí" },
  { href: "#faq", label: "Preguntas" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  /* Solid at all times: the hero photograph runs underneath the bar, and a
     transparent header would leave the nav links unreadable over it. */
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link href="#" className="display text-lg tracking-tight">
          Raúl Pinillos
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition-colors duration-200 hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink href="#contacto" className="!min-h-0 !px-5 !py-2.5 !text-sm">
            {CONTACT_LABEL}
          </ButtonLink>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen(!open)}
            className="pressable grid size-11 place-items-center text-text md:hidden"
          >
            {open ? <X size={22} weight="regular" /> : <List size={22} weight="regular" />}
          </button>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.nav
            id="menu-movil"
            aria-label="Principal móvil"
            initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{
              duration: 0.22,
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.16 },
            }}
            className="overflow-hidden border-t border-line bg-surface md:hidden"
          >
            <ul className="px-6 py-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="pressable flex min-h-12 items-center text-base font-medium text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
