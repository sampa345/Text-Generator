import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getCanonicalUrl, getBaseUrl } from "@/lib/seo";
import { ArrowRight, Calendar, Clock, User, Sparkles } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  const canonical = getCanonicalUrl(`blog/${post.slug}`);

  return {
    title: `${post.title} | TypeCraft Guides`,
    description: post.description,
    alternates: {
      canonical: canonical
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonical,
      type: "article",
      publishedTime: post.publishedAt
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const baseUrl = getBaseUrl();
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author
    },
    publisher: {
      "@type": "Organization",
      name: "TypeCraft",
      logo: `${baseUrl}/logo.png`
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": getCanonicalUrl(`blog/${post.slug}`)
    }
  };

  return (
    <div className="w-full bg-white py-8 lg:py-12">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: "Guides", href: "/blog" },
            { label: post.title }
          ]}
        />

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.publishedAt}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readingTime}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              <span>{post.author}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 text-balance leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            {post.description}
          </p>
        </header>

        {/* Highlighted Tool Banner */}
        <div className="p-4 sm:p-5 rounded-xl bg-indigo-50 border border-indigo-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-indigo-900 block">
              Try the live interactive generators mentioned in this guide:
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {post.toolLinks.map((tl, i) => (
                <Link
                  key={i}
                  href={`/${tl.slug}`}
                  className="text-xs bg-white text-indigo-700 font-medium px-2.5 py-1 rounded-md border border-indigo-200 hover:bg-indigo-600 hover:text-white transition-colors"
                >
                  {tl.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center text-xs font-semibold bg-indigo-600 text-white px-3.5 py-2 rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap shrink-0 min-h-[40px]"
          >
            <span>Open All-in-One Studio</span>
          </Link>
        </div>

        {/* Content Body */}
        <div className="prose prose-slate max-w-none pt-4 text-slate-700 leading-relaxed space-y-6">
          {post.content.split("\n\n").map((block, idx) => {
            const trimmed = block.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-xl font-bold text-slate-900 pt-4">
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }
            if (trimmed.startsWith("- ")) {
              const items = trimmed.split("\n").map((line) => line.replace(/^- /, "").trim());
              return (
                <ul key={idx} className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
                  {items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              );
            }
            if (/^\d+\.\s/.test(trimmed)) {
              const items = trimmed.split("\n").map((line) => line.replace(/^\d+\.\s*/, "").trim());
              return (
                <ol key={idx} className="list-decimal pl-5 space-y-2 text-sm sm:text-base">
                  {items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ol>
              );
            }

            return (
              <p key={idx} className="text-base text-slate-700 leading-relaxed">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Related Navigation */}
        <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
          <Link
            href="/blog"
            className="text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
          >
            ← Back to All Guides
          </Link>
          <Link
            href="/#directory"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center gap-1"
          >
            <span>Explore 20 Text Tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </div>
  );
}
