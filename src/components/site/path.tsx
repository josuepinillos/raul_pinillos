"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const stops = [
  {
    level: "A1",
    title: "Fundamentos",
    body: "Pronunciación, vocabulario esencial y tus primeras conversaciones.",
  },
  {
    level: "A2",
    title: "Vida cotidiana",
    body: "Describes tu rutina, haces preguntas y resuelves situaciones diarias.",
  },
  {
    level: "B1",
    title: "Independencia",
    body: "Sostienes conversaciones completas y entiendes textos reales sin traducir.",
  },
  {
    level: "B2",
    title: "Fluidez",
    body: "Hablas con naturalidad sobre casi cualquier tema, dentro y fuera del trabajo.",
  },
  {
    level: "C1",
    title: "Dominio académico",
    body: "Escritura académica, matices y precisión. El nivel que piden universidades y exámenes.",
  },
];

/**
 * Layout family: progress timeline. The rule fills as you scroll, which is the
 * page's one piece of storytelling motion: the recorrido completes as you read it.
 */
export function Path() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.75"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section
      id="camino"
      className="scroll-mt-16 border-y border-line bg-surface-2 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          title="Tu camino hacia un nivel académico avanzado."
          lead="Cinco niveles, un solo recorrido. La línea se completa a tu ritmo, pero siempre se completa."
        />
        <div ref={ref} className="relative mt-20 pl-8 sm:pl-14">
          <div aria-hidden className="absolute bottom-0 left-0 top-0 w-px bg-line" />
          <motion.div
            aria-hidden
            style={reduced ? { scaleY: 1 } : { scaleY: progress }}
            className="absolute bottom-0 left-0 top-0 w-px origin-top bg-accent"
          />
          <ol className="space-y-14 lg:space-y-16">
            {stops.map((stop, i) => (
              <li key={stop.level} className="grid grid-cols-1 gap-2 sm:grid-cols-12 sm:gap-8">
                <Reveal className="sm:col-span-3">
                  <span
                    className={`display text-4xl lg:text-5xl ${
                      i === stops.length - 1 ? "text-accent" : "text-text"
                    }`}
                  >
                    {stop.level}
                  </span>
                </Reveal>
                <Reveal delay={0.06} className="sm:col-span-9">
                  <h3 className="display text-xl lg:text-2xl">{stop.title}</h3>
                  <p className="mt-2 max-w-[56ch] leading-relaxed text-text-muted">
                    {stop.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
