import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  Eclipse,
  Ghost,
  Unplug,
  Skull,
  Wind,
  Orbit,
} from "lucide-react";

const issues = [
  { icon: Eclipse, text: "Vazio existencial" },
  { icon: Ghost, text: "Sensação de viver no piloto automático" },
  {
    icon: Unplug,
    text: "Engajamento em vícios (scroll, pornografia, maconha, procrastinação)",
  },
  { icon: Skull, text: "Desmotivação, perda de vontade" },
  { icon: Wind, text: "Dificuldade de focar, começar, terminar" },
  { icon: Orbit, text: "Falta de propósito real" },
];

export function CommonIssues() {
  return (
    <SectionWrapper className="px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-4 sm:grid-cols-2">
          {issues.map((issue) => (
            <div
              key={issue.text}
              className="flex items-start gap-4 rounded-lg border border-surface-light bg-surface/50 p-5 transition-colors hover:border-gold/20"
            >
              <issue.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                {issue.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-gold/20 bg-surface p-8 text-center">
          <p className="font-heading text-base leading-relaxed text-foreground sm:text-lg md:text-xl">
            E todas encontraram algo aqui que ninguém mais entrega:
            <br />
            <span className="mt-2 block text-gradient-gold font-semibold">
              Um caminho real, direto, prático.
            </span>
            <span className="mt-1 block text-muted">
              Baseado em virtudes, não em sedativos.
            </span>
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
