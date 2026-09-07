"use client";

import { motion, useReducedMotion } from "motion/react";
import { ImageReveal } from "./image-reveal";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, transform: "translateY(16px)" },
  show: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const itemReduced = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25 } },
};

/**
 * Split hero. The photograph holds the right side and bleeds off the right
 * edge, while the type stays on the page grid so the hero reads as one
 * composition rather than a band stacked under a headline.
 *
 * The left padding tracks the same 72rem container the rest of the page uses,
 * so the headline lines up with every section below it.
 *
 * PHOTO: fondo-final.png is a wide 3:2 portrait with the sitter composed off
 * to one side, not a tight crop-to-fill source — the frame is part of the
 * shot. Sizing the box to that same 3:2 ratio (fit="contain") shows the
 * whole photograph exactly as delivered rather than cropping it to fill a
 * taller column, which is why this hero no longer forces a full-viewport
 * height: that only made sense when the photo was cropped to cover it.
 */
export function Hero() {
  const reduced = useReducedMotion();
  const variants = reduced ? itemReduced : item;

  return (
    <section className="grid gap-10 border-b border-line lg:grid-cols-2 lg:items-center lg:gap-0">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        /* Percentage padding resolves against the grid, not the viewport, so
           the headline lands on the same 72rem gutter as every section below
           without the scrollbar throwing the alignment off. */
        className="flex flex-col justify-center px-6 pb-14 pt-28 lg:pb-16 lg:pl-[max(2rem,calc(100%-36rem+2rem))] lg:pr-14 lg:pt-28"
      >
        <motion.p variants={variants} className="eyebrow">
          Clases de inglés online
        </motion.p>
        <motion.h1
          variants={variants}
          className="display mt-6 text-[2.35rem] leading-[1.1] sm:text-[2.75rem] lg:text-[2.5rem] xl:text-[2.9rem]"
        >
          Aprende inglés desde cero hasta un nivel académico avanzado.
        </motion.h1>
        <motion.p
          variants={variants}
          className="mt-7 max-w-[44ch] text-lg leading-relaxed text-text-muted"
        >
          Soy Raúl Pinillos, profesor de inglés con más de 30 años de
          experiencia. Doy clases virtuales, uno a uno.
        </motion.p>
      </motion.div>

      <ImageReveal
        src="/assets/fondo-final.png"
        alt="Raúl Pinillos, profesor de inglés, sonriendo"
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority
        fit="contain"
        className="aspect-[3/2] w-full"
      />
    </section>
  );
}
