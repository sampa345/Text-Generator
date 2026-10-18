import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "TypeCraft Privacy Policy. We do not collect, store, or transmit your text.",
  alternates: {
    canonical: getCanonicalUrl("privacy")
  }
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-white py-8 lg:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400">Last updated: March 2026</p>

        <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 space-y-6 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Local Processing Guarantee</h2>
            <p>
              TypeCraft is designed from the ground up to protect user privacy. All text transformation algorithms (including cursive, bold, glitch, upside-down, and case conversions) run <strong>100% locally in your web browser</strong>. Your input text is never sent to our servers, third-party APIs, or analytics vendors.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. Information We Do Not Collect</h2>
            <p>
              We do not collect names, email addresses, passwords, IP addresses, or clipboard contents. When you click &ldquo;Copy Result&rdquo;, your browser&apos;s standard Clipboard API writes the text directly to your local operating system memory without network transmission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. Cookies and Local Storage</h2>
            <p>
              TypeCraft does not use tracking cookies, advertising identifiers, or persistent profiling beacons. Any future preferences (such as light/dark mode preference) are stored strictly on your local device.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Third-Party Hosting</h2>
            <p>
              Our web application assets (HTML, CSS, JavaScript) are served via secure CDN infrastructure. Standard technical web server access logs (such as HTTP request headers and browser user agents) may be temporarily recorded by the hosting provider strictly for DDoS mitigation and reliability monitoring.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. Contact Information</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at: <br />
              <code>privacy@typecraft.app</code> (or via our <Link href="/contact" className="text-indigo-600 underline">contact page</Link>).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
