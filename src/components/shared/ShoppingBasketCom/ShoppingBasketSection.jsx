import React, { useContext } from "react";
import { CartContext } from "../../shared/CartContext/CartContext";
import { FaTimes } from "react-icons/fa";
import "./ShoppingBasketSection.css";

export default function ShoppingBasketSection() {
  // Access cart data and removeFromCart method from CartContext
  const { cart, removeFromCart } = useContext(CartContext);

  // Calculate subtotal price of all items in the cart
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="shopping-basket-section">
      <h2>Your Cart</h2>

      {/* If cart is empty, display a message */}
      {cart.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        <>
          {/* Loop through cart items and display each product */}
          {cart.map((item) => (
            <div key={item.id} className="basket-item">
              {/* Product image */}
              <img
                src={item.image}
                alt={item.title}
                className="product-image"
              />

              {/* Product title and price */}
              <div className="product-info">
                <h3 className="product-name">{item.title}</h3>
                <p className="product-price">${item.price.toFixed(2)} USD</p>
              </div>

              {/* Quantity of the product (read-only for now) */}
              <input
                type="number"
                value={item.quantity}
                readOnly
                className="quantity-input"
              />

              {/* Remove button (X icon) to delete product from cart */}
              <FaTimes
                className="remove-icon"
                onClick={() => removeFromCart(item.id)}
              />
            </div>
          ))}

          {/* Display subtotal price */}
          <div className="basket-subtotal">
            <span>Subtotal</span>
            <span className="subtotal-price">${subtotal.toFixed(2)} USD</span>
          </div>

          {/* Checkout button */}
          <button className="checkout-btn">Continue to Checkout</button>
        </>
      )}
    </section>
  );
}
