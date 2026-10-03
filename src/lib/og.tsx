/* eslint-disable @next/next/no-img-element */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

async function portraitDataUri(): Promise<string | null> {
  try {
    const file = await readFile(path.join(process.cwd(), "public", "portrait.jpg"));
    return "data:image/jpeg;base64," + file.toString("base64");
  } catch {
    return null;
  }
}

export async function renderOgImage() {
  const portrait = await portraitDataUri();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #0b0907 0%, #14110f 55%, #2a2113 100%)",
          color: "#f5f1ea",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, padding: "64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: "linear-gradient(135deg, #f3d392, #c48225)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#1a1511",
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              EM
            </div>
            <div style={{ fontSize: 22, letterSpacing: "0.16em", textTransform: "uppercase", color: "#a89f92" }}>
              {siteConfig.handle}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.05 }}>{siteConfig.name}</div>
            <div style={{ marginTop: 16, fontSize: 28, color: "#eebb58" }}>
              Digital Growth · AI Automation · MarTech
            </div>
            <div style={{ marginTop: 22, fontSize: 24, color: "#a89f92" }}>
              Digital Growth Consultant · AI Automation Specialist
            </div>
          </div>
          <div style={{ fontSize: 24, color: "#a89f92" }}>emadmstfa.com</div>
        </div>
        {portrait ? (
          <div style={{ display: "flex", width: 420, height: 630, overflow: "hidden" }}>
            <img src={portrait} alt="" width={420} height={630} style={{ objectFit: "cover", objectPosition: "top" }} />
          </div>
        ) : null}
      </div>
    ),
    { ...ogSize }
  );
}
