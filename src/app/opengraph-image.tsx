import { ImageResponse } from "next/og";

export const alt = "Ritesh Mishra — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#030712",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#34d399",
            display: "flex",
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Full Stack Developer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: "-0.05em",
            marginTop: 28,
          }}
        >
          Ritesh Mishra
        </div>
        <div
          style={{
            color: "#9ca3af",
            display: "flex",
            fontSize: 34,
            marginTop: 24,
          }}
        >
          Building modern, scalable web applications.
        </div>
      </div>
    ),
    size,
  );
}
