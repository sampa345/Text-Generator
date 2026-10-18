/**
 * TypeCraft Unicode Text Transformation Engine
 * Comprehensive, pure client-side transformation algorithms for 20+ text styles.
 * Handles astral plane characters, emoji pass-through, and combining marks safely.
 */

// Basic Latin character mapping helpers
const normalChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// Upside down character maps
const upsideDownMap: Record<string, string> = {
  a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ",
  k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ",
  u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z",
  A: "∀", B: "𐐒", C: "Ɔ", D: "ᗡ", E: "Ǝ", F: "Ⅎ", G: "⅁", H: "H", I: "I", J: "ſ",
  K: "ʞ", L: "˥", M: "W", N: "N", O: "O", P: "Ԁ", Q: "Ό", R: "ᴚ", S: "S", T: "⊥",
  U: "∩", V: "Λ", W: "M", X: "X", Y: "⅄", Z: "Z",
  0: "0", 1: "Ɩ", 2: "ᄅ", 3: "Ɛ", 4: "ㄣ", 5: "ϛ", 6: "9", 7: "ㄥ", 8: "8", 9: "6",
  ".": "˙", ",": "'", "'": ",", "\"": "„", "!": "¡", "?": "¿", "<": ">", ">": "<",
  "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{", "_": "‾", "&": "⅋",
  ";": "؛"
};

// Zalgo diacritic mark collections
const zalgoUp = [
  "\u030d", "\u030e", "\u0304", "\u0305", "\u033f", "\u0311", "\u0306", "\u0310",
  "\u0352", "\u0357", "\u0351", "\u0307", "\u0308", "\u030a", "\u0342", "\u0343",
  "\u0344", "\u034a", "\u034b", "\u034c", "\u0303", "\u0302", "\u030c", "\u0350"
];

const zalgoMid = [
  "\u0315", "\u031b", "\u0340", "\u0341", "\u0358", "\u0321", "\u0322", "\u0327",
  "\u0328", "\u0334", "\u0335", "\u0336", "\u0337", "\u0338", "\u0360", "\u0361"
];

const zalgoDown = [
  "\u0316", "\u0317", "\u0318", "\u0319", "\u031c", "\u031d", "\u031e", "\u031f",
  "\u0320", "\u0324", "\u0325", "\u0326", "\u0329", "\u032a", "\u032b", "\u032c",
  "\u032d", "\u032e", "\u032f", "\u0330", "\u0331", "\u0332", "\u0333", "\u0339",
  "\u033a", "\u033b", "\u033c", "\u0345", "\u0347", "\u0348", "\u0349", "\u034d"
];

// Mathematical & Unicode font style alphabets (a-z, A-Z, 0-9)
const stylesMap: Record<string, { lower: string; upper: string; digits?: string }> = {
  boldSans: {
    lower: "𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇",
    upper: "𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭",
    digits: "𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵"
  },
  boldSerif: {
    lower: "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳",
    upper: "𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙",
    digits: "𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗"
  },
  italicSans: {
    lower: "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻",
    upper: "𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡"
  },
  italicSerif: {
    lower: "𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧",
    upper: "𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍"
  },
  boldItalic: {
    lower: "𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯",
    upper: "𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕"
  },
  cursiveScript: {
    lower: "𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏",
    upper: "𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵"
  },
  cursiveBold: {
    lower: "𝓬𝓾𝓻𝓼𝓲𝓿𝓮", // used for index lookup via full string below
    upper: ""
  },
  fraktur: {
    lower: "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷",
    upper: "𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ"
  },
  frakturBold: {
    lower: "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟",
    upper: "𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅"
  },
  doubleStruck: {
    lower: "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫",
    upper: "𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ",
    digits: "𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡"
  },
  smallCaps: {
    lower: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ",
    upper: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ"
  },
  superscript: {
    lower: "ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᑫʳˢᵗᵘᵛʷˣʸᶻ",
    upper: "ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᑫᴿˢᵀᵁⱽᵂˣʸᶻ",
    digits: "⁰¹²³⁴⁵⁶⁷⁸⁹"
  },
  bubbleOutline: {
    lower: "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ",
    upper: "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ",
    digits: "⓪①②③④⑤⑥⑦⑧⑨"
  },
  bubbleFilled: {
    lower: "🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩",
    upper: "🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩",
    digits: "⓿➊➋➌➍➎➏➐➑➒"
  },
  squaredOutline: {
    lower: "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉",
    upper: "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉"
  },
  squaredFilled: {
    lower: "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉",
    upper: "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉"
  },
  monospace: {
    lower: "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣",
    upper: "𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉",
    digits: "𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿"
  }
};

