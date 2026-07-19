import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Origin Studio — criação de sites modernos e profissionais";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 999,
              background: "#4f55f1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            O
          </div>
          <div
            style={{
              color: "white",
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: -0.5,
            }}
          >
            Origin Studio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "white",
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 900,
            }}
          >
            Sites modernos e profissionais em até 72 horas
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.62)",
              fontSize: 28,
              lineHeight: 1.35,
              maxWidth: 820,
            }}
          >
            WhatsApp, Google Maps, formulário, SEO, hospedagem e domínio
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 24,
            color: "rgba(255,255,255,0.5)",
            fontSize: 20,
          }}
        >
          <span>Design sob medida</span>
          <span>·</span>
          <span>Entrega rápida</span>
          <span>·</span>
          <span>Solução completa</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
