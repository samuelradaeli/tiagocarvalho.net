import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Divider } from "@/components/ui/Divider";

export function ValueProposition() {
  return (
    <SectionWrapper className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Divider />

        <h2 className="font-heading text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
          <span className="text-gradient-gold">Retome o controle.</span>
          <br />
          <span className="text-foreground">
            Isso não é um curso, é um mapa de saída.
          </span>
        </h2>

        <p className="mt-10 text-base text-muted sm:text-lg">
          Mais de{" "}
          <span className="font-semibold text-gold">600 pessoas</span> já
          passaram por aqui. Todas com sintomas que você pode estar sentindo
          agora:
        </p>

        <Divider className="mt-10" />
      </div>
    </SectionWrapper>
  );
}
