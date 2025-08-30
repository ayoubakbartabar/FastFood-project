import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceSectionData from "./ServiceSectionData";
import "./ServiceSection.css";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function ServiceSection() {
  const sectionRef = useRef(null); // Reference to the section DOM
  const [visibleCards, setVisibleCards] = useState([]); // Track visible cards
  const navigate = useNavigate(); // Navigation hook

  useEffect(() => {
    // Intersection Observer for card reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reveal cards one by one with delay
            ServiceSectionData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) =>
                  prev.includes(index) ? prev : [...prev, index]
                );
              }, index * 200);
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Navigate to service detail page by ID
  const handleViewDetails = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div className="service-bg" ref={sectionRef}>
      <section className="service-section">
        <div className="service-grid">
          {ServiceSectionData.map((item, index) => (
            <div
              key={item.id}
              className={`service-card ${
                visibleCards.includes(index) ? "show" : ""
              }`}
            >
              <div className="service-icon">
                <img src={item.image} alt={item.title} />
              </div>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-paragraph">{item.paragraph}</p>
              <button
                className="service-button"
                onClick={() => handleViewDetails(item.id)} // pass id
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
