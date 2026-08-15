/**
 * Camada de analytics preparada para Meta Pixel, Google Analytics (GA4)
 * e Google Tag Manager. Nenhum script é carregado até que os IDs sejam
 * configurados em `src/lib/analytics-config.ts`.
 */

export type AnalyticsEvent =
  | "PageView"
  | "ViewContent"
  | "ClickCTA"
  | "InitiateCheckout"
  | "Purchase"
  | "Lead";

type Params = Record<string, unknown>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function track(event: AnalyticsEvent, params: Params = {}) {
  if (typeof window === "undefined") return;

  // Meta Pixel
  window.fbq?.("track", event, params);

  // Google Analytics 4
  window.gtag?.("event", event, params);

  // Google Tag Manager
  window.dataLayer?.push({ event, ...params });

  if (import.meta.env.DEV) {
    console.info("[analytics]", event, params);
  }
}

export const trackPageView = (path: string) => track("PageView", { path });
export const trackViewContent = (name: string) => track("ViewContent", { content_name: name });
export const trackClickCTA = (location: string) => track("ClickCTA", { cta_location: location });
export const trackBeginCheckout = (value = 67.9) =>
  track("BeginCheckout", { value, currency: "BRL" });
export const trackPurchase = (value = 67.9) => track("Purchase", { value, currency: "BRL" });
export const trackLead = (source: string) => track("Lead", { source });
