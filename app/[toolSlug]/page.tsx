import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  toolsRegistry,
  getToolBySlug,
  getAllToolSlugs,
  ToolDefinition
} from "@/lib/tools-registry";
import { ToolStudio } from "@/components/ToolStudio";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  getCanonicalUrl,
  generateWebApplicationSchema,
  generateFAQSchema,
  generateBreadcrumbSchema
} from "@/lib/seo";
import {
  ArrowRight,
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  AlertCircle,
  Sparkles
} from "lucide-react";

interface ToolPageProps {
  params: Promise<{
    toolSlug: string;
  }>;
}

// Statically pre-render all 20 tools for fast indexing
export async function generateStaticParams() {
  return getAllToolSlugs().map((slug) => ({
    toolSlug: slug
  }));
}

export async function generateMetadata({
  params
}: ToolPageProps): Promise<Metadata> {
  const { toolSlug } = await params;
  const tool = getToolBySlug(toolSlug);

  if (!tool) {
    return {
      title: "Tool Not Found"
    };
  }

  const canonical = getCanonicalUrl(tool.slug);

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    alternates: {
      canonical: canonical
    },
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDescription,
      url: canonical,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: tool.metaTitle,
      description: tool.metaDescription
    }
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { toolSlug } = await params;
  const tool = getToolBySlug(toolSlug);

  if (!tool) {
    notFound();
  }

  // Related tools
  const relatedTools = tool.relatedSlugs
    .map((slug) => getToolBySlug(slug))
    .filter((t): t is ToolDefinition => Boolean(t));

  // JSON-LD Schemas
  const webAppSchema = generateWebApplicationSchema(tool);
  const faqSchema = generateFAQSchema(tool.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Tools", path: "/#directory" },
    { name: tool.name, path: `/${tool.slug}` }
  ]);

  return (
    <div className="w-full">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Top Intent Section (Header, Breadcrumbs & Functional Tool) */}
      <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 bg-gradient-to-b from-white to-slate-50/60 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: "Text Generators", href: "/#directory" },
              { label: tool.name }
            ]}
          />

          {/* Heading and Intro */}
          <div className="mt-4 mb-8 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-2">
              <span>{tool.category}</span>
              <span aria-hidden="true">·</span>
              <span>Free Online Utility</span>
              <span aria-hidden="true">·</span>
              <span>One-Click Copy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 text-balance">
              {tool.h1}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              {tool.shortDescription}
            </p>
          </div>

          {/* Interactive Workspace (Immediate Access) */}
          <ToolStudio tool={tool} />
        </div>
      </section>

      {/* Deep-Dive Editorial & SEO Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Real Input / Output Example Card */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-indigo-600" />
              <span>Input & Output Example</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <span className="text-xs font-semibold uppercase text-slate-400 block mb-1">
                  Original Input:
                </span>
                <p className="text-base text-slate-800 font-medium">
                  {tool.exampleInput}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-indigo-200 shadow-xs">
                <span className="text-xs font-semibold uppercase text-indigo-600 block mb-1">
                  Transformed Output:
                </span>
                <p className="text-base text-slate-950 font-bold break-words">
                  {tool.exampleOutput}
                </p>
              </div>
            </div>
          </div>

          {/* Step-by-Step Instructions */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-6">
              How to Use the {tool.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tool.instructions.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-slate-200 bg-white"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 font-bold flex items-center justify-center text-sm mb-3">
                    0{idx + 1}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works Technical Explanation */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              How the Transformation Works
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {tool.howItWorks}
            </p>
          </div>

          {/* Use Cases Grid */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-6">
              Popular Use Cases & Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tool.useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">
                    {useCase}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Compatibility & Limitations */}
          <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200">
            <h2 className="text-base font-bold text-amber-950 flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <span>Platform Compatibility & Device Notes</span>
            </h2>
            <p className="text-sm text-amber-900 leading-relaxed">
              {tool.compatibilityNotes}
            </p>
          </div>

          {/* Original Helpful FAQs */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {tool.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-xl border border-slate-200 p-5"
                >
                  <h3 className="text-base font-bold text-slate-900 flex items-start gap-2.5">
                    <HelpCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed pl-6.5">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Tools Internal Linking */}
          {relatedTools.length > 0 && (
            <div className="pt-8 border-t border-slate-200">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-4">
                Related Text Generators & Utilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {relatedTools.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/${rel.slug}`}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-indigo-400 transition-all hover:shadow-xs group"
                  >
                    <span className="text-xs text-indigo-600 font-semibold block mb-1">
                      {rel.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {rel.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                      {rel.shortDescription}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-xs font-medium text-indigo-600">
                      <span>Try tool</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
