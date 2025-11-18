// place near top of Courses.jsx (or in App.jsx where you want it shown)
import React from "react";
import { categories } from "../data/udemyData";

function CategoriesRowInline() {
  return (
    <section className="category-row-section container" style={{ padding: "14px 0 28px" }}>
      <div className="section-head" style={{ marginBottom: 12 }}>
        <h2 style={{ margin: 0 }}>Learn essential career and life skills</h2>
        <p className="muted" style={{ marginTop: 6 }}>Udemy helps you build in-demand skills fast and advance your career in a changing job market.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: 12 }}>
        {categories.map(cat => (
          <div key={cat.id} className="card category-card" style={{ display: "flex", gap: 12, alignItems: "center", padding: 16 }}>
            <div className="cat-icon" style={{ width: 120, height: 120, borderRadius: 12, overflow: "hidden", flex: "0 0 120px", background: "#f6f7fb" }}>
              <img src={cat.image} alt={cat.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            <div style={{ flex: 1 }}>
              <div className="cat-title" style={{ fontWeight: 800, fontSize: 16, marginBottom: 6 }}>{cat.title}</div>
              <div className="cat-sub muted" style={{ fontSize: 13 }}>{cat.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoriesRowInline;