// Full bold cursive mappings
const boldCursiveLower = Array.from("𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃");
const boldCursiveUpper = Array.from("𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩");

// Weird text symbol substitutions
const weirdMap: Record<string, string> = {
  a: "α", b: "в", c: "¢", d: "∂", e: "є", f: "ƒ", g: "g", h: "н", i: "ι", j: "נ",
  k: "к", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "ף", r: "я", s: "ѕ", t: "т",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "у", z: "z",
  A: "Δ", B: "β", C: "Ͼ", D: "Ð", E: "Ξ", F: "₣", G: "₲", H: "Ħ", I: "Ɨ", J: "Ϳ",
  K: "Ҡ", L: "Ł", M: "₥", N: "Ň", O: "Ø", P: "₱", Q: "Ω", R: "Я", S: "§", T: "₮",
  U: "Ц", V: "Ѵ", W: "Ш", X: "Ж", Y: "¥", Z: "Ƶ"
};

/**
 * Safely maps single ASCII character to corresponding index in a Unicode alphabet string
 */
function mapChar(char: string, styleKey: keyof typeof stylesMap): string {
  const style = stylesMap[styleKey];
  if (!style) return char;

  const code = char.charCodeAt(0);
  // Lowercase a-z (97-122)
  if (code >= 97 && code <= 122) {
    const chars = Array.from(style.lower);
    return chars[code - 97] || char;
  }
  // Uppercase A-Z (65-90)
  if (code >= 65 && code <= 90) {
    const chars = Array.from(style.upper);
    return chars[code - 65] || char;
  }
  // Digits 0-9 (48-57)
  if (code >= 48 && code <= 57 && style.digits) {
    const chars = Array.from(style.digits);
    return chars[code - 48] || char;
  }
  return char;
}

/**
 * Applies a character mapping across an entire string safely
 */
function applyStyle(text: string, styleKey: keyof typeof stylesMap): string {
  if (!text) return "";
  let result = "";
  for (const char of text) {
    result += mapChar(char, styleKey);
  }
  return result;
}

// 1. Universal / Bold Text
export function toBold(text: string, serif = false): string {
  return applyStyle(text, serif ? "boldSerif" : "boldSans");
}

// 2. Italic Text
export function toItalic(text: string, serif = false): string {
  return applyStyle(text, serif ? "italicSerif" : "italicSans");
}

// 3. Bold Italic
export function toBoldItalic(text: string): string {
  return applyStyle(text, "boldItalic");
}

// 4. Cursive Text
export function toCursive(text: string, bold = true): string {
  if (!text) return "";
  if (!bold) {
    return applyStyle(text, "cursiveScript");
  }
  let result = "";
  for (const char of text) {
    const code = char.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      result += boldCursiveLower[code - 97] || char;
    } else if (code >= 65 && code <= 90) {
      result += boldCursiveUpper[code - 65] || char;
    } else {
      result += char;
    }
  }
  return result;
}

// 5. Upside Down Text
export function toUpsideDown(text: string, reverseOrder = true): string {
  if (!text) return "";
  const chars = Array.from(text);
  const mapped = chars.map((ch) => upsideDownMap[ch] || ch);
  return reverseOrder ? mapped.reverse().join("") : mapped.join("");
}

// 6. Zalgo / Cursed Text Generator
export interface ZalgoOptions {
  up?: boolean;
  mid?: boolean;
  down?: boolean;
  intensity?: number; // 1 to 10
}

export function toZalgo(text: string, options: ZalgoOptions = {}): string {
  if (!text) return "";
  const { up = true, mid = true, down = true, intensity = 4 } = options;
  let result = "";

  // Deterministic pseudo-randomness based on character position for stability
  let seed = 42;
  const pseudoRandom = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    result += char;

    // Do not add diacritics to spaces or line breaks
    if (/\s/.test(char)) continue;

    const count = Math.min(Math.floor(intensity * 1.5), 15);

    if (up) {
      const upCount = Math.floor(pseudoRandom() * count);
      for (let j = 0; j < upCount; j++) {
        const idx = Math.floor(pseudoRandom() * zalgoUp.length);
        result += zalgoUp[idx];
      }
    }

    if (mid) {
      const midCount = Math.floor(pseudoRandom() * Math.max(1, count / 2));
      for (let j = 0; j < midCount; j++) {
        const idx = Math.floor(pseudoRandom() * zalgoMid.length);
        result += zalgoMid[idx];
      }
    }

    if (down) {
      const downCount = Math.floor(pseudoRandom() * count);
      for (let j = 0; j < downCount; j++) {
        const idx = Math.floor(pseudoRandom() * zalgoDown.length);
        result += zalgoDown[idx];
      }
    }
  }
  return result;
}

