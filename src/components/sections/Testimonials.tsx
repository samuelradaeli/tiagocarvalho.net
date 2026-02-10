"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Divider } from "@/components/ui/Divider";
import { CirclePlay } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Depoimento 1",
    placeholder: "Resultado real de quem passou pelo curso",
  },
  {
    id: 2,
    name: "Depoimento 2",
    placeholder: "Transformação pessoal comprovada",
  },
  {
    id: 3,
    name: "Depoimento 3",
    placeholder: "Mudança genuína e duradoura",
  },
];

function VideoPlaceholder({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className="aspect-video w-full rounded-xl bg-surface-light flex items-center justify-center">
        <p className="text-muted text-sm">Vídeo em breve</p>
      </div>
    );
  }

  return (
    <button
      onClick={() => setActive(true)}
      className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl border border-surface-light bg-surface transition-all hover:border-gold/30"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/50 bg-gold/10 transition-all group-hover:border-gold group-hover:bg-gold/20">
          <CirclePlay className="h-6 w-6 text-gold" />
        </div>
        <p className="text-sm text-muted">{testimonial.placeholder}</p>
      </div>
    </button>
  );
}

export function Testimonials() {
  return (
    <SectionWrapper className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Divider />

        <h2 className="text-center font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
          Resultados Reais.{" "}
          <span className="text-gradient-gold">Gente de Verdade.</span>
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <VideoPlaceholder key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
