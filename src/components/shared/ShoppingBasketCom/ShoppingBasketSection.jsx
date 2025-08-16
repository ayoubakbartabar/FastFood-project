// ShoppingBasketSection.jsx
import React, { useContext } from "react";
import { CartContext } from "../../shared/CartContext/CartContext";
import "./ShoppingBasketSection.css";

export default function ShoppingBasketSection() {
  // Access cart context values
  const { cart, updateQuantity } = useContext(CartContext);

  // Calculate subtotal of all cart items
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="shopping-basket-section">
      {/* Header */}
      <div className="basket-header">
        <h2>Your Cart</h2>
      </div>

      {/* Show empty basket message */}
      {cart.length === 0 ? (
        <p className="empty-cart">Your basket is empty</p>
      ) : (
        <>
          {/* Render all cart items */}
          {cart.map((item) => (
            <div key={item.id} className="basket-item">
              {/* Product image */}
              <img
                src={item.image}
                alt={item.title}
                className="cart-product-image"
              />

              {/* Product info */}
              <div className="cart-product-info">
                <h3 className="cart-product-name">{item.title}</h3>
                <p className="cart-product-price">
                  ${item.price.toFixed(2)} <span className="currency">USD</span>
                </p>
              </div>

              {/* Quantity input (if 0 → product removed automatically) */}
              <input
                type="number"
                min="0"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, Number(e.target.value))
                }
                className="cart-quantity-input"
              />
            </div>
          ))}

          {/* Subtotal section */}
          <div className="basket-subtotal">
            <span className="subtotal-text">Subtotal</span>
            <span className="subtotal-price">${subtotal.toFixed(2)} USD</span>
          </div>

          {/* Checkout button */}
          <button className="checkout-btn">Continue to Checkout</button>
        </>
      )}
    </section>
  );
}