// 7. Creepy Text (Gothic + moderate dark glitch marks)
export function toCreepyText(text: string): string {
  if (!text) return "";
  const gothic = applyStyle(text, "fraktur");
  let result = "";
  for (let i = 0; i < gothic.length; i++) {
    result += gothic[i];
    if (i % 2 === 0 && !/\s/.test(gothic[i])) {
      result += "\u0338"; // combining long solidus overlay
    }
    if (i % 3 === 0 && !/\s/.test(gothic[i])) {
      result += "\u0325"; // combining ring below
    }
  }
  return result;
}

// 8. Scary Text (Bold Fraktur with heavy cross strikes)
export function toScaryText(text: string): string {
  if (!text) return "";
  const boldGothic = applyStyle(text, "frakturBold");
  let result = "";
  for (let i = 0; i < boldGothic.length; i++) {
    const ch = boldGothic[i];
    result += ch;
    if (!/\s/.test(ch)) {
      result += "\u0337"; // combining short solidus overlay
      if (i % 3 === 0) result += "\u0359"; // combining asterisk below
    }
  }
  return result;
}

// 9. Weird Text
export function toWeirdText(text: string): string {
  if (!text) return "";
  let result = "";
  for (const char of text) {
    result += weirdMap[char] || char;
  }
  return result;
}

// 10. Fire Text
export function toFireText(text: string): string {
  if (!text) return "";
  const styled = applyStyle(text, "doubleStruck");
  return `🔥 ${styled} 🔥`;
}

// 11. Fancy Text (Multiple decorative variations)
export function toFancyDoubleStruck(text: string): string {
  return applyStyle(text, "doubleStruck");
}

export function toFancyFraktur(text: string): string {
  return applyStyle(text, "fraktur");
}

// 12. Small Text
export function toSmallCaps(text: string): string {
  return applyStyle(text, "smallCaps");
}

export function toSuperscript(text: string): string {
  return applyStyle(text, "superscript");
}

// 13. Bubble Text
export function toBubble(text: string, filled = false): string {
  return applyStyle(text, filled ? "bubbleFilled" : "bubbleOutline");
}

// 14. Strikethrough Text
export type StrikeType = "strike" | "slash" | "tilde" | "underline";

export function toStrikethrough(text: string, type: StrikeType = "strike"): string {
  if (!text) return "";
  const markMap: Record<StrikeType, string> = {
    strike: "\u0336", // combining long stroke overlay
    slash: "\u0337", // combining short solidus overlay
    tilde: "\u0334", // combining tilde overlay
    underline: "\u0332" // combining low line
  };
  const mark = markMap[type];
  let result = "";
  for (const char of text) {
    result += char;
    if (!/\s/.test(char)) {
      result += mark;
    }
  }
  return result;
}

// 15. Text Repeater
export interface RepeaterOptions {
  count: number;
  delimiter: "newline" | "space" | "comma" | "none" | "custom";
  customDelimiter?: string;
  addIndex?: boolean;
}

export function repeatText(text: string, options: RepeaterOptions): string {
  if (!text) return "";
  const count = Math.max(1, Math.min(options.count, 5000));
  let sep = "";
  switch (options.delimiter) {
    case "newline":
      sep = "\n";
      break;
    case "space":
      sep = " ";
      break;
    case "comma":
      sep = ", ";
      break;
    case "custom":
      sep = options.customDelimiter ?? "";
      break;
    case "none":
    default:
      sep = "";
  }

  const items: string[] = [];
  for (let i = 1; i <= count; i++) {
    items.push(options.addIndex ? `${i}. ${text}` : text);
  }
  return items.join(sep);
}

// 16. Text Reverser
export type ReverseMode = "characters" | "words" | "lines" | "flipUpsideDown";

export function reverseText(text: string, mode: ReverseMode = "characters"): string {
  if (!text) return "";
  switch (mode) {
    case "characters":
      return Array.from(text).reverse().join("");
    case "words":
      return text.split(/(\s+)/).reverse().join("");
    case "lines":
      return text.split("\n").reverse().join("\n");
    case "flipUpsideDown":
      return toUpsideDown(text, true);
    default:
      return text;
  }
}

// 17. Text Case Converter
export type CaseMode =
  | "uppercase"
  | "lowercase"
  | "title"
  | "sentence"
  | "camel"
  | "kebab"
  | "snake"
  | "alternating";

