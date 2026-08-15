import { useEffect, useRef } from "react";
import { useLocation } from "@tanstack/react-router";
import { ANALYTICS } from "@/lib/analytics-config";
import { trackPageView } from "@/lib/analytics";

/**
 * Hook que carrega o Meta Pixel de forma segura no cliente.
 *
 * - Injeta o script oficial via DOM apenas uma vez.
 * - Dispara PageView no carregamento inicial e a cada mudança de rota.
 * - Não executa durante o SSR, evitando erros de hidratação.
 */
export function useMetaPixel() {
  const pixelId = ANALYTICS.metaPixelId;
  const injected = useRef(false);
  const location = useLocation();

  useEffect(() => {
    if (!pixelId || injected.current) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
fbq('track', 'PageView');`;

    document.head.appendChild(script);
    injected.current = true;
  }, [pixelId]);

  // Dispara PageView a cada mudança de rota (inclui o primeiro mount).
  useEffect(() => {
    if (!pixelId) return;
    trackPageView(location.pathname + location.search);
  }, [pixelId, location.pathname, location.search]);
}

/**
 * Componente que renderiza apenas o fallback <noscript> do Meta Pixel.
 * Deve ser colocado dentro de <head> para cobrir usuários sem JavaScript.
 */
export function MetaPixelNoScript() {
  const pixelId = ANALYTICS.metaPixelId;
  if (!pixelId) return null;

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}
