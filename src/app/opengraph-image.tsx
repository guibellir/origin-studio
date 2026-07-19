import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Origin Studio — Sites modernos que colocam seu negócio no mapa";
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
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          fontFamily: "system-ui, sans-serif",
          gap: 28,
        }}
      >
        {/* Mark */}
        <div
          style={{
            width: 120,
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 999,
              border: "14px solid transparent",
              borderTopColor: "#4f55f1",
              borderLeftColor: "#6b70ff",
              borderRightColor: "#e8eaf0",
              borderBottomColor: "#c8ccd8",
              transform: "rotate(-28deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 110,
              height: 4,
              background: "linear-gradient(90deg, #fff 0%, #6b70ff 100%)",
              transform: "rotate(-32deg)",
              borderRadius: 4,
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 600,
              letterSpacing: 10,
              color: "white",
            }}
          >
            <span style={{ color: "#4f55f1" }}>O</span>
            RIGIN
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 40, height: 1, background: "#4f55f1" }} />
            <div
              style={{
                color: "#6b70ff",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: 12,
              }}
            >
              STUDIO
            </div>
            <div style={{ width: 40, height: 1, background: "#4f55f1" }} />
          </div>
          <div
            style={{
              marginTop: 20,
              color: "rgba(255,255,255,0.5)",
              fontSize: 22,
              letterSpacing: 0.2,
            }}
          >
            Sites modernos · entrega em até 72h
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
