import React from "react";
import { FaInstagram } from "react-icons/fa";
import SocialData from "./SocialData";
import "./SocialSection.css";

export default function SocialSection() {
  return (
    <div className="social-bg">
      <section className="social-section">
        {SocialData.map(({ id, image, alt }) => (
          <figure key={id} className="social-image">
            <img src={image} alt={alt} loading="lazy" />
          </figure>
        ))}

        <a
          href="#"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </section>
    </div>
  );
}
