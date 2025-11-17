import React from "react";
import { featuredCourses } from "../data/udemyData";

export default function Courses() {
  return (
    <section className="section container">
      <div className="section-head">
        <h2>Skills to transform your career and life</h2>
        <p className="muted">From critical skills to technical topics — explore popular courses</p>
      </div>

      <div className="courses-row" style={{marginTop:16}}>
        {featuredCourses.map((c) => (
          <div className="course-card" key={c.id}>
            <div className="course-thumb" style={{backgroundImage:`url(${c.image})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
            <div className="course-info">
              <div className="course-title">{c.title}</div>
              <div className="course-instructor muted">{c.instructor}</div>
              <div className="course-meta" style={{marginTop:8}}>
                <span className="price">{c.price}</span>
              </div>
              {c.tag && <div className="badge" style={{marginTop:8}}>{c.tag}</div>}
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-dots" style={{marginTop:18}}>
        <div style={{width:10,height:10,borderRadius:999,background:'#a435f0'}}></div>
        <div style={{width:8,height:8,borderRadius:999,background:'#e6e6ea'}}></div>
        <div style={{width:8,height:8,borderRadius:999,background:'#e6e6ea'}}></div>
      </div>
    </section>
  );
}
