import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "./reveal";

const items = [
  {
    question: "¿Necesito saber algo de inglés para empezar?",
    answer:
      "No. El programa parte desde cero absoluto. En la primera clase evaluamos tu punto de partida real y armamos el plan desde ahí, sin suposiciones y sin saltarse fundamentos.",
  },
  {
    question: "¿Cómo funcionan las clases virtuales?",
    answer:
      "Son clases en vivo, por videollamada, uno a uno conmigo. Solo necesitas una conexión estable y un lugar tranquilo. Comparto los materiales en cada sesión y quedan disponibles para ti.",
  },
  {
    question: "¿Cuánto tiempo toma llegar a un nivel avanzado?",
    answer:
      "Depende de tu punto de partida, tu ritmo y tu constancia. Lo que sí es fijo: objetivos medibles por nivel, para que en todo momento sepas cuánto has avanzado y cuánto falta.",
  },
  {
    question: "¿Trabajas con adolescentes?",
    answer:
      "Sí. Enseño a adolescentes desde los 13 años, a jóvenes universitarios y a adultos de cualquier edad. Adapto el enfoque y los materiales a cada etapa.",
  },
  {
    question: "¿Cómo sé cuál es mi nivel actual?",
    answer:
      "La primera sesión incluye una evaluación conversacional, sin exámenes intimidantes: una charla guiada que permite ubicarte con precisión en la escala A1 a C1.",
  },
];

/** Layout family: headline column beside an interactive accordion. */
export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Reveal className="lg:col-span-4">
          <h2 className="display text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-[3rem]">
            Preguntas frecuentes.
          </h2>
        </Reveal>
        <Reveal delay={0.06} className="lg:col-span-8">
          <Accordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}
