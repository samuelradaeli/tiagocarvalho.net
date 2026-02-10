"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Divider } from "@/components/ui/Divider";
import { ChevronDown, Scroll } from "lucide-react";
import { useState } from "react";

const sessions = [
  "Apego emocional",
  "Pensamentos obsessivos em relacionamentos",
  "Adquirindo coragem",
  "O ciclo do vício",
  'Ansiedade e "perfeccionismo"',
  "O Sol e a masculinidade objetiva",
  "Obtendo controle por meio do não-controle",
  "Masculinidade objetiva: continuação",
  "Os três personagens do ciclo do vício",
  "Ciúmes retroativos e a dissonância cognitiva",
  "A importância dos símbolos nos relacionamentos",
  "O que são camadas da personalidade e como buscar a próxima",
  "Entendendo o real propósito das emoções",
  "Erguendo barreiras",
  'O significado de "Propósito"',
  "Pare de cobrar seu cônjuge!",
  "O paradoxo contido no autoconhecimento",
  "Ideação suicida",
  "Exercício de relaxamento",
  "Adquirindo densidade",
  "Entendendo a falta de atenção e o tédio",
  "Inércia e procrastinação",
  "Insatisfação profissional",
  "Dicas práticas para melhorar a rotina",
  "O que está por trás do choro",
  "A resposta sempre está na realidade",
  "Parando de ser um fugitivo",
  "Baixa autoestima",
  "O significado de karma",
  "A função do namoro",
  "Irremediavelmente você",
  "Você é a coisa",
  "Coragem e covardia",
  "A ditadura da psicopatia",
  "Humanidade = Impotência",
  "O senso de desconforto fazendo papel de Deus na psique",
  "A modernidade mata o sentido das coisas",
  "As marcas ficam",
  "O império da virtude",
  "Reação e reatividade",
  "Virtude não serve ao ego",
  "O túnel",
  "Amizades",
  "Animus",
  "Deixa morrer!",
  "Meditação não é um luxo",
  "Você é quem dá o sentido",
  "Às vezes o problema é fisiológico",
  "Adulto e virgem",
  "Qual é a minha única obrigação?",
  "Planejando a sua biografia",
  "Figuras solares na ficção",
];

export function Curriculum() {
  const [expanded, setExpanded] = useState(false);
  const visibleSessions = expanded ? sessions : sessions.slice(0, 10);

  return (
    <SectionWrapper id="curriculum" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Divider />

        <h2 className="text-center font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
          As 52 Sessões
        </h2>

        <div className="mt-12 space-y-2">
          {visibleSessions.map((session, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-lg border border-surface-light bg-surface/50 px-5 py-3.5 transition-colors hover:border-gold/20"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/5 text-xs font-semibold text-gold">
                {index + 1}
              </div>
              <div className="flex items-center gap-2">
                <Scroll className="h-4 w-4 text-muted" />
                <span className="text-sm text-foreground">{session}</span>
              </div>
            </div>
          ))}
        </div>

        {!expanded && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
            >
              Ver todas as 52 sessões
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
