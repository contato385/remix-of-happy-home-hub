import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { Footer, Header } from "@/components/site/Layout";
import { CONTACT } from "@/lib/analytics-config";
import { trackPurchase, trackClickCTA } from "@/lib/analytics";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Obrigado pela contratação | NetzSite" },
      {
        name: "description",
        content: "Sua contratação foi recebida. Entraremos em contato para iniciar a criação do seu site profissional.",
      },
      { property: "og:title", content: "Obrigado pela contratação | NetzSite" },
      {
        property: "og:description",
        content: "Sua contratação foi recebida. Entraremos em contato em breve.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/obrigado" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/obrigado" }],
  }),
  component: Obrigado,
});

const whatsappMessage = encodeURIComponent(
  `Oi! Acabei de fazer a contratação do site da ${CONTACT.brand} e quero enviar mais informações.`
);

function Obrigado() {
  useEffect(() => {
    trackPurchase();
  }, []);

  return (
    <>
      <Header />
      <main className="ambient-glow mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-20 text-center md:py-28">
        <div className="card-elevated w-full rounded-2xl p-8 md:p-12">
          <div className="mx-auto grid size-20 place-items-center rounded-full bg-whatsapp/10">
            <CheckCircle2 className="size-10 text-whatsapp" />
          </div>

          <h1 className="mt-6 text-3xl font-bold sm:text-4xl">
            Tudo certo! <span className="gradient-text">Sua contratação foi recebida.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Nossa equipe já pode começar a preparar o seu site. Para agilizar, envie as informações do seu negócio
            direto no WhatsApp.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackClickCTA("obrigado_whatsapp")}
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-whatsapp px-8 font-semibold text-whatsapp-foreground shadow-[0_18px_45px_-18px_var(--whatsapp)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_60px_-18px_var(--whatsapp)] active:translate-y-0"
            >
              <MessageCircle className="size-5" />
              CHAMAR NO WHATSAPP
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <Link
              to="/"
              className="inline-flex h-14 items-center justify-center rounded-full border border-border bg-surface px-8 font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Voltar para o início
            </Link>
          </div>

          <div className="mt-8 grid gap-3 rounded-xl border border-border bg-background/50 p-5 text-left text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-whatsapp" /> Seu site será entregue em até 24 horas úteis.
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-whatsapp" /> Envie logo, fotos e informações pelo WhatsApp.
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-whatsapp" /> Dúvidas? Fale conosco pelo WhatsApp ou e-mail.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
