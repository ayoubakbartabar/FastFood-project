import React from "react";
import ServiceSectionData from "./ServiceSectionData";
import "./ServiceSection.css";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function ServiceSection() {
  return (
    <div className="service-bg">
      <section className="service-section">
        <div className="service-grid">
          {ServiceSectionData.map((item) => (
            <div className="service-card" key={item.id}>
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
