// src/components/Courses.jsx
import React, { useRef, useState, useEffect } from "react";
import { categories } from "../data/udemyData";

export default function Courses() {
  const items = Array.isArray(categories) ? categories : [];
  const visible = 3;
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, items.length - visible);

  useEffect(() => {
    if (!trackRef.current) return;
    const translatePct = -(index * (100 / visible));
    trackRef.current.style.transition = "transform 320ms cubic-bezier(.22,.9,.36,1)";
    trackRef.current.style.transform = `translateX(${translatePct}%)`;
    const t = setTimeout(() => { if (trackRef.current) trackRef.current.style.transition = ""; }, 350);
    return () => clearTimeout(t);
  }, [index, visible]);

  const goPrev = () => setIndex(i => Math.max(0, i - 1));
  const goNext = () => setIndex(i => Math.min(maxIndex, i + 1));

  const onPointerDown = e => {
    isDragging.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
    if (trackRef.current) trackRef.current.style.transition = "";
  };
  const onPointerMove = e => {
    if (!isDragging.current || !trackRef.current) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const dx = clientX - startX.current;
    const viewportWidth = containerRef.current?.offsetWidth || 1;
    const dxPct = (dx / viewportWidth) * 100;
    const basePct = -(index * (100 / visible));
    trackRef.current.style.transform = `translateX(calc(${basePct}% + ${dxPct}%))`;
  };
  const onPointerUp = e => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const dx = endX - startX.current;
    if (dx > 60) goPrev();
    else if (dx < -60) goNext();
    else {
      const translatePct = -(index * (100 / visible));
      trackRef.current.style.transform = `translateX(${translatePct}%)`;
    }
  };

  useEffect(() => {
    const handle = e => { if (e.key === "ArrowLeft") goPrev(); if (e.key === "ArrowRight") goNext(); };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);

  return (
    <section className="section container courses-section" style={{ paddingTop: 12, paddingBottom: 28 }}>
      <div className="courses-inner">
        <div className="courses-left">
          <h2 className="courses-hero">Learn essential career and life skills</h2>
          <p className="muted" style={{ marginTop: 12, maxWidth: 260 }}>
            Udemy helps you build in-demand skills fast and advance your career in a changing job market.
          </p>
        </div>

        <div className="courses-right">
          <div className="carousel-wrapper" ref={containerRef}>
            <button className="carousel-nav prev" onClick={goPrev} aria-label="Previous">‹</button>

            <div
              className="carousel-viewport"
              onMouseDown={onPointerDown}
              onMouseMove={onPointerMove}
              onMouseUp={onPointerUp}
              onMouseLeave={onPointerUp}
              onTouchStart={onPointerDown}
              onTouchMove={onPointerMove}
              onTouchEnd={onPointerUp}
            >
              <div className="carousel-track" ref={trackRef} style={{ width: `${(items.length * 100) / visible}%` }}>
                {items.map((item, idx) => {
                  const centerIndex = Math.min(index + 1, items.length - 1);
                  const isCenter = idx === centerIndex;
                  return (
                    <div key={item.id ?? idx} className={`carousel-item ${isCenter ? "active" : ""}`} style={{ width: `${100 / items.length}%` }}>
                      <article className="course-card mini">
                        <div className="course-thumb">
                          <img
                            src={item.image}
                            alt={item.title}
                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://via.placeholder.com/480x320?text=No+Image"; }}
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
                  );
                })}
              </div>
            </div>

            <button className="carousel-nav next" onClick={goNext} aria-label="Next">›</button>
          </div>

          <div className="carousel-dots" style={{ marginTop: 18 }}>
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} className={`dot ${i === index ? "active" : ""}`} onClick={() => setIndex(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
