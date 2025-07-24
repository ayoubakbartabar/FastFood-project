import React from "react";
import "./ShopAsideSection.css";
import { FaSearch } from "react-icons/fa";

const categories = [
  "Combo Meals",
  "Pasta",
  "Pizza",
  "Burger",
  "Sandwich",
  "Drinks",
  "Sides & Fries",
  "Kids’ Meals",
];

export default function ShopAsideSection() {
  return (
    <aside className="shop-aside">
      <div className="shop-search-box">
        <input type="text" placeholder="Search" className="shop-search-input" />
        <button className="shop-search-btn">
          <FaSearch />
        </button>
      </div>

      <div className="shop-categories-box">
        <h3 className="shop-categories-title">Categories</h3>
        <ul className="shop-categories-list">
          {categories.map((cat, i) => (
            <li key={i} className="shop-category-item">
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
