"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import { transformAllStyles, TransformedCard } from "@/lib/text-engine";
import { CopyButton } from "./CopyButton";
import { motion, AnimatePresence } from "motion/react";
import {
  RotateCcw,
  Sparkles,
  ArrowRight,
  Search,
  Check,
  Instagram,
  MessageSquare,
  Type,
  Smartphone,
  Eye,
  Layers,
  BadgeCheck,
  Hash,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Sliders,
  X,
  Copy,
  Sun,
  Moon,
  MoreHorizontal,
  Grid3X3,
  UserCheck,
  UserPlus,
  ExternalLink,
  Share2
} from "lucide-react";

const SAMPLES = [
  "TypeCraft Text Studio",
  "Stand out on Instagram & Discord",
  "Never give up, keep building!",
  "Horror & glitch aesthetic"
];

const WEIGHT_SPECS = [
  {
    weightClass: "font-normal",
    numeric: "400",
    name: "Regular",
    platformRole: "Instagram bio body & captions · Discord standard message · Twitter timeline",
    tag: "Standard Text",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    weightClass: "font-medium",
    numeric: "500",
    name: "Medium",
    platformRole: "Discord channel topic · TikTok bio caption · Threads post body",
    tag: "Medium Weight",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200"
  },
  {
    weightClass: "font-semibold",
    numeric: "600",
    name: "Semi-Bold",
    platformRole: "Instagram profile display name · Discord username & roles · X/Twitter handle",
    tag: "Profile Display",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200"
  },
  {
    weightClass: "font-bold",
    numeric: "700",
    name: "Bold",
    platformRole: "Discord markdown **bold** · Instagram Story overlay · Highlighted announcement",
    tag: "Heavy Emphasis",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
  },
  {
    weightClass: "font-extrabold",
    numeric: "800",
    name: "Extra-Bold",
    platformRole: "Gaming clan tag · Twitch streaming banner · High-contrast thumbnail title",
    tag: "Ultra Accent",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200"
  }
];

