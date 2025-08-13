import React from "react";
import "./ProductListSection.css";

export default function ProductListSection({ product }) {
  return (
    <div className="product-list-bg">
      <section className="product-list-section">
        {product ? (
          <div className="product-detail">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Rating: {product.star}</p>
          </div>
        ) : (
          <p>No product data available.</p>
        )}
      </section>
    </div>
  );
}
