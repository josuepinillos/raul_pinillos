import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

/* Sample testimonials, pending replacement with real student quotes. */
const featured = {
  quote:
    "Empecé sin saber presentarme en inglés. Dos años después aprobé el examen que necesitaba para mi maestría.",
  name: "Andrea Cavero",
  role: "Estudiante de posgrado",
};

const supporting = [
  {
    quote:
      "Mi hijo pasó de odiar el inglés del colegio a pedir que no se cancele su clase.",
    name: "Marisol Quispe",
    role: "Madre de un estudiante",
  },
  {
    quote:
      "A los 45 pensé que ya era tarde. Hoy dirijo reuniones en inglés con clientes del extranjero.",
    name: "Javier Talledo",
    role: "Gerente comercial",
  },
];

/** Layout family: one featured quote plus two supporting. Never three equal columns. */
export function Testimonials() {
  return (
    <section className="border-y border-line bg-surface-2 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading title="Lo que dicen sus estudiantes." />
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <figure className="h-full border-t-2 border-accent pt-8">
              <blockquote className="display text-2xl leading-snug lg:text-[2rem]">
                {featured.quote}
              </blockquote>
              <figcaption className="mt-8 text-sm">
                <span className="font-semibold text-text">{featured.name}</span>
                <span className="mt-1 block text-text-muted">{featured.role}</span>
              </figcaption>
            </figure>
          </Reveal>
          <div className="grid gap-10 lg:col-span-5">
            {supporting.map((t, i) => (
              <Reveal key={t.name} delay={0.06 + i * 0.06}>
                <figure className="border-t border-line pt-6">
                  <blockquote className="text-lg leading-relaxed text-text">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="font-semibold text-text">{t.name}</span>
                    <span className="mt-1 block text-text-muted">{t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
