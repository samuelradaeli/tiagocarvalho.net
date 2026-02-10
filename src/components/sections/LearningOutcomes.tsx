import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Divider } from "@/components/ui/Divider";
import { Crosshair, Swords, RotateCcw, Sunrise, Mountain } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const outcomes: { icon: LucideIcon; text: string }[] = [
  { icon: Crosshair, text: "Reconstruir seu FOCO e força de vontade" },
  { icon: Swords, text: "Dominar seus desejos e impulsos" },
  { icon: RotateCcw, text: "Vencer o ciclo prazer-culpa-sofrimento" },
  { icon: Sunrise, text: "Retomar propósito e clareza" },
  { icon: Mountain, text: "Se tornar a versão mais forte que você sabe que existe aí dentro" },
];

export function LearningOutcomes() {
  return (
    <SectionWrapper className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Divider />

        <h2 className="text-center font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
          Você vai aprender a:
        </h2>

        <div className="mt-12 space-y-4">
          {outcomes.map((outcome) => (
            <div
              key={outcome.text}
              className="flex items-start gap-4 rounded-lg border border-gold/10 bg-surface p-5 transition-all hover:border-gold/30"
            >
              <outcome.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <p className="text-sm font-medium text-foreground sm:text-base">
                {outcome.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
