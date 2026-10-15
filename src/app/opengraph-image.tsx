import { ImageResponse } from "next/og";
export const alt =
  "FormatBro — Fresh Windows. Fresh Start. Onsite PC and laptop software services in Malaysia.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "90px",
        background: "#090c12",
        color: "#f4f6fc",
        fontFamily: "sans-serif",
        border: "2px solid #27406a",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 30,
          color: "#70a5ff",
          marginBottom: 36,
        }}
      >
        FormatBro / MALAYSIA
      </div>
      <div style={{ fontSize: 86, fontWeight: 700, letterSpacing: -4 }}>
        Fresh Windows.
      </div>
      <div
        style={{
          fontSize: 86,
          fontWeight: 700,
          letterSpacing: -4,
          color: "#488cff",
        }}
      >
        Fresh start.
      </div>
      <div style={{ fontSize: 24, color: "#919aa9", marginTop: 35 }}>
        Onsite PC & laptop software services. Made simple.
      </div>
    </div>,
    size,
  );
}
