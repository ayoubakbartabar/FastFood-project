import React, { useEffect, useRef, useState } from "react";
import "./PopularItemsSection.css";
import BestSellingData from "../BestSellingSection/BestSellingData.js";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function PopularItemsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Function to render star icons based on the rating value
  // Full star for each whole number, half star if decimal >= 0.5, empty star otherwise
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="popular-items-bg">
      <section
        className={`popular-items-section ${
          isVisible ? "animate-popular" : ""
        }`}
        ref={sectionRef}
      >
        <div className="popular-items-top">
          <h1 className="popular-items-title">Our Popular Items</h1>
          <p className="popular-items-paragraph">
            Inspect background group content align export move. Background
            prototype arrange team inspect clip. Vector comment link frame link
            group.
          </p>
        </div>

        {/* Grid container for popular item cards */}
        <div className="popular-items-grid">
          {BestSellingData.map((item) => (
            <div key={item.id} className="popular-item-card">
              <img
                src={item.image}
                alt={item.title}
                className="popular-item-image"
              />
              <h3 className="popular-item-title">{item.title}</h3>
              <div className="popular-item-stars">{renderStars(item.star)}</div>
              <p className="popular-item-price">${item.price.toFixed(2)} USD</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
