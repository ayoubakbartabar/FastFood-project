import React, { useEffect, useState, useRef } from "react";
import "./ShopProductSection.css";
import ShopProductData from "../ShopProductData/ShopProductData";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function ShopProductSection({ selectedCategory }) {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]); // Track which cards are visible

  // Function to render star icons based on rating value
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star full" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star half" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="star empty" />);
    }

    return stars;
  };

  // Filter products based on selected category
  const filteredProducts = ShopProductData.filter(
    (product) =>
      product.image &&
      product.name &&
      (selectedCategory === "all" ||
        product.category.trim().toLowerCase() === selectedCategory)
  );

  useEffect(() => {
    // Intersection Observer to detect when section is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards one by one with delay
            filteredProducts.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150); // Delay between cards (150ms)
            });
            observer.unobserve(entry.target); // Run only once
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
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
            {/* Product image */}
            <div className="shop-product-image">
              <img src={product.image} alt={product.name} />
            </div>

            {/* Product name */}
            <h3 className="shop-product-name">{product.name}</h3>

            {/* Product rating stars */}
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
