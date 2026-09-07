import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
};

/* Sharp corners across the page: one radius system, radius 0. */
const base =
  "pressable inline-flex min-h-11 items-center justify-center gap-2.5 whitespace-nowrap px-7 py-3.5 text-[0.95rem] font-semibold";

const variants = {
  primary: "bg-accent text-on-accent hover:bg-text",
  ghost: "border border-line text-text hover:border-text",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
