import React, { useEffect, useRef, useState } from "react";
import ServiceSectionData from "./ServiceSectionData";
import "./ServiceSection.css";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function ServiceSection() {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    // Create observer to detect when the section is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Show cards one by one with delay
            ServiceSectionData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 200); // 200ms delay between cards
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="service-bg" ref={sectionRef}>
      <section className="service-section">
        <div className="service-grid">
          {ServiceSectionData.map((item, index) => (
            <div
              className={`service-card ${
                visibleCards.includes(index) ? "show" : ""
              }`}
              key={item.id}
            >
              <div className="service-icon">
                <img src={item.image} alt={item.title} />
              </div>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-paragraph">{item.paragraph}</p>
              <button className="service-button">
                View Details <FaLongArrowAltRight />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
