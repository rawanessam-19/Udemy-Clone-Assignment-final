import React from "react";
import { categories } from "../data/udemyData";

export default function CategoryGrid() {
  return (
    <section className="categories container">
      <div className="section-head">
        <h2>Top categories</h2>
        <p className="muted">Popular topics right now</p>
      </div>

      <div className="grid">
        {categories.map(c => (
          <div key={c.id} className="category-card">
            <div className="cat-icon" aria-hidden>
              {/* simple SVG icon placeholder */}
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="6" fill="#eef2ff" />
                <path d="M6 12h12" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="cat-body">
              <div className="cat-title">{c.title}</div>
              <div className="cat-sub muted">{c.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
