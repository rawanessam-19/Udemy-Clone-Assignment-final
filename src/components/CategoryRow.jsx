// src/components/CategoryRow.jsx
import React from "react";
import { categories } from "../data/udemyData";

export default function CategoryRow() {
  if (!Array.isArray(categories) || categories.length === 0) return null;

  return (
    <section className="section container category-row-section" style={{ paddingTop: 28, paddingBottom: 8 }}>
      <div className="section-head" style={{ marginBottom: 6 }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>Skills to transform your career and life</h2>
        <p className="muted" style={{ marginTop: 8 }}>
          From critical skills to technical topics, Udemy supports your professional development.
        </p>
      </div>

      {/* Category tabs (visual only) */}
      <div className="category-tabs-wrapper" style={{ marginTop: 12 }}>
        <div className="category-tabs" role="list" style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 8 }}>
          {categories.map(cat => (
            <button key={cat.id} className="cat-tab" role="listitem" aria-label={cat.title} style={{ whiteSpace: "nowrap" }}>
              {cat.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
