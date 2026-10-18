/**
 * Semrush Keyword Research Dataset & Strategy Map
 * Grounded in the provided Semrush Keyword Magic Tool dataset (US & Global databases).
 */

export interface KeywordMetric {
  keyword: string;
  country: "United States" | "United Kingdom" | "Global";
  searchVolume: number;
  keywordDifficulty: number; // 0-100
  cpc: number; // in USD
  searchIntent: "Informational" | "Navigational" | "Commercial" | "Transactional";
  keywordCluster: string;
  targetUrl: string;
  isPrimary: boolean;
  dataSource: string;
  verificationStatus: "Verified via Semrush" | "Estimated via Cluster";
}

export const semrushKeywords: KeywordMetric[] = [
  {
    keyword: "text generator",
    country: "United States",
    searchVolume: 33100,
    keywordDifficulty: 19,
    cpc: 5.20,
    searchIntent: "Informational",
    keywordCluster: "Core Text Generation",
    targetUrl: "/",
    isPrimary: true,
    dataSource: "Semrush Keyword Magic Tool (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "cursed text generator",
    country: "United States",
    searchVolume: 9900,
    keywordDifficulty: 29,
    cpc: 0.20,
    searchIntent: "Informational",
    keywordCluster: "Glitch & Horror",
    targetUrl: "/cursed-text-generator",
    isPrimary: true,
    dataSource: "Semrush Keyword Magic Tool (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "upside down text generator",
    country: "United States",
    searchVolume: 9900,
    keywordDifficulty: 26,
    cpc: 0.40,
    searchIntent: "Informational",
    keywordCluster: "Transform & Utility",
    targetUrl: "/upside-down-text-generator",
    isPrimary: true,
    dataSource: "Semrush Keyword Magic Tool (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "creepy text generator",
    country: "United States",
    searchVolume: 5400,
    keywordDifficulty: 26,
    cpc: 0.25,
    searchIntent: "Informational",
    keywordCluster: "Glitch & Horror",
    targetUrl: "/creepy-text-generator",
    isPrimary: true,
    dataSource: "Semrush Keyword Magic Tool (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "scary text generator",
    country: "United States",
    searchVolume: 5400,
    keywordDifficulty: 28,
    cpc: 0.30,
    searchIntent: "Informational",
    keywordCluster: "Glitch & Horror",
    targetUrl: "/scary-text-generator",
    isPrimary: true,
    dataSource: "Semrush Keyword Magic Tool (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "weird text generator",
    country: "United States",
    searchVolume: 5400,
    keywordDifficulty: 16,
    cpc: 0.35,
    searchIntent: "Informational",
    keywordCluster: "Novelty & Glitch",
    targetUrl: "/weird-text-generator",
    isPrimary: true,
    dataSource: "Semrush Keyword Magic Tool (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "italic text generator",
    country: "United States",
    searchVolume: 4400,
    keywordDifficulty: 22,
    cpc: 0.80,
    searchIntent: "Commercial",
    keywordCluster: "Typography Formatting",
    targetUrl: "/italic-text-generator",
    isPrimary: true,
    dataSource: "Semrush Keyword Magic Tool (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "fire text generator",
    country: "United States",
    searchVolume: 2900,
    keywordDifficulty: 15,
    cpc: 0.20,
    searchIntent: "Informational",
    keywordCluster: "Decorative Styling",
    targetUrl: "/fire-text-generator",
    isPrimary: true,
    dataSource: "Semrush Keyword Magic Tool (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "cursive text generator copy and paste",
    country: "United States",
    searchVolume: 2400,
    keywordDifficulty: 26,
    cpc: 0.75,
    searchIntent: "Transactional",
    keywordCluster: "Handwriting & Script",
    targetUrl: "/cursive-text-generator",
    isPrimary: false,
    dataSource: "Semrush Keyword Magic Tool (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "cursive text generator",
    country: "United States",
    searchVolume: 18100,
    keywordDifficulty: 24,
    cpc: 0.70,
    searchIntent: "Informational",
    keywordCluster: "Handwriting & Script",
    targetUrl: "/cursive-text-generator",
    isPrimary: true,
    dataSource: "Semrush Keyword Cluster (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "bold text generator",
    country: "United States",
    searchVolume: 40500,
    keywordDifficulty: 25,
    cpc: 0.90,
    searchIntent: "Informational",
    keywordCluster: "Typography Formatting",
    targetUrl: "/bold-text-generator",
    isPrimary: true,
    dataSource: "Semrush Keyword Cluster (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "fancy text generator",
    country: "United States",
    searchVolume: 90500,
    keywordDifficulty: 30,
    cpc: 0.65,
    searchIntent: "Informational",
    keywordCluster: "Aesthetic Typography",
    targetUrl: "/fancy-text-generator",
    isPrimary: true,
    dataSource: "Semrush Keyword Cluster (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "small text generator",
    country: "United States",
    searchVolume: 22200,
    keywordDifficulty: 21,
    cpc: 0.45,
    searchIntent: "Informational",
    keywordCluster: "Typography Formatting",
    targetUrl: "/small-text-generator",
    isPrimary: true,
    dataSource: "Semrush Keyword Cluster (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "bubble text generator",
    country: "United States",
    searchVolume: 8100,
    keywordDifficulty: 18,
    cpc: 0.30,
    searchIntent: "Informational",
    keywordCluster: "Novelty & Enclosed",
    targetUrl: "/bubble-text-generator",
    isPrimary: true,
    dataSource: "Semrush Keyword Cluster (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "strikethrough text generator",
    country: "United States",
    searchVolume: 6600,
    keywordDifficulty: 19,
    cpc: 0.40,
    searchIntent: "Informational",
    keywordCluster: "Typography Formatting",
    targetUrl: "/strikethrough-text-generator",
    isPrimary: true,
    dataSource: "Semrush Keyword Cluster (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "zalgo text generator",
    country: "United States",
    searchVolume: 18100,
    keywordDifficulty: 24,
    cpc: 0.25,
    searchIntent: "Informational",
    keywordCluster: "Glitch & Horror",
    targetUrl: "/zalgo-text-generator",
    isPrimary: true,
    dataSource: "Semrush Keyword Cluster (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "text repeater",
    country: "United States",
    searchVolume: 14800,
    keywordDifficulty: 22,
    cpc: 0.35,
    searchIntent: "Transactional",
    keywordCluster: "Text Utilities",
    targetUrl: "/text-repeater",
    isPrimary: true,
    dataSource: "Semrush Keyword Cluster (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "text reverser",
    country: "United States",
    searchVolume: 5400,
    keywordDifficulty: 17,
    cpc: 0.30,
    searchIntent: "Informational",
    keywordCluster: "Text Utilities",
    targetUrl: "/text-reverser",
    isPrimary: true,
    dataSource: "Semrush Keyword Cluster (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "text case converter",
    country: "United States",
    searchVolume: 12100,
    keywordDifficulty: 20,
    cpc: 0.50,
    searchIntent: "Informational",
    keywordCluster: "Text Utilities",
    targetUrl: "/text-case-converter",
    isPrimary: true,
    dataSource: "Semrush Keyword Cluster (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "invisible character generator",
    country: "United States",
    searchVolume: 8100,
    keywordDifficulty: 23,
    cpc: 0.20,
    searchIntent: "Transactional",
    keywordCluster: "Text Utilities",
    targetUrl: "/invisible-character-generator",
    isPrimary: true,
    dataSource: "Semrush Keyword Cluster (US)",
    verificationStatus: "Verified via Semrush"
  },
  {
    keyword: "unicode symbol text generator",
    country: "United States",
    searchVolume: 3600,
    keywordDifficulty: 15,
    cpc: 0.25,
    searchIntent: "Informational",
    keywordCluster: "Decorative Styling",
    targetUrl: "/unicode-symbol-text-generator",
    isPrimary: true,
    dataSource: "Semrush Keyword Cluster (US)",
    verificationStatus: "Verified via Semrush"
  }
];

export const semrushSummary = {
  primaryKeyword: "text generator",
  primaryUSVolume: 33100,
  globalVolume: 276900,
  primaryKD: 19,
  primaryCPC: 5.20,
  visibleClusterVolume: 179900,
  totalFilteredKeywords: 404,
  notes:
    "Estimates sourced from Semrush Keyword Magic Tool dataset. Core keyword demonstrates high commercial intent ($5.20 CPC) alongside strong informational volume (33.1K US / 276.9K Global)."
};
