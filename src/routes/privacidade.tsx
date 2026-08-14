import { createFileRoute } from "@tanstack/react-router";
import { Footer, Header } from "@/components/site/Layout";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | SitePronto" },
      { name: "description", content: "Como tratamos os dados dos clientes do serviço SitePronto." },
      { property: "og:title", content: "Política de Privacidade | SitePronto" },
      { property: "og:description", content: "Como tratamos os dados dos clientes do SitePronto." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacidade" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl space-y-4 px-4 py-16 text-muted-foreground">
        <h1 className="text-3xl font-bold text-foreground">Política de Privacidade</h1>
        <p>
          Coletamos apenas os dados necessários para a criação do site e para o contato com o
          cliente, como nome, e-mail, WhatsApp e informações da empresa.
        </p>
        <p>
          Os dados não são vendidos a terceiros e são utilizados exclusivamente para a prestação do
          serviço contratado.
        </p>
        <p>
          Utilizamos ferramentas de mensuração de tráfego e anúncios para entender o desempenho das
          campanhas. Você pode solicitar a exclusão dos seus dados a qualquer momento pelos canais
          de contato.
        </p>
      </main>
      <Footer />
    </>
  );
}