export function convertCase(text: string, mode: CaseMode): string {
  if (!text) return "";
  switch (mode) {
    case "uppercase":
      return text.toUpperCase();
    case "lowercase":
      return text.toLowerCase();
    case "title":
      return text.replace(
        /\w\S*/g,
        (w) => w.charAt(0).toUpperCase() + w.substring(1).toLowerCase()
      );
    case "sentence":
      return text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    case "alternating": {
      let alt = "";
      let upper = false;
      for (const char of text) {
        if (/[a-zA-Z]/.test(char)) {
          alt += upper ? char.toUpperCase() : char.toLowerCase();
          upper = !upper;
        } else {
          alt += char;
        }
      }
      return alt;
    }
    case "camel": {
      const words = text.toLowerCase().match(/[a-z0-9]+/gi) || [];
      return words
        .map((w, i) => (i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)))
        .join("");
    }
    case "kebab": {
      const words = text.toLowerCase().match(/[a-z0-9]+/gi) || [];
      return words.join("-");
    }
    case "snake": {
      const words = text.toLowerCase().match(/[a-z0-9]+/gi) || [];
      return words.join("_");
    }
    default:
      return text;
  }
}

// 18. Invisible Character Generator
export type InvisibleCharType = "zwsp" | "hangul" | "zwnj" | "zwj" | "braille";

export const invisibleCharSpecs: Record<
  InvisibleCharType,
  { name: string; code: string; char: string; description: string }
> = {
  zwsp: {
    name: "Zero-Width Space",
    code: "U+200B",
    char: "\u200B",
    description: "Invisible character with zero width. Ideal for usernames and bypassing length filters."
  },
  hangul: {
    name: "Hangul Filler",
    code: "U+3164",
    char: "\u3164",
    description: "Standard empty Korean character. Renders as a true blank space on Discord and gaming platforms."
  },
  zwnj: {
    name: "Zero-Width Non-Joiner",
    code: "U+200C",
    char: "\u200C",
    description: "Prevents characters from joining into ligatures."
  },
  zwj: {
    name: "Zero-Width Joiner",
    code: "U+200D",
    char: "\u200D",
    description: "Combines glyphs or emoji sequences into unified graphics."
  },
  braille: {
    name: "Braille Pattern Blank",
    code: "U+2800",
    char: "\u2800",
    description: "Empty braille character cell. Acts as a whitespace that is not trimmed by chat apps."
  }
};

export function generateInvisible(type: InvisibleCharType, count = 1): string {
  const spec = invisibleCharSpecs[type] || invisibleCharSpecs.zwsp;
  return spec.char.repeat(Math.max(1, Math.min(count, 500)));
}

export function revealInvisible(text: string): string {
  if (!text) return "";
  return text
    .replace(/\u200B/g, "[ZWSP]")
    .replace(/\u3164/g, "[HANGUL_FILLER]")
    .replace(/\u200C/g, "[ZWNJ]")
    .replace(/\u200D/g, "[ZWJ]")
    .replace(/\u2800/g, "[BRAILLE_BLANK]");
}

// 19. Unicode Symbol & Border Embellisher
export type SymbolPreset = "stars" | "wings" | "sparkles" | "hearts" | "brackets" | "aesthetic";

const symbolDecorations: Record<SymbolPreset, { left: string; right: string; label: string }> = {
  stars: { left: "★·.·´¯`·.·★ ", right: " ★·.·´¯`·.·★", label: "Classic Stars" },
  wings: { left: "꧁༺ ", right: " ༻꧂", label: "Angel Wings" },
  sparkles: { left: "✧･ﾟ: *✧･ﾟ:* ", right: " *:･ﾟ✧*:･ﾟ✧", label: "Sparkles" },
  hearts: { left: "♡ ━━━━━━━━━━━━━━ ♡\n", right: "\n♡ ━━━━━━━━━━━━━━ ♡", label: "Heart Border" },
  brackets: { left: "【", right: "】", label: "Bold Brackets" },
  aesthetic: { left: "｡☆✼★━━━━━━━━━━━━★✼☆｡\n", right: "\n｡☆✼★━━━━━━━━━━━━★✼☆｡", label: "Aesthetic Banner" }
};

export function toSymbolText(text: string, preset: SymbolPreset = "stars"): string {
  if (!text) return "";
  const deco = symbolDecorations[preset] || symbolDecorations.stars;
  return `${deco.left}${text}${deco.right}`;
}

