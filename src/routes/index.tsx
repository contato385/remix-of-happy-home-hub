import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Clock,
  Gauge,
  Globe,
  Headphones,
  Layers,
  Lock,
  MessageCircle,
  Search,
  Smartphone,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTAButton } from "@/components/site/CTAButton";
import { Footer, Header, MobileCTABar } from "@/components/site/Layout";
import { CONTACT } from "@/lib/analytics-config";
import { trackPageView, trackViewContent } from "@/lib/analytics";
import heroDevices from "@/assets/hero-devices.jpg";
import segmentos from "@/assets/segmentos.jpg";

const TITLE = "Site Profissional por R$ 67,90/mês | Seu Negócio Online";
const DESCRIPTION =
  "Tenha um site profissional para sua empresa por apenas R$ 67,90/mês. Site responsivo, hospedagem, SSL e entrega rápida.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Criação e hospedagem de sites profissionais",
          areaServed: "BR",
          description: DESCRIPTION,
          offers: {
            "@type": "Offer",
            price: "67.90",
            priceCurrency: "BRL",
            category: "Assinatura mensal",
          },
        }),
      },
    ],
  }),
  component: Landing,
});

const barra = [
  "Site profissional",
  "Responsivo no celular",
  "SSL e segurança",
  "Hospedagem rápida",
  "Botão WhatsApp",
  "SEO básico",
  "Entrega rápida",
  "Suporte",
];

const motivos = [
  {
    titulo: "Mais credibilidade",
    texto: "Mostre profissionalismo para seus clientes.",
    icone: BadgeCheck,
  },
  {
    titulo: "Mais oportunidades",
    texto: "Esteja disponível para novos clientes 24 horas por dia.",
    icone: Clock,
  },
  {
    titulo: "Mais confiança",
    texto: "Apresente seus serviços, informações e formas de contato em um único lugar.",
    icone: Sparkles,
  },
];

const entregaveis = [
  { t: "SITE PROFISSIONAL", d: "Design moderno personalizado para sua empresa.", i: Globe },
  { t: "100% RESPONSIVO", d: "Funciona perfeitamente em celular, tablet e computador.", i: Smartphone },
  { t: "BOTÃO WHATSAPP", d: "Seu cliente consegue entrar em contato rapidamente.", i: MessageCircle },
  { t: "HOSPEDAGEM RÁPIDA", d: "Site hospedado em infraestrutura moderna e otimizada.", i: Gauge },
  { t: "SSL / HTTPS", d: "Conexão segura para seus visitantes.", i: Lock },
  { t: "SEO BÁSICO", d: "Estrutura preparada para mecanismos de busca.", i: Search },
  { t: "PÁGINAS PROFISSIONAIS", d: "Home, serviços, sobre, contato e outras páginas necessárias.", i: Layers },
  { t: "SUPORTE", d: "Ajuda para manter seu site funcionando corretamente.", i: Headphones },
];

const categorias = [
  "Barbearia",
  "Salão de beleza",
  "Restaurante",
  "Oficina",
  "Clínica",
  "Imobiliária",
  "Eletricista",
  "Fotógrafo",
  "Loja",
  "Prestador de serviços",
];

const passos = [
  { n: "01", t: "CONTRATE", d: "Escolha o plano e envie as informações da sua empresa." },
  { n: "02", t: "NÓS CRIAMOS", d: "Nossa equipe prepara o seu site profissional." },
  { n: "03", t: "PUBLIQUE", d: "Receba seu site pronto em até 24 horas." },
];

const planoInclui = [
  "Site profissional",
  "Hospedagem",
  "SSL",
  "Layout responsivo",
  "Botão WhatsApp",
  "SEO básico",
  "Suporte",
  "Entrega em até 24 horas",
];

