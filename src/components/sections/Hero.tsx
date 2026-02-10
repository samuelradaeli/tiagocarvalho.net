import { Button } from "@/components/ui/Button";

const HOTMART_LINK =
  "https://pay.hotmart.com/L101838950F?bid=1760035797582";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 text-center">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="text-gradient-gold">
            Você sente que tem algo errado,
          </span>
          <br />
          <span className="text-foreground">
            mas já se acostumou a funcionar quebrado.
          </span>
        </h1>

        <div className="mt-10 space-y-3 text-base text-muted sm:text-lg md:text-xl">
          <p>Ansiedade que não passa</p>
          <p>Procrastinação que corrói sua confiança</p>
          <p>Vícios silenciosos que te deixam com vergonha de si mesmo</p>
        </div>

        <p className="mt-8 font-heading text-sm italic text-gold/70 sm:text-base">
          Um ciclo que parece inquebrável, mas não precisa ser seu destino
          final…
        </p>

        <div className="mt-12">
          <Button href={HOTMART_LINK} variant="primary" size="lg">
            CLIQUE PARA LIBERAR ACESSO ÀS 52 AULAS
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
