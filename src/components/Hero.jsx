import React from "react";
import { heroData } from "../data/udemyData";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-wrapper container">

        <div className="hero-left">
          <div className="hero-card">
            <h1 className="hero-heading">Master tomorrow’s skills today</h1>

            <p className="hero-desc">
              Power up your AI, career, and life skills with the most up-to-date,
              expert-led learning.
            </p>

            <div className="hero-buttons">
              <button className="hero-btn primary">Get started</button>
              <button className="hero-btn outline">Learn AI</button>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img
            src={heroData.heroImage}
            alt="Hero Banner"
            className="hero-banner-img"
          />

          <div className="float-icon icon-1" aria-hidden>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="6" fill="#fff" opacity="0.98"/>
              <path d="M7 12h10M7 8h10M7 16h6" stroke="#6b21a8" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="float-icon icon-2" aria-hidden>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="6" fill="#fff" opacity="0.98"/>
              <path d="M12 7v10M8 11.5h8" stroke="#06b6d4" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="float-icon icon-3" aria-hidden>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="6" fill="#fff" opacity="0.98"/>
              <path d="M8 12.5c1-2 4-2 5 0 1 2 4 2 5 0" stroke="#f97316" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
