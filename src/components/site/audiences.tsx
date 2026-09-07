"use client";

import { motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";
import { SectionHeading } from "./section-heading";

const audiences = [
  {
    key: "adolescentes",
    tab: "Adolescentes",
    age: "13 a 17 años",
    body: "Refuerzo que va más allá del colegio: bases sólidas, confianza para hablar y una ventaja real para su futuro académico.",
    focus: "Gramática asentada, comprensión lectora y práctica oral guiada.",
  },
  {
    key: "jovenes",
    tab: "Jóvenes",
    age: "18 a 25 años",
    body: "Universidad, intercambios y certificaciones internacionales. El inglés que exigen las oportunidades que estás persiguiendo.",
    focus: "Preparación de exámenes, escritura académica y fluidez conversacional.",
  },
  {
    key: "adultos",
    tab: "Adultos",
    age: "26 años en adelante",
    body: "Nunca es tarde para empezar, ni para retomar. Clases que respetan tu tiempo, tu experiencia y tus objetivos profesionales.",
    focus: "Inglés de trabajo, reuniones, correos y presentaciones.",
  },
];

/** Layout family: tabs. Motion here communicates a state transition. */
export function Audiences() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const baseId = useId();
  const current = audiences[active];

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading title="Clases para adolescentes, jóvenes y adultos." />

        <div
          role="tablist"
          aria-label="Grupos de estudiantes"
          className="mt-14 flex flex-wrap gap-2 border-b border-line"
        >
          {audiences.map((audience, i) => {
            const selected = i === active;
            return (
              <button
                key={audience.key}
                role="tab"
                id={`${baseId}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${i}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") {
                    setActive((active + 1) % audiences.length);
                  }
                  if (e.key === "ArrowLeft") {
                    setActive((active - 1 + audiences.length) % audiences.length);
                  }
                }}
                className={`pressable relative -mb-px min-h-11 px-5 py-3 text-base font-medium ${
                  selected ? "text-text" : "text-text-muted hover:text-text"
                }`}
              >
                {audience.tab}
                {selected ? (
                  <motion.span
                    layoutId={`${baseId}-underline`}
                    className="absolute inset-x-0 -bottom-px h-0.5 bg-accent"
                    transition={
                      reduced
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 320, damping: 30 }
                    }
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        {/* Keyed remount, no exit animation to wait on: the panel always
            matches the selected tab even if motion is interrupted. */}
        <motion.div
          key={current.key}
          role="tabpanel"
          id={`${baseId}-panel-${active}`}
          aria-labelledby={`${baseId}-tab-${active}`}
          initial={reduced ? { opacity: 0 } : { opacity: 0, transform: "translateY(10px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid min-h-[13rem] grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12"
        >
          <p className="display text-2xl text-text-muted lg:col-span-4 lg:text-3xl">
            {current.age}
          </p>
          <div className="lg:col-span-8">
            <p className="display max-w-[26ch] text-2xl leading-snug lg:text-[2rem]">
              {current.body}
            </p>
            <p className="mt-6 max-w-[52ch] leading-relaxed text-text-muted">
              {current.focus}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
