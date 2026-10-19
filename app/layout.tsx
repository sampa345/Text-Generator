import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { generateWebSiteSchema, generateOrganizationSchema, getCanonicalUrl } from "@/lib/seo";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#4f46e5"
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || "https://text-generator-ruby-ten.vercel.app"),
  title: {
    default: "Free Text Generator – Copy and Paste 20+ Aesthetic Fonts | TypeCraft",
    template: "%s | TypeCraft"
  },
  description:
    "Free Unicode text generator. Transform text into cursive, bold, cursed/zalgo, upside down, and 20+ aesthetic font styles with instant one-click copy. 100% browser-based.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>"
  },
  keywords: [
    "text generator",
    "cursed text generator",
    "upside down text generator",
    "creepy text generator",
    "scary text generator",
    "italic text generator",
    "fire text generator",
    "cursive text generator",
    "bold text generator",
    "fancy text generator",
    "zalgo text generator"
  ],
  authors: [{ name: "TypeCraft Team" }],
  creator: "TypeCraft",
  publisher: "TypeCraft",
  alternates: {
    canonical: getCanonicalUrl()
  },
  openGraph: {
    title: "Free Text Generator – Copy and Paste 20+ Aesthetic Fonts | TypeCraft",
    description:
      "Transform plain words into bold, cursive, glitched zalgo, upside down, and aesthetic fonts with one-click copy. Works in Instagram, Discord, and Twitter.",
    url: getCanonicalUrl(),
    siteName: "TypeCraft",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Text Generator – Copy and Paste 20+ Aesthetic Fonts | TypeCraft",
    description:
      "Instant Unicode text transformations for Instagram, Discord, and social media. Free copy and paste tool."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "m-QHTv3N-D91W3AUK1YU8NaMUZj22Gilb_cC7Ll4Y9U"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = generateWebSiteSchema();
  const organizationSchema = generateOrganizationSchema();

  // Patch window.fetch to provide both getter and setter, preventing browser extensions
  // from throwing "Cannot set property fetch of #<Window> which has only a getter"
  const fetchPatchScript = `
    (function() {
      try {
        var _originalFetch = window.fetch;
        Object.defineProperty(window, 'fetch', {
          get: function() { return _originalFetch; },
          set: function(val) { _originalFetch = val; },
          configurable: true,
          enumerable: true
        });
      } catch (e) {}
    })();
  `;

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="m-QHTv3N-D91W3AUK1YU8NaMUZj22Gilb_cC7Ll4Y9U"
        />
        <script dangerouslySetInnerHTML={{ __html: fetchPatchScript }} />
      </head>
      <body
        className="min-h-screen bg-slate-50/50 text-slate-900 antialiased flex flex-col font-sans"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main className="flex-1 w-full" suppressHydrationWarning>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
