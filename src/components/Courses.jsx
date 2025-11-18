// src/components/Courses.jsx
import React, { useRef, useState, useEffect } from "react";
import { featuredCourses } from "../data/udemyData";

export default function Courses() {
  const items = featuredCourses;
  const visible = 3;

  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, items.length - visible);

  // Animate translateX on slide change
  useEffect(() => {
    if (!trackRef.current) return;
    const translatePct = -(index * (100 / visible));
    trackRef.current.style.transition = "transform 320ms cubic-bezier(.22,.9,.36,1)";
    trackRef.current.style.transform = `translateX(${translatePct}%)`;

    const timer = setTimeout(() => {
      if (trackRef.current) trackRef.current.style.transition = "";
    }, 350);

    return () => clearTimeout(timer);
  }, [index, visible]);

  // Navigation
  const goPrev = () => setIndex(i => Math.max(0, i - 1));
  const goNext = () => setIndex(i => Math.min(maxIndex, i + 1));

  // Pointer / swipe handlers
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

  // keyboard
  useEffect(() => {
    const handle = e => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);

  return (
    <section className="section container courses-section" style={{ paddingTop: 12, paddingBottom: 28 }}>
      <div className="courses-inner">
        
        {/* LEFT COLUMN – RESTORED ORIGINAL TEXT */}
        <div className="courses-left">
          <h2 className="courses-hero">Skills to transform your career and life</h2>

          <p className="muted" style={{ marginTop: 12, maxWidth: 260 }}>
            From critical skills to technical topics — explore popular courses
          </p>
        </div>

        {/* RIGHT COLUMN – CAROUSEL */}
        <div className="courses-right">
          <div className="carousel-wrapper" ref={containerRef}>

            <button className="carousel-nav prev" onClick={goPrev}>‹</button>

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
              <div
                className="carousel-track"
                ref={trackRef}
                style={{ width: `${(items.length * 100) / visible}%` }}
              >
                {items.map((course, idx) => {
                  const centerIndex = Math.min(index + 1, items.length - 1);
                  const isCenter = idx === centerIndex;

                  return (
                    <div
                      key={course.id}
                      className={`carousel-item ${isCenter ? "active" : ""}`}
                      style={{ width: `${100 / items.length}%` }}
                    >
                      <article className="course-card mini">

                        <div
                          className="course-thumb"
                          style={{
                            backgroundImage: `url(${course.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                          }}
                        />

                        <div className="course-info mini-info">
                          <div className="course-learners">{course.subtitle}</div>

                          <div className="course-title">{course.title}</div>

                          <div className="course-meta-mini">
                            <span className="muted">{course.instructor}</span>
                            <span className="meta-right">→</span>
                          </div>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>

            <button className="carousel-nav next" onClick={goNext}>›</button>
          </div>

          {/* DOTS */}
          <div className="carousel-dots" style={{ marginTop: 18 }}>
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
