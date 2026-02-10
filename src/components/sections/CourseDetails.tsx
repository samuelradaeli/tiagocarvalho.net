import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Divider } from "@/components/ui/Divider";
import {
  Layers,
  Gem,
  Dna,
  Crown,
  Handshake,
} from "lucide-react";

const details = [
  { icon: Layers, text: "52 Aulas" },
  { icon: Gem, text: "Mais de 60 horas de conteúdo direto ao ponto" },
  {
    icon: Dna,
    text: "Método baseado em psicologia clínica, virtudes e fortalecimento interno",
  },
  { icon: Crown, text: "Acesso vitalício ao conteúdo completo" },
  { icon: Handshake, text: "Suporte humano direto pelo WhatsApp" },
];

export function CourseDetails() {
  return (
    <SectionWrapper className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Divider />

        <h2 className="text-center font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
          O que está incluso
        </h2>

        <div className="mt-12 space-y-4">
          {details.map((detail) => (
            <div
              key={detail.text}
              className="flex items-center gap-5 rounded-lg border border-surface-light bg-surface/50 p-5 transition-colors hover:border-gold/20"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                <detail.icon className="h-5 w-5 text-gold" />
              </div>
              <p className="text-sm font-medium text-foreground sm:text-base">
                {detail.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
