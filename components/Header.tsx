"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-slate-950 whitespace-nowrap shrink-0 hover:text-indigo-600 transition-colors"
          >
            TypeCraft
          </Link>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <Link
              href="/"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Text Generator
            </Link>
            <Link
              href="/#directory"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              All Tools
            </Link>
            <Link
              href="/cursed-text-generator"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Cursed Text
            </Link>
            <Link
              href="/cursive-text-generator"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Cursive Script
            </Link>
            <Link
              href="/keyword-strategy"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              SEO Insights
            </Link>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center shrink-0">
            <Link
              href="/#directory"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 min-h-[44px]"
            >
              Browse 20 Tools
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 min-h-[44px] min-w-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-900 hover:bg-slate-50 min-h-[44px] flex items-center"
          >
            Universal Text Generator
          </Link>
          <Link
            href="/#directory"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-900 hover:bg-slate-50 min-h-[44px] flex items-center"
          >
            Directory of All 20 Tools
          </Link>
          <Link
            href="/cursed-text-generator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-900 hover:bg-slate-50 min-h-[44px] flex items-center"
          >
            Cursed Text Generator
          </Link>
          <Link
            href="/upside-down-text-generator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-900 hover:bg-slate-50 min-h-[44px] flex items-center"
          >
            Upside Down Text Generator
          </Link>
          <Link
            href="/cursive-text-generator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-900 hover:bg-slate-50 min-h-[44px] flex items-center"
          >
            Cursive Text Generator
          </Link>
          <Link
            href="/bold-text-generator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-900 hover:bg-slate-50 min-h-[44px] flex items-center"
          >
            Bold Text Generator
          </Link>
          <Link
            href="/keyword-strategy"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-indigo-600 hover:bg-indigo-50 min-h-[44px] flex items-center"
          >
            Semrush Keyword Strategy
          </Link>
          <div className="pt-2">
            <Link
              href="/#directory"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg min-h-[44px]"
            >
              Explore All 20 Tools
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
