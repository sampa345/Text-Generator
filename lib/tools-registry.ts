/**
 * TypeCraft Tools Registry
 * Structured directory of all 20 text generation tools with full SEO metadata,
 * instructions, FAQs, use-cases, and cross-linking rules.
 */

export interface ToolFAQ {
  question: string;
  answer: string;
}

export interface ToolDefinition {
  id: string;
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  category: "Glitch & Horror" | "Social & Aesthetic" | "Typography Formatting" | "Utilities";
  shortDescription: string;
  exampleInput: string;
  exampleOutput: string;
  howItWorks: string;
  instructions: string[];
  useCases: string[];
  compatibilityNotes: string;
  faqs: ToolFAQ[];
  relatedSlugs: string[];
}

export const toolsRegistry: ToolDefinition[] = [
  {
    id: "cursed-text",
    slug: "cursed-text-generator",
    name: "Cursed Text Generator",
    h1: "Cursed Text Generator (Zalgo & Glitch)",
    metaTitle: "Cursed Text Generator – Copy and Paste Glitch & Zalgo Text",
    metaDescription: "Generate chaotic cursed and glitch text instantly. Customize Zalgo corruption levels, copy to clipboard, and paste into Discord, Reddit, or gaming bios.",
    category: "Glitch & Horror",
    shortDescription: "Transforms regular letters into cascading glitched characters using Unicode combining diacritical marks.",
    exampleInput: "He Comes",
    exampleOutput: "H̷e̷ ̵C̶o̸m̷e̶s̵",
    howItWorks: "Cursed text works by appending multiple Unicode combining diacritical marks (Unicode range U+0300 to U+036F) to standard Latin glyphs. When rendered, the browser stacks these accent marks vertically above, across, and beneath the base character.",
    instructions: [
      "Type or paste your text into the input field.",
      "Adjust the corruption intensity slider to control the density of combining glitch marks.",
      "Preview the glitched output in real time.",
      "Click 'Copy Result' to copy the formatted text to your clipboard.",
      "Paste your cursed text directly into Discord, Reddit, TikTok, or gaming profiles."
    ],
    useCases: [
      "Discord nicknames and server channel topic headers",
      "Horror fiction, creepypasta storytelling, and ARG game clues",
      "Attention-grabbing social media captions on Twitter/X or TikTok",
      "Gaming clan tags and gamer handles in Steam or Roblox"
    ],
    compatibilityNotes: "Supported across all modern operating systems (iOS, Android, macOS, Windows). Some platforms with strict anti-spam filters (like Instagram usernames) may truncate excess combining marks to maintain UI stability.",
    faqs: [
      {
        question: "How does cursed text actually work?",
        answer: "Cursed text relies on standard Unicode combining characters. Rather than changing the font, it stacks multiple zero-width accent symbols above and below existing letters."
      },
      {
        question: "Is cursed text safe to copy and paste?",
        answer: "Yes. It is standard plain text adhering to the Unicode Standard. It contains no executable code or scripts."
      },
      {
        question: "Why do some apps block extreme cursed text?",
        answer: "Extreme glitch text can overflow chat line heights and cover neighboring messages. Platforms like Twitch and Discord may trim or normalize excessively tall combining marks."
      }
    ],
    relatedSlugs: ["zalgo-text-generator", "creepy-text-generator", "scary-text-generator", "weird-text-generator"]
  },
  {
    id: "upside-down-text",
    slug: "upside-down-text-generator",
    name: "Upside Down Text Generator",
    h1: "Upside Down Text Generator",
    metaTitle: "Upside Down Text Generator – Flip Text 180° Copy & Paste",
    metaDescription: "Flip your text upside down instantly. Reverse letter order, flip punctuation, copy with one click, and paste on Instagram, Twitter, and WhatsApp.",
    category: "Utilities",
    shortDescription: "Flips your sentences 180 degrees using inverted Unicode glyphs and inverted character ordering.",
    exampleInput: "Turn me upside down",
    exampleOutput: "uʍop ǝpᴉsdn ǝɯ uɹn┴",
    howItWorks: "The tool substitutes each Latin letter, number, and punctuation mark with its inverted Unicode counterpart (such as 'ɐ' for 'a' and 'ǝ' for 'e') and reverses the character order so the sentence reads upside down from left to right.",
    instructions: [
      "Enter your text into the workspace.",
      "Toggle reverse letter order if you prefer mirrored upside-down reading.",
      "Click 'Copy' to copy the inverted text.",
      "Paste into your bio, comment, or chat."
    ],
    useCases: [
      "Clever puzzle clues and upside-down social media captions",
      "Sarcastic or playful Discord and WhatsApp messages",
      "Unique gamer tags and profile status lines"
    ],
    compatibilityNotes: "Universal support across mobile and desktop. Some less common punctuation marks use close phonetic approximation glyphs.",
    faqs: [
      {
        question: "Can anyone read upside down text without special apps?",
        answer: "Yes! Because the characters are standard Unicode glyphs present in standard system fonts, any device will render them natively."
      },
      {
        question: "Can I flip numbers and punctuation upside down as well?",
        answer: "Yes, numbers (0-9) and standard punctuation marks (?, !, ., \") are fully mapped to their inverted Unicode equivalents."
      }
    ],
    relatedSlugs: ["text-reverser", "weird-text-generator", "strikethrough-text-generator"]
  },
  {
    id: "creepy-text",
    slug: "creepy-text-generator",
    name: "Creepy Text Generator",
    h1: "Creepy Text Generator",
    metaTitle: "Creepy Text Generator – Dark Gothic & Eerie Fonts to Copy",
    metaDescription: "Convert your text into eerie, gothic, and subtly glitched styles. Perfect for Halloween posts, horror bios, and mysterious Discord usernames.",
    category: "Glitch & Horror",
    shortDescription: "Merges gothic Fraktur typography with subtle combining slash accents for an unsettling, eerie aesthetic.",
    exampleInput: "Beware the dark",
    exampleOutput: "𝔅̷𝔢̷𝔴̷𝔞̷𝔯̷𝔢̷ 𝔱̷𝔥̷𝔢̷ 𝔡̷𝔞̷𝔯̷𝔨̷",
    howItWorks: "Translates standard alphabetic characters into historical Fraktur blackletter glyphs from the Mathematical Alphanumeric Symbols block, augmented with intermittent combining solidus marks.",
    instructions: [
      "Type your message into the editor.",
      "Review the eerie gothic rendering in the live preview window.",
      "Click Copy to place the text on your clipboard."
    ],
    useCases: [
      "Halloween event announcements and party invitations",
      "Dark fantasy character names in D&D, MMOs, and roleplay forums",
      "Atmospheric descriptions on Tumblr, Wattpad, and Reddit"
    ],
    compatibilityNotes: "Renders accurately on all devices running modern iOS, Android, Windows 10/11, and macOS.",
    faqs: [
      {
        question: "What is the difference between creepy text and cursed text?",
        answer: "Creepy text uses structured Gothic Fraktur typography with light slash marks, whereas cursed (Zalgo) text uses vertical cascading glitch diacritics."
      }
    ],
    relatedSlugs: ["scary-text-generator", "cursed-text-generator", "fancy-text-generator"]
  },
  {
    id: "scary-text",
    slug: "scary-text-generator",
    name: "Scary Text Generator",
    h1: "Scary Text Generator (Horror Blackletter)",
    metaTitle: "Scary Text Generator – Bold Horror Text Copy & Paste",
    metaDescription: "Generate heavy, aggressive horror text with distressed blackletter symbols. Instant copy and paste for gaming handles and horror storytelling.",
    category: "Glitch & Horror",
    shortDescription: "Heavy bold blackletter glyphs overlaid with distressed strikethroughs and sinister accents.",
    exampleInput: "Nightmare",
    exampleOutput: "𝕹̷𝖎̷𝖌̷𝖍̷𝖙̷𝖒̷𝖆̷𝖗̷𝖊̷",
    howItWorks: "Combines bold mathematical blackletter runes with combining strikethrough overlays to produce an aggressive, distressed horror effect.",
    instructions: [
      "Input your words or phrases.",
      "Watch the heavy horror transformation apply instantly.",
      "Copy and paste directly into your destination app."
    ],
    useCases: [
      "Heavy metal band names and merchandise mockups",
      "Horror video game guilds and clan titles",
      "Spooky season social posts and YouTube video titles"
    ],
    compatibilityNotes: "Works cleanly on Discord, Twitter/X, Instagram, and Reddit.",
    faqs: [
      {
        question: "Will screen readers be able to read scary text?",
        answer: "Screen readers may announce mathematical symbol names. For critical accessibility information, provide standard text alongside decorative stylized text."
      }
    ],
    relatedSlugs: ["creepy-text-generator", "cursed-text-generator", "bold-text-generator"]
  },
  {
    id: "weird-text",
    slug: "weird-text-generator",
    name: "Weird Text Generator",
    h1: "Weird Text Generator (Unusual Glyphs)",
    metaTitle: "Weird Text Generator – Quirky & Unusual Font Styles",
    metaDescription: "Transform ordinary sentences into quirky, eccentric letterforms using phonetic and mathematical Unicode symbols. Copy and paste anywhere.",
    category: "Glitch & Horror",
    shortDescription: "Replaces standard Latin characters with Greek letters, currency symbols, and unusual phonetic glyphs.",
    exampleInput: "Something weird",
    exampleOutput: "ѕσмєтнιηg ωєιя∂",
    howItWorks: "Selects visually similar glyphs from the Greek, Cyrillic, and Currency Unicode code charts to create a distinct, unusual typographic texture.",
    instructions: [
      "Write your text in the input box.",
      "Enjoy the quirky character substitutions.",
      "Copy the result with a single click."
    ],
    useCases: [
      "Creative artistic bios and status messages",
      "Memes, quirky jokes, and eccentric messaging",
      "Unique gamer gamertags that stand out in lobby leaderboards"
    ],
    compatibilityNotes: "High compatibility across all browsers and devices.",
    faqs: [
      {
        question: "Can I use weird text on Steam or Roblox?",
        answer: "Yes, Steam and Roblox both support standard Unicode characters in player display names."
      }
    ],
    relatedSlugs: ["bubble-text-generator", "upside-down-text-generator", "fancy-text-generator"]
  },
  {
    id: "italic-text",
    slug: "italic-text-generator",
    name: "Italic Text Generator",
    h1: "Italic Text Generator (Serif & Sans)",
    metaTitle: "Italic Text Generator – Copy and Paste Slanted Font (𝘢𝘣𝘤 & 𝑎𝑏𝑐)",
    metaDescription: "Generate slanted italic text for social media platforms that don't support native Markdown or rich formatting. Copy and paste into bios and comments.",
    category: "Typography Formatting",
    shortDescription: "Generates real Unicode italic serif and sans-serif characters that retain their slant even in plain text inputs.",
    exampleInput: "Italic emphasis",
    exampleOutput: "𝘐𝘵𝘢𝘭𝘪𝘤 𝘦𝘮𝘱𝘩𝘢𝘴𝘪𝘴",
    howItWorks: "Maps basic ASCII letters to the Mathematical Sans-Serif Italic (U+1D622–U+1D655) and Mathematical Serif Italic (U+1D44E–U+1D481) character blocks.",
    instructions: [
      "Enter the text you wish to italicize.",
      "Select your preferred style: Modern Sans-Serif or Classic Serif.",
      "Copy the formatted text and paste it into Instagram, Twitter, LinkedIn, or Facebook."
    ],
    useCases: [
      "Adding emphasis to Instagram captions and bio descriptions",
      "Book titles, citations, and quotes in LinkedIn updates",
      "Professional formatting in platforms lacking Markdown support"
    ],
    compatibilityNotes: "Extremely reliable on modern smartphones and computers. Older Android versions (prior to Android 8) may display generic boxes for rare mathematical symbols.",
    faqs: [
      {
        question: "Why doesn't Instagram have a built-in italic button?",
        answer: "Instagram only accepts plain text without HTML or Markdown styling. Using Unicode italic characters allows you to bypass this limitation."
      },
      {
        question: "Is this italic text searchable on social platforms?",
        answer: "Search algorithms may not index mathematical Unicode glyphs identically to standard ASCII. For maximum SEO discovery in bios, pair stylized text with standard keywords."
      }
    ],
    relatedSlugs: ["bold-text-generator", "cursive-text-generator", "strikethrough-text-generator"]
  },
  {
    id: "fire-text",
    slug: "fire-text-generator",
    name: "Fire Text Generator",
    h1: "Fire Text Generator (🔥 Stylized Embellishments)",
    metaTitle: "Fire Text Generator – Copy and Paste Fiery Aesthetic Text",
    metaDescription: "Add fiery flame accents and bold double-struck styling to your messages. Instant copy and paste for hype posts, gaming bios, and announcements.",
    category: "Social & Aesthetic",
    shortDescription: "Wraps double-struck letterforms in stylized flame accents and fire motifs.",
    exampleInput: "Too hot to handle",
    exampleOutput: "🔥 𝕋𝕠𝕠 𝕙𝕠𝕥 𝕥𝕠 𝕙𝕒𝕟𝕕𝕝𝕖 🔥",
    howItWorks: "Combines Blackboard Bold (Double-Struck) Unicode characters with selected aesthetic fire emoji markers.",
    instructions: [
      "Type your phrase into the workspace.",
      "Preview the fiery headline format.",
      "Hit copy to share on Discord, TikTok, or Twitter."
    ],
    useCases: [
      "Hype announcements for product drops and gaming streams",
      "Fitness milestones and celebratory victory posts",
      "Highlighting key takeaways in social media threads"
    ],
    compatibilityNotes: "Universal emoji and Unicode support.",
    faqs: [
      {
        question: "Can I remove the fire emoji if I only want the font?",
        answer: "Yes, you can also use our Fancy Text Generator for clean Double-Struck characters without surrounding emojis."
      }
    ],
    relatedSlugs: ["unicode-symbol-text-generator", "fancy-text-generator", "bold-text-generator"]
  },
  {
    id: "cursive-text",
    slug: "cursive-text-generator",
    name: "Cursive Text Generator",
    h1: "Cursive Text Generator (Copy and Paste Script)",
    metaTitle: "Cursive Text Generator – Copy and Paste Script Font (𝓬𝓾𝓻𝓼𝓲𝓿𝓮)",
    metaDescription: "Generate flowing cursive and script handwriting text. Copy and paste elegant calligraphy into Instagram bios, wedding announcements, and digital cards.",
    category: "Social & Aesthetic",
    shortDescription: "Converts typed sentences into elegant mathematical script and bold calligraphy.",
    exampleInput: "Elegance and Grace",
    exampleOutput: "𝓔𝓵𝓮𝓰𝓪𝓷𝓬𝓮 𝓪𝓷𝓭 𝓖𝓻𝓪𝓬𝓮",
    howItWorks: "Translates characters into Mathematical Script Bold (U+1D4D0–U+1D503) and Mathematical Script (U+1D49C–U+1D4CF) codepoints designed for calligraphic representations.",
    instructions: [
      "Type the phrase you want to convert into cursive.",
      "Switch between Bold Calligraphy and Light Delicate Script.",
      "Click 'Copy Result' and paste into your profile or message."
    ],
    useCases: [
      "Instagram bio aesthetic styling and aesthetic highlight titles",
      "Digital wedding invitations, thank-you cards, and greetings",
      "Poetry snippets, signatures, and inspirational quote cards"
    ],
    compatibilityNotes: "Widely supported across iOS, macOS, Windows, and modern Android.",
    faqs: [
      {
        question: "How do I copy and paste cursive text into Instagram?",
        answer: "Type your bio in our tool, click Copy, open Instagram, tap 'Edit Profile', paste the text into the Bio field, and tap Done."
      },
      {
        question: "Are these real fonts or special characters?",
        answer: "They are individual Unicode script glyphs that look like a cursive font, allowing them to work in places where custom font files cannot be installed."
      }
    ],
    relatedSlugs: ["italic-text-generator", "fancy-text-generator", "bold-text-generator"]
  },
  {
    id: "bold-text",
    slug: "bold-text-generator",
    name: "Bold Text Generator",
    h1: "Bold Text Generator (𝗯𝗼𝗹𝗱 & 𝐛𝐨𝐥𝐝)",
    metaTitle: "Bold Text Generator – Copy and Paste Bold Font Anywhere",
    metaDescription: "Make your text bold for Twitter, Facebook, Instagram, and LinkedIn without markdown. Choose Sans-Serif or Serif bold styles with instant copy.",
    category: "Typography Formatting",
    shortDescription: "Translates standard text into bold Unicode mathematical characters that stand out in any social feed.",
    exampleInput: "Bold headline",
    exampleOutput: "𝗕𝗼𝗹𝗱 𝗵𝗲𝗮𝗱𝗹𝗶𝗻𝗲",
    howItWorks: "Uses characters from the Mathematical Bold (U+1D400–U+1D433) and Mathematical Sans-Serif Bold (U+1D5D4–U+1D607) Unicode blocks.",
    instructions: [
      "Enter your sentence in the box.",
      "Select Sans-Serif Bold for modern punchiness or Serif Bold for classic authority.",
      "Copy with one click and paste into your status or message."
    ],
    useCases: [
      "Creating bold headings in LinkedIn posts and Twitter threads",
      "Emphasizing bullet points and calls to action on Instagram",
      "Distinguishing your clan name or display tag in multiplayer games"
    ],
    compatibilityNotes: "Fully compatible with all modern web browsers, operating systems, and mobile keyboards.",
    faqs: [
      {
        question: "Can I use bold text on LinkedIn posts?",
        answer: "Yes! LinkedIn does not provide native bold buttons in post captions, so our Unicode bold generator is the standard method used by creators."
      },
      {
        question: "Does bold Unicode text affect readability?",
        answer: "It creates strong visual contrast, but should be used sparingly for key phrases rather than entire long paragraphs to ensure high readability."
      }
    ],
    relatedSlugs: ["italic-text-generator", "strikethrough-text-generator", "small-text-generator"]
  },
  {
    id: "fancy-text",
    slug: "fancy-text-generator",
    name: "Fancy Text Generator",
    h1: "Fancy Text Generator (Aesthetic Fonts)",
    metaTitle: "Fancy Text Generator – 20+ Aesthetic Copy & Paste Fonts",
    metaDescription: "Generate cool fancy text fonts including Fraktur, Double-Struck, and Circled glyphs. Free copy and paste generator for bios and usernames.",
    category: "Social & Aesthetic",
    shortDescription: "A multi-style decorative engine combining Fraktur, Blackboard Bold, Circled, and Squared glyphs.",
    exampleInput: "Fancy aesthetic",
    exampleOutput: "𝔉𝔞𝔫𝔠𝔶 𝔞𝔢𝔰𝔱𝔥𝔢𝔱𝔦𝔠",
    howItWorks: "Swaps ordinary ASCII letters for aesthetic Unicode characters from multiple dedicated script and symbol blocks.",
    instructions: [
      "Type your message into the tool.",
      "Browse through the generated fancy styles.",
      "Click the Copy button on your favorite variation."
    ],
    useCases: [
      "TikTok, Twitter, and Instagram display names",
      "Discord server role titles and channel banners",
      "Gaming handles in Valorant, Apex Legends, and Fortnite"
    ],
    compatibilityNotes: "High cross-platform fidelity across all major operating systems.",
    faqs: [
      {
        question: "Why does fancy text sometimes look like boxes on older phones?",
        answer: "Older operating systems lacking the complete Unicode font tables may show a replacement character (tofu box). Modern devices (iOS 12+, Android 9+) render all these styles flawlessly."
      }
    ],
    relatedSlugs: ["cursive-text-generator", "bubble-text-generator", "fire-text-generator"]
  },
  {
    id: "small-text",
    slug: "small-text-generator",
    name: "Small Text Generator",
    h1: "Small Text Generator (ꜱᴍᴀʟʟ ᴄᴀᴘꜱ & ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ)",
    metaTitle: "Small Text Generator – Copy and Paste Tiny Fonts (ˢᵐᵃˡˡ & ꜱᴍᴀʟʟ)",
    metaDescription: "Generate tiny, small capital, and superscript text. Copy and paste miniature fonts for subtle bios, disclaimers, and aesthetic headers.",
    category: "Typography Formatting",
    shortDescription: "Creates petite lettering using Small Capitals and Unicode Superscript characters.",
    exampleInput: "Small text here",
    exampleOutput: "ꜱᴍᴀʟʟ ᴛᴇxᴛ ʜᴇʀᴇ",
    howItWorks: "Maps letters to phonetic Small Capitals (such as 'ᴀ', 'ʙ', 'ᴄ') and mathematical superscript numerals and modifiers.",
    instructions: [
      "Enter your text into the editor.",
      "Choose between Small Capitals or Tiny Superscript.",
      "Copy your miniature text and paste it wherever you want."
    ],
    useCases: [
      "Subtle social media subtitles and footnote disclosures",
      "Aesthetic Discord about-me cards and subtext",
      "Miniature gaming nicknames and secondary clan tags"
    ],
    compatibilityNotes: "Small caps and superscripts are universally supported in modern fonts.",
    faqs: [
      {
        question: "Are there small capital versions for all letters?",
        answer: "Yes, small caps covers the full Latin alphabet. Superscripts also cover the full alphabet, though a few rare letters utilize close phonetic approximations."
      }
    ],
    relatedSlugs: ["bold-text-generator", "bubble-text-generator", "strikethrough-text-generator"]
  },
  {
    id: "bubble-text",
    slug: "bubble-text-generator",
    name: "Bubble Text Generator",
    h1: "Bubble Text Generator (Circled Letters ⓑⓤⓑⓑⓛⓔ)",
    metaTitle: "Bubble Text Generator – Circled & Enclosed Font Copy & Paste",
    metaDescription: "Put your text in bubbles! Generate circled outline and black filled bubble letters. Perfect for playful usernames, list numbering, and headers.",
    category: "Social & Aesthetic",
    shortDescription: "Encloses letters and numbers in cute outline or solid black circles.",
    exampleInput: "Bubble letters",
    exampleOutput: "ⓑⓤⓑⓑⓛⓔ ⓛⓔⓣⓣⓔⓡⓢ",
    howItWorks: "Maps characters to the Unicode Enclosed Alphanumerics (U+2460–U+24FF) and Enclosed Ideographic Supplement blocks.",
    instructions: [
      "Input your words or numbers.",
      "Toggle between Outline Bubble and Solid Filled Bubble styling.",
      "Copy and paste into your bio, comment, or chat."
    ],
    useCases: [
      "Creating distinct numbered list steps (① ② ③)",
      "Playful social media bios and aesthetic messaging",
      "Unique Discord and Steam usernames"
    ],
    compatibilityNotes: "Native support across all mobile platforms and desktop operating systems.",
    faqs: [
      {
        question: "Can I circle numbers with bubble text?",
        answer: "Yes, digits 0 through 9 have dedicated circled Unicode representations in both outline and inverted solid formats."
      }
    ],
    relatedSlugs: ["fancy-text-generator", "weird-text-generator", "small-text-generator"]
  },
  {
    id: "strikethrough-text",
    slug: "strikethrough-text-generator",
    name: "Strikethrough Text Generator",
    h1: "Strikethrough Text Generator (s̶t̶r̶i̶k̶e̶ & s̷l̷a̷s̷h̷)",
    metaTitle: "Strikethrough Text Generator – Cross Out Text Copy & Paste",
    metaDescription: "Generate strikethrough, cross-out, and slash text for WhatsApp, Instagram, and Twitter without markdown syntax. Instant one-click copy.",
    category: "Typography Formatting",
    shortDescription: "Overlays combining horizontal strokes or diagonal slashes across each character.",
    exampleInput: "Old price $99",
    exampleOutput: "O̶l̶d̶ ̶p̶r̶i̶c̶e̶ ̶$̶9̶9̶",
    howItWorks: "Appends the Unicode combining long stroke overlay (U+0336) or short solidus (U+0337) to each character so that the stroke renders continuously across the words.",
    instructions: [
      "Write the text you want crossed out.",
      "Choose your style: Classic Strike, Slash Strike, Tilde Overlay, or Underline.",
      "Click Copy and paste into any chat or document."
    ],
    useCases: [
      "Promotional price discounts (e.g. crossing out old prices)",
      "Humorous corrections and editorial revisions in social posts",
      "Completed to-do item representation in plain-text note taking"
    ],
    compatibilityNotes: "High visual stability across all platforms.",
    faqs: [
      {
        question: "How do I cross out text on WhatsApp?",
        answer: "While WhatsApp supports ~tilde~ markdown in chat, our strikethrough generator works everywhere—including WhatsApp status, bios, and Instagram comments where markdown does not work."
      }
    ],
    relatedSlugs: ["bold-text-generator", "italic-text-generator", "upside-down-text-generator"]
  },
  {
    id: "zalgo-text",
    slug: "zalgo-text-generator",
    name: "Zalgo Text Generator",
    h1: "Zalgo Text Generator (Fine-Tuned Glitch Control)",
    metaTitle: "Zalgo Text Generator – Custom Glitch, Chaos & Corruption",
    metaDescription: "Fine-tune Zalgo glitch text with separate Up, Middle, and Down diacritic sliders. Free copy and paste tool for horror typography and ARG puzzles.",
    category: "Glitch & Horror",
    shortDescription: "The ultimate chaos text tool with independent upward, middle, and downward corruption controls.",
    exampleInput: "He Waits Behind The Wall",
    exampleOutput: "H̵e̷ ̴W̶a̷i̴t̷s̴ ̸B̷e̶h̴i̷n̵d̶ ̸T̷h̷e̷ ̷W̶a̴l̶l̸",
    howItWorks: "Allows targeted injection of Unicode combining accents into distinct typographic zones (ascenders, x-height, and descenders).",
    instructions: [
      "Enter your text into the workspace.",
      "Use the sliders to adjust top overflow, middle strikethroughs, and bottom drips.",
      "Preview the exact visual density in real time.",
      "Copy your glitched text to the clipboard."
    ],
    useCases: [
      "ARG (Alternate Reality Game) clues and atmospheric website lore",
      "Horror stories, creepypastas, and spooky memes",
      "Corrupted cyber aesthetic design mockups"
    ],
    compatibilityNotes: "Modern browsers render Zalgo seamlessly. Extreme settings may produce tall vertical spills that some social apps automatically clip.",
    faqs: [
      {
        question: "Where did the name Zalgo originate?",
        answer: "Zalgo is an internet horror meme originating in 2004 representing an entity that corrupts reality and digital text."
      }
    ],
    relatedSlugs: ["cursed-text-generator", "creepy-text-generator", "scary-text-generator"]
  },
  {
    id: "text-repeater",
    slug: "text-repeater",
    name: "Text Repeater",
    h1: "Text Repeater (Repeat Words & Emojis)",
    metaTitle: "Text Repeater – Multiply Text 10x, 100x, 1000x Instant Copy",
    metaDescription: "Repeat words, phrases, or emojis up to 5,000 times instantly. Customize separators (new line, space, comma), add index numbers, and copy with one click.",
    category: "Utilities",
    shortDescription: "Multiplies text up to 5,000 times with custom delimiters and automatic line numbering.",
    exampleInput: "I love you ❤️",
    exampleOutput: "I love you ❤️ I love you ❤️ I love you ❤️",
    howItWorks: "Constructs a repeated string array in browser memory and joins it with the selected delimiter for instant client-side copying.",
    instructions: [
      "Input your word, phrase, or emoji.",
      "Set your desired repeat count (e.g., 10, 100, 500).",
      "Pick a separator: New line, space, comma, or custom text.",
      "Optionally enable index numbers (1., 2., 3.).",
      "Hit 'Copy Result' to copy the entire repeated block."
    ],
    useCases: [
      "Creating fun spam messages for friends on WhatsApp or Messenger",
      "Generating placeholder text for testing database and UI constraints",
      "Expressing enthusiasm in celebratory posts and congratulations"
    ],
    compatibilityNotes: "All modern clipboards support copying large repeated text blocks smoothly.",
    faqs: [
      {
        question: "What is the maximum number of times I can repeat text?",
        answer: "You can repeat up to 5,000 times safely without freezing your mobile browser."
      }
    ],
    relatedSlugs: ["text-reverser", "text-case-converter", "invisible-character-generator"]
  },
  {
    id: "text-reverser",
    slug: "text-reverser",
    name: "Text Reverser",
    h1: "Text Reverser (Reverse Letters, Words & Lines)",
    metaTitle: "Text Reverser – Reverse Characters, Words & Lines Online",
    metaDescription: "Reverse text backwards instantly. Reverse character order, flip word order, reverse lines, or mirror text. Free copy and paste tool.",
    category: "Utilities",
    shortDescription: "Reverses character sequence, word ordering, or full lines with instant one-click copying.",
    exampleInput: "Never odd or even",
    exampleOutput: "neve ro ddo reveN",
    howItWorks: "Processes string arrays using Unicode codepoints to invert string order while preserving compound emojis and multi-byte characters.",
    instructions: [
      "Enter or paste your text.",
      "Select your reverse mode: Reverse Characters, Reverse Words, or Reverse Lines.",
      "Copy the reversed output with one click."
    ],
    useCases: [
      "Testing palindromes and wordplay puzzles",
      "Obfuscating spoilers in forum discussions",
      "Fun secret messages and reversed status updates"
    ],
    compatibilityNotes: "Astral plane and multi-codepoint emojis are preserved without corruption.",
    faqs: [
      {
        question: "Can I reverse word order without reversing the letters?",
        answer: "Yes, select the 'Reverse Words' option to flip the sequence of words while keeping each word's spelling intact."
      }
    ],
    relatedSlugs: ["upside-down-text-generator", "text-repeater", "text-case-converter"]
  },
  {
    id: "text-case-converter",
    slug: "text-case-converter",
    name: "Text Case Converter",
    h1: "Text Case Converter (UPPER, lower, Title, camelCase)",
    metaTitle: "Text Case Converter – Convert Uppercase, Lowercase & Title Case",
    metaDescription: "Convert text cases online: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, kebab-case, snake_case, and aLtErNaTiNg case.",
    category: "Utilities",
    shortDescription: "Instantly switches between 8 case conventions for writers, developers, and social creators.",
    exampleInput: "mastering modern web development",
    exampleOutput: "Mastering Modern Web Development",
    howItWorks: "Applies specialized regex and tokenization rules to normalize spaces and casing across standard and developer naming conventions.",
    instructions: [
      "Paste your text into the input field.",
      "Click any case button: UPPER, lower, Title Case, Sentence, camelCase, kebab-case, snake_case, or alternating.",
      "Copy the converted text immediately."
    ],
    useCases: [
      "Capitalizing headline titles for articles and blog posts",
      "Formatting variables for programming (camelCase, snake_case, kebab-case)",
      "Creating mocking sponge-bob meme text (aLtErNaTiNg cAsE)"
    ],
    compatibilityNotes: "Universal compatibility across all devices.",
    faqs: [
      {
        question: "Does Title Case follow standard style guides?",
        answer: "Yes, it capitalizes the first letter of each significant word while keeping sentence structure clean."
      }
    ],
    relatedSlugs: ["text-repeater", "text-reverser", "invisible-character-generator"]
  },
  {
    id: "invisible-character",
    slug: "invisible-character-generator",
    name: "Invisible Character Generator",
    h1: "Invisible Character Generator (Blank Space & Zero-Width)",
    metaTitle: "Invisible Character Generator – Copy Blank Space (U+200B & U+3164)",
    metaDescription: "Copy invisible characters and blank spaces to clipboard. Copy Zero-Width Space (U+200B), Hangul Filler (U+3164), and reveal hidden characters.",
    category: "Utilities",
    shortDescription: "Generates true invisible characters for blank social media names, clean line breaks, and filter testing.",
    exampleInput: "Blank Message",
    exampleOutput: "\u3164",
    howItWorks: "Provides access to standardized invisible Unicode characters such as Hangul Filler (U+3164), Zero-Width Space (U+200B), and Braille Pattern Blank (U+2800).",
    instructions: [
      "Select your invisible character type (Hangul Filler for Discord/Games, Zero-Width Space for text formatting).",
      "Click 'Copy Invisible Character'.",
      "Paste into your username, message, or bio to display an empty space."
    ],
    useCases: [
      "Invisible name on Discord, Among Us, Steam, or Roblox",
      "Sending blank messages on WhatsApp or Instagram",
      "Adding clean line breaks on Instagram captions without ugly dots"
    ],
    compatibilityNotes: "Hangul Filler (U+3164) is recognized as a valid character by most chat systems without displaying an error.",
    faqs: [
      {
        question: "Which invisible character works best for Discord names?",
        answer: "Hangul Filler (U+3164) works best for Discord and gaming nicknames because it occupies character length without displaying any pixel graphics."
      },
      {
        question: "How can I verify that I copied an invisible character?",
        answer: "Use our 'Reveal Invisible Characters' inspection tool to confirm the hidden character tokens in your clipboard."
      }
    ],
    relatedSlugs: ["text-case-converter", "text-repeater", "unicode-symbol-text-generator"]
  },
  {
    id: "unicode-symbol-text",
    slug: "unicode-symbol-text-generator",
    name: "Unicode Symbol Text Generator",
    h1: "Unicode Symbol Text Generator (Aesthetic Borders & Glyphs)",
    metaTitle: "Unicode Symbol Text Generator – Aesthetic Borders & Symbols",
    metaDescription: "Embellish your text with stars, angel wings, sparkles, and aesthetic borders. Copy and paste decorated typography for social bios and headers.",
    category: "Social & Aesthetic",
    shortDescription: "Frames your phrases in classic aesthetic symbols, angel wings, stars, and decorative banners.",
    exampleInput: "Aesthetic Dream",
    exampleOutput: "★·.·´¯`·.·★ Aesthetic Dream ★·.·´¯`·.·★",
    howItWorks: "Wraps text in curated combinations of decorative Unicode symbols, arrows, wings, and geometrical shapes.",
    instructions: [
      "Enter your phrase in the input area.",
      "Select a symbol border style (Stars, Wings, Sparkles, Hearts, Borders).",
      "Click Copy to grab the decorated text."
    ],
    useCases: [
      "Aesthetic bio dividers and headers for Discord servers",
      "Styling profile names on Instagram, Roblox, and Twitter",
      "Adding flair to announcements and digital notes"
    ],
    compatibilityNotes: "Universal rendering on modern devices.",
    faqs: [
      {
        question: "Can I combine these symbols with bold or cursive text?",
        answer: "Yes! First transform your text in our Bold or Cursive tool, copy the result, and paste it into this symbol generator for the ultimate aesthetic combination."
      }
    ],
    relatedSlugs: ["fancy-text-generator", "fire-text-generator", "cursive-text-generator"]
  }
];

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return toolsRegistry.find((t) => t.slug === slug);
}

export function getAllToolSlugs(): string[] {
  return toolsRegistry.map((t) => t.slug);
}
