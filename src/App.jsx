import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";         
import AiCareer from "./components/AiCareer";      
import CategoryRow from "./components/CategoryRow"; 
import FeaturedCourses from "./components/FeaturedCourses"; 
import Companies from "./components/Companies";    

export default function App() {
  return (
    <div className="app-root">
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />

{}        <Courses />

        {}
        <AiCareer />

        {}
        <CategoryRow />

        {}
        <FeaturedCourses />

        {}
        <Companies />
      </main>
    </div>
  );
}