export function HomeStudio() {
  const [inputText, setInputText] = useState("TypeCraft Aesthetic Studio");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStyleId, setSelectedStyleId] = useState<string>("cursive-bold");
  const [previewTab, setPreviewTab] = useState<"instagram" | "discord" | "weights">("instagram");

  // Instagram Studio Specific States
  const [instaHandle, setInstaHandle] = useState("typecraft.creator");
  const [instaTheme, setInstaTheme] = useState<"light" | "dark">("light");
  const [instaSubView, setInstaSubView] = useState<"profile" | "feed" | "story">("profile");
  const [instaFollowed, setInstaFollowed] = useState(false);
  const [instaLiked, setInstaLiked] = useState(false);
  const [instaLikesCount, setInstaLikesCount] = useState(1428);

  const [toastData, setToastData] = useState<{
    title: string;
    description?: string;
  } | null>(null);

  const previewSectionRef = useRef<HTMLDivElement>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const characterCount = inputText.length;
  const wordCount = inputText.trim() ? inputText.trim().split(/\s+/).length : 0;
  const lineCount = inputText ? inputText.split("\n").length : 0;

  // Generate live cards
  const allCards = useMemo(() => {
    return transformAllStyles(inputText);
  }, [inputText]);

  // Selected card for social media & font weight preview
  const activePreviewCard = useMemo(() => {
    const found = allCards.find((c) => c.id === selectedStyleId);
    return (
      found ||
      allCards[0] || {
        id: "raw",
        name: "Standard Text",
        category: "raw",
        output: inputText,
        slug: ""
      }
    );
  }, [allCards, selectedStyleId, inputText]);

  // Filtered cards for multi-card grid
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

  const handleToast = (title: string, description?: string) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToastData({ title, description });
    toastTimeoutRef.current = setTimeout(() => {
      setToastData(null);
    }, 2800);
  };

  const handleInspectStyle = (cardId: string) => {
    setSelectedStyleId(cardId);
    if (previewSectionRef.current) {
      previewSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const card = allCards.find((c) => c.id === cardId);
    if (card) {
      handleToast("Loaded into Preview", `"${card.name}" is now ready in Social Studio`);
    }
  };

  return (
    <div className="w-full space-y-8" suppressHydrationWarning>
      {/* Primary Input Workspace Box */}
      <div
        className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-4 sm:p-6 lg:p-8"
        suppressHydrationWarning
      >
        {/* Input Header & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <label htmlFor="master-text-input" className="text-sm font-semibold text-slate-900">
            Enter or paste your text:
          </label>
          <div
            className="flex items-center gap-4 text-xs text-slate-500 tabular-nums font-mono"
            suppressHydrationWarning
          >
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
              onClick={() => {
                if (!inputText) return;
                navigator.clipboard.writeText(inputText);
                handleToast("Copied original text!", `${inputText.length} characters ready to paste`);
              }}
              disabled={!inputText}
              className="text-xs font-medium text-slate-600 hover:text-indigo-600 disabled:opacity-40 transition-colors ml-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 rounded px-1.5 py-0.5 border border-slate-200 hover:border-indigo-300"
            >
              Copy Input
            </button>

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

      {/* LIVE SOCIAL MEDIA & FONT WEIGHT PREVIEW SECTION */}
      <section
        ref={previewSectionRef}
        id="social-preview"
        aria-label="Social Media Live Preview"
        className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all"
      >
        {/* Section Header */}
        <div className="p-4 sm:p-6 border-b border-slate-100 bg-slate-50/70 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-1">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Interactive Social Media & Font Weight Inspector</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Live Preview in Social Media Environments
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Visualize how your transformed text renders at different system font weights across Instagram and Discord before copying.
            </p>
          </div>

          {/* Platform Tab Switchers */}
          <div className="flex items-center p-1 bg-slate-200/70 rounded-xl gap-1 shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setPreviewTab("instagram")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                previewTab === "instagram"
                  ? "bg-white text-rose-600 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram Studio</span>
            </button>

            <button
              type="button"
              onClick={() => setPreviewTab("discord")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                previewTab === "discord"
                  ? "bg-slate-900 text-indigo-400 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Discord</span>
            </button>

            <button
              type="button"
              onClick={() => setPreviewTab("weights")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                previewTab === "weights"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Type className="w-3.5 h-3.5" />
              <span>Weight Matrix (400-800)</span>
            </button>
          </div>
        </div>

        {/* Style Selector Strip */}
        <div className="px-4 sm:px-6 py-3 bg-white border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 sm:pb-0">
            <span className="text-xs font-medium text-slate-500 whitespace-nowrap flex items-center gap-1">
              <Sliders className="w-3 h-3 text-indigo-600" />
              <span>Previewing Style:</span>
            </span>
            <div className="flex items-center gap-1.5 flex-nowrap">
              {[
                { id: "cursive-bold", label: "Cursive Bold" },
                { id: "bold-serif", label: "Bold Serif" },
                { id: "bold-sans", label: "Bold Sans" },
                { id: "cursed-zalgo", label: "Cursed / Zalgo" },
                { id: "double-struck", label: "Double-Struck" },
                { id: "fraktur", label: "Fraktur" },
                { id: "small-caps", label: "Small Caps" },
                { id: "bubble-filled", label: "Bubble" }
              ].map((style) => (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => setSelectedStyleId(style.id)}
                  className={`px-2.5 py-1 text-xs rounded-md transition-all whitespace-nowrap min-h-[30px] font-medium ${
                    selectedStyleId === style.id
                      ? "bg-indigo-600 text-white shadow-2xs font-semibold"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  {style.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-slate-500 font-mono">
              <strong>{activePreviewCard.name}</strong> ({activePreviewCard.output.length} chars)
            </span>
            <CopyButton
              textToCopy={activePreviewCard.output}
              label="Copy Style"
              variant="secondary"
              className="min-h-[32px] min-w-[32px] px-2.5 py-1 text-xs"
              onCopySuccess={() =>
                handleToast("Copied to clipboard!", `${activePreviewCard.name} font style`)
              }
            />
          </div>
        </div>

        {/* Tab Body: INSTAGRAM STUDIO PREVIEW */}
        {previewTab === "instagram" && (
          <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-50/70 via-indigo-50/20 to-rose-50/30 space-y-6">
            <div className="max-w-2xl mx-auto space-y-5">
              {/* Instagram Customizer Toolbar */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
                {/* Username Input */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-700">Handle:</span>
                  <div className="relative flex items-center">
                    <span className="absolute left-2.5 text-xs text-slate-400 font-mono">@</span>
                    <input
                      type="text"
                      value={instaHandle}
                      onChange={(e) =>
                        setInstaHandle(
                          e.target.value.toLowerCase().replace(/[^a-z0-9._]/g, "") || "creator"
                        )
                      }
                      placeholder="username"
                      className="pl-6 pr-3 py-1.5 text-xs font-semibold text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 w-36 sm:w-44"
                    />
                  </div>
                </div>

                {/* Sub-view switcher: Profile vs Feed vs Story */}
                <div className="flex items-center p-1 bg-slate-100 rounded-lg gap-1 text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setInstaSubView("profile")}
                    className={`px-3 py-1 rounded-md transition-all ${
                      instaSubView === "profile"
                        ? "bg-white text-slate-900 font-semibold shadow-2xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Profile & Bio
                  </button>
                  <button
                    type="button"
                    onClick={() => setInstaSubView("feed")}
                    className={`px-3 py-1 rounded-md transition-all ${
                      instaSubView === "feed"
                        ? "bg-white text-slate-900 font-semibold shadow-2xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Feed Post
                  </button>
                  <button
                    type="button"
                    onClick={() => setInstaSubView("story")}
                    className={`px-3 py-1 rounded-md transition-all ${
                      instaSubView === "story"
                        ? "bg-white text-slate-900 font-semibold shadow-2xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Story Sticker
                  </button>
                </div>

                {/* Theme Toggle (Light / Dark mode) */}
                <div className="flex items-center gap-1 border border-slate-200 p-0.5 rounded-lg bg-slate-50">
                  <button
                    type="button"
                    onClick={() => setInstaTheme("light")}
                    className={`p-1.5 rounded-md text-xs font-medium transition-colors ${
                      instaTheme === "light"
                        ? "bg-white text-slate-900 shadow-2xs"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                    title="Instagram Light Mode"
                  >
                    <Sun className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setInstaTheme("dark")}
                    className={`p-1.5 rounded-md text-xs font-medium transition-colors ${
                      instaTheme === "dark"
                        ? "bg-slate-900 text-white shadow-2xs"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                    title="Instagram Dark Mode"
                  >
                    <Moon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Instagram Character Limit Meters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {/* Display Name Limit (Max 30) */}
                <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-slate-800">Display Name Limit:</span>
                    <p className="text-[11px] text-slate-500">Instagram max 30 chars</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`font-mono font-bold ${
                        activePreviewCard.output.length <= 30
                          ? "text-emerald-600"
                          : "text-amber-600"
                      }`}
                    >
                      {activePreviewCard.output.length} / 30
                    </span>
                    <span className="text-[10px] block text-slate-400">
                      {activePreviewCard.output.length <= 30 ? "✓ Fits name" : "⚠️ May truncate"}
                    </span>
                  </div>
                </div>

                {/* Bio Limit (Max 150) */}
                <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-slate-800">Instagram Bio Limit:</span>
                    <p className="text-[11px] text-slate-500">Instagram max 150 chars</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`font-mono font-bold ${
                        activePreviewCard.output.length <= 150
                          ? "text-emerald-600"
                          : "text-rose-600"
                      }`}
                    >
                      {activePreviewCard.output.length} / 150
                    </span>
                    <span className="text-[10px] block text-slate-400">
                      {activePreviewCard.output.length <= 150
                        ? "✓ Fits bio perfectly"
                        : "⚠️ Exceeds 150 limit"}
                    </span>
                  </div>
                </div>
              </div>

              {/* VIEW 1: INSTAGRAM PROFILE & BIO MOCKUP */}
              {instaSubView === "profile" && (
                <div
                  className={`rounded-2xl border transition-all shadow-md overflow-hidden ${
                    instaTheme === "dark"
                      ? "bg-black text-[#f5f5f5] border-[#262626]"
                      : "bg-white text-slate-900 border-slate-200"
                  }`}
                >
                  {/* Phone Status Bar Simulation */}
                  <div
                    className={`px-6 pt-3 pb-1 flex items-center justify-between text-xs font-semibold ${
                      instaTheme === "dark" ? "text-slate-300" : "text-slate-800"
                    }`}
                  >
                    <span>9:41</span>
                    <div className="w-20 h-4 bg-slate-900/10 rounded-full dark:bg-white/10 mx-auto" />
                    <div className="flex items-center gap-1.5 text-[11px]">
                      <span>5G</span>
                      <span>100%</span>
                    </div>
                  </div>

                  {/* Profile Top Bar */}
                  <div
                    className={`px-5 py-3 flex items-center justify-between border-b ${
                      instaTheme === "dark" ? "border-[#262626]" : "border-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm tracking-tight">{instaHandle}</span>
                      <BadgeCheck className="w-4 h-4 text-[#0095f6] fill-[#0095f6] text-white shrink-0" />
                    </div>
                    <div className="flex items-center gap-3">
                      <MoreHorizontal className="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100" />
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-4">
                    {/* Header Details with Avatar, Stats & Follow button */}
                    <div className="flex items-center gap-4 sm:gap-6">
                      {/* Avatar with authentic Instagram gradient ring */}
                      <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shrink-0 cursor-pointer group">
                        <div
                          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full p-0.5 flex items-center justify-center transition-transform group-hover:scale-105 ${
                            instaTheme === "dark" ? "bg-black" : "bg-white"
                          }`}
                        >
                          <div className="w-full h-full rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold text-xl shadow-inner">
                            ⚡
                          </div>
                        </div>
                      </div>

                      {/* Profile Stats */}
                      <div className="flex-1 grid grid-cols-3 text-center gap-2">
                        <div>
                          <div className="font-bold text-sm sm:text-base">142</div>
                          <div
                            className={`text-[11px] ${
                              instaTheme === "dark" ? "text-[#a8a8a8]" : "text-slate-500"
                            }`}
                          >
                            posts
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-sm sm:text-base">28.4K</div>
                          <div
                            className={`text-[11px] ${
                              instaTheme === "dark" ? "text-[#a8a8a8]" : "text-slate-500"
                            }`}
                          >
                            followers
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-sm sm:text-base">419</div>
                          <div
                            className={`text-[11px] ${
                              instaTheme === "dark" ? "text-[#a8a8a8]" : "text-slate-500"
                            }`}
                          >
                            following
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Profile Bio Details */}
                    <div className="space-y-1.5 pt-1">
                      {/* Display Name (600 Semi-Bold Weight) */}
                      <div>
                        <span className="text-[10px] font-semibold text-purple-500 uppercase tracking-wider block">
                          Display Name (600 Semi-Bold):
                        </span>
                        <p className="font-semibold text-sm sm:text-base break-words">
                          {activePreviewCard.output || "Aesthetic Name"}
                        </p>
                      </div>

                      {/* Category Tag */}
                      <p
                        className={`text-xs font-medium ${
                          instaTheme === "dark" ? "text-[#a8a8a8]" : "text-slate-500"
                        }`}
                      >
                        Digital Creator · Aesthetic Fonts & Typography
                      </p>

                      {/* Bio Body Text (400 Regular Weight) */}
                      <div className="pt-0.5">
                        <span className="text-[10px] font-semibold text-blue-500 uppercase tracking-wider block mb-0.5">
                          Bio Description (400 Regular):
                        </span>
                        <p
                          className={`font-normal text-sm leading-relaxed break-words p-2.5 rounded-lg border select-all ${
                            instaTheme === "dark"
                              ? "bg-[#121212] border-[#262626] text-[#e0e0e0]"
                              : "bg-slate-50 border-slate-100 text-slate-800"
                          }`}
                        >
                          {activePreviewCard.output || "Your aesthetic bio goes here."}
                        </p>
                      </div>

                      {/* Bio Link */}
                      <div className="pt-1 flex items-center justify-between text-xs">
                        <span className="text-[#0095f6] font-medium flex items-center gap-1">
                          <ExternalLink className="w-3 h-3" />
                          <span>typecraft.app/{instaHandle}</span>
                        </span>
                        <span
                          className={`text-[10px] ${
                            instaTheme === "dark" ? "text-[#a8a8a8]" : "text-slate-400"
                          }`}
                        >
                          500 Medium
                        </span>
                      </div>
                    </div>

                    {/* Interactive Profile Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setInstaFollowed(!instaFollowed)}
                        className={`py-1.5 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                          instaFollowed
                            ? instaTheme === "dark"
                              ? "bg-[#262626] text-white"
                              : "bg-slate-100 text-slate-800"
                            : "bg-[#0095f6] hover:bg-[#1877f2] text-white"
                        }`}
                      >
                        {instaFollowed ? (
                          <>
                            <UserCheck className="w-3.5 h-3.5" />
                            <span>Following</span>
                          </>
                        ) : (
                          <>
                            <UserPlus className="w-3.5 h-3.5" />
                            <span>Follow</span>
                          </>
                        )}
                      </button>

                      <div
                        className={`py-1.5 px-3 text-xs font-semibold rounded-lg text-center select-none ${
                          instaTheme === "dark"
                            ? "bg-[#262626] text-white"
                            : "bg-slate-100 text-slate-800"
                        }`}
                      >
                        Message
                      </div>
                    </div>

                    {/* Story Highlights (700 Bold Weight) */}
                    <div
                      className={`pt-3 border-t ${
                        instaTheme === "dark" ? "border-[#262626]" : "border-slate-100"
                      }`}
                    >
                      <span className="text-[10px] font-semibold text-amber-500 uppercase tracking-wider block mb-2">
                        Story Highlights (700 Bold):
                      </span>
                      <div className="flex items-center gap-4 overflow-x-auto pb-1 scrollbar-none">
                        <div className="flex flex-col items-center gap-1 shrink-0">
                          <div
                            className={`w-14 h-14 rounded-full border-2 p-0.5 flex items-center justify-center ${
                              instaTheme === "dark" ? "border-[#363636]" : "border-slate-300"
                            }`}
                          >
                            <div
                              className={`w-full h-full rounded-full flex items-center justify-center text-base ${
                                instaTheme === "dark" ? "bg-[#181818]" : "bg-slate-100"
                              }`}
                            >
                              ✨
                            </div>
                          </div>
                          <span className="font-bold text-[11px] max-w-[70px] truncate text-center">
                            {activePreviewCard.output || "Highlight"}
                          </span>
                        </div>

                        <div className="flex flex-col items-center gap-1 shrink-0">
                          <div
                            className={`w-14 h-14 rounded-full border-2 p-0.5 flex items-center justify-center ${
                              instaTheme === "dark" ? "border-[#363636]" : "border-slate-300"
                            }`}
                          >
                            <div
                              className={`w-full h-full rounded-full flex items-center justify-center text-base ${
                                instaTheme === "dark" ? "bg-[#181818]" : "bg-slate-100"
                              }`}
                            >
                              🔥
                            </div>
                          </div>
                          <span className="font-bold text-[11px] max-w-[70px] truncate text-center">
                            Bio Ideas
                          </span>
                        </div>

                        <div className="flex flex-col items-center gap-1 shrink-0">
                          <div
                            className={`w-14 h-14 rounded-full border-2 p-0.5 flex items-center justify-center ${
                              instaTheme === "dark" ? "border-[#363636]" : "border-slate-300"
                            }`}
                          >
                            <div
                              className={`w-full h-full rounded-full flex items-center justify-center text-base ${
                                instaTheme === "dark" ? "bg-[#181818]" : "bg-slate-100"
                              }`}
                            >
                              ⚡
                            </div>
                          </div>
                          <span className="font-bold text-[11px] max-w-[70px] truncate text-center">
                            Fonts
                          </span>
                        </div>

                        <div className="flex flex-col items-center gap-1 shrink-0">
                          <div
                            className={`w-14 h-14 rounded-full border-2 p-0.5 flex items-center justify-center ${
                              instaTheme === "dark" ? "border-[#363636]" : "border-slate-300"
                            }`}
                          >
                            <div
                              className={`w-full h-full rounded-full flex items-center justify-center text-base ${
                                instaTheme === "dark" ? "bg-[#181818]" : "bg-slate-100"
                              }`}
                            >
                              💎
                            </div>
                          </div>
                          <span className="font-bold text-[11px] max-w-[70px] truncate text-center">
                            Aesthetics
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Simulated 3-Post Grid */}
                    <div
                      className={`pt-3 border-t ${
                        instaTheme === "dark" ? "border-[#262626]" : "border-slate-100"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-8 pb-3 text-xs font-semibold">
                        <span className="flex items-center gap-1.5 border-b-2 border-indigo-600 pb-1 text-indigo-600">
                          <Grid3X3 className="w-3.5 h-3.5" />
                          <span>POSTS</span>
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5">
                        <div className="aspect-square bg-gradient-to-tr from-purple-600 via-indigo-600 to-rose-500 rounded-md p-2 flex flex-col justify-between text-white shadow-2xs">
                          <span className="text-[10px] font-bold opacity-80">01</span>
                          <p className="text-xs font-bold truncate">{activePreviewCard.output}</p>
                          <div className="flex items-center gap-1 text-[10px] opacity-90">
                            <Heart className="w-2.5 h-2.5 fill-white" /> 1.4k
                          </div>
                        </div>

                        <div className="aspect-square bg-gradient-to-tr from-slate-800 to-indigo-900 rounded-md p-2 flex flex-col justify-between text-white shadow-2xs">
                          <span className="text-[10px] font-bold opacity-80">02</span>
                          <p className="text-xs font-bold truncate">𝓒𝓾𝓻𝓼𝓲𝓿𝓮 𝓛𝓸𝓿𝓮</p>
                          <div className="flex items-center gap-1 text-[10px] opacity-90">
                            <Heart className="w-2.5 h-2.5 fill-white" /> 890
                          </div>
                        </div>

                        <div className="aspect-square bg-gradient-to-tr from-amber-600 to-rose-600 rounded-md p-2 flex flex-col justify-between text-white shadow-2xs">
                          <span className="text-[10px] font-bold opacity-80">03</span>
                          <p className="text-xs font-bold truncate">𝐁𝐨𝐥𝐝 𝐒𝐭𝐚𝐭𝐮𝐬</p>
                          <div className="flex items-center gap-1 text-[10px] opacity-90">
                            <Heart className="w-2.5 h-2.5 fill-white" /> 2.1k
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Direct Bio & Name Copy Buttons */}
                    <div className="pt-3 border-t border-slate-100 dark:border-[#262626] flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs text-slate-400">
                        Ready to paste into your Instagram app:
                      </span>
                      <div className="flex items-center gap-2">
                        <CopyButton
                          textToCopy={activePreviewCard.output}
                          label="Copy Bio (400)"
                          variant="secondary"
                          className="text-xs py-1.5 px-3 min-h-[36px]"
                          onCopySuccess={() =>
                            handleToast("Copied Bio text!", `Formatted in ${activePreviewCard.name}`)
                          }
                        />
                        <CopyButton
                          textToCopy={activePreviewCard.output}
                          label="Copy Name (600)"
                          variant="primary"
                          className="text-xs py-1.5 px-3 min-h-[36px]"
                          onCopySuccess={() =>
                            handleToast("Copied Display Name!", `Formatted in ${activePreviewCard.name}`)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 2: INSTAGRAM FEED POST & CAPTION MOCKUP */}
              {instaSubView === "feed" && (
                <div
                  className={`rounded-2xl border transition-all shadow-md overflow-hidden ${
                    instaTheme === "dark"
                      ? "bg-black text-[#f5f5f5] border-[#262626]"
                      : "bg-white text-slate-900 border-slate-200"
                  }`}
                >
                  {/* Post Header */}
                  <div
                    className={`p-3.5 flex items-center justify-between border-b ${
                      instaTheme === "dark" ? "border-[#262626]" : "border-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5">
                        <div className="w-full h-full rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                          ⚡
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-xs">{instaHandle}</span>
                          <BadgeCheck className="w-3.5 h-3.5 text-[#0095f6] fill-[#0095f6] text-white" />
                        </div>
                        <span
                          className={`text-[10px] ${
                            instaTheme === "dark" ? "text-[#a8a8a8]" : "text-slate-500"
                          }`}
                        >
                          Original audio · TypeCraft Aesthetic
                        </span>
                      </div>
                    </div>
                    <MoreHorizontal className="w-5 h-5 opacity-70 cursor-pointer" />
                  </div>

                  {/* Visual Post Image Box with Live Transformed Font */}
                  <div className="aspect-square bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 flex flex-col items-center justify-center p-8 text-center text-white relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25)_0,transparent_70%)]" />
                    <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-3">
                      {activePreviewCard.name}
                    </span>
                    <p className="text-2xl sm:text-3xl font-bold tracking-wide break-words max-w-sm drop-shadow-md">
                      {activePreviewCard.output}
                    </p>
                    <span className="text-[11px] text-slate-400 mt-4 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                      Made with TypeCraft
                    </span>
                  </div>

                  {/* Engagement Bar */}
                  <div className="p-3.5 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => {
                            setInstaLiked(!instaLiked);
                            setInstaLikesCount((prev) => (instaLiked ? prev - 1 : prev + 1));
                          }}
                          className="focus:outline-none transition-transform active:scale-125"
                        >
                          <Heart
                            className={`w-6 h-6 transition-colors ${
                              instaLiked ? "text-rose-500 fill-rose-500" : "opacity-90"
                            }`}
                          />
                        </button>
                        <MessageCircle className="w-6 h-6 opacity-90 cursor-pointer hover:opacity-100" />
                        <Send className="w-6 h-6 opacity-90 cursor-pointer hover:opacity-100" />
                      </div>
                      <Bookmark className="w-6 h-6 opacity-90 cursor-pointer hover:opacity-100" />
                    </div>

                    {/* Likes Count */}
                    <div className="font-semibold text-xs">
                      {instaLikesCount.toLocaleString()} likes
                    </div>

                    {/* Caption with Weights */}
                    <div className="text-xs space-y-1">
                      <p className="leading-relaxed break-words">
                        <strong className="font-semibold mr-1.5">{instaHandle}</strong>
                        <span className="font-normal opacity-95">
                          {activePreviewCard.output}
                        </span>
                      </p>
                      <p className="font-bold text-[#0095f6] text-[11px] pt-0.5">
                        #Aesthetic #InstagramFonts #BioFonts #{activePreviewCard.name.replace(/\s+/g, "")}
                      </p>
                    </div>

                    {/* Comments Sample */}
                    <div
                      className={`text-[11px] space-y-1 pt-1 ${
                        instaTheme === "dark" ? "text-[#a8a8a8]" : "text-slate-500"
                      }`}
                    >
                      <p>View all 48 comments</p>
                      <p>
                        <strong
                          className={instaTheme === "dark" ? "text-slate-200" : "text-slate-800"}
                        >
                          sarah.designs
                        </strong>{" "}
                        This font looks unreal! Copying this right now 🔥
                      </p>
                    </div>

                    {/* Footer Actions */}
                    <div
                      className={`pt-3 border-t flex items-center justify-between ${
                        instaTheme === "dark" ? "border-[#262626]" : "border-slate-100"
                      }`}
                    >
                      <span className="text-[10px] text-slate-400">2 HOURS AGO</span>
                      <CopyButton
                        textToCopy={`${activePreviewCard.output}\n\n#Aesthetic #InstagramFonts #BioFonts`}
                        label="Copy Caption + Tags"
                        variant="primary"
                        className="text-xs py-1.5 px-3 min-h-[36px]"
                        onCopySuccess={() =>
                          handleToast("Copied Instagram Caption!", "Ready to paste in your new post")
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 3: INSTAGRAM STORY STICKER MOCKUP */}
              {instaSubView === "story" && (
                <div
                  className={`rounded-2xl border transition-all shadow-md overflow-hidden max-w-sm mx-auto ${
                    instaTheme === "dark"
                      ? "bg-black text-[#f5f5f5] border-[#262626]"
                      : "bg-slate-900 text-white border-slate-800"
                  }`}
                >
                  <div className="aspect-[9/16] bg-gradient-to-b from-rose-950 via-purple-950 to-indigo-950 p-5 flex flex-col justify-between relative overflow-hidden">
                    {/* Story Top Progress Line */}
                    <div className="space-y-3">
                      <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-white rounded-full" />
                      </div>

                      {/* Story Header */}
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 p-0.5">
                            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold">
                              ⚡
                            </div>
                          </div>
                          <span className="font-semibold text-white">{instaHandle}</span>
                          <span className="text-white/60 text-[11px]">2h</span>
                        </div>
                        <MoreHorizontal className="w-4 h-4 text-white/80 cursor-pointer" />
                      </div>
                    </div>

                    {/* Central Story Sticker with 700 Bold Font */}
                    <div className="my-auto text-center space-y-3 p-4">
                      <div className="inline-block p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-300 block mb-1">
                          Story Sticker (700 Bold)
                        </span>
                        <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide break-words">
                          {activePreviewCard.output}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Story Reply Bar & Reactions */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-around text-lg">
                        <span className="cursor-pointer hover:scale-125 transition-transform">❤️</span>
                        <span className="cursor-pointer hover:scale-125 transition-transform">🔥</span>
                        <span className="cursor-pointer hover:scale-125 transition-transform">👏</span>
                        <span className="cursor-pointer hover:scale-125 transition-transform">😍</span>
                        <span className="cursor-pointer hover:scale-125 transition-transform">⚡</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex-1 py-2 px-3.5 rounded-full border border-white/30 text-xs text-white/60 bg-black/20 backdrop-blur-sm">
                          Send message to {instaHandle}...
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText(activePreviewCard.output);
                            handleToast("Copied Story Text!", "Ready to paste on Instagram Stories");
                          }}
                          className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                          title="Copy story text"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab Body: DISCORD PREVIEW */}
        {previewTab === "discord" && (
          <div className="p-4 sm:p-6 lg:p-8 bg-[#2b2d31] space-y-6">
            <div className="max-w-2xl mx-auto space-y-4">
              {/* Discord Chat Window Mockup */}
              <div className="bg-[#313338] rounded-2xl border border-[#1f2023] shadow-md overflow-hidden text-[#dbdee1] font-sans">
                {/* Discord Channel Header */}
                <div className="px-4 py-3 bg-[#2b2d31] border-b border-[#1f2023] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Hash className="w-5 h-5 text-[#949ba4]" />
                    <span className="font-semibold text-white text-sm">✨-aesthetic-chat</span>
                    <span className="hidden sm:inline-block text-xs text-[#949ba4] border-l border-[#3f4147] pl-2 font-medium">
                      Preview Unicode font rendering in Discord
                    </span>
                  </div>
                  <span className="text-[11px] bg-[#5865f2]/20 text-[#5865f2] border border-[#5865f2]/30 px-2 py-0.5 rounded font-mono font-medium">
                    Discord Dark UI
                  </span>
                </div>

                {/* Discord Chat Messages */}
                <div className="p-4 sm:p-5 space-y-5">
                  {/* Message 1: Regular Chat Weight (400) */}
                  <div className="flex items-start gap-3.5 group">
                    <div className="w-10 h-10 rounded-full bg-[#5865f2] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                      TC
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-semibold text-[#f2f3f5] text-sm hover:underline cursor-pointer">
                          TypeCrafter
                        </span>
                        <span className="bg-[#5865f2] text-white text-[10px] font-bold px-1.5 py-0.2 rounded uppercase">
                          VIP
                        </span>
                        <span className="text-[11px] text-[#949ba4]">Today at 4:18 PM</span>
                      </div>
                      <div className="text-xs text-[#949ba4] font-mono">
                        Weight: <strong>400 Regular (Standard Chat message)</strong>
                      </div>
                      <div className="font-normal text-[#dbdee1] text-base leading-relaxed break-words bg-[#2b2d31]/60 p-2.5 rounded-lg border border-[#383a40]">
                        {activePreviewCard.output || "Standard Discord chat message preview..."}
                      </div>
                    </div>
                  </div>

                  {/* Message 2: Discord Markdown **bold** Weight (700) */}
                  <div className="flex items-start gap-3.5 group">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                      MD
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-semibold text-[#f2f3f5] text-sm hover:underline cursor-pointer">
                          ModeratorBot
                        </span>
                        <span className="bg-[#23a55a] text-white text-[10px] font-bold px-1.5 py-0.2 rounded uppercase">
                          BOT
                        </span>
                        <span className="text-[11px] text-[#949ba4]">Today at 4:19 PM</span>
                      </div>
                      <div className="text-xs text-[#949ba4] font-mono">
                        Weight: <strong>700 Bold (Discord markdown **bold** rendering)</strong>
                      </div>
                      <div className="font-bold text-white text-base leading-relaxed break-words bg-[#2b2d31]/80 p-2.5 rounded-lg border border-indigo-500/30">
                        {activePreviewCard.output || "Discord bold message preview..."}
                      </div>
                    </div>
                  </div>

                  {/* Message 3: Server Nickname / Role Header Weight (600 Semi-Bold) */}
                  <div className="p-3 rounded-xl bg-[#232428] border border-[#383a40] space-y-2">
                    <span className="text-[11px] font-semibold text-[#949ba4] uppercase tracking-wider block">
                      Server Member Profile & Nickname Weight (600 Semi-Bold):
                    </span>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="relative">
                          <div className="w-8 h-8 rounded-full bg-[#f47b67] text-white flex items-center justify-center text-xs font-bold">
                            👑
                          </div>
                          <div className="w-2.5 h-2.5 rounded-full bg-[#23a55a] absolute -bottom-0.5 -right-0.5 border-2 border-[#232428]" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#f2f3f5] text-sm break-words">
                            {activePreviewCard.output || "Server Nickname"}
                          </p>
                          <span className="text-[11px] text-[#949ba4]">Playing League of Legends</span>
                        </div>
                      </div>
                      <span className="text-[10px] bg-[#313338] text-[#dbdee1] border border-[#383a40] px-2 py-1 rounded font-mono shrink-0">
                        600 Semi-Bold
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mock Discord Chat Input Bar */}
                <div className="p-3 bg-[#2b2d31] border-t border-[#1f2023] flex items-center justify-between gap-2">
                  <div className="flex-1 bg-[#383a40] text-xs text-[#949ba4] rounded-lg px-3 py-2">
                    Message #✨-aesthetic-chat
                  </div>
                  <CopyButton
                    textToCopy={activePreviewCard.output}
                    label="Copy for Discord"
                    variant="primary"
                    className="text-xs py-1.5 px-3 min-h-[36px] bg-[#5865f2] hover:bg-[#4752c4]"
                    onCopySuccess={() =>
                      handleToast("Copied for Discord!", `${activePreviewCard.name} formatted text`)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Body: FONT WEIGHT COMPARISON MATRIX */}
        {previewTab === "weights" && (
          <div className="p-4 sm:p-6 lg:p-8 bg-white space-y-4">
            <div className="max-w-4xl mx-auto space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-semibold text-slate-700">
                  CSS Weight Stack Comparison for:{" "}
                  <strong className="text-indigo-600">{activePreviewCard.name}</strong>
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  All 5 weights interactive
                </span>
              </div>

              {WEIGHT_SPECS.map((spec) => (
                <div
                  key={spec.numeric}
                  className="p-4 rounded-xl border border-slate-200/90 hover:border-indigo-300 bg-slate-50/50 hover:bg-slate-50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono font-bold text-xs bg-slate-200 text-slate-800 px-2 py-0.5 rounded">
                        {spec.numeric}
                      </span>
                      <span className="font-bold text-sm text-slate-900">{spec.name}</span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${spec.badgeColor}`}
                      >
                        {spec.tag}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 leading-snug">
                      {spec.platformRole}
                    </p>

                    {/* Live Rendered Sample in Specific Font-Weight */}
                    <div
                      className={`text-base sm:text-lg text-slate-950 pt-1 break-words select-all leading-relaxed ${spec.weightClass}`}
                    >
                      {activePreviewCard.output || (
                        <span className="text-slate-400 italic font-normal text-sm">
                          Enter input above to preview...
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions for this weight */}
                  <div className="shrink-0 flex items-center gap-2 self-end md:self-center">
                    <CopyButton
                      textToCopy={activePreviewCard.output}
                      label={`Copy (${spec.numeric})`}
                      variant="secondary"
                      className="text-xs py-1.5 px-3 min-h-[36px]"
                      onCopySuccess={() =>
                        handleToast(
                          "Copied to clipboard!",
                          `${activePreviewCard.name} · ${spec.name} (${spec.numeric}) weight`
                        )
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* FILTER AND SEARCH BAR FOR MULTI-CARD GALLERY */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-2">
        {/* Category Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {[
            { id: "all", label: "All 20+ Styles" },
            { id: "fancy", label: "Fancy & Script" },
            { id: "glitch", label: "Glitch & Horror" },
            { id: "formatting", label: "Formatting & Math" },
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
            placeholder="Search styles (e.g., bold, cursive, zalgo)..."
            className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 min-h-[40px]"
          />
        </div>
      </div>

      {/* LIVE PREVIEW MULTI-CARD GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredCards.map((card) => {
          const isSelectedForPreview = card.id === selectedStyleId;

          return (
            <div
              key={card.id}
              className={`bg-white rounded-xl border p-4 sm:p-5 transition-all flex flex-col justify-between ${
                isSelectedForPreview
                  ? "border-indigo-500 ring-2 ring-indigo-500/10 shadow-xs"
                  : "border-slate-200/80 hover:border-slate-300 hover:shadow-xs"
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between gap-3 pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">{card.name}</span>
                  {isSelectedForPreview && (
                    <span className="text-[10px] font-bold bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded">
                      In Preview
                    </span>
                  )}
                </div>
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

              {/* Card Footer with Copy & Preview CTA */}
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleInspectStyle(card.id)}
                  title="Visualize this font on Instagram and Discord"
                  className="text-xs text-slate-600 hover:text-indigo-600 font-medium inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-indigo-300 bg-white hover:bg-indigo-50/50 transition-colors min-h-[36px]"
                >
                  <Eye className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Preview Weights</span>
                </button>

                <div className="flex items-center gap-2">
                  <span
                    className="text-xs text-slate-400 tabular-nums font-mono hidden sm:inline"
                    suppressHydrationWarning
                  >
                    {card.output.length} chars
                  </span>
                  <CopyButton
                    textToCopy={card.output}
                    label="Copy"
                    variant={isSelectedForPreview ? "primary" : "secondary"}
                    onCopySuccess={() =>
                      handleToast("Copied to clipboard!", `${card.name} font style`)
                    }
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtle Floating 'Copied!' Toast Notification */}
      <AnimatePresence>
        {toastData && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm w-auto bg-slate-950/95 backdrop-blur-md text-white rounded-2xl p-3.5 shadow-2xl border border-slate-800/90 flex items-center gap-3 select-none"
          >
            {/* Animated Checkmark Badge */}
            <motion.div
              initial={{ scale: 0.5, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 22 }}
              className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0"
            >
              <Check className="w-5 h-5 stroke-[2.8]" />
            </motion.div>

            {/* Notification Text */}
            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white tracking-wide">
                  {toastData.title}
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold px-1.5 py-0.2 rounded font-mono">
                  Ready to paste
                </span>
              </div>
              {toastData.description && (
                <p className="text-[11px] text-slate-400 truncate mt-0.5 font-sans">
                  {toastData.description}
                </p>
              )}
            </div>

            {/* Dismiss Button */}
            <button
              type="button"
              onClick={() => setToastData(null)}
              className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
