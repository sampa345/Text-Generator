"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { transformAllStyles, TransformedCard } from "@/lib/text-engine";
import { CopyButton } from "./CopyButton";
import { RotateCcw, Sparkles, ArrowRight, Search, Check } from "lucide-react";

const SAMPLES = [
  "TypeCraft Text Studio",
  "Stand out on Instagram & Discord",
  "Never give up, keep building!",
  "Horror & glitch aesthetic"
];

export function HomeStudio() {
  const [inputText, setInputText] = useState("TypeCraft Aesthetic Studio");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const characterCount = inputText.length;
  const wordCount = inputText.trim() ? inputText.trim().split(/\s+/).length : 0;
  const lineCount = inputText ? inputText.split("\n").length : 0;

  // Generate live cards
  const allCards = useMemo(() => {
    return transformAllStyles(inputText);
  }, [inputText]);

  // Filtered cards
  const filteredCards = useMemo(() => {
    return allCards.filter((card) => {
      const matchesCategory =
        activeCategory === "all" || card.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.output.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allCards, activeCategory, searchQuery]);

  const handleClear = () => {
    setInputText("");
  };

  const handleToast = (name: string) => {
    setToastMessage(`Copied ${name} to clipboard!`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <div className="w-full" suppressHydrationWarning>
      {/* Workspace Box */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-4 sm:p-6 lg:p-8" suppressHydrationWarning>
        {/* Input Header & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <label htmlFor="master-text-input" className="text-sm font-semibold text-slate-900">
            Enter or paste your text:
          </label>
          <div className="flex items-center gap-4 text-xs text-slate-500 tabular-nums font-mono" suppressHydrationWarning>
            <span>
              <strong className="text-slate-800">{characterCount}</strong> chars
            </span>
            <span aria-hidden="true">·</span>
            <span>
              <strong className="text-slate-800">{wordCount}</strong> words
            </span>
            <span aria-hidden="true">·</span>
            <span>
              <strong className="text-slate-800">{lineCount}</strong> lines
            </span>
            <button
              type="button"
              onClick={handleClear}
              disabled={!inputText}
              className="text-xs font-medium text-slate-500 hover:text-rose-600 disabled:opacity-40 transition-colors ml-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rose-500 rounded px-1"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Primary Textarea */}
        <div className="mt-3 relative">
          <textarea
            id="master-text-input"
            rows={3}
            value={inputText}
            suppressHydrationWarning
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message here to preview 20+ text styles in real time..."
            className="w-full rounded-xl border border-slate-300 p-3.5 sm:p-4 text-base sm:text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition-all resize-y min-h-[90px]"
          />
        </div>

        {/* Quick Sample Prompts & Shortcuts */}
        <div className="mt-3 flex flex-wrap items-center gap-2" suppressHydrationWarning>
          <span className="text-xs font-medium text-slate-400">Try sample:</span>
          {SAMPLES.map((sample, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setInputText(sample)}
              className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-md transition-colors whitespace-nowrap min-h-[32px]"
            >
              &quot;{sample}&quot;
            </button>
          ))}
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Category Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {[
            { id: "all", label: "All Styles" },
            { id: "fancy", label: "Fancy & Script" },
            { id: "glitch", label: "Glitch & Horror" },
            { id: "formatting", label: "Formatting" },
            { id: "utility", label: "Utilities" }
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ${
                activeCategory === cat.id
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-white hover:bg-slate-100 text-slate-600 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Filter */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search styles (e.g., bold, cursive)..."
            className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 min-h-[40px]"
          />
        </div>
      </div>

      {/* Live Preview Multi-Card Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl border border-slate-200/80 hover:border-slate-300 p-4 sm:p-5 transition-shadow hover:shadow-xs flex flex-col justify-between"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between gap-3 pb-2.5 border-b border-slate-100">
              <span className="text-sm font-semibold text-slate-900">{card.name}</span>
              <Link
                href={`/${card.slug}`}
                className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center gap-1 group whitespace-nowrap"
              >
                <span>Tool details</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Output Display */}
            <div
              className="my-3.5 p-3 rounded-lg bg-slate-50/80 border border-slate-100 font-sans text-base sm:text-lg text-slate-900 break-words select-all max-h-36 overflow-y-auto leading-relaxed"
              suppressHydrationWarning
            >
              {card.output || (
                <span className="text-slate-400 italic text-sm">Empty output...</span>
              )}
            </div>

            {/* Card Footer with Copy CTA */}
            <div className="flex items-center justify-between gap-3 pt-2">
              <span className="text-xs text-slate-500 tabular-nums font-mono" suppressHydrationWarning>
                {card.output.length} characters
              </span>
              <CopyButton
                textToCopy={card.output}
                label="Copy"
                variant="primary"
                onCopySuccess={() => handleToast(card.name)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Accessible floating toast feedback */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-50 bg-slate-950 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[2.5]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
