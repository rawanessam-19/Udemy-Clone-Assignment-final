// src/components/AiCareer.jsx
import React from "react";

export default function AiCareer() {
  return (
    <section
      className="ai-career container"
      style={{
        background: "#1E1E2F",
        borderRadius: 16,
        padding: "40px 36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 40,
        marginTop: 40,
        color: "white"
      }}
    >
      {/* LEFT SIDE */}
      <div style={{ flex: 1, maxWidth: 480 }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
          Reimagine your career in the AI era
        </h2>

        <p style={{ color: "#D1D5DB", fontSize: 15, lineHeight: 1.5 }}>
          Future-proof your skills with Personal Plan. Get access to a variety of fresh
          content from real-world experts.
        </p>

        {/* ICON LIST */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            marginTop: 20,
            gap: 14,
            color: "#F3F4F6"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span>🧠</span> Learn AI and more
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span>🎓</span> Prep for a certification
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span>🤖</span> Practice with AI coaching
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span>🚀</span> Advance your career
          </div>
        </div>

        <button
          style={{
            marginTop: 24,
            background: "white",
            color: "black",
            padding: "10px 18px",
            borderRadius: 6,
            border: "none",
            fontWeight: 600,
            cursor: "pointer"
          }}
        >
          Learn more
        </button>

        <p style={{ marginTop: 8, color: "#A1A1AA", fontSize: 13 }}>
          Starting at £20.40/month
        </p>
      </div>

      {/* RIGHT SIDE IMAGES */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16
        }}
      >
        <div
          style={{
            background: `url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 12,
            height: 220
          }}
        />

        <div
          style={{ 
            background: "#B197FC",
            borderRadius: 12,
            height: 220,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <span style={{ fontSize: 48 }}>✨</span>
        </div>

        <div
          style={{
            background: "#6E3BFF",
            borderRadius: 12,
            height: 220,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <span style={{ fontSize: 48 }}>🎮</span>
        </div>

        <div
          style={{
            background: "#C084FC",
            borderRadius: 12,
            height: 220,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <span style={{ fontSize: 48 }}>🎧</span>
        </div>
      </div>
    </section>
  );
}
