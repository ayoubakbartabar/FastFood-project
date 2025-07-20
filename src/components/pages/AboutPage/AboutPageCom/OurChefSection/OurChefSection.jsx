// File: OurChefSection.jsx
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import OurChefData from "./OurChefData";
import "./OurChefSection.css";

export default function OurChefSection() {
  const [startIndex, setStartIndex] = useState(0);
  const ITEMS_PER_PAGE = 3;
  const visibleChefs = OurChefData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const prevSlide = () => {
    if (startIndex >= ITEMS_PER_PAGE) {
      setStartIndex(startIndex - ITEMS_PER_PAGE);
    }
  };

  const nextSlide = () => {
    if (startIndex + ITEMS_PER_PAGE < OurChefData.length) {
      setStartIndex(startIndex + ITEMS_PER_PAGE);
    }
  };

  return (
    <div className="our-chef-bg">
      <section className="our-chef-section">
        <div className="our-chef-top">
          <h1 className="our-chef-title">Our expert chef</h1>
          <p className="our-chef-paragraph">
            Invite edit component vertical rectangle component follower asset
            share. Main select community connection opacity share device.
          </p>
        </div>
        <div className="carousel-container">
          <button className="arrow-btn left" onClick={prevSlide}>
            <IoIosArrowBack />
          </button>
          <div className="chef-cards">
            {visibleChefs.map((chef) => (
              <div key={chef.id} className="chef-card">
                <div className="chef-image-container">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="chef-image"
                  />
                </div>
                <div className="chef-info">
                  <h3>{chef.name}</h3>
                  <p>{chef.role}</p>
                  <div className="social-icons">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaPinterestP />
                    <FaTwitter />
                    <FaYoutube />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="arrow-btn right" onClick={nextSlide}>
            <IoIosArrowForward />
          </button>
        </div>
      </section>
    </div>
  );
}
