import React, { useState, useEffect } from "react";
import BestSellingData from "./BestSellingData";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "./BestSellingSection.css";

export default function BestSellingSection() {
  // State to track current carousel index
  const [index, setIndex] = useState(0);

  // State to determine if the screen is mobile size
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  // Total number of products
  const total = BestSellingData.length;

  // Number of cards visible at a time
  const visibleCards = isMobile ? total : 4;

  // Handle window resize to toggle mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      setIndex(0); // Reset carousel index on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigate to next set of cards (non-mobile only)
  const next = () => {
    if (isMobile) return;
    setIndex((prev) =>
      prev + visibleCards >= total ? 0 : prev + visibleCards
    );
  };

  // Navigate to previous set of cards (non-mobile only)
  const prev = () => {
    if (isMobile) return;
    setIndex((prev) =>
      prev - visibleCards < 0 ? total - visibleCards : prev - visibleCards
    );
  };

  // Get currently visible products based on carousel index
  const getVisibleData = () => {
    if (isMobile) {
      // On mobile: show all cards in grid layout
      return BestSellingData;
    }
    // Looping logic for non-mobile carousel
    if (index + visibleCards > total) {
      return [
        ...BestSellingData.slice(index),
        ...BestSellingData.slice(0, visibleCards - (total - index)),
      ];
    }
    return BestSellingData.slice(index, index + visibleCards);
  };

  // Render star ratings using FontAwesome icons
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="star full" />);
      } else if (i === Math.ceil(rating) && rating % 1 >= 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="star half" />);
      } else {
        stars.push(<FaRegStar key={i} className="star empty" />);
      }
    }
    return stars;
  };

  return (
    <div className="best-selling-bg">
      <section className="best-selling-section">
        {/* Section Title */}
        <div className="best-selling-top">
          <h1 className="best-selling-title">Best Selling Items</h1>
          <p className="best-selling-paragraph">
            Inspect background group content align export move. Background
            prototype arrange team inspect clip.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="carousel-wrapper">
          {/* Left navigation button for desktop view */}
          {!isMobile && (
            <button className="carousel-button left" onClick={prev}>
              <IoChevronBack />
            </button>
          )}

          {/* Product Cards */}
          <div
            className={`carousel-track ${
              isMobile ? "grid-view" : "carousel-view"
            }`}
          >
            {getVisibleData().map((item) => (
              <div key={item.id} className="product-card animate-entry">
                <div className="product-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <h3 className="product-title">{item.title}</h3>
                <div className="product-stars">{renderStars(item.star)}</div>
                <p className="product-price">${item.price.toFixed(2)} USD</p>
              </div>
            ))}
          </div>

          {/* Right navigation button for desktop view */}
          {!isMobile && (
            <button className="carousel-button right" onClick={next}>
              <IoChevronForward />
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
