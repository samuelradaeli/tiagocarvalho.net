import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Divider } from "@/components/ui/Divider";

export function ValueProposition() {
  return (
    <SectionWrapper className="px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl text-center">
        <Divider />

        <h2 className="impact-text font-heading">
          <span className="text-gradient-gold">Retome o controle.</span>
        </h2>
        <p className="mt-4 font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
          Isso não é um curso, é um mapa de saída.
        </p>

        <p className="mx-auto mt-10 max-w-2xl font-heading text-lg text-muted sm:text-xl">
          Mais de{" "}
          <span className="text-gradient-gold font-bold text-2xl sm:text-3xl">600+</span>{" "}
          pessoas já passaram por aqui.
          <br className="hidden sm:block" />
          {" "}Todas com sintomas que você pode estar sentindo agora:
        </p>

        <Divider className="mt-10" />
      </div>
    </SectionWrapper>
  );
}
