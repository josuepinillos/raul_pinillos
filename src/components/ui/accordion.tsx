"use client";

import { Plus } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

/** Enter 240ms, exit 180ms: the system responds faster than the user decides. */
export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = useReducedMotion();
  const baseId = useId();

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div key={item.question} className="border-b border-line">
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex min-h-11 w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="display text-lg sm:text-xl">{item.question}</span>
              <Plus
                size={20}
                weight="regular"
                className={`shrink-0 transition-[transform,color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                  isOpen ? "rotate-45 text-accent" : "text-text-muted group-hover:text-text"
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.24,
                    ease: [0.16, 1, 0.3, 1],
                    opacity: { duration: 0.18 },
                  }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[60ch] pb-7 leading-relaxed text-text-muted">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
