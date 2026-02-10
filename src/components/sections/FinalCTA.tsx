import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Divider } from "@/components/ui/Divider";
import { Button } from "@/components/ui/Button";

const HOTMART_LINK =
  "https://pay.hotmart.com/L101838950F?bid=1760035797582";

export function FinalCTA() {
  return (
    <SectionWrapper className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Divider />

        <h2 className="font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
          Decida agora.
          <br />
          <span className="text-gradient-gold">
            Ou continue na ESPERA e na DOR.
          </span>
        </h2>

        <div className="mt-10 space-y-3 text-sm text-muted sm:text-base">
          <p>Você pode continuar alimentando o scroll infinito...</p>
          <p>Tentando se distrair da própria dor.</p>
          <p className="font-medium text-foreground">
            Ou você pode instalar uma nova estrutura mental que muda sua
            realidade.
          </p>
        </div>

        <p className="mt-8 text-sm font-semibold text-gold sm:text-base">
          Clique no botão abaixo e comece agora.
        </p>

        <div className="mt-8">
          <Button href={HOTMART_LINK} variant="primary" size="lg">
            CLIQUE PARA LIBERAR ACESSO ÀS 52 AULAS
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
