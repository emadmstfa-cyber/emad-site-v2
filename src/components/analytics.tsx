"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GA_MEASUREMENT_ID, initializeAnalytics, trackEvent } from "@/lib/analytics";

export function Analytics() {
  useEffect(() => {
    initializeAnalytics();

    function onClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const location = link.closest("header") ? "header" :
        link.closest("footer") ? "footer" :
        link.closest("section")?.id || "page";

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { cta_location: location });
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", { cta_location: location });
      } else if (/^\/(ar\/)?work\//.test(href)) {
        trackEvent("case_study_click", {
          case_study: href.split("/").filter(Boolean).at(-1) || "",
          cta_location: location,
        });
      } else if (href === "#contact") {
        trackEvent("contact_cta_click", { cta_location: location });
      } else if (href === "/ar" || href === "/") {
        if (link.textContent?.trim() === "العربية" || link.textContent?.trim() === "English") {
          trackEvent("language_switch", { target_language: href === "/ar" ? "ar" : "en" });
        }
      }
      // WhatsApp components send their own event; do not count those clicks twice.
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  // GA4 enhanced measurement owns initial and history-based page views.
  // Keeping one owner prevents duplicate page_view events on navigation.
  return <Script id="emad-ga4" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />;
}
