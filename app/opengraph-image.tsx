import { ImageResponse } from "next/og";
import { COMPANY_NAME, COMPANY_TAGLINE } from "@/lib/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#14161a",
          color: "#f2efe8",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            color: "#cfae7c",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Portes blindées &amp; haut de gamme
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            marginTop: 28,
            lineHeight: 1.05,
            display: "flex",
            maxWidth: 900,
          }}
        >
          {COMPANY_NAME}
        </div>
        <div style={{ fontSize: 30, marginTop: 20, color: "#8b909b", display: "flex" }}>
          {COMPANY_TAGLINE}
        </div>
      </div>
    ),
    { ...size }
  );
}
