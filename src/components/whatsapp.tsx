"use client";

import type { ReactNode } from "react";

export function waHref(number: string, message: string): string {
  return "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
}

export function trackWhatsApp(location: string, caseStudy?: string): void {
  if (typeof window === "undefined") return;
  const path = window.location.pathname;
  const props = {
    source_page: path,
    language: path.startsWith("/ar") ? "ar" : "en",
    case_study: caseStudy ?? "",
    CTA_location: location,
  };
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") w.gtag("event", "whatsapp_click", props);
  window.dispatchEvent(new CustomEvent("whatsapp_click", { detail: props }));
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.19-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.45s1.05 2.84 1.2 3.04c.15.2 2.06 3.29 5.01 4.5.7.3 1.25.48 1.68.61.7.22 1.34.19 1.85.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.6 15.1L2 22l5.05-1.32A10 10 0 1 0 12 2zm0 18.2c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3 .78.8-2.93-.2-.31A8.2 8.2 0 1 1 12 20.2z" />
    </svg>
  );
}

export function WhatsAppFloat({ number, message, label, caseStudy }: { number: string; message: string; label: string; caseStudy?: string }) {
  return (
    <a
      href={waHref(number, message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      onClick={() => trackWhatsApp("floating-button", caseStudy)}
      className="wa-float"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}

export function WhatsAppCTA({ number, message, label, location, caseStudy, children }: {
  number: string;
  message: string;
  label: string;
  location: string;
  caseStudy?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={waHref(number, message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={() => trackWhatsApp(location, caseStudy)}
      className="btn btn-whatsapp"
    >
      <WhatsAppIcon className="h-4 w-4" />
      {children ?? label}
    </a>
  );
}
