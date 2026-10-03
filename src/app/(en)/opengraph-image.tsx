import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Emad Moustafa — Digital Growth × AI Automation × MarTech";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage();
}
