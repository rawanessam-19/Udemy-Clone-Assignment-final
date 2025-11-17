// src/components/FeaturedCourses.jsx
import React from "react";
import { featuredCourses } from "../data/udemyData";

export default function FeaturedCourses() {
  return (
    <section className="featured-courses container">
      <div className="section-head">
        <h2>Students are viewing</h2>
        <p className="muted">Courses trending right now</p>
      </div>

      <div className="course-grid">
        {featuredCourses.map(c => (
          <article key={c.id} className="course-card">
            <div className="thumb" aria-hidden>
              {/* placeholder */}
              <svg width="140" height="80" viewBox="0 0 140 80" fill="none">
                <rect width="140" height="80" rx="8" fill="#eef2ff"/>
              </svg>
            </div>

            <div className="course-info">
              <div className="course-title">{c.title}</div>
              <div className="course-instructor muted">{c.instructor}</div>

              <div className="course-meta">
                <span className="rating">{c.rating} ★</span>
                <span className="students">• {c.students.toLocaleString()}</span>
                <span className="duration">• {c.duration}</span>
                <span className="price">${c.price}</span>
              </div>

              {c.badge && <div className="badge">{c.badge}</div>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
