import { ClientOnly } from "@tanstack/react-router";
import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { ANALYTICS } from "@/lib/analytics-config";
import { trackPageView } from "@/lib/analytics";

/**
 * Componente de carregamento do Meta Pixel.
 *
 * - Só renderiza no cliente (evita hidratação/SSR).
 * - Carrega o script oficial de forma assíncrona.
 * - Dispara PageView no carregamento inicial e a cada mudança de rota da SPA.
 * - Só ativa quando ANALYTICS.metaPixelId estiver preenchido.
 */
export function MetaPixel() {
  const pixelId = ANALYTICS.metaPixelId;
  if (!pixelId) return null;

  return (
    <ClientOnly fallback={null}>
      <PixelLoader pixelId={pixelId} />
    </ClientOnly>
  );
}

function PixelLoader({ pixelId }: { pixelId: string }) {
  const location = useLocation();

  // Dispara PageView em toda mudança de rota (inclui o primeiro mount).
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);

  const pixelScript = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
fbq('track', 'PageView');`;

  return (
    <>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{ __html: pixelScript }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
