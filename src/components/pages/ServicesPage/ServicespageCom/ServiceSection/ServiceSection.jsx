import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceSectionData from "./ServiceSectionData";
import "./ServiceSection.css";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function ServiceSection() {
  const sectionRef = useRef(null); // Reference to the service section DOM element
  const [visibleCards, setVisibleCards] = useState([]); // State to track which cards are visible
  const navigate = useNavigate(); // React Router navigation hook

  useEffect(() => {
    // Create an IntersectionObserver to detect when the section is in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If the section is visible, reveal each card one by one with a delay
            ServiceSectionData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 200); // 200ms delay between cards
            });
            observer.unobserve(entry.target); // Stop observing after first trigger
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current); // Start observing the section

    return () => observer.disconnect(); // Clean up the observer on component unmount
  }, []);

  // Navigate to the ServiceCard page with the selected service data
  const handleViewDetails = (service) => {
    navigate("/service-card", { state: { service } });
  };

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
              <button
                className="service-button"
                onClick={() => handleViewDetails(item)}
              >
                View Details <FaLongArrowAltRight />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
