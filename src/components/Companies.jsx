import React from "react";
import { trustedCompanies } from "../data/udemyData";

export default function Companies() {
  const items = Array.isArray(trustedCompanies) ? trustedCompanies : [];
  if (items.length === 0) return null;

  return (
    <section className="trusted-strip" style={{ marginTop: 28, paddingTop: 18, paddingBottom: 18 }}>
      <div className="container trusted-inner">
        <div className="trusted-text" style={{ color: "var(--muted)" }}>
          Trusted by over 17,000 companies and millions of learners around the world
        </div>

        <div className="companies-list" style={{ marginTop: 12, display: "flex", gap: 28, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
          {items.map((c) => (
            <div className="company-pill" key={c.id} title={c.name} style={{ width: 110, height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src={`https://logo.clearbit.com/${c.domain}`}
                alt={c.name}
                style={{ maxHeight: 36, objectFit: "contain", filter: "grayscale(100%)", opacity: 0.9 }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `https://via.placeholder.com/120x36?text=${encodeURIComponent(c.name)}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
