// ShoppingBasketSection.jsx
import React from "react";
import "./ShoppingBasketSection.css";
import { FaTimes } from "react-icons/fa";

export default function ShoppingBasketSection() {
  return (
    <section className="shopping-basket-section">
        <h2>Your Cart</h2>
      {/* Product Item */}
      <div className="basket-item">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/54/Iced_Tea_with_Lemon_and_Mint.jpg"
          alt="Tasty Mint Julep Cocktail"
          className="product-image"
        />
        <div className="product-info">
          <h3 className="product-name">Tasty Mint Julep Cocktail</h3>
          <p className="product-price">$ 10.00 USD</p>
        </div>
        <input
          type="number"
          min="1"
          defaultValue=""
          className="quantity-input"
        />
      </div>

      {/* Subtotal */}
      <div className="basket-subtotal">
        <span>Subtotal</span>
        <span className="subtotal-price">$ 40.00 USD</span>
      </div>

      {/* Checkout Button */}
      <button className="checkout-btn">Continue to Checkout</button>
    </section>
  );
}
