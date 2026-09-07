"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ImageRevealProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  /** "cover" (default) crops to fill the box; "contain" never crops — for
   * photos that must render in full, sized instead via the box's own
   * aspect-ratio. A single prop instead of an object-fit utility in
   * imageClassName, since two object-fit classes at equal specificity is an
   * order-of-declaration tie in Tailwind, not an HTML-order override. */
  fit?: "cover" | "contain";
};

/**
 * Photograph that wipes open from the bottom edge with clip-path. Driven by
 * IntersectionObserver plus a CSS transition, so the wipe runs off the main
 * thread. Purpose: the photo arrives as the section arrives, which gives the
 * page its one moment of storytelling. The image never moves, so nothing shifts.
 */
export function ImageReveal({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
  imageClassName = "",
  fit = "cover",
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (priority) {
      const id = window.setTimeout(() => setRevealed(true), 120);
      return () => window.clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [priority]);

  return (
    <div
      ref={ref}
      data-revealed={revealed}
      className={`image-reveal relative overflow-hidden bg-surface-2 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`${fit === "cover" ? "object-cover" : "object-contain"} ${imageClassName}`}
      />
    </div>
  );
}
