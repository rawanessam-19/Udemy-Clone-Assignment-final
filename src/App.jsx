// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
// import FeaturedCourses from "./components/FeaturedCourses"; // KEEP commented out to avoid duplicate
// import Categories from "./components/Categories"; // comment out if this was showing the top row duplicate

import "./App.css";

function App() {
  return (
    <div className="app-root">
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />

        {/* Only render the updated Courses component */}
        <Courses />

        {/* If you want FeaturedCourses later, uncomment below but remove any other
            component that shows the old .courses-row, otherwise you'll see duplicates.
           <FeaturedCourses /> 
        */}
      </main>
    </div>
  );
}

export default App;
