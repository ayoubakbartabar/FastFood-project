import React from "react";
import { FiChevronRight } from "react-icons/fi";
import "./CategoriesSection.css";
import PopularPost from "../BlogAsideData";

// Extract unique categories
const uniqueCategories = [
  ...new Set(PopularPost.map((post) => post.categories.trim())),
];

export default function CategoriesSection() {
  return (
    <aside className="categories-aside">
      <h3 className="categories-title">Categories</h3>
      <div className="categories-underline"></div>
      <ul className="categories-list">
        {uniqueCategories.map((category, index) => (
          <li key={index} className="category-item">
            <FiChevronRight className="category-icon" />
            <span>{category}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
