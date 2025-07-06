import React from "react";
import "./HomeHeaderSection.css";
import HomeHeaderSectionData from "./HomeHeaderSectionData";

export default function HomeHeaderSection() {
  return (
    <div className="home-header-bg">
      <section className="home-header-section">
        {HomeHeaderSectionData.map((item) => (
          <div className="home-header-section-box" key={item.id}>
            <div className="header-left-side">
                <h3 className="header-left-sub-title">{item.header}</h3>
                <h1 className="header-left-title">{item.title}</h1>
                <p className="header-left-paragraph">{item.description}</p>
            </div>
            <img className="header-img" src={item.image} alt="fastfood image"/>
            <div className="header-button"></div>
          </div>
        ))}
      </section>
    </div>
  );
}
