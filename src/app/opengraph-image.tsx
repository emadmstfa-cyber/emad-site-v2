import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function portraitDataUri(): Promise<string | null> {
  try {
    const file = await readFile(path.join(process.cwd(), "public", "portrait.jpg"));
    return "data:image/jpeg;base64," + file.toString("base64");
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const portrait = await portraitDataUri();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #070a14 0%, #0b1020 55%, #0e2a3a 100%)",
          color: "#f8fafc",
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
                background: "linear-gradient(135deg, #67e8f9, #0284c7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#04141c",
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              EM
            </div>
            <div style={{ fontSize: 22, letterSpacing: "0.16em", textTransform: "uppercase", color: "#94a3b8" }}>
              {siteConfig.handle}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.05 }}>{siteConfig.name}</div>
            <div style={{ marginTop: 16, fontSize: 30, color: "#67e8f9" }}>
              Digital Growth · AI Automation · MarTech
            </div>
            <div style={{ marginTop: 22, fontSize: 24, color: "#94a3b8" }}>{siteConfig.legalName}</div>
          </div>
          <div style={{ fontSize: 24, color: "#94a3b8" }}>emadmstfa.com</div>
        </div>
        {portrait ? (
          <div style={{ display: "flex", width: 420, height: 630, overflow: "hidden" }}>
            <img src={portrait} alt="" width={420} height={630} style={{ objectFit: "cover", objectPosition: "top" }} />
          </div>
        ) : null}
      </div>
    ),
    { ...size }
  );
}
