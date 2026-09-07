import { ChartLineUp, ChatCircleDots, Gauge, UserFocus } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const pillars = [
  {
    icon: UserFocus,
    title: "Clases uno a uno",
    body: "Nada de grupos donde te pierdes entre veinte voces. Cada clase se diseña alrededor de ti: tus objetivos, tus vacíos, tu forma de aprender.",
    span: "md:col-span-2",
    tone: "bg-accent text-on-accent",
    bodyTone: "text-on-accent/80",
  },
  {
    icon: Gauge,
    title: "A tu propio ritmo",
    body: "Avanzas cuando dominas, no cuando lo dicta un calendario.",
    span: "md:col-span-1",
    tone: "bg-surface-2 text-text",
    bodyTone: "text-text-muted",
  },
  {
    icon: ChatCircleDots,
    title: "Conversación desde el día uno",
    body: "Practicas en situaciones reales desde la primera clase, con corrección precisa y sin miedo al error.",
    span: "md:col-span-1",
    tone: "bg-surface-2 text-text",
    bodyTone: "text-text-muted",
  },
  {
    icon: ChartLineUp,
    title: "Seguimiento constante",
    body: "Objetivos medibles por nivel y retroalimentación clase a clase. Siempre sabes dónde estás y qué sigue.",
    span: "md:col-span-2",
    tone: "bg-accent-quiet text-text",
    bodyTone: "text-text-muted",
  },
];

/** Layout family: asymmetric bento, 4 items in exactly 4 cells, tinted variation. */
export function Method() {
  return (
    <section
      id="metodo"
      className="scroll-mt-16 border-y border-line bg-surface py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="El método"
          title="Treinta años de aula, ajustados a una sola persona."
          lead="No hay dos estudiantes iguales, así que no hay dos planes iguales. Estos son los cuatro principios que no cambian."
        />
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.06} className={pillar.span}>
              <article className={`flex h-full flex-col p-8 lg:p-10 ${pillar.tone}`}>
                <pillar.icon size={28} weight="light" />
                <h3 className="display mt-10 text-xl lg:text-2xl">{pillar.title}</h3>
                <p className={`mt-3 max-w-[46ch] leading-relaxed ${pillar.bodyTone}`}>
                  {pillar.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
