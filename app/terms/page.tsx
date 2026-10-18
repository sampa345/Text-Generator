import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "TypeCraft Terms of Use. Free online text transformation utilities.",
  alternates: {
    canonical: getCanonicalUrl("terms")
  }
};

export default function TermsPage() {
  return (
    <div className="w-full bg-white py-8 lg:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs items={[{ label: "Terms of Use" }]} />

        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Terms of Use
        </h1>
        <p className="text-xs text-slate-400">Last updated: March 2026</p>

        <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 space-y-6 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing and using TypeCraft (&ldquo;the Service&rdquo;), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you may discontinue use of the website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. Description of Service</h2>
            <p>
              TypeCraft provides free, client-side Unicode text formatting tools for personal, artistic, and commercial use. The service is provided &ldquo;as is&rdquo; without warranties of any kind regarding character rendering across every proprietary operating system.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. Acceptable Use</h2>
            <p>
              You agree not to use the service to generate harmful, fraudulent, or defamatory content, or to flood or disrupt third-party communication networks with malicious repeated or corrupted text.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Intellectual Property</h2>
            <p>
              The code, design system, and interface of TypeCraft are owned by the operators. You retain 100% full copyright and ownership over any text or creative copy you transform using our tools.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. Modifications to Service</h2>
            <p>
              We reserve the right to modify or discontinue any tool or feature at any time without notice.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
