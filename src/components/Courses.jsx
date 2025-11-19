
import React, { useRef, useState, useEffect } from "react";
import { featuredCourses } from "../data/udemyData";


function Star({ size = 12 }) {
  return <span style={{ color: "#FBBF24", fontSize: size, lineHeight: 1 }}>★</span>;
}

export default function Courses() {
  const items = Array.isArray(featuredCourses) ? featuredCourses : [];
  if (!items.length) return null;

  const visible = 4; 
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
    // allow slight overdrag for feel, but clamp
    const clamped = Math.max(minPct - 20, Math.min(20, newPct));
    setTrackPct(clamped);
  };

  const onUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const endX = getX(e);
    const dx = endX - startX.current;
    const w = containerRef.current?.offsetWidth || 1;
    const threshold = Math.min(120, w * 0.13);

    if (dx > threshold) setIndex((i) => Math.max(0, i - 1));
    else if (dx < -threshold) setIndex((i) => Math.min(maxIndex, i + 1));
    else setTrackPct(-(index * (100 / visible)));
  };

  const prev = (e) => { e?.stopPropagation(); setIndex(i => Math.max(0, i - 1)); };
  const next = (e) => { e?.stopPropagation(); setIndex(i => Math.min(maxIndex, i + 1)); };

  return (
    <section className="section container courses-section" style={{ paddingTop: 12, paddingBottom: 28 }}>
      <div className="courses-inner">
        {}
        <div className="courses-left">
          <h2 className="courses-hero">Learn essential career and life skills</h2>
          <p className="muted" style={{ marginTop: 12, maxWidth: 260 }}>
            Udemy helps you build in-demand skills fast and advance your career in a changing job market.
          </p>
        </div>

        {}
        <div className="courses-right">
          <div className="carousel-wrapper" style={{ position: "relative" }}>
            <button
              className="carousel-nav prev"
              onClick={prev}
              aria-label="Previous"
              style={{ pointerEvents: "auto" }}
            >
              ‹
            </button>

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
            >
              <div
                ref={trackRef}
                className="carousel-track"
                style={{
                  display: "flex",
                  gap: 16,
                  width: `${(items.length * 100) / visible}%`,
                  transform: `translateX(${-(index * (100 / visible))}%)`,
                }}
              >
                {items.map((item) => {
                  const rating = typeof item.rating === "number" ? item.rating : 4.6;
                  const students = item.students ?? "1,647";
                  const price = item.price ?? "£34.99";

                  return (
                    <div
                      key={item.id}
                      className="carousel-item"
                      style={{
                        width: `${100 / visible}%`,
                        flex: `0 0 ${100 / visible}%`,
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <article className="course-card mini" style={{ width: "100%", borderRadius: 14 }}>
                        <div className="course-thumb" style={{ height: 200, overflow: "hidden", borderRadius: 12 }}>
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                            draggable={false}
                            onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/480x320?text=No+Image"; }}
                          />
                        </div>

                        <div className="course-info mini-info">
                          <div className="course-learners">{item.subtitle ?? item.instructor}</div>
                          <div className="course-title" style={{ marginTop: 8 }}>{item.title}</div>

                          <div className="course-meta-mini" style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 8 }}>
                            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                              {item.badge && <span style={{ background: "#d1fae5", color: "#065f46", padding: "6px 8px", borderRadius: 8, fontWeight: 700, fontSize: 12 }}>{item.badge}</span>}
                              <span style={{ display: "inline-flex", gap: 6, alignItems: "center", color: "#6b7280", fontSize: 13 }}>
                                <Star />
                                <span>{rating}</span>
                              </span>
                            </div>

                            <div className="meta-right" style={{ marginLeft: "auto", fontWeight: 700 }}>{price}</div>
                          </div>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              className="carousel-nav next"
              onClick={next}
              aria-label="Next"
              style={{ pointerEvents: "auto" }}
            >
              ›
            </button>
          </div>

          <div className="carousel-dots" style={{ marginTop: 18 }}>
            {Array.from({ length: Math.max(1, maxIndex + 1) }).map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