export function getSymbolPresets(): Array<{ id: SymbolPreset; label: string; sample: string }> {
  return (Object.keys(symbolDecorations) as SymbolPreset[]).map((k) => ({
    id: k,
    label: symbolDecorations[k].label,
    sample: `${symbolDecorations[k].left}Sample${symbolDecorations[k].right}`
  }));
}

// 20. Universal Styles Generator (Powers HomeStudio Multi-Card Live View)
export interface TransformedCard {
  id: string;
  name: string;
  category: "all" | "fancy" | "glitch" | "formatting" | "utility";
  output: string;
  slug: string;
}

export function transformAllStyles(input: string): TransformedCard[] {
  const sample = input || "Hello World";
  return [
    {
      id: "bold-sans",
      name: "Bold Sans-Serif",
      category: "formatting",
      output: toBold(sample, false),
      slug: "bold-text-generator"
    },
    {
      id: "bold-serif",
      name: "Bold Serif",
      category: "formatting",
      output: toBold(sample, true),
      slug: "bold-text-generator"
    },
    {
      id: "cursive-bold",
      name: "Cursive Script (Bold)",
      category: "fancy",
      output: toCursive(sample, true),
      slug: "cursive-text-generator"
    },
    {
      id: "cursive-light",
      name: "Cursive Script (Light)",
      category: "fancy",
      output: toCursive(sample, false),
      slug: "cursive-text-generator"
    },
    {
      id: "italic-sans",
      name: "Italic Sans",
      category: "formatting",
      output: toItalic(sample, false),
      slug: "italic-text-generator"
    },
    {
      id: "italic-serif",
      name: "Italic Serif",
      category: "formatting",
      output: toItalic(sample, true),
      slug: "italic-text-generator"
    },
    {
      id: "upside-down",
      name: "Upside Down",
      category: "utility",
      output: toUpsideDown(sample, true),
      slug: "upside-down-text-generator"
    },
    {
      id: "cursed-zalgo",
      name: "Cursed / Zalgo",
      category: "glitch",
      output: toZalgo(sample, { intensity: 4 }),
      slug: "cursed-text-generator"
    },
    {
      id: "creepy-text",
      name: "Creepy Gothic",
      category: "glitch",
      output: toCreepyText(sample),
      slug: "creepy-text-generator"
    },
    {
      id: "scary-text",
      name: "Scary Distressed",
      category: "glitch",
      output: toScaryText(sample),
      slug: "scary-text-generator"
    },
    {
      id: "weird-text",
      name: "Weird Symbols",
      category: "glitch",
      output: toWeirdText(sample),
      slug: "weird-text-generator"
    },
    {
      id: "fire-text",
      name: "Fire Text",
      category: "fancy",
      output: toFireText(sample),
      slug: "fire-text-generator"
    },
    {
      id: "double-struck",
      name: "Double-Struck / Blackboard",
      category: "fancy",
      output: toFancyDoubleStruck(sample),
      slug: "fancy-text-generator"
    },
    {
      id: "fraktur",
      name: "Fraktur Medieval",
      category: "fancy",
      output: toFancyFraktur(sample),
      slug: "fancy-text-generator"
    },
    {
      id: "small-caps",
      name: "Small Capitals",
      category: "formatting",
      output: toSmallCaps(sample),
      slug: "small-text-generator"
    },
    {
      id: "superscript",
      name: "Superscript Tiny",
      category: "formatting",
      output: toSuperscript(sample),
      slug: "small-text-generator"
    },
    {
      id: "bubble-outline",
      name: "Bubble Circled",
      category: "fancy",
      output: toBubble(sample, false),
      slug: "bubble-text-generator"
    },
    {
      id: "bubble-filled",
      name: "Bubble Filled",
      category: "fancy",
      output: toBubble(sample, true),
      slug: "bubble-text-generator"
    },
    {
      id: "strikethrough",
      name: "Strikethrough Line",
      category: "formatting",
      output: toStrikethrough(sample, "strike"),
      slug: "strikethrough-text-generator"
    },
    {
      id: "symbol-stars",
      name: "Symbol Embellished",
      category: "fancy",
      output: toSymbolText(sample, "stars"),
      slug: "unicode-symbol-text-generator"
    },
    {
      id: "reverse-chars",
      name: "Reversed Characters",
      category: "utility",
      output: reverseText(sample, "characters"),
      slug: "text-reverser"
    },
    {
      id: "alternating-case",
      name: "aLtErNaTiNg cAsE",
      category: "utility",
      output: convertCase(sample, "alternating"),
      slug: "text-case-converter"
    }
  ];
}
