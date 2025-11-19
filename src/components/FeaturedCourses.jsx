import React, { useRef, useState, useEffect } from "react";
import { featuredCourses } from "../data/udemyData";

function Stars({ rating = 0, max = 5 }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = max - full - (half ? 1 : 0);

  return (
    <span className="stars" aria-label={`Rating ${rating} out of ${max}`}>
      {Array.from({ length: full }).map((_, i) => (
        <span key={`f${i}`} className="star full">★</span>
      ))}

      {half && (
        <span className="star half">
          <span className="star-gold" style={{ width: "50%" }}>★</span>
          <span className="star-gray">★</span>
        </span>
      )}

      {Array.from({ length: empty }).map((_, i) => (
        <span key={`e${i}`} className="star empty">★</span>
      ))}
    </span>
  );
}

export default function FeaturedCourses() {
  const items = Array.isArray(featuredCourses) ? featuredCourses : [];
  const visible = 4;
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const startPct = useRef(0);

  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, items.length - visible);

  const setTrackPct = (pct) => {
    if (!trackRef.current) return;
    trackRef.current.style.transition = "none";
    trackRef.current.style.transform = `translateX(${pct}%)`;
  };


useEffect(() => {
  if (!trackRef.current) return;
  setTrackPct(-(index * (100 / visible)), true);
}, [index]);


  useEffect(() => {
    setTrackPct(-(index * (100 / visible)));
  }, [index]);

  const cx = e => (e.touches ? e.touches[0].clientX : e.clientX);

  const onDown = (e) => {
    isDown.current = true;
    startX.current = cx(e);
    const style = trackRef.current?.style.transform || "";
    const m = style.match(/translateX\((-?\d+(\.\d+)?)%/);
    startPct.current = m ? parseFloat(m[1]) : -(index * (100 / visible));
    if (trackRef.current) trackRef.current.style.transition = "none";
    e.preventDefault?.();
  };

  const onMove = (e) => {
    if (!isDown.current) return;
    const x = cx(e);
    const dx = x - startX.current;
    const w = containerRef.current?.offsetWidth || 1;
    const dxPct = (dx / w) * 100;
    const newPct = startPct.current + dxPct;
    const minPct = -(maxIndex * (100 / visible));
    const clamped = Math.max(minPct - 20, Math.min(20, newPct));
    setTrackPct(clamped);
  };

  const onUp = (e) => {
    if (!isDown.current) return;
    isDown.current = false;
    const endX = cx(e);
    const dx = endX - startX.current;
    const w = containerRef.current?.offsetWidth || 1;
    const threshold = Math.min(120, w * 0.13);

    if (dx > threshold) setIndex(i => Math.max(0, i - 1));
    else if (dx < -threshold) setIndex(i => Math.min(maxIndex, i + 1));
    else setTrackPct(-(index * (100 / visible)));
  };

  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(maxIndex, i + 1));

  return (
    <section className="featured-section" style={{ padding: "8px 0 36px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
        <h3 style={{ margin: 0 }}>Courses trending right now</h3>
      </div>

      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ flex: 1, position: "relative" }}>
          <div
            ref={containerRef}
            style={{ overflow: "hidden", userSelect: "none" }}
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
              style={{
                display: "flex",
                gap: 20,
                width: `${(items.length * 100) / visible}%`,
                transform: `translateX(${-(index * (100 / visible))}%)`,
              }}
            >
              {items.map(item => (
                <div key={item.id} style={{ width: `${100 / visible}%`, flexShrink: 0 }}>
                  <article className="featured-card" style={{ borderRadius: 12, overflow: "hidden", background: "#fff" }}>
                    <div style={{ height: 150, overflow: "hidden" }}>
                      <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} draggable={false} />
                    </div>

                    <div style={{ padding: 12 }}>
                      <div style={{ fontWeight: 700, marginBottom: 6 }}>{item.title}</div>
                      <div style={{ color: "#6b7280", fontSize: 13 }}>{item.instructor}</div>

                      <div style={{ marginTop: 10, display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                          {item.badge && <span style={{ background: "#dff6ea", color: "#065f46", padding: "4px 8px", borderRadius: 8, fontSize: 12 }}>{item.badge}</span>}
                          {typeof item.rating === "number" && (
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <Stars rating={item.rating} />
                              <span style={{ color: "#6b7280", fontSize: 13 }}>{item.rating}</span>
                            </div>
                          )}
                        </div>

                        <div style={{ fontWeight: 700 }}>{item.price}</div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="featured-arrows" style={{ position: "absolute", left: 0, right: 0, top: 8, display: "flex", justifyContent: "space-between", pointerEvents: "none" }}>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="carousel-arrow left" aria-label="Previous" type="button" style={{ pointerEvents: "auto" }}>‹</button>

            <button onClick={(e) => { e.stopPropagation(); next(); }} className="carousel-arrow right" aria-label="Next" type="button" style={{ pointerEvents: "auto" }}>›</button>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
            {Array.from({ length: Math.max(1, maxIndex + 1) }).map((_, i) => (
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
      </div>
    </section>
  );
}
