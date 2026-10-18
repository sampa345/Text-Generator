"use client";

import { useState, useMemo } from "react";
import { ToolDefinition } from "@/lib/tools-registry";
import { CopyButton } from "./CopyButton";
import {
  toBold,
  toItalic,
  toCursive,
  toUpsideDown,
  toZalgo,
  toCreepyText,
  toScaryText,
  toWeirdText,
  toFireText,
  toFancyDoubleStruck,
  toFancyFraktur,
  toSmallCaps,
  toSuperscript,
  toBubble,
  toStrikethrough,
  repeatText,
  reverseText,
  convertCase,
  generateInvisible,
  revealInvisible,
  toSymbolText,
  invisibleCharSpecs,
  getSymbolPresets,
  StrikeType,
  CaseMode,
  ReverseMode,
  InvisibleCharType,
  SymbolPreset
} from "@/lib/text-engine";
import { Eye, EyeOff, RotateCcw, Sparkles } from "lucide-react";

interface ToolStudioProps {
  tool: ToolDefinition;
}

export function ToolStudio({ tool }: ToolStudioProps) {
  const [inputText, setInputText] = useState(tool.exampleInput || "TypeCraft Generator");
  
  // Specific tool control states
  // Zalgo controls
  const [zalgoIntensity, setZalgoIntensity] = useState(5);
  const [zalgoUp, setZalgoUp] = useState(true);
  const [zalgoMid, setZalgoMid] = useState(true);
  const [zalgoDown, setZalgoDown] = useState(true);

  // Upside Down controls
  const [reverseUpsideDown, setReverseUpsideDown] = useState(true);

  // Style variation controls
  const [serifStyle, setSerifStyle] = useState(false);
  const [boldCursive, setBoldCursive] = useState(true);
  const [bubbleFilled, setBubbleFilled] = useState(false);
  const [strikeType, setStrikeType] = useState<StrikeType>("strike");

  // Repeater controls
  const [repeatCount, setRepeatCount] = useState(10);
  const [repeatDelimiter, setRepeatDelimiter] = useState<"newline" | "space" | "comma" | "custom">("newline");
  const [customDelimiter, setCustomDelimiter] = useState(" · ");
  const [addRepeaterIndex, setAddRepeaterIndex] = useState(false);

  // Reverser controls
  const [reverseMode, setReverseMode] = useState<ReverseMode>("characters");

  // Case converter controls
  const [caseMode, setCaseMode] = useState<CaseMode>("title");

  // Invisible characters controls
  const [invisibleType, setInvisibleType] = useState<InvisibleCharType>("hangul");
  const [invisibleCount, setInvisibleCount] = useState(1);
  const [revealInspectionText, setRevealInspectionText] = useState("");
  const [isInspecting, setIsInspecting] = useState(false);

  // Unicode symbol presets
  const [symbolPreset, setSymbolPreset] = useState<SymbolPreset>("stars");

  // Perform transformation based on tool.id and options
  const outputText = useMemo(() => {
    switch (tool.id) {
      case "cursed-text":
        return toZalgo(inputText, {
          up: zalgoUp,
          mid: zalgoMid,
          down: zalgoDown,
          intensity: zalgoIntensity
        });
      case "zalgo-text":
        return toZalgo(inputText, {
          up: zalgoUp,
          mid: zalgoMid,
          down: zalgoDown,
          intensity: zalgoIntensity
        });
      case "upside-down-text":
        return toUpsideDown(inputText, reverseUpsideDown);
      case "creepy-text":
        return toCreepyText(inputText);
      case "scary-text":
        return toScaryText(inputText);
      case "weird-text":
        return toWeirdText(inputText);
      case "italic-text":
        return toItalic(inputText, serifStyle);
      case "bold-text":
        return toBold(inputText, serifStyle);
      case "cursive-text":
        return toCursive(inputText, boldCursive);
      case "fire-text":
        return toFireText(inputText);
      case "fancy-text":
        return serifStyle ? toFancyFraktur(inputText) : toFancyDoubleStruck(inputText);
      case "small-text":
        return serifStyle ? toSuperscript(inputText) : toSmallCaps(inputText);
      case "bubble-text":
        return toBubble(inputText, bubbleFilled);
      case "strikethrough-text":
        return toStrikethrough(inputText, strikeType);
      case "text-repeater":
        return repeatText(inputText, {
          count: repeatCount,
          delimiter: repeatDelimiter,
          customDelimiter: customDelimiter,
          addIndex: addRepeaterIndex
        });
      case "text-reverser":
        return reverseText(inputText, reverseMode);
      case "text-case-converter":
        return convertCase(inputText, caseMode);
      case "invisible-character":
        return generateInvisible(invisibleType, invisibleCount);
      case "unicode-symbol-text":
        return toSymbolText(inputText, symbolPreset);
      default:
        return inputText;
    }
  }, [
    tool.id,
    inputText,
    zalgoIntensity,
    zalgoUp,
    zalgoMid,
    zalgoDown,
    reverseUpsideDown,
    serifStyle,
    boldCursive,
    bubbleFilled,
    strikeType,
    repeatCount,
    repeatDelimiter,
    customDelimiter,
    addRepeaterIndex,
    reverseMode,
    caseMode,
    invisibleType,
    invisibleCount,
    symbolPreset
  ]);

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-xs p-4 sm:p-6 lg:p-8">
      {/* Top Input Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
        <label htmlFor="tool-input" className="text-sm font-semibold text-slate-900">
          {tool.id === "invisible-character" ? "Invisible Generator Config:" : "Your Input Text:"}
        </label>
        <div className="flex items-center gap-3 text-xs text-slate-500 tabular-nums font-mono">
          <span>{inputText.length} chars</span>
          <span aria-hidden="true">·</span>
          <button
            type="button"
            onClick={() => setInputText("")}
            className="text-xs text-slate-500 hover:text-rose-600 transition-colors focus-visible:outline-none"
          >
            Clear input
          </button>
        </div>
      </div>

      {/* Input Field (Not needed for standalone invisible generator) */}
      {tool.id !== "invisible-character" && (
        <div className="mt-3">
          <textarea
            id="tool-input"
            rows={3}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`Enter text to transform with ${tool.name}...`}
            className="w-full rounded-xl border border-slate-300 p-3.5 text-base sm:text-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition-all resize-y min-h-[90px]"
          />
        </div>
      )}

      {/* Tool-Specific Controls */}
      <div className="mt-4 pt-4 border-t border-slate-100 space-y-4">
        {/* Zalgo & Cursed Controls */}
        {(tool.id === "cursed-text" || tool.id === "zalgo-text") && (
          <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between gap-4">
              <label htmlFor="zalgo-slider" className="text-xs font-semibold text-slate-700">
                Glitch Corruption Intensity:{" "}
                <span className="font-mono text-indigo-600">{zalgoIntensity}/10</span>
              </label>
              <input
                id="zalgo-slider"
                type="range"
                min="1"
                max="10"
                value={zalgoIntensity}
                onChange={(e) => setZalgoIntensity(Number(e.target.value))}
                className="w-40 sm:w-64 accent-indigo-600 cursor-pointer"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700 pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={zalgoUp}
                  onChange={(e) => setZalgoUp(e.target.checked)}
                  className="rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4"
                />
                <span>Upward Glitch Diacritics</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={zalgoMid}
                  onChange={(e) => setZalgoMid(e.target.checked)}
                  className="rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4"
                />
                <span>Middle Strikethrough Marks</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={zalgoDown}
                  onChange={(e) => setZalgoDown(e.target.checked)}
                  className="rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4"
                />
                <span>Downward Drip Diacritics</span>
              </label>
            </div>
          </div>
        )}

        {/* Upside Down Controls */}
        {tool.id === "upside-down-text" && (
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={reverseUpsideDown}
                onChange={(e) => setReverseUpsideDown(e.target.checked)}
                className="rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4"
              />
              <span>Reverse character order (recommended for true 180° flip)</span>
            </label>
          </div>
        )}

        {/* Italic & Bold Serif/Sans Selector */}
        {(tool.id === "italic-text" || tool.id === "bold-text") && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">Font Category:</span>
            <button
              type="button"
              onClick={() => setSerifStyle(false)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                !serifStyle ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Modern Sans-Serif
            </button>
            <button
              type="button"
              onClick={() => setSerifStyle(true)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                serifStyle ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Classic Serif
            </button>
          </div>
        )}

        {/* Cursive Controls */}
        {tool.id === "cursive-text" && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">Script Weight:</span>
            <button
              type="button"
              onClick={() => setBoldCursive(true)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                boldCursive ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Bold Calligraphy (𝓒𝓾𝓻𝓼𝓲𝓿𝓮)
            </button>
            <button
              type="button"
              onClick={() => setBoldCursive(false)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                !boldCursive ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Delicate Script (𝒸𝓊𝓇𝓈𝒾𝓋ℯ)
            </button>
          </div>
        )}

        {/* Fancy Text Controls */}
        {tool.id === "fancy-text" && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">Fancy Variation:</span>
            <button
              type="button"
              onClick={() => setSerifStyle(false)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                !serifStyle ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Double-Struck (Blackboard)
            </button>
            <button
              type="button"
              onClick={() => setSerifStyle(true)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                serifStyle ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Fraktur (Medieval Gothic)
            </button>
          </div>
        )}

        {/* Small Text Controls */}
        {tool.id === "small-text" && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">Small Style:</span>
            <button
              type="button"
              onClick={() => setSerifStyle(false)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                !serifStyle ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Small Capitals (ꜱᴍᴀʟʟ)
            </button>
            <button
              type="button"
              onClick={() => setSerifStyle(true)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                serifStyle ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Tiny Superscript (ˢᵐᵃˡˡ)
            </button>
          </div>
        )}

        {/* Bubble Text Controls */}
        {tool.id === "bubble-text" && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">Bubble Appearance:</span>
            <button
              type="button"
              onClick={() => setBubbleFilled(false)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                !bubbleFilled ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Outline Bubbles (ⓑⓤⓑⓑⓛⓔ)
            </button>
            <button
              type="button"
              onClick={() => setBubbleFilled(true)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                bubbleFilled ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Solid Filled (🅑🅤🅑🅑🅛🅔)
            </button>
          </div>
        )}

        {/* Strikethrough Options */}
        {tool.id === "strikethrough-text" && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">Strike Style:</span>
            {[
              { id: "strike", label: "Line Stroke (s̶t̶r̶i̶k̶e̶)" },
              { id: "slash", label: "Slash (s̷l̷a̷s̷h̷)" },
              { id: "tilde", label: "Tilde (s̴t̴i̴l̴d̴e̴)" },
              { id: "underline", label: "Underline (u̲n̲d̲e̲r̲)" }
            ].map((st) => (
              <button
                key={st.id}
                type="button"
                onClick={() => setStrikeType(st.id as StrikeType)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  strikeType === st.id ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
        )}

        {/* Repeater Controls */}
        {tool.id === "text-repeater" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div>
              <label htmlFor="repeat-count" className="block text-xs font-semibold text-slate-700">
                Repeat Count (1 to 5,000):
              </label>
              <input
                id="repeat-count"
                type="number"
                min="1"
                max="5000"
                value={repeatCount}
                onChange={(e) => setRepeatCount(Math.max(1, Math.min(5000, Number(e.target.value))))}
                className="mt-1 w-full px-3 py-1.5 text-sm rounded-lg border border-slate-300 bg-white"
              />
            </div>
            <div>
              <label htmlFor="repeat-sep" className="block text-xs font-semibold text-slate-700">
                Separator:
              </label>
              <select
                id="repeat-sep"
                value={repeatDelimiter}
                onChange={(e) => setRepeatDelimiter(e.target.value as any)}
                className="mt-1 w-full px-3 py-1.5 text-sm rounded-lg border border-slate-300 bg-white"
              >
                <option value="newline">New Line (\n)</option>
                <option value="space">Space ( )</option>
                <option value="comma">Comma and Space (, )</option>
                <option value="custom">Custom Character</option>
              </select>
            </div>
            <div className="flex items-end pb-1">
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={addRepeaterIndex}
                  onChange={(e) => setAddRepeaterIndex(e.target.checked)}
                  className="rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4"
                />
                <span>Add line numbers (1., 2., 3.)</span>
              </label>
            </div>
          </div>
        )}

        {/* Reverser Controls */}
        {tool.id === "text-reverser" && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">Reverse Mode:</span>
            {[
              { id: "characters", label: "Reverse Characters" },
              { id: "words", label: "Reverse Words" },
              { id: "lines", label: "Reverse Lines" },
              { id: "flipUpsideDown", label: "Flip Upside Down" }
            ].map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setReverseMode(m.id as ReverseMode)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  reverseMode === m.id ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        )}

        {/* Case Converter Controls */}
        {tool.id === "text-case-converter" && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">Convert to:</span>
            {[
              { id: "title", label: "Title Case" },
              { id: "sentence", label: "Sentence case" },
              { id: "uppercase", label: "UPPERCASE" },
              { id: "lowercase", label: "lowercase" },
              { id: "alternating", label: "aLtErNaTiNg" },
              { id: "camel", label: "camelCase" },
              { id: "kebab", label: "kebab-case" },
              { id: "snake", label: "snake_case" }
            ].map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCaseMode(c.id as CaseMode)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  caseMode === c.id ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        )}

        {/* Invisible Character Controls */}
        {tool.id === "invisible-character" && (
          <div className="space-y-4 bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
            <div>
              <span className="block text-xs font-semibold text-slate-700 mb-2">
                Select Invisible Character Type:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(Object.keys(invisibleCharSpecs) as InvisibleCharType[]).map((key) => {
                  const spec = invisibleCharSpecs[key];
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setInvisibleType(key)}
                      className={`text-left p-3 rounded-lg border transition-all ${
                        invisibleType === key
                          ? "bg-white border-indigo-600 ring-2 ring-indigo-600/20"
                          : "bg-white/70 border-slate-200 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">{spec.name}</span>
                        <code className="text-[11px] font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">
                          {spec.code}
                        </code>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-500 leading-snug">
                        {spec.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <label htmlFor="inv-count" className="text-xs font-semibold text-slate-700">
                Quantity to Generate:
              </label>
              <input
                id="inv-count"
                type="number"
                min="1"
                max="50"
                value={invisibleCount}
                onChange={(e) => setInvisibleCount(Math.max(1, Math.min(50, Number(e.target.value))))}
                className="w-24 px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
              />
            </div>
          </div>
        )}

        {/* Symbol Preset Selector */}
        {tool.id === "unicode-symbol-text" && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">Decoration Preset:</span>
            {getSymbolPresets().map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => setSymbolPreset(preset.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  symbolPreset === preset.id
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Output Display Area */}
      <div className="mt-6 pt-6 border-t border-slate-200">
        <div className="flex items-center justify-between pb-2" suppressHydrationWarning>
          <span className="text-sm font-semibold text-slate-900">Generated Result:</span>
          <span className="text-xs text-slate-500 tabular-nums font-mono" suppressHydrationWarning>
            {outputText.length} characters
          </span>
        </div>

        <div
          className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 font-sans text-lg sm:text-xl break-words select-all max-h-64 overflow-y-auto leading-relaxed shadow-inner"
          suppressHydrationWarning
        >
          {tool.id === "invisible-character" ? (
            <div className="space-y-2">
              <div className="text-xs text-slate-600 bg-amber-50 border border-amber-200 p-2.5 rounded-lg">
                ℹ️ The character is invisible below between quotes: &quot;
                <span className="bg-amber-100/80 px-1 py-0.5 rounded font-mono select-all">
                  {outputText}
                </span>
                &quot;
              </div>
              <div className="text-sm text-slate-500">
                Click &quot;Copy Invisible Character&quot; to place {invisibleCount} {invisibleCharSpecs[invisibleType].name} on your clipboard.
              </div>
            </div>
          ) : (
            outputText || <span className="text-slate-400 italic text-base">Enter text above...</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            {tool.id === "invisible-character"
              ? "Paste anywhere you need blank spaces or empty usernames."
              : "Click copy to use on Instagram, Discord, TikTok, WhatsApp, or games."}
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <CopyButton
              textToCopy={outputText}
              label={tool.id === "invisible-character" ? "Copy Invisible Character" : "Copy Result"}
              variant="primary"
              className="w-full sm:w-auto text-base py-2.5 px-6"
            />
          </div>
        </div>
      </div>

      {/* Optional Invisible Character Inspector */}
      {tool.id === "invisible-character" && (
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="flex items-center justify-between pb-2">
            <span className="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-indigo-600" />
              <span>Invisible Character Inspector (Test your Clipboard):</span>
            </span>
          </div>
          <input
            type="text"
            value={revealInspectionText}
            onChange={(e) => setRevealInspectionText(e.target.value)}
            placeholder="Paste text here to detect hidden zero-width spaces..."
            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white"
          />
          {revealInspectionText && (
            <div className="mt-2 p-2.5 rounded-lg bg-indigo-50 border border-indigo-100 text-xs font-mono text-indigo-950">
              <strong>Decoded Content:</strong> {revealInvisible(revealInspectionText)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
