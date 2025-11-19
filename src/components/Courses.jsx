import React, { useRef, useState, useEffect } from "react";
import { categories } from "../data/udemyData";

export default function Courses() {
  const items = Array.isArray(categories) ? categories : [];
  const visible = 4;
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const startPos = useRef(0);

  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, items.length - visible);

  const setTrack = (pct) => {
    if (!trackRef.current) return;
    trackRef.current.style.transition = "none";
    trackRef.current.style.transform = `translateX(${pct}%)`;
  };

  useEffect(() => {
    const pct = -(index * (100 / visible));
    setTrack(pct);
  }, [index, visible]);

  const prev = () => {
    setIndex((i) => Math.max(0, i - 1));
  };

  const next = () => {
    setIndex((i) => Math.min(maxIndex, i + 1));
  };

  const getX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

  const onDown = (e) => {
    isDown.current = true;
    startX.current = getX(e);

    const style = trackRef.current?.style.transform || "";
    const match = style.match(/translateX\((-?\d+(\.\d+)?)%/);
    startPos.current = match ? parseFloat(match[1]) : -(index * (100 / visible));

    if (trackRef.current) trackRef.current.style.transition = "none";
    e.preventDefault?.();
  };

  const onMove = (e) => {
    if (!isDown.current) return;
    const dx = getX(e) - startX.current;
    const w = containerRef.current?.offsetWidth || 1;
    const dxPct = (dx / w) * 100;

    const newPct = startPos.current + dxPct;
    const minPct = -(maxIndex * (100 / visible));

    const clamped = Math.max(minPct - 20, Math.min(20, newPct));
    setTrack(clamped);
  };

  const onUp = (e) => {
    if (!isDown.current) return;
    isDown.current = false;

    const dx = getX(e) - startX.current;
    const w = containerRef.current?.offsetWidth || 1;
    const threshold = Math.min(80, w * 0.1);

    if (dx > threshold) prev();
    else if (dx < -threshold) next();
    else setTrack(-(index * (100 / visible)));
  };

  return (
    <section className="courses-section container" style={{ paddingTop: 12, paddingBottom: 28 }}>
      <div className="courses-inner">
        <div className="courses-left">
          <h2 className="courses-hero">Learn essential career and life skills</h2>
          <p className="muted" style={{ marginTop: 12, maxWidth: 260 }}>
            Udemy helps you build in-demand skills fast and advance your career in a changing job market.
          </p>
        </div>

        <div className="courses-right">
          <div className="carousel-wrapper" ref={containerRef} style={{ position: "relative" }}>

            {}
            <button
              className="carousel-nav prev"
              onClick={prev}
              aria-label="Previous"
              style={{ pointerEvents: "auto" }}
            >
              ‹
            </button>

            <div
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
                className="carousel-track"
                ref={trackRef}
                style={{ width: `${(items.length * 100) / visible}%` }}
              >
                {items.map((item, idx) => (
                  <div
                    key={item.id ?? idx}
                    className="carousel-item"
                    style={{
                      width: `${100 / visible}%`,
                      flex: `0 0 ${100 / visible}%`
                    }}
                  >
                    <article className="course-card mini">
                      <div className="course-thumb">
                        <img
                          src={item.image}
                          alt={item.title}
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://via.placeholder.com/480x320?text=No+Image";
                          }}
                        />
                      </div>

                      <div className="course-info mini-info">
                        <div className="course-learners">{item.subtitle}</div>
                        <div className="course-title" style={{ marginTop: 8 }}>{item.title}</div>
                        <div className="course-meta-mini" style={{ marginTop: 10 }}>
                          <div className="muted" />
                          <div className="meta-right">→</div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {}
            <button
              className="carousel-nav next"
              onClick={next}
              aria-label="Next"
              style={{ pointerEvents: "auto" }}
            >
              ›
            </button>
          </div>

          {}
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
