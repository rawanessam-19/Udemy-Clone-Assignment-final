import React from "react";
import { navbarLinks } from "../data/udemyData";

/*
  Layout behavior:
  - Left: brand + a single "Explore" link (if present in navbarLinks; otherwise use navbarLinks[0])
  - Center: big rounded search pill with icon
  - Right: the rest of navbarLinks (except Explore) + cart/login/signup/lang
*/

export default function Navbar() {
  // pick Explore (or fallback to first link)
  const exploreItem = navbarLinks.find((l) =>
    String(l.label).toLowerCase() === "explore"
  ) || navbarLinks[0];

  const rightItems = navbarLinks.filter((l) => l !== exploreItem);

  return (
    <>
      {/* Announcement bar */}
      <div className="announce">
        <div className="announce-inner container">
          <span className="announce-title">AI is changing the game</span>
          <span className="announce-detail">Get the skills with Udemy Business.</span>
        </div>
        <button className="announce-close" aria-label="Close announcement">×</button>
      </div>

      {/* Main navbar */}
      <header className="navbar">
        <div className="nav-inner container">
          {/* LEFT: logo + Explore */}
          <div className="nav-left">
            <a className="brand" href="/">
              <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
                <rect width="24" height="24" rx="6" fill="#a435f0"></rect>
              </svg>
              <span className="brand-text">udemy</span>
            </a>

            {exploreItem && (
              <a className="explore-link" href={exploreItem.href || "/"}>
                {exploreItem.label}
              </a>
            )}
          </div>

          {/* CENTER: search */}
          <div className="nav-center">
            <div className="search-small" role="search" aria-label="site search">
              <span className="search-icon" aria-hidden>🔍</span>
              <input placeholder="Search for anything" aria-label="search" />
            </div>
          </div>

          {/* RIGHT: remaining links + icons/buttons */}
          <div className="nav-right">
            {rightItems.map((l) => (
              <a key={l.id} className="nav-link" href={l.href || "/"}>
                {l.label}
              </a>
            ))}

            <button className="icon-btn" aria-label="Cart">🛒</button>
            <button className="btn ghost login-btn" type="button">Log in</button>
            <button className="btn primary signup-btn" type="button">Sign up</button>
            <button className="lang-btn" aria-label="Language" type="button">🌐</button>
          </div>
        </div>
      </header>
    </>
  );
}
