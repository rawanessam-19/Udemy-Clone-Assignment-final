import React from "react";
import { categories } from "../data/udemyData";

export default function CategoryRow() {
  return (
    <section className="section container">
      <div className="section-head">
        <h2>Learn essential career and life skills</h2>
        <p className="muted">Udemy helps you build in-demand skills fast</p>
      </div>

      <div className="categories-grid" style={{marginTop:14}}>
        {categories.map((c) => (
          <div className="card category-card" key={c.id}>
            <div style={{display:'flex',gap:12,alignItems:'center'}}>
              <div className="cat-icon">
                <img src={c.image} alt={c.title} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:8}}/>
              </div>
              <div>
                <div className="cat-title">{c.title}</div>
                <div className="cat-sub muted">{c.subtitle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
