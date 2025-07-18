// OurCommitmentsSection.js
import React from "react";
import "./OurCommitmentsSection.css";
import OurCommitmentsData from "./OurCommitmentsData.js";

export default function OurCommitmentsSection() {
  return (
    <div className="our-commitments-bg">
      <section className="our-commitments-section">
        <div className="our-commitments-top">
          <h1 className="our-commitments-title">Our Commitments</h1>
          <p className="our-commitments-paragraph">
            Invite edit component vertical rectangle component follower asset
            share. Main select community connection opacity share device.
          </p>
        </div>

        <div className="our-commitments-grid">
          {OurCommitmentsData.map((item) => (
            <div key={item.id} className="our-commitments-box">
              <img
                className="our-commitments-box-image"
                src={item.image}
                alt={item.title}
              />
              <h2 className="our-commitments-box-title">{item.title}</h2>
              <p className="our-commitments-box-paragraph">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
