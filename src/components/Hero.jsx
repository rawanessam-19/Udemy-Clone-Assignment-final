import React from "react";
import { heroData } from "../data/udemyData";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1 className="hero-heading">Master tomorrow’s skills today</h1>
          <p className="hero-desc">
            Power up your AI, career, and life skills with the most up-to-date, expert-led learning.
          </p>

          <div className="hero-buttons">
            <button className="hero-btn primary">Get started</button>
            <button className="hero-btn outline">Learn AI</button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-right">
          <img
            src={heroData.heroImage}
            alt="Hero Banner"
            className="hero-banner-img"
          />
        </div>
      </div>
    </section>
  );
}
