import { Reveal } from "./reveal";

type SectionHeadingProps = {
  /** Rationed across the page: only 3 of 10 sections pass one. Never a number. */
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
};

/** Headline stacked over its lead. No split header, no corner paragraph. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
      <h2 className="display max-w-3xl text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
      {lead ? (
        <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-text-muted">
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
