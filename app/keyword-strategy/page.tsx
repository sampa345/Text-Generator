import { Metadata } from "next";
import Link from "next/link";
import { semrushKeywords, semrushSummary } from "@/lib/keyword-dataset";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getCanonicalUrl } from "@/lib/seo";
import { ExternalLink, Search, BarChart3, Target, DollarSign, Database, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Semrush Keyword Research Strategy & Architecture Map",
  description:
    "Grounded keyword architecture mapping 404+ Semrush keywords across 20 dedicated tool targets with search volumes, difficulty, CPC, and intent satisfaction.",
  alternates: {
    canonical: getCanonicalUrl("keyword-strategy")
  }
};

export default function KeywordStrategyPage() {
  const totalVolume = semrushKeywords.reduce((acc, k) => acc + k.searchVolume, 0);
  const avgKd = Math.round(
    semrushKeywords.reduce((acc, k) => acc + k.keywordDifficulty, 0) / semrushKeywords.length
  );
  const highCpc = Math.max(...semrushKeywords.map((k) => k.cpc));

  return (
    <div className="w-full bg-slate-50/50 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "SEO Keyword Strategy" }]} />

        {/* Title & Overview */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-2">
            <span>Evidence-Based Keyword Strategy</span>
            <span aria-hidden="true">·</span>
            <span>Semrush US & Global Databases</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Semrush Keyword Architecture Map
          </h1>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Direct correlation between the supplied Semrush Keyword Magic Tool research dataset and our production URL hierarchy. Every page on TypeCraft targets a distinct, verified search intent with tailored tools and schema markup.
          </p>
        </div>

        {/* Metric Summary Strips */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Primary Keyword Vol (US)
            </span>
            <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
              33.1K
            </p>
            <span className="mt-1 text-xs text-slate-500 block">
              Global: 276.9K monthly searches
            </span>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Tracked Cluster Volume
            </span>
            <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-indigo-600 font-mono tabular-nums">
              {totalVolume.toLocaleString()}
            </p>
            <span className="mt-1 text-xs text-slate-500 block">
              Across 20 dedicated tool targets
            </span>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Average Difficulty (KD)
            </span>
            <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-emerald-600 font-mono tabular-nums">
              {avgKd} <span className="text-sm font-normal text-slate-500">/ 100</span>
            </p>
            <span className="mt-1 text-xs text-emerald-700 font-medium block">
              Low-to-medium competition
            </span>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Peak Keyword CPC
            </span>
            <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
              ${highCpc.toFixed(2)}
            </p>
            <span className="mt-1 text-xs text-slate-500 block">
              High commercial intent on root keyword
            </span>
          </div>
        </div>

        {/* Structured Dataset Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-5 sm:p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Verified Keyword-to-URL Mapping Table
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Data extracted directly from Semrush Keyword Magic Tool screenshots and US search database.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Target Keyword</th>
                  <th className="py-3.5 px-4">Database</th>
                  <th className="py-3.5 px-4 text-right">Search Vol</th>
                  <th className="py-3.5 px-4 text-right">KD %</th>
                  <th className="py-3.5 px-4 text-right">CPC</th>
                  <th className="py-3.5 px-4">Intent</th>
                  <th className="py-3.5 px-4">Cluster</th>
                  <th className="py-3.5 px-4 sm:px-6">Assigned URL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {semrushKeywords.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">
                      {row.keyword}
                      {row.isPrimary && (
                        <span className="ml-2 text-[10px] bg-indigo-50 text-indigo-700 font-bold px-1.5 py-0.5 rounded">
                          PRIMARY
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">
                      {row.country}
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono font-medium tabular-nums text-slate-900">
                      {row.searchVolume.toLocaleString()}
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono tabular-nums">
                      <span
                        className={`font-medium ${
                          row.keywordDifficulty <= 20
                            ? "text-emerald-700"
                            : row.keywordDifficulty <= 25
                            ? "text-blue-700"
                            : "text-amber-700"
                        }`}
                      >
                        {row.keywordDifficulty}%
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono tabular-nums text-slate-700">
                      ${row.cpc.toFixed(2)}
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="text-xs text-slate-600 font-medium">
                        {row.searchIntent}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap">
                      {row.keywordCluster}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 whitespace-nowrap font-mono text-xs">
                      <Link
                        href={row.targetUrl}
                        className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline inline-flex items-center gap-1"
                      >
                        <span>{row.targetUrl}</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Strategic Methodology Notes */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
          <h2 className="text-lg font-bold text-slate-900">
            SEO Architecture Methodology & Anti-Cannibalization Rules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 leading-relaxed">
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">
                1. Dedicated URL Separation
              </h3>
              <p>
                Keywords with distinctly different user intent (e.g. &ldquo;cursed text generator&rdquo; vs &ldquo;upside down text generator&rdquo; vs &ldquo;bold text generator&rdquo;) are allocated independent static landing pages with purpose-built algorithms, avoiding dilution.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">
                2. Intent Consolidation (No Duplicate Pages)
              </h3>
              <p>
                Closely matched variants like &ldquo;cursive text generator copy and paste&rdquo; and &ldquo;cursive text generator&rdquo; are consolidated onto a single authoritative page (<code>/cursive-text-generator</code>) to prevent internal keyword cannibalization.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">
                3. Technical Schema Implementation
              </h3>
              <p>
                Every page integrates Google-compliant <code>WebApplication</code>, <code>BreadcrumbList</code>, and <code>FAQPage</code> JSON-LD schemas matching the visible content verbatim with zero fabricated reviews or ratings.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">
                4. Client-Side Performance & Core Web Vitals
              </h3>
              <p>
                Zero server-side database bottlenecks. Transformations execute instantly in the browser (&lt;5ms INP), achieving optimal Core Web Vitals across both mobile and desktop crawlers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
