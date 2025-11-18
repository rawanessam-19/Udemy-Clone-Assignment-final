// src/components/FeaturedCourses.jsx
import React from "react";
import { featuredCourses } from "../data/udemyData";

/**
 * Render stars for a given rating (0-5). Shows:
 * - full star for integer portions
 * - half star if fractional part >= 0.5
 * - empty stars for the rest, always total 5
 *
 * Uses a unique linearGradient id so multiple cards don't conflict.
 */
function Stars({ rating = 0, size = 12, idPrefix = "s" }) {
  const full = Math.floor(rating);
  const half = (rating - full) >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  const stars = [];

  for (let i = 0; i < full; i++) {
    stars.push(
      <svg key={`full-${i}`} width={size} height={size} viewBox="0 0 24 24" aria-hidden>
        <path d="M12 2l2.9 6.1L21 9.3l-5 4.2 1.2 6.9L12 17.8 6.8 20.4 8 13.5 3 9.3l6.1-.2L12 2z" fill="#FBBF24" />
      </svg>
    );
  }

  if (half === 1) {
    const gradId = `${idPrefix}-half`;
    stars.push(
      <svg key="half" width={size} height={size} viewBox="0 0 24 24" aria-hidden>
        <defs>
          <linearGradient id={gradId}>
            <stop offset="50%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#E5E7EB" />
          </linearGradient>
        </defs>
        <path d="M12 2l2.9 6.1L21 9.3l-5 4.2 1.2 6.9L12 17.8 6.8 20.4 8 13.5 3 9.3l6.1-.2L12 2z" fill={`url(#${gradId})`} />
      </svg>
    );
  }

  for (let i = 0; i < empty; i++) {
    stars.push(
      <svg key={`empty-${i}`} width={size} height={size} viewBox="0 0 24 24" aria-hidden>
        <path d="M12 2l2.9 6.1L21 9.3l-5 4.2 1.2 6.9L12 17.8 6.8 20.4 8 13.5 3 9.3l6.1-.2L12 2z" fill="#E5E7EB" />
      </svg>
    );
  }

  return <span style={{ display: "inline-flex", gap: 4, alignItems: "center" }}>{stars}</span>;
}

export default function FeaturedCourses() {
  const items = Array.isArray(featuredCourses) ? featuredCourses : [];

  return (
    <section className="featured-courses container" style={{ paddingTop: 6, paddingBottom: 18 }}>
      <p className="muted" style={{ marginTop: 0 }}>Courses trending right now</p>

      <div
        className="course-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 18,
          marginTop: 8
        }}
      >
        {items.slice(0, 8).map((c, idx) => {
          // make sure rating and students are numbers (defensive)
          const rating = (c && (typeof c.rating === "number" ? c.rating : Number(c.rating))) || null;
          const students = (c && (typeof c.students === "number" ? c.students : Number(c.students))) || null;
          const badge = c?.badge || c?.tag || null;

          // unique prefix for gradient ids
          const idPrefix = `star-${c?.id ?? idx}`;

          return (
            <article key={c.id ?? idx} className="course-card enhanced" style={{ padding: 12, borderRadius: 12 }}>
              <div className="thumb" aria-hidden>
                {c.image ? (
                  <div
                    style={{
                      width: "100%",
                      height: 140,
                      borderRadius: 8,
                      backgroundImage: `url(${c.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  />
                ) : (
                  <svg width="100%" height="140" viewBox="0 0 140 80" fill="none">
                    <rect width="140" height="80" rx="8" fill="#eef2ff" />
                  </svg>
                )}
              </div>

              <div style={{ marginTop: 10 }}>
                <div className="course-title" style={{ fontWeight: 700, fontSize: 14 }}>
                  {c.title}
                </div>

                <div className="course-instructor muted" style={{ marginTop: 8, fontSize: 13 }}>
                  {c.instructor}
                </div>

                {/* meta pills */}
                <div className="meta-pills" style={{ marginTop: 10, display: "flex", gap: 8, alignItems: "center", flexWrap: "nowrap" }}>
                  {badge ? <span className="pill small-badge">{badge}</span> : null}

                  {rating != null ? (
                    <span className="pill small-rating" aria-label={`Rated ${rating} out of 5`}>
                      <Stars rating={rating} size={12} idPrefix={idPrefix} />
                      <span style={{ marginLeft: 6, fontWeight: 700 }}>{rating.toFixed(1)}</span>
                    </span>
                  ) : null}

                  {students != null ? (
                    <span className="pill small-count">{students.toLocaleString()} ratings</span>
                  ) : null}
                </div>

                <div style={{ marginTop: 10 }}>
                  <div className="course-price" style={{ fontWeight: 800, fontSize: 16 }}>{c.price ?? ""}</div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div style={{ marginTop: 12 }}>
        <a href="#" className="muted" style={{ fontSize: 14 }}>Show all Artificial Intelligence (AI) courses →</a>
      </div>
    </section>
  );
}
