import React from "react";
import { trustedCompanies } from "../data/udemyData";

export default function Companies() {
  return (
    <section className="trusted-strip">
      <div className="container trusted-inner">
        <div className="trusted-text">Trusted by over 17,000 companies and millions of learners around the world</div>
        <div className="companies-list">
          {trustedCompanies.map((c) => (
            <div className="company-pill" key={c.id}>
              {/* Clearbit logo service: logo.clearbit.com/<domain> */}
              <img src={`https://logo.clearbit.com/${c.domain}`} alt={c.name} style={{maxHeight:36,objectFit:'contain',filter:'grayscale(100%)',opacity:0.85}} onError={(e)=>{e.target.onerror=null; e.target.src='https://via.placeholder.com/120x36?text=' + encodeURIComponent(c.name)}}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
