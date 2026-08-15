import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { CONTACT } from "@/lib/analytics-config";
import { trackClickCTA } from "@/lib/analytics";
import logoAsset from "@/assets/netzsite-logo.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      <img
        src={logoAsset.url}
        alt="NetzSite"
        width={120}
        height={40}
        className="h-8 w-auto"
      />
    </Link>
  );
}

export function Header() {
  const links = [
    { href: "#beneficios", label: "Benefícios" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#precos", label: "Preços" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CTAButton size="md" location="header" className="hidden sm:inline-flex">
            QUERO MEU SITE
          </CTAButton>
          <a href="#precos" aria-label="Ver planos" className="md:hidden">
            <Menu className="size-6" />
          </a>
        </div>
      </div>
    </header>
  );
}

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-background/90 p-3 backdrop-blur-xl md:hidden">
      <CTAButton size="lg" location="mobile_sticky" className="w-full text-sm">
        QUERO MEU SITE — {CONTACT.price}/MÊS
      </CTAButton>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface pb-28 pt-16 md:pb-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-4">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">
            Sites profissionais com hospedagem inclusa por {CONTACT.price}/mês. Entrega em até 24
            horas.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold">Navegação</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a className="hover:text-foreground" href="#topo">Início</a></li>
            <li><a className="hover:text-foreground" href="#como-funciona">Como funciona</a></li>
            <li><a className="hover:text-foreground" href="#beneficios">Benefícios</a></li>
            <li><a className="hover:text-foreground" href="#precos">Preços</a></li>
            <li><a className="hover:text-foreground" href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold">Legal</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link className="hover:text-foreground" to="/termos">Termos de Uso</Link></li>
            <li><Link className="hover:text-foreground" to="/privacidade">Política de Privacidade</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold">Contato</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                onClick={() => trackClickCTA("footer_whatsapp")}
                className="inline-flex items-center gap-2 text-whatsapp hover:opacity-80"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a className="hover:text-foreground" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-4 text-xs text-muted-foreground">
        © {new Date().getFullYear()} NetzSite. Todos os direitos reservados.
      </div>
    </footer>
  );
}
