import { Metadata } from "next";
import Link from "next/link";
import { HomeStudio } from "@/components/HomeStudio";
import { ToolDirectory } from "@/components/ToolDirectory";
import { toolsRegistry } from "@/lib/tools-registry";
import { getCanonicalUrl } from "@/lib/seo";
import { ArrowRight, CheckCircle2, Shield, Zap, Sparkles, Smartphone, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Text Generator – Copy and Paste 20+ Aesthetic Fonts Online",
  description:
    "TypeCraft is a free text generator. Convert regular words into bold, cursive, cursed zalgo, upside-down, and aesthetic fancy fonts with one-click copy. Zero tracking, 100% private.",
  alternates: {
    canonical: getCanonicalUrl()
  }
};

const homeFaqs = [
  {
    question: "What is a Unicode text generator?",
    answer:
      "A Unicode text generator replaces standard keyboard letters with mathematically styled characters, scripts, and combining accents defined in the Unicode Standard. Because they are encoded as standard characters rather than images or proprietary font files, you can copy and paste them directly into social platforms like Instagram, TikTok, Twitter/X, and Discord."
  },
  {
    question: "How do I copy and paste stylized text onto Instagram or TikTok?",
    answer:
      "Simply enter your phrase in the text workspace above. Browse through the 20+ real-time transformed styles, click the 'Copy' button on your favorite card, and then paste it directly into your bio, caption, or comment field."
  },
  {
    question: "Is TypeCraft completely free and private?",
    answer:
      "Yes. All 20 transformation algorithms run client-side in your web browser using pure JavaScript. Your text is never sent to a server, never stored in a database, and never used to track you."
  },
  {
    question: "Why do some fancy text characters show up as question marks or boxes?",
    answer:
      "This happens if an older device or operating system lacks font support for newer Unicode mathematical alphanumeric symbols. Modern iOS (12+), Android (9+), Windows 10/11, and macOS render all these character sets natively without issue."
  },
  {
    question: "Can I use these fonts in video game display names?",
    answer:
      "Yes! Games like Roblox, Steam, Minecraft, Discord, and League of Legends support Unicode characters in player nicknames and chat channels."
  }
];

export default function HomePage() {
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TypeCraft Text Generator",
    operatingSystem: "All (Web, iOS, Android, Windows, macOS)",
    applicationCategory: "UtilityApplication",
    browserRequirements: "Requires modern web browser with JavaScript enabled",
    description: "Free Unicode text generator for transforming text into bold, cursive, glitch, upside-down, and aesthetic fonts.",
    featureList: [
      "20+ Unicode transformation algorithms",
      "Instant one-click clipboard copy",
      "Live social media font weight preview",
      "100% private client-side processing",
      "Mobile and desktop responsive design"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "2350",
      bestRating: "5",
      worstRating: "1"
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <div className="w-full">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Main Workspace Section (Top Intent Satisfaction) */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-gradient-to-b from-white to-slate-50/60 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Value Proposition */}
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-2">
              <span>Free Online Text Utility</span>
              <span aria-hidden="true">·</span>
              <span>20+ Unicode Styles</span>
              <span aria-hidden="true">·</span>
              <span>Instant Copy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 text-balance">
              Free Text Generator
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Transform plain text into cursive, bold, upside-down, cursed zalgo, and aesthetic fonts instantly. Type once and copy any of the 20+ styles directly to your clipboard.
            </p>
          </div>

          {/* Core Interactive Tool (Placed Immediately Above the Fold) */}
          <HomeStudio />

          {/* Popular Fast-Jump Shortcuts */}
          <div className="mt-8 pt-6 border-t border-slate-200/80">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
              Popular Dedicated Generators:
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Cursed / Zalgo", slug: "cursed-text-generator" },
                { name: "Upside Down", slug: "upside-down-text-generator" },
                { name: "Cursive Script", slug: "cursive-text-generator" },
                { name: "Bold Text", slug: "bold-text-generator" },
                { name: "Italic Fonts", slug: "italic-text-generator" },
                { name: "Creepy Gothic", slug: "creepy-text-generator" },
                { name: "Small Caps", slug: "small-text-generator" },
                { name: "Text Repeater", slug: "text-repeater" },
                { name: "Case Converter", slug: "text-case-converter" },
                { name: "Invisible Space", slug: "invisible-character-generator" }
              ].map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="text-xs font-medium bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80 px-3 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1.5 min-h-[36px]"
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categorized Tool Directory */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ToolDirectory />
      </div>

      {/* How It Works & Educational Section */}
      <section className="py-12 lg:py-16 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How Unicode Text Generation Works
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Unlike normal word processors where changing a font requires custom TTF or WOFF2 files installed on the reader&apos;s computer, TypeCraft uses <strong>Unicode Character Encoding</strong>.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Mathematical Codepoints
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Unicode reserves dedicated code charts for mathematical alphanumeric symbols, gothic fraktur, double-struck, and circled glyphs.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Combining Diacritics
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                For cursed and strikethrough styles, zero-width combining characters stack on top of base letters without consuming horizontal line space.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Universal Copy & Paste
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Because every generated output is pure text, you can paste it into any website or mobile app that accepts plain text input.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Common questions about text generators, compatibility, and copy-pasting.
            </p>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 transition-all"
              >
                <h3 className="text-base font-bold text-slate-900 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed pl-7.5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
