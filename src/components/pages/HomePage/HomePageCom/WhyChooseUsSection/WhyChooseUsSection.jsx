import React from "react";
import "./WhyChooseUsSection.css";
import WhyChooseUsData from "./WhyChooseUsData.js";

export default function WhyChooseUsSection() {
  return (
    <div className="why-choose-us-bg">
      <section className="why-choose-us-section">
        <div className="why-choose-us-top">
          <h1 className="why-choose-us-title">Our Popular Items</h1>
          <p className="why-choose-us-paragraph">
            Inspect background group content align export move. Background
            prototype arrange team inspect clip. Vector comment link frame link
            group.
          </p>
        </div>

        <div className="why-choose-us-grid">
          {WhyChooseUsData.map((item) => (
            <div key={item.id} className="why-choose-us-box">
              <img
                className="why-choose-us-image"
                src={item.image}
                alt={item.title}
              />
              <h3 className="why-choose-us-box-title">{item.title}</h3>
              <p className="why-choose-us-box-paragraph">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
