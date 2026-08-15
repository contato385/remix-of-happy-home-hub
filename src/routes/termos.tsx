import { createFileRoute } from "@tanstack/react-router";
import { Footer, Header } from "@/components/site/Layout";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | SitePronto" },
      { name: "description", content: "Termos de uso do serviço de criação e hospedagem de sites SitePronto." },
      { property: "og:title", content: "Termos de Uso | SitePronto" },
      { property: "og:description", content: "Condições de contratação do serviço SitePronto." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/termos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/termos" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl space-y-4 px-4 py-16 text-muted-foreground">
        <h1 className="text-3xl font-bold text-foreground">Termos de Uso</h1>
        <p>
          Este documento descreve as condições gerais de contratação do serviço de criação e
          hospedagem de sites. As condições específicas de cada plano são apresentadas no momento
          da contratação.
        </p>
        <p>
          O prazo de entrega de até 24 horas começa a contar após o recebimento de todas as
          informações necessárias para a criação do site.
        </p>
        <p>
          O domínio próprio não está incluso no valor mensal e pode ser contratado separadamente ou
          conforme a modalidade escolhida.
        </p>
        <p>
          O cancelamento pode ser solicitado conforme as condições apresentadas no momento da
          contratação.
        </p>
      </main>
      <Footer />
    </>
  );
}
