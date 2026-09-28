import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/button";
import { CONTACT_LABEL, WHATSAPP_URL } from "./contact";
import { LoveHearts } from "./love-hearts";
import { Reveal } from "./reveal";

/** Layout family: closing call to action. Same theme as the rest of the page. */
export function Footer() {
  return (
    <footer id="contacto" className="scroll-mt-16 border-t border-line bg-surface-2">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <Reveal>
          <p className="eyebrow">Empieza hoy</p>
          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
            <h2 className="display text-[2.1rem] leading-[1.08] sm:text-5xl lg:col-span-7 lg:text-[3.5rem]">
              Tu inglés académico empieza con una conversación.
            </h2>
            <div className="lg:col-span-5">
              <p className="max-w-[42ch] leading-relaxed text-text-muted">
                Escríbeme y descubre en qué punto de la escala A1 a C1 estás
                hoy.
              </p>
              <ButtonLink href={WHATSAPP_URL} external className="mt-8">
                <WhatsappLogo size={20} weight="fill" />
                {CONTACT_LABEL} por WhatsApp
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row lg:px-8">
          <p className="display text-base">Raúl Pinillos</p>
          <p className="text-xs text-text-muted">
            Design with <LoveHearts /> by{" "}
            <a
              href="https://www.sielpsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-text underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
            >
              Sielp Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
