import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Divider } from "@/components/ui/Divider";

const nots = [
  { bold: "NÃO TEM", rest: "aula de autoajuda." },
  { bold: "NÃO TEM", rest: 'papo de "tudo vai dar certo".' },
  { bold: "NÃO TEM", rest: "repetição de clichês." },
  { bold: "NÃO TEM", rest: "enrolação." },
];

export function Differentials() {
  return (
    <SectionWrapper className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Divider />

        <div className="space-y-6 sm:space-y-8">
          {nots.map((item, i) => (
            <div
              key={i}
              className="border-l-4 border-gold pl-6 sm:pl-10"
            >
              <p className="impact-text font-heading">
                <span className="text-gradient-gold">{item.bold}</span>
                <span className="text-foreground"> {item.rest}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-heading text-xl font-semibold text-muted sm:text-2xl">
            Aqui é{" "}
            <span className="text-gradient-gold font-bold">direto, prático e real.</span>
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
