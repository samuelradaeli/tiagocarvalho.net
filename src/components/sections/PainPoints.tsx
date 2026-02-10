import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Waves, Hourglass, Flame } from "lucide-react";

const painPoints = [
  {
    icon: Waves,
    title: "Ansiedade que não passa",
    description:
      "Aquela sensação constante de que algo está errado, mesmo quando tudo parece estar no lugar.",
  },
  {
    icon: Hourglass,
    title: "Procrastinação destrutiva",
    description:
      "Corroendo sua confiança dia após dia, sabotando tudo que você sabe que precisa fazer.",
  },
  {
    icon: Flame,
    title: "Vícios silenciosos",
    description:
      "Que te deixam com vergonha de si mesmo e criam um ciclo de prazer-culpa-sofrimento.",
  },
];

export function PainPoints() {
  return (
    <SectionWrapper className="px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="group rounded-xl border border-gold/10 bg-surface p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
            >
              <point.icon className="mb-5 h-8 w-8 text-gold transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-heading mb-3 text-lg font-bold text-foreground">
                {point.title}
              </h3>
              <p className="font-heading text-sm leading-relaxed text-muted">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
