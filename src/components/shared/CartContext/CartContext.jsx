import React, { createContext, useState, useEffect } from "react";

// Create Context for Cart
export const CartContext = createContext();

export function CartProvider({ children }) {
  // Load cart from localStorage or fallback to empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Persist cart in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add product to cart (if exists → increase quantity)
  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
  };

  // Update quantity (if <= 0 → remove product)
  const updateQuantity = (id, newQty) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
