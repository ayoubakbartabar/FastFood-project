// ShopProductSection.jsx
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // For page navigation
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // For rating stars
import "./ShopProductSection.css";
import BestSellingData from "../../../HomePage/HomePageCom/BestSellingSection/BestSellingData";

export default function ShopProductSection({ selectedCategory }) {
  const sectionRef = useRef(null); // Reference to the section for intersection observer
  const [visibleCards, setVisibleCards] = useState([]); // Keep track of which cards are visible
  const navigate = useNavigate(); // React Router navigation hook

  // Navigate to product detail page passing product data via state
  const goToProductPage = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  // Render stars based on rating (full, half, empty)
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star full" />);
    }

    // Add half star if applicable
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star half" />);
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="star empty" />);
    }

    return stars;
  };

  // Filter products by selected category
  const filteredProducts = BestSellingData.filter(
    (product) =>
      product.image &&
      product.title &&
      (selectedCategory === "all" ||
        product.category.trim().toLowerCase() === selectedCategory)
  );

  // Animate product cards when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate each card one by one with a delay
            filteredProducts.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150); // 150ms delay per card
            });
            observer.unobserve(entry.target); // Stop observing after first trigger
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect(); // Cleanup on unmount
  }, [filteredProducts]);

  return (
    <section ref={sectionRef} className="shop-product-section">
      <div className="shop-product-grid">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className={`shop-product-card ${
              visibleCards.includes(index) ? "show" : ""
            }`}
          >
            {/* Product image clickable */}
            <div
              className="shop-product-image"
              style={{ cursor: "pointer" }}
              onClick={() => goToProductPage(product)}
            >
              <img src={product.image} alt={product.title} />
            </div>

            {/* Product title clickable */}
            <h3
              className="shop-product-name"
              style={{ cursor: "pointer" }}
              onClick={() => goToProductPage(product)}
            >
              {product.title}
            </h3>

            {/* Product star rating */}
            <div className="shop-product-stars">
              {renderStars(product.star)}
            </div>

            {/* Product price */}
            <div className="shop-product-price">
              ${product.price.toFixed(2)} USD
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
