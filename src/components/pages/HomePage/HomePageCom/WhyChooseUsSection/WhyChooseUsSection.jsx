import React, { useEffect, useRef, useState } from "react";
import "./WhyChooseUsSection.css";
import WhyChooseUsData from "./WhyChooseUsData.js";

export default function WhyChooseUsSection() {
  const boxRefs = useRef([]);
  const [visibleBoxes, setVisibleBoxes] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            boxRefs.current.forEach((_, i) => {
              setTimeout(() => {
                setVisibleBoxes((prev) => [...new Set([...prev, i])]);
              }, i * 150); 
            });
            observer.disconnect(); 
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (boxRefs.current[0]) {
      observer.observe(boxRefs.current[0]);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="why-choose-us-bg">
      <section className="why-choose-us-section">
        <div className="why-choose-us-top">
          <h1 className="why-choose-us-title">Why Choose Fastfood TNC?</h1>
          <p className="why-choose-us-paragraph">
            Unmatched Flavors, Quality, and Community Connection.
          </p>
        </div>

        <div className="why-choose-us-grid">
          {WhyChooseUsData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (boxRefs.current[index] = el)}
              className={`why-choose-us-box ${
                visibleBoxes.includes(index) ? "show" : ""
              }`}
            >
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
