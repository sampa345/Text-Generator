# TypeCraft – Premium SEO-Optimized Text Generator Web App

TypeCraft is a modern, high-performance Unicode text styling and transformation web application built with **Next.js 15+ App Router**, **TypeScript**, and **Tailwind CSS**. It is engineered to satisfy the search intent of users seeking plain-text styling utilities across the United States, United Kingdom, and globally, directly implementing the provided Semrush keyword dataset.

---

## 🚀 Key Highlights & Architecture

- **100% Client-Side Transformation Engine**: All 20 text styles are generated locally in memory via pure TypeScript algorithms (`lib/text-engine.ts`). Zero latency, zero external API costs, and complete privacy (user-entered text is never sent over the network).
- **Multi-Card Real-Time Studio**: Entering text on the homepage triggers instant, real-time transformations across 20+ cards with one-click clipboard copying and live character/word/line counters.
- **20 Dedicated SEO Tool Landing Pages**: Each tool (`/cursed-text-generator`, `/upside-down-text-generator`, `/cursive-text-generator`, etc.) features focused interactive controls (sliders, case switchers, multipliers), step-by-step instructions, use-case guides, and device compatibility matrices.
- **Search Intent & Semrush Keyword Mapping**: Complete keyword architecture dashboard (`/keyword-strategy`) tracking search volumes, keyword difficulty (KD), CPC, and intent clusters.
- **Technical SEO & Schema.org Structured Data**:
  - Valid JSON-LD schemas (`WebSite`, `Organization`, `WebApplication`, `BreadcrumbList`, `FAQPage`, `Article`).
  - Dynamic XML sitemap (`/sitemap.xml`) generated via `app/sitemap.ts`.
  - Dynamic `robots.txt` generated via `app/robots.ts`.
  - Canonical URL resolution and complete OpenGraph/Twitter Card metadata on every route.
- **Mobile-First & WCAG Accessible**: Tested across viewports from 320px to 1440px. Touch targets $\ge 44\text{px}$, zero horizontal overflow, visible focus rings, and high contrast.

---

## 🛠️ Included Text Generators & Utilities

1. **Text Generator** (`/`): Universal studio showing live transformations in all available styles.
2. **Cursed Text Generator** (`/cursed-text-generator`): Zalgo glitch combining diacritics with adjustable corruption slider.
3. **Upside Down Text Generator** (`/upside-down-text-generator`): 180° inverted Unicode mapping with optional reverse ordering.
4. **Creepy Text Generator** (`/creepy-text-generator`): Eerie Fraktur typography with combining solidus accents.
5. **Scary Text Generator** (`/scary-text-generator`): Heavy distressed blackletter glyphs.
6. **Weird Text Generator** (`/weird-text-generator`): Quirky phonetic and mathematical symbol substitutions.
7. **Italic Text Generator** (`/italic-text-generator`): Mathematical Sans-Serif and Serif Italic letters (`𝘢𝘣𝘤` / *𝑎𝑏𝑐*).
8. **Fire Text Generator** (`/fire-text-generator`): Flame accents and double-struck lettering.
9. **Cursive Text Generator** (`/cursive-text-generator`): Bold calligraphy (`𝓬𝓾𝓻𝓼𝓲𝓿𝓮`) and delicate script (`𝒸𝓊𝓇𝓈𝒾𝓋ℯ`).
10. **Bold Text Generator** (`/bold-text-generator`): Modern Sans-Serif Bold and Classic Serif Bold (`𝗯𝗼𝗹𝗱` / **𝐛𝐨𝐥𝐝**).
11. **Fancy Text Generator** (`/fancy-text-generator`): Double-Struck and Medieval Fraktur variations.
12. **Small Text Generator** (`/small-text-generator`): Small Capitals (`ꜱᴍᴀʟʟ`) and Tiny Superscript (`ˢᵐᵃˡˡ`).
13. **Bubble Text Generator** (`/bubble-text-generator`): Circled outline (`ⓑⓤⓑⓑⓛⓔ`) and solid filled (`🅑🅤🅑🅑🅛🅔`).
14. **Strikethrough Text Generator** (`/strikethrough-text-generator`): Line stroke (`s̶t̶r̶i̶k̶e̶`), slash (`s̷l̷a̷s̷h̷`), and tildes.
15. **Zalgo Text Generator** (`/zalgo-text-generator`): Fine-tuned chaos tool with independent Up, Mid, and Down sliders.
16. **Text Repeater** (`/text-repeater`): Repeat text up to 5,000x with custom delimiters (newline, space, comma) and numbering.
17. **Text Reverser** (`/text-reverser`): Reverse characters, flip word order, reverse lines, or mirror flip.
18. **Text Case Converter** (`/text-case-converter`): UPPERCASE, lowercase, Title Case, Sentence case, camelCase, kebab-case, snake_case, and aLtErNaTiNg case.
19. **Invisible Character Generator** (`/invisible-character-generator`): Zero-Width Space (U+200B), Hangul Filler (U+3164), and Zero-Width Joiner with inspection decoder.
20. **Unicode Symbol Text Generator** (`/unicode-symbol-text-generator`): Stars, angel wings, sparkles, and aesthetic borders.

---

## 📊 Semrush Keyword Strategy Summary

