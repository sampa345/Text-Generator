"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { toolsRegistry, ToolDefinition } from "@/lib/tools-registry";
import { Search, ArrowRight } from "lucide-react";

export function ToolDirectory() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Glitch & Horror",
    "Social & Aesthetic",
    "Typography Formatting",
    "Utilities"
  ];

  const filteredTools = useMemo(() => {
    return toolsRegistry.filter((tool) => {
      const matchesCategory =
        selectedCategory === "All" || tool.category === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="directory" className="py-12 lg:py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Categorized Tool Directory
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Browse all 20 specialized Unicode transformation tools and generators.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter tools by keyword..."
            className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 min-h-[40px]"
          />
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="mt-6 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap min-h-[38px] ${
              selectedCategory === cat
                ? "bg-indigo-600 text-white shadow-xs"
                : "bg-white hover:bg-slate-100 text-slate-600 border border-slate-200"
            }`}
          >
            {cat} {cat === "All" ? `(${toolsRegistry.length})` : ""}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTools.map((tool) => (
          <Link
            key={tool.id}
            href={`/${tool.slug}`}
            className="group bg-white rounded-xl border border-slate-200/90 hover:border-indigo-400 p-5 transition-all hover:shadow-xs flex flex-col justify-between"
          >
            <div>
              {/* Category & Status inline metadata */}
              <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400 pb-2">
                <span>{tool.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-700">Client-Side</span>
              </div>

              <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {tool.name}
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2">
                {tool.shortDescription}
              </p>

              {/* Sample output preview */}
              <div className="mt-4 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-800 font-mono truncate">
                <span className="text-slate-400 select-none">Ex: </span>
                {tool.exampleOutput}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-indigo-600 group-hover:text-indigo-700">
              <span>Open Generator</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
