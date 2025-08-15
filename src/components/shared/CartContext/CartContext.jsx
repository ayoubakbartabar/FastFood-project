import React, { createContext, useState, useEffect } from "react";

// Create a Context for the shopping cart
export const CartContext = createContext();

export function CartProvider({ children }) {
  /**
   * Initialize the cart state.
   * - First, check if there is already a cart saved in localStorage.
   * - If yes, parse and return it.
   * - If not, start with an empty array.
   */
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  /**
   * Every time the cart changes, update localStorage
   * so the cart data persists after page refresh or browser close.
   */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /**
   * Add a product to the cart.
   * - If the product already exists in the cart, increase its quantity.
   * - If it's a new product, add it to the array.
   */
  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // Update quantity for existing product
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new product to cart
        return [...prev, { ...product, quantity }];
      }
    });
  };

  /**
   * Remove a product from the cart by its ID.
   */
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  /**
   * Provide cart state and actions to all components in the app.
   */
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
