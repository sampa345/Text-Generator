import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getCanonicalUrl } from "@/lib/seo";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Unicode Text & Typography Guides",
  description:
    "Educational guides on Unicode text generation, social media font compatibility, and copying and pasting cursive scripts.",
  alternates: {
    canonical: getCanonicalUrl("blog")
  }
};

export default function BlogIndexPage() {
  return (
    <div className="w-full bg-slate-50/50 py-8 lg:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: "Guides & Articles" }]} />

        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Unicode & Typography Guides
          </h1>
          <p className="mt-2 text-base text-slate-600">
            Learn the mechanics of Unicode encoding, mobile font compatibility, and social media styling.
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-indigo-400 transition-all hover:shadow-xs group"
            >
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-2">
                <span>{post.publishedAt}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readingTime}</span>
                <span aria-hidden="true">·</span>
                <span>{post.author}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {post.description}
              </p>

              <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {post.toolLinks.map((tl, i) => (
                    <span
                      key={i}
                      className="text-xs text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded font-medium"
                    >
                      {tl.label}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
