import { ImageResponse } from "next/og";

export const alt = "TypeCraft – Free Unicode Text Generator";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #090d16 0%, #1e1b4b 50%, #0f172a 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif"
        }}
      >
        {/* Top Header Bar */}
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
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                backgroundColor: "#4f46e5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                fontWeight: 900
              }}
            >
              ⚡
            </div>
            <div
              style={{
                fontSize: "34px",
                fontWeight: 800,
                letterSpacing: "-0.03em"
              }}
            >
              TypeCraft
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(99, 102, 241, 0.15)",
              border: "1px solid rgba(129, 140, 248, 0.3)",
              padding: "8px 18px",
              borderRadius: "999px",
              fontSize: "16px",
              color: "#a5b4fc",
              fontWeight: 600
            }}
          >
            <span>20+ Unicode Styles</span>
            <span>·</span>
            <span>Instant Copy</span>
          </div>
        </div>

        {/* Central Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              maxWidth: "1000px"
            }}
          >
            Free Aesthetic Text Generator
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#cbd5e1",
              maxWidth: "920px",
              lineHeight: 1.4
            }}
          >
            Transform plain words into Cursive, Bold, Cursed Zalgo, Upside-Down, and 20+ aesthetic font styles with instant one-click copy.
          </div>
        </div>

        {/* Preview Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "rgba(15, 23, 42, 0.7)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            padding: "20px 28px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "24px", fontSize: "22px" }}>
            <span style={{ color: "#818cf8", fontWeight: 700 }}>𝓒𝓾𝓻𝓼𝓲𝓿𝓮</span>
            <span style={{ color: "#38bdf8", fontWeight: 700 }}>𝐁𝐨𝐥𝐝 𝐒𝐞𝐫𝐢𝐟</span>
            <span style={{ color: "#f43f5e", fontWeight: 700 }}>Z̶a̶l̶g̶o̶</span>
            <span style={{ color: "#34d399", fontWeight: 700 }}>🅑🅤🅑🅑🅛🅔</span>
            <span style={{ color: "#fbbf24", fontWeight: 700 }}>𝔉𝔯𝔞𝔨𝔱𝔲𝔯</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "16px",
              color: "#94a3b8"
            }}
          >
            <span>text-generator-ruby-ten.vercel.app</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
