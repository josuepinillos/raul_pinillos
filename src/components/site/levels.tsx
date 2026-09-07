"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { SectionHeading } from "./section-heading";

const levels = [
  {
    badge: "A1 a A2",
    title: "Desde cero",
    body: "Nunca estudiaste inglés, o lo poco que aprendiste quedó atrás. Empezamos por los fundamentos: pronunciación, vocabulario esencial y frases que usarás desde la primera semana.",
  },
  {
    badge: "B1 a B2",
    title: "Intermedio",
    body: "Entiendes bastante, pero al hablar te trabas. Aquí el trabajo es soltura: conversación constante, corrección precisa y la confianza de sostener cualquier charla en inglés.",
  },
  {
    badge: "C1",
    title: "Académico avanzado",
    body: "Preparación para exámenes internacionales, universidad y entornos profesionales. Escritura académica, matices del idioma y un inglés que abre puertas.",
  },
];

/** Layout family: editorial rows. No cards, no elevation. */
export function Levels() {
  const reduced = useReducedMotion();

  return (
    <section id="niveles" className="scroll-mt-16 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          title="¿En qué nivel te encuentras?"
          lead="No importa tu punto de partida. Cada nivel tiene su propio camino, y lo diseñamos juntos en la primera clase."
        />
        <div className="mt-16 border-t border-line">
          {levels.map((level, i) => (
            <motion.article
              key={level.title}
              initial={
                reduced ? { opacity: 0 } : { opacity: 0, transform: "translateY(16px)" }
              }
              whileInView={{ opacity: 1, transform: "translateY(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: reduced ? 0.2 : 0.5,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              /* Only the hover tint bleeds past the type, via a pseudo-element
                 behind the content. The rules stay on the page grid, so the
                 fill never sits flush against the level label. */
              className="group relative isolate grid grid-cols-1 gap-3 border-b border-line py-10 before:absolute before:inset-y-0 before:-left-5 before:-right-5 before:-z-10 before:bg-transparent before:transition-colors before:duration-200 before:content-[''] hover:before:bg-surface-2 sm:grid-cols-12 sm:gap-8 lg:py-12"
            >
              <p className="display text-2xl text-accent sm:col-span-3 lg:text-[1.75rem]">
                {level.badge}
              </p>
              <div className="sm:col-span-9">
                <h3 className="display flex items-center gap-3 text-2xl lg:text-3xl">
                  {level.title}
                  <ArrowRight
                    size={20}
                    weight="regular"
                    className="-translate-x-1 text-accent opacity-0 transition-[transform,opacity] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </h3>
                <p className="mt-3 max-w-[62ch] leading-relaxed text-text-muted">
                  {level.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
