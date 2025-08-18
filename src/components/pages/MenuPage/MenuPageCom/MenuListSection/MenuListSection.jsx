import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./MenuListSection.css";
import BestSellingData from "../../../HomePage/HomePageCom/BestSellingSection/BestSellingData";

export default function MenuListSection() {
  const sectionRef = useRef(null); // Reference for scroll animation
  const [visibleCards, setVisibleCards] = useState([]); // Track visible cards for animation
  const navigate = useNavigate();

  // Navigate to product detail page
  const goToProductPage = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  // Render stars (full, half, empty) based on rating value
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star full" />);
    }

    // Add half star if exists
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star half" />);
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="star empty" />);
    }

    return stars;
  };

  // Animate product cards when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate each card one by one with delay
            BestSellingData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
            observer.unobserve(entry.target); // Stop observing after trigger
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="menu-list-bg">
      <section ref={sectionRef} className="menu-list-section">
        <div className="menu-list-grid">
          {BestSellingData.map((item, index) => (
            <div
              key={item.id}
              className={`menu-card ${
                visibleCards.includes(index) ? "show" : ""
              }`}
            >
              {/* Product image - clickable */}
              <div
                className="menu-card-image"
                style={{ cursor: "pointer" }}
                onClick={() => goToProductPage(item)}
              >
                <img src={item.image} alt={item.title} />
              </div>

              {/* Product content */}
              <div className="menu-card-content">
                {/* Rating stars */}
                <div className="menu-stars">
                  {renderStars(item.star)} <span>({item.count})</span>
                </div>

                {/* Product title - clickable */}
                <h3
                  style={{ cursor: "pointer" }}
                  onClick={() => goToProductPage(item)}
                >
                  {item.title}
                </h3>

                {/* Short description */}
                <p>
                  Pizza ipsum dolor meat lovers buffalo. Sausage large wing bell
                  NY olives pan. Spinach pan string pan
                </p>

                {/* Footer: price & button */}
                <div className="menu-card-footer">
                  <span className="menu-item-price">
                    ${item.price.toFixed(2)} USD
                  </span>
                  <button
                    className="add-to-cart"
                    onClick={() => goToProductPage(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
