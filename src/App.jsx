// src/App.jsx
import React from "react";
import "./App.css";

// top-level sections (must exist in src/components)
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";         // carousel-only
import AiCareer from "./components/AiCareer";       // dark promo block
import CategoryRow from "./components/CategoryRow"; // "Skills to transform..." + categories
import FeaturedCourses from "./components/FeaturedCourses"; // 4-card grid
import Companies from "./components/Companies";     // trusted logos

export default function App() {
  return (
    <div className="app-root">
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />

        {/* 3-card carousel directly under hero */}
        <Courses />

        {/* large AI promo block */}
        <AiCareer />

        {/* Skills heading + categories row (tabs) */}
        <CategoryRow />

        {/* Students are viewing / 4-card grid */}
        <FeaturedCourses />

        {/* Trusted companies strip */}
        <Companies />
      </main>
    </div>
  );
}
