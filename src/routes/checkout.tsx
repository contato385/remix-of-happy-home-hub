import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Check, Lock, ShieldCheck } from "lucide-react";
import { Footer, Header } from "@/components/site/Layout";
import { CONTACT } from "@/lib/analytics-config";
import { trackBeginCheckout, trackClickCTA } from "@/lib/analytics";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Contratar site profissional | R$ 67,90/mês" },
      {
        name: "description",
        content:
          "Finalize a contratação do seu site profissional por R$ 67,90/mês, com hospedagem, SSL e entrega em até 24 horas.",
      },
      { property: "og:title", content: "Contratar site profissional | R$ 67,90/mês" },
      {
        property: "og:description",
        content: "Contratação rápida, sem burocracia. Site entregue em até 24 horas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/checkout" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/checkout" }],
  }),
  component: Checkout,
});

const inclui = [
  "Site profissional",
  "Hospedagem",
  "SSL / HTTPS",
  "Layout responsivo",
  "Botão WhatsApp",
  "SEO básico",
  "Suporte",
  "Entrega em até 24 horas",
];

function Checkout() {
  useEffect(() => {
    trackBeginCheckout();
  }, []);

  return (
    <>
      <Header />
      <main className="ambient-glow mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-bold sm:text-4xl">Finalizar contratação</h1>
        <p className="mt-2 text-muted-foreground">
          Plano mensal, sem contrato de longo prazo. Cancele conforme as condições apresentadas na
          contratação.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_1fr]">
          <div className="card-elevated rounded-2xl p-6">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold gradient-text">{CONTACT.price}</span>
              <span className="text-muted-foreground">/mês</span>
            </div>
            <ul className="mt-5 space-y-2 text-sm">
              {inclui.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="size-4 text-whatsapp" /> {i}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted-foreground">
              Domínio próprio não incluso no valor mensal — pode ser contratado separadamente ou
              conforme a modalidade escolhida.
            </p>
          </div>

          <div className="card-elevated flex flex-col justify-between rounded-2xl p-6">
            <div>
              <h2 className="text-lg font-semibold">Pagamento</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Você será direcionado para o checkout seguro da Lastlink para finalizar a
                contratação.
              </p>
              <div className="mt-5 space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Lock className="size-4 text-brand" /> Ambiente de contratação seguro
                </p>
                <p className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-brand" /> Sem contrato de longo prazo
                </p>
              </div>
            </div>
            <a
              href={CONTACT.checkoutUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackClickCTA("checkout_confirm")}
              className="mt-6 inline-flex h-14 items-center justify-center rounded-full gradient-brand font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              IR PARA O PAGAMENTO →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
