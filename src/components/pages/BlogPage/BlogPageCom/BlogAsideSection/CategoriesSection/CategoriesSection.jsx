import React, { useRef } from "react";
import { FiChevronRight } from "react-icons/fi";
import "./CategoriesSection.css";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../../../../../shared/BlogContext/BlogContext";
import { useRevealOnScroll } from "../../../../../shared/useRevealOnScroll/useRevealOnScroll";


export default function CategoriesSection() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const { categories } = useBlog(); // Get unique categories from context

  // Handle category click -> navigate to category page
  const handleCategoriesBlog = (category) => {
    navigate(`/blog/category/${category}`, { state: { category } });
  };

  // Apply reveal-on-scroll animation
  useRevealOnScroll(sectionRef, ".category-item", 200);

  return (
    <aside className="categories-aside" ref={sectionRef}>
      <h3 className="categories-title">Categories</h3>
      <div className="categories-underline"></div>
      <ul className="categories-list">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleCategoriesBlog(category)}
            className="category-item"
          >
            <FiChevronRight className="category-icon" />
            <span>{category}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
