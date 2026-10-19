import { ImageResponse } from "next/og";
import { getToolBySlug } from "@/lib/tools-registry";

export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

interface ToolImageProps {
  params: Promise<{
    toolSlug: string;
  }>;
}

export default async function Image({ params }: ToolImageProps) {
  const { toolSlug } = await params;
  const tool = getToolBySlug(toolSlug);

  const toolName = tool ? tool.name : "Unicode Text Generator";
  const toolCategory = tool ? tool.category : "Text Utility";
  const exampleInput = tool ? tool.exampleInput : "TypeCraft Generator";
  const exampleOutput = tool ? tool.exampleOutput : "𝓣𝔂𝓹𝓮𝓒𝓻𝓪𝓯𝓽 𝓖𝓮𝓷𝓮𝓻𝓪𝓽𝓸𝓻";
  const shortDescription = tool
    ? tool.shortDescription
    : "Transform text into aesthetic Unicode fonts instantly with one-click copy.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background: "linear-gradient(135deg, #090d16 0%, #1e1b4b 55%, #0f172a 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif"
        }}
      >
        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px"
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                backgroundColor: "#4f46e5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px"
              }}
            >
              ⚡
            </div>
            <div
              style={{
                fontSize: "28px",
                fontWeight: 800,
                letterSpacing: "-0.02em"
              }}
            >
              TypeCraft
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "rgba(99, 102, 241, 0.18)",
              border: "1px solid rgba(129, 140, 248, 0.35)",
              padding: "8px 18px",
              borderRadius: "999px",
              fontSize: "15px",
              color: "#c7d2fe",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            }}
          >
            <span>{toolCategory}</span>
            <span>·</span>
            <span>Free Online Tool</span>
          </div>
        </div>

        {/* Central Tool Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px"
          }}
        >
          <div
            style={{
              fontSize: "52px",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.15
            }}
          >
            {toolName}
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#cbd5e1",
              maxWidth: "960px",
              lineHeight: 1.45
            }}
          >
            {shortDescription}
          </div>
        </div>

        {/* Input vs Output Live Preview Box */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "20px",
            padding: "24px 28px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase" }}>
                Input:
              </span>
              <span style={{ fontSize: "18px", color: "#e2e8f0" }}>{exampleInput}</span>
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "#34d399",
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                padding: "4px 12px",
                borderRadius: "6px",
                fontWeight: 700
              }}
            >
              ✓ One-Click Copy
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              paddingTop: "6px",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)"
            }}
          >
            <span style={{ fontSize: "13px", fontWeight: 700, color: "#818cf8", textTransform: "uppercase" }}>
              Output:
            </span>
            <span
              style={{
                fontSize: "26px",
                fontWeight: 700,
                color: "#ffffff"
              }}
            >
              {exampleOutput}
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
