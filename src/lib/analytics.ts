export const GA_MEASUREMENT_ID = "G-81TTEBKRVM";

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  emadAnalyticsReady?: boolean;
};

export function analyticsEnabled(): boolean {
  return typeof window !== "undefined" &&
    ["emadmstfa.com", "www.emadmstfa.com"].includes(window.location.hostname);
}

export function initializeAnalytics(): void {
  if (!analyticsEnabled()) return;
  const w = window as AnalyticsWindow;
  if (w.emadAnalyticsReady) return;
  w.dataLayer = w.dataLayer || [];
  // Google tag's standard queue uses an arguments object rather than an array.
  // eslint-disable-next-line prefer-rest-params
  w.gtag = w.gtag || function () { w.dataLayer!.push(arguments); };
  w.gtag("js", new Date());
  w.gtag("config", GA_MEASUREMENT_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  w.emadAnalyticsReady = true;
}

/** Send only page context and fixed event labels, never contact details or messages. */
export function trackEvent(name: string, params: Record<string, string> = {}): void {
  if (!analyticsEnabled()) return;
  initializeAnalytics();
  (window as AnalyticsWindow).gtag?.("event", name, {
    source_page: window.location.pathname,
    language: window.location.pathname.startsWith("/ar") ? "ar" : "en",
    ...params,
  });
}
