import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Divider } from "@/components/ui/Divider";
import { Crosshair, Swords, RotateCcw, Sunrise, Mountain } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const outcomes: { icon: LucideIcon; text: string; highlight: string }[] = [
  { icon: Crosshair, highlight: "FOCO", text: "Reconstruir seu foco e força de vontade" },
  { icon: Swords, highlight: "DOMÍNIO", text: "Dominar seus desejos e impulsos" },
  { icon: RotateCcw, highlight: "LIBERDADE", text: "Vencer o ciclo prazer-culpa-sofrimento" },
  { icon: Sunrise, highlight: "PROPÓSITO", text: "Retomar propósito e clareza" },
  { icon: Mountain, highlight: "FORÇA", text: "Se tornar a versão mais forte que você sabe que existe aí dentro" },
];

export function LearningOutcomes() {
  return (
    <SectionWrapper className="px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <Divider />

        <h2 className="text-center impact-text font-heading">
          <span className="text-foreground">Você vai</span>{" "}
          <span className="text-gradient-gold">aprender a:</span>
        </h2>

        <div className="mt-14 space-y-5">
          {outcomes.map((outcome) => (
            <div
              key={outcome.highlight}
              className="flex items-start gap-5 rounded-xl border border-gold/10 bg-surface p-6 sm:p-8 transition-all hover:border-gold/30"
            >
              <outcome.icon className="mt-1 h-7 w-7 shrink-0 text-gold sm:h-8 sm:w-8" />
              <div>
                <span className="text-gradient-gold font-heading text-sm font-bold uppercase tracking-widest sm:text-base">
                  {outcome.highlight}
                </span>
                <p className="mt-1 text-base font-medium text-foreground sm:text-lg">
                  {outcome.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
