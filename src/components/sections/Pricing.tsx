import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Divider } from "@/components/ui/Divider";
import { Button } from "@/components/ui/Button";
import { Fingerprint, ShieldCheck, Sparkles } from "lucide-react";

const HOTMART_LINK =
  "https://pay.hotmart.com/L101838950F?bid=1760035797582";
const WHATSAPP_LINK =
  "https://api.whatsapp.com/send?phone=5555992613030&text=Ol%C3%A1%2C%20sou%20aluno%20e%20quero%20o%20desconto%20exclusivo%20do%20Tiago%20Carvalho.";

const guarantees = [
  { icon: Fingerprint, text: "Pagamento seguro via Hotmart" },
  { icon: ShieldCheck, text: "Sem mensalidade, sem cobrança futura" },
  { icon: Sparkles, text: "Acesso imediato após confirmação" },
];

export function Pricing() {
  return (
    <SectionWrapper id="preco" className="px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <Divider />

        <h2 className="text-center impact-text font-heading">
          <span className="text-gradient-gold">Acesso Vitalício.</span>
        </h2>

        <div className="mt-12 rounded-2xl border border-gold/30 bg-surface p-8 text-center sm:p-12">
          <p className="text-base text-muted line-through sm:text-lg">R$ 1.077</p>
          <div className="mt-3 flex items-baseline justify-center gap-3">
            <span className="text-base text-muted">por</span>
            <span className="font-heading text-6xl font-bold text-gradient-gold sm:text-7xl md:text-8xl">
              R$497
            </span>
          </div>

          <div className="mt-8 space-y-2 text-sm text-muted sm:text-base">
            <p>
              Sim. Só{" "}
              <span className="font-semibold text-foreground">R$497</span>.
            </p>
            <p>Sem mensalidade.</p>
            <p>Sem cobrança futura.</p>
            <p>Sem pegadinha.</p>
            <p className="font-medium text-foreground">
              Um único pagamento para acesso vitalício às 52 aulas.
            </p>
          </div>

          <div className="mt-10">
            <Button href={HOTMART_LINK} variant="primary" size="lg">
              CLIQUE PARA LIBERAR ACESSO ÀS 52 AULAS
            </Button>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {guarantees.map((g) => (
              <div key={g.text} className="flex items-center gap-2 text-xs text-muted">
                <g.icon className="h-4 w-4 text-gold/60" />
                <span>{g.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-surface-light bg-surface/50 p-6 text-center">
          <p className="text-sm text-muted sm:text-base">
            Se você já foi aluno, tem um presente esperando por você.
            <br />
            Chama no WhatsApp no botão abaixo para receber um{" "}
            <span className="font-semibold text-gold">
              desconto exclusivo
            </span>
            .
          </p>
          <div className="mt-4">
            <Button href={WHATSAPP_LINK} variant="whatsapp">
              CHAMAR NO WHATSAPP
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
