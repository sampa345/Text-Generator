import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight text-white">
              TypeCraft
            </Link>
            <p className="mt-3 text-sm text-slate-400 max-w-sm leading-relaxed">
              Clean, zero-latency Unicode text generator and typography suite. Designed for creators, social media managers, and developers. No ads, no tracking, 100% browser-based.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-slate-400">
              <span>Standard Unicode 16.0</span>
              <span aria-hidden="true">·</span>
              <span>Local Execution</span>
              <span aria-hidden="true">·</span>
              <span>Zero Cookies</span>
            </div>
          </div>

          {/* Glitch & Horror Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Glitch & Novelty
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/cursed-text-generator" className="hover:text-white transition-colors">
                  Cursed Text
                </Link>
              </li>
              <li>
                <Link href="/zalgo-text-generator" className="hover:text-white transition-colors">
                  Zalgo Generator
                </Link>
              </li>
              <li>
                <Link href="/upside-down-text-generator" className="hover:text-white transition-colors">
                  Upside Down
                </Link>
              </li>
              <li>
                <Link href="/creepy-text-generator" className="hover:text-white transition-colors">
                  Creepy Gothic
                </Link>
              </li>
              <li>
                <Link href="/scary-text-generator" className="hover:text-white transition-colors">
                  Scary Blackletter
                </Link>
              </li>
              <li>
                <Link href="/weird-text-generator" className="hover:text-white transition-colors">
                  Weird Glyphs
                </Link>
              </li>
            </ul>
          </div>

          {/* Formatting & Social Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Social & Formatting
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/bold-text-generator" className="hover:text-white transition-colors">
                  Bold Text
                </Link>
              </li>
              <li>
                <Link href="/italic-text-generator" className="hover:text-white transition-colors">
                  Italic Fonts
                </Link>
              </li>
              <li>
                <Link href="/cursive-text-generator" className="hover:text-white transition-colors">
                  Cursive Script
                </Link>
              </li>
              <li>
                <Link href="/fancy-text-generator" className="hover:text-white transition-colors">
                  Fancy Text
                </Link>
              </li>
              <li>
                <Link href="/small-text-generator" className="hover:text-white transition-colors">
                  Small Caps
                </Link>
              </li>
              <li>
                <Link href="/bubble-text-generator" className="hover:text-white transition-colors">
                  Bubble Letters
                </Link>
              </li>
              <li>
                <Link href="/strikethrough-text-generator" className="hover:text-white transition-colors">
                  Strikethrough
                </Link>
              </li>
            </ul>
          </div>

          {/* Utilities & Guides Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Utilities & Guides
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/text-case-converter" className="hover:text-white transition-colors">
                  Case Converter
                </Link>
              </li>
              <li>
                <Link href="/text-repeater" className="hover:text-white transition-colors">
                  Text Repeater
                </Link>
              </li>
              <li>
                <Link href="/text-reverser" className="hover:text-white transition-colors">
                  Text Reverser
                </Link>
              </li>
              <li>
                <Link href="/invisible-character-generator" className="hover:text-white transition-colors">
                  Invisible Space
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Unicode Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Engine
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p suppressHydrationWarning>© 2026 TypeCraft. Built with Next.js App Router. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-200 transition-colors">
              About
            </Link>
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms of Use
            </Link>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Contact
            </Link>
            <a href="/sitemap.xml" className="hover:text-slate-200 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
