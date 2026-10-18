export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  author: string;
  content: string;
  toolLinks: Array<{ label: string; slug: string }>;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-unicode-text-generators-work",
    title: "How Unicode Text Generators Work Behind the Scenes",
    description: "Discover how mathematical alphanumeric symbols and combining diacritics enable copy-and-paste typography across Instagram, Discord, and TikTok.",
    publishedAt: "2026-03-15",
    readingTime: "5 min read",
    author: "TypeCraft Engineering",
    toolLinks: [
      { label: "Cursed Text Generator", slug: "cursed-text-generator" },
      { label: "Bold Text Generator", slug: "bold-text-generator" },
      { label: "Fancy Text Generator", slug: "fancy-text-generator" }
    ],
    content: `
When you change fonts in Microsoft Word or Google Docs, the software changes the font family applied to standard ASCII characters (A-Z). However, when you copy that formatted text into Instagram, Twitter, or Discord, the styling vanishes because those platforms only accept raw plain text.

So how do "font generators" work on social platforms?

### 1. Unicode Alphanumeric Code Blocks

The Unicode Consortium maintains a universal character set of over 149,000 characters. To support scientific, mathematical, and historical linguistics without requiring custom fonts, Unicode reserved specific code points for distinct letter variations:

- **Mathematical Sans-Serif Bold**: Codepoints starting at U+1D5D4 (e.g., 𝗔, 𝗕, 𝗖)
- **Mathematical Script (Cursive)**: Codepoints starting at U+1D4D0 (e.g., 𝓪, 𝓫, 𝓬)
- **Fraktur Blackletter**: Codepoints starting at U+1D504 (e.g., 𝔞, 𝔟, 𝔠)
- **Enclosed Alphanumerics (Bubble)**: Codepoints starting at U+24D0 (e.g., ⓐ, ⓑ, ⓒ)

When you type into TypeCraft, our transformation engine maps each standard ASCII letter to its mathematical or script Unicode twin. Because these are distinct characters recognized globally by modern operating systems, they retain their appearance everywhere you paste them.

### 2. Combining Diacritical Marks (Cursed & Glitch Text)

Styles like Zalgo or Cursed text use an entirely different Unicode mechanism called **Combining Diacritical Marks** (Unicode range U+0300 to U+036F).

In written languages like French or Spanish, accents like the acute (´) or tilde (~) are combining characters that attach to letters. However, Unicode allows stacking multiple combining marks on a single base letter. When dozens of upper, middle, and lower combining accents are added, the rendering engine creates the famous cascading "glitch" or "void" effect.

### 3. Accessibility Considerations

While Unicode text looks eye-catching, screen readers used by visually impaired individuals may read mathematical symbols literally (e.g., "Mathematical Bold Capital A"). As a best practice, use decorative text for headlines, usernames, or key punchy phrases, rather than lengthy informational paragraphs.
    `
  },
  {
    slug: "how-to-copy-and-paste-cursive-text",
    title: "How to Copy and Paste Cursive Text into Instagram, TikTok, and WhatsApp",
    description: "Step-by-step tutorial on generating and pasting elegant cursive handwriting scripts into social media profiles, bios, and captions.",
    publishedAt: "2026-03-20",
    readingTime: "4 min read",
    author: "Social Growth Lab",
    toolLinks: [
      { label: "Cursive Text Generator", slug: "cursive-text-generator" },
      { label: "Italic Text Generator", slug: "italic-text-generator" },
      { label: "Fancy Text Generator", slug: "fancy-text-generator" }
    ],
    content: `
Cursive handwriting adds elegance, warmth, and visual distinction to your online profiles. Here is the easiest, foolproof way to copy and paste cursive text across all popular platforms.

### Step 1: Generate Your Cursive Script

1. Navigate to the [Cursive Text Generator](/cursive-text-generator).
2. Enter your name, bio phrase, or headline into the input box.
3. Choose between **Bold Calligraphy** (𝓒𝓾𝓻𝓼𝓲𝓿𝓮) or **Delicate Script** (𝒸𝓊𝓇𝓈𝒾𝓋ℯ).
4. Tap the **Copy Result** button to automatically copy the text to your device clipboard.

### Step 2: Pasting into Instagram Bio or Captions

1. Open the Instagram app on your iPhone or Android device.
2. Tap your profile picture in the bottom right corner, then tap **Edit Profile**.
3. Tap into the **Bio** or **Name** field.
4. Press and hold, then tap **Paste**.
5. Tap **Done** in the top right corner to save your changes.

### Step 3: Pasting into TikTok & Twitter/X

The exact same workflow applies to TikTok and Twitter/X. In TikTok, open your profile, tap **Edit profile**, and paste the cursive script into your **Bio** or **Nickname**.

### Pro Tip for Searchability

Instagram and TikTok search algorithms match standard ASCII letters best. If you want people to find your profile when searching for your real name or service (e.g., "Sarah Miller Photography"), consider writing your main name in standard text and using cursive script in your bio description.
    `
  },
  {
    slug: "why-fancy-text-displays-differently",
    title: "Why Fancy Text Displays Differently Across Devices (And How to Fix It)",
    description: "Learn why some smartphones show question marks or boxes (tofu) for stylized fonts, and how to choose the most universally compatible styles.",
    publishedAt: "2026-03-25",
    readingTime: "6 min read",
    author: "TypeCraft Engineering",
    toolLinks: [
      { label: "Bold Text Generator", slug: "bold-text-generator" },
      { label: "Bubble Text Generator", slug: "bubble-text-generator" },
      { label: "Small Text Generator", slug: "small-text-generator" }
    ],
    content: `
Have you ever copied a cool stylized font on your computer, only to look at it on an older phone and see hollow rectangles (often called "tofu" by typographers)?

Here is an explanation of why that happens and how to choose the most reliable styles.

### What Causes the "Tofu" Box?

When an operating system renders a character, it queries its installed system font files (such as San Francisco on iOS, Roboto on Android, or Segoe UI on Windows). If the system font lacks a glyph for that specific Unicode codepoint, it renders a fallback rectangle (□) or question mark.

### Compatibility Rankings by Text Style

1. **Tier 1: 99.9% Universal Compatibility**
   - **Small Capitals** (ꜱᴍᴀʟʟ ᴛᴇxᴛ)
   - **Strikethrough** (s̶t̶r̶i̶k̶e̶)
   - **Upside Down** (uʍop ǝpᴉsdn)
   - *These glyphs have been present in standard Unicode definitions for decades and work on almost any smartphone or computer manufactured after 2010.*

2. **Tier 2: 98%+ Compatibility (Modern Mobile)**
   - **Mathematical Bold & Italic** (𝗯𝗼𝗹𝗱 & 𝘪𝘵𝘢𝘭𝘪𝘤)
   - **Double-Struck / Blackboard** (𝕗𝕒𝕟𝕔𝕪)
   - **Circled Bubble Letters** (ⓑⓤⓑⓑⓛⓔ)
   - *Native on iOS 11+, Android 8+, Windows 10/11, and macOS.*

3. **Tier 3: Platform Filter Dependent**
   - **Extreme Zalgo / Cursed Text**
   - *While modern fonts support the characters, certain platforms like Twitch or Discord channel names automatically sanitize or trim excessively tall combining marks to preserve chat UI geometry.*

By choosing Tier 1 or Tier 2 styles from TypeCraft, you can be confident that over 98% of your audience will view your text exactly as intended.
    `
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
