import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Ban } from "lucide-react";

const nots = [
  "NÃO TEM aula de autoajuda",
  'NÃO TEM papo de "tudo vai dar certo"',
  "NÃO TEM repetição de clichês",
];

export function Differentials() {
  return (
    <SectionWrapper className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
          Porque{" "}
          <span className="text-gradient-gold">não tem enrolação!</span>
        </h2>

        <div className="mt-12 flex flex-col items-center gap-4">
          {nots.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-lg border border-red-900/30 bg-red-950/20 px-6 py-4 text-left transition-colors"
            >
              <Ban className="h-5 w-5 shrink-0 text-red-500" />
              <p className="text-sm font-medium text-foreground sm:text-base">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
