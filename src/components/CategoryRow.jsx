import React, { useRef, useState, useEffect } from "react";
import { categories } from "../data/udemyData";

function Stars({ rating }) {
  const max = 5;
  const full = Math.floor(rating);
  const half = rating - full >= 0.5 ? 1 : 0;
  const empty = max - full - half;
  return (
    <span style={{ display: "inline-flex", gap: 2 }}>
      {Array.from({ length: full }).map((_, i) => (
        <span key={"f" + i} style={{ color: "#FBBF24", fontSize: 12 }}>★</span>
      ))}
      {half === 1 && (
        <span style={{ position: "relative", display: "inline-block", width: 12 }}>
          <span style={{ color: "#FBBF24", position: "absolute", width: "50%", overflow: "hidden" }}>★</span>
          <span style={{ color: "#e5e7eb" }}>★</span>
        </span>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={"e" + i} style={{ color: "#e5e7eb", fontSize: 12 }}>★</span>
      ))}
    </span>
  );
}

export default function CategoryRow() {
  if (!Array.isArray(categories) || categories.length === 0) return null;

  const items = categories;
  const visible = 3;
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const startX = useRef(0);
  const startPct = useRef(0);
  const isDragging = useRef(false);
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, items.length - visible);

  const setTrackPct = (pct) => {
    if (!trackRef.current) return;
    trackRef.current.style.transition = "none";
    trackRef.current.style.transform = `translateX(${pct}%)`;
  };

  useEffect(() => {
    setTrackPct(-(index * (100 / visible)));
  }, [index, visible]);

  const getX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

  const onDown = (e) => {
    isDragging.current = true;
    startX.current = getX(e);
    const style = trackRef.current?.style.transform || "";
    const m = style.match(/translateX\((-?\d+(\.\d+)?)%/);
    startPct.current = m ? parseFloat(m[1]) : -(index * (100 / visible));
    if (trackRef.current) trackRef.current.style.transition = "none";
    e.preventDefault?.();
  };

  const onMove = (e) => {
    if (!isDragging.current || !trackRef.current) return;
    const x = getX(e);
    const dx = x - startX.current;
    const w = containerRef.current?.offsetWidth || 1;
    const dxPct = (dx / w) * 100;
    const newPct = startPct.current + dxPct;
    const minPct = -(maxIndex * (100 / visible));
    const clamped = Math.max(minPct - 20, Math.min(20, newPct));
    setTrackPct(clamped);
  };

  const onUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const endX = getX(e);
    const dx = endX - startX.current;
    const w = containerRef.current?.offsetWidth || 1;
    const threshold = Math.min(80, w * 0.1);

    if (dx > threshold) setIndex((i) => Math.max(0, i - 1));
    else if (dx < -threshold) setIndex((i) => Math.min(maxIndex, i + 1));
    else setTrackPct(-(index * (100 / visible)));
  };

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="section container category-row-section" style={{ paddingTop: 28, paddingBottom: 8 }}>
      <div className="section-head" style={{ marginBottom: 6 }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>Skills to transform your career and life</h2>
        <p className="muted" style={{ marginTop: 8 }}>
          From critical skills to technical topics, Udemy supports your professional development.
        </p>
      </div>

      <div className="category-tabs-wrapper" style={{ marginTop: 12 }}>
        <div className="category-tabs" role="list" style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 8 }}>
          {items.map((cat) => (
            <button key={cat.id} className="cat-tab" role="listitem" aria-label={cat.title} style={{ whiteSpace: "nowrap" }}>
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 18, position: "relative" }}>
        <div
          ref={containerRef}
          className="carousel-viewport"
          onMouseDown={onDown}
          onMouseMove={onMove}
          onMouseUp={onUp}
          onMouseLeave={onUp}
          onTouchStart={onDown}
          onTouchMove={onMove}
          onTouchEnd={onUp}
          style={{ overflow: "hidden", userSelect: "none", padding: 0, borderRadius: 12 }}
        >
          <div
            ref={trackRef}
            className="carousel-track"
            style={{
              display: "flex",
              gap: 16,
              width: `${(items.length * 100) / visible}%`,
              transform: `translateX(${-(index * (100 / visible))}%)`
            }}
          >
            {items.map((cat) => {
              const rating = typeof cat.rating === "number" ? cat.rating : 4.6;
              const students = cat.students ?? "11,725 ratings";
              const price = cat.price ?? "£34.99";

              return (
                <div
                  key={cat.id}
                  className="carousel-item"
                  style={{
                    width: `${100 / visible}%`,
                    flex: `0 0 ${100 / visible}%`,
                    display: "flex",
                    justifyContent: "center",
                    padding: 0,
                    boxSizing: "border-box"
                  }}
                >
                  <article
                    className="card category-card"
                    style={{
                      width: "100%",
                      maxWidth: 360,
                      borderRadius: 12,
                      overflow: "hidden",
                      padding: 0,
                      background: "#fff",
                      boxSizing: "border-box"
                    }}
                  >
                    <div
                      className="cat-icon"
                      style={{
                        width: "100%",
                        height: "200px",
                        overflow: "hidden",
                        display: "block"
                      }}
                    >
                      <img
                        src={cat.image}
                        alt={cat.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        draggable={false}
                        onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/480x320?text=No+Image"; }}
                      />
                    </div>

                    <div style={{ padding: 12 }}>
                      <div className="cat-title" style={{ fontWeight: 700 }}>{cat.title}</div>
                      <div className="cat-sub muted" style={{ marginTop: 6 }}>{cat.subtitle}</div>

                      <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 8 }}>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            background: "#fff",
                            padding: "6px 8px",
                            borderRadius: 999,
                            fontSize: 13,
                            color: "#6b7280",
                            boxShadow: "0 6px 16px rgba(2,6,23,0.04)"
                          }}
                        >
                          <Stars rating={rating} />
                          <span>{rating}</span>
                        </span>

                        <span
                          style={{
                            padding: "6px 8px",
                            background: "#fff",
                            fontSize: 12,
                            borderRadius: 8,
                            color: "#6b7280",
                            boxShadow: "0 6px 16px rgba(2,6,23,0.04)"
                          }}
                        >
                          {students}
                        </span>

                        <span style={{ fontWeight: 700, marginLeft: "auto" }}>{price}</span>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ position: "absolute", left: 8, top: "40%", zIndex: 50 }}>
          <button className="carousel-nav prev" onClick={prev} aria-label="Previous" style={{ pointerEvents: "auto" }}>‹</button>
        </div>
        <div style={{ position: "absolute", right: 8, top: "40%", zIndex: 50 }}>
          <button className="carousel-nav next" onClick={next} aria-label="Next" style={{ pointerEvents: "auto" }}>›</button>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 14 }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              style={{
                width: i === index ? 28 : 8,
                height: 8,
                margin: 6,
                borderRadius: 999,
                border: "none",
                background: i === index ? "#7b3cff" : "#e9e7f3",
                cursor: "pointer"
              }}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
