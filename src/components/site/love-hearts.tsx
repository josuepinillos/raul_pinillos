"use client";

import { Heart } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

/**
 * "love" in the footer credit, with three small hearts rising and fading
 * above it. Purpose: delight — this text sits at the very bottom of the
 * page, so most visitors see it once per session at most, which is exactly
 * the rare tier the budget for this kind of flourish is meant for.
 *
 * Triggers twice: automatically the first time it scrolls into view (same
 * IntersectionObserver pattern as ImageReveal, so a visitor never has to
 * find it by accident), and again on every hover for anyone who wants to
 * see it a second time. The animation itself lives in globals.css as CSS
 * keyframes — cheaper than driving three particles from JS, and it keeps
 * running smoothly even if the page is busy elsewhere.
 */
export function LoveHearts() {
  const ref = useRef<HTMLSpanElement>(null);
  const [emerged, setEmerged] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    /* No negative rootMargin here (unlike ImageReveal): this text sits at the
       true bottom of the document, so a shrunk root can end up impossible to
       satisfy — the page simply has no more room to scroll the element into
       it. A plain "any part visible" threshold is what this needs. */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEmerged(true);
          observer.disconnect();
        }
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      data-emerged={emerged}
      className="love-hearts relative inline-block"
    >
      love
      <span aria-hidden className="heart">
        <Heart size={11} weight="fill" />
      </span>
      <span aria-hidden className="heart">
        <Heart size={9} weight="fill" />
      </span>
      <span aria-hidden className="heart">
        <Heart size={11} weight="fill" />
      </span>
    </span>
  );
}
