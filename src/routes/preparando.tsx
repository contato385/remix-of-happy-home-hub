import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Footer, Header } from "@/components/site/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { trackLead, trackPurchase } from "@/lib/analytics";

export const Route = createFileRoute("/preparando")({
  head: () => ({
    meta: [
      { title: "Seu site está sendo preparado | NetzSite" },
      {
        name: "description",
        content: "Envie as informações da sua empresa para começarmos a criação do seu site.",
      },
      { property: "og:title", content: "Seu site está sendo preparado" },
      { property: "og:description", content: "Envie as informações da sua empresa." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/preparando" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/preparando" }],
  }),
  component: Preparando,
});

const campos = [
  { id: "nome", label: "Seu nome", type: "text" },
  { id: "empresa", label: "Nome da empresa", type: "text" },
  { id: "whatsapp", label: "WhatsApp", type: "tel" },
  { id: "email", label: "E-mail", type: "email" },
  { id: "segmento", label: "Segmento", type: "text" },
  { id: "endereco", label: "Endereço", type: "text" },
  { id: "instagram", label: "Instagram", type: "text" },
  { id: "cores", label: "Cores preferidas", type: "text" },
  { id: "dominio", label: "Domínio desejado", type: "text" },
];

function Preparando() {
  const navigate = useNavigate();

  useEffect(() => {
    trackPurchase();
  }, []);

  return (
    <>
      <Header />
      <main className="ambient-glow mx-auto max-w-3xl px-4 py-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold tracking-wide">
          <Loader2 className="size-3.5 animate-spin text-brand" /> SEU SITE ESTÁ SENDO PREPARADO
        </div>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
          Envie as informações da sua empresa
        </h1>
        <p className="mt-2 text-muted-foreground">
          O prazo de até 24 horas começa após o recebimento de todas as informações
          necessárias.
        </p>

        <form
          className="mt-8 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            trackLead("onboarding_form");
            navigate({ to: "/obrigado" });
          }}
        >
              <div className="grid gap-5 sm:grid-cols-2">
                {campos.map((c) => (
                  <div key={c.id} className="space-y-2">
                    <Label htmlFor={c.id}>{c.label}</Label>
                    <Input id={c.id} name={c.id} type={c.type} required={c.id !== "instagram"} />
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <Label htmlFor="servicos">Serviços que sua empresa oferece</Label>
                <Textarea id="servicos" name="servicos" rows={3} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sobre">Texto sobre a empresa</Label>
                <Textarea id="sobre" name="sobre" rows={4} required />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="logo">Logo</Label>
                  <Input id="logo" name="logo" type="file" accept="image/*" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fotos">Fotos</Label>
                  <Input id="fotos" name="fotos" type="file" accept="image/*" multiple />
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex h-14 w-full items-center justify-center rounded-full gradient-brand font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
              ENVIAR INFORMAÇÕES →
              </button>
            </form>
      </main>
      <Footer />
    </>
  );
}