| Target Keyword | Target URL | US Vol | KD % | CPC | Search Intent | Keyword Cluster |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **text generator** | `/` | 33,100 | 19% | $5.20 | Informational | Core Text Generation |
| **cursed text generator** | `/cursed-text-generator` | 9,900 | 29% | $0.20 | Informational | Glitch & Horror |
| **upside down text generator** | `/upside-down-text-generator` | 9,900 | 26% | $0.40 | Informational | Transform & Utility |
| **creepy text generator** | `/creepy-text-generator` | 5,400 | 26% | $0.25 | Informational | Glitch & Horror |
| **scary text generator** | `/scary-text-generator` | 5,400 | 28% | $0.30 | Informational | Glitch & Horror |
| **weird text generator** | `/weird-text-generator` | 5,400 | 16% | $0.35 | Informational | Novelty & Glitch |
| **italic text generator** | `/italic-text-generator` | 4,400 | 22% | $0.80 | Commercial | Typography Formatting |
| **fire text generator** | `/fire-text-generator` | 2,900 | 15% | $0.20 | Informational | Decorative Styling |
| **cursive text generator** | `/cursive-text-generator` | 18,100 | 24% | $0.70 | Informational | Handwriting & Script |
| **bold text generator** | `/bold-text-generator` | 40,500 | 25% | $0.90 | Informational | Typography Formatting |
| **fancy text generator** | `/fancy-text-generator` | 90,500 | 30% | $0.65 | Informational | Aesthetic Typography |
| **small text generator** | `/small-text-generator` | 22,200 | 21% | $0.45 | Informational | Typography Formatting |
| **zalgo text generator** | `/zalgo-text-generator` | 18,100 | 24% | $0.25 | Informational | Glitch & Horror |
| **text repeater** | `/text-repeater` | 14,800 | 22% | $0.35 | Transactional | Text Utilities |

*Full interactive dataset available on `/keyword-strategy`.*

---

## 🔍 Google Search Console (GSC) Setup Guide

Follow these exact steps when deploying TypeCraft to production:

### 1. Add Domain Property
1. Navigate to [Google Search Console](https://search.google.com/search-console).
2. Choose **Domain** property (recommended) and enter your production apex domain (e.g. `typecraft.app`).
3. Copy the TXT verification token provided by Google.

### 2. Verify Domain Ownership
1. Add the TXT record in your DNS provider (Cloudflare, Namecheap, Google Domains).
2. Wait 2–5 minutes for DNS propagation, then click **Verify** in GSC.

### 3. Submit XML Sitemap
1. Under the **Indexing** section in the left sidebar, click **Sitemaps**.
2. In the "Add a new sitemap" input, enter `sitemap.xml` and click **Submit**.
3. Verify that Google shows status **Success** with all published tool routes discovered.

### 4. URL Inspection & Initial Crawl Request
1. Enter your homepage URL (`https://yourdomain.com/`) in the top search bar.
2. Click **Request Indexing**.
3. Inspect priority landing pages (`/cursed-text-generator`, `/upside-down-text-generator`, `/cursive-text-generator`) to confirm that Googlebot renders the client-side tool and reads the semantic pre-rendered HTML.

### 5. Monitor Queries, CTR & Core Web Vitals
- After 7–14 days, review the **Performance** report for impressions, average position, and search queries.
- Monitor the **Core Web Vitals** tab to confirm LCP $\le 2.5\text{s}$, INP $\le 200\text{ms}$, and CLS $\le 0.1$.

---

## 📅 Prioritized 90-Day SEO Action Plan

### Month 1: Technical Foundation & Indexing (Days 1–30)
- [x] Launch TypeCraft with zero layout shift (CLS $\le 0.05$) and instant client-side execution.
- [x] Deploy dynamic `sitemap.xml` and `robots.txt` ensuring all 20 tool routes are crawlable.
- [x] Configure Google Search Console and submit sitemap.
- [ ] Monitor index coverage weekly; submit manual indexing requests for any non-indexed priority tool URLs.
- [ ] Benchmark mobile Core Web Vitals using PageSpeed Insights (target: 95+ Mobile Score).

### Month 2: Content Optimization & Social Distribution (Days 31–60)
- [ ] Audit search queries in GSC: identify keywords ranking in positions 8–20 (low-hanging fruit).
- [ ] Refine H1s and meta descriptions for pages with low CTR (&lt;3%) to boost organic clicks.
- [ ] Publish 3 additional educational articles answering specific search queries (e.g., "Discord invisible name trick", "Unicode font generator for TikTok bios").
- [ ] Build contextual backlinks by answering questions on Reddit (r/discordapp, r/Instagram) and Quora referencing TypeCraft's privacy-first client-side tool.

### Month 3: International Scaling & Feature Expansion (Days 61–90)
- [ ] Analyze UK search engine market share and verify ranking presence across Google.co.uk.
- [ ] Implement `hreflang` tags if launching localized Spanish, French, or German Unicode mappings.
- [ ] A/B test tool workspace copy CTA buttons ("Copy Result" vs. "Instant Copy") to optimize conversion.
- [ ] Monitor backlink velocity and domain rating growth in Semrush.

---

## 🧪 Testing & Verification

Run the test suite:
```bash
npm test
```
All 36 unit tests cover:
- Mathematical Bold (Serif & Sans)
- Mathematical Italic and Script
- Combining Diacritics (Zalgo and Cursed)
- Upside Down mapping and punctuation reversal
- Text repeater delimiters and line numbering
- All 8 Case conversion modes
- Invisible character generation and reveal inspector
- Surrogate pairs and compound emoji preservation

Build for production:
```bash
npm run build
```
