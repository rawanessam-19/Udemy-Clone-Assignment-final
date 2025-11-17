import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryRow from "./components/CategoryRow";
import Courses from "./components/Courses";
import Companies from "./components/Companies";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <CategoryRow />
        <Courses />
        <Companies />
      </main>
    </div>
  );
}
