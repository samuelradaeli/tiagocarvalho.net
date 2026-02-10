import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Divider } from "@/components/ui/Divider";
import { Button } from "@/components/ui/Button";

const HOTMART_LINK =
  "https://pay.hotmart.com/L101838950F?bid=1760035797582";

export function FinalCTA() {
  return (
    <SectionWrapper className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <Divider />

        <h2 className="impact-text font-heading">
          <span className="text-foreground">Decida agora.</span>
        </h2>
        <p className="mt-4 impact-text font-heading">
          <span className="text-gradient-gold">
            Ou continue na ESPERA e na DOR.
          </span>
        </p>

        <div className="mt-12 space-y-4 text-lg text-muted sm:text-xl">
          <p>Você pode continuar alimentando o scroll infinito...</p>
          <p>Tentando se distrair da própria dor.</p>
          <p className="mt-6 font-heading text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
            Ou você pode instalar uma nova estrutura mental
            <br />
            <span className="text-gradient-gold">que muda sua realidade.</span>
          </p>
        </div>

        <p className="mt-10 text-base font-semibold text-gold sm:text-lg">
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
