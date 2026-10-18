import { describe, it, expect } from "vitest";
import {
  toBold,
  toItalic,
  toBoldItalic,
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
  transformAllStyles
} from "../lib/text-engine";

describe("TypeCraft Text Transformation Engine", () => {
  const sample = "Hello World 123";

  describe("1. Bold Text Transformations", () => {
    it("converts text to bold sans-serif", () => {
      const result = toBold("abc ABC 123", false);
      expect(result).toBe("𝗮𝗯𝗰 𝗔𝗕𝗖 𝟭𝟮𝟯");
    });

    it("converts text to bold serif", () => {
      const result = toBold("abc ABC 123", true);
      expect(result).toBe("𝐚𝐛𝐜 𝐀𝐁𝐂 𝟏𝟐𝟑");
    });

    it("handles empty string gracefully", () => {
      expect(toBold("")).toBe("");
    });
  });

  describe("2. Italic Transformations", () => {
    it("converts text to italic sans-serif", () => {
      const result = toItalic("abc", false);
      expect(result).toBe("𝘢𝘣𝘤");
    });

    it("converts text to bold italic", () => {
      const result = toBoldItalic("abc");
      expect(result).toBe("𝙖𝙗𝙘");
    });
  });

  describe("3. Cursive Script", () => {
    it("converts text to bold script calligraphy", () => {
      const result = toCursive("abc");
      expect(result).toBe("𝓪𝓫𝓬");
    });

    it("converts text to light script", () => {
      const result = toCursive("abc", false);
      expect(result).toBe("𝒶𝒷𝒸");
    });
  });

  describe("4. Upside Down Text", () => {
    it("flips and reverses text 180 degrees", () => {
      const result = toUpsideDown("hello", true);
      expect(result).toBe("ollǝɥ");
    });

    it("flips punctuation and numbers", () => {
      const result = toUpsideDown("? 123 !", false);
      expect(result).toBe("¿ ƖᄅƐ ¡");
    });
  });

  describe("5. Cursed & Zalgo Text", () => {
    it("adds combining diacritical marks", () => {
      const result = toZalgo("test", { intensity: 3 });
      expect(result.length).toBeGreaterThan("test".length);
      expect(result.includes("t")).toBe(true);
    });

    it("handles empty input without crashing", () => {
      expect(toZalgo("")).toBe("");
    });
  });

  describe("6. Creepy & Scary Gothic", () => {
    it("transforms into fraktur with marks for creepy", () => {
      const result = toCreepyText("dark");
      expect(result.length).toBeGreaterThan("dark".length);
    });

    it("transforms into bold fraktur with strikes for scary", () => {
      const result = toScaryText("fear");
      expect(result.length).toBeGreaterThan("fear".length);
    });
  });

  describe("7. Weird Text", () => {
    it("substitutes unusual phonetic symbols", () => {
      const result = toWeirdText("abc");
      expect(result).toBe("αв¢");
    });
  });

  describe("8. Fire Text", () => {
    it("wraps double struck text in flames", () => {
      const result = toFireText("fire");
      expect(result.startsWith("🔥 ")).toBe(true);
      expect(result.endsWith(" 🔥")).toBe(true);
    });
  });

  describe("9. Fancy Text (Double-Struck & Fraktur)", () => {
    it("transforms into double-struck blackboard", () => {
      const result = toFancyDoubleStruck("ABC");
      expect(result).toBe("𝔸𝔹ℂ");
    });

    it("transforms into fraktur", () => {
      const result = toFancyFraktur("ABC");
      expect(result).toBe("𝔄𝔅ℭ");
    });
  });

  describe("10. Small Text (Caps & Superscript)", () => {
    it("transforms to small caps", () => {
      const result = toSmallCaps("hello");
      expect(result).toBe("ʜᴇʟʟᴏ");
    });

    it("transforms to superscript", () => {
      const result = toSuperscript("123");
      expect(result).toBe("¹²³");
    });
  });

  describe("11. Bubble Text", () => {
    it("converts to outline circled bubble letters", () => {
      const result = toBubble("abc 123", false);
      expect(result).toBe("ⓐⓑⓒ ①②③");
    });

    it("converts to solid filled bubble letters", () => {
      const result = toBubble("ABC", true);
      expect(result).toBe("🅐🅑🅒");
    });
  });

  describe("12. Strikethrough Text", () => {
    it("adds combining long stroke overlays", () => {
      const result = toStrikethrough("test", "strike");
      expect(result.length).toBeGreaterThan("test".length);
      expect(result.includes("\u0336")).toBe(true);
    });
  });

  describe("13. Text Repeater", () => {
    it("repeats text with specified delimiter", () => {
      const result = repeatText("hi", { count: 3, delimiter: "space" });
      expect(result).toBe("hi hi hi");
    });

    it("adds line indexes when requested", () => {
      const result = repeatText("note", { count: 2, delimiter: "newline", addIndex: true });
      expect(result).toBe("1. note\n2. note");
    });
  });

  describe("14. Text Reverser", () => {
    it("reverses characters", () => {
      expect(reverseText("hello", "characters")).toBe("olleh");
    });

    it("reverses word sequence", () => {
      expect(reverseText("one two three", "words")).toBe("three two one");
    });
  });

  describe("15. Text Case Converter", () => {
    it("converts to title case", () => {
      expect(convertCase("hello world", "title")).toBe("Hello World");
    });

    it("converts to camelCase", () => {
      expect(convertCase("hello world test", "camel")).toBe("helloWorldTest");
    });

    it("converts to kebab-case", () => {
      expect(convertCase("Hello World", "kebab")).toBe("hello-world");
    });

    it("converts to alternating case", () => {
      const result = convertCase("abcdef", "alternating");
      expect(result).toBe("aBcDeF");
    });
  });

  describe("16. Invisible Characters", () => {
    it("generates hangul filler", () => {
      const result = generateInvisible("hangul", 2);
      expect(result).toBe("\u3164\u3164");
    });

    it("decodes and reveals invisible characters", () => {
      const sample = `Secret\u200B\u3164Word`;
      expect(revealInvisible(sample)).toBe("Secret[ZWSP][HANGUL_FILLER]Word");
    });
  });

  describe("17. Unicode Symbol Embellisher", () => {
    it("wraps text in stars preset", () => {
      const result = toSymbolText("Hero", "stars");
      expect(result).toContain("★·.·´¯`·.·★ Hero ★·.·´¯`·.·★");
    });
  });

  describe("18. Universal transformAllStyles", () => {
    it("returns array of 20+ transformed cards for homepage", () => {
      const cards = transformAllStyles("TypeCraft");
      expect(cards.length).toBeGreaterThanOrEqual(20);
      expect(cards.some((c) => c.slug === "cursed-text-generator")).toBe(true);
      expect(cards.some((c) => c.slug === "bold-text-generator")).toBe(true);
      expect(cards.some((c) => c.slug === "cursive-text-generator")).toBe(true);
    });
  });

  describe("19. Unicode and Emoji Edge Cases", () => {
    it("preserves emojis without corrupting surrogate pairs", () => {
      const input = "Hello 🔥🚀 World";
      const result = toBold(input);
      expect(result).toContain("🔥🚀");
    });

    it("preserves punctuation marks safely", () => {
      const input = "What?! Really...";
      const result = toCursive(input);
      expect(result).toContain("?!");
      expect(result).toContain("...");
    });
  });
});
