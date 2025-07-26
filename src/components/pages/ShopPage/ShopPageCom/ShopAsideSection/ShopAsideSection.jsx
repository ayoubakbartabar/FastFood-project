import React from "react";
import "./ShopAsideSection.css";
import ShopProductData from "../ShopProductData/ShopProductData";
import { FaSearch } from "react-icons/fa";

export default function ShopAsideSection() {
  // create const for set category
  const newCat = [
    ...new Set(
      ShopProductData.map((item) => item.category.trim().toLowerCase())
    ),
  ];
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
          {newCat.map((category, index) => (
            <li key={index} className="shop-category-item">
              {category}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
