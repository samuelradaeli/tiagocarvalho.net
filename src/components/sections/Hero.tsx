import { Button } from "@/components/ui/Button";

const HOTMART_LINK =
  "https://pay.hotmart.com/L101838950F?bid=1760035797582";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 text-center">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(240,185,11,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <h1 className="impact-text font-heading">
          <span className="text-gradient-gold">
            Você sente que tem algo errado,
          </span>
          <br />
          <span className="text-foreground">
            mas já se acostumou a funcionar quebrado.
          </span>
        </h1>

        <div className="mt-12 space-y-4 text-lg text-muted sm:text-xl md:text-2xl">
          <p>Ansiedade que <span className="font-semibold text-foreground">não passa.</span></p>
          <p>Procrastinação que <span className="font-semibold text-foreground">corrói sua confiança.</span></p>
          <p>Vícios silenciosos que te deixam com <span className="font-semibold text-foreground">vergonha de si mesmo.</span></p>
        </div>

        <p className="mt-10 font-heading text-base italic text-gold/80 sm:text-lg">
          Um ciclo que parece inquebrável, mas não precisa ser seu destino
          final…
        </p>

        <div className="mt-14">
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
