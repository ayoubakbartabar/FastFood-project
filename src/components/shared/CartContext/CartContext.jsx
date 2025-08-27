import React, { createContext, useReducer, useEffect, useMemo } from "react";

// Create Cart Context
export const CartContext = createContext();

// Get initial cart from localStorage
const initialState = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

// Reducer to handle cart actions
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      // Check if product already exists
      const existing = state.find((item) => item.id === action.product.id);
      if (existing) {
        // Increase quantity if it exists
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + action.quantity }
            : item
        );
      } else {
        // Add new product
        return [...state, { ...action.product, quantity: action.quantity }];
      }
    case "UPDATE":
      // Update quantity, remove if quantity <= 0
      return state
        .map((item) =>
          item.id === action.id ? { ...item, quantity: action.quantity } : item
        )
        .filter((item) => item.quantity > 0);
    case "REMOVE":
      // Remove a product
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], initialState);

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Cart actions
  const addToCart = (product, quantity = 1) =>
    dispatch({ type: "ADD", product, quantity });

  const updateQuantity = (id, quantity) =>
    dispatch({ type: "UPDATE", id, quantity });

  const removeFromCart = (id) => dispatch({ type: "REMOVE", id });

  // Memoized values for total items and total price
  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
