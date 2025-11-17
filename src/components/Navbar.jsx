import React from "react";
import { navbarLinks } from "../data/udemyData";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner container">
        <div className="nav-left">
          <a className="brand" href="/">
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
              <rect width="24" height="24" rx="6" fill="#a435f0"></rect>
            </svg>
            <span style={{marginLeft:8}}>Udemy</span>
          </a>

          <nav className="nav-links">
            {navbarLinks.map((l) => (
              <button key={l.id} className="link-btn">
                {l.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="nav-center">
          <div className="search-small">
            <input placeholder="Search for anything" aria-label="search" />
          </div>
        </div>

        <div className="nav-right">
          <button className="btn ghost">Log in</button>
          <button className="btn primary">Sign up</button>
        </div>
      </div>
    </header>
  );
}
