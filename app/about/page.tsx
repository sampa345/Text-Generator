import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getCanonicalUrl } from "@/lib/seo";
import { ShieldCheck, Cpu, Globe, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About TypeCraft – Our Mission & Architecture",
  description:
    "Learn about TypeCraft, our mission to build fast, private, zero-tracking Unicode text generators for creators, writers, and gamers.",
  alternates: {
    canonical: getCanonicalUrl("about")
  }
};

export default function AboutPage() {
  return (
    <div className="w-full bg-white py-8 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumbs items={[{ label: "About" }]} />

        <div className="max-w-2xl">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider block mb-2">
            About TypeCraft
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            A Modern, Private Unicode Utility Suite
          </h1>
          <p className="mt-3 text-lg text-slate-600 leading-relaxed">
            TypeCraft was built to solve a simple frustration: online text formatting tools were cluttered with intrusive ads, suspicious downloads, and sluggish performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <Cpu className="w-8 h-8 text-indigo-600 mb-3" />
            <h2 className="text-lg font-bold text-slate-900">100% Client-Side Engine</h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Every transformation happens locally inside your browser using pure TypeScript algorithms. There are no server round-trips or API latency.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
            <h2 className="text-lg font-bold text-slate-900">Total Privacy by Design</h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              We never collect, store, or transmit the text you type or paste. Your messages, usernames, and creative copy remain entirely private to you.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <Globe className="w-8 h-8 text-blue-600 mb-3" />
            <h2 className="text-lg font-bold text-slate-900">Unicode 16.0 Standard</h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Built on genuine mathematical alphanumeric symbols, combining diacritics, and enclosed glyphs that are recognized natively across iOS, Android, and Windows.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <Users className="w-8 h-8 text-purple-600 mb-3" />
            <h2 className="text-lg font-bold text-slate-900">Accessible & Mobile First</h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Designed with 44px+ touch targets, zero layout shifts, high-contrast typography, and full keyboard navigation for desktop and mobile.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
          >
            ← Back to Text Generator
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </div>
  );
}