const faq = [
  {
    q: "Preciso entender de programação?",
    a: "Não. Nós cuidamos da parte técnica e orientamos você durante o processo.",
  },
  {
    q: "Quanto tempo demora?",
    a: "Após recebermos todas as informações necessárias, o site pode ser entregue em até 24 horas.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim. O site é desenvolvido para funcionar em celulares, tablets e computadores.",
  },
  {
    q: "Posso colocar meu WhatsApp?",
    a: "Sim. O site pode incluir botões de WhatsApp para facilitar o contato dos seus clientes.",
  },
  {
    q: "Posso usar meu próprio domínio?",
    a: "Sim. Domínios próprios podem ser utilizados. A disponibilidade e o custo do domínio dependem do domínio escolhido.",
  },
  {
    q: "Posso cancelar?",
    a: "Sim, conforme as condições apresentadas no momento da contratação.",
  },
  {
    q: "Vocês fazem alterações no site?",
    a: "Sim, de acordo com o suporte e as condições do plano contratado.",
  },
];

/** Depoimentos reais entram aqui. Enquanto a lista estiver vazia, nada é exibido. */
const depoimentos: { nome: string; empresa: string; texto: string }[] = [];

function Landing() {
  useEffect(() => {
    trackPageView("/");
    trackViewContent("landing_site_profissional");
  }, []);

  return (
    <div id="topo">
      <Header />

      <main>
        {/* HERO */}
        <section className="ambient-glow relative overflow-hidden px-4 pb-16 pt-14 sm:pt-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div className="animate-rise">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-glow">
                <Zap className="size-3.5" /> ENTREGA EM ATÉ 24 HORAS
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
                SEU SITE PROFISSIONAL
                <br />
                POR APENAS
                <br />
                <span className="gradient-text">R$ 67,90/MÊS</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Tenha uma presença profissional na internet sem gastar milhares de reais. Seu site é
                criado e entregue em até 24 horas.
              </p>
              <div className="mt-8">
                <CTAButton size="xl" location="hero" className="w-full sm:w-auto" />
                <p className="mt-3 text-sm text-muted-foreground">
                  Contratação rápida • Sem burocracia • Cancele quando quiser
                </p>
              </div>
            </div>

            <div className="relative animate-rise">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(50%_50%_at_50%_50%,color-mix(in_oklab,var(--brand)_30%,transparent),transparent_70%)] blur-2xl" />
              <img
                src={heroDevices}
                alt="Site profissional de uma empresa brasileira exibido em notebook, tablet e smartphone"
                width={1408}
                height={1104}
                fetchPriority="high"
                className="w-full rounded-2xl border border-border/60 shadow-[0_40px_100px_-40px_oklch(0_0_0)]"
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur">
                Seu negócio pode estar aqui
              </span>
            </div>
          </div>
        </section>

        {/* BARRA DE BENEFÍCIOS */}
        <section id="beneficios" className="border-y border-border/60 bg-surface py-5">
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-6 gap-y-3 px-4">
            {barra.map((b) => (
              <span key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="size-4 text-whatsapp" /> {b}
              </span>
            ))}
          </div>
        </section>

        {/* POR QUE PRECISA DE UM SITE */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
              Seu cliente pesquisa antes de comprar.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Quando alguém encontra sua empresa no Google, Instagram ou WhatsApp, um site
              profissional aumenta sua credibilidade e mostra que seu negócio é sério.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {motivos.map(({ titulo, texto, icone: Icone }) => (
                <div
                  key={titulo}
                  className="card-elevated rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="grid size-11 place-items-center rounded-xl gradient-brand">
                    <Icone className="size-5 text-primary-foreground" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{titulo}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O QUE VOCÊ RECEBE */}
        <section className="bg-surface px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">
              Tudo o que você precisa para colocar sua empresa na internet.
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {entregaveis.map(({ t, d, i: Icone }) => (
                <div
                  key={t}
                  className="rounded-2xl border border-border bg-background p-5 transition-colors duration-300 hover:border-brand/50"
                >
                  <Icone className="size-5 text-brand-glow" />
                  <h3 className="mt-4 text-sm font-bold tracking-wide">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <CTAButton location="entregaveis" />
            </div>
          </div>
        </section>

        {/* SEGMENTOS */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Não importa qual seja o seu negócio.</h2>
            <p className="mt-3 text-muted-foreground">
              Criamos uma presença profissional adaptada à sua empresa.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {categorias.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
            <img
              src={segmentos}
              alt="Exemplos de sites profissionais para barbearia, salão, restaurante, oficina, clínica e imobiliária"
              width={1408}
              height={912}
              loading="lazy"
              className="mt-10 w-full rounded-2xl border border-border/60"
            />
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="bg-surface px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Como funciona</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {passos.map((p) => (
                <div key={p.n} className="rounded-2xl border border-border bg-background p-6">
                  <span className="font-display text-4xl font-extrabold gradient-text">{p.n}</span>
                  <h3 className="mt-3 font-bold tracking-wide">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              O prazo de 24 horas começa após o recebimento de todas as informações necessárias para
              a criação.
            </p>
          </div>
        </section>

        {/* PREÇO */}
        <section id="precos" className="ambient-glow px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Quanto custa colocar sua empresa na internet?
            </h2>
            <div className="card-elevated glow-brand mt-10 rounded-3xl border-brand/40 p-8 text-left sm:p-10">
              <span className="inline-flex rounded-full bg-whatsapp/15 px-3 py-1 text-xs font-bold tracking-widest text-whatsapp">
                SEM CONTRATO DE LONGO PRAZO
              </span>
              <div className="mt-5 flex items-end gap-2">
                <span className="font-display text-6xl font-extrabold gradient-text">R$ 67,90</span>
                <span className="pb-2 text-muted-foreground">/mês</span>
              </div>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {planoInclui.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-whatsapp" /> {p}
                  </li>
                ))}
              </ul>
              <CTAButton size="xl" location="pricing" className="mt-8 w-full">
                QUERO MEU SITE POR R$ 67,90/MÊS
              </CTAButton>
              <p className="mt-4 text-xs text-muted-foreground">
                Domínio próprio não está incluso no valor mensal. Ele pode ser contratado
                separadamente ou conforme a modalidade escolhida.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARAÇÃO */}
        <section className="bg-surface px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Quanto você gastaria normalmente?</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background p-6">
                <h3 className="text-lg font-semibold text-muted-foreground">Projeto tradicional</h3>
                <p className="mt-2 text-3xl font-bold text-muted-foreground">
                  pode custar muito mais
                </p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {[
                    "Desenvolvimento cobrado à parte",
                    "Prazo que pode levar semanas",
                    "Hospedagem separada",
                    "Manutenção separada",
                  ].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <X className="size-4 text-destructive" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-elevated rounded-2xl border-brand/40 p-6">
                <h3 className="text-lg font-semibold">Nossa solução</h3>
                <p className="mt-2 text-3xl font-bold gradient-text">R$ 67,90/mês</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {[
                    "Site profissional",
                    "Entrega rápida",
                    "Hospedagem inclusa",
                    "Suporte",
                    "Atualizações conforme o plano",
                  ].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="size-4 text-whatsapp" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS (somente reais) */}
        {depoimentos.length > 0 && (
          <section className="px-4 py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold sm:text-4xl">O que dizem nossos clientes</h2>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {depoimentos.map((d) => (
                  <blockquote key={d.nome} className="card-elevated rounded-2xl p-6">
                    <p className="text-sm text-muted-foreground">“{d.texto}”</p>
                    <footer className="mt-4 text-sm font-semibold">
                      {d.nome} <span className="text-muted-foreground">· {d.empresa}</span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section id="faq" className="px-4 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Perguntas frequentes</h2>
            <Accordion type="single" collapsible className="mt-8">
              {faq.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="ambient-glow px-4 py-24 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">
              Seu negócio merece uma presença{" "}
              <span className="gradient-text">profissional na internet.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comece hoje por apenas {CONTACT.price}/mês.
            </p>
            <CTAButton size="xl" location="cta_final" className="mt-8 w-full sm:w-auto" />
            <p className="mt-3 text-sm text-muted-foreground">
              Contratação online • Processo simples • Entrega rápida
            </p>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-whatsapp hover:opacity-80"
            >
              <MessageCircle className="size-4" /> Falar no WhatsApp
              <ArrowRight className="size-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <MobileCTABar />
    </div>
  );
}
