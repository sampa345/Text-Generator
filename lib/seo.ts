import { ToolDefinition, ToolFAQ } from "./tools-registry";

export const SITE_NAME = "TypeCraft";
export const SITE_TAGLINE = "Modern Text Utility & Styling Suite";
export const DEFAULT_PRODUCTION_URL = "https://typecraft.app";

export function getBaseUrl(): string {
  if (process.env.APP_URL) {
    return process.env.APP_URL.replace(/\/$/, "");
  }
  return DEFAULT_PRODUCTION_URL;
}

export function getCanonicalUrl(path = ""): string {
  const base = getBaseUrl();
  const cleanPath = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  return `${base}${cleanPath}`;
}

export function generateWebSiteSchema() {
  const url = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: url,
    description: "Free Unicode text generator and styling suite. Create cursive, bold, glitch, upside-down, and aesthetic text instantly.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateOrganizationSchema() {
  const url = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: url,
    logo: `${url}/logo.png`,
    sameAs: []
  };
}

export function generateWebApplicationSchema(tool: ToolDefinition) {
  const url = getCanonicalUrl(tool.slug);
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    headline: tool.h1,
    url: url,
    applicationCategory: "UtilityApplication",
    operatingSystem: "All (Web, iOS, Android, macOS, Windows)",
    browserRequirements: "Requires modern web browser with JavaScript enabled",
    description: tool.metaDescription,
    featureList: [
      "Real-time Unicode transformation",
      "One-click clipboard copy",
      "Live social media font-weight preview",
      "100% private client-side processing",
      "No registration or software download required"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1480",
      bestRating: "5",
      worstRating: "1"
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  };
}

export function generateHowToSchema(tool: ToolDefinition) {
  const url = getCanonicalUrl(tool.slug);
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use the ${tool.name}`,
    description: `Step-by-step instructions to convert plain text into ${tool.name.toLowerCase()} for Instagram, Discord, and TikTok.`,
    totalTime: "PT1M",
    step: tool.instructions.map((stepText, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `Step ${index + 1}: ${stepText.split(".")[0] || stepText.slice(0, 45)}`,
      text: stepText,
      url: `${url}#step-${index + 1}`
    }))
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  const base = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${item.path.startsWith("/") ? item.path : `/${item.path}`}`
    }))
  };
}

export function generateFAQSchema(faqs: ToolFAQ[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
