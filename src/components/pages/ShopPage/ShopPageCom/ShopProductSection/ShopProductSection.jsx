import React from "react";
import "./ShopProductSection.css";
import ShopProductData from "../ShopProductData/ShopProductData";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function ShopProductSection({ selectedCategory }) {
  
  // Function to render star icons based on rating value
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalfStar = rating % 1 >= 0.5; // If rating includes a half star
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars
    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star full" />);
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star half" />);
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="star empty" />);
    }

    return stars;
  };

  // Filter products based on selected category and ensure they have image and name
  const filteredProducts = ShopProductData.filter(
    (product) =>
      product.image &&
      product.name &&
      (selectedCategory === "all" ||
        product.category.trim().toLowerCase() === selectedCategory)
  );

  return (
    <section className="shop-product-section">
      <div className="shop-product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="shop-product-card">
            <div className="shop-product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <h3 className="shop-product-name">{product.name}</h3>

            <div className="shop-product-stars">
              {renderStars(product.star)}
            </div>

            <div className="shop-product-price">
              ${product.price.toFixed(2)} USD
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
