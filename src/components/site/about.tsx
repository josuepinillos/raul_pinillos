import { ImageReveal } from "./image-reveal";
import { Reveal } from "./reveal";

/**
 * Layout family: wide photograph carrying the section, with the reading matter
 * split into two columns underneath. The 16:9 frame sets the full width here,
 * which is why the text runs below it rather than beside it.
 */
export function About() {
  return (
    <section id="sobre" className="scroll-mt-16 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <h2 className="display max-w-3xl text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
            Sobre mí.
          </h2>
        </Reveal>

        <ImageReveal
          src="/assets/secundario.png"
          alt="Raúl Pinillos dando una clase de inglés frente a una pizarra digital"
          sizes="(min-width: 1152px) 1152px, 92vw"
          className="mt-12 aspect-[16/9] w-full"
          imageClassName="object-center"
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-text-muted">
              <p>
                Más de tres décadas frente a un aula me enseñaron algo que
                ningún libro recoge: cada estudiante aprende distinto, y mi
                trabajo es encontrar ese camino particular.
              </p>
              <p>
                He acompañado a generaciones de estudiantes, del primer
                saludo tímido a la redacción de ensayos académicos en inglés.
                Hoy dedico ese oficio a clases virtuales y personalizadas,
                donde toda mi atención está puesta en una sola persona.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-5">
            <figure className="border-l-2 border-accent pl-7">
              <blockquote className="display text-2xl leading-snug lg:text-[1.75rem]">
                Mi trabajo no es enseñar inglés. Es lograr que tú lo hables.
              </blockquote>
              <figcaption className="mt-4 text-sm text-text-muted">
                Raúl Pinillos
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
