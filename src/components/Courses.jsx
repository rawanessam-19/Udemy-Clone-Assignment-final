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
    setTrack(-(index * (100 / visible)));
  }, [index]);

  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(maxIndex, i + 1));

  const getClientX = e => (e.touches ? e.touches[0].clientX : e.clientX);

  const onDown = (e) => {
    isDown.current = true;
    startX.current = getClientX(e);
    const style = trackRef.current?.style.transform || "";
    const m = style.match(/translateX\((-?\d+(\.\d+)?)%/);
    startPos.current = m ? parseFloat(m[1]) : -(index * (100 / visible));
    // ensure no transition
    if (trackRef.current) trackRef.current.style.transition = "none";
    e.preventDefault?.();
  };

  const onMove = (e) => {
    if (!isDown.current || !trackRef.current) return;
    const x = getClientX(e);
    const dx = x - startX.current;
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
    const x = getClientX(e);
    const dx = x - startX.current;
    const w = containerRef.current?.offsetWidth || 1;
    const threshold = Math.min(120, w * 0.15);

    if (dx > threshold) setIndex(i => Math.max(0, i - 1));
    else if (dx < -threshold) setIndex(i => Math.min(maxIndex, i + 1));
    else setTrack(-(index * (100 / visible)));
  };

  return (
    <section style={{ paddingTop: 12, paddingBottom: 28 }}>
      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ width: 260 }}>
          <h2>Learn essential career and life skills</h2>
          <p style={{ marginTop: 12 }}>
            Udemy helps you build in-demand skills fast and advance your career.
          </p>
        </div>

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
              {items.map((item) => (
                <div key={item.id} style={{ width: `${100 / visible}%`, flexShrink: 0 }}>
                  <div style={{ borderRadius: 16, overflow: "hidden", background: "#fff" }}>
                    <img src={item.image} alt={item.title} style={{ width: "100%", display: "block" }} draggable={false} />
                    <div style={{ padding: 10 }}>
                      <div style={{ color: "#666" }}>{item.subtitle}</div>
                      <div style={{ marginTop: 6, fontWeight: 600 }}>{item.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

{}          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            justifyContent: "center",
            marginTop: 18,
          }}>
            <button onClick={prev} className="swipe-arrow">‹</button>

            <div style={{ width: 200, position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="dot-marker" />
                <div className="dot-marker" />
                <div className="dot-marker" />
                <div className="dot-marker" />
              </div>

              <div
                className="swipe-pill"
                style={{
                  position: "absolute",
                  top: "50%",
                  width: 28,
                  height: 10,
                  borderRadius: 20,
                  background: "#7b3cff",
                  transform: "translate(-50%, -50%)",
                  left: `${maxIndex === 0 ? 0 : (index / maxIndex) * 100}%`,
                  transition: "none" // ensure no CSS animation
                }}
              ></div>
            </div>

            <button onClick={next} className="swipe-arrow">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
