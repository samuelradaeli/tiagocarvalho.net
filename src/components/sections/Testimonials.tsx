"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Divider } from "@/components/ui/Divider";
import { CirclePlay } from "lucide-react";
import { useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Lucas Ferreira",
    videoUrl: "https://warinbox.b-cdn.net/lucas%20ferreira.mp4",
  },
  {
    id: 2,
    name: "Lucas Estevão",
    videoUrl: "https://warinbox.b-cdn.net/lucas%20estev%C3%A3o.mp4",
  },
  {
    id: 3,
    name: "Bruno Agostineli",
    videoUrl: "https://warinbox.b-cdn.net/bruno%20agostineli.mp4",
  },
];

function TestimonialVideo({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlay() {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  }

  function handlePause() {
    setPlaying(false);
  }

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-xl border border-surface-light bg-surface transition-all hover:border-gold/30">
      <video
        ref={videoRef}
        src={testimonial.videoUrl}
        className="h-full w-full object-cover"
        playsInline
        preload="metadata"
        controls={playing}
        onPause={handlePause}
        onEnded={handlePause}
      />
      {!playing && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 transition-all hover:bg-black/30"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/60 bg-gold/10 transition-all group-hover:border-gold group-hover:bg-gold/20 group-hover:scale-110">
            <CirclePlay className="h-8 w-8 text-gold" />
          </div>
          <p className="text-sm font-medium text-white">{testimonial.name}</p>
        </button>
      )}
    </div>
  );
}

export function Testimonials() {
  return (
    <SectionWrapper className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Divider />

        <h2 className="text-center impact-text font-heading">
          <span className="text-foreground">Resultados Reais.</span>{" "}
          <span className="text-gradient-gold">Gente de Verdade.</span>
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialVideo key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
